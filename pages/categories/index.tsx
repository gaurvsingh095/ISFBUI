// import Link from "next/link";

// const Categories = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-6">Select a Category</h1>

//       {/* Rectangular Boxes */}
//       <div className="w-full max-w-md flex flex-col gap-6">
//         <Link href="/categories/F1Visa">
//           <div className="bg-orange-500 text-white text-center p-6 rounded-lg shadow-lg cursor-pointer hover:bg-red-600 transition">
//             F1 Visa
//           </div>
//         </Link>
//         <Link href="/categories/uarizona">
//           <div className="bg-blue-500 text-white text-center p-6 rounded-lg shadow-lg cursor-pointer hover:bg-blue-600 transition">
//             UArizona
//           </div>
//         </Link>

//         <Link href="/categories/dsa">
//           <div className="bg-green-500 text-white text-center p-6 rounded-lg shadow-lg cursor-pointer hover:bg-green-600 transition">
//             DSA
//           </div>
//         </Link>

//         <Link href="/categories/real-world">
//           <div className="bg-red-500 text-white text-center p-6 rounded-lg shadow-lg cursor-pointer hover:bg-red-600 transition">
//             Real World
//           </div>
//         </Link>
//       </div>
//     </div>
    
//   );
// };

// export default Categories;
import Link from "next/link";
import { motion } from "framer-motion";

const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center tracking-wide">🌟 Select a Category</h1>

      {/* Category Cards */}
      <div className="w-full max-w-2xl flex flex-col gap-6">
        {categories.map((category, index) => (
          <Link href={category.link} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-6 rounded-xl shadow-lg cursor-pointer backdrop-blur-lg bg-opacity-20 ${category.bgColor} transition`}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl"></div>
              <h2 className="relative text-2xl font-semibold text-center">{category.title}</h2>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// ✅ Category Data
const categories = [
  { title: "🎓 F1 Visa", link: "/categories/F1Visa", bgColor: "bg-orange-500 hover:bg-orange-600" },
  { title: "🏫 UArizona", link: "/categories/uarizona", bgColor: "bg-blue-500 hover:bg-blue-600" },
  { title: "📊 DSA", link: "/categories/dsa", bgColor: "bg-green-500 hover:bg-green-600" },
  { title: "🌍 Real World", link: "/categories/real-world", bgColor: "bg-red-500 hover:bg-red-600" },
];

export default Categories;
