import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["projects/**/*"],
}, ...compat.extends(
    "plugin:@angular-eslint/recommended",
    "plugin:@angular-eslint/template/process-inline-templates",
    "plugin:prettier/recommended",
).map(config => ({
    ...config,
    files: ["**/*.ts"],
})), {
    files: ["**/*.ts"],

    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: ["tsconfig.json"],
            createDefaultProgram: true,
        },
    },

    rules: {
        "@angular-eslint/component-class-suffix": ["error", {
            suffixes: ["Page", "Component"],
        }],

        "@angular-eslint/component-selector": ["error", {
            type: "element",
            prefix: "app",
            style: "kebab-case",
        }],

        "@angular-eslint/directive-selector": ["error", {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
        }],

        "prettier/prettier": [
            "error",
            {endOfLine: "auto"}
        ],

        "@angular-eslint/use-lifecycle-interface": ["error"],
        "@typescript-eslint/member-ordering": 0,
        "@typescript-eslint/naming-convention": 0,
    },
}, ...compat.extends("plugin:@angular-eslint/template/recommended").map(config => ({
    ...config,
    files: ["**/*.html"],
})), {
    files: ["**/*.html"],
    rules: {},
}, ...compat.extends("plugin:prettier/recommended").map(config => ({
    ...config,
    files: ["**/*.html"],
    ignores: ["**/*inline-template-*.component.html"],
})), {
    files: ["**/*.html"],
    ignores: ["**/*inline-template-*.component.html"],

    rules: {
        "prettier/prettier": ["error", {
            parser: "angular",
        }],
    },
}];