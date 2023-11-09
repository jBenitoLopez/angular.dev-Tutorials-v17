"use strict";

//Composing Types
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

let myBool = 0;
let windowStates: WindowStates = "closed";
let lockStates: LockStates = "LOCKED";
let positiveOddNumbersUnderTen: PositiveOddNumbersUnderTen = 7;

function getLength(obj: string | string[]) {
  return obj.length;
}

/*
    To learn the type of a variable, use typeof:

    Type	Predicate
    string	typeof s === "string"
    number	typeof n === "number"
    boolean	typeof b === "boolean"
    undefined	typeof undefined === "undefined"
    function	typeof f === "function"
    array	Array.isArray(a)
  */

// Generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

const stringArray: StringArray = ["Hello World"];
const numberArray: NumberArray = ["123"];
const objectWithNameArray: ObjectWithNameArray = [{ name: "World" }];

// declare your own types that use generics:
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);
//   Argument of type 'number' is not assignable to parameter of type 'string'.

//Structural Type System
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

const color = { hex: "#187ABF" };
logPoint(color);
// Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
//   Type '{ hex: string; }' is missing the following properties from type 'Point': x, y
