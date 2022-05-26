import { Stack, Heading } from "@chakra-ui/react";
const TitleCity = ({ city, isSearch }) => {
  return (
    <Stack pb={"10%"} mt={"10%"}>
      <h2>Ciudad</h2>
      <Heading>
        {city === "" && isSearch
          ? "Por favor elija una ciudad"
          : city === "Ciudad no encontrada"
          ? "Perdón, no encontramos su ciudad"
          : city}
      </Heading>
    </Stack>
  );
};

export default TitleCity;
