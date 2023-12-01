//
import "bootstrap/dist/css/bootstrap.min.css";
import { useAnimation } from "framer-motion";

//
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Achievement from "./components/Achievements";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.scss";
import { useContext, useEffect } from "react";
import { themeContext } from "./context/ThemeContext";

function App() {
    const darkMode = useContext(themeContext);

    const boxShadow = useAnimation();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 0)
                boxShadow.start({boxShadow: "-79px 51px 60px rgba(0, 0, 0, 0.08)"});
            else
                boxShadow.start({boxShadow: "-79px 51px 60px transparent"});

        });
    });

    return (
        <div className="app-container"
            style={
                darkMode.state.darkMode
                    ? {
                          background: "black",
                          color: "white",
                      }
                    : {}
            }
        >
            <Navbar boxShadow={boxShadow} />
            <Info />
            <Services />
            <Experience />
            <Achievement />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
