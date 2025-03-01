import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import axios from "axios";

const server = "http://localhost:8000/api";

const ChatdataContext = createContext();

export const ChatdataContextProvider = ({ children }) => {
  //my code
  const [Uid, setUid] = useState();
  const [prevQueList, setprevQueList] = useState([]);
  const [QNAList, setQNAList] = useState([]);
  const [Answerr, setAnswerr] = useState("");
  const [HTMLStr, setHTMLStr] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [fetchingFlag, setfetchingFlag] = useState(false);
  const [watingAnsFlag, setwatingAnsFlag] = useState(false);
  const [dataPresentFlag, setdataPresentFlag] = useState(false);

  const handleFetchSummary = (YTURLString) => {
    setErrorMessage("");
    setdataPresentFlag(false);

    if (YTURLString === "") {
      return;
    }

    if (YTURLString.includes("youtu")) {
      setfetchingFlag(true);

      axios
        .post(`${server}/summary`, {
          URLString: YTURLString,
          videoDetails: "more detailed with emojies",
        })
        .then((res) => {
          console.log(res.data);
          setUid(res.data.uid);
          setHTMLStr(res.data.SummaryHTML);
          setfetchingFlag(false);
          setdataPresentFlag(true);
        })
        .catch((err) => {
          setErrorMessage(
            "Sorry for Inconvinience<br>Something is Wrong with this video 🙏 "
          );
          setfetchingFlag(false);
        });
    } else {
      setErrorMessage(
        "What the hell have you provided...<br>Its not looking related to <b>Youtube<b> "
      );
    }
  };

  const handleQNA = (currQuestionString) => {
    console.log("Question List");
    console.log(prevQueList);
    if (Answerr !== "") {
      setQNAList((curr) => [...curr, { t: "A", content: Answerr }]);
      setAnswerr((curr) => "");
    }

    setwatingAnsFlag(true);
    setQNAList((curr) => [...curr, { t: "Q", content: currQuestionString }]);
    setprevQueList((curr) => [...curr, currQuestionString]);

    axios
      .post(`${server}/ask`, {
        uid: Uid,
        prevQuestion: prevQueList,
        question: currQuestionString,
      })
      .then((res) => {
        console.log(res.data);

        // res.body.question;
        setAnswerr(res.data.answer);
        setwatingAnsFlag(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ChatdataContext.Provider
      value={{
        Uid,
        HTMLStr,
        fetchingFlag,
        watingAnsFlag,
        handleQNA,
        QNAList,
        Answerr,
        handleFetchSummary,
        ErrorMessage,
        dataPresentFlag,
      }}
    >
      {children}
    </ChatdataContext.Provider>
  );
};
export default ChatdataContext;
