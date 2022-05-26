/* eslint-disable react-hooks/exhaustive-deps */
import { Select, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import DateFormatter from "../../../util/dateFormat";

const Selector = ({ setCity, setData, city, setLoading }) => {
  const getWeather = async (latitude, longitude) => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lat=${latitude}&lon=${longitude}&appid=a7cd69f8caebc4a36987e283ce3b7f90`
    );
    const data = await api_call.json();
    const dailyData = data.list.filter((reading) => {
      return reading.dt_txt.includes("18:00:00");
    });

    setData(dailyData);
    setCity(data.city.name);
  };

  const getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const handleChangeCity = (e) => {
    return setCity(e.target.value);
  };
  useEffect(() => {
    setLoading(true);
    if (city === "") {
      getPosition()
        .then((position) => {
          getWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((err) => console.log(err.message));
      setLoading(false);
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=a7cd69f8caebc4a36987e283ce3b7f90`
      ).then((res) =>
        res
          .json()
          .then((result) => {
            const dailyData = result.list.filter((reading) => {
              return reading.dt_txt.includes("18:00:00");
            });
            setData(dailyData);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
          })
      );
    }
    setData();
  }, [city, setData, setLoading]);

  return (
    <Stack mt={5} alignItems="center" boxShadow="dark-lg" textColor="black">
      <Select
        id="box"
        fontWeight={"bold"}
        placeholder="Select option"
        value={city}
        onChange={handleChangeCity}
      >
        <option value="Michigan">Michigan</option>
        <option value="Tilburg">Tilburg</option>
        <option value="Rotterdam">Rotterdam</option>
        <option value="Miami">Miami</option>
        <option value="Buenos Aires">Buenos Aires</option>
      </Select>
    </Stack>
  );
};

export default Selector;
