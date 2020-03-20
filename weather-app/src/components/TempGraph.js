import React from 'react';
import * as d3 from 'd3';

export default class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height : 400,
            width : 600
        }
    }

    //execute d3 code
    componentDidMount = () => {
        this.draw();
    }

    //draw bar chart
    draw = () => {
        const {height, width} = this.state;
        const {data} = this.props;

        //create canvas
        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("border", "1px solid black")

        //TO-DO: Add line graph of data
    }
    render(){
        return <div className='viewHolder' ref='canvas'/>
    } 
}