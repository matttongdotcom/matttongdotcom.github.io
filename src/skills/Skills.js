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
                <div className="Column-1">
                    {skillItem("Python", 4)}
                    {skillItem("Kotlin", 4)}
                    {skillItem("JavaScript", 4)}
                    {skillItem("SQL", 4)}
                    {skillItem("Java", 4)}
                    {skillItem("C++", 4)}
                    {skillItem("Matlab", 4)}
                    {skillItem("drRacket", 4)}
                </div>
                <div className="Column-2">
                    {skillItem("Node.js", 4)}
                    {skillItem("Express", 4)}
                    {skillItem("React Native", 4)}
                    {skillItem("MongoDB", 4)}
                    {skillItem("Android", 4)}
                    {skillItem("Git", 4)}
                    {skillItem("MySQL", 4)}
                </div>
                <div className="Column-3">
                    {skillItem("Optical Fiber", 4)}
                    {skillItem("Machine Shop", 4)}
                    {skillItem("Soldering", 4)}
                </div>
            </div>
        );
    }
}

export default Skills