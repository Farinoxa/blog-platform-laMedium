import React from 'react';
import Home from './modules/Home';
import AppLayout from './modules/shared/layouts';
import { ArticleContextProvider } from './modules/shared/context';
import './App.css';

function App() {
  return (
    <ArticleContextProvider>
      <AppLayout>
        <Home />
      </AppLayout>
    </ArticleContextProvider>
  );
}

export default App;
