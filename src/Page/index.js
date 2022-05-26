import { Heading } from "@chakra-ui/react";
import CardWeather from "../components/CardWeather/cardWeather";


function Page() {
  return (
    <>
      <Heading align="center">Clima App</Heading>
      <CardWeather />
    </>
  );
}

export default Page;