import React from 'react';
import * as d3 from 'd3';

export default class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height : 400,
            width : 600,
            margin: 30,
            padding: 15
        }
    }

    //execute d3 code
    componentDidMount = () => {
        this.draw();
    }

    //draw bar chart
    draw = () => {
        const {margin, padding, height, width} = this.state;
        const {dayData} = this.props;

        const date = new Date(dayData.date);
        const tempArr = dayData.hourly.map(item => item.temp);

        const xScale = d3.scaleTime()
            .domain([date.getTime(), date.getTime() + 24 * 60 * 60 * 1000])
            .range([margin, width-margin]);
            
        const yScale = d3.scaleLinear()
            .domain([Math.min(...tempArr), Math.max(...tempArr)])
            .range([height-margin, margin]);

        const xAxis = d3.axisBottom()
            .scale(xScale)
            .ticks(d3.timeHour.every(2))
        
        const yAxis = d3.axisLeft().scale(yScale);

        //create canvas
        const canvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("padding", padding)
            .style("margin", margin)
            .style("border", "1px solid black")
        
        //lines
        const convTime = (time) => {
            let day = new Date(time)
            day.setDate(date.getDate()) //beacuse data is the same for all days
            return day.getTime(); //would usually only need this
        }

        const line = d3.line()
            .x(d => xScale(convTime(d.time)))
            .y(d => yScale(d.temp))


        canvas.append("path")
            .attr("class", "line")
            .attr("d", line(dayData.hourly))
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", "2")

        //axises
        canvas.append('g')
            .attr("class", "axis")
            .attr("transform", `translate(0, ${height-margin})`)
            .call(xAxis)

        canvas.append('g')
            .attr("class", "axis")
            .attr("transform", `translate(${margin}, 0)`)
            .call(yAxis)

        

    }
    render(){
        return <div className='viewHolder' ref='canvas'/>
    } 
}