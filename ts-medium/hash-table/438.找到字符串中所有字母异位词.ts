/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (46.86%)
 * Likes:    381
 * Dislikes: 0
 * Total Accepted:    40.9K
 * Total Submissions: 87.3K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
 * 
 * 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 * 
 * 说明：
 * 
 * 
 * 字母异位词指字母相同，但排列不同的字符串。
 * 不考虑答案输出的顺序。
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入:
 * s: "cbaebabacd" p: "abc"
 * 
 * 输出:
 * [0, 6]
 * 
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入:
 * s: "abab" p: "ab"
 * 
 * 输出:
 * [0, 1, 2]
 * 
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
 * 
 * 
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
    const hashMap: number[] = Array.from({ length: 26 }, () => 0);
    for (const ch of p) {
        let idx = ch.charCodeAt(0) - 97;
        hashMap[idx]++;
    }
    let len = p.length;
    let cur = Array.from({ length: 26 }, () => 0);
    for (let i = 0; i < len; i++) {
        let idx = s.charCodeAt(i) - 97;
        cur[idx]++;
    }
    const res: number[] = [];
    if (cur.toString() === hashMap.toString()) res.push(0);
    for (let i = 1; i < s.length - len + 1; i++) {
        let pre = s.charCodeAt(i - 1) - 97;
        let next = s.charCodeAt(i + len - 1) - 97;
        cur[pre]--;
        cur[next]++;
        if (cur.toString() === hashMap.toString()) res.push(i);
    }
    return res;
};
// @lc code=end

