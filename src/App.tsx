import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';
import { HomeSection } from './components/home/HomeSection';
import { Research } from './components/research/Research';
import { Projects } from './components/projects/Projects';
import { Thoughts } from './components/Thoughts';
import { Contact } from './components/Contact';

export function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500">
        {loading ? (
          <LoadingScreen onComplete={() => setLoading(false)} />
        ) : (
          <>
            <ThemeToggle />
            <Navigation />
            <Sidebar />
            
            <main className="pr-72">
              <HomeSection />
              <Research />
              <Projects />
              <Thoughts />
              <Contact />
            </main>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;