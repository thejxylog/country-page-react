import { PAGE_SIZE } from '../utils/constants';

const URL = 'https://restcountries.com/v3.1';

export async function fetchCountries({ sort, regionAll, statusAll }) {
  const res = await fetch(`${URL}/all`);

  let filteredList = await res.json();

  ////////////////////////////////////
  // SORT
  if (sort === 'population')
    filteredList = filteredList.sort((a, b) => b.population - a.population);

  if (sort === 'alphabetical')
    filteredList = filteredList.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );

  if (sort === 'area')
    filteredList = filteredList.sort((a, b) => b.area - a.area);

  ////////////////////////////////////
  // FILTER
  if (!regionAll.length) filteredList;

  if (regionAll.length) {
    let temp = [];

    for (const region of regionAll) {
      temp = [
        ...temp,
        ...filteredList.filter(
          li => li.region.toLowerCase() === region.toLowerCase()
        ),
      ];
    }

    filteredList = temp;
  }

  ////////////////////////////////////
  // STATUS
  if (!statusAll.length) filteredList;

  if (statusAll.includes('unMember')) {
    let temp = [];
    temp = [...temp, ...filteredList.filter(li => li.unMember)];

    filteredList = temp;
  }

  if (statusAll.includes('independent')) {
    let temp = [];
    temp = [...temp, ...filteredList.filter(li => li.independent)];

    filteredList = temp;
  }

  return filteredList;
}

export async function getCountries({ sort, regionAll, statusAll, page }) {
  let data = await fetchCountries({ sort, regionAll, statusAll });

  ////////////////////////////////////
  // PAGE
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    data = data.slice(from, to);
  }

  return data;
}

export async function getCountry(country) {
  const res = await fetch(`${URL}/name/${country}`);
  const data = await res.json();

  return data;
}

export async function getListSize({ sort, regionAll, statusAll }) {
  let data = await fetchCountries({ sort, regionAll, statusAll });
  return data.length;
}
