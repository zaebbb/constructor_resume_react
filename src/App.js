import React, {useRef} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Footer from "./components/modules/Footer/Footer";
import Main from "./components/Main";
import {ROUTES} from "./utils/routes";
import _404 from "./components/_404";
import BasicInfo from "./components/BasicInfo";
import About from "./components/About";
import Specialization from "./components/Specialization";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contacts from "./components/Contacts";
import PhotoResume from "./components/componentsModules/PhotoResume/PhotoResume";
import CompleteResume from "./components/componentsModules/CompleteResume/CompleteResume";
import Resume from "./store/Resume";

function App() {

    const printRef = useRef()

  return (
    <BrowserRouter>
        <div className="content" ref={printRef}>
            <Routes>
                <Route
                    path={ROUTES.MAIN}
                    element={<Main />}
                />
                <Route
                    path={ROUTES.BASIC_INFO}
                    element={<BasicInfo />}
                />
                <Route
                    path={ROUTES.ABOUT}
                    element={<About />}
                />
                <Route
                    path={ROUTES.SPECIALIZATION}
                    element={<Specialization />}
                />
                <Route
                    path={ROUTES.EXPERIENCE}
                    element={<Experience />}
                />
                <Route
                    path={ROUTES.EDUCATION}
                    element={<Education />}
                />
                <Route
                    path={ROUTES.CONTACTS}
                    element={<Contacts />}
                />
                <Route
                    path={ROUTES.PHOTO}
                    element={<PhotoResume />}
                />
                <Route
                    path={ROUTES.RESUME}
                    element={<CompleteResume printRef={printRef} />}
                />



                <Route
                    path={ROUTES._404}
                    element={<_404 />}
                />
            </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
