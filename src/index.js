const { compose, fromPairs, map, split, tail } = require("ramda");

module.exports = queryString =>
  compose(
    fromPairs,
    map(split("=")),
    split("&"),
    tail
  )(queryString);
