let myName = "Matthew"; // inferred
const yourName: string = "Not Matthew"; // explicit

let myNum: number = 42;
let myBool: boolean = false;

let myArr = [];
let myNewArr: string[] = ['cat', 'dog', 'fish'];
let myNumArr: number[] = [1, 2, 3, 4];

let myMixedArr: (string | number | boolean)[] = ['shannon', 'cat', 42];
let myOtherMixedArr: BoolStrNum[];
let oneMoreMixedArr: Array<string | number> = ["shannon", "veronica", "matthew", 33];

type BoolStrNum = boolean | string | number;
// const first = <string>myMixedArr[0]; // used to tell typescript what datatype this thing is
const first = myMixedArr[0] as string; // used to tell typescript what datatype this thing is



