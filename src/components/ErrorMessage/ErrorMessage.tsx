import React from "react";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = "An error occurred while loading the file. Please try again later.",
}) => {
  return <p>{message}</p>;
};

export default ErrorMessage;
