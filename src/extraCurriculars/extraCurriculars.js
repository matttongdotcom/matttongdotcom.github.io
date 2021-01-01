import React, {Component} from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import './extraCurriculars.css'
import 'react-web-tabs/dist/react-web-tabs.css';

class ExtraCurriculars extends Component {
    render() {
        return (
            <Tabs defaultTab="vertical-tab-one" vertical className="TabList">
                <TabList>
                    <Tab tabFor="vertical-tab-one">Generate Product Development Studio</Tab>
                    <Tab tabFor="vertical-tab-two">Dragon & Lion Dance Troupe</Tab>
                    <Tab tabFor="vertical-tab-three">ECE Department Peer Mentor</Tab>
                    <Tab tabFor="vertical-tab-four">Marathon Training</Tab>
                </TabList>

                <TabPanel tabId="vertical-tab-one">
                    <p>
                        The Generate Product Development Studio is a student-run organization that takes real clients
                        and pairs their projects with a team of engineers, designers, and project leads.
                    </p>
                    <p>
                        I served as a Build Studio Software Engineer, working as a back-end engineer on a project
                        called LifeWire. LifeWire is a mobile app that seeks to match medical professionals with reported
                        emergencies in the area, in a "Uber for 911" sort of way.
                    </p>
                    <p>
                        I worked primarily with Node.js and Express to connect our React Native front-end with our MongoDB
                        database (the MERN stack!). After most of the back-end work was complete, I was able to help out on the front-end,
                        getting experience with the full stack of mobile app development.
                    </p>
                </TabPanel>

                <TabPanel tabId="vertical-tab-two">
                    <p>
                        I got involved with the Dragon Dance Team in the Fall of 2016, when I first came to college.
                        Because the team was just a year old at that point, I sought to make a lasting impact.
                        At that time, we were a young team, performing for select performances on Northeastern campus.
                    </p>
                    <p>
                        Now, we perform for schools all over Boston, bringing us to campuses like Harvard, BU, Wellesley,
                        MIT, and more! In my final year, I've been working on incorporating Lion Dance into the team's
                        repertoire. This effort has been slowed by COVID, but thanks to the hard work and dedication
                        from my fantastic teammates, we are well under way.
                    </p>
                    <p>
                        I learned here the importance of leadership in community building. Trying to start and build a
                        brand new team is not easy, and it takes constant work and attention. While establishing a culture
                        starts with the leadership, I learned that no amount of work a single leader does will come close
                        to comparing with the amount of work you can achieve as a team.
                    </p>
                </TabPanel>

                <TabPanel tabId="vertical-tab-three">
                    <p>
                        In the Fall 2020 Semester, I worked as a 'Peer Mentor' for the Electrical and Computer
                        Engineering Department.
                    </p>
                    <p>
                        As a Peer Mentor, I conducted resume reviews and mock interviews.
                        I enjoyed getting into the mind of a recruiter in an effort to help
                        both undergrads and graduate students find co-ops.
                    </p>
                    <p>
                        Here, I learned that what separates a mediocre candidate to a standout candidate can be a mere
                        matter of how you present yourself. Ultimately, you have to be a master of your own story to
                        pursue with passion the beginning of your career.
                    </p>
                </TabPanel>

                <TabPanel tabId="vertical-tab-four">
                    <p>
                        I've been an avid runner since middle school. I remember joining the cross country team
                        for the sole reason that I thought I'd be good at it since I was "good at tag on the playground".
                    </p>
                    <p>
                        I continued on through high school, earning personal bests of 16:39 in the 5k and 4:38 in the mile.
                        I elected not to try and run for a college team; I admittedly wasn't good enough to run
                        at an ultra-competitive level anyway, and joining a team would require too much time away from
                        academics and other extra-curriculars.
                    </p>
                    <p>
                        Now in college, I run for stress-relief, fun, and fitness. I have my sights set on qualifying for
                        The Boston Marathon (I went through two separate training cycles in 2020, only to have both races
                        postponed/cancelled). Looking further ahead, I aim to do an Iron Man Triathlon some day!
                    </p>
                </TabPanel>
            </Tabs>
        );
    }
}

export default ExtraCurriculars

