/*
 * @lc app=leetcode.cn id=324 lang=typescript
 *
 * [324] 摆动排序 II
 *
 * https://leetcode-cn.com/problems/wiggle-sort-ii/description/
 *
 * algorithms
 * Medium (36.02%)
 * Likes:    174
 * Dislikes: 0
 * Total Accepted:    14.3K
 * Total Submissions: 39.8K
 * Testcase Example:  '[1,5,1,1,6,4]'
 *
 * 给定一个无序的数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。
 * 
 * 示例 1:
 * 
 * 输入: nums = [1, 5, 1, 1, 6, 4]
 * 输出: 一个可能的答案是 [1, 4, 1, 5, 1, 6]
 * 
 * 示例 2:
 * 
 * 输入: nums = [1, 3, 2, 2, 3, 1]
 * 输出: 一个可能的答案是 [2, 3, 1, 3, 1, 2]
 * 
 * 说明:
 * 你可以假设所有输入都会得到有效的结果。
 * 
 * 进阶:
 * 你能用 O(n) 时间复杂度和 / 或原地 O(1) 额外空间来实现吗？
 * 
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums: number[]): void {
    nums.sort((a, b) => a - b);
    let j = Math.ceil(nums.length / 2);
    let temp1 = nums.slice(0, j);
    let temp2 = nums.slice(j);
    for (let i = 0; i < temp1.length; i++) {
        nums[i * 2] = temp1[temp1.length - 1 - i];
    }
    for (let j = 0; j < temp2.length; j++) {
        nums[j * 2 + 1] = temp2[temp2.length - 1 - j];
    }
};
// @lc code=end

