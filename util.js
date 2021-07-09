export const colorPicker = (type) => {
  switch (type) {
    case "fire":
      return "orange.400";
    case "fighting":
      return "red.600";
    case "water":
      return "blue.400";
    case "flying":
      return "purple.200";
    case "grass":
      return "green.400";
    case "poison":
      return "purple.600";
    case "electric":
      return "yellow.400";
    case "rock":
      return "yellow.500";
    case "ice":
      return "blue.200";
    case "steel":
      return "gray.400";
    case "ground":
      return "yellow.600";
    case "psychic":
      return "red.400";
    case "bug":
      return "green.600";
    case "ghost":
      return "indigo.700";
    case "dark":
      return "yellow.800";
    case "dragon":
      return "purple.800";
    case "fairy":
      return "pink.400";
    default:
      return "gray.200";
  }
};
