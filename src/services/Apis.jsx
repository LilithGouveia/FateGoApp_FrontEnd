export const fetchAllServants = async () => {
  const response = await fetch(
    `https://api.atlasacademy.io/basic/JP/servant/search?lang=en&rarity=0&rarity=1&rarity=2&rarity=3&rarity=4&rarity=5`
  );
  const result = await response.json();
  return result;
};