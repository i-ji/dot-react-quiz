import Choice from "./choice";
import { useState } from "react";

type QuizType = {
  num: number;
  question: string;
  options: [
    { id: number; option: string; judge: boolean },
    { id: number; option: string; judge: boolean },
    { id: number; option: string; judge: boolean }
  ];
  corrent: number;
};

const Quiz = () => {
  const initial: QuizType[] = [
    {
      num: 0,
      question: "1の正解は？",
      options: [
        { id: 0, option: "選択肢 A", judge: false },
        { id: 1, option: "選択肢 B", judge: false },
        { id: 2, option: "選択肢 C", judge: false },
      ],
      corrent: 0,
    },
    {
      num: 1,
      question: "2の正解は？",
      options: [
        { id: 0, option: "選択肢 A", judge: false },
        { id: 1, option: "選択肢 B", judge: false },
        { id: 2, option: "選択肢 C", judge: false },
      ],
      corrent: 2,
    },
    {
      num: 2,
      question: "3の正解は？",
      options: [
        { id: 0, option: "選択肢 A", judge: false },
        { id: 1, option: "選択肢 B", judge: false },
        { id: 2, option: "選択肢 C", judge: false },
      ],
      corrent: 1,
    },
  ];

  const [quizzes, setQuizzes] = useState(initial);

  const changeQuiz = (id: number, num: number) => {
    const newQuizzes = [...quizzes];

    newQuizzes.forEach((newQuiz) => {
      if (num === newQuiz.num) {
        newQuiz.options[id].judge = true;
      }
    });

    setQuizzes(newQuizzes);
  };

  return (
    <main className="w-80 mx-auto mt-8">
      <h1 className="text-xl text-center font-bold border-b border-gray-400 pb-2">
        三択クイズ
      </h1>
      {quizzes.map((quiz) => {
        return (
          <Choice
            key={quiz.num}
            num={quiz.num}
            question={quiz.question}
            options={[quiz.options[0], quiz.options[1], quiz.options[2]]}
            isCorrent={quiz.corrent}
            changeQuiz={changeQuiz}
          />
        );
      })}
    </main>
  );
};
export default Quiz;
