/*
 * @lc app=leetcode.cn id=279 lang=typescript
 *
 * [279] 完全平方数
 *
 * https://leetcode-cn.com/problems/perfect-squares/description/
 *
 * algorithms
 * Medium (57.61%)
 * Likes:    572
 * Dislikes: 0
 * Total Accepted:    83.3K
 * Total Submissions: 144.6K
 * Testcase Example:  '12'
 *
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * 
 * 示例 1:
 * 
 * 输入: n = 12
 * 输出: 3 
 * 解释: 12 = 4 + 4 + 4.
 * 
 * 示例 2:
 * 
 * 输入: n = 13
 * 输出: 2
 * 解释: 13 = 4 + 9.
 * 
 */

// @lc code=start
function numSquares(n: number): number {
    const sqrts: number[] = [];
    for (let i = 1; i ** 2 <= n; i++) {
        sqrts[i] = i ** 2;
    }
    let queue: number[] = [n];
    let level = 0;
    while (queue.length) {
        level++;
        const nextQueue: number[] = [];
        for (const q of queue) {
            for (let i = 1; i < sqrts.length; i++) {
                if (sqrts[i] === q) return level;
                if (sqrts[i] > q) break;
                nextQueue.push(q - sqrts[i]);
            }
        }
        queue = nextQueue;
    }
    return level;
};
// @lc code=end

