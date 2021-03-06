/*
 * @lc app=leetcode.cn id=535 lang=typescript
 *
 * [535] TinyURL 的加密与解密
 *
 * https://leetcode-cn.com/problems/encode-and-decode-tinyurl/description/
 *
 * algorithms
 * Medium (82.79%)
 * Likes:    97
 * Dislikes: 0
 * Total Accepted:    11K
 * Total Submissions: 13.3K
 * Testcase Example:  '"https://leetcode.com/problems/design-tinyurl"'
 *
 * TinyURL是一种URL简化服务， 比如：当你输入一个URL https://leetcode.com/problems/design-tinyurl
 * 时，它将返回一个简化的URL http://tinyurl.com/4e9iAk.
 * 
 * 要求：设计一个 TinyURL 的加密 encode 和解密 decode
 * 的方法。你的加密和解密算法如何设计和运作是没有限制的，你只需要保证一个URL可以被加密成一个TinyURL，并且这个TinyURL可以用解密方法恢复成原本的URL。
 * 
 */

// @lc code=start
const S = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const hashmap: Map<string, string> = new Map();

function getKey(): string {
  let key = '';
  for (let i = 0; i < 6; i++) {
    key += S[Math.floor(Math.random() * S.length)];
  }
  return key;
}
/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
  let key;
  do {
    key = getKey();
  } while (hashmap.has(key));
  hashmap.set(key, longUrl);
  return `http://tinyurl.com/${key}`;
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  let key = shortUrl.replace('http://tinyurl.com/', '');
  return hashmap.get(key) || '';
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
// @lc code=end

