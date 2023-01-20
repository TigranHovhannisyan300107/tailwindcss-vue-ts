module.exports = {
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@t(.*)$': '<rootDir>/tests/$1',
  },
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: [
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,vue}', '!**/node_modules/**'],
};
