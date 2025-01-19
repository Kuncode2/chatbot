import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Pets from "./Components/Pets/Pets";
import AdoptForm from "./Components/AdoptForm/AdoptForm";
import AdminLogin from "./Components/AdminPanel/AdminLogin";
import Profile from "./Components/Profile/Profile";
import Auth from "./Components/Auth/Auth";
import { useAuthContext } from "./hooks/UseAuthContext";
import "./App.css";
import FourOhFourPage from "./Components/404/FourOhFourPage";
import ChatbotIcon from "./Components/Chatbot/Chatbot";
import ChatForm from "./Components/Chatbot/ChatForm";

const Layout = ({ children }) => (
  <>
    <Navbar title="Fluff-n-Fun" />
    {children}
    <Footer title="Fluff-n-Fun" />
  </>
);

const ProtectedRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/auth" />;
};

const App = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
                <Layout>
                  <Home description="Ensure you are fully prepared to provide proper care and attention to your pet before welcoming them into your home." />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/services"
            element={
              <ProtectedRoute user={user}>
                <Layout>
                  <Services />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute user={user}>
                <Layout>
                  <Contact />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/pets"
            element={
              <ProtectedRoute user={user}>
                <Layout>
                  <Pets />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <Layout>
                  <Profile />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/adopt-form"
            element={
              <ProtectedRoute user={user}>
                <Layout>
                  <AdoptForm />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route path="/admin" element={<AdminLogin />} />

          <Route
            path="/auth"
            element={!user ? <Auth /> : <Navigate to="/" />}
          />
          <Route path="/*" element={<FourOhFourPage />} />
        </Routes>
      </Router>
      <div className="fakebody">
      <div className="container">
        <div className="chatbot-popup">
          <div className="chat-header">
            <div className="header-info">
              <ChatbotIcon />
              <h2>Chatbot</h2>
            </div>
            <button class="material-symbols-outlined">
              keyboard_arrow_down
            </button>
          </div>

          <div className="chat-body">
            <div className="message bot-message">
              <ChatbotIcon />
              <p className="message-text">
                Hey there 👋 <br /> How can I help you today?
              </p>
            </div>
            <div className="message user-message">
              <p className="message-text">lorem</p>
            </div>
          </div>
          <div className="chat-footer">
            <ChatForm/>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default App;
