import { useReducer } from "react";
import LandingScreen from "./components/LandingScreen";
import LoadingScreen from "./components/LoadingScreen";
import StartScreen from "./components/StartScreen";

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

    case "ready":
      return {
        ...state,
        status: "ready",
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
      {status === "ready" && <StartScreen dispatch={dispatch} />}
    </div>
  );
}
