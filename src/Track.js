import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Shape } from 'react-konva';

class Track extends Component {
    render() {
        return (
            <Stage width={window.innerWidth/2} height={window.innerHeight/2}>
                <Layer>
                    <Shape
                        sceneFunc={(context, shape) => {
                            context.beginPath();
                            context.moveTo(100, 100);
                            context.lineTo(300, 100);
                            context.quadraticCurveTo(363, 150, 300, 200);
                            context.lineTo(100, 200);
                            context.quadraticCurveTo(36, 150, 100, 100);
                            context.closePath();
                            // (!) Konva specific method, it is very important
                            context.fillStrokeShape(shape);
                        }}
                        fill="#00D2FF"
                        stroke="black"
                        strokeWidth={4}
                    />
                </Layer>
            </Stage>
        );
    }
}

export default Track;
