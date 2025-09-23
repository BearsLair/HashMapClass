import { Hashmap } from "./HashMapClass.js";

let test = new Hashmap(0.75, 16); // Max buckets 16 intially

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// test.set("poodle", "pink");
// test.set("watson", "brown");
// test.set("tiger", "orange");
// test.set("mouse", "grey");
// test.set("bigfoot", "black");
// test.set("spider", "black");
// test.set("monkey", "black");
// test.set("moon", "silver");

test.set("apple", "green");
test.entries();
