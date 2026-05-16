import { useState } from 'react';
import DashboardPage from './Pages/DashboardPage.jsx';
import UserPage from './Pages/UserPage.jsx';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');

  if (activePage === 'profile') {
    return <UserPage onBack={() => setActivePage('dashboard')} />;
  }

  return <DashboardPage onOpenProfile={() => setActivePage('profile')} />;
}
