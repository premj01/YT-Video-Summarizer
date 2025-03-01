import React, { useContext, useState } from "react";
import Question from "./Question";
import Answer from "./Answer";
import ChatdataContext from "../store/Chat-data-context";
import Typewriter from "../components/Typewriter";

const QuestionAnsList = () => {
  const { QNAList, Answerr } = useContext(ChatdataContext);
  const Ans = Answerr;
  console.log("Answerssss");

  return (
    <>
      {QNAList.length > 0 && (
        <div className="QNAContainer">
          {QNAList.length > 0 &&
            QNAList.map((ele, idx) => {
              return (
                <>
                  {ele.t == "Q" && <Question key={idx}>{ele.content}</Question>}
                  {ele.t == "A" && <Answer key={idx}>{ele.content}</Answer>}
                </>
              );
            })}

          {Answerr !== "" && (
            <Answer isHTMLCode={true}>
              <Typewriter htmlString={Ans} speed={200} wordsAtATime={4} />
            </Answer>
          )}
        </div>
      )}
    </>
  );
};

export default QuestionAnsList;
