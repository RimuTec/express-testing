import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
   rootDir: ".",
   preset: "ts-jest/presets/default-esm",
   testEnvironment: "node",
   testMatch: [
      '**/?(*.)+(micro|integration).[jt]s?(x)',
   ],
   testPathIgnorePatterns: [
      '/node_modules/',
      '/build/',
      '/tsoa-generated/',
      '/coverage/',
   ],
   collectCoverageFrom: [
      '**/*.ts',
      '!*.config.*',
      '!**/tsoa-generated/**/*.ts',
   ],
};

export default config;
