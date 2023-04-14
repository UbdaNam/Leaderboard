const getData = async (URL) => {
  const response = await fetch(URL);
  const result = await response.json();

  return result;
};

export default getData;