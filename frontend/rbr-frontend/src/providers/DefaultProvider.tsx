"use client";

import { ChakraProvider } from "@chakra-ui/react";

export function DefaultProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
