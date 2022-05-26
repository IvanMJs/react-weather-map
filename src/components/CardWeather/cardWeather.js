import { useState } from "react";
//Chakra
import { Stack, Box, Grid, CircularProgress } from "@chakra-ui/react";
//Components
import Buttons from "../Buttons/buttons";
import CardSearch from "../Search/CardSearch/cardSearch";
import TitleCity from "../TitleCity/titleCity";
import useWindowSize from "../../hooks/useDeviceDetect";
import CardSelect from "../Select/CardSelect/cardSelect";

const CardWeather = () => {
  const [isLoading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const [isSearch, setSearch] = useState(false);

  const windowSize = useWindowSize();

  return (
    <Stack
      marginTop={10}
      alignItems="center"
      textColor={"white"}
      fontWeight={"bold"}
      pb={4}
    >
      <Buttons
        isSearch={isSearch}
        setLoading={setLoading}
        city={city}
        setData={setData}
        setCity={setCity}
        setSearch={setSearch}
      />
      <Box
        p={2}
        borderRadius="2xl"
        overflow="hidden"
        textAlign="-webkit-center"
        borderWidth="1px"
        boxShadow="dark-lg"
        id="box"
      >
        <TitleCity city={city} isSearch={isSearch} />
        {isLoading ? (
          <CircularProgress isIndeterminate color="green.300" />
        ) : (
          <Grid
            templateColumns={
              windowSize.width > 700 ? "repeat(5, 1fr)" : "repeat(2, 1fr)"
            }
            gap={6}
          >
            {isSearch ? <CardSearch data={data} /> : <CardSelect data={data} />}
          </Grid>
        )}
      </Box>
    </Stack>
  );
};

export default CardWeather;
