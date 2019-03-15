const getQueryParams = require(".");

test("Expect string to parse queryParam", () => {
  expect(getQueryParams("?foo=bar").foo).toBe("bar");
});
