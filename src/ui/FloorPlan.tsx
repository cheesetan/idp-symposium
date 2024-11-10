import React from 'react';

const tableWidth = 40;
const tableHeight = 80;

const wallThickness = 5; // thickness of the wall and door
const doorWidth = 40+wallThickness; // width of the door, plus some allowance for the wall

const FloorPlan = ({width, height, rooms}) => {
    return (
        <div className="bg-white">
            <div className="w-full max-w-xl mx-auto">
            <svg 
                viewBox={`0 0 ${width} ${height}`}
                className="w-full h-auto p-3"
            >
                {/* Render the rooms */}
                {rooms.map((room, index) => (
                    <RoomPlan key={index} {...room} />
                ))}
            </svg>
            </div>
        </div>
    );
};

const RoomPlan = ({roomX, roomY, roomWidth, roomHeight, tables, doors, name}) => {
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
        {tables.map((table, index) => (
            <Table key={index} {...table} roomWidth={roomWidth} roomHeight={roomHeight} />
        ))}

        {/* doors */}
        {doors.map((door, index) => (
            <Door key={index} {...door} roomWidth={roomWidth} roomHeight={roomHeight} />
        ))}
        
        {/* Room label */}
        <text
          x={roomWidth/2}
          y={roomHeight/2}
          className="text-lg font-semibold"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {name}
        </text>
      </g>
    );
};

const Table = ({vertical, x, y, roomWidth, roomHeight, name}) => {
    const width = vertical ? tableWidth : tableHeight;
    const height = vertical ? tableHeight : tableWidth;

    const adjustedX = (x/100 * roomWidth) - width/2;
    const adjustedY = (y/100 * roomHeight) - height/2; // center the table

    return (
        <g>
        <rect
            x={adjustedX}
            y={adjustedY}
            width={width}
            height={height}
            fill="#d1d5db"
            stroke="black"
            className="hover:fill-blue-300 transition-colors cursor-pointer"
        />
        <text
            x={adjustedX + width / 2}
            y={adjustedY + height / 2}
            className="text-sm"
            textAnchor="middle"
            dominantBaseline="middle"
            transform={vertical ? `rotate(90, ${adjustedX + width / 2}, ${adjustedY + height / 2})` : undefined}
        >
            {name}
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