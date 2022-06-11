import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import PngCompressor from './pages/Services/PngCompressor/PngCompressor'
import JpgCompressor from './pages/Services/JpgCompressor/JpgCompressor'
import Features from './pages/Features/Features'
import Contact from './pages/Contact/Contact'
import SignIn from './pages/SignIn/SignInFirebase'
//import SignUp from './pages/SignUp/SignUp'
import Navbar from './pages/Navbar/Navbar'
import Pricing from './pages/Pricing/Pricing'
import Footer from './pages/Footer/Footer'
import Page404 from './pages/404/Page404';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/png-compressor" component={PngCompressor} />
        <Route path="/jpg-compressor" component={JpgCompressor} />
        <Route path="/pro" component={Pricing} />
        <Route path="/features" component={Features} />
        {/* <Route path="/enrolled-course/:_id" component={EnrolledCourse} /> */}
        <Route path="/contact-us" component={Contact} />
        <Route path="/login" component={SignIn} />
        <Route path="*" component={Page404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
