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



