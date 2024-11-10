import React from 'react';

const RoomPlan = (roomParams) => {
    const tableWidth = 40;
    const tableHeight = 80;

    const roomWidth = roomParams.roomWidth;
    const roomHeight = roomParams.roomHeight;

    const Table = (tableParams) => {
        const width = tableParams.vertical ? tableWidth : tableHeight;
        const height = tableParams.vertical ? tableHeight : tableWidth;
    
        const x = (tableParams.x/100 * roomWidth) - width/2;
        const y = (tableParams.y/100 * roomHeight) - height/2; // center the table
    
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

    return (
    <div className="w-full max-w-xl mx-auto p-4">
      <svg 
        viewBox={`0 0 ${roomWidth} ${roomHeight}`}
        className="w-full h-auto border-2 border-gray-800"
      >
        {/* Room walls */}
        <rect
          x="0"
          y="0"
          width="400"
          height="300"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />

        {/* Iterate over tables array */}
        {roomParams.tables.map((table, index) => (
            <Table key={index} {...table} />
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
      </svg>
    </div>
  );
};

export default RoomPlan;