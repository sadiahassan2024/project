import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import DashboardPage from './pages/DashboardPage';
import MembersPage from './pages/MembersPage';
import ClassesPage from './pages/ClassesPage';
import ReportsPage from './pages/ReportsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="d-flex" style={{ height: '100vh' }}>
        <Sidebar />
        <div className="flex-grow-1 overflow-auto">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/reports" element={<ReportsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
