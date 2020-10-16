module.exports = {
  "extends": "stylelint-config-standard",
  "ignoreFiles": [
    "**/*.js",
    "**/*.md"
  ],
  "plugins": [
    "stylelint-order"
  ],
  "rules": {
    "font-family-no-missing-generic-family-keyword": null,
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["function", "if", "each", "include", "mixin"]
      }
    ],
    "order/order": [
      "declarations",
      "custom-properties",
      "dollar-variables",
      "rules",
      "at-rules"
    ],
    // Change the order of properties
    // According to Andy Ford "Order of the Day: CSS Properties"
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
      }
    ],
    "no-empty-source": null,
    "rule-empty-line-before": "never",
    "at-rule-empty-line-before": null,
    "no-missing-end-of-source-newline": null,
    "selector-list-comma-newline-after": null,
    "indentation": 2,
    "number-leading-zero": "never",
    "string-quotes": "single",
    "declaration-block-trailing-semicolon": "always",
    "length-zero-no-unit": true,
    "declaration-empty-line-before": [
      "never",
      {
        ignore: ["after-declaration"]
      }
    ],
    "block-closing-brace-empty-line-before": ["never"],
    "max-empty-lines": 1,
    "no-eol-whitespace": true,
    "unit-case": "lower",
    "color-hex-case": "upper",
    "value-keyword-case": "lower",
    "function-name-case": "lower",
    "property-case": "lower",
    "at-rule-name-case": "lower",
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-element-case": "lower",
    "selector-type-case": "lower",
    "media-feature-name-case": "lower",
    "block-opening-brace-space-before": "always",
    "comment-whitespace-inside": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-block-semicolon-space-before": "never",
    "function-comma-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-combinator-space-after": "always",
    "selector-list-comma-space-after": "always",
    "selector-list-comma-space-before": "never",
    "selector-descendant-combinator-no-non-space": true,
    "value-list-comma-space-after": "always",
    "value-list-comma-space-before": "never",
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never"
  }
}