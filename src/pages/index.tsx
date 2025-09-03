// import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
// import Topbar from "@/components/Topbar/Topbar";
// import useHasMounted from "@/hooks/useHasMounted";

// import { useState } from "react";

// export default function Home() {
// 	const [loadingProblems, setLoadingProblems] = useState(true);
// 	const hasMounted = useHasMounted();

// 	if (!hasMounted) return null;

// 	return (
// 		<>
// 			<main className='bg-dark-layer-2 min-h-screen'>
// 				<Topbar />
// 				<h1
// 					className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
// 					uppercase mt-10 mb-5'
// 				>
// 					&ldquo; QUALITY OVER QUANTITY &rdquo; 👇
// 				</h1>
// 				<div className='relative overflow-x-auto mx-auto px-6 pb-10'>
// 					{loadingProblems && (
// 						<div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
// 							{[...Array(10)].map((_, idx) => (
// 								<LoadingSkeleton key={idx} />
// 							))}
// 						</div>
// 					)}
// 					<table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
// 						{!loadingProblems && (
// 							<thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
// 								<tr>
// 									<th scope='col' className='px-1 py-3 w-0 font-medium'>
// 										Status
// 									</th>
// 									<th scope='col' className='px-6 py-3 w-0 font-medium'>
// 										Title
// 									</th>
// 									<th scope='col' className='px-6 py-3 w-0 font-medium'>
// 										Difficulty
// 									</th>

// 									<th scope='col' className='px-6 py-3 w-0 font-medium'>
// 										Category
// 									</th>
// 									<th scope='col' className='px-6 py-3 w-0 font-medium'>
// 										Solution
// 									</th>
// 								</tr>
// 							</thead>
// 						)}
// 						<ProblemsTable setLoadingProblems={setLoadingProblems} />
// 					</table>
// 				</div>
// 			</main>
// 		</>
// 	);
// }

// const LoadingSkeleton = () => {
// 	return (
// 		<div className='flex items-center space-x-12 mt-4 px-6'>
// 			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
// 			<div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
// 			<div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
// 			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
// 			<span className='sr-only'>Loading...</span>
// 		</div>
// 	);
// };

// import Link from "next/link";

// const LandingPage = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
//       <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
//         🚀 Interview Simulation & Feedback Generation
//       </h1>
//       <p className="text-lg text-center text-gray-600 max-w-2xl mb-8">
//         Improve your coding skills with real-world problems, simulated interviews, and AI-powered feedback.
//       </p>

//       {/* Sign Up / Log In Button */}
//       <div className="flex space-x-4">
//         <Link href="./AuthPage">
//           <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">
//             Get Started
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };
// export default LandingPage;

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { FaLaptopCode, FaGlobe, FaUserShield } from "react-icons/fa";
// import Navbar from "@/components/Navbar/Navbar"; // ✅ Navbar Component

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative flex flex-col items-center justify-center text-center pt-24">
//         <motion.h1
//           className="text-5xl font-bold text-white leading-tight"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           🚀 Ace Your Interviews with AI-Powered Simulations
//         </motion.h1>
//         <p className="mt-4 text-lg text-gray-400 max-w-2xl">
//           Prepare for your F1 Visa or Tech Interviews with AI-driven insights and feedback.
//         </p>

//         {/* Navigation Buttons */}
//         <div className="mt-8 flex space-x-6">
//           <Link href="/categories/F1Visa">
//             <motion.button
//               className="flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <FaGlobe className="mr-2" /> F1 Visa Simulation
//             </motion.button>
//           </Link>
//           <Link href="/categories/dsa">
//             <motion.button
//               className="flex items-center px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 transition text-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <FaLaptopCode className="mr-2" /> DSA Practice
//             </motion.button>
//           </Link>
//           <Link href="/categories/real-world">
//             <motion.button
//               className="flex items-center px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 transition text-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <FaUserShield className="mr-2" /> Real-World Projects
//             </motion.button>
//           </Link>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="mt-20 px-8">
//         <h2 className="text-3xl font-semibold text-center">Why Choose Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//           <motion.div className="bg-gray-800 p-6 rounded-lg text-center" whileHover={{ scale: 1.05 }}>
//             <h3 className="text-xl font-semibold">🎭 Realistic Simulations</h3>
//             <p className="text-gray-400 mt-2">Practice with real-life interview scenarios.</p>
//           </motion.div>

//           <motion.div className="bg-gray-800 p-6 rounded-lg text-center" whileHover={{ scale: 1.05 }}>
//             <h3 className="text-xl font-semibold">🤖 AI-Powered Feedback</h3>
//             <p className="text-gray-400 mt-2">Get instant AI-based feedback on responses.</p>
//           </motion.div>

//           <motion.div className="bg-gray-800 p-6 rounded-lg text-center" whileHover={{ scale: 1.05 }}>
//             <h3 className="text-xl font-semibold">📊 Performance Insights</h3>
//             <p className="text-gray-400 mt-2">Track your progress with in-depth analytics.</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="mt-16 py-6 text-center text-gray-400">
//         © 2025 AI Interview Simulator - All Rights Reserved
//       </footer>
//     </div>
//   );
// } 
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGlobe, FaUserShield, FaCheckCircle, FaArrowDown } from "react-icons/fa";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-24">
        <motion.h1
          className="text-5xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🚀 Ace Your Interviews with AI-Powered Simulations
        </motion.h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          Prepare for your F1 Visa or Tech Interviews with AI-driven insights and feedback.
        </p>

        {/* Navigation Buttons */}
        <div className="mt-8 flex space-x-6">
          <Link href="/categories/F1Visa">
            <motion.button
              className="flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaGlobe className="mr-2" /> F1 Visa Simulation
            </motion.button>
          </Link>
          <Link href="/categories/dsa">
            <motion.button
              className="flex items-center px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 transition text-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaLaptopCode className="mr-2" /> DSA Practice
            </motion.button>
          </Link>
          <Link href="/categories/uarizona">
            <motion.button
              className="flex items-center px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition text-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaArrowDown className="mr-2" /> UArizona
            </motion.button>
          </Link>
          <Link href="/categories/real-world">
            <motion.button
              className="flex items-center px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 transition text-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaUserShield className="mr-2" /> Real-World Projects
            </motion.button>
          </Link>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="mt-16 text-gray-400 text-lg animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <FaArrowDown className="text-3xl" />
        </motion.div>
      </section>

      {/* Preparation Roadmap Section */}
      <section className="mt-20 px-8">
        <h2 className="text-3xl font-semibold text-center">Your Roadmap to Success 🛤️</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            { step: "📚 Learn Fundamentals", description: "Master the basics of problem-solving & algorithms." },
            { step: "🧠 Solve Challenges", description: "Practice interview questions & DSA problems." },
            { step: "🎤 Mock Interviews", description: "Experience real interview scenarios with AI." },
            { step: "✅ Get Instant Feedback", description: "Receive AI-powered suggestions for improvement." },
            { step: "🚀 Improve & Repeat", description: "Iterate based on feedback & keep practicing!" },
            { step: "🎯 Ace Your Interview", description: "Confidently tackle real-world interview scenarios." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg text-center flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaCheckCircle className="text-green-400 text-3xl mb-3" />
              <h3 className="text-xl font-semibold">{item.step}</h3>
              <p className="text-gray-400 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-20 px-8">
        <h2 className="text-3xl font-semibold text-center">Why Choose Us? 🔥</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <motion.div className="bg-gray-800 p-6 rounded-lg text-center" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold">🎭 Realistic Simulations</h3>
            <p className="text-gray-400 mt-2">Practice with real-life interview scenarios.</p>
          </motion.div>

          <motion.div className="bg-gray-800 p-6 rounded-lg text-center" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold">🤖 AI-Powered Feedback</h3>
            <p className="text-gray-400 mt-2">Get instant AI-based feedback on responses.</p>
          </motion.div>

          <motion.div className="bg-gray-800 p-6 rounded-lg text-center" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold">📊 Performance Insights</h3>
            <p className="text-gray-400 mt-2">Track your progress with in-depth analytics.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Ready to Level Up? 🚀</h2>
        <p className="text-gray-400 mt-2">Join now and start practicing smarter, not harder.</p>
        <Link href="/AuthPage">
          <motion.button
            className="mt-6 px-8 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 transition text-lg"
            whileHover={{ scale: 1.1 }}
          >
            Get Started Now
          </motion.button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-gray-400">
        © 2025 AI Interview Simulator - All Rights Reserved
      </footer>
    </div>
  );
}

