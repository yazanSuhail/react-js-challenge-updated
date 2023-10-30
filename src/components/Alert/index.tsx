import { IAlertProps } from "../../interfaces/IAlertProps";
import { SlideInContent, SlideInPanel } from "./styles";

function Alert({ content, isOpen }: IAlertProps) {
  return (
    <>
      <SlideInPanel style={{ right: isOpen ? "0" : "-100%" }}>
        <SlideInContent>{content}</SlideInContent>
      </SlideInPanel>
    </>
  );
}

export default Alert;
