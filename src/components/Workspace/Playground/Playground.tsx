// import { useState, useEffect } from "react";
// import PreferenceNav from "./PreferenceNav/PreferenceNav";
// import Split from "react-split";
// import CodeMirror from "@uiw/react-codemirror";
// import { vscodeDark } from "@uiw/codemirror-theme-vscode";
// import { javascript } from "@codemirror/lang-javascript";
// import EditorFooter from "./EditorFooter";
// import { Problem } from "@/utils/types/problem";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, firestore } from "@/firebase/firebase";
// import { toast } from "react-toastify";
// import { problems } from "@/utils/problems";
// import { useRouter } from "next/router";
// import { arrayUnion, doc, updateDoc } from "firebase/firestore";
// import useLocalStorage from "@/hooks/useLocalStorage";

// type PlaygroundProps = {
// 	problem: Problem;
// 	setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
// 	setSolved: React.Dispatch<React.SetStateAction<boolean>>;
// };

// export interface ISettings {
// 	fontSize: string;
// 	settingsModalIsOpen: boolean;
// 	dropdownIsOpen: boolean;
// }

// const Playground: React.FC<PlaygroundProps> = ({ problem, setSuccess, setSolved }) => {
// 	const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
// 	let [userCode, setUserCode] = useState<string>(problem.starterCode);

// 	const [fontSize, setFontSize] = useLocalStorage("lcc-fontSize", "16px");

// 	const [settings, setSettings] = useState<ISettings>({
// 		fontSize: fontSize,
// 		settingsModalIsOpen: false,
// 		dropdownIsOpen: false,
// 	});

// 	const [user] = useAuthState(auth);
// 	const {
// 		query: { pid },
// 	} = useRouter();

// 	const handleSubmit = async () => {
// 		if (!user) {
// 			toast.error("Please login to submit your code", {
// 				position: "top-center",
// 				autoClose: 3000,
// 				theme: "dark",
// 			});
// 			return;
// 		}
// 		try {
// 			userCode = userCode.slice(userCode.indexOf(problem.starterFunctionName));
// 			const cb = new Function(`return ${userCode}`)();
// 			const handler = problems[pid as string].handlerFunction;

// 			if (typeof handler === "function") {
// 				const success = handler(cb);
// 				if (success) {
// 					toast.success("Congrats! All tests passed!", {
// 						position: "top-center",
// 						autoClose: 3000,
// 						theme: "dark",
// 					});
// 					setSuccess(true);
// 					setTimeout(() => {
// 						setSuccess(false);
// 					}, 4000);

// 					const userRef = doc(firestore, "users", user.uid);
// 					await updateDoc(userRef, {
// 						solvedProblems: arrayUnion(pid),
// 					});
// 					setSolved(true);
// 				}
// 			}
// 		} catch (error: any) {
// 			console.log(error.message);
// 			if (
// 				error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")
// 			) {
// 				toast.error("Oops! One or more test cases failed", {
// 					position: "top-center",
// 					autoClose: 3000,
// 					theme: "dark",
// 				});
// 			} else {
// 				toast.error(error.message, {
// 					position: "top-center",
// 					autoClose: 3000,
// 					theme: "dark",
// 				});
// 			}
// 		}
// 	};

// 	useEffect(() => {
// 		const code = localStorage.getItem(`code-${pid}`);
// 		if (user) {
// 			setUserCode(code ? JSON.parse(code) : problem.starterCode);
// 		} else {
// 			setUserCode(problem.starterCode);
// 		}
// 	}, [pid, user, problem.starterCode]);

// 	const onChange = (value: string) => {
// 		setUserCode(value);
// 		localStorage.setItem(`code-${pid}`, JSON.stringify(value));
// 	};

// 	return (
// 		<div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
// 			<PreferenceNav settings={settings} setSettings={setSettings} />

// 			<Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
// 				<div className='w-full overflow-auto'>
// 					<CodeMirror
// 						value={userCode}
// 						theme={vscodeDark}
// 						onChange={onChange}
// 						extensions={[javascript()]}
// 						style={{ fontSize: settings.fontSize }}
// 					/>
// 				</div>
// 				<div className='w-full px-5 overflow-auto'>
// 					{/* testcase heading */}
// 					<div className='flex h-10 items-center space-x-6'>
// 						<div className='relative flex h-full flex-col justify-center cursor-pointer'>
// 							<div className='text-sm font-medium leading-5 text-white'>Testcases</div>
// 							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
// 						</div>
// 					</div>

// 					<div className='flex'>
// 						{problem.examples.map((example, index) => (
// 							<div
// 								className='mr-2 items-start mt-2 '
// 								key={example.id}
// 								onClick={() => setActiveTestCaseId(index)}
// 							>
// 								<div className='flex flex-wrap items-center gap-y-4'>
// 									<div
// 										className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
// 										${activeTestCaseId === index ? "text-white" : "text-gray-500"}
// 									`}
// 									>
// 										Case {index + 1}
// 									</div>
// 								</div>
// 							</div>
// 						))}
// 					</div>

// 					<div className='font-semibold my-4'>
// 						<p className='text-sm font-medium mt-4 text-white'>Input:</p>
// 						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
// 							{problem.examples[activeTestCaseId].inputText}
// 						</div>
// 						<p className='text-sm font-medium mt-4 text-white'>Output:</p>
// 						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
// 							{problem.examples[activeTestCaseId].outputText}
// 						</div>
// 					</div>
// 				</div>
// 			</Split>
// 			<EditorFooter handleSubmit={handleSubmit} />
// 		</div>
// 	);
// };
// export default Playground;
// import { useState, useEffect } from "react";
// import PreferenceNav from "./PreferenceNav/PreferenceNav";
// import Split from "react-split";
// import CodeMirror from "@uiw/react-codemirror";
// import { vscodeDark } from "@uiw/codemirror-theme-vscode";
// import { javascript } from "@codemirror/lang-javascript";
// import { python } from "@codemirror/lang-python";
// import { java } from "@codemirror/lang-java";
// import EditorFooter from "./EditorFooter";
// import { Problem } from "@/utils/types/problem";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, firestore } from "@/firebase/firebase";
// import { toast } from "react-toastify";
// import { problems } from "@/utils/problems";
// import { useRouter } from "next/router";
// import { arrayUnion, doc, updateDoc } from "firebase/firestore";
// import useLocalStorage from "@/hooks/useLocalStorage";
// import { compileCode } from "@/utils/CodeCompilerService";
// import LanguageSelector from "./LanguageSelector";

// type PlaygroundProps = {
// 	problem: Problem;
// 	setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
// 	setSolved: React.Dispatch<React.SetStateAction<boolean>>;
// };

// export interface ISettings {
// 	fontSize: string;
// 	settingsModalIsOpen: boolean;
// 	dropdownIsOpen: boolean;
// }

// const Playground: React.FC<PlaygroundProps> = ({ problem, setSuccess, setSolved }) => {
// 	const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
// 	const [userCode, setUserCode] = useState<string>(problem.starterCode);
// 	const [outputResult, setOutputResult] = useState<string>("");
// 	const [isCompiling, setIsCompiling] = useState<boolean>(false);
// 	const [language, setLanguage] = useLocalStorage("lcc-language", "javascript");

// 	const [fontSize, setFontSize] = useLocalStorage("lcc-fontSize", "16px");

// 	const [settings, setSettings] = useState<ISettings>({
// 		fontSize: fontSize,
// 		settingsModalIsOpen: false,
// 		dropdownIsOpen: false,
// 	});

// 	const [user] = useAuthState(auth);
// 	const {
// 		query: { pid },
// 	} = useRouter();

// 	// This function handles both the "Submit" and "Run Code" actions
// 	const handleExecuteCode = async (isSubmit: boolean) => {
// 		if (isCompiling) return;
		
// 		setIsCompiling(true);
// 		setOutputResult("Compiling...");
		
// 		try {
// 			const response = await compileCode(userCode, language);
			
// 			setOutputResult(response.success ? response.output : response.error || "An error occurred");
			
// 			if (isSubmit && response.success) {
// 				handleSubmitSolution();
// 			}
// 		} catch (error) {
// 			console.error("Error executing code:", error);
// 			setOutputResult("An error occurred while executing the code.");
// 		} finally {
// 			setIsCompiling(false);
// 		}
// 	};

// 	const handleSubmitSolution = async () => {
// 		if (!user) {
// 			toast.error("Please login to submit your code", {
// 				position: "top-center",
// 				autoClose: 3000,
// 				theme: "dark",
// 			});
// 			return;
// 		}
		
// 		try {
// 			let code = userCode;
// 			if (language === "javascript") {
// 				code = code.slice(code.indexOf(problem.starterFunctionName));
// 				const cb = new Function(`return ${code}`)();
// 				const handler = problems[pid as string].handlerFunction;

// 				if (typeof handler === "function") {
// 					const success = handler(cb);
// 					if (success) {
// 						toast.success("Congrats! All tests passed!", {
// 							position: "top-center",
// 							autoClose: 3000,
// 							theme: "dark",
// 						});
// 						setSuccess(true);
// 						setTimeout(() => {
// 							setSuccess(false);
// 						}, 4000);

// 						const userRef = doc(firestore, "users", user.uid);
// 						await updateDoc(userRef, {
// 							solvedProblems: arrayUnion(pid),
// 						});
// 						setSolved(true);
// 					}
// 				}
// 			} else {
// 				// For Python and Java, we rely on the compile service's validation
// 				toast.success("Code submitted successfully!", {
// 					position: "top-center",
// 					autoClose: 3000,
// 					theme: "dark",
// 				});
// 			}
// 		} catch (error: any) {
// 			console.log(error.message);
// 			if (
// 				error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")
// 			) {
// 				toast.error("Oops! One or more test cases failed", {
// 					position: "top-center",
// 					autoClose: 3000,
// 					theme: "dark",
// 				});
// 			} else {
// 				toast.error(error.message, {
// 					position: "top-center",
// 					autoClose: 3000,
// 					theme: "dark",
// 				});
// 			}
// 		}
// 	};

// 	useEffect(() => {
// 		const code = localStorage.getItem(`code-${pid}-${language}`);
// 		if (user) {
// 			setUserCode(code ? JSON.parse(code) : getStarterCodeForLanguage());
// 		} else {
// 			setUserCode(getStarterCodeForLanguage());
// 		}
// 	}, [pid, user, language]);

// 	const getStarterCodeForLanguage = () => {
// 		// In a real implementation, you would have different starter code for each language
// 		switch (language) {
// 			case "python":
// 				return "# Write your Python solution here\n\ndef solve(nums):\n    # Your code here\n    pass\n\n# Test with example\nprint(solve([1, 2, 3]))";
// 			case "java":
// 				return "// Write your Java solution here\n\npublic class Solution {\n    public static void main(String[] args) {\n        int[] nums = {1, 2, 3};\n        System.out.println(solve(nums));\n    }\n    \n    public static int solve(int[] nums) {\n        // Your code here\n        return 0;\n    }\n}";
// 			default:
// 				return problem.starterCode;
// 		}
// 	};

// 	const onChange = (value: string) => {
// 		setUserCode(value);
// 		localStorage.setItem(`code-${pid}-${language}`, JSON.stringify(value));
// 	};

// 	const getLanguageExtension = () => {
// 		switch (language) {
// 			case "python":
// 				return python();
// 			case "java":
// 				return java();
// 			default:
// 				return javascript();
// 		}
// 	};

// 	return (
// 		<div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
// 			<div className="flex items-center justify-between bg-dark-layer-2 h-11 w-full">
// 				<LanguageSelector 
// 					language={language} 
// 					setLanguage={setLanguage} 
// 					className="ml-2"
// 				/>
// 			<PreferenceNav settings={settings} setSettings={setSettings} />
// 			</div>

// 			<Split 
// 				className='h-[calc(100vh-94px)]' 
// 				direction='vertical' 
// 				sizes={[60, 40]} 
// 				minSize={60}
// 			>
// 				<div className='w-full overflow-auto'>
// 					<CodeMirror
// 						value={userCode}
// 						theme={vscodeDark}
// 						onChange={onChange}
// 						extensions={[getLanguageExtension()]}
// 						style={{ fontSize: settings.fontSize }}
// 					/>
// 				</div>
// 				<div className='w-full px-5 overflow-auto'>
// 					{/* Output and Testcase tabs */}
// 					<div className='flex h-10 items-center space-x-6'>
// 						<div className='relative flex h-full flex-col justify-center cursor-pointer'>
// 							<div className='text-sm font-medium leading-5 text-white'>Testcases</div>
// 							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
// 						</div>
// 					</div>

// 					{/* Execution output */}
// 					{outputResult && (
// 						<div className="my-4">
// 							<p className='text-sm font-medium mt-4 text-white'>Execution Output:</p>
// 							<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2 whitespace-pre-wrap'>
// 								{outputResult}
// 							</div>
// 						</div>
// 					)}

// 					{/* Test cases */}
// 					<div className='flex'>
// 						{problem.examples.map((example, index) => (
// 							<div
// 								className='mr-2 items-start mt-2'
// 								key={example.id}
// 								onClick={() => setActiveTestCaseId(index)}
// 							>
// 								<div className='flex flex-wrap items-center gap-y-4'>
// 									<div
// 										className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
// 										${activeTestCaseId === index ? "text-white" : "text-gray-500"}
// 									`}
// 									>
// 										Case {index + 1}
// 									</div>
// 								</div>
// 							</div>
// 						))}
// 					</div>

// 					<div className='font-semibold my-4'>
// 						<p className='text-sm font-medium mt-4 text-white'>Input:</p>
// 						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
// 							{problem.examples[activeTestCaseId].inputText}
// 						</div>
// 						<p className='text-sm font-medium mt-4 text-white'>Output:</p>
// 						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
// 							{problem.examples[activeTestCaseId].outputText}
// 						</div>
// 					</div>
// 				</div>
// 			</Split>
			
// 			{/* Updated Footer with Run Code button */}
// 			<div className='flex bg-dark-layer-1 absolute bottom-0 z-10 w-full'>
// 				<div className='mx-5 my-[10px] flex justify-between w-full'>
// 					<div className='mr-2 flex flex-1 flex-nowrap items-center space-x-4'>
// 						<button 
// 							className='px-3 py-1.5 font-medium items-center transition-all inline-flex bg-dark-fill-3 text-sm hover:bg-dark-fill-2 text-dark-label-2 rounded-lg'
// 							onClick={() => handleExecuteCode(false)}
// 							disabled={isCompiling}
// 						>
// 							Run Code
// 						</button>
// 					</div>
// 					<div className='ml-auto flex items-center space-x-4'>
// 						<button
// 							className='px-3 py-1.5 text-sm font-medium items-center transition-all focus:outline-none inline-flex bg-dark-green-s text-white hover:bg-green-3 rounded-lg'
// 							onClick={() => handleExecuteCode(true)}
// 							disabled={isCompiling}
// 						>
// 							Submit
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Playground;
// import { useState, useEffect } from "react";
// import PreferenceNav from "./PreferenceNav/PreferenceNav";
// import Split from "react-split";
// import CodeMirror from "@uiw/react-codemirror";
// import { vscodeDark } from "@uiw/codemirror-theme-vscode";
// import { javascript } from "@codemirror/lang-javascript";
// import { python } from "@codemirror/lang-python";
// import { java } from "@codemirror/lang-java";
// import EditorFooter from "./EditorFooter";
// import { Problem } from "@/utils/types/problem";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, firestore } from "@/firebase/firebase";
// import { toast } from "react-toastify";
// import { problems } from "@/utils/problems";
// import { useRouter } from "next/router";
// import { arrayUnion, doc, updateDoc } from "firebase/firestore";
// import useLocalStorage from "@/hooks/useLocalStorage";
// import { compileCode } from "@/utils/CodeCompilerService";
// import LanguageSelector from "./LanguageSelector";

// type PlaygroundProps = {
// 	problem: Problem;
// 	setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
// 	setSolved: React.Dispatch<React.SetStateAction<boolean>>;
// };

// export interface ISettings {
// 	fontSize: string;
// 	settingsModalIsOpen: boolean;
// 	dropdownIsOpen: boolean;
// }

// const Playground: React.FC<PlaygroundProps> = ({ problem, setSuccess, setSolved }) => {
// 	const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
// 	const [userCode, setUserCode] = useState<string>(problem.starterCode);
// 	const [outputResult, setOutputResult] = useState<string>("");
// 	const [isCompiling, setIsCompiling] = useState<boolean>(false);
// 	const [language, setLanguage] = useLocalStorage("lcc-language", "javascript");
// 	const [fontSize, setFontSize] = useLocalStorage("lcc-fontSize", "16px");

// 	const [settings, setSettings] = useState<ISettings>({
// 		fontSize: fontSize,
// 		settingsModalIsOpen: false,
// 		dropdownIsOpen: false,
// 	});

// 	const [user] = useAuthState(auth);
// 	const {
// 		query: { pid },
// 	} = useRouter();

// 	useEffect(() => {
// 		const code = localStorage.getItem(`code-${pid}-${language}`);
// 		if (user) {
// 			setUserCode(code ? JSON.parse(code) : getStarterCodeForLanguage());
// 		} else {
// 			setUserCode(getStarterCodeForLanguage());
// 		}
// 	}, [pid, user, language]);

// 	const getStarterCodeForLanguage = () => {
// 		switch (language) {
// 			case "python":
// 				return "# Write your Python solution here\n\ndef solve(nums):\n    # Your code here\n    pass\n\nprint(solve([1, 2, 3]))";
// 			case "java":
// 				return `// Write your Java solution here\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] nums = {1, 2, 3};\n        System.out.println(solve(nums));\n    }\n\n    public static int solve(int[] nums) {\n        // Your code here\n        return 0;\n    }\n}`;
// 			default:
// 				return problem.starterCode;
// 		}
// 	};

// 	const onChange = (value: string) => {
// 		setUserCode(value);
// 		localStorage.setItem(`code-${pid}-${language}`, JSON.stringify(value));
// 	};

// 	const getLanguageExtension = () => {
// 		switch (language) {
// 			case "python":
// 				return python();
// 			case "java":
// 				return java();
// 			default:
// 				return javascript();
// 		}
// 	};

// 	const handleExecuteCode = async (isSubmit: boolean) => {
// 		if (isCompiling) return;

// 		setIsCompiling(true);
// 		setOutputResult("Compiling...");

// 		try {
// 			const response = await compileCode(userCode, language);
// 			setOutputResult(response.success ? response.output : response.error || "An error occurred");

// 			if (isSubmit && response.success) {
// 				await handleSubmitSolution();
// 			}
// 		} catch (error) {
// 			console.error("Error executing code:", error);
// 			setOutputResult("An error occurred while executing the code.");
// 		} finally {
// 			setIsCompiling(false);
// 		}
// 	};

// 	const handleSubmitSolution = async () => {
// 		if (!user) {
// 			toast.error("Please login to submit your code", {
// 				position: "top-center",
// 				autoClose: 3000,
// 				theme: "dark",
// 			});
// 			return;
// 		}

// 		try {
// 			let allPassed = true;
// 			let failedIndex = -1;

// 			if (language === "javascript") {
// 				let code = userCode;
// 				code = code.slice(code.indexOf(problem.starterFunctionName));
// 				const cb = new Function(`return ${code}`)();
// 				const handler = problems[pid as string].handlerFunction;

// 				if (typeof handler === "function") {
// 					const success = handler(cb);
// 					allPassed = success;
// 				}
// 			} else {
// 				for (let i = 0; i < problem.examples.length; i++) {
// 					const input = problem.examples[i].inputText;
// 					const expected = problem.examples[i].outputText.trim();

// 					const toRun = `${userCode}\nprint(${problem.starterFunctionName.trim()}${input})`;
// 					const result = await compileCode(toRun, language);

// 					const actual = result.output?.trim();
// 					if (actual !== expected) {
// 						allPassed = false;
// 						failedIndex = i;
// 						break;
// 					}
// 				}
// 			}

// 			if (allPassed) {
// 				toast.success("🎉 Congrats! All test cases passed!", {
// 					position: "top-center",
// 					autoClose: 3000,
// 					theme: "dark",
// 				});
// 				setSuccess(true);
// 				setTimeout(() => setSuccess(false), 4000);

// 				const userRef = doc(firestore, "users", user.uid);
// 				await updateDoc(userRef, {
// 					solvedProblems: arrayUnion(pid),
// 				});
// 				setSolved(true);
// 			} else {
// 				toast.error(`❌ Test case ${failedIndex + 1} failed.`, {
// 					position: "top-center",
// 					autoClose: 3000,
// 					theme: "dark",
// 				});
// 			}
// 		} catch (error: any) {
// 			console.error(error.message);
// 			toast.error("An error occurred while submitting the code.", {
// 				position: "top-center",
// 				autoClose: 3000,
// 				theme: "dark",
// 			});
// 		}
// 	};

// 	return (
// 		<div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
// 			<div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full'>
// 				<LanguageSelector language={language} setLanguage={setLanguage} className='ml-2' />
// 				<PreferenceNav settings={settings} setSettings={setSettings} />
// 			</div>

// 			<Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
// 				<div className='w-full overflow-auto'>
// 					<CodeMirror
// 						value={userCode}
// 						theme={vscodeDark}
// 						onChange={onChange}
// 						extensions={[getLanguageExtension()]}
// 						style={{ fontSize: settings.fontSize }}
// 					/>
// 				</div>

// 				<div className='w-full px-5 overflow-auto'>
// 					<div className='flex h-10 items-center space-x-6'>
// 						<div className='relative flex h-full flex-col justify-center cursor-pointer'>
// 							<div className='text-sm font-medium leading-5 text-white'>Testcases</div>
// 							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
// 						</div>
// 					</div>

// 					{outputResult && (
// 						<div className='my-4'>
// 							<p className='text-sm font-medium mt-4 text-white'>Execution Output:</p>
// 							<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2 whitespace-pre-wrap'>
// 								{outputResult}
// 							</div>
// 						</div>
// 					)}

// 					<div className='flex'>
// 						{problem.examples.map((example, index) => (
// 							<div
// 								className='mr-2 items-start mt-2'
// 								key={example.id}
// 								onClick={() => setActiveTestCaseId(index)}
// 							>
// 								<div className='flex flex-wrap items-center gap-y-4'>
// 									<div
// 										className={`font-medium transition-all inline-flex px-4 py-1 cursor-pointer rounded-lg bg-dark-fill-3 hover:bg-dark-fill-2 ${
// 											activeTestCaseId === index ? "text-white" : "text-gray-500"
// 										}`}
// 									>
// 										Case {index + 1}
// 									</div>
// 								</div>
// 							</div>
// 						))}
// 					</div>

// 					<div className='font-semibold my-4'>
// 						<p className='text-sm font-medium mt-4 text-white'>Input:</p>
// 						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
// 							{problem.examples[activeTestCaseId].inputText}
// 						</div>
// 						<p className='text-sm font-medium mt-4 text-white'>Output:</p>
// 						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
// 							{problem.examples[activeTestCaseId].outputText}
// 						</div>
// 					</div>
// 				</div>
// 			</Split>

// 			{/* Footer */}
// 			<div className='flex bg-dark-layer-1 absolute bottom-0 z-10 w-full'>
// 				<div className='mx-5 my-[10px] flex justify-between w-full'>
// 					<div className='mr-2 flex flex-1 flex-nowrap items-center space-x-4'>
// 						<button
// 							className='px-3 py-1.5 font-medium inline-flex bg-dark-fill-3 text-sm hover:bg-dark-fill-2 text-dark-label-2 rounded-lg'
// 							onClick={() => handleExecuteCode(false)}
// 							disabled={isCompiling}
// 						>
// 							Run Code
// 						</button>
// 					</div>
// 					<div className='ml-auto flex items-center space-x-4'>
// 						<button
// 							className='px-3 py-1.5 text-sm font-medium inline-flex bg-dark-green-s text-white hover:bg-green-3 rounded-lg'
// 							onClick={() => handleExecuteCode(true)}
// 							disabled={isCompiling}
// 						>
// 							Submit
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Playground;
import { useState, useEffect } from "react";
import PreferenceNav from "./PreferenceNav/PreferenceNav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import EditorFooter from "./EditorFooter";
import { Problem } from "@/utils/types/problem";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/firebase";
import { toast } from "react-toastify";
import { problems } from "@/utils/problems";
import { useRouter } from "next/router";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import useLocalStorage from "@/hooks/useLocalStorage";
import { compileCode } from "@/utils/CodeCompilerService";
import LanguageSelector from "./LanguageSelector";

type PlaygroundProps = {
	problem: Problem;
	setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
	setSolved: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ISettings {
	fontSize: string;
	settingsModalIsOpen: boolean;
	dropdownIsOpen: boolean;
}

const Playground: React.FC<PlaygroundProps> = ({ problem, setSuccess, setSolved }) => {
	const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
	const [userCode, setUserCode] = useState<string>(problem.starterCode);
	const [outputResult, setOutputResult] = useState<string>("");
	const [isCompiling, setIsCompiling] = useState<boolean>(false);
	const [language, setLanguage] = useLocalStorage("lcc-language", "javascript");
	const [fontSize, setFontSize] = useLocalStorage("lcc-fontSize", "16px");

	const [settings, setSettings] = useState<ISettings>({
		fontSize: fontSize,
		settingsModalIsOpen: false,
		dropdownIsOpen: false,
	});

	const [user] = useAuthState(auth);
	const {
		query: { pid },
	} = useRouter();

	useEffect(() => {
		const code = localStorage.getItem(`code-${pid}-${language}`);
		if (user) {
			setUserCode(code ? JSON.parse(code) : getStarterCodeForLanguage());
		} else {
			setUserCode(getStarterCodeForLanguage());
		}
	}, [pid, user, language]);

	const getStarterCodeForLanguage = () => {
		switch (language) {
			case "python":
				return "# Write your Python solution here\n\ndef solve(nums):\n    # Your code here\n    pass\n\nprint(solve([1, 2, 3]))";
			case "java":
				return `// Write your Java solution here\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] nums = {1, 2, 3};\n        System.out.println(solve(nums));\n    }\n\n    public static int solve(int[] nums) {\n        // Your code here\n        return 0;\n    }\n}`;
			default:
				return problem.starterCode;
		}
	};

	const onChange = (value: string) => {
		setUserCode(value);
		localStorage.setItem(`code-${pid}-${language}`, JSON.stringify(value));
	};

	const getLanguageExtension = () => {
		switch (language) {
			case "python":
				return python();
			case "java":
				return java();
			default:
				return javascript();
		}
	};

	const handleExecuteCode = async (isSubmit: boolean) => {
		if (isCompiling) return;

		setIsCompiling(true);
		setOutputResult("Compiling...");

		try {
			const response = await compileCode(userCode, language);
			setOutputResult(response.success ? response.output : response.error || "An error occurred");

			if (isSubmit && response.success) {
				await handleSubmitSolution();
			}
		} catch (error) {
			console.error("Error executing code:", error);
			setOutputResult("An error occurred while executing the code.");
		} finally {
			setIsCompiling(false);
		}
	};

	const handleSubmitSolution = async () => {
		if (!user) {
			toast.error("Please login to submit your code", {
				position: "top-center",
				autoClose: 3000,
				theme: "dark",
			});
			return;
		}

		try {
			let allPassed = true;
			let failedIndex = -1;

			const results: { input: string; expected: string; actual: string; passed: boolean }[] = [];

			if (language === "javascript") {
				let code = userCode;
				code = code.slice(code.indexOf(problem.starterFunctionName));
				const cb = new Function(`return ${code}`)();
				const handler = problems[pid as string].handlerFunction;

				if (typeof handler === "function") {
					const success = handler(cb);
					if (success) {
						await markProblemSolved();
						return;
					} else {
						allPassed = false;
					}
				}
			} else {
				for (let i = 0; i < problem.examples.length; i++) {
					const example = problem.examples[i];
					const input = example.inputText;
					const expected = example.outputText.trim();

					const runCode = `${userCode}\nprint(${problem.starterFunctionName.trim()}${input})`;
					const result = await compileCode(runCode, language);
					const actual = result.output?.trim().replace(/\r\n/g, "\n") ?? "";

					const passed = actual === expected;
					results.push({ input, expected, actual, passed });

					if (!passed) {
						allPassed = false;
						failedIndex = i;
						break;
					}
				}
			}

			if (allPassed) {
				await markProblemSolved();
			} else {
				toast.error(`❌ Test case ${failedIndex + 1} failed.`, {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
				console.table(results); // Dev tool output
			}
		} catch (error: any) {
			console.error("Submission Error:", error.message);
			toast.error("Something went wrong during submission.", {
				position: "top-center",
				autoClose: 3000,
				theme: "dark",
			});
		}
	};

	const markProblemSolved = async () => {
		toast.success("🎉 All test cases passed!", {
			position: "top-center",
			autoClose: 3000,
			theme: "dark",
		});
		setSuccess(true);
		setTimeout(() => setSuccess(false), 4000);

		if (user) {
			const userRef = doc(firestore, "users", user.uid);
			await updateDoc(userRef, {
				solvedProblems: arrayUnion(pid),
			});
		}
		setSolved(true);
	};

	return (
		<div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
			<div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full'>
				<LanguageSelector language={language} setLanguage={setLanguage} className='ml-2' />
				<PreferenceNav settings={settings} setSettings={setSettings} />
			</div>

			<Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
				<div className='w-full overflow-auto'>
					<CodeMirror
						value={userCode}
						theme={vscodeDark}
						onChange={onChange}
						extensions={[getLanguageExtension()]}
						style={{ fontSize: settings.fontSize }}
					/>
				</div>

				<div className='w-full px-5 overflow-auto'>
					<div className='flex h-10 items-center space-x-6'>
						<div className='relative flex h-full flex-col justify-center cursor-pointer'>
							<div className='text-sm font-medium leading-5 text-white'>Testcases</div>
							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
						</div>
					</div>

					{outputResult && (
						<div className='my-4'>
							<p className='text-sm font-medium mt-4 text-white'>Execution Output:</p>
							<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2 whitespace-pre-wrap'>
								{outputResult}
							</div>
						</div>
					)}

					<div className='flex'>
						{problem.examples.map((example, index) => (
							<div
								className='mr-2 items-start mt-2'
								key={example.id}
								onClick={() => setActiveTestCaseId(index)}
							>
								<div className='flex flex-wrap items-center gap-y-4'>
									<div
										className={`font-medium transition-all inline-flex px-4 py-1 cursor-pointer rounded-lg bg-dark-fill-3 hover:bg-dark-fill-2 ${
											activeTestCaseId === index ? "text-white" : "text-gray-500"
										}`}
									>
										Case {index + 1}
									</div>
								</div>
							</div>
						))}
					</div>

					<div className='font-semibold my-4'>
						<p className='text-sm font-medium mt-4 text-white'>Input:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							{problem.examples[activeTestCaseId].inputText}
						</div>
						<p className='text-sm font-medium mt-4 text-white'>Output:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							{problem.examples[activeTestCaseId].outputText}
						</div>
					</div>
				</div>
			</Split>

			{/* Footer */}
			<div className='flex bg-dark-layer-1 absolute bottom-0 z-10 w-full'>
				<div className='mx-5 my-[10px] flex justify-between w-full'>
					<div className='mr-2 flex flex-1 flex-nowrap items-center space-x-4'>
						<button
							className='px-3 py-1.5 font-medium inline-flex bg-dark-fill-3 text-sm hover:bg-dark-fill-2 text-dark-label-2 rounded-lg'
							onClick={() => handleExecuteCode(false)}
							disabled={isCompiling}
						>
							Run Code
						</button>
					</div>
					<div className='ml-auto flex items-center space-x-4'>
						<button
							className='px-3 py-1.5 text-sm font-medium inline-flex bg-dark-green-s text-white hover:bg-green-3 rounded-lg'
							onClick={() => handleExecuteCode(true)}
							disabled={isCompiling}
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Playground;
