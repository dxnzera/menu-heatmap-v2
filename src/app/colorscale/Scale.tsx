'use client';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ColorScale: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Dimensões do SVG
    const width = 500;
    const height = 50;

    // Criar a escala de cores
    const colorScale = d3.scaleLinear<string>()
      .domain([0, 50, 100]) // Valores de entrada (0 a 100)
      .range(['blue', 'green', 'red']); // Cores de saída

    // Criar o SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Adicionar retângulo para mostrar a escala de cores
    svg.append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'url(#gradient)')
      .append('title') // Adicionando título
      .text(`Color Scale: Min: 0, Max: 100`);

    // Adicionar gradiente à definição do SVG
    const defs = svg.append('defs');
    const linearGradient = defs.append('linearGradient')
      .attr('id', 'gradient')
      .attr('x1', 0)
      .attr('x2', 1)
      .attr('y1', 0)
      .attr('y2', 0);

    // Adicionar cores ao gradiente
    linearGradient.selectAll('stop')
      .data([
        { offset: '0%', color: colorScale(0) },
        { offset: '50%', color: colorScale(50) },
        { offset: '100%', color: colorScale(100) }
      ])
      .enter().append('stop')
      .attr('offset', (d: any) => d.offset)
      .attr('stop-color', (d: any) => d.color);

    // Adicionar eventos de mouse para mostrar min e max
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = d3.pointer(event)[0];
      const xScale = d3.scaleLinear()
        .domain([0, width])
        .range([0, 100]);
      const dataValue = Math.round(xScale.invert(mouseX));
      const titleText = `Color Scale: Min: 0, Max: 100 - Hovered Value: ${dataValue}`;
      svg.select('rect').select('title').text(titleText);
    };

    const handleMouseOut = () => {
      svg.select('rect').select('title').text(`Color Scale: Min: 0, Max: 100`);
    };

    svg.on('mousemove', handleMouseMove);
    svg.on('mouseout', handleMouseOut);

    return () => {
      svg.on('mousemove', null);
      svg.on('mouseout', null);
    };

  }, []);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default ColorScale;
