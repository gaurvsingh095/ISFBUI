// import { useRouter } from "next/router";

// const AuthPage = () => {
//     const router = useRouter();

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-8">
//             <h1 className="text-3xl font-bold text-gray-900 mb-6">Sign In to Continue</h1>
            
//             <div className="flex space-x-4">
//                 {/* Sign In Button */}
//                 <button
//                     onClick={() => router.push("/auth/login")}
//                     className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
//                 >
//                     Sign In
//                 </button>

//                 {/* Sign Up Button */}
//                 <button
//                     onClick={() => router.push("/auth/signup")}
//                     className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
//                 >
//                     Sign Up
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AuthPage;
// import { authModalState } from "@/atoms/authModalAtom";
// import AuthModal from "@/components/Modals/AuthModal";
// import Navbar from "@/components/Navbar/Navbar";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "@/firebase/firebase";
// import { useRecoilValue } from "recoil";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";

// const AuthPage: React.FC = () => {
//   const authModal = useRecoilValue(authModalState);
//   const [user, loading] = useAuthState(auth);
//   const router = useRouter();
//   const [pageLoading, setPageLoading] = useState(true);

//   useEffect(() => {
//     if (user) router.push("/categories"); // Redirect after login
//     if (!loading && !user) setPageLoading(false);
//   }, [user, router, loading]);

//   if (pageLoading) return null;

//   return (
//     <div className="bg-gradient-to-b from-gray-900 to-black h-screen relative flex flex-col items-center justify-center text-white">
//       <Navbar />
//       <div className="flex flex-col items-center text-center">
//         <Image src="/hero.png" alt="Hero" width={500} height={500} className="rounded-lg shadow-lg" />
//         <h1 className="text-4xl font-bold mt-4">Your AI-Driven Learning Platform</h1>
//       </div>
//       {authModal.isOpen && <AuthModal />}
//     </div>
//   );
// };

// export default AuthPage;
// import { authModalState } from "@/atoms/authModalAtom";
// import AuthModal from "@/components/Modals/AuthModal";
// import Navbar from "@/components/Navbar/Navbar";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "@/firebase/firebase";
// import { useRecoilValue } from "recoil";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";

// const AuthPage: React.FC = () => {
//   const authModal = useRecoilValue(authModalState);
//   const [user, loading] = useAuthState(auth);
//   const router = useRouter();
//   const [pageLoading, setPageLoading] = useState(true);

//   useEffect(() => {
//     if (user) router.push("/categories"); // Redirect after login
//     if (!loading && !user) setPageLoading(false);
//   }, [user, router, loading]);

//   if (pageLoading) return <div className="text-white text-center mt-20">Loading...</div>;

//   return (
//     <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col items-center justify-center text-white">
//       <Navbar />
//       <div className="flex flex-col items-center text-center">
//         <Image src="/hero.png" alt="Hero" width={500} height={500} className="rounded-lg shadow-lg" />
//         <h1 className="text-4xl font-bold mt-6">🚀 AI-Driven Interview Preparation</h1>
//         <p className="text-lg mt-3 text-gray-300 max-w-lg">
//           Get ready for interviews with AI-powered feedback and real-world simulations.
//         </p>
//       </div>
//       {authModal.isOpen && <AuthModal />}
//     </div>
//   );
// };

// export default AuthPage;
// import { authModalState } from "@/atoms/authModalAtom";
// import AuthModal from "@/components/Modals/AuthModal";
// import { useRecoilValue } from "recoil";
// import { motion } from "framer-motion";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import Link from "next/link";

// const AuthPage: React.FC = () => {
//   const authModal = useRecoilValue(authModalState);
//   const router = useRouter();

//   return (
//     <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col items-center justify-center text-white relative">
//       {/* Clickable Logo in Top Left */}
//       <Link href="/" className="absolute top-6 left-8 flex items-center space-x-3 cursor-pointer">
//         <Image src="/KeyVoidTransP.png" alt="Key-Void Logo" width={250} height={250} />
//       </Link>

//       {/* Auth Content */}
//       <motion.div
//         className="flex flex-col items-center text-center px-6"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
//           Welcome to Key-Void
//         </h1>
//         <p className="text-lg text-gray-400 max-w-lg">
//           Sign in or create an account to access AI-powered learning & interview simulations.
//         </p>

//         {/* Sign In & Sign Up Buttons */}
//         <div className="mt-8 space-x-4">
//           <motion.button
//             onClick={() => router.push("/auth/login")}
//             className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition"
//             whileHover={{ scale: 1.05 }}
//           >
//             Sign In
//           </motion.button>
//           <motion.button
//             onClick={() => router.push("/auth/signup")}
//             className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-md transition"
//             whileHover={{ scale: 1.05 }}
//           >
//             Sign Up
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Authentication Modal */}
//       {authModal.isOpen && <AuthModal />}
//     </div>
//   );
// };

// export default AuthPage;
import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const AuthPage: React.FC = () => {
  const authModal = useRecoilValue(authModalState);
  const router = useRouter();

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Animated Background Glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-purple-500 opacity-30 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        style={{ top: "10%", left: "-20%" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-500 opacity-30 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1.5 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        style={{ bottom: "10%", right: "-30%" }}
      />

      {/* Clickable Logo with Entrance Animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-6 left-8 flex items-center space-x-3 cursor-pointer"
      >
        <Link href="/">
          <Image
            src="/KeyVoidTransP.png"
            alt="Key-Void Logo"
            width={250}
            height={250}
            className="hover:scale-105 transition-transform"
          />
        </Link>
      </motion.div>

      {/* Auth Content with Smooth Entry */}
      <motion.div
        className="flex flex-col items-center text-center px-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Welcome to Key-Void
        </h1>
        <p className="text-lg text-gray-400 max-w-lg">
          Sign in or create an account to access AI-powered learning & interview simulations.
        </p>

        {/* Sign In & Sign Up Buttons with Hover Effects */}
        <motion.div className="mt-8 space-x-4 flex">
          <motion.button
            onClick={() => router.push("/auth/login")}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition relative overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-blue-700 opacity-10 transition-opacity"></span>
            Sign In
          </motion.button>

          <motion.button
            onClick={() => router.push("/auth/signup")}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-md transition relative overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gray-900 opacity-10 transition-opacity"></span>
            Sign Up
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Authentication Modal */}
      {authModal.isOpen && <AuthModal />}
    </div>
  );
};

export default AuthPage;
