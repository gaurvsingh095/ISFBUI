// // src/pages/F1Visa.tsx
// import { useState } from "react";
// import { interviewQuestions } from "@/data/questions";
// import { motion } from "framer-motion";
// import { FaHome } from "react-icons/fa";
// import Link from "next/link";

// export default function F1Visa() {
//   const [responses, setResponses] = useState<{ [key: number]: string }>({});
//   const [feedbacks, setFeedbacks] = useState<{ [key: number]: string }>({});
//   const [loading, setLoading] = useState<{ [key: number]: boolean }>({}); // Track loading state
//   const API_URL = "http://localhost:5001/generate_feedback/"; // Flask API

//   // Handle user input
//   const handleResponseChange = (id: number, value: string) => {
//     setResponses((prev) => ({ ...prev, [id]: value }));
//   };

//   // Fetch AI-generated feedback from Flask API
//   const generateFeedback = async (id: number) => {
//     const userResponse = responses[id]?.trim();
//     if (!userResponse) {
//       setFeedbacks((prev) => ({ ...prev, [id]: "⚠️ Please enter your response before submitting." }));
//       return;
//     }

//     setLoading((prev) => ({ ...prev, [id]: true })); // Show loading state

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ answer: userResponse }),
//       });

//       const data = await response.json();
//       setFeedbacks((prev) => ({ ...prev, [id]: data.feedback || "❌ No response from server." }));
//     } catch (error) {
//       console.error("Error fetching feedback:", error);
//       setFeedbacks((prev) => ({ ...prev, [id]: "❌ Error connecting to server." }));
//     } finally {
//       setLoading((prev) => ({ ...prev, [id]: false })); // Hide loading state
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-900 text-white">
//       {/* Sidebar Navigation (Sticky Sidebar) */}
//       <aside className="w-72 bg-gray-800 p-6 h-screen overflow-y-auto sticky top-0">
//         <h2 className="text-xl font-bold">Questions</h2>
//         <ul className="mt-4 space-y-3">
//           {interviewQuestions.map((q) => (
//             <li key={q.id}>
//               <a href={`#q${q.id}`} className="block p-2 rounded-lg hover:bg-gray-700 transition">
//                 {q.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8">
//         {/* Header */}
//         <header className="flex justify-between items-center border-b border-gray-700 pb-4">
//           <h1 className="text-3xl font-bold">F1 Visa Interview Simulation</h1>
//           <Link href="/">
//             <button className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
//               <FaHome className="mr-2" /> Home
//             </button>
//           </Link>
//         </header>

//         {/* Loop Through All Questions */}
//         {interviewQuestions.map((q) => (
//           <section key={q.id} id={`q${q.id}`} className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">{q.title}</h2>

//             {/* Video Player */}
//             <video width="100%" controls className="rounded-lg">
//               <source src={q.videoUrl} type="video/mp4" />
//             </video>

//             {/* Question Description */}
//             <p className="mt-4 text-gray-400">{q.description}</p>

//             {/* Response Input */}
//             <div className="mt-6">
//               <textarea
//                 value={responses[q.id] || ""}
//                 onChange={(e) => handleResponseChange(q.id, e.target.value)}
//                 placeholder="Type your response here..."
//                 className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
//                 rows={3}
//               ></textarea>

//               <motion.button
//                 onClick={() => generateFeedback(q.id)}
//                 className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg flex items-center"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 {loading[q.id] ? "Generating..." : "Submit Response"}
//               </motion.button>
//             </div>

//             {/* AI Feedback Section */}
//             <div className="mt-6 bg-gray-700 p-4 rounded-lg">
//               <h3 className="text-xl font-semibold">Feedback</h3>
//               <p className="text-gray-300 mt-2">{feedbacks[q.id] || "Your AI-generated feedback will appear here."}</p>
//             </div>
//           </section>
//         ))}
//       </main>
//     </div>
//   );
// }

// import { useState } from "react";
// import { interviewQuestions } from "@/data/questions";
// import { motion } from "framer-motion";
// import { FaHome } from "react-icons/fa";
// import Link from "next/link";
// import ReactMarkdown from "react-markdown"; // ✅ Import Markdown Renderer

// type ResponseState = { [key: number]: string };
// type FeedbackState = { [key: number]: string };
// type LoadingState = { [key: number]: boolean };

// export default function F1Visa() {
//   const [responses, setResponses] = useState<ResponseState>({});
//   const [feedbacks, setFeedbacks] = useState<FeedbackState>({});
//   const [loading, setLoading] = useState<LoadingState>({});

//   // Handle user input
//   const handleResponseChange = (id: number, value: string) => {
//     setResponses((prev) => ({ ...prev, [id]: value }));
//   };

//   // Fetch feedback from Flask API
//   const generateFeedback = async (id: number) => {
//     if (!responses[id]?.trim()) {
//       setFeedbacks((prev) => ({ ...prev, [id]: "⚠️ Please enter your response before submitting." }));
//       return;
//     }

//     setLoading((prev) => ({ ...prev, [id]: true })); // ✅ Show loading

//     try {
//       const response = await fetch("/api/f1_visa/generate_feedback/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ answer: responses[id] }),
//       });

//       if (!response.ok) throw new Error("Server error");

//       const data = await response.json();
//       setFeedbacks((prev) => ({ ...prev, [id]: data.feedback }));
//     } catch (error) {
//       setFeedbacks((prev) => ({ ...prev, [id]: "❌ Error fetching feedback. Please try again." }));
//     } finally {
//       setLoading((prev) => ({ ...prev, [id]: false })); // ✅ Hide loading
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-900 text-white">
//       {/* Sidebar Navigation */}
//       <aside className="w-72 bg-gray-800 p-6 h-screen overflow-y-auto sticky top-0">
//         <h2 className="text-xl font-bold">Questions</h2>
//         <ul className="mt-4 space-y-3">
//           {interviewQuestions.map((q) => (
//             <li key={q.id}>
//               <a href={`#q${q.id}`} className="block p-2 rounded-lg hover:bg-gray-700 transition">
//                 {q.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8">
//         <header className="flex justify-between items-center border-b border-gray-700 pb-4">
//           <h1 className="text-3xl font-bold">F1 Visa Interview Simulation</h1>
//           <Link href="/">
//             <button className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
//               <FaHome className="mr-2" /> Home
//             </button>
//           </Link>
//         </header>

//         {interviewQuestions.map((q) => (
//           <section key={q.id} id={`q${q.id}`} className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">{q.title}</h2>

//             {/* Video Player */}
//             <video width="100%" controls className="rounded-lg">
//               <source src={q.videoUrl} type="video/mp4" />
//             </video>

//             {/* Question Description */}
//             <p className="mt-4 text-gray-400">{q.description}</p>

//             {/* Response Input */}
//             <div className="mt-6">
//               <textarea
//                 value={responses[q.id] || ""}
//                 onChange={(e) => handleResponseChange(q.id, e.target.value)}
//                 placeholder="Type your response here..."
//                 className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
//                 rows={3}
//               ></textarea>

//               <motion.button
//                 onClick={() => generateFeedback(q.id)}
//                 className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg flex items-center"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 Submit Response
//               </motion.button>
//             </div>

//             {/* AI Feedback Section with Markdown Formatting */}
//             <div className="mt-6 bg-gray-700 p-4 rounded-lg">
//               <h3 className="text-xl font-semibold">Feedback</h3>
              
//               {loading[q.id] ? ( 
//                 <p className="text-blue-400 animate-pulse mt-2">⏳ Generating feedback...</p> // ✅ Loading Animation
//               ) : (
//                 <div className="text-gray-300 mt-2 prose prose-invert">
//                 <ReactMarkdown>{feedbacks[q.id] || "Your AI-generated feedback will appear here."}</ReactMarkdown>
//               </div> // ✅ Render Markdown
//               )}
//             </div>
//           </section>
//         ))}
//       </main>
//     </div>
//   );
// }
// pages/f1-visa.tsx or wherever your component lives

//Voice Based Demo - Text Based Above
// import { useState, useEffect } from "react";
// import { interviewQuestions } from "@/data/questions";
// import { motion } from "framer-motion";
// import { FaHome, FaMicrophone, FaVolumeUp } from "react-icons/fa";
// import Link from "next/link";
// import ReactMarkdown from "react-markdown";

// export default function F1Visa() {
//   const [responses, setResponses] = useState<{ [key: number]: string }>({});
//   const [feedbacks, setFeedbacks] = useState<{ [key: number]: string }>({});
//   const [loading, setLoading] = useState<{ [key: number]: boolean }>({});
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(typeof window !== "undefined");
//   }, []);

//   const handleResponseChange = (id: number, value: string) => {
//     setResponses((prev) => ({ ...prev, [id]: value }));
//   };

//   const generateFeedback = async (id: number) => {
//     if (!responses[id]?.trim()) {
//       setFeedbacks((prev) => ({ ...prev, [id]: "⚠️ Please enter your response before submitting." }));
//       return;
//     }

//     setLoading((prev) => ({ ...prev, [id]: true }));

//     try {
//       const response = await fetch("/api/f1_visa/generate_feedback/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ answer: responses[id] }),
//       });

//       const data = await response.json();
//       setFeedbacks((prev) => ({ ...prev, [id]: data.feedback }));
//     } catch (error) {
//       setFeedbacks((prev) => ({ ...prev, [id]: "❌ Error fetching feedback." }));
//     } finally {
//       setLoading((prev) => ({ ...prev, [id]: false }));
//     }
//   };

//   // 🎤 Speech to Text using Azure
//   const transcribe = async (id: number) => {
//     if (!isClient) return;

//     const sdk = await import("microsoft-cognitiveservices-speech-sdk");

//     const speechConfig = sdk.SpeechConfig.fromSubscription(
//       process.env.NEXT_PUBLIC_AZURE_SPEECH_KEY!,
//       process.env.NEXT_PUBLIC_AZURE_REGION!
//     );

//     speechConfig.speechRecognitionLanguage = "en-US";
//     const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
//     const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

//     setFeedbacks((prev) => ({ ...prev, [id]: "🎤 Listening..." }));

//     recognizer.recognizeOnceAsync((result) => {
//       if (result.reason === sdk.ResultReason.RecognizedSpeech) {
//         setResponses((prev) => ({ ...prev, [id]: result.text }));
//         setFeedbacks((prev) => ({ ...prev, [id]: "✅ Transcribed. Click Submit to get feedback." }));
//       } else {
//         setFeedbacks((prev) => ({ ...prev, [id]: "❌ Could not recognize speech." }));
//       }
//       recognizer.close();
//     });
//   };

//   // 🔊 TTS using Azure
//   const speakText = async (text: string) => {
//     if (!isClient) return;

//     const sdk = await import("microsoft-cognitiveservices-speech-sdk");

//     const speechConfig = sdk.SpeechConfig.fromSubscription(
//       process.env.NEXT_PUBLIC_AZURE_SPEECH_KEY!,
//       process.env.NEXT_PUBLIC_AZURE_REGION!
//     );
//     speechConfig.speechSynthesisVoiceName = "en-US-JennyNeural"; // Optional: change voice

//     const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();
//     const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

//     synthesizer.speakTextAsync(text, () => {
//       synthesizer.close();
//     });
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-900 text-white">
//       {/* Sidebar */}
//       <aside className="w-72 bg-gray-800 p-6 h-screen overflow-y-auto sticky top-0">
//         <h2 className="text-xl font-bold">Questions</h2>
//         <ul className="mt-4 space-y-3">
//           {interviewQuestions.map((q) => (
//             <li key={q.id}>
//               <a href={`#q${q.id}`} className="block p-2 rounded-lg hover:bg-gray-700 transition">
//                 {q.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8">
//         <header className="flex justify-between items-center border-b border-gray-700 pb-4">
//           <h1 className="text-3xl font-bold">🎙️ F1 Visa Interview Simulation</h1>
//           <Link href="/">
//             <button className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
//               <FaHome className="mr-2" /> Home
//             </button>
//           </Link>
//         </header>

//         {interviewQuestions.map((q) => (
//           <section key={q.id} id={`q${q.id}`} className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">{q.title}</h2>

//             <video width="100%" controls className="rounded-lg">
//               <source src={q.videoUrl} type="video/mp4" />
//             </video>

//             <p className="mt-4 text-gray-400">{q.description}</p>

//             {/* Textarea + Buttons */}
//             <div className="mt-6">
//               <textarea
//                 value={responses[q.id] || ""}
//                 onChange={(e) => handleResponseChange(q.id, e.target.value)}
//                 placeholder="Type your response here..."
//                 className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
//                 rows={4}
//               ></textarea>

//               <div className="mt-4 flex flex-wrap gap-4">
//                 <motion.button
//                   onClick={() => generateFeedback(q.id)}
//                   className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   Submit Response
//                 </motion.button>

//                 {isClient && (
//                   <motion.button
//                     onClick={() => transcribe(q.id)}
//                     className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg flex items-center"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     <FaMicrophone className="mr-2" /> Record Answer
//                   </motion.button>
//                 )}

//                 {isClient && (
//                   <motion.button
//                     onClick={() => speakText(feedbacks[q.id] || "No feedback yet.")}
//                     className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     <FaVolumeUp className="mr-2" /> Play Feedback
//                   </motion.button>
//                 )}
//               </div>
//             </div>

//             {/* Feedback */}
//             <div className="mt-6 bg-gray-700 p-4 rounded-lg">
//               <h3 className="text-xl font-semibold">🧠 AI Feedback</h3>
//               {loading[q.id] ? (
//                 <p className="text-blue-400 animate-pulse mt-2">⏳ Generating feedback...</p>
//               ) : (
//                 <div className="text-gray-300 mt-2 prose prose-invert">
//                   <ReactMarkdown>{feedbacks[q.id] || "Your AI-generated feedback will appear here."}</ReactMarkdown>
//                 </div>
//               )}
//             </div>
//           </section>
//         ))}
//       </main>
//     </div>
//   );
// }

// pages/categories/F1Visa.tsx

//voice 1.1
// import { useState } from "react";
// import { interviewQuestions } from "@/data/questions";
// import { motion } from "framer-motion";
// import { FaHome, FaMicrophone } from "react-icons/fa";
// import Link from "next/link";
// import ReactMarkdown from "react-markdown";
// import * as sdk from "microsoft-cognitiveservices-speech-sdk";

// type ResponseState = { [key: number]: string };
// type FeedbackState = { [key: number]: string };
// type LoadingState = { [key: number]: boolean };

// export default function F1Visa() {
//   const [responses, setResponses] = useState<ResponseState>({});
//   const [feedbacks, setFeedbacks] = useState<FeedbackState>({});
//   const [loading, setLoading] = useState<LoadingState>({});
//   const [isRecording, setIsRecording] = useState(false);

//   // Hardcoded Azure Keys (Replace later with env vars)
//   const AZURE_KEY = "BDcBsERgWoIz0DyiznLeKAK4mZ7GGj7iYPMn8N2XmmxwswOYZWDKJQQJ99BDACYeBjFXJ3w3AAAYACOGBtCq";
//   const AZURE_REGION = "eastus";

//   const handleResponseChange = (id: number, value: string) => {
//     setResponses((prev) => ({ ...prev, [id]: value }));
//   };

//   const generateFeedback = async (id: number) => {
//     if (!responses[id]?.trim()) {
//       setFeedbacks((prev) => ({
//         ...prev,
//         [id]: "⚠️ Please enter your response before submitting.",
//       }));
//       return;
//     }

//     setLoading((prev) => ({ ...prev, [id]: true }));

//     try {
//       const response = await fetch("http://localhost:5001/generate_feedback/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ answer: responses[id] }),
//       });

//       if (!response.ok) throw new Error("Server error");

//       const data = await response.json();
//       setFeedbacks((prev) => ({ ...prev, [id]: data.feedback }));

//       // Speak the feedback out loud
//       speakText(data.feedback);
//     } catch (error) {
//       setFeedbacks((prev) => ({
//         ...prev,
//         [id]: "❌ Error fetching feedback. Please try again.",
//       }));
//     } finally {
//       setLoading((prev) => ({ ...prev, [id]: false }));
//     }
//   };

//   const startRecording = async (id: number) => {
//     setIsRecording(true);

//     const speechConfig = sdk.SpeechConfig.fromSubscription(AZURE_KEY, AZURE_REGION);
//     speechConfig.speechRecognitionLanguage = "en-US";
//     const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
//     const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

//     recognizer.recognizeOnceAsync((result) => {
//       setIsRecording(false);

//       if (result.reason === sdk.ResultReason.RecognizedSpeech) {
//         setResponses((prev) => ({ ...prev, [id]: result.text }));
//       } else {
//         alert("Speech not recognized. Try again.");
//       }
//     });
//   };

//   const speakText = (text: string) => {
//     const speechConfig = sdk.SpeechConfig.fromSubscription(AZURE_KEY, AZURE_REGION);
//     const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();
//     const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

//     synthesizer.speakTextAsync(
//       text,
//       result => {
//         synthesizer.close();
//       },
//       error => {
//         console.error("Text-to-Speech Error:", error);
//         synthesizer.close();
//       }
//     );
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-900 text-white">
//       <aside className="w-72 bg-gray-800 p-6 h-screen overflow-y-auto sticky top-0">
//         <h2 className="text-xl font-bold">Questions</h2>
//         <ul className="mt-4 space-y-3">
//           {interviewQuestions.map((q) => (
//             <li key={q.id}>
//               <a href={`#q${q.id}`} className="block p-2 rounded-lg hover:bg-gray-700 transition">
//                 {q.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <main className="flex-1 p-8">
//         <header className="flex justify-between items-center border-b border-gray-700 pb-4">
//           <h1 className="text-3xl font-bold">F1 Visa Interview Simulation</h1>
//           <Link href="/">
//             <button className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
//               <FaHome className="mr-2" /> Home
//             </button>
//           </Link>
//         </header>

//         {interviewQuestions.map((q) => (
//           <section key={q.id} id={`q${q.id}`} className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">{q.title}</h2>

//             {/* Video Section */}
//             <video width="100%" controls className="rounded-lg">
//               <source src={q.videoUrl} type="video/mp4" />
//             </video>

//             <p className="mt-4 text-gray-400">{q.description}</p>

//             {/* Input Area */}
//             <div className="mt-6">
//               <textarea
//                 value={responses[q.id] || ""}
//                 onChange={(e) => handleResponseChange(q.id, e.target.value)}
//                 placeholder="Type your response here..."
//                 className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
//                 rows={3}
//               ></textarea>

//               <div className="mt-2 flex space-x-2">
//                 <motion.button
//                   onClick={() => generateFeedback(q.id)}
//                   className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg flex items-center"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   Submit Response
//                 </motion.button>

//                 <motion.button
//                   onClick={() => startRecording(q.id)}
//                   className={`px-4 py-2 rounded-lg flex items-center ${
//                     isRecording ? "bg-red-600" : "bg-yellow-500 hover:bg-yellow-600"
//                   }`}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <FaMicrophone className="mr-2" />
//                   {isRecording ? "Listening..." : "Speak"}
//                 </motion.button>
//               </div>
//             </div>

//             {/* Feedback Section */}
//             <div className="mt-6 bg-gray-700 p-4 rounded-lg">
//               <h3 className="text-xl font-semibold">Feedback</h3>

//               {loading[q.id] ? (
//                 <p className="text-blue-400 animate-pulse mt-2">⏳ Generating feedback...</p>
//               ) : (
//                 <div className="text-gray-300 mt-2 prose prose-invert">
//                   <ReactMarkdown>{feedbacks[q.id] || "Your AI-generated feedback will appear here."}</ReactMarkdown>
//                 </div>
//               )}
//             </div>
//           </section>
//         ))}
//       </main>
//     </div>
//   );
// }

//voice1.2
// import { useState, useRef } from "react";
// import { interviewQuestions } from "@/data/questions";
// import { motion } from "framer-motion";
// import { FaHome, FaMicrophone, FaPlay, FaPause, FaStop, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
// import Link from "next/link";
// import ReactMarkdown from "react-markdown";
// import * as sdk from "microsoft-cognitiveservices-speech-sdk";

// type StateMap = { [key: number]: string };
// type BoolMap = { [key: number]: boolean };

// export default function F1Visa() {
//   const [responses, setResponses] = useState<StateMap>({});
//   const [feedbacks, setFeedbacks] = useState<StateMap>({});
//   const [loading, setLoading] = useState<BoolMap>({});
//   const [isRecording, setIsRecording] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState<BoolMap>({});
//   const [pausedIndex, setPausedIndex] = useState<{ [key: number]: number }>({});

//   const synthesizerRefs = useRef<{ [key: number]: sdk.SpeechSynthesizer | undefined }>({});
//   const lastChunksRef = useRef<{ [key: number]: string[] }>({});

//   const AZURE_KEY = "BDcBsERgWoIz0DyiznLeKAK4mZ7GGj7iYPMn8N2XmmxwswOYZWDKJQQJ99BDACYeBjFXJ3w3AAAYACOGBtCq";
//   const AZURE_REGION = "eastus";

//   const handleResponseChange = (id: number, value: string) => {
//     setResponses((prev) => ({ ...prev, [id]: value }));
//   };

//   const generateFeedback = async (id: number) => {
//     if (!responses[id]?.trim()) {
//       setFeedbacks((prev) => ({
//         ...prev,
//         [id]: "⚠️ Please enter your response before submitting.",
//       }));
//       return;
//     }

//     setLoading((prev) => ({ ...prev, [id]: true }));

//     try {
//       const response = await fetch("http://localhost:5001/generate_feedback/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ answer: responses[id] }),
//       });

//       const data = await response.json();
//       setFeedbacks((prev) => ({ ...prev, [id]: data.feedback }));

//       if (!isMuted) {
//         speakFeedback(id, data.feedback);
//       }
//     } catch {
//       setFeedbacks((prev) => ({
//         ...prev,
//         [id]: "❌ Error fetching feedback. Please try again.",
//       }));
//     } finally {
//       setLoading((prev) => ({ ...prev, [id]: false }));
//     }
//   };

//   const startRecording = async (id: number) => {
//     setIsRecording(true);
//     const config = sdk.SpeechConfig.fromSubscription(AZURE_KEY, AZURE_REGION);
//     config.speechRecognitionLanguage = "en-US";
//     const audio = sdk.AudioConfig.fromDefaultMicrophoneInput();
//     const recognizer = new sdk.SpeechRecognizer(config, audio);

//     recognizer.recognizeOnceAsync((result) => {
//       setIsRecording(false);
//       if (result.reason === sdk.ResultReason.RecognizedSpeech) {
//         setResponses((prev) => ({ ...prev, [id]: result.text }));
//       } else {
//         alert("Speech not recognized.");
//       }
//     });
//   };

//   const speakFeedback = (id: number, text: string, startFrom: number = 0) => {
//     stopSpeaking(id);

//     const config = sdk.SpeechConfig.fromSubscription(AZURE_KEY, AZURE_REGION);
//     config.speechSynthesisVoiceName = "en-US-JennyNeural"; // ✅ Natural-sounding voice
//     const audio = sdk.AudioConfig.fromDefaultSpeakerOutput();
//     const synth = new sdk.SpeechSynthesizer(config, audio);
//     synthesizerRefs.current[id] = synth;

//     const chunks = text.split(/(?<=[.?!])\s+/); // sentence split
//     lastChunksRef.current[id] = chunks;

//     setIsSpeaking((prev) => ({ ...prev, [id]: true }));

//     const speakFromIndex = (i: number) => {
//       if (i >= chunks.length) {
//         stopSpeaking(id);
//         return;
//       }

//       setPausedIndex((prev) => ({ ...prev, [id]: i }));

//       synth.speakTextAsync(
//         chunks[i],
//         () => {
//           if (!synthesizerRefs.current[id]) return; // if stopped
//           speakFromIndex(i + 1); // speak next chunk
//         },
//         (err) => {
//           console.error("Speech error:", err);
//           stopSpeaking(id);
//         }
//       );
//     };

//     speakFromIndex(startFrom);
//   };

//   const stopSpeaking = (id: number) => {
//     const synth = synthesizerRefs.current[id];
//     if (synth) {
//       synth.close();
//       synthesizerRefs.current[id] = undefined;
//     }
//     setIsSpeaking((prev) => ({ ...prev, [id]: false }));
//   };

//   const togglePauseResume = (id: number) => {
//     const isCurrentlySpeaking = isSpeaking[id];

//     if (isCurrentlySpeaking) {
//       stopSpeaking(id);
//     } else {
//       const resumeFrom = pausedIndex[id] || 0;
//       const feedback = feedbacks[id];
//       if (feedback) speakFeedback(id, feedback, resumeFrom);
//     }

//     setIsSpeaking((prev) => ({ ...prev, [id]: !isCurrentlySpeaking }));
//   };

//   const stopAndReset = (id: number) => {
//     stopSpeaking(id);
//     setPausedIndex((prev) => ({ ...prev, [id]: 0 }));
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-900 text-white">
//       <aside className="w-72 bg-gray-800 p-6 h-screen overflow-y-auto sticky top-0">
//         <h2 className="text-xl font-bold">Questions</h2>
//         <ul className="mt-4 space-y-3">
//           {interviewQuestions.map((q) => (
//             <li key={q.id}>
//               <a href={`#q${q.id}`} className="block p-2 rounded-lg hover:bg-gray-700 transition">
//                 {q.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <main className="flex-1 p-8">
//         <header className="flex justify-between items-center border-b border-gray-700 pb-4">
//           <h1 className="text-3xl font-bold">F1 Visa Interview Simulation</h1>
//           <div className="flex items-center space-x-3">
//             <button
//               onClick={() => setIsMuted((prev) => !prev)}
//               className="bg-gray-700 hover:bg-gray-600 p-2 rounded"
//             >
//               {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
//             </button>
//             <Link href="/">
//               <button className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
//                 <FaHome className="mr-2" /> Home
//               </button>
//             </Link>
//           </div>
//         </header>

//         {interviewQuestions.map((q) => (
//           <section key={q.id} id={`q${q.id}`} className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">{q.title}</h2>
//             <video width="100%" controls className="rounded-lg">
//               <source src={q.videoUrl} type="video/mp4" />
//             </video>
//             <p className="mt-4 text-gray-400">{q.description}</p>

//             <textarea
//               value={responses[q.id] || ""}
//               onChange={(e) => handleResponseChange(q.id, e.target.value)}
//               placeholder="Type your response here..."
//               className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white mt-4"
//               rows={3}
//             />

//             <div className="flex space-x-3 mt-3">
//               <motion.button
//                 onClick={() => generateFeedback(q.id)}
//                 className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 Submit
//               </motion.button>
//               <motion.button
//                 onClick={() => startRecording(q.id)}
//                 className={`px-6 py-2 rounded ${isRecording ? "bg-red-600" : "bg-yellow-500 hover:bg-yellow-600"}`}
//               >
//                 <FaMicrophone className="inline mr-2" />
//                 {isRecording ? "Listening..." : "Speak"}
//               </motion.button>
//               <motion.button
//                 onClick={() => togglePauseResume(q.id)}
//                 className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
//               >
//                 {isSpeaking[q.id] ? <FaPause /> : <FaPlay />}
//               </motion.button>
//               <motion.button
//                 onClick={() => stopAndReset(q.id)}
//                 className="px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded"
//               >
//                 <FaStop />
//               </motion.button>
//             </div>

//             {/* Feedback */}
//             <div className="mt-6 bg-gray-700 p-4 rounded-lg">
//               <h3 className="text-xl font-semibold">Feedback</h3>
//               {loading[q.id] ? (
//                 <p className="text-blue-400 animate-pulse mt-2">⏳ Generating feedback...</p>
//               ) : (
//                 <div className="text-gray-300 mt-2 prose prose-invert">
//                   <ReactMarkdown>
//                     {feedbacks[q.id] || "Your AI-generated feedback will appear here."}
//                   </ReactMarkdown>
//                 </div>
//               )}
//             </div>
//           </section>
//         ))}
//       </main>
//     </div>
//   );
// }


//voice1.3
// pages/f1-visa.tsx

// import { useState, useRef } from "react";
// import { interviewQuestions } from "@/data/questions";
// import { motion } from "framer-motion";
// import { FaHome, FaMicrophone, FaVolumeUp, FaVolumeMute, FaPause, FaStop } from "react-icons/fa";
// import Link from "next/link";
// import ReactMarkdown from "react-markdown";
// import * as sdk from "microsoft-cognitiveservices-speech-sdk";

// // Types
// type ResponseState = { [key: number]: string };
// type FeedbackState = { [key: number]: string };
// type LoadingState = { [key: number]: boolean };

// // Azure Keys (replace with env vars in production)
// const AZURE_KEY = "BDcBsERgWoIz0DyiznLeKAK4mZ7GGj7iYPMn8N2XmmxwswOYZWDKJQQJ99BDACYeBjFXJ3w3AAAYACOGBtCq";
// const AZURE_REGION = "eastus";

// export default function F1Visa() {
//   const [responses, setResponses] = useState<ResponseState>({});
//   const [feedbacks, setFeedbacks] = useState<FeedbackState>({});
//   const [loading, setLoading] = useState<LoadingState>({});
//   const [isRecording, setIsRecording] = useState(false);
//   const [playingId, setPlayingId] = useState<number | null>(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);

//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   const handleResponseChange = (id: number, value: string) => {
//     setResponses((prev) => ({ ...prev, [id]: value }));
//   };

//   const generateFeedback = async (id: number) => {
//     if (!responses[id]?.trim()) {
//       setFeedbacks((prev) => ({
//         ...prev,
//         [id]: "⚠️ Please enter your response before submitting.",
//       }));
//       return;
//     }

//     setLoading((prev) => ({ ...prev, [id]: true }));

//     try {
//       const response = await fetch("http://localhost:5001/generate_feedback/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ answer: responses[id] }),
//       });

//       if (!response.ok) throw new Error("Server error");

//       const data = await response.json();
//       setFeedbacks((prev) => ({ ...prev, [id]: data.feedback }));

//       // Auto-read feedback
//       playFeedback(data.feedback, id);
//     } catch (error) {
//       console.error(error);
//       setFeedbacks((prev) => ({
//         ...prev,
//         [id]: "❌ Error fetching feedback. Please try again.",
//       }));
//     } finally {
//       setLoading((prev) => ({ ...prev, [id]: false }));
//     }
//   };

//   const startRecording = async (id: number) => {
//     setIsRecording(true);

//     const speechConfig = sdk.SpeechConfig.fromSubscription(AZURE_KEY, AZURE_REGION);
//     speechConfig.speechRecognitionLanguage = "en-US";
//     const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
//     const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

//     recognizer.recognizeOnceAsync((result) => {
//       setIsRecording(false);

//       if (result.reason === sdk.ResultReason.RecognizedSpeech) {
//         setResponses((prev) => ({ ...prev, [id]: result.text }));
//       } else {
//         alert("Speech not recognized. Try again.");
//       }
//     });
//   };

//   const playFeedback = (text: string, id: number) => {
//     stopAudio(); // Stop any previous

//     const speechConfig = sdk.SpeechConfig.fromSubscription(AZURE_KEY, AZURE_REGION);
//     speechConfig.speechSynthesisVoiceName = "en-US-JennyNeural";

//     const audioStream = sdk.AudioOutputStream.createPullStream();
//     const audioConfig = sdk.AudioConfig.fromStreamOutput(audioStream);
//     const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

//     synthesizer.speakTextAsync(
//       text,
//       (result) => {
//         if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
//           const audioBlob = new Blob([result.audioData], { type: "audio/wav" });
//           const url = URL.createObjectURL(audioBlob);

//           if (audioRef.current) {
//             audioRef.current.pause();
//             audioRef.current.src = url;
//             audioRef.current.muted = isMuted;
//             audioRef.current.play();
//           }

//           setPlayingId(id);
//           setIsPaused(false);
//         }

//         synthesizer.close();
//       },
//       (error) => {
//         console.error("TTS Error:", error);
//         synthesizer.close();
//       }
//     );
//   };

//   const pauseOrResume = () => {
//     if (audioRef.current) {
//       if (audioRef.current.paused) {
//         audioRef.current.play();
//         setIsPaused(false);
//       } else {
//         audioRef.current.pause();
//         setIsPaused(true);
//       }
//     }
//   };

//   const stopAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//       setPlayingId(null);
//       setIsPaused(false);
//     }
//   };

//   const toggleMute = () => {
//     if (audioRef.current) {
//       audioRef.current.muted = !audioRef.current.muted;
//       setIsMuted(audioRef.current.muted);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-900 text-white">
//       <aside className="w-72 bg-gray-800 p-6 h-screen overflow-y-auto sticky top-0">
//         <h2 className="text-xl font-bold">Questions</h2>
//         <ul className="mt-4 space-y-3">
//           {interviewQuestions.map((q) => (
//             <li key={q.id}>
//               <a href={`#q${q.id}`} className="block p-2 rounded-lg hover:bg-gray-700 transition">
//                 {q.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <main className="flex-1 p-8">
//         <header className="flex justify-between items-center border-b border-gray-700 pb-4">
//           <h1 className="text-3xl font-bold">F1 Visa Interview Simulation</h1>
//           <Link href="/">
//             <button className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
//               <FaHome className="mr-2" /> Home
//             </button>
//           </Link>
//         </header>

//         {interviewQuestions.map((q) => (
//           <section key={q.id} id={`q${q.id}`} className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">{q.title}</h2>

//             {/* Video Section */}
//             <video width="100%" controls className="rounded-lg">
//               <source src={q.videoUrl} type="video/mp4" />
//             </video>

//             <p className="mt-4 text-gray-400">{q.description}</p>

//             {/* Response Input */}
//             <div className="mt-6">
//               <textarea
//                 value={responses[q.id] || ""}
//                 onChange={(e) => handleResponseChange(q.id, e.target.value)}
//                 placeholder="Type your response here..."
//                 className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
//                 rows={3}
//               ></textarea>

//               <div className="mt-2 flex gap-2 flex-wrap">
//                 <motion.button
//                   onClick={() => generateFeedback(q.id)}
//                   className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   Submit
//                 </motion.button>

//                 <motion.button
//                   onClick={() => startRecording(q.id)}
//                   className={`px-4 py-2 rounded-lg ${
//                     isRecording ? "bg-red-600" : "bg-yellow-500 hover:bg-yellow-600"
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <FaMicrophone className="inline-block mr-2" />
//                   {isRecording ? "Listening..." : "Speak"}
//                 </motion.button>

//                 {playingId === q.id && (
//                   <>
//                     <button
//                       onClick={pauseOrResume}
//                       className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
//                     >
//                       {isPaused ? "▶️ Resume" : "⏸️ Pause"}
//                     </button>

//                     <button
//                       onClick={stopAudio}
//                       className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg"
//                     >
//                       <FaStop />
//                     </button>

//                     <button
//                       onClick={toggleMute}
//                       className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg"
//                     >
//                       {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>

//             {/* Feedback Section */}
//             <div className="mt-6 bg-gray-700 p-4 rounded-lg">
//               <h3 className="text-xl font-semibold">Feedback</h3>

//               {loading[q.id] ? (
//                 <p className="text-blue-400 animate-pulse mt-2">⏳ Generating feedback...</p>
//               ) : (
//                 <div className="text-gray-300 mt-2 prose prose-invert">
//                   <ReactMarkdown>
//                     {feedbacks[q.id] || "Your AI-generated feedback will appear here."}
//                   </ReactMarkdown>
//                 </div>
//               )}
//             </div>
//           </section>
//         ))}

//         {/* Audio Element (hidden but functional) */}
//         <audio ref={audioRef} hidden />
//       </main>
//     </div>
//   );
// }
//VideoBased1.1
// import { useState, useRef } from "react";
// import { interviewQuestions } from "@/data/questions";
// import { motion } from "framer-motion";
// import {
//   FaHome, FaMicrophone, FaVolumeUp, FaVolumeMute,
//   FaPause, FaStop, FaVideo
// } from "react-icons/fa";
// import Link from "next/link";
// import ReactMarkdown from "react-markdown";
// import * as sdk from "microsoft-cognitiveservices-speech-sdk";

// // ⛳ Replace with your real keys
// const AZURE_SPEECH_KEY = "BDcBsERgWoIz0DyiznLeKAK4mZ7GGj7iYPMn8N2XmmxwswOYZWDKJQQJ99BDACYeBjFXJ3w3AAAYACOGBtCq";
// const AZURE_REGION = "eastus";
// const AZURE_FACE_KEY = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJWZXJzaW9uIjoiMi4wLjAuMCIsIktleVZlcnNpb24iOiI3NTExMjE1MGMzNDg0ZjI1ODdhNGFiMWE2OTMyMjE1OCIsIkFjY291bnRJZCI6IjRkOGY3MjQwLTRkMGQtNDliZi05ZDBmLWQ2ZmQ2NDcxNDNhZSIsIkFjY291bnRUeXBlIjoiQXJtIiwiUGVybWlzc2lvbiI6IkNvbnRyaWJ1dG9yIiwiRXh0ZXJuYWxVc2VySWQiOiI5QTVDMDYyRkE1OUQ0MTQ4OEE3NDJBQUVFNkNBMDhBQyIsIlVzZXJUeXBlIjoiTWljcm9zb2Z0Q29ycEFhZCIsIklzc3VlckxvY2F0aW9uIjoiZWFzdHVzIiwibmJmIjoxNzQ0ODU2MjgzLCJleHAiOjE3NDQ4NjAxODMsImlzcyI6Imh0dHBzOi8vYXBpLnZpZGVvaW5kZXhlci5haS8iLCJhdWQiOiJodHRwczovL2FwaS52aWRlb2luZGV4ZXIuYWkvIn0.nl2EA2m6WZ12pXSQaOmxGmOJLKE7TAnneiD5Y2IYPMXXSfXDJHJEgiesp1I4fAEZqh0x1j0QBnALF3o7zD8mOi4Pyyu9VgnlBN21EMykmFyi7Zjcx-Iv1Cr68dllN1x4ot7CLOCFfpCpqj2tbMvcFFTdxaCi1xv_pqs43RVbPz9vONBSCbwU2AHVwjJ9m2FgN-Y6kXDl5gQ6qTKszkkz5OQiLsyJvFtEkG0v8uMVDFPjXbo6MJyqqZXTu5fmUoS4jesOFZOhCjLwOcvqYDrUChuanAsKSRf2_LX9PmOeFfYT2gAmTJ2KhtABcgu_tczRR4pbRDg1XocmlZO45X4zMw";
// const AZURE_FACE_ENDPOINT = "https://isfb-face-api.cognitiveservices.azure.com/";

// type ResponseState = { [key: number]: string };
// type FeedbackState = { [key: number]: string };
// type LoadingState = { [key: number]: boolean };

// export default function F1Visa() {
//   const [responses, setResponses] = useState<ResponseState>({});
//   const [feedbacks, setFeedbacks] = useState<FeedbackState>({});
//   const [loading, setLoading] = useState<LoadingState>({});
//   const [isRecording, setIsRecording] = useState(false);
//   const [recordingVideo, setRecordingVideo] = useState(false);
//   const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [playingId, setPlayingId] = useState<number | null>(null);

//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const videoRef = useRef<HTMLVideoElement | null>(null);

//   const handleResponseChange = (id: number, value: string) => {
//     setResponses((prev) => ({ ...prev, [id]: value }));
//   };

//   const startRecording = async (id: number) => {
//     setIsRecording(true);
//     const speechConfig = sdk.SpeechConfig.fromSubscription(AZURE_SPEECH_KEY, AZURE_REGION);
//     const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
//     const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

//     recognizer.recognizeOnceAsync((result) => {
//       setIsRecording(false);
//       if (result.reason === sdk.ResultReason.RecognizedSpeech) {
//         setResponses((prev) => ({ ...prev, [id]: result.text }));
//       } else {
//         alert("Could not recognize your speech.");
//       }
//     });
//   };

//   const startVideoRecording = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//     setRecordingVideo(true);
//     if (videoRef.current) {
//       videoRef.current.srcObject = stream;
//       videoRef.current.play();
//     }

//     const recorder = new MediaRecorder(stream);
//     const chunks: Blob[] = [];

//     recorder.ondataavailable = (e) => chunks.push(e.data);
//     recorder.onstop = async () => {
//       const blob = new Blob(chunks, { type: "video/webm" });
//       setVideoBlob(blob);
//       await analyzeFaceFromVideo(blob);
//       stream.getTracks().forEach((t) => t.stop());
//       setRecordingVideo(false);
//     };

//     recorder.start();
//     setTimeout(() => recorder.stop(), 5000); // 5 sec
//   };

//   const analyzeFaceFromVideo = async (blob: Blob) => {
//     const videoURL = URL.createObjectURL(blob);
//     const video = document.createElement("video");
//     video.src = videoURL;
//     video.crossOrigin = "anonymous";
//     await video.play();
//     await new Promise((res) => setTimeout(res, 2000)); // Load a frame

//     const canvas = document.createElement("canvas");
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
//     const imageBlob = await new Promise<Blob>((resolve) =>
//       canvas.toBlob((b) => resolve(b as Blob), "image/jpeg")
//     );

//     const res = await fetch(`${AZURE_FACE_ENDPOINT}?returnFaceAttributes=emotion,smile,headPose`, {
//       method: "POST",
//       headers: {
//         "Ocp-Apim-Subscription-Key": AZURE_FACE_KEY,
//         "Content-Type": "application/octet-stream",
//       },
//       body: imageBlob,
//     });

//     const faceData = await res.json();
//     console.log("🎥 Face Analysis:", faceData);
//     // You can enhance this: Combine with text + send to your backend
//   };

//   const generateFeedback = async (id: number) => {
//     if (!responses[id]?.trim()) {
//       setFeedbacks((prev) => ({
//         ...prev,
//         [id]: "⚠️ Please enter a response.",
//       }));
//       return;
//     }

//     setLoading((prev) => ({ ...prev, [id]: true }));

//     try {
//       const res = await fetch("http://localhost:5001/generate_feedback/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ answer: responses[id] }),
//       });

//       const data = await res.json();
//       setFeedbacks((prev) => ({ ...prev, [id]: data.feedback }));
//       playFeedback(data.feedback, id);
//     } catch (err) {
//       setFeedbacks((prev) => ({ ...prev, [id]: "❌ Could not fetch feedback." }));
//     } finally {
//       setLoading((prev) => ({ ...prev, [id]: false }));
//     }
//   };

//   const playFeedback = (text: string, id: number) => {
//     stopAudio();
//     const speechConfig = sdk.SpeechConfig.fromSubscription(AZURE_SPEECH_KEY, AZURE_REGION);
//     const audioStream = sdk.AudioOutputStream.createPullStream();
//     const audioConfig = sdk.AudioConfig.fromStreamOutput(audioStream);
//     const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

//     synthesizer.speakTextAsync(
//       text,
//       (result) => {
//         const blob = new Blob([result.audioData], { type: "audio/wav" });
//         const url = URL.createObjectURL(blob);

//         if (audioRef.current) {
//           audioRef.current.src = url;
//           audioRef.current.muted = isMuted;
//           audioRef.current.play();
//         }

//         setPlayingId(id);
//         setIsPaused(false);
//         synthesizer.close();
//       },
//       (err) => {
//         console.error("TTS error", err);
//         synthesizer.close();
//       }
//     );
//   };

//   const pauseOrResume = () => {
//     if (!audioRef.current) return;
//     if (audioRef.current.paused) {
//       audioRef.current.play();
//       setIsPaused(false);
//     } else {
//       audioRef.current.pause();
//       setIsPaused(true);
//     }
//   };

//   const stopAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//     setPlayingId(null);
//     setIsPaused(false);
//   };

//   const toggleMute = () => {
//     if (audioRef.current) {
//       const next = !audioRef.current.muted;
//       audioRef.current.muted = next;
//       setIsMuted(next);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-900 text-white">
//       <aside className="w-72 bg-gray-800 p-6 h-screen overflow-y-auto sticky top-0">
//         <h2 className="text-xl font-bold">Questions</h2>
//         <ul className="mt-4 space-y-3">
//           {interviewQuestions.map((q) => (
//             <li key={q.id}>
//               <a href={`#q${q.id}`} className="block p-2 rounded-lg hover:bg-gray-700 transition">
//                 {q.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <main className="flex-1 p-8">
//         <header className="flex justify-between items-center border-b border-gray-700 pb-4">
//           <h1 className="text-3xl font-bold">F1 Visa Interview Simulation</h1>
//           <Link href="/">
//             <button className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
//               <FaHome className="mr-2" /> Home
//             </button>
//           </Link>
//         </header>

//         {interviewQuestions.map((q) => (
//           <section key={q.id} id={`q${q.id}`} className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">{q.title}</h2>
//             <video width="100%" controls className="rounded-lg">
//               <source src={q.videoUrl} type="video/mp4" />
//             </video>

//             <p className="mt-4 text-gray-400">{q.description}</p>

//             {/* Input */}
//             <textarea
//               value={responses[q.id] || ""}
//               onChange={(e) => handleResponseChange(q.id, e.target.value)}
//               placeholder="Your answer here..."
//               className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white mt-4"
//               rows={3}
//             />

//             <div className="mt-2 flex gap-2 flex-wrap">
//               <motion.button
//                 onClick={() => generateFeedback(q.id)}
//                 className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 Submit
//               </motion.button>

//               <motion.button
//                 onClick={() => startRecording(q.id)}
//                 className={`px-4 py-2 rounded-lg ${isRecording ? "bg-red-600" : "bg-yellow-500 hover:bg-yellow-600"}`}
//               >
//                 <FaMicrophone className="inline mr-2" />
//                 {isRecording ? "Listening..." : "Speak"}
//               </motion.button>

//               <motion.button
//                 onClick={startVideoRecording}
//                 className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
//               >
//                 <FaVideo className="inline mr-2" />
//                 {recordingVideo ? "Recording..." : "Record Video"}
//               </motion.button>

//               {playingId === q.id && (
//                 <>
//                   <button onClick={pauseOrResume} className="px-4 py-2 bg-blue-500 rounded-lg">
//                     {isPaused ? "▶️ Resume" : "⏸️ Pause"}
//                   </button>
//                   <button onClick={stopAudio} className="px-4 py-2 bg-gray-600 rounded-lg">
//                     <FaStop />
//                   </button>
//                   <button onClick={toggleMute} className="px-4 py-2 bg-gray-600 rounded-lg">
//                     {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
//                   </button>
//                 </>
//               )}
//             </div>

//             {videoBlob && (
//               <video className="mt-4 rounded-lg max-w-md" controls>
//                 <source src={URL.createObjectURL(videoBlob)} type="video/webm" />
//               </video>
//             )}

//             <div className="mt-6 bg-gray-700 p-4 rounded-lg">
//               <h3 className="text-xl font-semibold">Feedback</h3>
//               {loading[q.id] ? (
//                 <p className="text-blue-400 animate-pulse mt-2">⏳ Generating feedback...</p>
//               ) : (
//                 <div className="text-gray-300 mt-2 prose prose-invert">
//                   <ReactMarkdown>{feedbacks[q.id] || "Feedback will appear here."}</ReactMarkdown>
//                 </div>
//               )}
//             </div>
//           </section>
//         ))}

//         <audio ref={audioRef} hidden />
//       </main>
//     </div>
//   );
// }

//visaVideo1.2
import { useState, useRef } from "react";
import { interviewQuestions } from "@/data/questions";
import { motion } from "framer-motion";
import {
  FaHome, FaMicrophone, FaVolumeUp, FaVolumeMute,
  FaPause, FaStop, FaVideo
} from "react-icons/fa";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";

const AZURE_SPEECH_KEY = "BDcBsERgWoIz0DyiznLeKAK4mZ7GGj7iYPMn8N2XmmxwswOYZWDKJQQJ99BDACYeBjFXJ3w3AAAYACOGBtCq";
const AZURE_REGION = "eastus";
const AZURE_FACE_KEY = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJWZXJzaW9uIjoiMi4wLjAuMCIsIktleVZlcnNpb24iOiI3NTExMjE1MGMzNDg0ZjI1ODdhNGFiMWE2OTMyMjE1OCIsIkFjY291bnRJZCI6IjRkOGY3MjQwLTRkMGQtNDliZi05ZDBmLWQ2ZmQ2NDcxNDNhZSIsIkFjY291bnRUeXBlIjoiQXJtIiwiUGVybWlzc2lvbiI6IkNvbnRyaWJ1dG9yIiwiRXh0ZXJuYWxVc2VySWQiOiI5QTVDMDYyRkE1OUQ0MTQ4OEE3NDJBQUVFNkNBMDhBQyIsIlVzZXJUeXBlIjoiTWljcm9zb2Z0Q29ycEFhZCIsIklzc3VlckxvY2F0aW9uIjoiZWFzdHVzIiwibmJmIjoxNzQ0ODU2MjgzLCJleHAiOjE3NDQ4NjAxODMsImlzcyI6Imh0dHBzOi8vYXBpLnZpZGVvaW5kZXhlci5haS8iLCJhdWQiOiJodHRwczovL2FwaS52aWRlb2luZGV4ZXIuYWkvIn0.nl2EA2m6WZ12pXSQaOmxGmOJLKE7TAnneiD5Y2IYPMXXSfXDJHJEgiesp1I4fAEZqh0x1j0QBnALF3o7zD8mOi4Pyyu9VgnlBN21EMykmFyi7Zjcx-Iv1Cr68dllN1x4ot7CLOCFfpCpqj2tbMvcFFTdxaCi1xv_pqs43RVbPz9vONBSCbwU2AHVwjJ9m2FgN-Y6kXDl5gQ6qTKszkkz5OQiLsyJvFtEkG0v8uMVDFPjXbo6MJyqqZXTu5fmUoS4jesOFZOhCjLwOcvqYDrUChuanAsKSRf2_LX9PmOeFfYT2gAmTJ2KhtABcgu_tczRR4pbRDg1XocmlZO45X4zMw";
const AZURE_FACE_ENDPOINT = "https://isfb-face-api.cognitiveservices.azure.com/";

type ResponseState = { [key: number]: string };
type FeedbackState = { [key: number]: string };
type LoadingState = { [key: number]: boolean };

export default function F1Visa() {
  const [responses, setResponses] = useState<ResponseState>({});
  const [feedbacks, setFeedbacks] = useState<FeedbackState>({});
  const [loading, setLoading] = useState<LoadingState>({});
  const [isRecording, setIsRecording] = useState(false);
  const [recordingVideo, setRecordingVideo] = useState(false);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playingId, setPlayingId] = useState<number | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleResponseChange = (id: number, value: string) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const startRecording = async (id: number) => {
    setIsRecording(true);
    const speechConfig = sdk.SpeechConfig.fromSubscription(AZURE_SPEECH_KEY, AZURE_REGION);
    const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

    recognizer.recognizeOnceAsync((result) => {
      setIsRecording(false);
      if (result.reason === sdk.ResultReason.RecognizedSpeech) {
        setResponses((prev) => ({ ...prev, [id]: result.text }));
      } else {
        alert("Could not recognize your speech.");
      }
    });
  };

  const startVideoRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    setRecordingVideo(true);

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }

    const recorder = new MediaRecorder(stream);
    const chunks: Blob[] = [];

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = async () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      setVideoBlob(blob);
      await analyzeFaceFromVideo(blob);
      stream.getTracks().forEach((t) => t.stop());
      setRecordingVideo(false);
    };

    recorder.start();
    setTimeout(() => recorder.stop(), 5000); // record for 5 sec
  };

  const analyzeFaceFromVideo = async (blob: Blob) => {
    const videoURL = URL.createObjectURL(blob);
    const video = document.createElement("video");
    video.src = videoURL;
    video.crossOrigin = "anonymous";
    await video.play();
    await new Promise((res) => setTimeout(res, 2000));

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageBlob = await new Promise<Blob>((resolve) =>
      canvas.toBlob((b) => resolve(b as Blob), "image/jpeg")
    );

    const res = await fetch(`${AZURE_FACE_ENDPOINT}?returnFaceAttributes=emotion,smile,headPose`, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": AZURE_FACE_KEY,
        "Content-Type": "application/octet-stream",
      },
      body: imageBlob,
    });

    const faceData = await res.json();
    console.log("🎥 Face Feedback:", faceData);
  };

  const generateFeedback = async (id: number) => {
    if (!responses[id]?.trim()) {
      setFeedbacks((prev) => ({ ...prev, [id]: "⚠️ Please enter a response." }));
      return;
    }

    setLoading((prev) => ({ ...prev, [id]: true }));

    try {
      const res = await fetch("http://localhost:5001/generate_feedback/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer: responses[id] }),
      });

      const data = await res.json();
      setFeedbacks((prev) => ({ ...prev, [id]: data.feedback }));
      playFeedback(data.feedback, id);
    } catch (err) {
      setFeedbacks((prev) => ({ ...prev, [id]: "❌ Could not fetch feedback." }));
    } finally {
      setLoading((prev) => ({ ...prev, [id]: false }));
    }
  };

  const playFeedback = (text: string, id: number) => {
    stopAudio();
    const speechConfig = sdk.SpeechConfig.fromSubscription(AZURE_SPEECH_KEY, AZURE_REGION);
    speechConfig.speechSynthesisVoiceName = "en-US-JennyNeural";
    const audioStream = sdk.AudioOutputStream.createPullStream();
    const audioConfig = sdk.AudioConfig.fromStreamOutput(audioStream);
    const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

    synthesizer.speakTextAsync(
      text,
      (result) => {
        const blob = new Blob([result.audioData], { type: "audio/wav" });
        const url = URL.createObjectURL(blob);

        if (audioRef.current) {
          audioRef.current.src = url;
          audioRef.current.muted = isMuted;
          audioRef.current.play();
        }

        setPlayingId(id);
        setIsPaused(false);
        synthesizer.close();
      },
      (err) => {
        console.error("TTS error", err);
        synthesizer.close();
      }
    );
  };

  const pauseOrResume = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPaused(false);
    } else {
      audioRef.current.pause();
      setIsPaused(true);
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setPlayingId(null);
    setIsPaused(false);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const next = !audioRef.current.muted;
      audioRef.current.muted = next;
      setIsMuted(next);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <aside className="w-72 bg-gray-800 p-6 h-screen overflow-y-auto sticky top-0">
        <h2 className="text-xl font-bold">Questions</h2>
        <ul className="mt-4 space-y-3">
          {interviewQuestions.map((q) => (
            <li key={q.id}>
              <a href={`#q${q.id}`} className="block p-2 rounded-lg hover:bg-gray-700 transition">
                {q.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 p-8">
        <header className="flex justify-between items-center border-b border-gray-700 pb-4">
          <h1 className="text-3xl font-bold">F1 Visa Interview Simulation</h1>
          <Link href="/">
            <button className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
              <FaHome className="mr-2" /> Home
            </button>
          </Link>
        </header>

        {interviewQuestions.map((q) => (
          <section key={q.id} id={`q${q.id}`} className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{q.title}</h2>
            <video width="100%" controls className="rounded-lg">
              <source src={q.videoUrl} type="video/mp4" />
            </video>

            <textarea
              value={responses[q.id] || ""}
              onChange={(e) => handleResponseChange(q.id, e.target.value)}
              placeholder="Your answer here..."
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white mt-4"
              rows={3}
            />

            <div className="mt-2 flex gap-2 flex-wrap">
              <motion.button
                onClick={() => generateFeedback(q.id)}
                className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg"
              >
                Submit
              </motion.button>

              <motion.button
                onClick={() => startRecording(q.id)}
                className={`px-4 py-2 rounded-lg ${isRecording ? "bg-red-600" : "bg-yellow-500 hover:bg-yellow-600"}`}
              >
                <FaMicrophone className="inline mr-2" />
                {isRecording ? "Listening..." : "Speak"}
              </motion.button>

              <motion.button
                onClick={startVideoRecording}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
              >
                <FaVideo className="inline mr-2" />
                {recordingVideo ? "Recording..." : "Record Video"}
              </motion.button>

              {playingId === q.id && (
                <>
                  <button onClick={pauseOrResume} className="px-4 py-2 bg-blue-500 rounded-lg">
                    {isPaused ? "▶️ Resume" : "⏸️ Pause"}
                  </button>
                  <button onClick={stopAudio} className="px-4 py-2 bg-gray-600 rounded-lg">
                    <FaStop />
                  </button>
                  <button onClick={toggleMute} className="px-4 py-2 bg-gray-600 rounded-lg">
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                  </button>
                </>
              )}
            </div>

            {videoBlob && (
              <video className="mt-4 rounded-lg max-w-md" controls>
                <source src={URL.createObjectURL(videoBlob)} type="video/webm" />
              </video>
            )}

            <div className="mt-6 bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-semibold">Feedback</h3>
              {loading[q.id] ? (
                <p className="text-blue-400 animate-pulse mt-2">⏳ Generating feedback...</p>
              ) : (
                <div className="text-gray-300 mt-2 prose prose-invert">
                  <ReactMarkdown>{feedbacks[q.id] || "Feedback will appear here."}</ReactMarkdown>
                </div>
              )}
            </div>
          </section>
        ))}
        <audio ref={audioRef} hidden />
        <video ref={videoRef} hidden muted />
      </main>
    </div>
  );
}

//video1.3
// pages/F1Visa.tsx

// import { useState, useRef } from "react";
// import { interviewQuestions } from "@/data/questions";
// import { motion } from "framer-motion";
// import {
//   FaHome, FaMicrophone, FaVideo, FaStop, FaVolumeMute, FaVolumeUp, FaPause
// } from "react-icons/fa";
// import Link from "next/link";
// import ReactMarkdown from "react-markdown";
// import * as sdk from "microsoft-cognitiveservices-speech-sdk";

// const AZURE_SPEECH_KEY = "BDcBsERgWoIz0DyiznLeKAK4mZ7GGj7iYPMn8N2XmmxwswOYZWDKJQQJ99BDACYeBjFXJ3w3AAAYACOGBtCq";
// const AZURE_REGION = "eastus";
// const AZURE_FACE_KEY = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJWZXJzaW9uIjoiMi4wLjAuMCIsIktleVZlcnNpb24iOiI3NTExMjE1MGMzNDg0ZjI1ODdhNGFiMWE2OTMyMjE1OCIsIkFjY291bnRJZCI6IjRkOGY3MjQwLTRkMGQtNDliZi05ZDBmLWQ2ZmQ2NDcxNDNhZSIsIkFjY291bnRUeXBlIjoiQXJtIiwiUGVybWlzc2lvbiI6IkNvbnRyaWJ1dG9yIiwiRXh0ZXJuYWxVc2VySWQiOiI5QTVDMDYyRkE1OUQ0MTQ4OEE3NDJBQUVFNkNBMDhBQyIsIlVzZXJUeXBlIjoiTWljcm9zb2Z0Q29ycEFhZCIsIklzc3VlckxvY2F0aW9uIjoiZWFzdHVzIiwibmJmIjoxNzQ0ODU2MjgzLCJleHAiOjE3NDQ4NjAxODMsImlzcyI6Imh0dHBzOi8vYXBpLnZpZGVvaW5kZXhlci5haS8iLCJhdWQiOiJodHRwczovL2FwaS52aWRlb2luZGV4ZXIuYWkvIn0.nl2EA2m6WZ12pXSQaOmxGmOJLKE7TAnneiD5Y2IYPMXXSfXDJHJEgiesp1I4fAEZqh0x1j0QBnALF3o7zD8mOi4Pyyu9VgnlBN21EMykmFyi7Zjcx-Iv1Cr68dllN1x4ot7CLOCFfpCpqj2tbMvcFFTdxaCi1xv_pqs43RVbPz9vONBSCbwU2AHVwjJ9m2FgN-Y6kXDl5gQ6qTKszkkz5OQiLsyJvFtEkG0v8uMVDFPjXbo6MJyqqZXTu5fmUoS4jesOFZOhCjLwOcvqYDrUChuanAsKSRf2_LX9PmOeFfYT2gAmTJ2KhtABcgu_tczRR4pbRDg1XocmlZO45X4zMw";
// const AZURE_FACE_ENDPOINT = "https://isfb-face-api.cognitiveservices.azure.com/";

// type FeedbackState = { [key: number]: string };
// type ResponseState = { [key: number]: string };
// type LoadingState = { [key: number]: boolean };

// export default function F1Visa() {
//   const [feedbacks, setFeedbacks] = useState<FeedbackState>({});
//   const [responses, setResponses] = useState<ResponseState>({});
//   const [loading, setLoading] = useState<LoadingState>({});
//   const [isRecordingVideo, setIsRecordingVideo] = useState(false);
//   const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
//   const [playingId, setPlayingId] = useState<number | null>(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);

//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const videoPreviewRef = useRef<HTMLVideoElement | null>(null);

//   const handleResponseChange = (id: number, value: string) => {
//     setResponses(prev => ({ ...prev, [id]: value }));
//   };

//   const generateCombinedFeedback = async (id: number, text: string, faceData: any) => {
//     setLoading(prev => ({ ...prev, [id]: true }));

//     try {
//       const response = await fetch("http://localhost:5001/generate_feedback/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           answer: text,
//           raw_text: text,
//           face: faceData?.[0]?.faceAttributes,
//         })
//       });

//       const data = await response.json();
//       setFeedbacks(prev => ({ ...prev, [id]: data.feedback }));
//       playFeedback(data.feedback, id);
//     } catch (err) {
//       setFeedbacks(prev => ({ ...prev, [id]: "❌ Failed to fetch feedback." }));
//     } finally {
//       setLoading(prev => ({ ...prev, [id]: false }));
//     }
//   };

//   const extractAudioText = async (blob: Blob): Promise<string> => {
//     const speechConfig = sdk.SpeechConfig.fromSubscription(AZURE_SPEECH_KEY, AZURE_REGION);
//     const pushStream = sdk.AudioInputStream.createPushStream();
//     const audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);
//     const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

//     blob.arrayBuffer().then((buffer: ArrayBuffer) => {
//       const uint8Array = new Uint8Array(buffer);
//       pushStream.write(uint8Array.buffer);  // ✅ pass the raw ArrayBuffer
//       pushStream.close();
//     });
    
    
    
    

//     return new Promise((resolve) => {
//       recognizer.recognizeOnceAsync(result => {
//         resolve(result.text || "Could not recognize speech");
//       });
//     });
//   };

//   const analyzeFace = async (frameBlob: Blob): Promise<any> => {
//     const res = await fetch(`${AZURE_FACE_ENDPOINT}?returnFaceAttributes=emotion,smile,headPose`, {
//       method: "POST",
//       headers: {
//         "Ocp-Apim-Subscription-Key": AZURE_FACE_KEY,
//         "Content-Type": "application/octet-stream",
//       },
//       body: frameBlob
//     });

//     return await res.json();
//   };

//   const startVideoRecording = async (id: number) => {
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//     setIsRecordingVideo(true);
//     const recorder = new MediaRecorder(stream);
//     const chunks: Blob[] = [];

//     if (videoPreviewRef.current) {
//       videoPreviewRef.current.srcObject = stream;
//       videoPreviewRef.current.play();
//     }

//     recorder.ondataavailable = (e) => chunks.push(e.data);
//     recorder.onstop = async () => {
//       const blob = new Blob(chunks, { type: "video/webm" });
//       setVideoBlob(blob);
//       stream.getTracks().forEach(track => track.stop());
//       setIsRecordingVideo(false);

//       // extract frame
//       const videoURL = URL.createObjectURL(blob);
//       const video = document.createElement("video");
//       video.src = videoURL;
//       await video.play();
//       await new Promise(r => setTimeout(r, 1000));
//       const canvas = document.createElement("canvas");
//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;
//       canvas.getContext("2d")?.drawImage(video, 0, 0);
//       const frameBlob = await new Promise<Blob>((resolve) =>
//         canvas.toBlob(b => resolve(b as Blob), "image/jpeg")
//       );

//       const [text, face] = await Promise.all([
//         extractAudioText(blob),
//         analyzeFace(frameBlob!)
//       ]);

//       setResponses(prev => ({ ...prev, [id]: text }));
//       generateCombinedFeedback(id, text, face);
//     };

//     recorder.start();
//     setTimeout(() => recorder.stop(), 30000); // 30s max
//   };

//   const playFeedback = (text: string, id: number) => {
//     const speechConfig = sdk.SpeechConfig.fromSubscription(AZURE_SPEECH_KEY, AZURE_REGION);
//     const audioStream = sdk.AudioOutputStream.createPullStream();
//     const audioConfig = sdk.AudioConfig.fromStreamOutput(audioStream);
//     const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

//     synthesizer.speakTextAsync(
//       text,
//       result => {
//         const blob = new Blob([result.audioData], { type: "audio/wav" });
//         const url = URL.createObjectURL(blob);

//         if (audioRef.current) {
//           audioRef.current.src = url;
//           audioRef.current.play();
//           setIsPaused(false);
//           setPlayingId(id);
//         }

//         synthesizer.close();
//       },
//       err => {
//         console.error("TTS error", err);
//         synthesizer.close();
//       }
//     );
//   };

//   const pauseOrResume = () => {
//     if (!audioRef.current) return;
//     if (audioRef.current.paused) {
//       audioRef.current.play();
//       setIsPaused(false);
//     } else {
//       audioRef.current.pause();
//       setIsPaused(true);
//     }
//   };

//   const stopAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//     setPlayingId(null);
//     setIsPaused(false);
//   };

//   const toggleMute = () => {
//     if (audioRef.current) {
//       const next = !audioRef.current.muted;
//       audioRef.current.muted = next;
//       setIsMuted(next);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-900 text-white">
//       <aside className="w-72 bg-gray-800 p-6 h-screen overflow-y-auto sticky top-0">
//         <h2 className="text-xl font-bold">Questions</h2>
//         <ul className="mt-4 space-y-3">
//           {interviewQuestions.map(q => (
//             <li key={q.id}>
//               <a href={`#q${q.id}`} className="block p-2 hover:bg-gray-700 rounded">{q.title}</a>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <main className="flex-1 p-8">
//         <header className="flex justify-between items-center pb-4 border-b border-gray-700">
//           <h1 className="text-3xl font-bold">F1 Visa Interview</h1>
//           <Link href="/">
//             <button className="bg-blue-600 px-4 py-2 rounded-lg text-white flex items-center">
//               <FaHome className="mr-2" /> Home
//             </button>
//           </Link>
//         </header>

//         {interviewQuestions.map(q => (
//           <section key={q.id} id={`q${q.id}`} className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-3">{q.title}</h2>
//             <video controls className="rounded-lg w-full mb-4">
//               <source src={q.videoUrl} type="video/mp4" />
//             </video>
//             <p className="text-gray-400 mb-4">{q.description}</p>

//             <textarea
//               className="w-full p-3 bg-gray-900 border border-gray-600 rounded text-white"
//               value={responses[q.id] || ""}
//               onChange={(e) => handleResponseChange(q.id, e.target.value)}
//               placeholder="Type your response here..."
//             />

//             <div className="mt-3 flex flex-wrap gap-3">
//               <button onClick={() => generateCombinedFeedback(q.id, responses[q.id], null)} className="bg-green-600 px-4 py-2 rounded">
//                 Submit
//               </button>
//               <button onClick={() => startVideoRecording(q.id)} className="bg-purple-600 px-4 py-2 rounded flex items-center">
//                 <FaVideo className="mr-2" />
//                 {isRecordingVideo ? "Recording..." : "Record Video"}
//               </button>

//               {playingId === q.id && (
//                 <>
//                   <button onClick={pauseOrResume} className="bg-blue-500 px-4 py-2 rounded">
//                     {isPaused ? "▶ Resume" : "⏸ Pause"}
//                   </button>
//                   <button onClick={stopAudio} className="bg-gray-600 px-4 py-2 rounded"><FaStop /></button>
//                   <button onClick={toggleMute} className="bg-gray-600 px-4 py-2 rounded">
//                     {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
//                   </button>
//                 </>
//               )}
//             </div>

//             {/* Preview during recording */}
//             {isRecordingVideo && (
//               <video ref={videoPreviewRef} className="mt-4 rounded max-w-sm border" muted autoPlay />
//             )}

//             {/* Final Recorded Video */}
//             {videoBlob && !isRecordingVideo && (
//               <video className="mt-4 rounded max-w-sm" controls>
//                 <source src={URL.createObjectURL(videoBlob)} />
//               </video>
//             )}

//             <div className="mt-5 bg-gray-700 p-4 rounded-lg">
//               <h3 className="text-xl font-semibold">Feedback</h3>
//               {loading[q.id] ? (
//                 <p className="text-blue-300 animate-pulse mt-2">⏳ Generating feedback...</p>
//               ) : (
//                 <div className="text-gray-200 mt-2 prose prose-invert">
//                   <ReactMarkdown>{feedbacks[q.id] || "Feedback will appear here."}</ReactMarkdown>
//                 </div>
//               )}
//             </div>
//           </section>
//         ))}
//         <audio ref={audioRef} hidden />
//       </main>
//     </div>
//   );
// }

//v2.1
// import { useState, useRef } from "react";
// import { interviewQuestions } from "@/data/questions";
// import { motion } from "framer-motion";
// import {
//   FaHome, FaMicrophone, FaVideo, FaVolumeMute,
//   FaVolumeUp, FaStop, FaPause
// } from "react-icons/fa";
// import Link from "next/link";
// import ReactMarkdown from "react-markdown";
// import * as sdk from "microsoft-cognitiveservices-speech-sdk";

// const AZURE_SPEECH_KEY = "BDcBsERgWoIz0DyiznLeKAK4mZ7GGj7iYPMn8N2XmmxwswOYZWDKJQQJ99BDACYeBjFXJ3w3AAAYACOGBtCq";
// const AZURE_REGION = "eastus";
// const AZURE_FACE_KEY = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJWZXJzaW9uIjoiMi4wLjAuMCIsIktleVZlcnNpb24iOiI3NTExMjE1MGMzNDg0ZjI1ODdhNGFiMWE2OTMyMjE1OCIsIkFjY291bnRJZCI6IjRkOGY3MjQwLTRkMGQtNDliZi05ZDBmLWQ2ZmQ2NDcxNDNhZSIsIkFjY291bnRUeXBlIjoiQXJtIiwiUGVybWlzc2lvbiI6IkNvbnRyaWJ1dG9yIiwiRXh0ZXJuYWxVc2VySWQiOiI5QTVDMDYyRkE1OUQ0MTQ4OEE3NDJBQUVFNkNBMDhBQyIsIlVzZXJUeXBlIjoiTWljcm9zb2Z0Q29ycEFhZCIsIklzc3VlckxvY2F0aW9uIjoiZWFzdHVzIiwibmJmIjoxNzQ0ODU2MjgzLCJleHAiOjE3NDQ4NjAxODMsImlzcyI6Imh0dHBzOi8vYXBpLnZpZGVvaW5kZXhlci5haS8iLCJhdWQiOiJodHRwczovL2FwaS52aWRlb2luZGV4ZXIuYWkvIn0.nl2EA2m6WZ12pXSQaOmxGmOJLKE7TAnneiD5Y2IYPMXXSfXDJHJEgiesp1I4fAEZqh0x1j0QBnALF3o7zD8mOi4Pyyu9VgnlBN21EMykmFyi7Zjcx-Iv1Cr68dllN1x4ot7CLOCFfpCpqj2tbMvcFFTdxaCi1xv_pqs43RVbPz9vONBSCbwU2AHVwjJ9m2FgN-Y6kXDl5gQ6qTKszkkz5OQiLsyJvFtEkG0v8uMVDFPjXbo6MJyqqZXTu5fmUoS4jesOFZOhCjLwOcvqYDrUChuanAsKSRf2_LX9PmOeFfYT2gAmTJ2KhtABcgu_tczRR4pbRDg1XocmlZO45X4zMw";
// const AZURE_FACE_ENDPOINT = "https://isfb-face-api.cognitiveservices.azure.com/";
// export default function F1Visa() {
//   const [responses, setResponses] = useState<{ [key: number]: string }>({});
//   const [feedbacks, setFeedbacks] = useState<{ [key: number]: string }>({});
//   const [loading, setLoading] = useState<{ [key: number]: boolean }>({});
//   const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
//   const [recording, setRecording] = useState(false);
//   const [faceFeedback, setFaceFeedback] = useState("");
//   const [toneAnalysis, setToneAnalysis] = useState("");

//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const videoRef = useRef<HTMLVideoElement | null>(null);

//   const recordVideo = async (id: number) => {
//     setRecording(true);
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

//     const recorder = new MediaRecorder(stream);
//     const chunks: Blob[] = [];

//     recorder.ondataavailable = (e) => chunks.push(e.data);
//     recorder.onstop = async () => {
//       const blob = new Blob(chunks, { type: "video/webm" });
//       setVideoBlob(blob);
//       if (videoRef.current) {
//         videoRef.current.src = URL.createObjectURL(blob);
//         videoRef.current.play();
//       }

//       stream.getTracks().forEach((t) => t.stop());
//       await handlePostRecording(blob, id);
//     };

//     recorder.start();
//     setTimeout(() => recorder.stop(), 25000); // Record for 25s
//   };

//   const handlePostRecording = async (blob: Blob, id: number) => {
//     setRecording(false);
//     const frame = await captureFrame(blob);
//     const face = await analyzeFace(frame);
//     const transcript = await extractTextFromAudio(blob);

//     setFaceFeedback(face);
//     setToneAnalysis("Tone was clear and paced well."); // Optional: add real tone processing
//     setResponses((prev) => ({ ...prev, [id]: transcript }));
//   };

//   const captureFrame = async (blob: Blob): Promise<Blob> => {
//     return new Promise((resolve) => {
//       const video = document.createElement("video");
//       video.src = URL.createObjectURL(blob);
//       video.onloadeddata = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = video.videoWidth;
//         canvas.height = video.videoHeight;
//         const ctx = canvas.getContext("2d");
//         ctx?.drawImage(video, 0, 0);
//         canvas.toBlob((b) => resolve(b as Blob), "image/jpeg");
//       };
//     });
//   };

//   const analyzeFace = async (imageBlob: Blob): Promise<string> => {
//     const res = await fetch(`${AZURE_FACE_ENDPOINT}face/v1.0/detect?returnFaceAttributes=smile,emotion,headPose`, {
//       method: "POST",
//       headers: {
//         "Ocp-Apim-Subscription-Key": AZURE_FACE_KEY,
//         "Content-Type": "application/octet-stream"
//       },
//       body: imageBlob
//     });

//     const data = await res.json();
//     if (!data.length) return "No face detected.";

//     const attrs = data[0].faceAttributes;
//     return `Smile: ${attrs.smile}, Emotions: ${JSON.stringify(attrs.emotion)}, Head Pose: ${JSON.stringify(attrs.headPose)}`;
//   };

//   const extractTextFromAudio = async (blob: Blob): Promise<string> => {
//     const audioConfig = sdk.AudioConfig.fromWavFileInput(blob);
//     const speechConfig = sdk.SpeechConfig.fromSubscription(AZURE_SPEECH_KEY, AZURE_REGION);
//     speechConfig.speechRecognitionLanguage = "en-US";

//     const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
//     return new Promise((resolve) => {
//       recognizer.recognizeOnceAsync((res) => {
//         if (res.reason === sdk.ResultReason.RecognizedSpeech) {
//           resolve(res.text);
//         } else {
//           resolve("Speech not recognized.");
//         }
//       });
//     });
//   };

//   const generateFeedback = async (id: number) => {
//     setLoading((prev) => ({ ...prev, [id]: true }));
//     try {
//       const res = await fetch("http://localhost:5001/generate_feedback/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           answer: responses[id],
//           tone_analysis: toneAnalysis,
//           face_feedback: faceFeedback
//         }),
//       });

//       const data = await res.json();
//       setFeedbacks((prev) => ({ ...prev, [id]: data.feedback }));
//       speakFeedback(data.feedback);
//     } catch (err) {
//       setFeedbacks((prev) => ({ ...prev, [id]: "❌ Error generating feedback." }));
//     } finally {
//       setLoading((prev) => ({ ...prev, [id]: false }));
//     }
//   };

//   const speakFeedback = (text: string) => {
//     const speechConfig = sdk.SpeechConfig.fromSubscription(AZURE_SPEECH_KEY, AZURE_REGION);
//     const audioStream = sdk.AudioOutputStream.createPullStream();
//     const audioConfig = sdk.AudioConfig.fromStreamOutput(audioStream);
//     const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

//     synthesizer.speakTextAsync(text, (result) => {
//       const blob = new Blob([result.audioData], { type: "audio/wav" });
//       const url = URL.createObjectURL(blob);
//       if (audioRef.current) {
//         audioRef.current.src = url;
//         audioRef.current.play();
//       }
//       synthesizer.close();
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <h1 className="text-3xl font-bold mb-4">🎥 F1 Interview Simulator</h1>
//       {interviewQuestions.map((q) => (
//         <section key={q.id} className="mb-10 bg-gray-800 p-6 rounded-md">
//           <h2 className="text-xl font-semibold">{q.title}</h2>
//           <video width="100%" controls className="rounded mt-2">
//             <source src={q.videoUrl} type="video/mp4" />
//           </video>

//           <textarea
//             className="w-full p-3 mt-4 bg-gray-700 text-white rounded"
//             rows={3}
//             placeholder="Your response"
//             value={responses[q.id] || ""}
//             onChange={(e) => setResponses((p) => ({ ...p, [q.id]: e.target.value }))}
//           />

//           <div className="flex gap-4 mt-4 flex-wrap">
//             <button onClick={() => generateFeedback(q.id)} className="px-4 py-2 bg-green-500 rounded">
//               Submit
//             </button>
//             <button onClick={() => recordVideo(q.id)} className="px-4 py-2 bg-purple-600 rounded">
//               <FaVideo className="inline mr-2" /> {recording ? "Recording..." : "Record Video"}
//             </button>
//           </div>

//           {videoBlob && (
//             <video
//               className="rounded mt-4 border border-white"
//               controls
//               width={360}
//               ref={videoRef}
//             >
//               <source src={URL.createObjectURL(videoBlob)} />
//             </video>
//           )}

//           <div className="mt-4 bg-gray-700 p-4 rounded">
//             <h3 className="font-semibold mb-2">AI Feedback</h3>
//             {loading[q.id] ? (
//               <p className="animate-pulse">Loading...</p>
//             ) : (
// <div className="prose prose-invert">
//   <ReactMarkdown>{feedbacks[q.id]}</ReactMarkdown>
// </div>
//             )}
//           </div>
//         </section>
//       ))}

//       <audio ref={audioRef} hidden />
//     </div>
//   );
// }
