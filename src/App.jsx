import { Routes, Route } from "react-router";
import Header from "./components/Header"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import "./App.css"

function App() {

  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/contactpage" element={<Contact/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/resumepage" element={<Resume/>} />
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
