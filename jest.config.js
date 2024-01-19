const SRC_PATH = '<rootDir>/packages';

module.exports = {
  preset: 'ts-jest',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'src'],
  // setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
  modulePaths: ['<rootDir>'],
  roots: [SRC_PATH],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    "packages/*/src/**/*.ts",
  ],
};