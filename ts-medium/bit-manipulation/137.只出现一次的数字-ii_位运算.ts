/*
 * @lc app=leetcode.cn id=137 lang=typescript
 *
 * [137] 只出现一次的数字 II
 *
 * https://leetcode-cn.com/problems/single-number-ii/description/
 *
 * algorithms
 * Medium (67.78%)
 * Likes:    402
 * Dislikes: 0
 * Total Accepted:    38.8K
 * Total Submissions: 57.3K
 * Testcase Example:  '[2,2,3,2]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1:
 * 
 * 输入: [2,2,3,2]
 * 输出: 3
 * 
 * 
 * 示例 2:
 * 
 * 输入: [0,1,0,1,0,1,99]
 * 输出: 99
 * 
 */

// @lc code=start
function singleNumber(nums: number[]): number {
    let one = 0;
    let two = 0;
    for (let i = 0; i < nums.length; i++) {
        one = ~two & (one ^ nums[i]); // 状态1
        two = ~one & (two ^ nums[i]); // 状态2
    }
    return one;
};
// @lc code=end

