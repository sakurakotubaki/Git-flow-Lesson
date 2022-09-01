Promise.resolve()
.then(() => {
  new Promise((resolve) => {
    setTimeout(() => {
      let hogeValue = 1;
      hogeValue = "文字を代入できる型定義がないから!";
      console.log(hogeValue);
      let message = ["怖いですね〜😅", "怖いですね〜😅", "怖いですね〜😅"];
      message.forEach((e) => console.log(e));
      resolve();
    }, 1000);
  })
});
const messageLog = "1秒後にコールバックを実行する!";
console.log(`これはログです: ${messageLog}`);
