$(document).ready(function () {
  understandingMath();
});

function drawTriangle(n) {
  // first, loop through the number of rows
  // initialize an empty string to hold the row's contents
  // loop through the number of columns
  // add a star to the row
  // print the row

  row = "";
  for (let i = 1; i <= n; i++) {
    for (let j = i; i <= n; i++) {
      row += "*";
      console.log(row);
    }
  }
}

function understandingBreakContinue() {
  for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // skip
    if (i === 4) break; // stop
    console.log(i);
  }
}

function understandingStringMethods() {
  originalString = "Hello my name name is James! ";
  console.log(originalString);

  replaceString = originalString.replace("James", "Cameron");
  console.log(replaceString);

  replaceAllString = originalString.replaceAll("name", "NAME");
  console.log(replaceAllString);

  toUpperCaseString = originalString.toUpperCase();
  console.log(toUpperCaseString);

  toLowerCaseString = originalString.toLowerCase();
  console.log(toLowerCaseString);

  originalStringWhitespace = "   hello.   my.   ";
  console.log(originalStringWhitespace);

  trimString = originalStringWhitespace.trim();
  console.log(trimString);

  trimStartString = originalStringWhitespace.trimStart();
  console.log(trimStartString);

  trimEndString = originalStringWhitespace.trimEnd();
  console.log(trimEndString);

  nonPaddedString = "james";
  console.log(nonPaddedString);

  padStartString = nonPaddedString.padStart(10, "+");
  //10 characters including original string +
  console.log(padStartString);

  padEndString = nonPaddedString.padEnd(10, "+");
  //10 characters including original string +
  console.log(padEndString);

  words = "element1-element2-element3";
  console.log(words.split("-"));
  something = [1, 2, 3, 4];
  console.log(something);
  // SPLIT MUST BE INCLUDED WITH A DELIMITER

  let str = "  Hello  ";
  console.log(str.trim()); // "Hello"
  console.log(str.padStart(10, "*")); // "*  Hello  "
  console.log(str.replace("H", "J")); // "  Jello  "

  let message = "  JavaScript is fun!  ";
  console.log(
    message.trim().toUpperCase().replace("FUN", "AWESOME").slice(0, 10),
  );
  console.log("JAVASCRIPT");

  let arr = ["a", "b", "c"];
  arr.push("d"); // add to end
  arr.pop(); // remove last
  arr.shift(); // remove first
  arr.unshift("z"); // add to start
  console.log(arr.length); // array size
  console.log(3);
  console.log(arr);
  console.log(["z", "b", "c"]);

  arr = [1, 2, 3];
  arr.unshift(0);
  console.log(arr);
  console.log([0, 1, 2, 3]);
  console.log(arr.length);
  console.log(4);
  console.log(arr.pop());
  console.log(3);
  console.log(arr);
  console.log([0, 1, 2]);

  let cars = [
    {
      type: "Volvo",
      year: 2016,
      color: "red",
      options: ["sunroof", "leather"],
    },
    { type: "Saab", year: 2001, color: "blue", options: ["navigation"] },
    {
      type: "BMW",
      year: 2010,
      color: "black",
      options: ["heated seats", "bluetooth"],
    },
  ];
  console.log(cars[1].options[0]);
  console.log("navigation");

  console.log(cars[0]["type"]);
  console.log("Volvo");
}

function understandingMath() {
  // round -> toward +infinity
  console.log(Math.round(4.5), 5); // 5
  console.log(Math.round(-4.5), -4); // -4
  console.log(Math.round(4.6), 5); // 5
  console.log(Math.round(-4.6), -5); // -5

  // ceil -> toward +infinity
  console.log(Math.ceil(4.2), 5); // 5
  console.log(Math.ceil(-4.2), -4); // -4
  console.log(Math.ceil(-4.9), -4); // -4

  // floor -> toward -infinity
  console.log(Math.floor(4.2), 4); // 4
  console.log(Math.floor(4.9), 4); // 4
  console.log(Math.floor(-4.9), -5); // 4
  console.log(Math.floor(-4.2), -5); // 4

  //trunc -> toward 0
  console.log(Math.trunc(4.9), 4); // 4
  console.log(Math.trunc(4.2), 4); // 4
  console.log(Math.trunc(-4.9), 4); // 4
  console.log(Math.trunc(-4.2), 4); // 4
}
/**
charAt(), charCodeAt()
slice(), substring(), substr() → extract parts.
split() → convert to array.
 */
