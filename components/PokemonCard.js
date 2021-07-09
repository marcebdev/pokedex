import Image from "next/image";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";

import { colorPicker } from "../util";

const Pokemon = ({ pokemon }) => (
  <Box key={pokemon.id} boxShadow="md" borderRadius="md" overflow="hidden">
    <Box
      w="full"
      height="200px"
      pos="relative"
      bgColor={colorPicker(pokemon.types[0].type.name)}
    >
      <Image
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
        alt={`Image of ${pokemon.name} Pokemon`}
        layout="fill"
        objectFit="contain"
        loading="lazy"
      />
    </Box>

    <Box as="section" py={4} px={6}>
      <Text color="gray.400" fontSize="2xl">
        #{String(pokemon.id).padStart(3, "0")}
      </Text>

      <Heading mt={4} fontSize="3xl" textTransform="capitalize">
        {pokemon.name}
      </Heading>

      <Text fontSize="lg" fontWeight="medium" my={2}>
        Types
      </Text>
      <HStack>
        {pokemon.types.map(({ type }) => (
          <Box
            key={type.id}
            px={3}
            py={2}
            boxShadow="sm"
            borderRadius="md"
            fontSize="lg"
            bgColor={colorPicker(type.name)}
          >
            {type.name}
          </Box>
        ))}
      </HStack>
    </Box>
  </Box>
);

export default Pokemon;
