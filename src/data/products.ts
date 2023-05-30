const products1 = require("../image/products1.jpg")
const products2 = require("../image/products2.jpg")
const products3 = require("../image/products3.jpg")
const products4 = require("../image/products4.jpg")
const products5 = require("../image/products5.jpg")
const products6 = require("../image/products6.jpg")


interface productType {
    id:any,
    img:string,
    img2:string,
    price:number,
    title:string,
    title2:string,
    title3:string
}

const productsData:productType[] = [
    {
         id:0,
         img:products1,
         price:502.11,
         title:"Heavy Duty Paper Bag",
         title2:"HOODIES",
         img2:products4,
         title3:"HEAVY-DUTY-PAPER-BAG-05028252"
    },
    {
         id:1,
         img:products2,
         price:919.59,
         title:"Gorgeous Linen Computer",
         title2:"UNCATEGORIZED",
         img2:products5,
         title3:"GORGEOUS-LINEN-COMPUTER-11566977"
    },
    {
         id:2,
         img:products3,
         price:319.82,
         title:"Incredible Plastic Wallet",
         title2:"UNCATEGORIZED",
         img2:products6,
         title3:" INCREDIBLE-PLASTIC-WALLET-11935964"
    }
]
export default productsData