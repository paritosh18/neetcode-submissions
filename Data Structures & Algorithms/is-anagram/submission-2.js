class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let freqmap = {};
        if (s.length != t.length) return false;
        for (const char of s) {
            freqmap[char] = (freqmap[char] || 0) + 1;
        }
        for (const char of t) {
            if (!freqmap[char]) return false;
            freqmap[char]--
        }

        return true;
    }
}
