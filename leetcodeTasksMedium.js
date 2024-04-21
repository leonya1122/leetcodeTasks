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

/*let s = "tmmzuxt";

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

console.log(lengthOfLongestSubstring(s));*/

//5. Longest Palindromic Substring

let s = "saaas";

var longestPalindrome = function(s) {
    
    if (!s.length)
    {
        return 0;
    }
    let resultMax = s[0];
    let resultS = "";



    for (let i = 0; i<s.length-1;i++)
    {
        let centr = 1, //1, если у палиндрома есть центр их 1 симовла
        c = 1,         //Значение, на которое двигаемся влево\вправо
        korL = 0,      //если у палиндрома в центре 2 или более символа, то корректируем движение влево на korL
        flag = 1;      

        while (true)
        {

            if (s[i] === s[i+1])
            {
                if(flag)
                {
                    resultS = resultS + s[i] + s[i+1];
                }
                else{
                    resultS = resultS + s[i+1];
                }
                i++;
                korL++;
                flag = 0;
                centr = 0;
            }
            else if ((s[i - c - korL] === s[i + c ]) && (s[i + c] != undefined))
            {
                if(centr)
                {
                    resultS = s[i];
                    centr = 0;
                }
                resultS = s[i-c-korL] + resultS + s[i+c];
                c++;
            }
            else
            {
                korR = 0;
                flag = 0;
                centr = 1;
                break;
            }
        }

        if (resultS.length > resultMax.length)
        {
            resultMax = resultS;
        }
        resultS = "";
    }
    return resultMax;
};

console.log(longestPalindrome(s));