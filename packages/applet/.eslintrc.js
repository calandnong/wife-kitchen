module.exports = {
  globals: {
    NodeJS: 'readonly',
  },
  extends: [
    '@fastcoder/eslint-config-vue',
  ],
  plugins: [
    'filename-rules',
  ],
  // cjs文件环境设置为node,一般都是作为配置文件
  overrides: [
    {
      files: ['*.cjs'],
      env: {
        node: true,
      },
    },
  ],
  rules: {
    // vue用大驼峰 ts用烧烤串
    'filename-rules/match': [2, { '.ts': 'kebabcase' }],
    // 临时关闭，可以手动增加判断环境变量，防止log带到线上环境
    'no-console': 'off',
    // 统一 kebabcase
    'vue/multi-word-component-names': ['error', {
      ignores: ['index'],
    }],
  },
};
