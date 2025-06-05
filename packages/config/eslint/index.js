module.exports = {
    extends: [
        "eslint:recommended",
        "@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react", "react-hooks"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": "error",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
// This ESLint configuration is set up for a TypeScript project using React.

