//2. Add Two Numbers

/*function ListNode(val, next) 
{
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


l1 = new ListNode(1,new ListNode(3,new ListNode(5,new ListNode(6,new ListNode(7)))));
l2 = new ListNode(2,new ListNode(4,new ListNode(5,new ListNode(6,new ListNode(7)))));

var addTwoNumbers = function(l1, l2) {

    resultList = new ListNode;
    resultListHead = resultList;
    let temp = 0;
    while(true)
    {
        resultList.val = (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0)  + temp;
        if(resultList.val >= 10)
        {
            temp = 1;
            resultList.val -= 10;
        }
        else {
            temp = 0;
        }

        if (l1 == null && l2 == null && temp ==0)
        {
            return resultListHead;
        }

        l1 = l1 != null && l1.next != null ? l1.next : null;
        l2 = l2 != null && l2.next != null ? l2.next : null;
        
        if(l1 != null || l2 != null || temp != 0)
        {
            resultList.next = new ListNode;
            resultList = resultList.next;
        }
        else{
            return resultListHead;
        }

    }
};

console.log(addTwoNumbers(l1,l2));*/

//3. Longest Substring Without Repeating Characters

let s = "tmmzuxt";

var lengthOfLongestSubstring = function(s) {
    
    if (!s.length)
    {
        return 0;
    }
    let counter = 0;
    let table = new Map;
    let maxSub = 1;
    let last = 0;

    for(let i = 0; i < s.length; i++)
    {
        if(!table.has(s[i]))
        {
            counter ++;
            table.set(s[i],i);
        }
        else   
        {
            if(table.get(s[i])>last)
            {
                last = table.get(s[i]);
            }
            counter = i - last;
            table.set(s[i],i);
        }
        maxSub = counter > maxSub ? counter : maxSub;
        //console.log(`s[i]=${s[i]},maxSub=${maxSub}, counter = ${counter}`,i)  
    }

    return maxSub;

};

console.log(lengthOfLongestSubstring(s));