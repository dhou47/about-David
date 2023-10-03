import * as d3 from "d3";
import React from "react";

export default function LinePlot({
  data,
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
  marginLeft = 40, // Adjusted to make space for y-axis labels
}) {
  const svgRef = React.useRef();

  const x = d3
    .scaleLinear()
    .domain([0, data.length - 1])
    .range([marginLeft, width - marginRight]);

  const y = d3
    .scaleLinear()
    .domain(d3.extent(data))
    .range([height - marginBottom, marginTop]);

  const line = d3
    .line()
    .x((d, i) => x(i))
    .y((d) => y(d));

  React.useEffect(() => {
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    d3.select(svgRef.current)
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(xAxis);

    d3.select(svgRef.current)
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(yAxis);
  }, [x, y, height, marginBottom, marginLeft]);

  return (
    <svg ref={svgRef} width={width} height={height}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5" // Changed from stroke-width to strokeWidth
        d={line(data)}
      />
      <g fill="white" stroke="currentColor" strokeWidth="1.5">
        {" "}
        // Changed from stroke-width to strokeWidth
        {data.map((d, i) => (
          <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
        ))}
      </g>
    </svg>
  );
}
