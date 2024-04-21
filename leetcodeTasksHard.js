//4. Median of Two Sorted Arrays

let nums1 = [1,3,5,6], nums2 = [2,4,7];

var findMedianSortedArrays = function(nums1, nums2) {
    
    let isMedOne = true;
    let medianN = Math.floor((nums1.length + nums2.length)/2);

    if((nums1.length + nums2.length)%2 == 0)
    {
        isMedOne = false;
    }

    let temp,tempPrev;

    for (let i = 0, j = 0, counter = 0; counter!=medianN+1;i++,counter++)
    {
        if (i<nums1.length)
        {
            if(nums2[j] < nums1[i])
            {
                tempPrev = temp;
                temp = nums2[j++];
                i--;
            }
            else
            {
                tempPrev = temp;
                temp = nums1[i];
            }
        }
        else
        {
            tempPrev = temp;
            temp = nums2[j++];
        }
    }

    if(isMedOne)
    {
        return temp;
    }
    else
    {
        return (temp+tempPrev)/2;
    }
    
    
};

console.log(findMedianSortedArrays(nums1,nums2));