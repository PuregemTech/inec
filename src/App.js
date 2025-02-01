import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Emergency from './pages/emergency/emergency';
import Alerts from './pages/alerts/alerts';
import UserManagement from './pages/userManagement/userManagement';
import Settings from './pages/settings_/settings';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="inec" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="emergency" element={<Emergency />} />
        <Route path="alerts" element={<Alerts />} />
        <Route path="user_management" element={<UserManagement />} />
        <Route path="settings" element={<Settings />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
