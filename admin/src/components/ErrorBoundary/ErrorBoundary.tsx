import React, { Component } from "react";
import {
  ErrorBoundaryBox,
  ErrorBoundaryTextBox,
  ErrorBoundaryHeader,
  ErrorBoundaryTitle,
  ErrorBoundaryDescription,
  ErrorBoundaryBtn,
} from "./ErrorBoundary.styled";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() {
    const refreshThePage = () => {
      window.location.reload();
    };
    if (this.state.hasError) {
      return (
        <ErrorBoundaryBox>
          <ErrorBoundaryTextBox>
            <ErrorBoundaryHeader>
              <ErrorBoundaryTitle>
                Oooopss! Something Went Wrong
              </ErrorBoundaryTitle>
              <ErrorBoundaryDescription>
                You may refresh the page to or try again later
              </ErrorBoundaryDescription>
            </ErrorBoundaryHeader>
            <ErrorBoundaryBtn onClick={refreshThePage}>
              Refresh The Page
            </ErrorBoundaryBtn>
          </ErrorBoundaryTextBox>
        </ErrorBoundaryBox>
      );
    }
    return <div>{this.props.children}</div>;
  }
}
export default ErrorBoundary;
