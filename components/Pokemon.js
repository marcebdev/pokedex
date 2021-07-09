import { Box, Heading } from "@chakra-ui/react";

const Pokemon = ({ pokemon }) => (
  <Box key={pokemon.id} boxShadow="md" borderRadius="md" p={2}>
    <Heading fontSize="2xl" textTransform="capitalize">
      {pokemon.name}
    </Heading>
    {pokemon.types.map(({ type }) => (
      <Box key={type.id} p={1}>
        {type.name}
      </Box>
    ))}
  </Box>
);

export default Pokemon;
