// const RealWorldProjects = () => {
//     const projects = [
//       "AI Chatbot",
//       "Stock Market Predictor",
//       "Blockchain Voting System",
//       "Data Science Portfolio",
//       "Smart Traffic Light System",
//       "E-commerce Recommendation Engine",
//       "Automated Resume Screener",
//       "Cybersecurity Threat Detection",
//     ];
  
//     return (
//       <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
//         <h1 className="text-3xl font-bold mb-6">Real World Projects</h1>
  
//         {/* Scrollable List */}
//         <div className="w-full max-w-lg h-[400px] overflow-y-auto bg-white p-4 rounded-lg shadow-lg">
//           {projects.map((project, index) => (
//             <div key={index} className="bg-gray-300 p-4 my-2 rounded-lg shadow-md">
//               {project}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default RealWorldProjects;
import { motion } from "framer-motion";

const RealWorldProjects = () => {
  const projects = [
    "🤖 AI Chatbot",
    "📈 Stock Market Predictor",
    "🔐 Blockchain Voting System",
    "📊 Data Science Portfolio",
    "🚦 Smart Traffic Light System",
    "🛒 E-commerce Recommendation Engine",
    "📜 Automated Resume Screener",
    "🛡️ Cybersecurity Threat Detection",
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">🌍 Real World Projects</h1>

      {/* Scrollable Project List */}
      <div className="w-full max-w-lg h-[400px] overflow-y-auto backdrop-blur-lg bg-opacity-20 rounded-xl shadow-lg p-4 border border-gray-700">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 p-4 my-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition"
          >
            {project}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RealWorldProjects;
