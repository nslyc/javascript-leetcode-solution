/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (39.16%)
 * Likes:    928
 * Dislikes: 0
 * Total Accepted:    211.1K
 * Total Submissions: 539K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 
 * 说明：
 * 
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 
 * 你能尝试使用一趟扫描实现吗？
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // 第一个指针先移动 n+1，这样两个指针的间隔为 n
    let dummy: ListNode = new ListNode();
    dummy.next = head;
    let first: ListNode | null = dummy;
    let second: ListNode | null = dummy;
    for (let i = 1; i <= n + 1; i++) {
        first = first!.next;
    }
    while (first != null) {
        first = first!.next;
        second = second!.next;
    }
    second!.next = second!.next!.next;
    return dummy.next;
};
// @lc code=end

