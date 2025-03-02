(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("Map2",
{ "compressionlevel":-1,
 "height":10,
 "infinite":false,
 "layers":[
        {
         "data":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
            55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
            73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
            91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102,
            109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
            127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138,
            145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156,
            163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174],
         "height":10,
         "id":1,
         "name":"Pozadina",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 191, 184, 202, 203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 181, 183, 0, 0, 0, 181, 183, 0, 0, 0, 0, 0, 191, 193, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            214, 0, 0, 201, 233, 213, 213, 213, 231, 224, 0, 0, 0, 181, 182, 206, 193, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 212,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 235, 0, 0, 212, 197, 192, 192, 193, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 235, 0, 0, 0, 191, 184, 202, 233, 213, 213, 213, 221, 182, 223, 213, 213, 221, 183, 0, 0, 0,
            213, 213, 213, 213, 221, 223, 214, 0, 0, 235, 0, 0, 0, 218, 203, 0, 0, 0, 0, 0, 201, 198, 203, 0, 0, 201, 203, 0, 0, 0,
            0, 0, 0, 0, 201, 203, 0, 0, 0, 217, 214, 0, 0, 236, 0, 0, 0, 0, 0, 0, 0, 236, 0, 0, 0, 0, 0, 0, 0, 212,
            0, 0, 0, 0, 0, 0, 0, 0, 212, 225, 0, 0, 0, 0, 0, 0, 0, 234, 0, 0, 0, 0, 0, 0, 211, 0, 0, 0, 0, 0,
            182, 182, 183, 0, 0, 0, 0, 0, 0, 235, 0, 0, 0, 0, 0, 0, 181, 208, 183, 0, 0, 0, 0, 0, 0, 0, 0, 234, 0, 0,
            192, 192, 238, 182, 182, 182, 182, 182, 182, 208, 182, 182, 182, 182, 182, 182, 206, 192, 204, 182, 182, 182, 182, 182, 182, 182, 182, 208, 182, 182],
         "height":10,
         "id":2,
         "name":"Platforme",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 243, 0, 0, 0, 0, 0, 0, 244, 249, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 242, 0, 244, 0, 0, 0,
            0, 245, 0, 0, 242, 244, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 243, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 247, 0, 245, 0, 0, 0, 0, 243, 0, 0, 242, 0, 0, 0, 0, 0, 243, 0, 247, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":3,
         "name":"Ukras",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":4,
         "name":"Razno",
         "objects":[
                {
                 "gid":249,
                 "height":32,
                 "id":3,
                 "name":"chest",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":448,
                 "y":32
                }, 
                {
                 "gid":250,
                 "height":32,
                 "id":4,
                 "name":"key",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":320,
                 "y":160
                }, 
                {
                 "gid":321,
                 "height":32,
                 "id":5,
                 "name":"Projektil",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":32,
                 "y":128
                }, 
                {
                 "gid":248,
                 "height":32,
                 "id":6,
                 "name":"c1",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":928,
                 "y":32
                }, 
                {
                 "gid":248,
                 "height":32,
                 "id":7,
                 "name":"c2",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":416,
                 "y":256
                }, 
                {
                 "gid":248,
                 "height":32,
                 "id":8,
                 "name":"c3",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":0,
                 "y":32
                }, 
                {
                 "gid":248,
                 "height":32,
                 "id":10,
                 "name":"c4",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":160,
                 "y":256
                }, 
                {
                 "gid":248,
                 "height":32,
                 "id":11,
                 "name":"c5",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":544,
                 "y":192
                }, 
                {
                 "gid":642,
                 "height":32,
                 "id":12,
                 "name":"Projektil2",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":64,
                 "y":128
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"items"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 241, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":5,
         "name":"Flag",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[259, 260, 261, 262, 259, 0, 263, 264, 265, 266, 263, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":8,
         "name":"Tonma",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"Tonma"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[267, 268, 269, 268, 267, 0, 270, 271, 272, 271, 270, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":9,
         "name":"Enemy1",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"Enemy1"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[252, 256, 257, 258, 252, 0, 251, 253, 254, 255, 251, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":6,
         "name":"Enemy2",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"Enemy2"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[273, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":7,
         "name":"Enemy3",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"Enemy3"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }],
 "nextlayerid":10,
 "nextobjectid":13,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.2",
 "tileheight":32,
 "tilesets":[
        {
         "columns":18,
         "firstgid":1,
         "image":"maps\/free-swamp-game-tileset-pixel-art\/2 Background\/Background.png",
         "imageheight":324,
         "imagewidth":576,
         "margin":0,
         "name":"Background",
         "spacing":0,
         "tilecount":180,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":10,
         "firstgid":181,
         "image":"maps\/free-swamp-game-tileset-pixel-art\/1 Tiles\/Tileset.png",
         "imageheight":192,
         "imagewidth":320,
         "margin":0,
         "name":"Tileset",
         "spacing":0,
         "tilecount":60,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":241,
         "image":"maps\/Flag\/01.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"01",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":242,
         "image":"maps\/free-swamp-game-tileset-pixel-art\/3 Objects\/Boxes\/6.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"6",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":243,
         "image":"maps\/free-swamp-game-tileset-pixel-art\/3 Objects\/Pointers\/1.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"1",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":244,
         "image":"maps\/free-swamp-game-tileset-pixel-art\/3 Objects\/Pointers\/2.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"2",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":245,
         "image":"maps\/free-swamp-game-tileset-pixel-art\/3 Objects\/Pointers\/3.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"3",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":246,
         "image":"maps\/free-swamp-game-tileset-pixel-art\/3 Objects\/Pointers\/4.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"4",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":247,
         "image":"maps\/free-swamp-game-tileset-pixel-art\/3 Objects\/Stones\/5.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"5",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":248,
         "image":"maps\/Coin\/01.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"01",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":249,
         "image":"maps\/Items\/chest.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"chest",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":250,
         "image":"maps\/Items\/key.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"key",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":251,
         "image":"maps\/Oldg\/oldg_h.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"oldg_h",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":252,
         "image":"maps\/Oldg\/oldg_hh.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"oldg_hh",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":253,
         "image":"maps\/Oldg\/oldg_w1.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"oldg_w1",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":254,
         "image":"maps\/Oldg\/oldg_w2.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"oldg_w2",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":255,
         "image":"maps\/Oldg\/oldg_w3.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"oldg_w3",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":256,
         "image":"maps\/Oldg\/oldg_w11.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"oldg_w11",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":257,
         "image":"maps\/Oldg\/oldg_w22.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"oldg_w22",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":258,
         "image":"maps\/Oldg\/oldg_w33.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"oldg_w33",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":259,
         "image":"maps\/Tonma\/01.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"01",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":260,
         "image":"maps\/Tonma\/02.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"02",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":261,
         "image":"maps\/Tonma\/03.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"03",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":262,
         "image":"maps\/Tonma\/04.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"04",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":263,
         "image":"maps\/Tonma\/06.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"06",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":264,
         "image":"maps\/Tonma\/07.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"07",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":265,
         "image":"maps\/Tonma\/08.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"08",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":266,
         "image":"maps\/Tonma\/09.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"09",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":267,
         "image":"maps\/Enemy1\/04.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"04",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":268,
         "image":"maps\/Enemy1\/05.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"05",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        },
    
        {
         "columns":1,
         "firstgid":269,
         "image":"maps\/Enemy1\/06.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"06",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":270,
         "image":"maps\/Enemy1\/01.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"01",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":271,
         "image":"maps\/Enemy1\/02.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"02",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":272,
         "image":"maps\/Enemy1\/03.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"03",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":273,
         "image":"maps\/Turr\/turr1.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"turr1",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":20,
         "firstgid":274,
         "image":"maps\/Tonma\/05.png",
         "imageheight":512,
         "imagewidth":640,
         "margin":0,
         "name":"05",
         "spacing":0,
         "tilecount":320,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":1,
         "firstgid":594,
         "image":"maps\/Coin\/01.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"01",
         "spacing":0,
         "tilecount":1,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":20,
         "firstgid":595,
         "image":"maps\/Turr\/01.png",
         "imageheight":512,
         "imagewidth":640,
         "margin":0,
         "name":"01",
         "spacing":0,
         "tilecount":320,
         "tileheight":32,
         "tilewidth":32
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.10",
 "width":30
});