//Chakra
import { Stack, Button } from "@chakra-ui/react";
//Components
import SearchInput from "../Search/SearchInput/searchInput";
import Selector from "../Select/Selector/selector";

const Buttons = ({
  isSearch,
  setLoading,
  city,
  setData,
  setCity,
  setSearch,
}) => {
  const cleanInput = () => {
    if (isSearch) {
      // eslint-disable-next-line no-sequences
      return setSearch(false), setCity(""), setData();
    }
    // eslint-disable-next-line no-sequences
    return setSearch(true), setCity(""), setData();
  };
  return (
    <>
      {isSearch ? (
        <Stack>
          <Button
            colorScheme="blue"
            margin="auto"
            onClick={() => (isSearch ? cleanInput() : setSearch(true))}
          >
            Cambiar a selección
          </Button>
          <SearchInput
            setLoading={setLoading}
            city={city}
            setData={setData}
            setCity={setCity}
          />
        </Stack>
      ) : (
        <Stack>
          <Button
            colorScheme="blue"
            margin="auto"
            onClick={() => (!isSearch ? cleanInput() : setSearch(false))}
          >
            Cambiar a búsqueda
          </Button>
          <Stack alignItems="center" textAlign="center">
            <Selector
              setCity={setCity}
              setData={setData}
              city={city}
              setLoading={setLoading}
            />
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default Buttons;
