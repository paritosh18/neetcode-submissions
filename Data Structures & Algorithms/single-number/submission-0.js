class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let freq = {};
        for(const num of nums){
            if(freq[num]) {
                freq[num] += 1
            }else {
              freq[num] = 1 ;
            }
        }

        for(const key in freq){
                console.log(key)
            if(freq[key] === 1){
                return key
            }
        }
    }
}
