import React from 'react';
import tables from '../data/floorplan.tsx';

const tableWidth = 40;
const tableHeight = 80;

const FloorPlan = () => {

    const roomWidth = 400;
    const roomHeight = 300;

    return (
        <div>
            <div className="w-full max-w-xl mx-auto p-4">
            <svg 
                viewBox={`0 0 ${roomWidth*3} ${roomHeight*3}`}
                className="w-full h-auto border-2 border-gray-800"
            >
            <RoomPlan roomX={0} roomY={0} roomWidth={roomWidth} roomHeight={roomHeight} tables={tables}/>
            <RoomPlan roomX={40} roomY={400} roomWidth={roomWidth} roomHeight={roomHeight} tables={tables}/>
            </svg>
            </div>
        </div>
    );
}

const RoomPlan = (roomParams) => {
    const roomX = roomParams.roomX;
    const roomY = roomParams.roomY;
    const roomWidth = roomParams.roomWidth;
    const roomHeight = roomParams.roomHeight;

    return (
      <g>
        {/* Room walls */}
        <rect
          x={roomX}
          y={roomY}
          width={roomWidth}
          height={roomHeight}
          fill="white"
          stroke="black"
          strokeWidth="2"
        />

        {/* Iterate over tables array */}
        {roomParams.tables.map((table, index) => (
            <Table key={index} {...table} roomWidth={roomWidth} roomHeight={roomHeight} />
        ))}
        
        {/* Room label */}
        <text
          x="200"
          y="150"
          className="text-lg font-semibold"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Training Room 1
        </text>
      </g>
    );
};

const Table = (tableParams) => {
    const width = tableParams.vertical ? tableWidth : tableHeight;
    const height = tableParams.vertical ? tableHeight : tableWidth;

    const x = (tableParams.x/100 * tableParams.roomWidth) - width/2;
    const y = (tableParams.y/100 * tableParams.roomHeight) - height/2; // center the table

    return (
        <g>
        <rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill="#d1d5db"
            stroke="black"
            className="hover:fill-blue-300 transition-colors cursor-pointer"
        />
        <text
            x={x + width / 2}
            y={y + height / 2}
            className="text-sm"
            textAnchor="middle"
            dominantBaseline="middle"
            transform={tableParams.vertical ? `rotate(90, ${x + width / 2}, ${y + height / 2})` : undefined}
        >
            {tableParams.name}
        </text>
        </g>
    );
}

export default FloorPlan;