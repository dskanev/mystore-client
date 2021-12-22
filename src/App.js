import { Routes, Route } from 'react-router-dom';
import {AuthProvider} from './contexts/AuthContext';
import Header from './components/Header';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Create from './components/Projects/Create';
import Edit from './components/Projects/Edit';
import ProjectDetails from './components/Projects/Details';
import UserProjects from './components/Projects/UserProjects.js/UserProjects';
import ErrorBoundary from './components/Common/ErrorBoundary';
import PrivateRoute from './components/Common/PrivateRoute';
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
              <Route path="/edit/:projectId" element={<Edit />}/>
              <Route path="/details/:projectId" element={<ProjectDetails />} />
              <Route path="/my-projects" element={<PrivateRoute><UserProjects /></PrivateRoute>} />
            </Routes>
          </main>

          <footer id="site-footer">
            <p>@Майстор</p>
          </footer>
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
