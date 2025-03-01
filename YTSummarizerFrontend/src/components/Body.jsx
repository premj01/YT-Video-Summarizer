import React from "react";
import LinkInput from "./LinkInput";
import SummaryContainer from "./SummaryContainer";
import AskQuestion from "./AskQuestion";
import QuestionAnsList from "./QuestionAnsList";

const Body = () => {
  return (
    <>
      <div className="md:container md:mx-auto main-container">
        <LinkInput></LinkInput>
      </div>
      <SummaryContainer></SummaryContainer>
      <AskQuestion></AskQuestion>
      <QuestionAnsList></QuestionAnsList>
    </>
  );
};

export default Body;
