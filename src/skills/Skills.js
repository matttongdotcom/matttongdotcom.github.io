import React, {Component} from 'react';
import StarRatings from 'react-star-ratings';
import './Skills.css'

function skillItem(name, rating) {
    return (
        <div className="Skills-Category">
            {name}
            <StarRatings
                rating={rating}
                starRatedColor='#00A4EF'
                name='rating'
                starDimension={15}
                starSpacing={1}
            />
        </div>
    );
}

class Skills extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="Column">
                    {skillItem("Python", 3.5)}
                    {skillItem("Kotlin", 4)}
                    {skillItem("JavaScript", 4)}
                    {skillItem("SQL", 5)}
                    {skillItem("Java", 4)}
                    {skillItem("C++", 2.5)}
                    {skillItem("Matlab", 4)}
                    {skillItem("drRacket", 2.5)}
                </div>
                <div className="Column">
                    {skillItem("Node.js", 3.5)}
                    {skillItem("Express", 3.5)}
                    {skillItem("React Native", 4)}
                    {skillItem("MongoDB", 4)}
                    {skillItem("Android", 4)}
                    {skillItem("Git", 4)}
                    {skillItem("MySQL", 4)}
                </div>
                <div className="Column">
                    {skillItem("Optical Fiber", 4)}
                    {skillItem("Machine Shop", 3)}
                    {skillItem("Soldering", 4)}
                </div>
            </div>
        );
    }
}

export default Skills