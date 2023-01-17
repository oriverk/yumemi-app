# react-ts

## packages

- [Vite | Next Generation Frontend Tooling](https://vitejs.dev/)
- linter
  - [Find and fix problems in your JavaScript code - ESLint - Pluggable JavaScript Linter](https://eslint.org/)
  - [Prettier · Opinionated Code Formatter](https://prettier.io/)
  - [Home | Stylelint](https://stylelint.io/)
- test
  - [Vitest | A blazing fast unit test framework powered by Vite](https://vitest.dev/)

## procedure

```sh
npm create vite@latest react-ts -- --template react-ts
```

```sh
npm i -D eslint prettier stylelint stylelint-config-standard stylelint-config-prettier
npm init @eslint/config
# -> standard-with-typescript
```

```sh
npm i -D vitest @vitest/ui jsdom @testing-library/{react,jest-dom}
```
