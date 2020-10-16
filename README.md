# How to integrate stylelint into your project

## Get started 🚀

```bash
yarn add stylelint stylelint-order stylelint-config-standard
# or
npm install stylelint stylelint-order stylelint-config-standard --save-dev
```

## Create `stylelint.config.js` file 🌟

You can custom the rule for your teamwork rules.

```js
// basic rules
module.exports = {
  extends: 'stylelint-config-standard',
  ignoreFiles: ['**/*.js', '**/*.md'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin']
      }
    ],
    'no-empty-source': null,
    'rule-empty-line-before': 'never',
    'at-rule-empty-line-before': null,
    'no-missing-end-of-source-newline': null,
    'selector-list-comma-newline-after': null,
    'font-family-no-missing-generic-family-keyword': null,
    'indentation': 2,
    // ...
  }
}
```

## Reorder CSS Properties 💡

You might notice that there is a plugin named `stylelint order`.

As the name shows, it can use to reorder CSS Properties with the priority that you set.

So you can add rule just like that:

```js
rules: {
  "order/order": [
  "declarations",
  "custom-properties",
  "dollar-variables",
  "rules",
  "at-rules"
],
// According to Andy Ford "Order of the Day: CSS Properties"
// You can seprate CSS Properties into different group
"order/properties-order": [{
    groundName: "Display & Flow",
    emptyLineBefore: "never",
    properties: [
      "display",
      "visibility",
      "float",
      "clear",
    ]
  },
  {
    groundName: "Positioning",
    emptyLineBefore: "never",
    properties: [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "transform",
    ]
  },
  {
    groupName: "Flex",
    emptyLineBefore: "never",
    properties: [
      "flex",
      "flex-direction",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex-wrap",
      "justify-content",
      "align-items"
    ]
  },
  {
    groupName: "Dimensions",
    emptyLineBefore: "never",
    properties: [
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "overflow",
    ],
  },
  {
    groupName: "Margins, Padding, Borders, Outline",
    emptyLineBefore: "never",
    properties: [
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "border-radius",
      "border",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width",
      "border-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style",
      "border-color",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color",
      "outline",
      "list-style",
      "table-layout",
      "border-collapse",
      "border-spacing",
      "empty-cells",
    ],
  },
  {
    groundName: "Typographic Styles",
    emptyLineBefore: "never",
    properties: [
      "font",
      "font-family",
      "font-size",
      "line-height",
      "font-weight",
      "text-align",
      "text-indent",
      "text-transform",
      "text-decoration",
      "letter-spacing",
      "word-spacing",
      "white-space",
      "vertical-align",
      "color",
    ]
  },
  {
    groupName: "Backgrounds",
    emptyLineBefore: "never",
    properties: [
      "background",
      "background-color",
      "background-image",
      "background-repeat",
      "background-position",
    ]
  },
  {
    groundName: "Opacity, Cursors, Generated Content, Transition",
    emptyLineBefore: "never",
    properties: [
      "opacity",
      "cursor",
      "content",
      "quotes",
      "transition"
    ]
  },
  {
    ...
  }
]
}
```

## Run tasks 🛠️

```json
"scripts": {
  "lint": "npm run lint:vue && npm run lint:css",
  "lint:vue": "stylelint test/**/*.vue --fix",
  "lint:css": "stylelint test/**/*.less --custom-syntax ./node_modules/postcss-less --fix"
}
```

Here I use `postcss-less` syntax to lint less file.
If you need to lint less file, just type this in your terminal and it works.

```bash
npm install postcss
# or
yarn add postcss
```

## Using husky 🐶 

Additional, you can use husky to lint your code before git commit.

```json
// package.json
"husky": {
  "hooks": {
    "pre-commit": "npm run lint",
  }
},
```

Feel it better now ? Enjoy it :tada:

## License

MIT