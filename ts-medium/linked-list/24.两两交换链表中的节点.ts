/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (66.31%)
 * Likes:    580
 * Dislikes: 0
 * Total Accepted:    134.7K
 * Total Submissions: 203K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 * 
 * 示例:
 * 
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    if (head === null) return head;
    const list: ListNode[] = [];
    let cur: ListNode | null = head;
    while (cur) {
        list.push(cur);
        cur = cur.next;
    }
    let dummy = new ListNode();
    dummy.next = head;
    cur = dummy;
    for (let i = 0; i < list.length; i += 2) {
        let pre = list[i];
        let next = list[i + 1];
        if (next != null) {
            let temp = next.next;
            next.next = pre;
            cur.next = next;
            pre.next = temp;
            cur = pre;
        }
    }
    return dummy.next;
};
// @lc code=end

