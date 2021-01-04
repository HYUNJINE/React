const path = require("path");
module.exports = {
  name: "wordrelay-setting",
  mode: "development", //실서비스 : production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client.jsx"],
  }, //입력
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname + "/dist"),
    filename: "app.js",
  }, // 출력
};

// 목표는 app.js 라는 파일하나를 만들어서 html script 한줄에서 모두 실행하는것인데 jsx파일은 분리되어있다
// webpack 은 파일 내부에서 부르는거도 읽어서 다불러와줌
// 이미 다른데서 불러온것을 굳이또 넣을 필요없다
// 확장자도 쓸 필요없음
