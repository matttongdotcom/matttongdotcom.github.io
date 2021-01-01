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
                <TimelineOppositeContent className="Date-Timeline">
                    January-June 2020
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
                        platform for the three major telecommunication carriers.
                    </p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className="Timeline-Item">
                <TimelineOppositeContent className="Date-Timeline">
                    January-August 2019
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
                    <p>At Canon, I was part of the Systems Engineering Team that worked on building a Multi-Modal Optical Coherence Tomography System as part of a next-generation effort of medical imaging within the body.</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className="Timeline-Item">
                <TimelineOppositeContent className="Date-Timeline">
                    January-June 2018
                </TimelineOppositeContent>
                <TimelineSeparator className="Timeline-Separator">
                    <img src={il}
                         alt="IL"
                         className="Timeline-Icon"
                    />
                    {/*<TimelineConnector />*/}
                </TimelineSeparator>
                <TimelineContent className="Timeline-Box">
                    <div className="Timeline-Content-Title"> Process Engineer Co-op at Instrumentation Laboratory
                    </div>
                    <p>At IL, I was part of the Process Engineering Team that helped develop and refine the process for assembling a module that would identify high-hematocrit blood.</p>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
        );
    }
}

export default ExperienceTimeline