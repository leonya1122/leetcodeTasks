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
