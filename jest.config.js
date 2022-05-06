module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist'],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/setupTests.ts',
  },
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/main.tsx',
    '!src/setupTests.tsx',
    '!src/**/*.stories.tsx',
  ],
  maxWorkers: '50%',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  modulePaths: ['<rootDir>/src'],
}
