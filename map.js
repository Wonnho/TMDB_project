const arr1 = [1, 2, 3, 4, 5];

const arr = arr1.map((el) => {
  // let Arr=[];
  // Arr.append(parseInt(el));
});

console.log("Arr", arr1);

const memberList = [
  {
    name: "jun",

    age: 18,
  },

  {
    name: "alex",

    age: 28,
  },

  {
    name: "ken",

    age: 38,
  },
];

const names = memberList.filter((el) => el.age > 25).map((el) => el.name);

console.log(`member name list:${names}`);

let ageLists = [];
const ages = memberList.map((el) => {
  ageLists.push(el.age);
});
console.log(`member age range:${ageLists}`);
