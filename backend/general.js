// Create the function.
var htmlspecialchars = function (string) {
  // Our finalized string will start out as a copy of the initial string.
  var escapedString = string;
  htmlspecialchars.specialchars = [
    ["&", "&amp;"],
    ["<", "&lt;"],
    [">", "&gt;"],
    ['"', "&quot;"],
  ];
  // For each of the special characters,
  var len = htmlspecialchars.specialchars.length;
  for (var x = 0; x < len; x++) {
    // Replace all instances of the special character with its entity.
    escapedString = escapedString.replace(
      new RegExp(htmlspecialchars.specialchars[x][0], "g"),
      htmlspecialchars.specialchars[x][1]
    );
  }

  // Return the escaped string.
  return escapedString;
};

// A collection of special characters and their entities.

var htmlspecialchars_decode = function (string) {
  // Our finalized string will start out as a copy of the initial string.
  var unescapedString = string;
  htmlspecialchars_decode.specialchars = [
    ['"', "&quot;"],
    [">", "&gt;"],
    ["<", "&lt;"],
    ["&", "&amp;"],
  ];
  // For each of the special characters,
  var len = htmlspecialchars_decode.specialchars.length;
  for (var x = 0; x < len; x++) {
    // Replace all instances of the entity with the special character.
    unescapedString = unescapedString.replace(
      new RegExp(htmlspecialchars_decode.specialchars[x][1], "g"),
      htmlspecialchars_decode.specialchars[x][0]
    );
  }

  // Return the unescaped string.
  return unescapedString;
};

module.exports = { htmlspecialchars, htmlspecialchars_decode };
