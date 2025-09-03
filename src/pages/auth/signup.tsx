// // import { authModalState } from "@/atoms/authModalAtom";
// // import { auth, firestore } from "@/firebase/firebase";
// // import { useEffect, useState } from "react";
// // import { useSetRecoilState } from "recoil";
// // import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
// // import { useRouter } from "next/router";
// // import { doc, setDoc } from "firebase/firestore";
// // import { toast } from "react-toastify";

// // type SignupProps = {};

// // const Signup: React.FC<SignupProps> = () => {
// // 	const setAuthModalState = useSetRecoilState(authModalState);
// // 	const handleClick = () => {
// // 		setAuthModalState((prev) => ({ ...prev, type: "login" }));
// // 	};
// // 	const [inputs, setInputs] = useState({ email: "", displayName: "", password: "" });
// // 	const router = useRouter();
// // 	const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
// // 	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
// // 		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// // 	};

// // 	const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
// // 		e.preventDefault();
// // 		if (!inputs.email || !inputs.password || !inputs.displayName) return alert("Please fill all fields");
// // 		try {
// // 			toast.loading("Creating your account", { position: "top-center", toastId: "loadingToast" });
// // 			const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
// // 			if (!newUser) return;
// // 			const userData = {
// // 				uid: newUser.user.uid,
// // 				email: newUser.user.email,
// // 				displayName: inputs.displayName,
// // 				createdAt: Date.now(),
// // 				updatedAt: Date.now(),
// // 				likedProblems: [],
// // 				dislikedProblems: [],
// // 				solvedProblems: [],
// // 				starredProblems: [],
// // 			};
// // 			await setDoc(doc(firestore, "users", newUser.user.uid), userData);
// // 			router.push("/");
// // 		} catch (error: any) {
// // 			toast.error(error.message, { position: "top-center" });
// // 		} finally {
// // 			toast.dismiss("loadingToast");
// // 		}
// // 	};

// // 	useEffect(() => {
// // 		if (error) alert(error.message);
// // 	}, [error]);

// // 	return (
// // 		<form className='space-y-6 px-6 pb-4' onSubmit={handleRegister}>
// // 			<h3 className='text-xl font-medium text-white'>Register to Key-Void's InstaFeed</h3>
// // 			<div>
// // 				<label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
// // 					Email
// // 				</label>
// // 				<input
// // 					onChange={handleChangeInput}
// // 					type='email'
// // 					name='email'
// // 					id='email'
// // 					className='
// //         border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
// //         bg-gray-600 border-gray-500 placeholder-gray-400 text-white
// //     '
// // 					placeholder='name@company.com'
// // 				/>
// // 			</div>
// // 			<div>
// // 				<label htmlFor='displayName' className='text-sm font-medium block mb-2 text-gray-300'>
// // 					Display Name
// // 				</label>
// // 				<input
// // 					onChange={handleChangeInput}
// // 					type='displayName'
// // 					name='displayName'
// // 					id='displayName'
// // 					className='
// //         border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
// //         bg-gray-600 border-gray-500 placeholder-gray-400 text-white
// //     '
// // 					placeholder='John Doe'
// // 				/>
// // 			</div>
// // 			<div>
// // 				<label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
// // 					Password
// // 				</label>
// // 				<input
// // 					onChange={handleChangeInput}
// // 					type='password'
// // 					name='password'
// // 					id='password'
// // 					className='
// //         border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
// //         bg-gray-600 border-gray-500 placeholder-gray-400 text-white
// //     '
// // 					placeholder='*******'
// // 				/>
// // 			</div>

// // 			<button
// // 				type='submit'
// // 				className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
// //             text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
// //         '
// // 			>
// // 				{loading ? "Registering..." : "Register"}
// // 			</button>

// // 			<div className='text-sm font-medium text-gray-300'>
// // 				Already have an account?{" "}
// // 				<a href='login' className='text-blue-700 hover:underline' onClick={handleClick}>
// // 					Log In
// // 				</a>
// // 			</div>
// // 		</form>
// // 	);
// // };
// // export default Signup;
// import { auth, firestore } from "@/firebase/firebase";
// import { useEffect, useState } from "react";
// import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
// import { useRouter } from "next/router";
// import { doc, setDoc } from "firebase/firestore";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";

// const Signup: React.FC = () => {
//   const [inputs, setInputs] = useState({ email: "", displayName: "", password: "" });
//   const router = useRouter();
//   const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

//   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!inputs.email || !inputs.password || !inputs.displayName) return toast.warn("Please fill all fields!");

//     try {
//       toast.loading("Creating your account...");
//       const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
//       if (!newUser) return;

//       await setDoc(doc(firestore, "users", newUser.user.uid), {
//         uid: newUser.user.uid,
//         email: newUser.user.email,
//         displayName: inputs.displayName,
//         createdAt: Date.now(),
//       });

//       toast.success("Account Created!");
//       router.push("/");
//     } catch (error: any) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <form className="space-y-6 px-6 pb-4 bg-gray-800 p-8 rounded-lg shadow-xl text-white w-full max-w-lg mx-auto">
//       <h3 className="text-2xl font-semibold text-center">Register to Key-Void</h3>

//       <div>
//         <label className="text-sm font-medium block mb-2">Email</label>
//         <input
//           onChange={handleChangeInput}
//           type="email"
//           name="email"
//           className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:ring-2 focus:ring-blue-500"
//           placeholder="name@company.com"
//         />
//       </div>

//       <div>
//         <label className="text-sm font-medium block mb-2">Display Name</label>
//         <input
//           onChange={handleChangeInput}
//           type="text"
//           name="displayName"
//           className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:ring-2 focus:ring-blue-500"
//           placeholder="John Doe"
//         />
//       </div>

//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         type="submit"
//         className="w-full p-3 bg-green-600 hover:bg-green-700 rounded-lg text-white text-lg transition"
//       >
//         {loading ? "Registering..." : "Register"}
//       </motion.button>
//     </form>
//   );
// };

// export default Signup;
import { auth, firestore } from "@/firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";

const Signup: React.FC = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({ email: "", password: "", displayName: "" });
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) router.push("/categories");
  }, [user, router]);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password || !inputs.displayName) return alert("Please fill all fields");

    const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
    if (!newUser) return;

    await setDoc(doc(firestore, "users", newUser.user.uid), {
      uid: newUser.user.uid,
      email: newUser.user.email,
      displayName: inputs.displayName,
      createdAt: Date.now(),
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white"
    >
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 text-transparent bg-clip-text">
        Create an Account
      </h2>

      <form className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-xl space-y-6" onSubmit={handleRegister}>
        <input
          type="text"
          name="displayName"
          placeholder="Display Name"
          onChange={(e) => setInputs((prev) => ({ ...prev, displayName: e.target.value }))}
          className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-green-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setInputs((prev) => ({ ...prev, email: e.target.value }))}
          className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-green-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setInputs((prev) => ({ ...prev, password: e.target.value }))}
          className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-green-500"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full p-3 bg-green-500 hover:bg-green-600 rounded-lg text-white text-lg transition"
        >
          {loading ? "Creating Account..." : "Register"}
        </motion.button>
      </form>

      <p className="text-gray-400 mt-4">
        Already have an account?{" "}
        <span onClick={() => router.push("/auth/login")} className="text-green-400 cursor-pointer hover:underline">
          Sign In
        </span>
      </p>
    </motion.div>
  );
};

export default Signup;
