// // import { authModalState } from "@/atoms/authModalAtom";
// // import React, { useEffect } from "react";
// // import { IoClose } from "react-icons/io5";
// // import Login from "./Login";
// // import ResetPassword from "./ResetPassword";
// // import Signup from "./Signup";
// // import { useRecoilValue, useSetRecoilState } from "recoil";

// // type AuthModalProps = {};

// // const AuthModal: React.FC<AuthModalProps> = () => {
// // 	const authModal = useRecoilValue(authModalState);
// // 	const closeModal = useCloseModal();
// // 	return (
// // 		<>
// // 			<div
// // 				className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60'
// // 				onClick={closeModal}
// // 			></div>
// // 			<div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
// // 				<div className='relative w-full h-full mx-auto flex items-center justify-center'>
// // 					<div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6'>
// // 						<div className='flex justify-end p-2'>
// // 							<button
// // 								type='button'
// // 								className='bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
// // 								onClick={closeModal}
// // 							>
// // 								<IoClose className='h-5 w-5' />
// // 							</button>
// // 						</div>
// // 						{authModal.type === "login" ? <Login /> : authModal.type === "register" ? <Signup /> : <ResetPassword />}
// // 					</div>
// // 				</div>
// // 			</div>
// // 		</>
// // 	);
// // };
// // export default AuthModal;

// // function useCloseModal() {
// // 	const setAuthModal = useSetRecoilState(authModalState);

// // 	const closeModal = () => {
// // 		setAuthModal((prev) => ({ ...prev, isOpen: false, type: "login" }));
// // 	};

// // 	useEffect(() => {
// // 		const handleEsc = (e: KeyboardEvent) => {
// // 			if (e.key === "Escape") closeModal();
// // 		};
// // 		window.addEventListener("keydown", handleEsc);
// // 		return () => window.removeEventListener("keydown", handleEsc);
// // 	}, []);

// // 	return closeModal;
// // }
// import { authModalState } from "@/atoms/authModalAtom";
// import React, { useEffect } from "react";
// import { IoClose } from "react-icons/io5";
// import Login from "./Login";
// import ResetPassword from "./ResetPassword";
// import Signup from "./Signup";
// import { useRecoilValue, useSetRecoilState } from "recoil";

// const AuthModal: React.FC = () => {
//   const authModal = useRecoilValue(authModalState);
//   const closeModal = useCloseModal();

//   return (
//     <>
//       {/* Background Overlay */}
//       <div
//         className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
//         onClick={closeModal}
//       ></div>

//       {/* Modal Content */}
//       <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-gradient-to-b from-brand-orange to-gray-900 p-6 rounded-lg shadow-lg">
//         {/* Close Button */}
//         <div className="flex justify-end">
//           <button className="text-white hover:text-gray-300" onClick={closeModal}>
//             <IoClose className="h-5 w-5" />
//           </button>
//         </div>

//         {/* Load Correct Component */}
//         {authModal.type === "login" ? <Login /> : authModal.type === "register" ? <Signup /> : <ResetPassword />}
//       </div>
//     </>
//   );
// };

// export default AuthModal;

// // Hook to handle closing the modal
// function useCloseModal() {
//   const setAuthModal = useSetRecoilState(authModalState);

//   const closeModal = () => {
//     setAuthModal((prev) => ({ ...prev, isOpen: false, type: "login" }));
//   };

//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") closeModal();
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   return closeModal;
// }
// import { authModalState } from "@/atoms/authModalAtom";
// import React, { useEffect } from "react";
// import { IoClose } from "react-icons/io5";
// import Login from "@/pages/auth/login";
// import Signup from "@/pages/auth/signup";
// import ResetPassword from "@/pages/auth/ResetPassword";
// import { useRecoilValue, useSetRecoilState } from "recoil";

// const AuthModal: React.FC = () => {
//   const authModal = useRecoilValue(authModalState);
//   const closeModal = useCloseModal();

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//         onClick={closeModal}
//       ></div>

//       {/* Modal */}
//       <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
//         {/* Close Button */}
//         <div className="flex justify-end">
//           <button className="text-gray-300 hover:text-white" onClick={closeModal}>
//             <IoClose className="h-6 w-6" />
//           </button>
//         </div>

//         {/* Conditional Rendering */}
//         {authModal.type === "login" ? <Login /> : authModal.type === "register" ? <Signup /> : <ResetPassword />}
//       </div>
//     </>
//   );
// };

// export default AuthModal;

// // Hook to Close Modal
// function useCloseModal() {
//   const setAuthModal = useSetRecoilState(authModalState);

//   const closeModal = () => {
//     setAuthModal((prev) => ({ ...prev, isOpen: false, type: "login" }));
//   };

//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") closeModal();
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   return closeModal;
// }
import { authModalState } from "@/atoms/authModalAtom";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Login from "@/pages/auth/login";
import Signup from "@/pages/auth/signup";
import ResetPassword from "@/pages/auth/ResetPassword";
import { useRecoilValue, useSetRecoilState } from "recoil";

const AuthModal: React.FC = () => {
  const authModal = useRecoilValue(authModalState);
  const closeModal = useCloseModal();

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}></div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button className="text-gray-300 hover:text-white" onClick={closeModal}>
            <IoClose className="h-6 w-6" />
          </button>
        </div>

        {authModal.type === "login" ? <Login /> : authModal.type === "register" ? <Signup /> : <ResetPassword />}
      </div>
    </>
  );
};

export default AuthModal;

function useCloseModal() {
  const setAuthModal = useSetRecoilState(authModalState);

  const closeModal = () => {
    setAuthModal((prev) => ({ ...prev, isOpen: false, type: "login" }));
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return closeModal;
}
