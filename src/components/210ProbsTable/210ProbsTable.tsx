import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";

const Twotenprobs = [
    { title: "1. Perfect Number Checker", difficulty: "Medium", category: "Math", videoId: "", link: "perfect-number-checker"},
    { title: "2. Triangular Number Sequence", difficulty: "Easy", category: "Math", videoId: "", link: "tri-num-seq"},
    { title: "3. Happy Number Checker", difficulty: "Medium", category: "Math", videoId: "", link: "happy-num-che"},
    { title: "4. Arithmetic Sequence Generator", difficulty: "Medium", category: "Math", videoId: "", link: "ari-seq-gen"},
    { title: "5. Anagram Checker", difficulty: "Easy", category: "Strings", videoId: "", link: "anagram-che"},
    { title: "6. Prime Factorization", difficulty: "Hard", category: "Math", videoId: "", link: "prime-factorization"},
    { title: "7. Pascal's Triangle Row Generator", difficulty: "Medium", category: "Math", videoId: "", link: "pascal-tri"},
    { title: "8. Longest Substring Without Repeat", difficulty: "Medium", category: "Strings / Sliding Window", videoId: "", link: "longest-str-wr"},
    { title: "9. Interval Merger", difficulty: "Medium", category: "Arrays", videoId: "", link: "interval-merger"},
    { title: "10. Word Ladder", difficulty: "Hard", category: "Graphs", videoId: "", link: "word-ladder"},
    { title: "11. Social Network Influence", difficulty: "Medium", category: "Graphs", videoId: "", link: "social-network-influence"},
    { title: "12. Warehouse Inventory Management", difficulty: "Easy", category: "Data Structures", videoId: "", link: "warehouse-inv-mng"},
    { title: "13. Document Similarity Checker", difficulty: "Easy", category: "Strings", videoId: "", link: "doc-sim-che"},
    { title: "14. Dynamic Pricing System", difficulty: "Medium", category: "Math", videoId: "", link: "dyn-pri-sys"},
    { title: "15. Task Scheduler Optimization", difficulty: "Medium", category: "Greedy Algorithms", videoId: "", link: "task-sch-opt"},
    { title: "16. Network Packet Routing", difficulty: "Hard", category: "Graphs", videoId: "", link: "net-pac-rou"},
    { title: "17. Event Attendance Tracker", difficulty: "Easy", category: "Strings", videoId: "", link: "evn-att-tra"},
    { title: "18. Simple Text Editor", difficulty: "Medium", category: "Strings", videoId: "", link: "sim-txt-edit"},
    { title: "19. Recursive String Permutations", difficulty: "Medium", category: "Strings", videoId: "", link: "rec-str-per"},
    { title: "20. Balanced Parentheses", difficulty: "Medium", category: "Backtracking", videoId: "", link: "bal-par"},
    { title: "21. Class Hierarcy & Polymorphism", difficulty: "Medium", category: "OOP", videoId: "", link: "cla-hie-pol"},
    { title: "22. Number of Islands", difficulty: "Hard", category: "Grids", videoId: "", link: "num-of-isl"},
    { title: "23. Coin Combinations", difficulty: "Medium", category: "Dynamic Programming", videoId: "", link: "coin-comb"},

  
  ];

const TwoTenProbsTable = () => {
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
        {Twotenprobs.map((problem, idx) => {
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

export default TwoTenProbsTable;