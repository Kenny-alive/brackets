// Implement function `check(str, bracketsConfig)`, that for given brackets sequence will return `true` if it is correct and `false` otherwise

// In the second param there is `bracketsConfig` - the array of pairs open-closed brackets. Each subarray includes only 2 elements - opening and closing bracket

// ```js
// check('()', [['(', ')']]) // -> true
// check('((()))()', [['(', ')']]) // -> true
// check('())(', [['(', ')']]) // -> false
// check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
// check('[(])', [['(', ')'], ['[', ']']]) // -> false
// check('[]()', [['(', ')'], ['[', ']']]) // -> true
// check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// // special case: opening and closing bracket can be the same :)

// check('||', [['|', '|']]) // -> true
// check('|()|', [['(', ')'], ['|', '|']]) // -> true
// check('|(|)', [['(', ')'], ['|', '|']]) // -> false
// check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true



module.exports = function check(str, bracketsConfig) {
  // // console.log("🚀 ~ check ~ str:", str)
  // // console.log("🚀 ~ check ~ bracketsConfig:", bracketsConfig)
  const fullBracketsConfig = bracketsConfig.map((item) => {
    return item[0] + item[1];
  });
  console.log("🚀 ~ fullBracketsConfig ~ fullBracketsConfig:", fullBracketsConfig)
  let lengthStr = str.length;
  while (lengthStr) {
    fullBracketsConfig.forEach((item) => {
      str = str.replaceAll(item, "");
      // console.log("🚀 ~ fullBracketsConfig.forEach ~ str:", str)
    });
    if (str.length === lengthStr) {
      // console.log("🚀 ~ check ~ lengthStr:", lengthStr)
      // console.log("🚀 ~ check ~ str.length:", str.length)
      return false;
    }
    lengthStr = str.length;
    // console.log("🚀 ~ check ~ str.length:", str.length)
    // console.log("🚀 ~ check ~ lengthStr:", lengthStr)
  }
  return true;
}

// check('()', [['(', ')']]);
// check('|(|)', [['(', ')'], ['|', '|']])
// check('())(', [['(', ')']])
