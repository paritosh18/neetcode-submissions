class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            let maxele = -1;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > maxele) {
                    maxele = arr[j];
                }
            }
            arr[i] = maxele;
        }
        return arr;
    }
}
