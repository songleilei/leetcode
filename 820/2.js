/**
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
  const nums = [];
  const stack = [];
  if (root) {
    stack.push(root);
  }
  while (stack.length) {
    const res = stack.pop();
    nums.push(res.val);
    if (res.right) {
      stack.push(res.right);
    }
    if (res.left) {
      stack.push(res.left);
    }
  }
  return nums;
};
