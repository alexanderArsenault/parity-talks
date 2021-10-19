const path = require.context('../images/splash/', true, /\.png$/)
export const images = path.keys().map(path).slice(0, 20)

export const imageCoords = [
  // 1  WH outline
  {
    x: 133,
    y: 70,
  },
  // 2 triangles
  {
    x: 160,
    y: 66,
  },
  // 3 big bodied W
  {
    x: 132,
    y: 177,
  },
  // 4 HA inline
  {
    x: 185,
    y: 80,
  },
  // 5 wedge left side between two circles
  {
    x: 9,
    y: 225,
  },
  // 6 T' and S outline
  {
    x: 278,
    y: 150,
  },
  // 7 Some T and Top Wedge
  {
    x: 316,
    y: 44,
  },
  // 8 S Body
  {
    x: 382,
    y: 106,
  },
  // 9 GO outline
  {
    x: 561,
    y: 140,
  },

  // 10 OD outline
  {
    x: 597,
    y: 70,
  },
  // 11 OD body
  {
    x: 643,
    y: 134,
  },
  // 12 OD Filling
  {
    x: 697,
    y: 70,
  },

  // Bottom Row

  //  13 black circle
  {
    x: 165,
    y: 337,
  },
  // 14 center hat
  {
    x: 373,
    y: 272,
  },
  // 15 accessories to the good circler and bottom right corner
  {
    x: 669,
    y: 295,
  },
  // 16 right good middle whiute, nike
  {
    x: 662,
    y: 233,
  },
  // 17 is the 03 swoop
  {
    x: 439,
    y: 337,
  },
  // 18 bottom right business
  {
    x: 629,
    y: 337,
  },
  // 19 bottom left
  {
    x: 200,
    y: 372,
  },
  // White around the numbers
  {
    x: 532,
    y: 302,
  },
]
