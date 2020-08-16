/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (69.05%)
 * Likes:    760
 * Dislikes: 0
 * Total Accepted:    80.1K
 * Total Submissions: 116K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: 5
 * 解释:
 * 给定 n = 3, 一共有 5 种不同结构的二叉搜索树:
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 * 
 */

// @lc code=start
function numTrees(n: number): number {
    if (n === 0) return 0;
    const dp: number[] = [1];
    // 长度 1~n
    for (let len = 1; len <= n; len++) {
        let count = 0;
        // 当前长度第 i 个作为根节点
        for (let i = 1; i <= len; i++) {
            // 根节点左子节点和右子节点的情况总数
            let left = dp[i - 1];
            let right = dp[len - i];
            count += left * right;
        }
        dp[len] = count;
    }
    return dp[n];
};
// @lc code=end

