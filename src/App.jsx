import { useReducer } from "react";
import LandingScreen from "./components/LandingScreen";
import LoadingScreen from "./components/LoadingScreen";

// status = "landing" | "loading" | "ready" | "active" | "finished" | "error"
const initialState = {
  status: "landing",
};

function reducer(state, action) {
  switch (action.type) {
    case "generateQuiz":
      return {
        ...state,
        status: "loading",
      };

    default:
      throw new Error("Unknown Action");
  }
}

function init(initial) {
  return initial;
}

export default function App() {
  const [{ status }, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div>
      {status === "landing" && <LandingScreen dispatch={dispatch} />}
      {status === "loading" && <LoadingScreen dispatch={dispatch} />}
    </div>
  );
}
