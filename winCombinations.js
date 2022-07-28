export const winCombinations = {
     c3: [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
     ],
     c4: [
          [0, 1, 2, 3],
          [4, 5, 6, 7],
          [8, 9, 10, 11],
          [12, 13, 14, 15],
          [0, 4, 8, 12],
          [1, 5, 9, 13],
          [2, 6, 10, 14],
          [3, 7, 11, 15],
          [0, 5, 10, 15],
          [3, 6, 9, 12] 
     ],
     c5: [
          [0, 1, 2, 3, 4],          
          [5, 6, 7, 8, 9],         
          [10, 11, 12, 13, 14],
          [15, 16, 17, 18, 19],
          [20, 21, 22, 23, 24],
          [0, 5, 10, 15, 20],
          [1, 6, 11, 16, 21],
          [2, 7, 12, 17, 22],
          [3, 8, 13, 18, 23],
          [4, 9, 14, 19, 24],
          [0, 6, 12, 18, 24],
          [4, 8, 12, 16, 20]
     ],
     c6: [
          [0, 1, 2, 3, 4, 5],          
          [6, 7, 8, 9, 10, 11],
          [12, 13, 14, 15, 16, 17],
          [18, 19, 20, 21, 22, 23],
          [24, 25, 26, 27, 28, 29],
          [30, 31, 32, 33, 34, 35],
          [0, 6, 12, 18, 24, 30],
          [1, 7, 13, 19, 25, 31],
          [2, 8, 14, 20, 26, 32],
          [3, 9, 15, 21, 27, 33],
          [4, 10, 16, 22, 28, 34],
          [5, 11, 17, 23, 29, 35],
          [0, 7, 14, 21, 28, 35],
          [5, 10, 15, 20, 25, 30]
     ]
}

//combinations to check to avoid mistakes with wrong combinations
// let winCombinations = {
//     c3: ["012",
//          "345",
//          "678",
//          "036",
//          "147",
//          "258",
//          "058",
//          "246"],
//     c4: ["0123",
//          "4567",
//          "891011",
//          "12131415",
//          "04812",
//          "15913",
//          "261014",
//          "371115",
//          "051015",
//          "36912"],
//     c5: ["01234",
//          "56789",
//          "1011121314",
//          "1516171819",
//          "2021222324",
//          "05101520",
//          "16111621",
//          "27121722",
//          "38131823",
//          "49141924",
//          "06121824",
//          "48121620"],
//     c6: ["012345",
//          "67891011",
//          "121314151617",
//          "181920212223",
//          "242526272829",
//          "303132333435",
//          "0612182430",
//          "1713192531",
//          "2814202632",
//          "3915212733",
//          "41016222834",
//          "51117232935",
//          "0714212835",
//          "51015202530"]
// };