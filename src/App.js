import About from "./components/About";
import Achievment from "./components/Achievment";
import Blog from "./components/blog";
import Courses from "./components/courses";
import Footer from "./components/footer";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Home />
      <Courses />
      <Achievment />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
