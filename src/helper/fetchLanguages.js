export const fetchLanguages = async () => {
  const url = `https://raw.githubusercontent.com/sebadio/Portfolio-React/main/src/json/language.json`;

  const response = await fetch(url);

  const data = await response.json();

  return data;
};
