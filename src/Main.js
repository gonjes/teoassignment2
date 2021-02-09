import React, { Component } from 'react';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Interest from './pages/Interest';
import Skills from './pages/Skills';
import Awards from './pages/Awards';

class Main extends Component {
    render() {
        return (
            <div>
                <About />
                <Experience />
                <Education />
                <Skills />
                <Interest />
                <Awards />
            </div>
        );
    }
}

export default Main;