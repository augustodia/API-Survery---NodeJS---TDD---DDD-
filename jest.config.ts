export default {
  roots: ["<rootDir>/src"],
  clearMocks: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
