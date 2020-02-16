//GENERICS ALLOW YOU TO REUSE LOGIC BY PASSING TYPE ARGUMENTS

type numArray = Array<number>;

//

const last = <T>(arr: T[]) => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);

const l2 = last(["a", "b", "c"]);

//

const makeArr = <X, Y = number>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const v = makeArr(5, 6);
const v2 = makeArr("a", "b");
const v3 = makeArr<string | null, number>("a", 3);

//

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    fullName: obj.firstName + " " + obj.lastName,
    ...obj
  };
};

const v4 = makeFullName({ firstName: "Joe", lastName: "Dunn", age: 15 });
//const v5 = makeFullName({ another: "Joe", lastName: "Dunn", age: 15 }); // -> needs a constrained type

//

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type numberTab_long = {
  id: string;
  position: number;
  data: number;
};
type numberTab_short = Tab<number>;
type stringTab = Tab<string>;
