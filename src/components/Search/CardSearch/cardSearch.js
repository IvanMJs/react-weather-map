//Chakra
import { Box, Image, Text } from "@chakra-ui/react";
import DateFormatter from "../../../util/dateFormat";

const CardSearch = ({ data }) => {
  return (
    <>
      {data &&
        data?.map((daily) => (
          <Box
            boxShadow="dark-lg"
            key={daily.dt}
            borderWidth="1px"
            borderRadius="lg"
            p={1}
          >
            <Box>
              <Text>{DateFormatter(daily)} </Text>
              <Box>
                <Image
                  src={`http://openweathermap.org/img/w/${daily.weather[0].icon}.png`}
                />
              </Box>
            </Box>
            <Text as="u">Temperatura: </Text>
            <Box>{daily.main?.temp}º</Box>
            <Text as="u">Humedad: </Text>
            <Box>{daily.main?.humidity} %</Box>
          </Box>
        ))}
    </>
  );
};
export default CardSearch;
