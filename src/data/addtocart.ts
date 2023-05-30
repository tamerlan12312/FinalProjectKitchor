const cart1 = require("../image/cart1.jpg")
const cart2 = require("../image/cart2.jpg")
const cart3 = require("../image/cart3.jpg")
const cart4 = require("../image/cart4.jpg")
const cart5 = require("../image/cart5.jpg")
const cart6 = require("../image/cart6.jpg")
const cart7 = require("../image/cart7.jpg")
const cart8 = require("../image/cart8.jpg")
const cart9 = require("../image/cart9.jpg")
const cart10 = require("../image/cart10.jpg")
const cart11 = require("../image/cart11.jpg")
const cart12 = require("../image/cart12.jpg")
const cart13 = require("../image/cart13.jpg")
const cart14 = require("../image/cart14.jpg")
const cart15 = require("../image/cart15.jpg")
const cart16 = require("../image/cart16.jpg")
const cart17 = require("../image/cart17.jpg")
const cart18 = require("../image/cart18.jpg")
const cart19 = require("../image/cart19.jpg")


interface cartType {
    id:any,
    img:any,
    price:number,
    title:string,
    price2?:any,
    category?:string,
    title3:string
}

const cartData:cartType[]=[
    {
        id:1,
        img:cart1,
        price:28.28,
        title:"Awesome Paper Gloves",
        category:"Accessories",
        title3:"HEAVY-DUTY-PAPER-BAG-05028252"
    },
    {
        id:2,
        img:cart2,
        price:235.47,
        title:"Heavy Duty Linen Watch",
        category:"Music",
        title3:"HEAVY-DUTY-PAPER-BAG-05028252"
    },
    {
        id:3,
        img:cart3,
        price:595.07,
        price2:"$"+235.00,
        title:"Awesome Iron Plate",
        category:"Clothing",
        title3:"HEAVY-DUTY-PAPER-BAG-05028252"
    },
    {
        id:4,
        img:cart4,
        price:914.11,
        title:"Heavy Duty Copper Clock",
        category:"Hodies",
        title3:"GORGEOUS-LINEN-COMPUTER-11566977"
    },
    {
        id:5,
        img:cart5,
        price:452.71,
        title:"Mediocre Linen Plate",
        category:"Music",
        title3:"GORGEOUS-LINEN-COMPUTER-11566977"
    },
    {
        id:6,
        img:cart6,
        price:873.5,
        price2:"$"+135.00,
        title:"Mediocre Copper Hat",
        category:"Music",
        title3:"GORGEOUS-LINEN-COMPUTER-11566977"
    },
    {
        id:7,
        img:cart7,
        price:571.14,
        price2:"$"+99.99,
        title:"Lightweight Silk Hat",
        category:"Uncategorized",
        title3:" INCREDIBLE-PLASTIC-WALLET-11935964"
    },
    {
        id:8,
        img:cart8,
        price:691.69,
        title:"Incredible Concrete Clock",
        category:"Hodies",
        title3:" INCREDIBLE-PLASTIC-WALLET-11935964"
    },
    {
        id:9,
        img:cart9,
        price:402.67,
        title:"Practical Iron Car",
        category:"Clothing",
        title3:" INCREDIBLE-PLASTIC-WALLET-11935964"
    },
    {
        id:10,
        img:cart10,
        price:636.32,
        title:"Enormous Concrete Wallet",
        category:"Clothing",
        title3:"HEAVY-DUTY-PAPER-BAG-05028252"
    },
    {
        id:11,
        img:cart11,
        price:144.29,
        title:"Sleek Steel Wallet",
        category:"Uncategorized",
        title3:"HEAVY-DUTY-PAPER-BAG-05028252"
    },
    {
        id:12,
        img:cart12,
        price:354.35,
        price2:"$"+127.99,
        title:"Fantastic Leather Wallet",
        title3:"HEAVY-DUTY-PAPER-BAG-05028252"
    },
    {
        id:13,
        img:cart13,
        price:86.80,
        title:"Gorgeous Wool Bench",
        category:"Clothing",
        title3:"GORGEOUS-LINEN-COMPUTER-11566977"
    },
    {
        id:14,
        img:cart14,
        price:919.59,
        title:"Gorgeous Linen Computer",
        category:"Accessories",
        title3:"GORGEOUS-LINEN-COMPUTER-11566977"
    },
    {
        id:15,
        img:cart15,
        price:50.11,
        title:"Heavy Duty Paper Bag",
        category:"Hodies",
        title3:"GORGEOUS-LINEN-COMPUTER-11566977"
    },
    {
        id:16,
        img:cart16,
        price:319.82,
        title:"Incredible Plastic Wallet",
        category:"Hodies",
        title3:" INCREDIBLE-PLASTIC-WALLET-11935964"
    },
    {
        id:17,
        img:cart17,
        price:691.35,
        title:"Practical Bronze Bottle",
        category:"Accessories",
        title3:" INCREDIBLE-PLASTIC-WALLET-11935964"

    },
    {
        id:18,
        img:cart18,
        price:760.92,
        title:"Small Concrete Plate",
        category:"Hodies",
        title3:" INCREDIBLE-PLASTIC-WALLET-11935964"
    },
    {
        id:19,
        img:cart19,
        price:235.47,
        title:"Fantastic Rubber Bottle",
        category:"Accessories",
        title3:" INCREDIBLE-PLASTIC-WALLET-11935964"
    },
    
]

export default cartData