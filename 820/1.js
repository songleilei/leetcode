/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    if (ele === "{" || ele === "[" || ele === "(") {
      stack.push(ele);
    } else {
      const t = stack[stack.length - 1];
      if (
        (t === "{" && ele === "}") ||
        (t === "[" && ele === "]") ||
        (t === "(" && ele === ")")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
