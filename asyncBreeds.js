// asyncBreeds.js
const fs = require("fs");

const breedDetailsFromFile = function (breed, callback) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    callback(data);
    if (!error) return data;
  });
};

breedDetailsFromFile("Balinese", (data) => {
  console.log("Return Value: ", data);
});
