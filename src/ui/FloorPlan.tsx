import React from 'react';
import { trainingRoom1 } from '../data/floorplan.tsx';

const tableWidth = 40;
const tableHeight = 80;

const doorWidth = 40;
const wallThickness = 2; // thickness of the wall and door

const FloorPlan = () => {

    const roomWidth = 400;
    const roomHeight = 300;

    return (
        <div className="bg-white">
            <div className="w-full max-w-xl mx-auto p-4">
            <svg 
                viewBox={`0 0 ${roomWidth*3} ${roomHeight*3}`}
                className="w-full h-auto border-2 border-gray-800"
            >
            <RoomPlan roomX={0} roomY={0} {...trainingRoom1}/>
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
        
      <g transform={`translate(${roomX}, ${roomY})`}> {/* Transform the X and Y according to roomX and roomY */}

        {/* Room walls */}
        <rect
          x={0}
          y={0}
          width={roomWidth}
          height={roomHeight}
          fill="white"
          stroke="black"
          strokeWidth={wallThickness}
        />
        {roomParams.tables.map((table, index) => (
            <Table key={index} {...table} roomWidth={roomWidth} roomHeight={roomHeight} />
        ))}

        {/* doors */}
        {roomParams.doors.map((door, index) => (
            <Door key={index} {...door} roomWidth={roomWidth} roomHeight={roomHeight} />
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

const Door = (doorParams) => {
    const doors = doorParams.double ? 2 : 1;

    const width = doorParams.vertical ? wallThickness*2 : doorWidth*doors;
    const height = doorParams.vertical ? doorWidth*doors : wallThickness*2;

    const x = (doorParams.x/100 * doorParams.roomWidth) - width/2;
    const y = (doorParams.y/100 * doorParams.roomHeight) - height/2;

    return (
        <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="white"
        />
    );
}


export default FloorPlan;