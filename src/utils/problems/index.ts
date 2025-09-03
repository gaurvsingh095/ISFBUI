// import { Problem } from "../types/problem";
// import { jumpGame } from "./jump-game";
// import { reverseLinkedList } from "./reverse-linked-list";
// import { search2DMatrix } from "./search-a-2d-matrix";
// import { twoSum } from "./two-sum";
// import { validParentheses } from "./valid-parentheses";

// interface ProblemMap {
// 	[key: string]: Problem;
// }

// export const problems: ProblemMap = {
// 	"two-sum": twoSum,
// 	"reverse-linked-list": reverseLinkedList,
// 	"jump-game": jumpGame,
// 	"search-a-2d-matrix": search2DMatrix,
// 	"valid-parentheses": validParentheses,
// };
import { Problem } from "../types/problem";

// Import problems from the problems folder
import { twoSum } from "./two-sum";
import { reverseLinkedList } from "./reverse-linked-list";
import { jumpGame } from "./jump-game";
import { search2DMatrix } from "./search-a-2d-matrix";
import { validParentheses } from "./valid-parentheses";
import { containerWithMostWater } from "./container";
import { mergeIntervals } from "./merge-intervals";
import { maxDepth } from "./max-depth-bin-tree";
import { bestTimeToBuyAndSellStock } from "./buy-and-sell-stock";
import { subsets } from "./subsets";

// Import problems from the 110probs folder
import { addSuffix } from "../110probs/add_suffix";
import { averageUnique } from "../110probs/average_unique";
import { capitalizeFirstLast } from "../110probs/cap_first_last";
import { compressString } from "../110probs/compress_string";
import { cubeAll } from "../110probs/cubeall";
import { halveAll } from "../110probs/halveall";
import { intToFloat } from "../110probs/int_to_float";
import { makeAllNegative } from "../110probs/make_all_negative";
import { makeMultiplesOf10 } from "../110probs/mult_of_10";
import { padAllStrings } from "../110probs/padall";
import { removeAllCaps } from "../110probs/rem_all_caps";
import { removeEmptyStrings } from "../110probs/rem_emp_str";
import { removeMultiplesOfFive } from "../110probs/rem_mul_five";
import { removeMultiples } from "../110probs/rem_mul";
import { removePalindromes } from "../110probs/rem_pld";
import { removeWithRepeats } from "../110probs/rem_str_cons";
import { removeAllLower } from "../110probs/rem_str_low";
import { removeNegatives } from "../110probs/remove_negatives";
import { shiftChars } from "../110probs/shift_chars";
import { shortestString } from "../110probs/short_str";
import { stringToFloat } from "../110probs/str_to_float";
import { totalDigitsInStrings } from "../110probs/total_digits_str";
import { tripleAll } from "../110probs/triple_all_num";
import { uppercaseOnly } from "../110probs/upp_only";
import { uppercaseVowels } from "../110probs/upp_vow";
import { uppercaseNonempty } from "../110probs/uppercase_nonemp";

// Import problems from the 120probs folder
import { isSquareMatrix } from "../120probs/square-matrix-val";
import { extractRow } from "../120probs/matrix-row-ext";
import { mergeSegments } from "../120probs/string-segment-merger";
import { filterByPattern } from "../120probs/pattern-based-wor-fil";
import { maxWindowSum } from "../120probs/sliding-window-max-sum";
import { sumCommaSeparated } from "../120probs/comma-seperated-sum";
import { nestedListToDict } from "../120probs/nested-list-to-dict-con";
import { swapDictKeysValues } from "../120probs/dict-key-val-swap";
import { selectBySuffix } from "../120probs/suffix-based-word-sel";
import { findPrimaryStress } from "../120probs/primary-stress-loc";
import { reverseSegments } from "../120probs/reverse-str-seg";
import { extractDiagonal } from "../120probs/diagonal-matrix-ext";
import { transposeMatrix } from "../120probs/transpose-matrix";
import { selectByPrefix } from "../120probs/prefix-based-word-sel";
import { countVowels } from "../120probs/count-vowels-in-words";
import { flattenList } from "../120probs/flatten-nested-list";
import { incrementDictValues } from "../120probs/dict-val-inc";
import { findLongestWord } from "../120probs/find-longest-word";
import { countConsonants } from "../120probs/count-cons-word";
import { generateFibonacci } from "../120probs/gen-fib-seq";
import { spiralOrder } from "../120probs/matrix-spiral-tra";
import { advancedWordAnalysis } from "../120probs/advanced-word-anl";
import { longestConsecutive } from "../120probs/longest-con-seq";

// import problems from the 210probs folder
import { perfectNumberChecker } from "../210probs/perfect-number-checker";
import { triangularNumberSequence } from "../210probs/tri-num-seq";
import { happyNumberChecker } from "../210probs/happy-num-che";
import { arithmeticSequenceGenerator } from "../210probs/ari-seq-gen";
import { anagramChecker } from "../210probs/anagram-che";
import { primeFactorization } from "../210probs/prime-factorization";
import { pascalsTriangleRow } from "../210probs/pascal-tri";
import { longestSubstring } from "../210probs/longest-str-wr";
import { wordLadder } from "../210probs/word-ladder";
import { intervalMerger } from "../210probs/interval-merger";
import { socialNetworkInfluence } from "../210probs/social-network-influence";
import { warehouseInventory } from "../210probs/warehouse-inv-mng";
import { documentSimilarity } from "../210probs/doc-sim-che";
import { dynamicPricing } from "../210probs/dyn-pri-sys";
import { taskScheduler } from "../210probs/task-sch-opt";
import { networkInterfaces } from "os";
import { networkPacketRouting } from "../210probs/net-pac-rou";
import { eventAttendanceTracker } from "../210probs/evn-att-tra";
import { simpleTextEditor } from "../210probs/sim-txt-edit";
import { generatePermutations } from "../210probs/rec-str-per";
import { generateParentheses } from "../210probs/bal-par";
import { bankingSystem } from "../210probs/cla-hie-pol";
import { numIslands } from "../210probs/num-of-isl";
import { coinComb } from "../210probs/coin-comb";

interface ProblemMap {
  [key: string]: Problem;
}

export const problems: ProblemMap = {
  // blind75 dsa probs
  "two-sum": twoSum,
  "reverse-linked-list": reverseLinkedList,
  "jump-game": jumpGame,
  "search-a-2d-matrix": search2DMatrix,
  "valid-parentheses": validParentheses,
  "container": containerWithMostWater,
  "merge-intervals": mergeIntervals,
  "max-depth-bin-tree": maxDepth,
  "buy-and-sell-stock": bestTimeToBuyAndSellStock,
  "subsets": subsets,

  // 110probs
  "add-suffix": addSuffix,
  "average-unique": averageUnique,
  "cap-first-last": capitalizeFirstLast,
  "compress-string": compressString,
  "cube-all": cubeAll,
  "halve-all": halveAll,
  "int-to-float": intToFloat,
  "make-all-negative": makeAllNegative,
  "mult-of-10": makeMultiplesOf10,
  "padall": padAllStrings,
  "rem-all-caps": removeAllCaps,
  "rem-empty-str": removeEmptyStrings,
  "rem-mul-five": removeMultiplesOfFive,
  "rem-mul": removeMultiples,
  "rem-pal": removePalindromes,
  "rem-w-rep": removeWithRepeats,
  "rem-all-low": removeAllLower,
  "rem-neg": removeNegatives,
  "shift-chars": shiftChars,
  "shortest-str": shortestString,
  "str-to-flt": stringToFloat,
  "sum-of-digits": totalDigitsInStrings,
  "triple-all-num": tripleAll,
  "upp-only": uppercaseOnly,
  "upp-vow": uppercaseVowels,
  "upp-non": uppercaseNonempty,

  // 120probs
  "matrix-row-ext": extractRow,
  "square-matrix-val": isSquareMatrix,
  "str-segment-merger": mergeSegments,
  "pattern-based-wor-fil": filterByPattern,
  "sliding-window-max-sum": maxWindowSum,
  "comma-seperated-sum": sumCommaSeparated,
  "nested-list-to-dict-con": nestedListToDict,
  "dict-key-val-swap": swapDictKeysValues,
  "suffix-based-word-sel": selectBySuffix,
  "primary-stress-loc": findPrimaryStress,
  "reverse-str-seg": reverseSegments,
  "diagonal-matrix-ext": extractDiagonal,
  "transpose-matrix": transposeMatrix,
  "prefix-based-word-sel": selectByPrefix,
  "count-vowels-in-words": countVowels,
  "flatten-nested-list": flattenList,
  "dict-val-inc": incrementDictValues,
  "find-longest-word": findLongestWord,
  "count-cons-word": countConsonants,
  "gen-fib-seq": generateFibonacci,
  "matrix-spiral-tra": spiralOrder,
  "longest-con-seq": longestConsecutive,
  "advanced-word-anl": advancedWordAnalysis,

  // 210probs
  "perfect-number-checker": perfectNumberChecker,
  "tri-num-seq": triangularNumberSequence,
  "happy-num-che": happyNumberChecker,
  "ari-seq-gen": arithmeticSequenceGenerator,
  "anagram-che": anagramChecker,
  "prime-factorization": primeFactorization,
  "pascal-tri": pascalsTriangleRow,
  "longest-str-wr": longestSubstring,
  "word-ladder": wordLadder,
  "interval-merger": intervalMerger,
  "social-network-influence": socialNetworkInfluence,
  "warehouse-inv-mng": warehouseInventory,
  "doc-sim-che": documentSimilarity,
  "dyn-pri-sys": dynamicPricing,
  "task-sch-opt": taskScheduler,
  "net-pac-rou": networkPacketRouting,
  "evn-att-tra": eventAttendanceTracker,
  "sim-txt-edit": simpleTextEditor,
  "rec-str-per": generatePermutations,
  "bal-par": generateParentheses,
  "cla-hie-pol": bankingSystem,
  "num-of-isl": numIslands,
  "coin-comb": coinComb,
};