import { useState } from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import Playground from "./Playground/Playground";
import Feedback from "./Playground/Feedback";
import { Problem } from "@/utils/types/problem";
import Confetti from "react-confetti";
import useWindowSize from "@/hooks/useWindowSize";

type WorkspaceProps = {
  problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  const { width, height } = useWindowSize();
  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState(false);

  return (
    <div className="h-full">
      <Split
        className="split h-full"
        minSize={0}
        sizes={[35, 25, 40]}
        gutterSize={10}
      >
        {/* Left Column - Problem Description */}
        <div className="h-full">
          <ProblemDescription problem={problem} _solved={solved} />
        </div>

        {/* Middle Column - AI Feedback Section */}
        <div className="h-full bg-dark-layer-1">
          <Feedback problem={problem} />
        </div>

        {/* Right Column - Coding Playground */}
        <div className="h-full bg-dark-fill-2">
          <Playground
            problem={problem}
            setSuccess={setSuccess}
            setSolved={setSolved}
          />
          {success && (
            <Confetti
              gravity={0.3}
              tweenDuration={4000}
              width={width - 1}
              height={height - 1}
            />
          )}
        </div>
      </Split>
    </div>
  );
};

export default Workspace;