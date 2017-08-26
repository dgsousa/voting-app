import React, {Component} from "react";
import {connect} from "react-redux";
import {findDOMNode} from "react-dom";

import DonutChart from "../../d3_components/DonutChart.js";


class Chart extends Component {
	constructor(props) {
		super(props);
	}

	transformData() {
		const {options} = this.props;
		return Object.keys(options).map(key => {
			return {
				["option"]: key,
				["votes"]: options[key]
			};
		});
	}

	mountChart() {
		if(!Object.keys(this.props.options).length) return;
		const {options} = this.props;
		const el = findDOMNode(this);
		this.chart = new DonutChart(el);
		this.chart.create(options);
	}

	updateChart() {
		const {options} = this.props;
		this.chart.update(options);
	}

	componentDidMount() {
		this.mountChart();
	}

	componentDidUpdate() {
		this.chart ? this.updateChart() : this.mountChart();
	}

	componentWillUnmount() {
		this.chart.unmount();
	}

	render() {
		return <div className="chart"></div>;
	}
}


const mapStateToProps = (state, ownProps) => ({
	options: ownProps.poll && ownProps.poll.options || {}
});



const ChartContainer = connect(
	mapStateToProps
)(Chart);
	

export default ChartContainer;