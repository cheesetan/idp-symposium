import React from 'react';
import FloorPlan from './FloorPlan.tsx';
import { Room } from '../data/floorplan.tsx';

const InteractiveFloorPlan = ({floorplan, onGroupFocus}) => {
  // store which room is currently focused, or null if no room is focused
  const [focusedRoom, setFocusedRoom] = React.useState<Room | null>(null);

  // create a callback function to handle room clicks
  const handleRoomClick = (roomName) => {
    console.log(`Room clicked: ${roomName}`)

    if (focusedRoom?.name === roomName) {
      setFocusedRoom(null);
    } else {
      // get the room object from the floorplan data
      const room = floorplan.find(room => room.name === roomName);
      if (!room) {
        console.error(`Room not found: ${roomName}`);
        return;
      }

      // determine if the room is walled. If it isn't, don't focus on it
      if (!room.walled) {
        console.log(`Room is not walled: ${room.name}`);
        return;
      }

      console.log(`Room found: ${room.name}`);
      setFocusedRoom(room); // set the focused room
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-100 active:bg-gray-50 cursor-pointer">
      <FloorPlan
        width={focusedRoom == null ? 650 : focusedRoom.roomWidth}
        height={focusedRoom == null ? 700 : focusedRoom.roomHeight}
        rooms={floorplan}
        offsetX={(focusedRoom?.roomX || 0)*-1}
        offsetY={(focusedRoom?.roomY || 0)*-1}
        onRoomClick={handleRoomClick}
        onTableClick={(tableName) =>
          onGroupFocus(tableName)
        }
      />
    </div>
  );
};

export default InteractiveFloorPlan;