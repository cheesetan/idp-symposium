import React from 'react';

const tableWidth = 40;
const tableHeight = 80;

const wallThickness = 5; // thickness of the wall and door
const doorWidth = 40+wallThickness; // width of the door, plus some allowance for the wall

const FloorPlan = ({width, height, rooms, onRoomClick, onTableClick, offsetX=0, offsetY=0}) => {
    return (
        <div className="bg-white">
            <div className="w-full max-w-xl mx-auto">
            <svg 
                viewBox={`0 0 ${width} ${height}`}
                className="w-full h-auto p-3"
            >
                {/* Render the rooms */}
                {rooms.map((room, index) => (
                    <RoomPlan 
                        key={index}
                        {...room}
                        roomX={room.roomX + offsetX}
                        roomY={room.roomY + offsetY}
                        onRoomClick={() => onRoomClick(room.name)} 
                        onTableClick={(tableName) => onTableClick(tableName)} 
                    />
                ))}
            </svg>
            </div>
        </div>
    );
};

const RoomPlan = ({onTableClick, onRoomClick, roomX, roomY, roomWidth, roomHeight, tables, doors, name, walled}) => {
    return (
      <g transform={`translate(${roomX}, ${roomY})`}> {/* Transform the X and Y according to roomX and roomY */}

        {/* Room walls, if the room is walled */}
        <rect
          x={0}
          y={0}
          width={roomWidth}
          height={roomHeight}
          fill="white"
          stroke="black"
          onClick={onRoomClick}
          strokeWidth={wallThickness}
          stroke-dasharray={walled ? "" : "10,10"}
        />

        {/* Render the tables */}
        {tables.map((table, index) => (
            <Table key={index} {...table} roomWidth={roomWidth} roomHeight={roomHeight} onClick={() => onTableClick(table.name)} />
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

const Table = ({onClick, vertical, x, y, roomWidth, roomHeight, name}) => {
    const width = vertical ? tableWidth : tableHeight;
    const height = vertical ? tableHeight : tableWidth;

    const adjustedX = (x/100 * roomWidth) - width/2;
    const adjustedY = (y/100 * roomHeight) - height/2; // center the table

    return (
        <g onClick={onClick}>
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
  const {
    x,
    y,
    roomWidth,
    roomHeight,
    double = false,
    vertical = false,
    wallThickness = 10,
    doorWidth = 30,
    isLeftHinge = true,
    color = "#000",
  } = doorParams;

  // Calculate dimensions and position
  const doors = double ? 2 : 1;
  const width = vertical ? wallThickness * 2 : doorWidth * doors;
  const height = vertical ? doorWidth * doors : wallThickness * 2;
  const rectposX = (x / 100) * roomWidth - width / 2;
  const rectposY = (y / 100) * roomHeight - height / 2;
  const posX = ((x / 100) * roomWidth - width / 2) - 0.5;
  const posY = ((y / 100) * roomHeight - height / 2) - 10;

  // Determine rotation based on vertical/horizontal orientation
  const rotation = vertical ? 90 : 0;

  const SingleDoor = ({ x, y, width, isLeftHinge }) => (
    <g>
      {/* Door panel */}
      <line
        x1={isLeftHinge ? 0 : width}
        y1="0"
        x2={isLeftHinge ? 0 : width}
        y2={-width}
        stroke={color}
        strokeWidth="3"
      />

      {/* Door swing arc */}
      <path
        d={`M ${isLeftHinge ? 0 : width} ${-width} 
            A ${width} ${width} 0 0 ${isLeftHinge ? 1 : 0} 
            ${isLeftHinge ? width : 0} 0`}
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="3 3"
      />
    </g>
  );

  return (
    <g>
      <rect x={rectposX} y={rectposY} width={width} height={height} fill="white" />
      <g
        transform={`translate(${posX},${posY}) rotate(${rotation}, ${
          width / 2
        }, ${height / 2})`}
        className="hover:opacity-80 transition-opacity cursor-pointer"
      >
        {double ? (
          // Double doors
          <>
            {/* Left door */}
            <g transform={`translate(0, ${height})`}>
              <SingleDoor x={0} y={0} width={doorWidth} isLeftHinge={true} />
            </g>
            {/* Right door */}
            <g transform={`translate(${doorWidth}, ${height})`}>
              <SingleDoor x={0} y={0} width={doorWidth} isLeftHinge={false} />
            </g>
          </>
        ) : (
          // Single door
          <g transform={`translate(0, ${height})`}>
            <SingleDoor
              x={0}
              y={0}
              width={doorWidth}
              isLeftHinge={isLeftHinge}
            />
          </g>
        )}
      </g>
    </g>
  );
};


export default FloorPlan;