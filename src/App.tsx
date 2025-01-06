import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Navbar from './components/navigation/Navbar';
import Sidebar from './components/navigation/Sidebar';
import MediaPlayer from './components/player/MediaPlayer';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import HomePage from './pages/home/HomePage';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
                    <Navbar />
                    <Sidebar />
                    <main className="pt-16 md:pl-64 transition-all duration-300">
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        {/* Other protected routes will go here */}
                      </Routes>
                    </main>
                    <MediaPlayer />
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;