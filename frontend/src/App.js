import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login'
import Header from './app/components/Header';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/Dashboard';
import AddUser from './pages/admin/AddUser';


function App() {
  return (
    < >
      <Router>
        <div className='container'>
          <Routes>
            <Route path="/admin/*" element={null} />
            <Route path="*" element={<Header />} />
          </Routes>
          <Routes>

            {/* user routes */}
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />

            {/* admin routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/adduser" element={<AddUser />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />

    </>
  );
}

export default App;