/* 
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function mergeTwoLists(list1, list2) {
  if (!list1) return list2;
  else if (!list2) return list1;
  else if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}

// const list1 = new ListNode([1, 2, 4]);
// const list2 = new ListNode([1, 3, 4]);

let list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
let list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };

// console.log(mergeTwoLists(list1, list2));

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#mergeTwoLists", () => {
    it("should return [1,1,2,3,4,4]", () => {
      let list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
      let list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
      expect(mergeTwoLists(list1, list2)).toEqual({
        val: 1,
        next: {
          val: 1,
          next: {
            val: 2,
            next: { val: 3, next: { val: 4, next: { val: 4, next: null } } },
          },
        },
      });
    });
  });
}
