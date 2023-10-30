import { ReactNode } from "react";

export interface IMessageAlertProps {
  isSuccessRequestToGetGif?: boolean;
  isLoadingRequestToGetGif?: boolean;
  isErrorRequestToGetGif?: boolean;
}

export interface IAlertMessageContextData {
  params: IMessageAlertProps;
  handleParams: (data: IMessageAlertProps) => void;
}

export interface IAlertMessageProvider {
  children: ReactNode;
}
