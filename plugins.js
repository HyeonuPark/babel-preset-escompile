module.exports = {
  prefix: 'babel-plugin-',
  items: [
    {
      prefix: 'syntax-',
      items: [
        'jsx',
        'async-functions',
        'decorators',
        'exponentiation-operator',
        'function-bind',
        'object-rest-spread'
      ]
    },
    'dedent',
    {
      prefix: 'transform-',
      items: [
        'react-jsx',
        'strict-mode',
        'async-to-generator',
        'decorators',
        'exponentiation-operator',
        'function-bind',
        'object-rest-spread',
        {
          prefix: 'es2015-',
          items: [
            'template-literals',
            'literals',
            'function-name',
            'arrow-functions',
            'block-scoped-functions',
            'classes',
            'object-super',
            'shorthand-properties',
            'computed-properties',
            'for-of',
            'sticky-regex',
            'unicode-regex',
            'constants',
            'spread',
            'parameters',
            'destructuring',
            'block-scoping',
            'typeof-symbol',
            'modules-commonjs'
          ]
        },
        'regenerator'
      ]
    }
  ]
}
