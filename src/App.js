import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DailyTodo from './components/DailyTodo';
import WeeklyTodo from './components/WeeklyTodo';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/daily" element={<DailyTodo />} />
          <Route path="/weekly" element={<WeeklyTodo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
