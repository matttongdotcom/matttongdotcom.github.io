import React, {Component} from 'react';
import './AboutMePage.css';
import ExperienceTimeline from '../experienceTimeline/ExperienceTimeline.js'
import me from './me.JPG'
import ExtraCurriculars from "../extraCurriculars/extraCurriculars";
import Skills from '../skills/Skills'
import Slider from 'infinite-react-carousel';
import lifewire from './lifewire.png'
import scares from './scares.png';
import delt from './delt.png';
import recipe from './recipe.png'
import bcm from './bcm.png'
import resume from './TONG_WEBSITE_RESUME.pdf'
import Footer from "../footer/Footer";

class AboutMePage extends Component {
    render() {
        return (
            <div className="Whole-Thing">
                <div className="Section-Header">
                    About Me
                </div>
                <div className="About-Me-Section">
                    <img src={me}
                         alt="Me"
                         className="me"
                    />
                    <div className="Bio">
                        <p className="Bio-Items">
                            Name: Matthew Tong
                        </p>
                        <p className="Bio-Items">
                            Major: Computer Engineering and Computer Science
                        </p>
                        <p className="Bio-Items">
                            Education: Northeastern University
                        </p>
                        <p className="Bio-Items">
                            Location: Boston, MA
                        </p>
                        <p className="Bio-Items">
                            Favorite Avenger: Iron Man
                        </p>
                    </div>
                </div>
                <div className="Description-Header">
                    Hi there, my name is Matthew Tong.
                    </div>
                <div className="Description-Text">
                    I'm a current 5th year senior at Northeastern University, currently looking for full-time
                    opportunities. This is a fun personal project I threw together using React.js, and it is a constant
                    work in progress. I find that a website does a much better job of showcasing experience, projects,
                    and creativity than a resume, so welcome!
                </div>
                <div className="Description-Text">
                    I have significant experience in Process Engineering, Systems Engineering, and Software Development.
                    If you'd like to see my official resume, click below!
                </div>
                <div className="Resume-Button-Wrapper">
                    <button className="Resume-Button">
                        <a className="Resume-Button-Text" href={resume} download> Resume!</a>
                    </button>
                </div>
                <div className="Section-Header">
                    Skills
                </div>
                <Skills/>
                <div className="Section-Header">
                    Experience
                </div>
                <ExperienceTimeline/>
                <div className="Section-Header">
                    Projects
                </div>
                <div className="Description-Text">
                    Here are some projects I've been a part of over the years.
                </div>
                <div className="Project-Platform">
                    <div className="Project-Container">
                        <Slider dots adaptiveHeight className="Project-Slider">
                            <div>
                                {projectCardItem(lifewire, 'LifeWire',
                                    'LifeWire is a React Native mobile application that connects nearby ' +
                                            'medical personnel with emergencies in the area.',
                                    [
                                            'Worked on the backend with Node.js and Express to connect to a ' +
                                            'MongoDB database.',
                                            'Helped out on the frontend once the backend work was complete, ' +
                                            'earning experience with the full stack of mobile app development.'
                                    ])}
                            </div>
                            <div>
                                {projectCardItem(scares, 'SCARES Capstone Project',
                                    'Senior capstone project, striving to quantify stressful and non-' +
                                    'stressful states in human beings.',
                                    [
                                            'Utilized a Galvanic Skin Response sensor to collect data for a machine ' +
                                            'learning model that would classify a user as \'Stressed\' or ' +
                                            '\'Not Stressed\', achieving ~80% accuracy.',
                                            'Data pipeline was constructed using custom python scripts for data ' +
                                            'transfer and feature extraction.',
                                            'Deployed using AWS and displayed on the frontend using React.'
                                    ])}
                            </div>
                            <div>
                                {projectCardItem(recipe, 'Recipe Finder',
                                    'A React application to search a database using ingredients already in the ' +
                                    'user\'s possession.',
                                    [
                                            'Cleaned a Kaggle dataset of recipes to first normal form using python scripts' +
                                            ' and imported into the tables into a MySQL database.',
                                            'Used a React frontend to send data from the Node.js middleware that would' +
                                            ' parameterize the SQL queries.'
                                    ])}
                            </div>
                            <div>
                                {projectCardItem(delt, 'DeltNU for Android',
                                    'An Android app published on the Google Play Store that enables ' +
                                            'members of fraternities to have a centralized location for accessing ' +
                                            'information.',
                                    [
                                            'Utilized the Model-View-Intent design pattern with Rx streams.',
                                            'Supports logging attendance through QR code, recording community service ' +
                                            'hours, and casting votes.',
                                            'Contains active member and alumni directory to interface with native ' +
                                            'messaging.'
                                    ])}
                            </div>
                            <div>
                                {projectCardItem(bcm, 'The IceBox',
                                    'A game that would be both fun and educational for children.',
                                    [
                                            'Object of the game was to assemble a path using different shaped blocks ' +
                                            'with sensors attached on a 5 by 8 translucent grid.',
                                            'Path was lit using LED lights underneath the translucent grid and when the correct ' +
                                            'path was placed, the lights would display a winning animation.',
                                            'This project was exhibited in the Boston\'s Children Museum as part of ' +
                                            'an afternoon exhibit.'
                                    ])}
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="Section-Header">
                    Extra-Curriculars
                </div>
                <div className="Description-Text">
                    Here are some things I've been involved in over the years.
                </div>
                <ExtraCurriculars/>
                <Footer/>
            </div>
        );
    }
}

function projectCardItem(img, title, description, bullets) {
    const listItems = bullets.map((bullet) =>
        <li>{bullet}</li>
    );
    return (
        <div className="Platform">
            <div className="Card">
                <img src={img}
                     alt="arb"
                     className="ProjectLogo"
                />
                <div className="Card-Title">
                    {title}
                </div>
                <div className="Description-Div">
                    <div className="Project-Description">
                        {description}
                    </div>
                </div>
                <ul>
                    {listItems}
                </ul>
            </div>
        </div>
    )
}

export default AboutMePage