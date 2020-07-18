/*
 * @lc app=leetcode.cn id=874 lang=typescript
 *
 * [874] 模拟行走机器人
 *
 * https://leetcode-cn.com/problems/walking-robot-simulation/description/
 *
 * algorithms
 * Easy (36.28%)
 * Likes:    99
 * Dislikes: 0
 * Total Accepted:    9.4K
 * Total Submissions: 25.9K
 * Testcase Example:  '[4,-1,3]\n[]'
 *
 * 机器人在一个无限大小的网格上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令：
 * 
 * 
 * -2：向左转 90 度
 * -1：向右转 90 度
 * 1 <= x <= 9：向前移动 x 个单位长度
 * 
 * 
 * 在网格上有一些格子被视为障碍物。
 * 
 * 第 i 个障碍物位于网格点  (obstacles[i][0], obstacles[i][1])
 * 
 * 机器人无法走到障碍物上，它将会停留在障碍物的前一个网格方块上，但仍然可以继续该路线的其余部分。
 * 
 * 返回从原点到机器人所有经过的路径点（坐标为整数）的最大欧式距离的平方。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入: commands = [4,-1,3], obstacles = []
 * 输出: 25
 * 解释: 机器人将会到达 (3, 4)
 * 
 * 
 * 示例 2：
 * 
 * 输入: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
 * 输出: 65
 * 解释: 机器人在左转走到 (1, 8) 之前将被困在 (1, 4) 处
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= commands.length <= 10000
 * 0 <= obstacles.length <= 10000
 * -30000 <= obstacle[i][0] <= 30000
 * -30000 <= obstacle[i][1] <= 30000
 * 答案保证小于 2 ^ 31
 * 
 * 
 */

// @lc code=start

function robotSim(commands: number[], obstacles: number[][]): number {
    const dx: number[] = [0, 1, 0, -1];
    const dy: number[] = [1, 0, -1, 0];
    let d: number = 0;
    let [x, y] = [0, 0];
    let res = 0;
    for (let i = 0; i < commands.length; i++) {
        const c = commands[i];
        if (c === -2) {
            d = (d + 3) % 4;
        } else if (c === -1) {
            d = (d + 1) % 4;
        } else {
            wap: for (let i = 0; i < c; i++) {
                let nx = x + dx[d];
                let ny = y + dy[d];
                for (let o = 0; o < obstacles.length; o++) {
                    if (nx === obstacles[o][0] && ny === obstacles[o][1]) break wap;
                }
                x = nx;
                y = ny;
                res = Math.max(res, x ** 2 + y ** 2);
            }
        }
    }
    return res;
};
// @lc code=end

