

const fetchHits = async (query: string) => {
  const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
  return response.json();
};
