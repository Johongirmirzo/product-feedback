import React, { Component } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

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
        <Box
          height="100vh"
          width="100vw"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box textAlign="center">
            <Heading as="h1">Oooopss! Something Went Wrong</Heading>
            <Text mt="4" fontWeight="600" color="#444">
              You may refresh the page to or try again later
            </Text>
            <Button colorScheme="blue" mt="5" onClick={refreshThePage}>
              Refresh The Page
            </Button>
          </Box>
        </Box>
      );
    }
    return <div>{this.props.children}</div>;
  }
}
export default ErrorBoundary;
