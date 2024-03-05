const URL = 'https://restcountries.com/v3.1';

export async function getCountries() {
  const res = await fetch(`${URL}/all`);
  const data = await res.json();

  return data;
}

export async function getCountry(country) {
  const res = await fetch(`${URL}/name/${country}`);
  const data = await res.json();

  return data;
}
