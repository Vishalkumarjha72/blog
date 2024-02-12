import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import BlogPost from "./components/BlogPost";
import AboutPage from "./components/AboutPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/post/:id" element={<BlogPost />}/>
        <Route path="/about" element={<AboutPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
