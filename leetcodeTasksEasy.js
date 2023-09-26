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

let nums = [1,1,2,2,3,5,7,7,7,8,9,9,9,9,0];
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
console.log("nums ---->", nums);
