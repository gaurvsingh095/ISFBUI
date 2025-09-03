// import Link from "next/link";

// const DSA = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-6">DSA Learning Paths</h1>

//       <div className="w-full max-w-md flex flex-col gap-6">
//         <Link href="/dsa/logic-problems">
//           <div className="bg-blue-600 text-white text-center p-6 rounded-lg shadow-lg cursor-pointer hover:bg-blue-700 transition">
//             Logic Problems
//           </div>
//         </Link>

//         <Link href="/dsa/interviewPrep">
//           <div className="bg-green-600 text-white text-center p-6 rounded-lg shadow-lg cursor-pointer hover:bg-green-700 transition">
//             Interview Preparation
//           </div>
//         </Link>

//         <Link href="/dsa/blind-75">
//           <div className="bg-orange-600 text-white text-center p-6 rounded-lg shadow-lg cursor-pointer hover:bg-orange-700 transition">
//             Blind 75
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default DSA;
import Link from "next/link";
import { motion } from "framer-motion";

const DSA = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">🧠 DSA Learning Paths</h1>

      {/* DSA Learning Paths Cards */}
      <div className="w-full max-w-lg flex flex-col gap-6">
        {dsaPaths.map((path, index) => (
          <Link href={path.link} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-6 rounded-xl shadow-lg cursor-pointer backdrop-blur-lg bg-opacity-20 ${path.bgColor} transition`}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl"></div>
              <h2 className="relative text-2xl font-semibold text-center">{path.title}</h2>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// ✅ DSA Paths Data
const dsaPaths = [
  { title: "🧩 Logic Problems", link: "/dsa/logic-problems", bgColor: "bg-blue-600 hover:bg-blue-700" },
  { title: "📚 Interview Preparation", link: "/dsa/interviewPrep", bgColor: "bg-green-600 hover:bg-green-700" },
  { title: "🔥 Blind 75", link: "/dsa/blind-75", bgColor: "bg-orange-600 hover:bg-orange-700" },
];

export default DSA;
