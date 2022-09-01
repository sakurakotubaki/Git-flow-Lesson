let num: number = 0;
let text: string = "TypeScript";
let arr:string[] = ["TypeScriptを導入した", "型定義はいいぞ!", "カッコいい!"];
let list:Array<number> = [0, 1, 2, 3, 4, 5];
for (const value of arr) {
  console.log(value);
}
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
  if (list[i] === 4) {
    break;
  }
}
