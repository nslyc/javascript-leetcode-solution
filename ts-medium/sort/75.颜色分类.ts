/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 *
 * https://leetcode-cn.com/problems/sort-colors/description/
 *
 * algorithms
 * Medium (55.24%)
 * Likes:    541
 * Dislikes: 0
 * Total Accepted:    105.2K
 * Total Submissions: 190.4K
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 
 * 注意:
 * 不能使用代码库中的排序函数来解决这道题。
 * 
 * 示例:
 * 
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 * 
 * 进阶：
 * 
 * 
 * 一个直观的解决方案是使用计数排序的两趟扫描算法。
 * 首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 * 
 * 
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let a = 0;
    let c = nums.length - 1;
    for (let i = 0; i <= c; i++) {
        if (nums[i] === 2) {
            while (nums[c] === 2 && i < c) {
                c--;
            }
            [nums[i], nums[c]] = [nums[c], nums[i]];
            i--;
            c--;
        } else if (nums[i] === 0) {
            while (nums[a] === 0 && a < i) {
                a++;
            }
            [nums[i], nums[a]] = [nums[a], nums[i]];
            a++;
        }
    }
};
// @lc code=end

