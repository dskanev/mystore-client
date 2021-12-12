import { Routes, Route } from 'react-router-dom';
import {AuthProvider} from './contexts/AuthContext';
import Header from './components/Header';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Create from './components/Projects/Create';
import ErrorBoundary from './components/Common/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div id="container">
          <Header />

          <main id="site-content">
            <Routes>
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
              <Route path="/create" element={<Create />} />
            </Routes>
          </main>

          <footer id="site-footer">
            <p>@dsadas</p>
          </footer>
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
