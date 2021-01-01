import React, {Component} from 'react';
import './AboutMePage.css';
import ExperienceTimeline from '../experienceTimeline/ExperienceTimeline.js'
import me from './me.JPG'
import ExtraCurriculars from "../extraCurriculars/extraCurriculars";
import Skills from '../skills/Skills'
import Slider from 'infinite-react-carousel';
import lifewire from './lifewire.png'

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
                            Age: 22
                        </p>
                        <p className="Bio-Items">
                            Major: Computer Engineering and Computer Science
                        </p>
                        <p className="Bio-Items">
                            Education: Northeastern University
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
                    I'm a current 5th year senior at Northeastern University, currently looking for full-time opportunities.
                    I find that a website does a much better job of showcasing experience, projects, and creativity than a resume, so welcome!
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
                        <Slider dots className="Project-Slider">
                            <div>
                                {projectCardItem(lifewire, 'LifeWire',
                                    ['lifewire is a great app!',
                                            'keep it going!'])}
                            </div>
                            <div>
                                {projectCardItem(me, 'Capstone Project',
                                    ['lifewire is a great app!',
                                        'keep it going lets go!'])}
                            </div>
                            <div>
                                {projectCardItem(me, 'Recipe Finder',
                                    ['lifewire is a great app!',
                                        'keep it going lets go!'])}
                            </div>
                            <div>
                                {projectCardItem(me, 'DeltNU for Android',
                                    ['lifewire is a great app!',
                                        'keep it going lets go!'])}
                            </div>
                            <div>
                                {projectCardItem(me, 'The IceBox',
                                    ['lifewire is a great app!',
                                        'keep it going lets go!'])}
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
                <div className="Section-Header">
                    Contact Me! @matttongdotcom
                </div>
            </div>
        );
    }
}

function projectCardItem(img, title, bullets) {
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
                <ul>
                    {listItems}
                </ul>
            </div>
        </div>
    )
}

export default AboutMePage