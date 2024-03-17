  // Servidor


  
import React from "react";
import { getClient } from "./lib/client";
import { gql } from "@apollo/client";

async function loadData() {
  // Ejemplo de una Peticion a API con GraphQL
  const { data } = await getClient().query({
    query: gql`
      query {
        characters(page: 1 filter: {name: "rick"}) {
          results {
            id
            name
            image
          }
        }
      }
    `
  });

  return data.characters.results;
}

async function Page() {
  const characters = await loadData();
  return (

    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-gray-800  backdrop-blur-3xl  bg-opacity-50 flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto p-44  rounded-xl shadow-2xl ">
        <div className="grid grid-cols-3 gap-4 justify-center ">
          {characters.map(character => (
            <div key={character.id}>
              <h3 className="text-black text-center font-bold text-xl">
                {character.name}
              </h3>

              <img src={character.image} alt={character.image} className="my-8 rounded-full border-8 border-white" />

            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default Page;