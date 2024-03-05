import Choice from "./choice";
import { useState } from "react";

type QuizType = {
  question: string;
  options: [
    { id: number; option: string; judge: boolean },
    { id: number; option: string; judge: boolean },
    { id: number; option: string; judge: boolean }
  ];
  corrent: number;
};

const Quiz = () => {
  const initial: QuizType = {
    question: "1の正解は？",
    options: [
      { id: 0, option: "選択肢 A", judge: false },
      { id: 1, option: "選択肢 B", judge: false },
      { id: 2, option: "選択肢 C", judge: false },
    ],
    corrent: 0,
  };

  const [quiz, setQuiz] = useState(initial);

  const changeQuiz = (id: number) => {
    const newQuiz = { ...quiz };
    newQuiz.options[id].judge = true;
    setQuiz(newQuiz);
  };

  return (
    <main className="w-80 mx-auto mt-8">
      <h1 className="text-xl text-center font-bold border-b border-gray-400 pb-2">
        三択クイズ
      </h1>
      {/* {quizzes.map((quiz, index) => {
        return (
          <Choice
            key={index}
            question={quiz[0]}
            options={[quiz[1], quiz[2], quiz[3]]}
            isCorrent={quiz[4]}
          />
        );
      })} */}
      <Choice
        question={quiz.question}
        options={[quiz.options[0], quiz.options[1], quiz.options[2]]}
        isCorrent={quiz.corrent}
        changeQuiz={changeQuiz}
      />
    </main>
  );
};
export default Quiz;
