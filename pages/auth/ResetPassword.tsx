// import { auth } from "@/firebase/firebase";
// import React, { useState, useEffect } from "react";
// import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
// import { toast } from "react-toastify";
// type ResetPasswordProps = {};

// const ResetPassword: React.FC<ResetPasswordProps> = () => {
// 	const [email, setEmail] = useState("");
// 	const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
// 	const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		const success = await sendPasswordResetEmail(email);
// 		if (success) {
// 			toast.success("Password reset email sent", { position: "top-center", autoClose: 3000, theme: "dark" });
// 		}
// 	};

// 	useEffect(() => {
// 		if (error) {
// 			alert(error.message);
// 		}
// 	}, [error]);
// 	return (
// 		<form className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8' onSubmit={handleReset}>
// 			<h3 className='text-xl font-medium  text-white'>Reset Password</h3>
// 			<p className='text-sm text-white '>
// 				Forgotten your password? Enter your e-mail address below, and we&apos;ll send you an e-mail allowing you
// 				to reset it.
// 			</p>
// 			<div>
// 				<label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
// 					Your email
// 				</label>
// 				<input
// 					type='email'
// 					name='email'
// 					onChange={(e) => setEmail(e.target.value)}
// 					id='email'
// 					className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
// 					placeholder='name@company.com'
// 				/>
// 			</div>

// 			<button
// 				type='submit'
// 				className={`w-full text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
//                 bg-brand-orange hover:bg-brand-orange-s `}
// 			>
// 				Reset Password
// 			</button>
// 		</form>
// 	);
// };
// export default ResetPassword;
import { auth } from "@/firebase/firebase";
import React, { useState, useEffect } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.warn("Please enter a valid email!", { position: "top-center", autoClose: 3000, theme: "dark" });
      return;
    }

    const success = await sendPasswordResetEmail(email);
    if (success) {
      toast.success("📩 Password reset email sent!", { position: "top-center", autoClose: 3000, theme: "dark" });
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
    }
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <motion.form
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-xl space-y-6"
        onSubmit={handleReset}
      >
        <h3 className="text-2xl font-semibold text-center">🔐 Reset Your Password</h3>
        <p className="text-sm text-gray-300 text-center">
          Forgotten your password? Enter your email, and we'll send you a reset link.
        </p>

        <div>
          <label className="text-sm font-medium block mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:ring-2 focus:ring-blue-500"
            placeholder="name@company.com"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-lg transition"
          disabled={sending}
        >
          {sending ? "⏳ Sending..." : "Send Reset Email"}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ResetPassword;
