import React, {Component} from 'react';
import './ExperienceTimeline.css';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import rp from './rightpoint-logo.jpg'
import canon from './canon-logo.png'
import il from './IL-logo.png'

class ExperienceTimeline extends Component {
    render() {
        return (
        <Timeline className="Timeline">
            <TimelineItem className="Timeline-Item">
                <TimelineOppositeContent>
                    <div className="Date-Timeline">
                        January-June 2020
                    </div>
                </TimelineOppositeContent>
                <TimelineSeparator className="Timeline-Separator">
                    <img src={rp}
                         alt="RP"
                         className="Timeline-Icon"
                    />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="Timeline-Box">
                    <div className="Timeline-Content-Title">Software Developer Co-op at Rightpoint
                    </div>
                    <p>
                        At Rightpoint, I worked as an Android Developer on a single sign-on, multi-factor authentication
                        platform for the three major telecommunication carriers. This was my first software co-op
                        and I ramped up quickly on Git and Scrum, working with designers, fellow developers, and product
                        managers to create an intuitive user-driven application.
                    </p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className="Timeline-Item">
                <TimelineOppositeContent>
                    <div className="Date-Timeline">
                        January-August 2019
                    </div>
                </TimelineOppositeContent>
                <TimelineSeparator className="Timeline-Separator">
                    <img src={canon}
                         alt="canon"
                         className="Timeline-Icon"
                    />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="Timeline-Box">
                    <div className="Timeline-Content-Title"> Systems Engineer Co-op at Canon Healthcare Optics Research Laboratory
                    </div>
                    <p>At Canon, I was part of the Systems Engineering Team that worked on building a Multi-Modal
                        Optical Coherence Tomography System as part of a next-generation effort of medical imaging
                        within the body. I took ownership of two main projects: building the PC subsystem and
                        creating a digital signal processing Matlab script to process k-clock signals from laser output.
                    </p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className="Timeline-Item">
                <TimelineOppositeContent>
                    <div className="Date-Timeline">
                        January-June 2018
                    </div>
                </TimelineOppositeContent>
                <TimelineSeparator className="Timeline-Separator">
                    <img src={il}
                         alt="IL"
                         className="Timeline-Icon"
                    />
                </TimelineSeparator>
                <TimelineContent className="Timeline-Box">
                    <div className="Timeline-Content-Title"> Process Engineer Co-op at Instrumentation Laboratory
                    </div>
                    <p>At IL, I was part of the Process Engineering Team that helped develop and refine the process
                        for assembling a module that would identify high-hematocrit blood. This was my first co-op and
                        I learned about biomedical engineering, working in a lab environment, and safely handling blood.
                    </p>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
        );
    }
}

export default ExperienceTimeline