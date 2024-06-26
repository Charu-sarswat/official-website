// import '@fontsource/raleway/400.css'
// import '@fontsource/open-sans/700.css'
// import '@fontsource/aclonica'
// import "@fontsource/arbutus"
// import "@fontsource/alegreya-sc"
import "@fontsource/alice"
// import "@fontsource/alex-brush"
// import "@fontsource/amaranth"
import "@fontsource/manrope"
import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Home } from './screens/Home';
import './App.css'
import theme from './theme';
import { ParallaxProvider } from 'react-scroll-parallax';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BinaryHacks from "./screens/BinaryHacks";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ParallaxProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="binaryhacks" element={<BinaryHacks />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default App;
