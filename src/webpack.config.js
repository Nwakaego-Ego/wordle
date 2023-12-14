module.exports = {
  // ... other webpack configuration ...

  module: {
    rules: [
      // ... other rules ...

      // Add this rule for text files
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
    ],
  },
};
