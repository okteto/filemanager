module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/src/__mocks__/svgrMock.js',
  }
};