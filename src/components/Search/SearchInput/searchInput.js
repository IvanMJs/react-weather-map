import { Input, Button, Stack } from "@chakra-ui/react";

const SearchInput = ({ city, setData, setCity, setLoading }) => {
  const myRequest = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=a7cd69f8caebc4a36987e283ce3b7f90`;

  function handleChange(e) {
    e.preventDefault();
    setCity(e.target.value);
  }
  const onSearch = () => {
    setLoading(true);
    fetch(myRequest)
      .then((res) => {
        if (res.ok) {
          res.json().then((result) => {
            const dailyData = result.list.filter((reading) => {
              return reading.dt_txt.includes("18:00:00");
            });

            setData(dailyData);
            setLoading(false);
          });
        } else if (!res.ok) {
          return setCity("ciudad no encontrada"), setData(), setLoading(false);
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Stack>
        <Input
          id="box"
          fontWeight={"bold"}
          name="city"
          mt={5}
          width="auto"
          textAlign={"center"}
          placeholder="City"
          value={city}
          onChange={handleChange}
          boxShadow="dark-lg"
        />
        <Button
          disabled={city === "" ? true : false}
          colorScheme="blue"
          type="submit"
          onClick={onSearch}
        >
          Search
        </Button>
      </Stack>
    </form>
  );
};

export default SearchInput;
