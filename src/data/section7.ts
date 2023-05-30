const project1 = require("../image/project1.jpg")
const project2 = require("../image/project2.jpg")
const project3 = require("../image/project3.jpg")
const project4 = require("../image/project4.jpg")
const project5 = require("../image/project5.jpg")
const project6 = require("../image/project6.jpg")

interface projectType {
    id:number,
    img:any
}

const project:projectType[] = [
    { 
         id:0,
        img:project1
    },
    { 
         id:1,
        img:project2
    },
    { 
         id:2,
        img:project3
    },
    { 
         id:3,
        img:project4
    },
    { 
         id:4,
        img:project5
    },
    { 
         id:5,
        img:project6
    }
]

export default project