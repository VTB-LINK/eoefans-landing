/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    node: true
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    // 属性默认值
    'vue/require-default-prop': 0,
    // 没有使用的组件
    'vue/no-unused-components': 0,
    // 没有使用的变量
    'vue/no-unused-vars': 0,
    // 组件单行最大属性数
    'vue/max-attributes-per-line': [
      0,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    // 单个标签内容换行
    'vue/singleline-html-element-content-newline': 'off',
    // 单个标签内容换行
    'vue/multiline-html-element-content-newline': 'off',
    // 组件命名 帕斯卡命名法
    // 'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 'off',
    // 属性顺序
    'vue/attributes-order': 1,
    // 未经初始化的词法绑定以及跨 case 语句访问被提升的函数
    'no-case-declarations': 1,
    // 在对象中使用getter/setter
    'accessor-pairs': 2,
    // 箭头函数的前后的空格
    'arrow-spacing': [
      0,
      {
        before: true,
        after: true
      }
    ],
    // 块的空格
    // 'block-spacing': [1, 'always'],
    // 大括号风格
    'brace-style': [
      0,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    // 强制驼峰法命名
    camelcase: [
      0,
      {
        properties: 'always'
      }
    ],
    // 对象字面量项尾不能有逗号
    // 'comma-dangle': [2, 'never'],
    // 逗号前后的空格
    'comma-spacing': [
      0,
      {
        before: false,
        after: true
      }
    ],
    // 逗号风格，换行时在行首还是行尾
    // 'comma-style': [2, 'last'],
    // 非派生类不能调用super，派生类必须调用super
    'constructor-super': 0,
    // 必须使用 if(){} 中的{}
    curly: [0, 'multi-line'],
    // 对象访问符的位置，换行的时候在行首还是行尾
    'dot-location': [0, 'property'],
    // 文件以单一的换行符结束
    // 'eol-last': 2,
    // 必须使用全等
    eqeqeq: [0, 'always', { null: 'ignore' }],
    // 生成器函数*的前后空格
    'generator-star-spacing': [
      0,
      {
        before: true,
        after: true
      }
    ],
    // nodejs 处理错误
    'handle-callback-err': [0, '^(err|error)$'],
    // 缩进风格
    // indent: [
    //   2,
    //   2,
    //   {
    //     SwitchCase: 1
    //   }
    // ],
    // jsx的引号
    // 'jsx-quotes': [2, 'prefer-single'],
    // 对象字面量中冒号的前后空格
    'key-spacing': [
      0,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': [
      0,
      {
        before: true,
        after: true
      }
    ],
    // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    // new时必须加小括号
    // 'new-parens': 2,
    // 禁止使用数组构造器
    'no-array-constructor': 2,
    // 禁止使用arguments.caller或arguments.callee
    'no-caller': 2,
    // 禁止使用console
    'no-console': 'off',
    // 禁止给类赋值
    'no-class-assign': 2,
    // 禁止在条件表达式中使用赋值语句
    'no-cond-assign': 2,
    // 禁止修改const声明的变量
    'no-const-assign': 2,
    // 禁止在正则表达式中使用控制字符
    'no-control-regex': 0,
    // 不能对var声明的变量使用delete操作符
    'no-delete-var': 2,
    // 函数参数不能重复
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-keys': 2,
    // switch中的case标签不能重复
    'no-duplicate-case': 2,
    // 内容不能为空
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    // 正则表达式中的[]内容不能为空
    'no-empty-character-class': 2,
    // 正则表达式不能为空
    'no-empty-pattern': 2,
    // 禁止使用eval
    'no-eval': 1,
    // 禁止给catch语句中的异常参数赋值
    'no-ex-assign': 2,
    // 禁止扩展native对象
    'no-extend-native': 2,
    // 禁止不必要的函数绑定
    'no-extra-bind': 2,
    // 禁止不必要的bool转换
    'no-extra-boolean-cast': 2,
    // 禁止非必要的括号
    // 'no-extra-parens': [2, 'functions'],
    // 禁止switch穿透
    'no-fallthrough': 2,
    // 禁止省略浮点数中的0 .5 3.
    'no-floating-decimal': 0,
    // 禁止重复的函数声明
    'no-func-assign': 2,
    // 禁止使用隐式eval
    'no-implied-eval': 2,
    // 禁止在块语句中使用声明（变量或函数）
    'no-inner-declarations': [2, 'functions'],
    // 禁止无效的正则表达式
    'no-invalid-regexp': 2,
    // 不能有不规则的空格
    'no-irregular-whitespace': 2,
    // 禁止使用__iterator__ 属性
    'no-iterator': 2,
    // label名不能与var声明的变量名相同
    'no-label-var': 2,
    // 禁止标签声明
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    // 禁止不必要的嵌套块
    'no-lone-blocks': 2,
    // 禁止混用tab和空格
    'no-mixed-spaces-and-tabs': 0,
    // 不能用多余的空格
    'no-multi-spaces': 0,
    // 字符串不能用\换行
    'no-multi-str': 2,
    // 空行最多不能超过2行
    // 'no-multiple-empty-lines': [
    //   2,
    //   {
    //     max: 1
    //   }
    // ],
    // 不能重写native对象
    'no-native-reassign': 2,
    // in 操作符的左边不能有!
    'no-negated-in-lhs': 2,
    // 禁止使用new Object()
    'no-new-object': 2,
    // 禁止使用new require
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    // 不能调用内置的全局对象，比如Math() JSON()
    'no-obj-calls': 2,
    // 禁止使用八进制数字
    'no-octal': 2,
    'no-octal-escape': 2,
    // node中不能使用__dirname或__filename做路径拼接
    'no-path-concat': 2,
    // 禁止使用__proto__属性
    'no-proto': 2,
    // 禁止重复声明变量
    'no-redeclare': 2,
    // 禁止在正则表达式字面量中使用多个空格 /foo bar/
    'no-regex-spaces': 2,
    // return 语句中不能有赋值表达式
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    // 不能比较自身
    'no-self-compare': 2,
    // 禁止使用逗号运算符
    'no-sequences': 0,
    // 严格模式中规定的限制标识符不能作为声明时的变量名使用
    'no-shadow-restricted-names': 2,
    // 函数调用时 函数名与()之间不能有空格
    // 'no-spaced-func': 2,
    // 禁止稀疏数组， [1,,2]
    'no-sparse-arrays': 2,
    // 在调用super()之前不能使用this或super
    'no-this-before-super': 2,
    // 禁止抛出字面量错误 throw "error"
    'no-throw-literal': 2,
    // 一行结束后面不要有空格
    'no-trailing-spaces': 0,
    // 不能有未定义的变量
    'no-undef': 2,
    // 变量初始化时不能直接给它赋值为undefined
    'no-undef-init': 2,
    // 避免多行表达式
    // 'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    'no-unneeded-ternary': [
      0,
      {
        defaultAssignment: false
      }
    ],
    // 不能有无法执行的代码
    'no-unreachable': 1,
    'no-unsafe-finally': 2,
    // 不能有声明后未被使用的变量或参数
    'no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    // 禁止不必要的call和apply
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    // 连续声明
    'one-var': [
      2,
      {
        initialized: 'never'
      }
    ],
    // 换行时运算符在行尾还是行首
    // 'operator-linebreak': [
    //   2,
    //   'after',
    //   {
    //     overrides: {
    //       '?': 'before',
    //       ':': 'before'
    //     }
    //   }
    // ],
    // 块语句内行首行尾是否要空行
    'padded-blocks': [0, 'never'],
    // 引号类型 `` "" ''
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    // 语句强制没有分号结尾
    // semi: [2, 'never'],
    // 分号前后空格
    'semi-spacing': [
      0,
      {
        before: false,
        after: true
      }
    ],
    // 不以新行开始的块{前面要不要有空格
    'space-before-blocks': [2, 'always'],
    // 函数定义时括号前面要不要有空格
    // 'space-before-function-paren': [
    //   'error',
    //   {
    //     anonymous: 'always',
    //     named: 'never',
    //     asyncArrow: 'never'
    //   }
    // ],
    // 小括号里面要不要有空格
    // 'space-in-parens': [2, 'never'],
    // 中缀操作符周围要不要有空格
    // 'space-infix-ops': 2,
    // 一元运算符的前/后要不要加空格
    // 'space-unary-ops': [
    //   2,
    //   {
    //     words: true,
    //     nonwords: false
    //   }
    // ],
    // 注释风格要不要有空格什么的
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }
    ],
    // 'template-curly-spacing': [2, 'never'],
    // 禁止比较时使用NaN，只能用isNaN()
    'use-isnan': 2,
    // 必须使用合法的typeof的值
    'valid-typeof': 2,
    // 立即执行函数表达式的小括号风格
    // 'wrap-iife': [2, 'any'],
    // 'yield-star-spacing': [2, 'both'],
    // 禁止尤达条件
    yoda: [2, 'never'],
    // 首选const
    'prefer-const': 0,
    // 禁止debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    // 大括号内是否允许不必要的空格
    // 'object-curly-spacing': [
    //   2,
    //   'always',
    //   {
    //     objectsInObjects: false
    //   }
    // ],
    // 是否允许非空数组里面有多余的空格
    // 'array-bracket-spacing': [2, 'never']
  }
}
