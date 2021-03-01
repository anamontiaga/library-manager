module.exports = { 
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "react", 
    "react-hooks",
    "import"
  ],
  "globals": {
    "window": true,
    "navigator": true,
    "fetch": true,
    "document": true,
    "it": true,
    "Feature": true,
    "Scenario": true,
    "actor": true,
    "expect": true,
    "FormData": true,
    "cy": true,
    "describe": true,
    "Cypress": true,
    "beforeEach": true
  },
  "settings": {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/resolver": {
      "node": {
        "paths": [
          "./src",
          "src"
        ]
      }
    }
  },
  "rules": {
    "import/no-unresolved": "off",
    "no-underscore-dangle": 0,
    "import/prefer-default-export": 0,
    "import/no-dynamic-require": 0,
    "global-require": 0,
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "import/order": ["warn", { 
      "groups": ["builtin", "external", "internal", "parent", "sibling"], 
      "alphabetize": {
        "order": "asc"
      },
      "pathGroups": [
        {
          "pattern": "react",
          "group": "builtin",
          "position": "before"
        }
      ],
      "pathGroupsExcludedImportTypes": ["builtin"]
    }]
  },
  "overrides": []
}