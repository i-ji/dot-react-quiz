type ChoiceType = {
  question: string;
  options: [
    { id: number; option: string; judge: boolean },
    { id: number; option: string; judge: boolean },
    { id: number; option: string; judge: boolean }
  ];
  isCorrent: number;
  changeQuiz: (id: number) => void;
};

const Choice: React.FC<ChoiceType> = ({
  question,
  options,
  isCorrent,
  changeQuiz,
}) => {
  const showAnswer = (id: number) => {
    changeQuiz(id);
  };

  return (
    <>
      <h2 className="font-bold my-2">{question}</h2>
      <ul className="cursor-pointer list-disc">
        {options.map((opt) => {
          return (
            <li
              key={opt.id}
              onClick={() => showAnswer(opt.id)}
              className={
                opt.judge === true && opt.id === isCorrent
                  ? "text-green-500"
                  : opt.judge === true && opt.id !== isCorrent
                  ? "text-red-500"
                  : ""
              }
            >
              {opt.option}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Choice;
