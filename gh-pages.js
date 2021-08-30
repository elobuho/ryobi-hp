var ghpages = require("gh-pages");

var options = {
  repo: "https://github.com/elobuho/ryobi-hp-static.git",
};

ghpages.publish("dist/brand", options);
