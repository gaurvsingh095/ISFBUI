// import Link from "next/link";

// const UArizonaCourses = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-6">UArizona Courses</h1>

//       <div className="w-full max-w-md flex flex-col gap-6">
//         <Link href="/courses/csc110">
//           <div className="bg-yellow-500 text-white text-center p-6 rounded-lg shadow-lg cursor-pointer hover:bg-yellow-600 transition">
//             CSC110
//           </div>
//         </Link>

//         <Link href="/courses/csc120">
//           <div className="bg-purple-500 text-white text-center p-6 rounded-lg shadow-lg cursor-pointer hover:bg-purple-600 transition">
//             CSC120
//           </div>
//         </Link>

//         <Link href="/courses/csc210">
//           <div className="bg-indigo-500 text-white text-center p-6 rounded-lg shadow-lg cursor-pointer hover:bg-indigo-600 transition">
//             CSC210
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default UArizonaCourses;
import Link from "next/link";
import { motion } from "framer-motion";

const UArizonaCourses = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">🏫 UArizona Courses</h1>

      {/* Course Cards */}
      <div className="w-full max-w-lg flex flex-col gap-6">
        {courses.map((course, index) => (
          <Link href={course.link} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-6 rounded-xl shadow-lg cursor-pointer backdrop-blur-lg bg-opacity-20 ${course.bgColor} transition`}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl"></div>
              <h2 className="relative text-2xl font-semibold text-center">{course.title}</h2>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// ✅ UArizona Courses Data
const courses = [
  { title: "📌 CSC110", link: "/courses/110problems", bgColor: "bg-yellow-500 hover:bg-yellow-600" },
  { title: "📌 CSC120", link: "/courses/120problems", bgColor: "bg-purple-500 hover:bg-purple-600" },
  { title: "📌 CSC210", link: "/courses/210problems", bgColor: "bg-indigo-500 hover:bg-indigo-600" },
];

export default UArizonaCourses;
