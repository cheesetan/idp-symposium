import React from 'react';

const tableWidth = 40;
const tableHeight = 80;

const wallThickness = 5; // thickness of the wall and door
const doorWidth = 40+wallThickness; // width of the door, plus some allowance for the wall

const FloorPlan = (floorParams) => {
    return (
        <div className="bg-white">
            <div className="w-full max-w-xl mx-auto">
            <svg 
                viewBox={`0 0 ${floorParams.width} ${floorParams.height}`}
                className="w-full h-auto p-3"
            >
                {/* Render the rooms */}
                {floorParams.rooms.map((room, index) => (
                    <RoomPlan key={index} {...room} />
                ))}
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
          x={roomWidth/2}
          y={roomHeight/2}
          className="text-lg font-semibold"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {roomParams.name}
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