const hashMap = require("./hashMap");

const newHash = hashMap();

console.log(newHash.hash("name", "Jim"));
console.log(newHash.hash("age", 35));
console.log(newHash.hash("isAdult", true));
console.log(newHash.hash("occupation", "Sales Manager"));

newHash.set("name", "Jim");
newHash.set("age", "35");
newHash.set("occupation", "Sales Manager");
newHash.set("name", "Josh");
newHash.set("occupation", "Assistant Manager");
newHash.set("isAdult", true);

console.log(newHash.buckets[11].head);

console.log(newHash.get("name"));

console.log(newHash.has("height"));

// console.log(newHash.get("age"));
// console.log(newHash.remove("name"))
// console.log(newHash.get("name"));
// console.log(newHash.get("occupation"));

console.log(newHash.length());

// console.log(newHash.buckets[0].head);
// newHash.clear();
// console.log(newHash.length());

console.log(newHash.keys());
console.log(newHash.values());
console.log(newHash.entries());

// To trigger regrow()
newHash.set("hasFamily", true);
newHash.set("isMarried", true);
newHash.set("hobby", "Cricket");
newHash.set("partnerName", "Jane");
newHash.set("favoriteSport", "Hockey");
newHash.set("weight", "100kg");
newHash.set("race", "Asian");
newHash.set("location", "Japan");
newHash.set("temperature", "25°C");
newHash.set("currency", "Japanese Yen");
newHash.set("language", "Japanese");
newHash.set("capital", "Tokyo");
newHash.set("continent", "Asia");
newHash.set("population", "126 million");
newHash.set("currencyCode", "JPY");
newHash.set("famousFood", "Sushi");
newHash.set("timeZone", "JST (Japan Standard Time)");
newHash.set("flagColors", "Red and White");
newHash.set("islandCount", "6,852 islands");
newHash.set("emperor", "Emperor Naruhito");
newHash.set("highestMountain", "Mount Fuji");
newHash.set("nationalFlower", "Cherry Blossom");
newHash.set("traditionalDress", "Kimono");
newHash.set("majorCities", "Osaka, Kyoto, Hiroshima");
newHash.set("internetTLD", ".jp");
newHash.set("popularSport", "Sumo Wrestling");
newHash.set("nationalAnimal", "Green Pheasant");

console.log(newHash.get("nationalFlower"))


