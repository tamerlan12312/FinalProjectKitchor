
const card1 = require("../image/card1.jpg")
const card2 = require("../image/card2.jpg")
const card3 = require("../image/card3.jpg")
const card4 = require("../image/card4.jpg")

interface dataType {
    id:number,
    img:any,
    
}

const data:dataType[] =[
    {
        id:0,
        img:card1,
        
    },
    {
        id:1,
        img:card2,
        
    },
    {
        id:2,
        img:card3,
        
    },
    {
        id:3,
        img:card4,
        
    }
]

export default data