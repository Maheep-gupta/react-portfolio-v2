import React from 'react';
import ThemeContextProvider from './context/ThemeContextProvider';
import Home from "./components/Home";
import About from "./components/About";
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ToggleButton from './components/ToggleButton';
function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <main className='flex flex-col justify-center items-center '>

        <Home />
        <div class="bg-gray-200 mt-20 sm:mt-36 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20" ></div>
        <About />
        <div class="bg-gray-200 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20" ></div>
        <Projects />
        <div class="bg-gray-200 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20" ></div>
        <Skills />
        <div class="bg-gray-200 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20" ></div>
        <Experience />
        <div class="bg-gray-200 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20" ></div>
        <Contact />
        <ToggleButton />
      </main>
    </ThemeContextProvider>
  );
}

export default App;