/*
 * @lc app=leetcode.cn id=406 lang=typescript
 *
 * [406] 根据身高重建队列
 *
 * https://leetcode-cn.com/problems/queue-reconstruction-by-height/description/
 *
 * algorithms
 * Medium (67.23%)
 * Likes:    479
 * Dislikes: 0
 * Total Accepted:    43K
 * Total Submissions: 63.9K
 * Testcase Example:  '[[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]'
 *
 * 假设有打乱顺序的一群人站成一个队列。 每个人由一个整数对(h, k)表示，其中h是这个人的身高，k是排在这个人前面且身高大于或等于h的人数。
 * 编写一个算法来重建这个队列。
 * 
 * 注意：
 * 总人数少于1100人。
 * 
 * 示例
 * 
 * 
 * 输入:
 * [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
 * 
 * 输出:
 * [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
 * 
 * 
 */

// @lc code=start
function reconstructQueue(people: number[][]): number[][] {
    people.sort((a, b) => a[0] === b[0] ? (a[1] - b[1]) : (b[0] - a[0]));
    const res: number[][] = [];
    for (const p of people) {
        let [h, k] = p;
        res.splice(k, 0, p);
    }
    return res;
};
// @lc code=end

