module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
  collectCoverageFrom: [
    "src/services/**/*.ts",
    "src/validators/**/*.ts",
    "src/middlewares/**/*.ts"
  ]
};