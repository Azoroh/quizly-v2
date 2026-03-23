import { useReducer } from "react";
import { mockQuiz } from "./data/mockQuiz.js";
import { getRandomItems } from "./utils/getRandomItems.js";

import LandingScreen from "./components/LandingScreen";
import LoadingScreen from "./components/LoadingScreen";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import ResultScreen from "./components/ResultScreen";

const POINTS_PER_QUESTION = 10;

// status = "landing" | "loading" | "ready" | "active" | "finished" | "error"
const initialState = {
  totalQuestions: mockQuiz.questions,
  questionCount: 5,
  status: "ready",
  index: null,
  answer: null,
  points: 0,
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

    case "selectQuestionCount":
      return {
        ...state,
        questionCount: action.payload,
        questions: getRandomItems(state.totalQuestions, action.payload),
      };

    case "startQuiz":
      return {
        ...state,
        status: "active",
        index: 0,
      };

    case "selectAnswer":
      return {
        ...state,
        answer: action.payload,
      };

    case "nextQuestion":
      return {
        ...state,
        answer: null,
        index: state.index + 1,
        points:
          state.answer === state.questions[state.index].correctOption
            ? state.points + POINTS_PER_QUESTION
            : state.points,
      };

    case "finalQuestion":
      return {
        ...state,
        status: "finished",
        points:
          state.answer === state.questions[state.index].correctOption
            ? state.points + POINTS_PER_QUESTION
            : state.points,
      };

    default:
      throw new Error("Unknown Action");
  }
}

function init(initial) {
  return {
    ...initial,
    questions: getRandomItems(initial.totalQuestions, initial.questionCount),
  };
}

export default function App() {
  const [
    { status, questionCount, questions, index, answer, points },
    dispatch,
  ] = useReducer(reducer, initialState, init);

  console.log(points);

  return (
    <div>
      {status === "landing" && <LandingScreen dispatch={dispatch} />}
      {status === "loading" && <LoadingScreen dispatch={dispatch} />}
      {status === "ready" && (
        <StartScreen dispatch={dispatch} questionCount={questionCount} />
      )}
      {status === "active" && (
        <QuestionScreen
          dispatch={dispatch}
          curQuestion={questions[index]}
          answer={answer}
          questions={questions}
          index={index}
        />
      )}

      {status === "finished" && <ResultScreen />}
    </div>
  );
}
