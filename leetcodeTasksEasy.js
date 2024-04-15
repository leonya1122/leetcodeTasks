//1.two summ

/*
let nums = [5,1,6,7,9,12,48];
let target =49;
var twoSum = function(nums, target) 
{
    for (let x=0; x<nums.length; x++)
    {
        let summ = nums[x];
        for (let y=x+1; y<nums.length; y++)
        {
            
            summ=nums[x]+nums[y];
            if (summ == target)
            {
                return [x,y];
            }
        }
    }
}
*/

//9. Palindrome Number
/*let x = 1221;
var isPalindrome = function(x) 
{
    let array = (""+x).split("").map(Number)
    for(let i=0;i<array.length/2;i++)
    {
        if(array[i]!=array[array.length-i-1])
        {
            return false;
        }
    }
    return true;

};
console.log(isPalindrome(x));
*/



//13.Roman to int
/*let s = "LVIII"

var romanToInt = function(s) 
{
    objRom =
    {
        I       :     1,
        V       :     5,
        X       :     10,
        L       :     50,
        C       :     100,
        D       :     500,
        M       :     1000
    }
    let result=0;
    for (let i=0; i<s.length; i++)
    {
        if (objRom[s[i]]<objRom[s[i+1]])
        {
            result-=objRom[s[i]];
        }
        else
        {
            result+=objRom[s[i]];
        }
    }
    return result;
};
console.log("🚀 ~ file: leetcodeTasks.js:74 ~ romanToInt(s):", romanToInt(s))*/


//14. Longest Common Prefix
/*strs = ["flower","flow","flight"]
var longestCommonPrefix = function(strs) 
{
    let pref = "";
    let first = strs[0];

    for (let x=0; x<first.length; x++)
    {
        let letter = first[x];

        for (let i=1;i<strs.length;i++)
        {

            if (!(strs[i][x]==letter))
            {
                return pref;
            }
        }
        pref+=letter;
    }
    return pref;
    
}

console.log("🚀 ~ file: leetcodeTasks.js:86 ~ longestCommonPrefix(strs):", longestCommonPrefix(strs));*/


//20. Valid Parentheses

/*let s = "{}"

var isValid = function(s) 
{
    obj = {
        "{":"f",
        "[":"s",
        "(":"r",
        "}":"f",
        "]":"s",
        ")":"r"
    }

    let consist = [];
    for (let i of s)
    {
        if ((i!=")")&(i!="]")&(i!="}"))
        {
            
            consist.push(obj[i]);
        }
        else
        {
            if(obj[i]!=consist[consist.length-1])
            {
                return false;
            }
            else
            {
                consist.pop();
            }
        }
    }
    return consist.length?false:true;
    

};

console.log("result",isValid(s));*/


//21. Merge Two Sorted Lists


/*function ListNode(val, next) 
{
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


list1 = new ListNode(1,new ListNode(3,new ListNode(5,new ListNode(6,new ListNode(7)))));
list2 = new ListNode(2,new ListNode(4));

//console.log(list1.next.val);
//console.log(list2);

var mergeTwoLists = function(list1, list2) 
{   
    
    resultList = new ListNode;
    let headOfResultList = resultList;

    while(true)
    {
        //console.log("begin   ",resultList)
        if ((list1==null)&&(list2==null))
        {
            //console.log("1end   ",headOfResultList)
            return headOfResultList.next;
        }
        else if(list1==null)
        {
            resultList.next = list2;
            //console.log("2end   ",headOfResultList)
            return headOfResultList.next;
        }
        else if(list2==null)
        {
            resultList.next = list1;
            //console.log("3end   ",headOfResultList)
            return headOfResultList.next;
        }
        else if(list1.val<list2.val)
        {
            resultList.next = list1;
            list1 = list1.next;
            resultList = resultList.next;
        }
        else
        {
            resultList.next = list2;
            list2 = list2.next;
            resultList = resultList.next;
        }
       


    }
    
};

mergeTwoLists(list1,list2);*/



//26. Remove Duplicates from Sorted Array
/*
let nums = [1,1,2,2,3,5,7,7,7,8,9,9,9,9,0];
var removeDuplicates = function(nums) 
{
    let k = 1;
    for (let i = 1;i<nums.length;i++)
    {
        if (nums[i] != nums[i-1])
        {
            nums[k]= nums[i];
            k++;
        }
      
    }
    return k; 

};

console.log(removeDuplicates(nums));
console.log(nums);*/


//27. Remove Element

/*let nums = [1,1,2,2,3,5,7,7,7,8,9,9,9,9,0];
let val = 7;

var removeElement = function(nums, val) 
{
   
    let k = 0;
    for (let i = 0;i<nums.length;i++)
    {
        if (nums[i] != val)
        {
            nums[k]= nums[i];
            k++;
        }
      
    }
    return k; 
};

console.log('k --->', removeElement(nums,val));
console.log("nums ---->", nums);*/


//28. Find the Index of the First Occurrence in a String


/*let haystack ="leetcode";
let needle = "etc";


var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
  };


console.log(strStr(haystack,needle));*/


//35. Search Insert Position

/*let nums = [1,3,5,6];
let target = 7;
var searchInsert = function(nums, target) 
{
    let i;
    for(i=0; i<nums.length;i++)
    {
        if(nums[i] == target)
        {
            return i;
        }
        else if (nums[i]>target)
        {
            return i;
        }
    }
    return i;
};

console.log(searchInsert(nums,target));*/


//58. Length of Last Word
 
/*let s = "  a safdsaf safdsaf  fds   ";
var lengthOfLastWord = function(s) 
{
    /*let counter =0;
    let spaceNum = 0;
    for (let i=s.length-1; i>=0; i--)
    {
        
        if(s[i]!=" " && counter == 0)
        {
            spaceNum = s.length-i-1;
            counter++;
        }
        console.log(spaceNum," ",i," ")
        if (s[i] == " " && counter!=0)
        {
            return (s.length-i-1-spaceNum);
        }
    }
    return s.length-spaceNum;
    //return s.split(" ").filter(x=>x!='').slice(-1)[0].length; более компактное решение
};

console.log(lengthOfLastWord(s));*/


//66. Plus One

/*let digits  = [1,2,3];
let digits1 = [9,9,9];

var plusOne = function(digits) 
{
    for(let i=(digits.length-1);i>=0;i--)
    {
        digits[i]++;
        if(digits[i]!=10)
        {
            return digits;
        }
        digits[i]=0;
        if(i==0)
        {
            digits.unshift(1);
            return digits;
        }
    }
       
};


console.log(plusOne(digits));*/



//67. Add Binary
/*let a = '11';
let b = '1';

var addBinary = function(a, b) 
{
    
    let big = ((a.length>=b.length) ? a : b);
    let small = ((a.length>=b.length) ? b : a);
    let result = "";
    let um = 0;

    for (let i = big.length-1, j = small.length-1; i>=0; i--, j--)
    {
        if (j>=0)
        {
            smallVal = Number(small[j]);
        }
        else
        {
            smallVal = 0;
        }

        let s = Number(big[i])+ smallVal + um;

        if (s==3)
        {
            result = "1" + result;
            um = 1;
            continue;
        }
        else if (s==2)
        {
            result = "0" + result;
            um = 1;
            continue;
        }
        

        result = s.toString() + result; 
        um = 0;    
    }

    if (um == 1)
    {
        result ="1" + result;
    }
    
    return result;
};


console.log(addBinary(a,b));*/


//69. Sqrt(x)

/*let x = 63;

var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x));
};

console.log(mySqrt(x));*/


//70. Climbing Stairs

/*let n =5;

let factorial = (x)=>
{ 
    let fact = 1;
    for (let i = 1; i<=x; i++)
    {
        fact = fact * i;
    }
    return fact;
}

var climbStairs = function(n) 
{
    let kol2 = Math.floor(n/2);
    let summ = 0;
    let slag = 2;

    for (let i = 1; i<kol2; i++)
    {
        let promSumm = 1;
        for(let j =0; j<=i; j++)
        {
            promSumm = promSumm * (n - slag -j);
        }
        summ = summ + (promSumm/(factorial(i+1)));
        slag ++;
    }
    summ = summ + n;
    return summ;
};


console.log(climbStairs(n));*/


//83. Remove Duplicates from Sorted List


/*function ListNode(val, next) 
{
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


head = new ListNode(1,new ListNode(1,new ListNode(3,new ListNode(3))));

var deleteDuplicates = function(head) 
{
    if (head.val == undefined)
    {
        return head;
    }
    resultList = new ListNode;
    

    let prevVal = head.val;
    resultList = head;
    let headOfResultList = resultList;
    head = head.next;

    while (head != undefined )
    {
        console.log(head.val);
        console.log(prevVal);

        if(head.val != prevVal)
        {
            resultList.next = head;
            console.log("!!");
            
            resultList = resultList.next;
        }

        prevVal = head.val;
        head = head.next;

    }
    resultList.next = null;
    return headOfResultList;
}

console.log(deleteDuplicates(head))*/


//88. Merge Sorted Array

/*let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
let m = 3, n =3;

var merge = function(nums1, m, nums2, n) 
{
    let c1=0 ,c2 = 0;
    let m1 = m;
    for (let i = 0; i < m+n; i++)
    {

        if ((nums1[c1] <= nums2[c2] && c1 < m1) || nums2[c2]==undefined)
        {
            c1++;
        }
        else
        {
            nums1.splice(i,0,nums2[c2])
            c2++;
            c1++;
            m1++;
        }

    }
    nums1.splice(n+m,201)
}

merge(nums1, m, nums2, n);
console.log(nums1);*/


//94. Binary Tree Inorder Traversal

/*function TreeNode(val, left, right) 
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1,new TreeNode(4, null, new TreeNode(5,null,null)), new TreeNode(2,new TreeNode(3,null,null), null));
//let root = new TreeNode(1,null,null);

let inorderRec = (node) => {
    if (node == null)
    {
        return;
    }
    inorderRec(node.left);
    r.push(node.val);
    inorderRec(node.right);
    return r;
}

let r = [];
var inorderTraversal = function(root)
{
    r = [];
    if (root == null)
    {
        return [];
    }
   return inorderRec(root); 
}


console.log(inorderTraversal(root));*/


//100. Same tree
/*
var isSameTree = function(p, q) {
    return JSON.stringify(p) === JSON.stringify(q)
};

*/


//101. Symmetric Tree

/*function TreeNode(val, left, right) 
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1,new TreeNode(2, new TreeNode(2,null,null),null), new TreeNode(2,new TreeNode(2,null,null),null));


let inorderRecLeft = (node) => {
    if (node == null)
    {
        return;
    }
    inorderRecLeft(node.left);
    resL.push(node.val);
    inorderRecLeft(node.right);
    resL.push(null)
}

let inorderRecRight = (node) => {
    if (node == null)
    {
        return;
    }
    inorderRecRight(node.right);
    resR.push(node.val);
    inorderRecRight(node.left);
    resR.push(null)
    
}


var isSymmetric = function(root) 
{
    resR = [];
    resL = [];
    inorderRecLeft(root.left);
    inorderRecRight(root.right);
    return (resL.toString() == resR.toString());
}

console.log(isSymmetric(root));*/

 
//104. Maximum Depth of Binary Tree

/*function TreeNode(val, left, right) 
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

//let root = new TreeNode(1,new TreeNode(4, null, new TreeNode(5,null,null)), new TreeNode(2,new TreeNode(3,null,null), null));
//let root = new TreeNode (0,null,null);
let root = new TreeNode(1,new TreeNode(2, null, null),null);

let inorderRec = (node) => 
{
    
    if (node == null)
    {
        return 0;
    }

    let lDepth = inorderRec(node.left);
    let rDepth = inorderRec(node.right);

    if (lDepth > rDepth)
        {
            return (lDepth + 1);
        }
    else
        {
            return (rDepth + 1);
        }        
}

 
var maxDepth = function(root) 
{
    depth = 1;
    max_depth = 0;
    if (root == null)
    {
        return 0;
    }
    if (root.left == null && root.right == null)
    {
        return 1;
    }
   return inorderRec(root); 
}


console.log("maxDepth = " , maxDepth(root))*/

//108. Convert Sorted Array to Binary Search Tree

/*function TreeNode(val, left, right) 
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let nums = [-10,-3,0,5,9]

let makeTree = (nums, beg, end) =>
{
    if (beg > end)
    {
        return null;
    }

    let midC = Math.floor((end+beg)/2);
    let node = new TreeNode(nums[midC]);
    node.left  = makeTree(nums, beg, midC-1);
    node.right = makeTree(nums, midC+1, end);

    return node;

}

var sortedArrayToBST = function(nums) 
{
    return makeTree(nums, 0, nums.length-1);
}

console.log(sortedArrayToBST(nums));*/

//110. Balanced Binary Tree

/*function TreeNode(val, left, right) 
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let root = new TreeNode(1,new TreeNode(4, null, new TreeNode(5,null,new TreeNode(2,new TreeNode(3,null,null)))), null);

let sost = true;
let inorderRec = (node) => 
{
    if (sost == false)
    {
        return false;
    }

    if (node == null)
    {
        return 0;
    }

    let lDe = inorderRec(node.left);
    let rDe = inorderRec(node.right);

    if (Math.abs(lDe-rDe)>1)
    {
        sost = false;
        return;
    }

    if (lDe > rDe)
    {
        return (lDe + 1);
    }
    else
    {
        return (rDe + 1);
    } 
}

var isBalanced = function(root) 
{
    sost = true;
    inorderRec(root);
    if (sost == false)
    {
        return false;
    }
    return true;
}

console.log(isBalanced(root));*/


//111. Minimum Depth of Binary Tree

/*function TreeNode(val, left, right) 
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1,new TreeNode(4, null, new TreeNode(5,null,null)), new TreeNode(2,new TreeNode(3,null,null), null));


let findDepthOfNodes = (node) =>
{
    if(node == null)
    {
        return 0;
    }
    currentDepth++;
    let s1 = findDepthOfNodes(node.left);
    let s2 = findDepthOfNodes(node.right);
    if(s1==0 && s2 == 0)
    {
        resultArray.push(currentDepth);
    }
    currentDepth--;
    return 1;
    
}
const min = (values) => values.reduce((x, y) => Math.min(x, y));
var minDepth = function(root) 
{
    if (root == null)
    {
        return 0;
    }
    resultArray = [];
    currentDepth = 0;
    findDepthOfNodes(root);
    return min(resultArray);
    
}

console.log(minDepth(root));*/

//112. Path Sum

/*function TreeNode(val, left, right) 
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let targetSum = 5;
let root = new TreeNode(1,new TreeNode(4, null, new TreeNode(5,null,null)), new TreeNode(2,new TreeNode(3,null,null), null));

let currentSum;
let yesFind;

let calcSumOfTree = (node,target) =>
{
    if(yesFind == true)
    {
        return;
    }

    if(node == null)
    {
        return true;
    }

    currentSum += node.val;

    let leaf =0;
    calcSumOfTree(node.left,target)?leaf++:true;
    calcSumOfTree(node.right,target)?leaf++:true;

    if (currentSum == target && leaf == 2)
    {
        yesFind = true;
    }

    currentSum -= node.val;
    return;
}

var hasPathSum = function(root, targetSum) 
{
    yesFind = false;
    currentSum = 0;
    if(root == null)
    {
        return false;
    }

    calcSumOfTree(root,targetSum);

    return yesFind;
}

console.log(hasPathSum(root,targetSum));*/


//118. Pascal's Triangle

/*let numRows = 3;

var generate = function(numRows) 
{
    let result = [[1]];
    for (let i=1;  i<numRows; i++)
    {
        result.push([1]);
        for(let j = 0;  j < i-1; j++)
        {
            result[i].push(result[i-1][j]+result[i-1][j+1])
        }
        result[i].push(1);
    }

    return result;
}

console.log(generate(numRows));*/

//119. Pascal's Triangle II

/*let rowIndex = 3;

var getRow = function(rowIndex) 
{
    let result = [[1]];
    for (let i=1;  i<=rowIndex; i++)
    {
        result.push([1]);
        for(let j = 0;  j < i-1; j++)
        {
            result[i].push(result[i-1][j]+result[i-1][j+1])
        }
        result[i].push(1);
    }
    return result[rowIndex];
}
console.log(getRow(rowIndex));*/

//121. Best Time to Buy and Sell Stock
/*let prices = [7,1,5,3,6,4];

var maxProfit = function(prices) 
{
    let profit =0;
    let min = prices[0];

    for(let i = 0; i < prices.length; i++)
    {
        if (prices[i]<min)
        {
            min = prices[i];
        }
        if(prices[i] - min > profit)
        {
            profit = prices[i] - min;
        }
    }
    return profit;
}

console.log(maxProfit(prices));*/

//125. Valid Palindrome

/*let s = "s,,aDd:a s";

var isPalindrome = function(s) 
{
    let p = /[^a-zA-Z0-9]+/g

    s = (s.replace (p, ''))

    for(let i=0,j = s.length-1; i<j; i++,j--)
    {
        if(s[i].toLowerCase()!=s[j].toLowerCase())
        {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome(s));*/


//136. Single Number

/*let nums = [1,2,3,1,2];

var singleNumber = function(nums) 
{
    let s = new Set();

    for(let i = 0; i<nums.length;i++)
    {
        if(s.has(nums[i]))
        {
            s.delete(nums[i]);
        }
        else
        {
            s.add(nums[i])
        }
    }

    for(let i of s)
    {
        return i
    }

}

console.log(singleNumber(nums));*/

//141. Linked List Cycle

/*function ListNode(val, next) 
{
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


head = new ListNode(1,new ListNode(1,new ListNode(3,new ListNode(3))));
head.next = head;

/*var hasCycle = function(head) //тупо, но эффективно
{
    let count =0;
    while(head != undefined)
    {
        count ++;
        if (count > 100000)
        {
            return true;
        }
        head = head.next;
    }
    return false;
};*/
/*var hasCycle = function(head)  //заяц и черепаха
{
    let slow = head;
    let fast = head;
    while (fast != undefined && fast.next != undefined)
    {
        slow = slow.next;
        fast = fast.next.next;
        if (fast == slow)
        {
            return true;
        }
    }
    return false;
}*/

//144. Binary Tree Preorder Traversal

/*function TreeNode(val, left, right) 
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1,new TreeNode(4, null, new TreeNode(5,null,new TreeNode(2,new TreeNode(3,null,null)))), null);
let result;
let preorder = (node) =>
{
    if (node == null)
    {
        return;
    }
    result.push(node.val);
    preorder(node.left);
    preorder(node.right);
}
var preorderTraversal = function(root) 
{

    result = [];
    preorder(root);
    return result;
}

console.log(preorderTraversal(root));*/

//145. Binary Tree Postorder Traversal

/*function TreeNode(val, left, right) 
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1,new TreeNode(4, null, new TreeNode(5,null,new TreeNode(2,new TreeNode(3,null,null)))), null);
let result;

let postorder = (node) =>
{
    if (node == null)
    {
        return;
    }
    
    postorder(node.left);
    postorder(node.right);
    result.push(node.val);
}

var postorderTraversal = function(root) 
{
    result = [];
    postorder(root);

    return result;
}

console.log(postorderTraversal(root));*/

//160. Intersection of Two Linked Lists

/*function ListNode(val, next) 
{
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


headA = new ListNode(1,new ListNode(1,new ListNode(3,new ListNode(3))));
headB = new ListNode(2,headA);

var getIntersectionNode = function(headA, headB) //самое простое
{
    while (headA != undefined)
    {
        let temp = headB;
        while (temp != undefined)
        {
            if (temp == headA)
            {
                return headA;
            }
            temp = temp.next;
        }
        headA = headA.next;
    }
    return null;
}

var getIntersectionNode = function(headA, headB) //более эффективное (посмотрел)
{
    let tempA = headA;
    let tempB = headB
    while (tempA !== tempB) {
        tempA = tempA ? tempA.next : headB 
        tempB = tempB ? tempB.next : headA 
    }
    return tempA
};

console.log(getIntersectionNode(headA,headB));*/


//168. Excel Sheet Column Title

/*let columnNumber = 703;
var convertToTitle = function(columnNumber) 
{
    let result = new String;

    while (columnNumber)
    {
        columnNumber--;
        result = String.fromCharCode(65 + columnNumber%26) + result;
        columnNumber = Math.floor(columnNumber/26);
    }
    

    return result;
}

console.log(convertToTitle(columnNumber));*/

//169. Majority Element

/*let nums = [1,4,7,4,3,8,5,2];

var majorityElement = function(nums) 
{
    let h = new Map;
    nums.forEach(element => {
        if(h.get(element)==undefined)
        {
            h.set(element,0);
        }
        else
        {
            h.set(element,h.get(element)+1)
        } 
    });
    let indmaj = -1;
    let maj = 0;
    h.forEach((value,key)=>{
        if (value>indmaj)
        {
            indmaj = value;
            maj = key;
        }
    });
    return maj;
}   

console.log(majorityElement(nums));*/

//171. Excel Sheet Column Number
/*let columnTitle = 'AAA';

var titleToNumber = function(columnTitle) 
{
    let result = 0;

    for(let i =0; i<columnTitle.length; i++)
    {
        result = result*26 + (columnTitle.charCodeAt(i)-64);
        console.log(result);
    }
    
    return result;
};

console.log(titleToNumber(columnTitle));*/



//190. Reverse Bits

/*let n = 0b00000010100101000001111010011100;

var reverseBits = function(n) 
{
    let result = 0;
    let currentBit;
    for (let i = 0; i<32; i++ )
    {
        currentBit = n & 1;
        result = result<<1;
        result = result | currentBit;
        n = n>>1;
    }
    return result>>>0;
    //return result.toString(2);
};
    

console.log(reverseBits(n));*/

//191. Number of 1 Bits

/*let n = 0b101001;

var hammingWeight = function(n) 
{
    let res = 0;
    for (let i = 0; i<32; i++)
    {
        
        if (n & 1)
        {
            res++;
        }
        n = n>>1;
    }
    return res;
};

console.log(hammingWeight(n));*/

//202. Happy Number

/*let n = 50;

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
    }

 var isHappy = async function(n) 
{
    let summ = 0;
    let nums;
    let set = new Set();

    while(true)
    {
        nums = (""+n).split("").map(Number);
        nums.forEach((element)=>{
            summ += element*element;
        });
        if (summ == 1)
        {
            return true;
        }
        n = summ;

        if(set.has(summ))
        {
            return false;
        }
        
        set.add(summ);
        //console.log(summ);
        //await delay(1000);
        summ=0;
    }
};

console.log(isHappy(n));*/


//203. Remove Linked List Elements

/*function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let head = new ListNode(1,new ListNode(2,new ListNode(2,new ListNode(1))));
let val = 2;

var removeElements = function(head, val) {

    if (head == undefined)          //если список пуст
    {
        return head;
    }

    while (head != undefined)       //если нужно убрать в начале
    {                               
        if(head.val == val)
        {
            head = head.next;
        }
        else{
            break;
        }
    }

    let prev = new ListNode();
    let result = head;

    while(head != undefined)
    {
        if (head.val == val)
        {
            prev.next = head.next;
        }
        else
        {
            prev = head;
        }
        head = prev.next;
    }

    return result;
};

console.log(removeElements(head, val));*/

//205. Isomorphic Strings

/*let s = "paper";
let t = "title";

var isIsomorphic = function(s, t) 
{

    if (s.length!=t.length)
    {
        return false;
    }

    let map1 = new Map();
    let map2 = new Map();

    for(let i = 0; i < s.length; i++)
    {
       
        if (map1.get(s[i]) != map2.get(t[i]))
        {
            return false;
        }
        map1.set(s[i],i);
        map2.set(t[i],i);
    }
    return true;
};

console.log(isIsomorphic(s,t));*/

//206. Reverse Linked List

/*function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let head = new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4))));

var reverseList = function(head) 
{
    if (head == undefined)
    {
        return head;
    }
    let tempPrev = new ListNode();
    Object.assign(tempPrev,head)
    tempPrev.next = null;
    let temp = new ListNode();
    head = head.next;


    while(head != undefined)
    {
        temp = head.next;
        head.next = tempPrev;
        tempPrev = head;
        head = temp;
    }
    return tempPrev;
};

console.log(reverseList(head));*/


//217. Contains Duplicate

/*var containsDuplicate = function(nums) 
{
    if (nums.length < 2)
    {
        return false;
    }

    let s = new Set();

    for (let i = 0; i < nums.length; i ++)
    {
        if (s.has(nums[i]))
        {
            return true;
        }

        s.add(nums[i]);

    }
    return false;
};

console.log(containsDuplicate([1,2,3,5,8])); */


//219. Contains Duplicate II

/*var containsNearbyDuplicate = function(nums, k) 
{
    if (nums.length < 2)
    {
        return false;
    }

    let s = new Map();

    for (let i = 0; i < nums.length; i ++)
    {
        if (s.has(nums[i]))
        {
            console.log(i,s.get(nums[i]) )
            if (Math.abs(s.get(nums[i]) - i) <= k)
            {
                return true;
            }
        }

        s.set(nums[i],i);

    }
    return false;
};
console.log(containsNearbyDuplicate([1,2,3,5,8,3],1));*/

//222. Count Complete Tree Nodes

/*function TreeNode(val, left, right) 
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1,new TreeNode(4, null, new TreeNode(5,null,null)), new TreeNode(2,new TreeNode(3,null,null), null));
let count = 0;

let inorderRec = (node) => {
    if (node == null)
    {
        return;
    }
    count++;
    inorderRec(node.left);
    inorderRec(node.right);
    return count;
}


var countNodes = function(root) 
{
    count = 0;
    if (root == null)
    {
        return 0;
    }
    return inorderRec(root)
    
};

console.log(countNodes(root));*/


//225. Implement Stack using Queues


/*class MyStack
{
    constructor()
    {
        this.data = [];
        this.index = -1;
    }
    push(value)
    {
        this.index ++;
        this.data[this.index] = value;
    }
    pop()
    {
        this.index --;
    }
    top()
    {
        return this.data[this.index]
    }
    empty()
    {
        if (this.index == -1)
        {
            return true;
        }
        return false;
    }
}

let stack = new MyStack();
stack.push(5);
stack.push(76)
console.log(stack.top());
stack.pop();
console.log(stack.top());
console.log(stack.empty())
stack.pop()*/



//226. Invert Binary Tree

/*function TreeNode(val, left, right) 
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1,new TreeNode(4, null, new TreeNode(5,null,null)), new TreeNode(2,new TreeNode(3,null,null), null));
//let root = new TreeNode(1,null,null);

let inorderRec = (node) => {
    if (node == null)
    {
        return;
    }

    let temp = node.right;

    node.right = node.left;
    node.left = temp;

    inorderRec(node.left);

    inorderRec(node.right);
    return node;
}


var invertTree = function(root)
{
    if (root == null)
    {
        return [];
    }
   return inorderRec(root); 
}

console.log(invertTree(root));*/

//228. Summary Ranges


/*nums = [0,1,2,4,6,7,8,98,99,101];
//nums = [0,2,4,5,7];
var summaryRanges = function(nums) 
{
    if (nums == [])
    {
        return [];
    }

    let result = [];
    let begin = nums[0];

    for (let i = 0; i<nums.length; i++)
    {
        if (nums[i] != nums[i+1]-1)
        {
            begin == nums[i] ? result.push(`${nums[i]}`) :result.push(`${begin}->${nums[i]}`);
            begin = nums[i+1];
        }
    }

    return result;
};

console.log(summaryRanges(nums));*/

//231. Power of Two

/*let n = 2050;

var isPowerOfTwo = function(n) 
{
    while(n > 1 && Number.isInteger(n))
    {
        n = n/2;
    }
    if (n == 1)
    {
        return true;
    }
    return false;
};

console.log(isPowerOfTwo(n));*/

//232. Implement Queue using Stacks

/*class MyQueue
{

    constructor()
    {
        this.num = new Array;
        this.index = -1;
    }

    push(value)
    {
        this.index ++;
        this.num[this.index] = value;
    }

    pop()
    {
        let temp = this.num[0];
        this.num.shift();
        this.index --;
        return temp;
    }

    peek()
    {
        return this.num[0];
    }

    empty()
    {
        if (this.index < 0)
        {
            return true;
        }
        return false;
    }
}

let q = new MyQueue();

q.push(12);
q.push(15);

console.log(q.pop());

console.log(q.peek());

console.log(q.empty())*/


//234. Palindrome Linked List


/*function ListNode(val, next) 
{
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

list1 = new ListNode(1,new ListNode(2,new ListNode(2,new ListNode(1,))));

var isPalindrome = function(head) 
{
    let ar = [];
    
    while (head) 
    {
        ar.push(head.val);
        head = head.next;
    }

    for(let i=0,j = ar.length-1; i<j; i++,j--)
    {
        if(ar[i]!=ar[j])
        {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(list1));*/

//242. Valid Anagram

/*let s = "qqwewrty",t = "ytrcqewq";

var isAnagram = function(s, t) 
{
    if(s.length != t.length) return false;

    for(let i = 0;i<s.length;i++)
    {
        t = t.replace(`${s[i]}`, '');
    }   

    if (t == '')
    {
        return true;
    }
    return false;
}

var isAnagram = function(s, t) 
{

    if(s.length != t.length) return false;
    let objS = {}, objT = {};

    for(let i = 0;i<s.length;i++)
    {
        objS[s[i]] = (objS[s[i]] || 0) +1;
        objT[t[i]] = (objT[t[i]] || 0) +1;
    }

    for(key in objS)
    {
        if(objS[key] != objT[key]) return false; 
    }
    return true;

}

console.log(isAnagram(s,t));*/


//257. Binary Tree Paths

function TreeNode(val, left, right) 
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

//let root = new TreeNode(1,new TreeNode(2, null, new TreeNode(5,null,null)), new TreeNode(3,null, null));
let root = new TreeNode(1,new TreeNode(2, null, null), new TreeNode(3,null,null))

let order = (node, result, flag) =>{
    if (node == null)
    {
        return;
    }
    flag.val = 1;
    result[result.length-1].push(node.val);

    if(node.left == null && node.right == null)
    {
        result.push([...result[result.length-1]])
        flag.val = 0;
    }

    order(node.left, result, flag);
    order(node.right, result, flag);
    if (!flag.val)
    {
        result[result.length-1].pop()
    }
}


var binaryTreePaths = function(root) 
{
    if (root == null)
    {
        return [""];
    }


    let resultArray = [[]];
    let flag = {
        val: 0
    };  // флаг подъёма вверх по дереву
    order(root, resultArray, flag);
    resultArray.pop()
    
    resultArray = resultArray.map(element => 
        element.join('->')
    );
    return resultArray;
};

console.log(binaryTreePaths(root));