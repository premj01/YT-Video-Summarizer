import React, { useContext } from "react";
import Typewriter from "../components/Typewriter";
import InteractiveTextWrapper from "./InteractiveTextWrapper";
import ChatdataContext from "../store/Chat-data-context";
import { Spinner } from "@nextui-org/react";

const SummaryContainer = () => {
  const { HTMLStr, fetchingFlag, ErrorMessage } = useContext(ChatdataContext);
  let text = " " + HTMLStr;
  let err = "" + ErrorMessage;

  if (fetchingFlag)
    return (
      <InteractiveTextWrapper>
        <center>
          <Spinner color="success" />
        </center>
      </InteractiveTextWrapper>
    );
  if (ErrorMessage !== "") {
    return (
      <InteractiveTextWrapper>
        <Typewriter htmlString={err} speed={200} wordsAtATime={1} />
      </InteractiveTextWrapper>
    );
  }
  if (HTMLStr == "") {
    return <></>;
  }
  return (
    <>
      <InteractiveTextWrapper>
        <Typewriter htmlString={text} speed={100} wordsAtATime={3} />
      </InteractiveTextWrapper>
    </>
  );
};

export default SummaryContainer;
