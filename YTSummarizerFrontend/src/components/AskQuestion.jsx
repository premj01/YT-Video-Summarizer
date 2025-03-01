import { Button, Input } from "@nextui-org/react";
import { useContext, useRef } from "react";
import ChatdataContext from "../store/Chat-data-context";

export default function AskQuestion() {
  const { handleQNA, watingAnsFlag, dataPresentFlag } =
    useContext(ChatdataContext);
  const QInput = useRef();

  return (
    <>
      {dataPresentFlag && (
        <div className="flex-align sticky-bottom">
          <Input
            ref={QInput}
            isClearable
            className="max-w-xs"
            // defaultValue="junior@nextui.org"
            placeholder="Ask a Question you want"
            type="text"
            variant="bordered"
            onKeyDown={(event) => {
              if (event.key == "Enter") {
                handleQNA(QInput.current.value);
                QInput.current.value = "";
              }
            }}
            // eslint-disable-next-line no-console
            onClear={() => console.log("input cleared")}
          />

          <Button
            style={{ margin: "auto 10px" }}
            color="secondary"
            radius="lg"
            size="lg"
            variant="flat"
            onPress={() => {
              handleQNA(QInput.current.value);
              QInput.current.value = "";
            }}
            {...(watingAnsFlag ? { isDisabled: true } : {})}
          >
            Ask
          </Button>
        </div>
      )}
    </>
  );
}
