class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       let freqmap = {};

        for (const char of nums){
            if(freqmap[char]){
                return true;
            }else{
                freqmap[char] =1
            }
        }
        return false
    }
}
