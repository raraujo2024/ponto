import { ChakraProvider } from '@chakra-ui/react';
import { SidebarDrawerProvider } from './hooks/SidebarDrawerContext';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ChakraProvider>
        <SidebarDrawerProvider>
          {children}
        </SidebarDrawerProvider>
      </ChakraProvider>
    </div>
  )
}