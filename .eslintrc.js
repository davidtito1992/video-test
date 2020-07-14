module.exports = {
  root: true,
  extends: ['prettier', 'plugin:react/recommended', '@react-native-community'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
};
