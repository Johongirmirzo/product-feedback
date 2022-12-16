import React from "react";
import { Spinner, Box } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box
      position="fixed"
      inset="0"
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      background="#fff"
      zIndex="9999"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};

export default Loader;
