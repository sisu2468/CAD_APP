module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    "nativewind/babel",
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          assets: "./src/assets",
          components: "./src/components/",
          screens: "./src/screens/",
        },
      },
    ],
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
    }],
  ],
};
