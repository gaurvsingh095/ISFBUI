// import { authModalState } from "@/atoms/authModalAtom";
// import { auth } from "@/firebase/firebase";
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";
// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
// import { useSetRecoilState } from "recoil";
// import { toast } from "react-toastify";
// type LoginProps = {};

// const Login: React.FC<LoginProps> = () => {
// 	const setAuthModalState = useSetRecoilState(authModalState);
// 	const handleClick = (type: "login" | "register" | "forgotPassword") => {
// 		setAuthModalState((prev) => ({ ...prev, type }));
// 	};
// 	const [inputs, setInputs] = useState({ email: "", password: "" });
// 	const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
// 	const router = useRouter();
// 	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// 	};

// 	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		if (!inputs.email || !inputs.password) return alert("Please fill all fields");
// 		try {
// 			const newUser = await signInWithEmailAndPassword(inputs.email, inputs.password);
// 			if (!newUser) return;
// 			router.push("/");
// 		} catch (error: any) {
// 			toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
// 		}
// 	};

// 	useEffect(() => {
// 		if (error) toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
// 	}, [error]);
// 	return (
// 		<form className='space-y-6 px-6 pb-4' onSubmit={handleLogin}>
// 			<h3 className='text-xl font-medium text-white'>Sign in to InstaFeed</h3>
// 			<div>
// 				<label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
// 					Your Email
// 				</label>
// 				<input
// 					onChange={handleInputChange}
// 					type='email'
// 					name='email'
// 					id='email'
// 					className='
//             border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
//             bg-gray-600 border-gray-500 placeholder-gray-400 text-white
//         '
// 					placeholder='name@company.com'
// 				/>
// 			</div>
// 			<div>
// 				<label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
// 					Your Password
// 				</label>
// 				<input
// 					onChange={handleInputChange}
// 					type='password'
// 					name='password'
// 					id='password'
// 					className='
//             border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
//             bg-gray-600 border-gray-500 placeholder-gray-400 text-white
//         '
// 					placeholder='*******'
// 				/>
// 			</div>

// 			<button
// 				type='submit'
// 				className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
//                 text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
//             '
// 			>
// 				{loading ? "Loading..." : "Log In"}
// 			</button>
// 			<button className='flex w-full justify-end' onClick={() => handleClick("forgotPassword")}>
// 				<a href='#' className='text-sm block text-brand-orange hover:underline w-full text-right'>
// 					Forgot Password?
// 				</a>
// 			</button>
// 			<div className='text-sm font-medium text-gray-300'>
// 				Not Registered?{" "}
// 				<a href='#' className='text-blue-700 hover:underline' onClick={() => handleClick("register")}>
// 					Create account
// 				</a>
// 			</div>
// 		</form>
// 	);
// };
// export default Login;
// import { authModalState } from "@/atoms/authModalAtom";
// import { auth } from "@/firebase/firebase";
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";
// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
// import { useSetRecoilState } from "recoil";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";

// const Login: React.FC = () => {
//   const setAuthModalState = useSetRecoilState(authModalState);
//   const router = useRouter();
//   const [inputs, setInputs] = useState({ email: "", password: "" });
//   const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

//   useEffect(() => {
// 	if (user) router.push("/categories");
//   }, [user, router]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 	setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
// 	e.preventDefault();
// 	if (!inputs.email || !inputs.password) return toast.warn("Please fill all fields!");

// 	try {
// 	  await signInWithEmailAndPassword(inputs.email, inputs.password);
// 	  router.push("/categories");
// 	} catch (error: any) {
// 	  toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
// 	}
//   };

//   return (
// 	<form className="space-y-6 px-6 pb-4 bg-gray-800 p-8 rounded-lg shadow-xl text-white w-full max-w-lg mx-auto">
// 	  <h3 className="text-2xl font-semibold text-center">Sign in to Key-Void</h3>

// 	  <div>
// 		<label className="text-sm font-medium block mb-2">Your Email</label>
// 		<input
// 		  onChange={handleInputChange}
// 		  type="email"
// 		  name="email"
// 		  className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:ring-2 focus:ring-blue-500"
// 		  placeholder="name@company.com"
// 		/>
// 	  </div>

// 	  <div>
// 		<label className="text-sm font-medium block mb-2">Your Password</label>
// 		<input
// 		  onChange={handleInputChange}
// 		  type="password"
// 		  name="password"
// 		  className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:ring-2 focus:ring-blue-500"
// 		  placeholder="*******"
// 		/>
// 	  </div>

// 	  <motion.button
// 		whileHover={{ scale: 1.05 }}
// 		whileTap={{ scale: 0.95 }}
// 		type="submit"
// 		className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-lg transition"
// 	  >
// 		{loading ? "Loading..." : "Log In"}
// 	  </motion.button>

// 	  <div className="text-sm text-center mt-4">
// 		Not Registered?{" "}
// 		<a href="./signup" className="text-blue-400 hover:underline">
// 		  Create account
// 		</a>
// 	  </div>
// 	</form>
//   );
// };

// export default Login;