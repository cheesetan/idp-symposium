export type Room = {
  roomX: number;
  roomY: number;
  roomWidth: number;
  roomHeight: number;
  name: string;
  walled: boolean;
  doors: { x: number; y: number; vertical: boolean; double: boolean; }[];
  tables: { x: number; y: number; name: string; vertical: boolean; }[];
};

export const trainingRoom2: Room = {
    roomX: 0,
    roomY: 0,
    roomWidth: 600,
    roomHeight: 300,
    name: "Training Room 05-05",
    walled: true,
    doors: [
        { // bottom left
            x: 10,
            y: 100,
            vertical: false,
            double: true
        },
        { // top left
            x: 5,
            y: 0,
            vertical: false,
            double: false
        },
        { // top right
            x: 90,
            y: 0,
            vertical: false,
            double: true
        }
    ],
    tables: [
        { // left
            x: 15,
            y: 50,
            name: "MGRM 1",
            vertical: true,
        },
        { // right
            x: 85,
            y: 50,
            name: "Nitto 1",
            vertical: true,
        },
        { // top left
            x: 35,
            y: 15,
            name: "NIE 1",
            vertical: false,
        },
        { // top right
            x: 65,
            y: 15,
            name: "FTBT 1",
            vertical: false,
        },
        { // bottom left
            x: 35,
            y: 85,
            name: "DukeNUS 1",
            vertical: false,
        },
        { // bottom right
            x: 65,
            y: 85,
            name: "NNI 1",
            vertical: false,
        }
    ]
};

export const trainingRoom3: Room = {
    roomX: 0,
    roomY: 350,
    roomWidth: 600,
    roomHeight: 350,
    name: "Training Room 05-06",
    walled: true,
    doors: [
        { // top left
            x: 10,
            y: 0,
            vertical: false,
            double: true
        },
        { // bottom left
            x: 5,
            y: 100,
            vertical: false,
            double: false
        },
        { // bottom right
            x: 90,
            y: 100,
            vertical: false,
            double: true
        },
        { // top right
            x: 100,
            y: 5,
            vertical: true,
            double: false
        }
    ],
    tables: [
        { // left top
            x: 15,
            y: 35,
            name: "ABS-CS 1",
            vertical: true,
        },
        { // left bottom
            x: 15,
            y: 65,
            name: "AFND 2",
            vertical: true,
        },
        { // right top
            x: 85,
            y: 35,
            name: "AWWA 2",
            vertical: true,
        },
        { // right bottom
            x: 85,
            y: 65,
            name: "IFN 1",
            vertical: true,
        },
        { // top left
            x: 35,
            y: 15,
            name: "BII 2",
            vertical: false,
        },
        { // top right
            x: 65,
            y: 15,
            name: "KKH 7",
            vertical: false,
        },
        { // bottom left
            x: 35,
            y: 85,
            name: "HWN 1",
            vertical: false,
        },
        { // bottom right
            x: 65,
            y: 85,
            name: "KKH 6",
            vertical: false,
        }
    ]
};

const floorplan: Room[]= [
    trainingRoom2,
    trainingRoom3
]

export default floorplan;