/*
 * @lc app=leetcode.cn id=1662 lang=typescript
 *
 * [1662] 检查两个字符串数组是否相等
 *
 * https://leetcode-cn.com/problems/check-if-two-string-arrays-are-equivalent/description/
 *
 * algorithms
 * Easy (86.52%)
 * Likes:    3
 * Dislikes: 0
 * Total Accepted:    4.8K
 * Total Submissions: 5.6K
 * Testcase Example:  '["ab", "c"]\n["a", "bc"]'
 *
 * 给你两个字符串数组 word1 和 word2 。如果两个数组表示的字符串相同，返回 true ；否则，返回 false 。
 * 
 * 数组表示的字符串 是由数组中的所有元素 按顺序 连接形成的字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：word1 = ["ab", "c"], word2 = ["a", "bc"]
 * 输出：true
 * 解释：
 * word1 表示的字符串为 "ab" + "c" -> "abc"
 * word2 表示的字符串为 "a" + "bc" -> "abc"
 * 两个字符串相同，返回 true
 * 
 * 示例 2：
 * 
 * 
 * 输入：word1 = ["a", "cb"], word2 = ["ab", "c"]
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 1 
 * word1[i] 和 word2[i] 由小写字母组成
 * 
 * 
 */

// @lc code=start
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  let w1 = '';
  let w2 = '';
  let i = 0;
  let j = 0;
  while (word1.length || word2.length) {
    if (!w1 && !w2) {
      w1 = word1.shift()!;
      w2 = word2.shift()!;
      i = 0;
      j = 0;
    } else if (!w1) {
      w1 = word1.shift()!;
      i = 0;
    } else {
      w2 = word2.shift()!;
      j = 0;
    }
    if (!w1 || !w2) return false;
    while (i < w1.length && j < w2.length) {
      if (w1[i] !== w2[j]) return false;
      i++;
      j++;
    }
    if (i === w1.length) w1 = '';
    if (j === w2.length) w2 = '';
  }
  return true;
};
// @lc code=end

