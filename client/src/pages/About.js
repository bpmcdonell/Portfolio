import React from 'react';
import ReactDOM from 'react-dom';
import pfp from '../components/assets/images/pfp.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';



export default function About() {


    return (
        <div className='aboutMeDiv'>
            <h1>About Me</h1>
            <img src={pfp} alt="Brian McDonell" height="150rem" />
            <p>Hello! My name is Brian McDonell. I am a full stack developer with a focus on backend development. I am about to graduate from GW's Coding Bootcamp. The reason I joined this bootcamp is because I have always loved computers and technology and was particularly interested in coding and website development. The bootcamp has introduced many topics about development and I think I have taken a distinct liking to working on the backend server and data management. Please make yourself aquanted with some of my work shown in the "My Work" tab as well as my GitHub Profile to get some insight on the things I have worked on.</p>

        </div>
    )
}