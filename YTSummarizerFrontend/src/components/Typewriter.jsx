// import React, { useState, useEffect } from "react";

// const Typewriter = ({ htmlString, speed = 50 }) => {
//   const [currentText, setCurrentText] = useState("");
//   const [isDone, setIsDone] = useState(false);

//   useEffect(() => {
//     let index = 0;
//     const textArray = htmlString.split("");

//     const typingInterval = setInterval(() => {
//       setCurrentText((prev) => prev + textArray[index]);
//       index++;

//       if (index === textArray.length) {
//         clearInterval(typingInterval);
//         setIsDone(true);
//       }
//     }, speed);

//     return () => clearInterval(typingInterval);
//   }, [htmlString, speed]);

//   return (
//     <>
//       {!isDone ? (
//         <div dangerouslySetInnerHTML={{ __html: currentText }} />
//       ) : (
//         <div dangerouslySetInnerHTML={{ __html: htmlString }} />
//       )}
//     </>
//   );
// };

// export default Typewriter;

import React, { useState, useEffect } from "react";

const Typewriter = ({
  htmlString,
  speed = 50,
  wordsAtATime = 1,
  isHTMLCode = false,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!htmlString) return;
    let currentIndex = 0;
    const textArray = htmlString.split(" ");
    let displayText = "";

    const typingInterval = setInterval(() => {
      displayText +=
        textArray.slice(currentIndex, currentIndex + wordsAtATime).join(" ") +
        " ";
      setCurrentText(displayText);
      currentIndex += wordsAtATime;

      if (currentIndex >= textArray.length) {
        clearInterval(typingInterval);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [isDone]);

  if (isHTMLCode) {
    return <>{!isDone ? <div>{htmlString}</div> : <div>{htmlString}</div>}</>;
  }
  return (
    <>
      {!isDone ? (
        <div dangerouslySetInnerHTML={{ __html: currentText }}></div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      )}
    </>
  );
};

export default Typewriter;
