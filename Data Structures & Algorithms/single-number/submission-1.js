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

       for(const[key , values] of Object.entries(freq)){
           if(values == 1){
                return key
           }
       }
    }
}
