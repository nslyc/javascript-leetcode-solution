/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (66.55%)
 * Likes:    350
 * Dislikes: 0
 * Total Accepted:    154.6K
 * Total Submissions: 232.3K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [1,2,3]
 * 
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function preorderTraversal(root: TreeNode | null): number[] {
    const output: number[] = [];
    let cur = root;
    while (cur !== null) {
        if (cur.left === null) {
            output.push(cur.val);
            cur = cur.right;
        } else {
            let pre = cur.left;
            while (pre.right !== null && pre.right !== cur) {
                pre = pre.right;
            }
            if (pre.right === null) {
                output.push(cur.val);
                pre.right = cur;
                cur = cur.left;
            } else {
                pre.right = null;
                cur = cur.right;
            }
        }
    }
    return output;
};
// @lc code=end

