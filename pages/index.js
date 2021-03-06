import { useQuery } from "react-query";
import { gql, request } from "graphql-request";
import { SimpleGrid } from "@chakra-ui/react";

import PokemonCard from "../components/PokemonCard";

const useAllPokemon = () =>
  useQuery("allPokemon", async () => {
    const data = await request(
      "https://beta.pokeapi.co/graphql/v1beta",
      gql`
        query allPokemon {
          pokemon: pokemon_v2_pokemon(limit: 50) {
            id
            name

            types: pokemon_v2_pokemontypes {
              type: pokemon_v2_type {
                id
                name
              }
            }
          }
        }
      `,
    );

    return data;
  });

const IndexPage = () => {
  // const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useAllPokemon();

  if (isLoading) return "loading";
  if (isError) return <p>{{ error }}</p>;

  return (
    <div>
      <SimpleGrid minChildWidth="300px" spacing={6}>
        {data.pokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default IndexPage;
