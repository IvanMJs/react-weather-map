const DateFormatter = (daily) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const dateDaily = daily.dt_txt.split(" ")[0];
  const mydate = new Date(dateDaily);
  const dateFromatter = mydate.toLocaleDateString("es-AR", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return capitalize(dateFromatter);
};

export default DateFormatter;
