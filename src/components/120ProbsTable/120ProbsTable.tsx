import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";

const Onetwentyprobs = [
  { title: "1. String Segment Merger", difficulty: "Medium", category: "String Manipulation", videoId: "", link: 'str-segment-merger'},
  { title: "2. Matrix Row Extractor", difficulty: "Easy", category: "Array Manipulation", videoId: "", link: "matrix-row-ext"},
  { title: "3. Square Matrix Validator", difficulty: "Easy", category: "Array Manipulation", videoId: "", link: 'square-matrix-val'},
  { title: "4. Pattern-Based Word Filter", difficulty: "Medium", category: "String Manipulation", videoId: "", link: "pattern-based-wor-fil"},
  { title: "5. Sliding Window Maximum Sum", difficulty: "Hard", category: "Sliding Window", videoId: "", link: 'sliding-window-max-sum'},
  { title: "6. Comma Seperated Sum", difficulty: "Easy", category: "String Manipulation", videoId: "", link: 'comma-seperated-sum'},
  { title: "7. Nested List to Dictionary Converter", difficulty: "Medium", category: "Data Structures", videoId: "", link: "nested-list-to-dict-con"},
  { title: "8. Dictionary Key-Value Swapper", difficulty: "Easy", category: "Dictionary Manipulation", videoId: "", link: "dict-key-val-swap"},
  { title: "9. Suffix Based Word Selector", difficulty: "Easy", category: "String Manipulation", videoId: "", link: "suffix-based-word-sel"},
  { title: "10. Primary Stress Locator", difficulty: "Medium", category: "Array Manipulation", videoId: "", link: 'primary-stress-loc'},
  { title: "11. Reverse String Segments", difficulty: "Medium", category: "Array Manipulation", videoId: "", link: 'reverse-str-seg'},
  { title: "12. Diagonal Matrix Extractor", difficulty: "Medium", category: "Array Manipulation", videoId: "", link: 'diagonal-matrix-ext'},
  { title: "13. Transpose Matrix", difficulty: "Medium", category: "Array Manipulation", videoId: "", link: "transpose-matrix"},
  { title: "14. Prefix Based Word Selector", difficulty: "Easy", category: "Strings", videoId: "", link: "prefix-based-word-sel"},
  { title: "15. Count Vowels in Words", difficulty: "Easy", category: "Strings", videoId: "", link: 'count-vowels-in-words'},
  { title: "16. Flatten Nested List", difficulty: "Easy", category: "Array Manipulation", videoId: "", link: "flatten-nested-list"},
  { title: "17. Dictionary Value Incrementer", difficulty: "Easy", category: "Data Structures", videoId: "", link: "dict-val-inc"},
  { title: "18. Find Longest Word", difficulty: "Easy", category: "Strings", videoId: "", link: "find-longest-word"},
  { title: "19. Count Consonants in Words", difficulty: "Easy", category: "Strings", videoId: "", link: "count-cons-word"},
  { title: "20. Generate Fibonacci Sequence", difficulty: "Easy", category: "Math", videoId: "", link: "gen-fib-seq"},
  { title: "21. Matrix Spiral Traversal", difficulty: "Hard", category: "Arrays", videoId: "", link: "matrix-spiral-tra"},
  { title: "22. Longest Consecutive Sequence", difficulty: "Hard", category: "Arrays & Hashing", videoId: "", link: "longest-con-seq"},
  { title: "23. Advanced Word Analysis", difficulty: "Hard", category: "Strings", videoId: "", link: "advanced-word-anl"},
];

const OneTwentyProbsTable = () => {
  const [youtubePlayer, setYoutubePlayer] = useState({ isOpen: false, videoId: "" });
  const [solvedProblems, setSolvedProblems] = useState<number[]>(() => {
    // Load solved problems from local storage on initial render
    const saved = localStorage.getItem("solvedProblems");
    return saved ? JSON.parse(saved) : [];
  });

  const closeModal = () => setYoutubePlayer({ isOpen: false, videoId: "" });

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { 
      if (e.key === "Escape") closeModal(); 
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    // Save solved problems to local storage whenever it changes
    localStorage.setItem("solvedProblems", JSON.stringify(solvedProblems));
  }, [solvedProblems]);

  const toggleSolved = (index: number) => {
    setSolvedProblems((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <>
      <tbody className='text-white'>
        {Onetwentyprobs.map((problem, idx) => {
          const difficultyColor =
            problem.difficulty === "Easy" ? "text-dark-green-s" :
            problem.difficulty === "Medium" ? "text-dark-yellow" : "text-dark-pink";
          return (
            <tr className={`${idx % 2 === 1 ? "bg-dark-layer-1" : ""}`} key={idx}>
              <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
                {solvedProblems.includes(idx) && <BsCheckCircle fontSize={'18'} width='18' />}
              </th>
              <td className='px-6 py-4'>
                <Link href={`/problems/${problem.link}`} className='hover:text-blue-600 cursor-pointer'>
                  {problem.title}
                </Link>
              </td>
              <td className={`px-6 py-4 ${difficultyColor}`}>{problem.difficulty}</td>
              <td className='px-6 py-4'>{problem.category}</td>
              <td className='px-6 py-4'>
                {problem.videoId ? (
                  <AiFillYoutube fontSize={'28'} className='cursor-pointer hover:text-red-600' 
                    onClick={() => setYoutubePlayer({ isOpen: true, videoId: problem.videoId })} />
                ) : (
                  <p className='text-gray-400'>Coming soon</p>
                )}
              </td>
              <td className='px-6 py-4'>
                <button onClick={() => toggleSolved(idx)}>
                  {solvedProblems.includes(idx) ? "Unmark as Solved" : "Mark as Solved"}
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
      {youtubePlayer.isOpen && (
        <tfoot className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center'>
          <div className='bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute' onClick={closeModal}></div>
          <div className='w-full z-50 h-full px-6 relative max-w-4xl'>
            <div className='w-full h-full flex items-center justify-center relative'>
              <div className='w-full relative'>
                <IoClose fontSize={'35'} className='cursor-pointer absolute -top-16 right-0' onClick={closeModal} />
                <YouTube videoId={youtubePlayer.videoId} loading='lazy' iframeClassName='w-full min-h-[500px]' />
              </div>
            </div>
          </div>
        </tfoot>
      )}
    </>
  );
};

export default OneTwentyProbsTable;