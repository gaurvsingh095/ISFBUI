import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";

const Onetenprobs = [
  { title: "1. Add Suffix", difficulty: "Easy", category: "Array, String Manipulation", videoId: "", link: 'add-suffix'},
  { title: "2. Average Unique", difficulty: "Easy", category: "Array, Mathematical Calculation", videoId: "", link: 'average-unique'},
  { title: "3. Capitalize First & Last", difficulty: "Easy", category: "Array, String Manipulation", videoId: "", link: 'cap-first-last'},
  { title: "4. Compress String", difficulty: "Medium", category: "Counting, String Manipulation", videoId: "", link: 'compress-string'},
  { title: "5. Cube All", difficulty: "Easy", category: "Array, Mathematical Calculation", videoId: "", link: 'cube-all'},
  { title: "6. Halve All", difficulty: "Easy", category: "Array, Mathematical Calculation", videoId: "", link: 'halve-all'},
  { title: "7. Integer to Float", difficulty: "Easy", category: "Array, Type Conversion", videoId: "", link: 'int-to-float'},
  { title: "8. Make All Negative", difficulty: "Easy", category: "Array, Mathematical Calculation", videoId: "", link: 'make-all-negative'},
  { title: "9. Make Multiples of 10", difficulty: "Medium", category: "Array, Mathematical Calculation", videoId: "", link: 'mult-of-10'},
  { title: "10. Add Asterisks", difficulty: "Medium", category: "Array, String Manipulation", videoId: "", link: 'padall'},
  { title: "11. Remove All Caps", difficulty: "Easy", category: "String Manipulation", videoId: "", link: 'rem-all-caps'},
  { title: "12. Remove Empty Strings", difficulty: "Easy", category: "String Manipulation", videoId: "", link: 'rem-empty-str'},
  { title: "13. Remove Multiples of Five", difficulty: "Easy", category: "Array Manipulation", videoId: "", link: 'rem-mul-five'},
  { title: "14. Remove Multiples", difficulty: "Medium", category: "Array Manipulation", videoId: "", link: 'rem-mul'},
  { title: "15. Remove Palindromes", difficulty: "Medium", category: "String Manipulation", videoId: "", link: 'rem-pal'},
  { title: "16. Remove Repeating Consecutive Letters", difficulty: "Medium", category: "String Manipulation", videoId: "", link: 'rem-w-rep'},
  { title: "17. Remove All Lower", difficulty: "Easy", category: "String Manipulation", videoId: "", link: 'rem-all-low'},
  { title: "18. Remove Negatives", difficulty: "Easy", category: "Array Manipulation", videoId: "", link: 'rem-neg'},
  { title: "19. Shift Characters", difficulty: "Medium", category: "String Manipulation", videoId: "", link: 'shift-chars'},
  { title: "20. Shortest String", difficulty: "Easy", category: "String Manipulation", videoId: "", link: 'shortest-str'},
  { title: "21. String to Float", difficulty: "Easy", category: "Conversion", videoId: "", link: 'str-to-flt'},
  { title: "22. Sum of Digits", difficulty: "Easy", category: "String Manipulation", videoId: "", link: 'sum-of-digits'},
  { title: "23. Triple All Numbers", difficulty: "Easy", category: "Array Manipulation", videoId: "", link: 'triple-all-num'},
  { title: "24. Uppercase Only", difficulty: "Easy", category: "String Manipulation", videoId: "", link: 'upp-only'},
  { title: "25. Uppercase Vowels", difficulty: "Medium", category: "String Manipulation", videoId: "", link: 'upp-vow'},
  { title: "26. Uppercase Nonempty", difficulty: "Easy", category: "String Manipulation", videoId: "", link: 'upp-non'},
];

const OneTenProbsTable = () => {
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
        {Onetenprobs.map((problem, idx) => {
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

export default OneTenProbsTable;