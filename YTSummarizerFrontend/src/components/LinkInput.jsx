import { Button, Input } from "@nextui-org/react";
import { useContext, useRef } from "react";
import ChatdataContext from "../store/Chat-data-context";

export default function LinkInput() {
  const linkInput = useRef();

  const { handleFetchSummary } = useContext(ChatdataContext);

  return (
    <div className="flex-align full-width">
      <Input
        ref={linkInput}
        isClearable
        className="w-full max-w-xs"
        // defaultValue="junior@nextui.org"
        placeholder="Enter your youtube"
        type="text"
        variant="bordered"
        // eslint-disable-next-line no-console
        onClear={() => console.log("input cleared")}
      />

      <Button
        onPress={() => handleFetchSummary(linkInput.current.value)}
        style={{ margin: "auto 10px" }}
        color="success"
        radius="lg"
        size="lg"
        variant="flat"
      >
        Generate
      </Button>
    </div>
  );
}
