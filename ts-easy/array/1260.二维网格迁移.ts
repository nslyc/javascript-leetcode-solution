/*
 * @lc app=leetcode.cn id=1260 lang=typescript
 *
 * [1260] 二维网格迁移
 *
 * https://leetcode-cn.com/problems/shift-2d-grid/description/
 *
 * algorithms
 * Easy (59.91%)
 * Likes:    27
 * Dislikes: 0
 * Total Accepted:    6.1K
 * Total Submissions: 10.2K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]\n1'
 *
 * 给你一个 m 行 n 列的二维网格 grid 和一个整数 k。你需要将 grid 迁移 k 次。
 * 
 * 每次「迁移」操作将会引发下述活动：
 * 
 * 
 * 位于 grid[i][j] 的元素将会移动到 grid[i][j + 1]。
 * 位于 grid[i][n - 1] 的元素将会移动到 grid[i + 1][0]。
 * 位于 grid[m - 1][n - 1] 的元素将会移动到 grid[0][0]。
 * 
 * 
 * 请你返回 k 次迁移操作后最终得到的 二维网格。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
 * 输出：[[9,1,2],[3,4,5],[6,7,8]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 输入：grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
 * 输出：[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
 * 
 * 
 * 示例 3：
 * 
 * 输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
 * 输出：[[1,2,3],[4,5,6],[7,8,9]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= grid.length <= 50
 * 1 <= grid[i].length <= 50
 * -1000 <= grid[i][j] <= 1000
 * 0 <= k <= 100
 * 
 * 
 */

// @lc code=start
function shiftGrid(grid: number[][], k: number): number[][] {
    while (k > 0) {
        move(grid);
        k--;
    }
    return grid;
};
function move(grid: number[][]): void {
    let r = grid.length - 1;
    let c = grid[0].length - 1;
    let last = grid[r][c];
    for (let i = r; i > 0; i--) {
        grid[i].pop();
        grid[i].unshift(grid[i - 1][c]);
    }
    grid[0].pop();
    grid[0].unshift(last);
}
// @lc code=end

