import * as d3 from "d3";



export default class DonutChart {
	constructor(el) {
		this.el = el;
		this.radius = 200;
		this.color = this.getColor();
		this.g = this.addSVG(this.el, this.radius);
		this.arc = this.addArc(this.radius);
		this.pie = this.addPie();
		this.tooltip = this.addToolTips();
		
	}

	getColor() {
		return d3.scaleOrdinal(d3.schemeCategory20c);
	}
	

	addPie() {
		return d3.pie()
			.sort(null)
			.value(d => d.value);
	}

	addArc(radius) {
		return d3.arc()
			.outerRadius(radius)
			.innerRadius(100);
	}

	addSVG(el, radius) {
		return d3.select(el).append("svg")
			.attr("width", 2 * radius + 50)
			.attr("height", 2 * radius + 50)
			.append("g")
			.attr("transform", `translate(${radius + 25},${radius + 25})`);
	}

	addToolTips() {
		return d3.select("body")
			.append("div")
			.style("visibility", "hidden")
			.style("position", "absolute")
			.style("z-index", 10)
			.style("background", "rgba(255,255,255,.9)")
			.style("width", "150px")
			.style("border-radius", "5px")
			.style("border", "2px solid black")
			.style("text-align", "center")
	}

	onMouseOut(tooltip) {
		return function() {
			d3.select(this).style("opacity", 1);
			return tooltip.style("visibility", "hidden")
		}
	}

	onMouseOver(tooltip) {
		return function() {
			return tooltip.style("visibility", "visible");
		}
	}

	onMouseMove(tooltip) {
		return function(d) {
			d3.select(this)
				.style("opacity", .7);
			return tooltip.style("top", `${event.pageY - 110}px`).style("left", `${event.pageX + 10}px`)
				.html(`<h3>${d.data.key}: ${d.data.value}</h3>`);
		}
	}

	unmount() {
		this.el.remove();
	}

	arcTween(a) {
        var interpolated = d3.interpolate(this.originalAngles, a);
        this.originalAngles = interpolated(0);

        return t => {
            return this.arc(interpolated(t));
        };
    }

	
	create(data) {
		
		const {svg, arc, pie, tooltip, color} = this;
	
		this.path = this.g.selectAll("path")
			.data(pie(d3.entries(data)))
			.enter().append("path")
			.on("mouseover", this.onMouseOver(tooltip))
			.on("mouseout", this.onMouseOut(tooltip))
			.on("mousemove", this.onMouseMove(tooltip))
			.attr("fill", (d, i) => color(i))
			.attr("stroke", "#0c0701")
			.attr("d", arc)

	}

	update(data) {
		const {svg, arc, pie, tooltip, color} = this;

		this.path
            .data(pie(d3.entries(data)))
            .transition().duration(1000)
            .attrTween("d", this.arcTween.bind(this));
		
		this.path
			.data(pie(d3.entries(data)))
			.enter().append("path")
			.on("mouseover", this.onMouseOver(tooltip))
			.on("mouseout", this.onMouseOut(tooltip))
			.on("mousemove", this.onMouseMove(tooltip))
			.attr("fill", (d, i) => color(i))
			.attr("stroke", "#0c0701")
			.attr("d", arc)
	}

}





