module.exports = function (wallaby) {
  return {
    files: [
      "./src/**/*.js",
      "./jest.setup.js",
      { pattern: "/src/__tests__/**/*test.js", ignore: true },
    ],

    tests: ["/src/__tests__/**/*test.js"],

    env: {
      type: "node",
    },

    testFramework: "jest",

    compilers: {
      "**/*.js": wallaby.compilers.babel(),
    },
    // for node.js test you need to set env property as well
    // https://wallabyjs.com/docs/integration/node.html
  };
};
