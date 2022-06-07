const colours = [
  {
    name: "Tar",
    colour: "#111319",
  },
  {
    name: "Sand",
    colour: "#e2d7c1",
  },
  {
    name: "Citrona",
    colour: "#dbcc7c",
  },
  {
    name: "Palm",
    colour: "#c3cfbb",
  },
  {
    name: "Salt",
    colour: "#e6e4e1",
  },
  {
    name: "Hazy",
    colour: "#afc2c9",
  },
  {
    name: "Stroke",
    colour: "#93908a",
  },
  {
    name: "Faded Terracotta",
    colour: "#dfb797",
  },
  {
    name: "Snow White",
    colour: "#FFFDE1",
  },
  {
    name: "Orange Coloured White",
    colour: "#f7e6bc",
  },
  {
    name: "Skimmed Milk White",
    colour: "#E4DCBB",
  },
  {
    name: "Ash Grey",
    colour: "#CAC6A5",
  },
  {
    name: "Broccoli Brown",
    colour: "#907D64",
  },
  {
    name: "Ultramarine Blue",
    colour: "#5D82A1",
  },
  {
    name: "Imperial Purple",
    colour: "#55566B",
  },
  {
    name: "Scotch Blue",
    colour: "#41404C",
  },
  {
    name: "Emerald Green",
    colour: "#7CAE72",
  },
  {
    name: "Verdigris Green",
    colour: "#3e8b68",
  },
  {
    name: "Sap Green",
    colour: "#7E8651",
  },
  {
    name: "Duck Green",
    colour: "#465741",
  },
  {
    name: "Dutch Orange",
    colour: "#F2B145",
  },
  {
    name: "Lake Red",
    colour: "#C8526A",
  },
  {
    name: "Crimson Red",
    colour: "#B67E78",
  },
  {
    name: "Deep Reddish Brown",
    colour: "#70483E",
  },
  {
    name: "All White",
    colour: "#fbf8f4",
  },
  {
    name: "Wevet",
    colour: "#eee9e7",
  },
  {
    name: "Wimbourne White",
    colour: "#f7f3e8",
  },
  {
    name: "Pointing",
    colour: "#f7f1e3",
  },
  {
    name: "James White",
    colour: "#ede9d8",
  },
  {
    name: "Stony Ground",
    colour: "#cec1ad",
  },
  {
    name: "White Tie",
    colour: "#f5ecd9",
  },
  {
    name: "New White",
    colour: "#f5e8d0",
  },
  {
    name: "Matchstick",
    colour: "#e4d5bc",
  },
  {
    name: "Savage Ground",
    colour: "#d8c4a8",
  },
  {
    name: "Cord",
    colour: "#d6c39e",
  },
  {
    name: "Slipper Satin",
    colour: "#e8e0d1",
  },
  {
    name: "Lime White",
    colour: "#e8dec9",
  },
  {
    name: "Off-white",
    colour: "#e0d5be",
  },
  {
    name: "Old White",
    colour: "#cfc3ad",
  },
  {
    name: "Light Gray",
    colour: "#b4a693",
  },
  {
    name: "Mouse's Back",
    colour: "#998976",
  },
  {
    name: "School House White",
    colour: "#e6dfd1",
  },
  {
    name: "Shadow White",
    colour: "#ded8c6",
  },
  {
    name: "Shaded White",
    colour: "#d9d2c1",
  },
  {
    name: "Hardwick White",
    colour: "#b5afa0",
  },
  {
    name: "Dimity",
    colour: "#eee3d3",
  },
  {
    name: "Joa's White",
    colour: "#decfb9",
  },
  {
    name: "Oxford Stone",
    colour: "#d6c2ac",
  },
  {
    name: "Salon Drab",
    colour: "#726454",
  },
  {
    name: "Strong White",
    colour: "#e5e0db",
  },
  {
    name: "Ammonite",
    colour: "#ddd8cf",
  },
  {
    name: "Cornforth White",
    colour: "#d1cbc3",
  },
  {
    name: "Purbeck Stone",
    colour: "#c4beb4",
  },
  {
    name: "Worsted",
    colour: "#a59f97",
  },
  {
    name: "Mole's Breath",
    colour: "#8b857f",
  },
  {
    name: "Cromarty",
    colour: "#cfcec0",
  },
  {
    name: "Mizzle",
    colour: "#c0c2b3",
  },
  {
    name: "Blue Gray",
    colour: "#b4b4a3",
  },
  {
    name: "Pigeon",
    colour: "#a1a093",
  },
  {
    name: "Frency Grey",
    colour: "#b5b19a",
  },
  {
    name: "Theron",
    colour: "#8b8a77",
  },
  {
    name: "Blackened",
    colour: "#dddbd9",
  },
  {
    name: "Dimpse",
    colour: "#d9d8d3",
  },
  {
    name: "Pavillion Gray",
    colour: "#c8c3bc",
  },
  {
    Name: "Lamp Room Gray",
    colour: "#b2b1a9",
  },
  {
    Name: "Manor house Gray",
    colour: "#a2a29d",
  },
  {
    name: "Plummet",
    colour: "#8d8d8b",
  },
  {
    name: "Skimming Stone",
    colour: "#dfd6cb",
  },
  {
    name: "Elephant's Breath",
    colour: "#9f9389",
  },
  {
    name: "Dove Tale",
    colour: "#786963",
  },
  {
    name: "Brinjal",
    colour: "#5d3b42",
  },
  {
    name: "Jitney",
    colour: "#c4b2a2",
  },
  {
    name: "Peignoir",
    colour: "#d6c8c3",
  },
  {
    name: "Calluna",
    colour: "#ccc8ce",
  },
  {
    name: "Brassica",
    colour: "#8d8089",
  },
  {
    name: "Pelt",
    colour: "#50414c",
  },
  {
    name: "Paean Black",
    colour: "#494248",
  },
  {
    name: "Middleton Pink",
    colour: "#fde7e5",
  },
  {
    name: "Calamine",
    colour: "#e6d1cb",
  },
  {
    name: "Nancy's Blushes",
    colour: "#ecb7b8",
  },
  {
    name: "Red Earth",
    colour: "#c57b67",
  },
  {
    name: "Picture Gallery Red",
    colour: "#a15a4d",
  },
  {
    name: "Incarnadine",
    colour: "#a04344",
  },
  {
    name: "Great White",
    colour: "#e7dedb",
  },
  {
    name: "Sulking Room Pink",
    colour: "#A0837F",
  },
  {
    name: "Cinder Rose",
    colour: "#c7a4a6",
  },
  {
    name: "Rangwali",
    colour: "#bf7a8f",
  },
  {
    name: "Pink Ground",
    colour: "#efd6c7",
  },
  {
    name: "Setting Plaster",
    colour: "#dfc2af",
  },
  {
    name: "Rectory Red",
    colour: "#a53c49",
  },
  {
    name: "Eating Room Red",
    colour: "#8f4e4d",
  },
  {
    name: "Radicchio",
    colour: "#994a50",
  },
  {
    name: "Preference Red",
    colour: "#6d4247",
  },
  {
    name: "Charlotte's Locks",
    colour: "#d65f3d",
  },
  {
    name: "Blazer",
    colour: "#b64f48",
  },
  {
    name: "House White",
    colour: "#f1e6c8",
  },
  {
    name: "Pale Hound",
    colour: "#eadfb7",
  },
  {
    name: "Dayroom Yellow",
    colour: "#f7e29d",
  },
  {
    name: "Citron",
    colour: "#f5d27b",
  },
  {
    name: "Yellow Ground",
    colour: "#f2cf86",
  },
  {
    name: "Babouche",
    colour: "#ecc363",
  },
  {
    name: "Tallow",
    colour: "#fdedd7",
  },
  {
    name: "Farrow's Cream",
    colour: "#efdbb3",
  },
  {
    name: "Dorset Cream",
    colour: "#efd5a1",
  },
  {
    name: "Hay",
    colour: "#dfc795",
  },
  {
    name: "Sudbury Yellow",
    colour: "#dcb771",
  },
  {
    name: "India Yellow",
    colour: "#cb9e59",
  },
  {
    name: "Green Ground",
    colour: "#dbdab6",
  },
  {
    name: "Cooking Apple Green",
    colour: "#c4c6a5",
  },
  {
    name: "Ball Green",
    colour: "#bcb596",
  },
  {
    name: "Cardroom Green",
    colour: "#899081",
  },
  {
    name: "Green Smoke",
    colour: "#737c70",
  },
  {
    name: "Churlish Green",
    colour: "#c8bd83",
  },
  {
    name: "Yeabridge Green",
    colour: "#919f70",
  },
  {
    name: "Breakfast Room Green",
    colour: "#94a68a",
  },
  {
    name: "Calke Green",
    colour: "#768769",
  },
  {
    name: "Bancha",
    colour: "#686a47",
  },
  {
    name: "Arsonic",
    colour: "#84b59c",
  },
  {
    name: "Vert De Terre",
    colour: "#babba5",
  },
  {
    name: "Lichen",
    colour: "#a1a189",
  },
  {
    name: "OVal Room Blue",
    colour: "#8b9d9b",
  },
  {
    name: "Stone Blue",
    colour: "#7997a1",
  },
  {
    name: "De Nimes",
    colour: "#6A7C80",
  },
  {
    name: "Inchyra Blue",
    colour: "#586768",
  },
  {
    name: "Pavillion Blue",
    colour: "#e5e7dc",
  },
  {
    name: "Pale Powder",
    colour: "#d9dcd2",
  },
  {
    name: "Teresa's Green",
    colour: "#c0cdc2",
  },
  {
    name: "Green Blue",
    colour: "#adbdb2",
  },
  {
    name: "Dix Blue",
    colour: "#99b0ab",
  },
  {
    name: "Vardo",
    colour: "#427e83",
  },
  {
    name: "Borrowed Light",
    colour: "#d5dbdb",
  },
  {
    name: "Skylight",
    colour: "#ccd0cd",
  },
  {
    name: "Light Blue",
    colour: "#b8bcb5",
  },
  {
    name: "Parma Gray",
    colour: "#b2bfc5",
  },
  {
    name: "Lulworth Blue",
    colour: "#a1b8ca",
  },
  {
    name: "Cook's Blue",
    colour: "#6a90b4",
  },
  {
    name: "Cabbage White",
    colour: "#e8eeea",
  },
  {
    name: "Blue Ground",
    colour: "#a1c5c8",
  },
  {
    name: "St Giles Blue",
    colour: "#599ec4",
  },
  {
    name: "Pitch Blue",
    colour: "#636e8f",
  },
  {
    name: "Stiffkey Blue",
    colour: "#4d5b6a",
  },
  {
    name: "Hague Blue",
    colour: "#3d4e57",
  },
  {
    name: "Mahogany",
    colour: "#534644",
  },
  {
    name: "Tanner's Brown",
    colour: "#4d4746",
  },
  {
    name: "Downpipe",
    colour: "#626664",
  },
  {
    name: "Railings",
    colour: "#45484b",
  },
  {
    name: "Off-black",
    colour: "#444546",
  },
  {
    name: "Pitch Black",
    colour: "#3b3938",
  },
];

// Get the element
var app = document.querySelector("#colour-grid");

// Create markup
app.innerHTML = colours
  .map(function (colour) {
    for (let i = 0; i < colours.length; i++) {
      return (
        '<div class="grid-item">' +
        '<div class="relative">' +
        '<div class="grid-circle" style="background-color:' +
        colour.colour +
        ";" +
        '">' +
        "</div></div><p>" +
        colour.name +
        "</p>" +
        "</div>"
      );
    }
  })
  .join("");
