// Exercise #2: Loose Equality
// Start commenting here
0 == false;// true: 0 is falsy, so it is equal to false
null == undefined;// true: null and undefined are loosely equal
10 == "10";// true: string "10" is converted to number 10
[10] == 10;// true: array [10] is converted to string "10", then to number 10
[1,2] == "1,2";// true: array [1,2] is converted to string "1,2" 