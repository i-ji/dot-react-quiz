type ChoiceType = {
  num: number;
  question: string;
  options: [
    { id: number; option: string; judge: boolean },
    { id: number; option: string; judge: boolean },
    { id: number; option: string; judge: boolean }
  ];
  isCorrent: number;
  changeQuiz: (id: number, num: number) => void;
};

const Choice: React.FC<ChoiceType> = ({
  num,
  question,
  options,
  isCorrent,
  changeQuiz,
}) => {
  const showAnswer = (id: number, num: number) => {
    changeQuiz(id, num);
  };

  return (
    <>
      <h2 className="font-bold my-2">{question}</h2>
      <ul className="cursor-pointer list-disc">
        {options.map((opt) => {
          return (
            <li
              key={opt.id}
              onClick={() => showAnswer(opt.id, num)}
              className={
                opt.judge === true && opt.id === isCorrent
                  ? "text-green-500 after:content-['正解!']"
                  : opt.judge === true && opt.id !== isCorrent
                  ? "text-red-500 after:content-['不正解...']"
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
