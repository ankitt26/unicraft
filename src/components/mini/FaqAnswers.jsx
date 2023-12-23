import { QuestionAnswers } from "./questionAnswer";
import Minus from "../../assets/minus-circle.svg";
import Plus from "../../assets/plus-circle.svg";

export function FaqAnswers() {
  // function to show and hide Frequently asked question //

  const showAnswer = (e) => {
    e.preventDefault();
    const iid = e.target.id;
    const idInteger = iid.slice(-1);
    const answer = document.getElementById(`answer${idInteger}`);
    const plusbtn = document.getElementById(`plus${idInteger}`);
    const minusbtn = document.getElementById(`minus${idInteger}`);
    answer.classList.toggle("hidden");
    plusbtn.classList.toggle("hidden");
    minusbtn.classList.toggle("hidden");
  };

  return QuestionAnswers.map((value, index) => {
    return (
      <>
        <div
          className="flex w-full max-w-[768px] flex-row items-start justify-between gap-6"
          key={index}
        >
          <div className="flex flex-col items-start justify-start gap-[14px]">
            <h5 className="text-xl font-medium text-gray-800">{value.ques}</h5>
            <p
              className="hidden max-w-[720px] self-stretch text-base font-medium text-gray-500"
              id={`answer${index + 1}`}
            >
              {value.ans}
            </p>
          </div>
          <button className="flex h-6 w-6 flex-none" onClick={showAnswer}>
            <img src={Plus} id={`plus${index + 1}`} />
            <img src={Minus} className="hidden" id={`minus${index + 1}`} />
          </button>
        </div>
        <hr className="flex self-stretch bg-gray-200" />
      </>
    );
  });
}
