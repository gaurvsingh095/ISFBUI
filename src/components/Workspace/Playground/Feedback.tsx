import React, { useState, useEffect } from "react";
import axios from "axios";

type FeedbackProps = {
  problem: any; // Replace 'any' with your actual problem type
};

const Feedback: React.FC<FeedbackProps> = ({ problem }) => {
  const questions = [
    "What is the time complexity of your solution?",
    "Can you optimize your algorithm further?",
    "Explain how your code handles edge cases.",
    "What is the space complexity of your solution?",
    "How would your code perform with large input sizes?",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>("");
  const [aiFeedback, setAiFeedback] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);
  const [showSubmitButton, setShowSubmitButton] = useState<boolean>(true);

  // Update window height dynamically
  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePreviousQuestion = () => {
    const newIndex = currentQuestionIndex === 0 ? questions.length - 1 : currentQuestionIndex - 1;
    setCurrentQuestionIndex(newIndex);
    setUserInput("");
    setAiFeedback("");
    setShowSubmitButton(true);
  };

  const handleNextQuestion = () => {
    const newIndex = currentQuestionIndex === questions.length - 1 ? 0 : currentQuestionIndex + 1;
    setCurrentQuestionIndex(newIndex);
    setUserInput("");
    setAiFeedback("");
    setShowSubmitButton(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
    setShowSubmitButton(true);
  };

  const handleTextareaFocus = () => {
    setShowSubmitButton(true);
  };

  const handleSubmit = async () => {
    if (!userInput.trim()) {
      alert("Please enter your question or feedback.");
      return;
    }

    setIsLoading(true);
    setAiFeedback("Generating AI feedback...");

    try {
      const response = await axios.post("/api/tech_sim/generate_feedback/", {
        answer: userInput,
      });

      setAiFeedback(response.data.feedback);
      setShowSubmitButton(false);  // Hide submit button after feedback is generated
    } catch (error) {
      console.error("Error fetching AI feedback:", error);
      setAiFeedback("An error occurred while generating feedback.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 flex flex-col h-full">
      {/* Carousel Section */}
      <div className="flex-none">
        <div className="flex items-center justify-between bg-dark-fill-3 rounded-lg p-4">
          <button
            className="text-white p-3 rounded-full focus:outline-none"
            onClick={handlePreviousQuestion}
            aria-label="Previous Question"
          >
            &#8592;
          </button>
          <div className="mx-4 text-center flex-1 text-white">
            <p className="text-xl font-semibold">{questions[currentQuestionIndex]}</p>
          </div>
          <button
            className="text-white p-3 rounded-full focus:outline-none"
            onClick={handleNextQuestion}
            aria-label="Next Question"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Feedback Input and AI Response Sections */}
      <div className="flex flex-col flex-1 mt-4 overflow-hidden">
        {/* Feedback Input Section */}
        <div className="flex-none">
          <textarea
            className="p-4 bg-dark-fill-3 rounded-md text-base text-white resize-vertical focus:outline-none w-full"
            placeholder="Enter your question or feedback..."
            value={userInput}
            onChange={handleInputChange}
            onFocus={handleTextareaFocus}
            style={{
              minHeight: "150px",
              height: aiFeedback ? "150px" : "200px",
              maxHeight: "350px",
            }}
          />
          {/* Submit Button or Placeholder */}
          {showSubmitButton ? (
            <div className="mt-2">
              <button
                className="px-4 py-2 font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          ) : (
            <div className="mt-2" style={{ height: "40px" }}></div>  
          )}
        </div>

        {/* AI Response Section */}
        <div
          className="mt-4 bg-gray-400 rounded-md text-base text-white p-4 overflow-auto"
          style={{
            flexGrow: 1,
            height: aiFeedback ? `calc(${windowHeight * 0.44}px)` : "292px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {aiFeedback}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
