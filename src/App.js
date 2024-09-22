import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GET_COURSES_API } from './Store/Slices/coursesSlice';

// Components:
import Header from './Components/Global_C/Header/Header';
import Footer from './Components/Global_C/Footer/Footer';
// Pages:
import Home from './Pages/Home';
import Courses from './Pages/Courses/Courses';
import Course from './Pages/Courses/Course/Course';
import Pricing from './Pages/Pricing';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_COURSES_API());
  }, [dispatch]);

  return (
    <div className="App bg-body-color">
      {/* Header */}
      <Header />
      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseName/:courseId' element={<Course />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
