// import { useRouter } from "next/router";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "@/firebase/firebase";
// import Navbar from "@/components/Navbar/Navbar";
// import { useEffect } from "react";
// import { useRouter } from "next/router";

// const AuthIndex = () => {
//   const router = useRouter();
//   const [user, loading] = useAuthState(auth);

//   useEffect(() => {
//     if (user) router.push("/categories");
//   }, [user, router]);

//   if (loading) return <p className="text-center text-gray-400">Loading...</p>;

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
//       <Navbar />
//       <h1 className="text-4xl font-bold mb-6">Welcome to Key-Void</h1>
//       <p className="text-lg text-gray-400 mb-8">Sign in or create an account to continue.</p>

//       <div className="flex space-x-4">
//         <button
//           onClick={() => router.push("/auth/login")}
//           className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition"
//         >
//           Sign In
//         </button>

//         <button
//           onClick={() => router.push("/auth/signup")}
//           className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
//         >
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AuthIndex;
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect } from "react";

const AuthIndex = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) router.push("/categories");
  }, [user, router]);

  if (loading) return <p className="text-center text-gray-400">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <Navbar />
      <h1 className="text-4xl font-bold mb-6">Welcome to Key-Void</h1>
      <p className="text-lg text-gray-400 mb-8">Sign in or create an account to continue.</p>

      <div className="flex space-x-4">
        <button
          onClick={() => router.push("/auth/login")}
          className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Sign In
        </button>

        <button
          onClick={() => router.push("/auth/signup")}
          className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default AuthIndex;
