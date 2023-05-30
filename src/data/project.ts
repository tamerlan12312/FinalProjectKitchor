const projectimg1 = require("../image/projectimg1.jpg")
const projectimg2 = require("../image/projectimg2.jpg")
const projectimg3 = require("../image/projectimg3.jpg")
const projectimg4 = require("../image/projectimg4.jpg")
const projectimg5 = require("../image/projectimg5.jpg")
const projectimg6 = require("../image/projectimg6.jpg")
const projectimg7 = require("../image/projectimg7.jpg")
const projectimg8 = require("../image/projectimg8.jpg")
const projectimg9 = require("../image/projectimg9.jpg")
const projectimg10 = require("../image/projectimg10.jpg")
const projectimg11= require("../image/projectimg11.jpg")

const blogImg1 = require("../image/blogImg1.jpg")
const blogImg2 = require("../image/blogImg2.jpg")
const blogImg3 = require("../image/blogImg3.jpg")
const blogImg4 = require("../image/blogImg4.jpg")
const blogImg5 = require("../image/blogImg5.jpg")
const blogImg6 = require("../image/blogImg6.jpg")

const detailsImg1 = require("../image/projectDetailsImg1.jpg")
const detailsImg2 = require("../image/projectDetailsImg2.jpg")
const detailsImg3 = require("../image/projectDetailsImg3.jpg")
const detailsImg4 = require("../image/projectDetailsImg4.jpg")
const detailsImg5 = require("../image/projectDetailsImg5.jpg")
const detailsImg6 = require("../image/projectDetailsImg6.jpg")


type projectType = {
    id:any,
    img:any,
    category:string,
    imgBlog:any,
    imgDetails:any

}

const projectData:projectType[] = [
    {
        id:0,
        img:projectimg1,
        category:"MINIMALIST",
        imgBlog:blogImg1 ,
        imgDetails:{
            imgDetailsImg1:blogImg1,
            imgDetailsImg2:blogImg2,
            imgDetailsImg3:blogImg3,
            imgDetailsImg4:blogImg4,
            imgDetailsImg5:blogImg5,
            imgDetailsImg6:blogImg6
        }
       
     
    },
    
    {
        id:1,
        img:projectimg2,
        category:"MINIMALIST",
        imgBlog:blogImg2 ,
        imgDetails:{
            imgDetailsImg1:detailsImg1,
            imgDetailsImg2:detailsImg2,
            imgDetailsImg3:detailsImg3,
            imgDetailsImg4:detailsImg4,
            imgDetailsImg5:detailsImg5,
            imgDetailsImg6:detailsImg6
        }

    },
    
    {
        id:2,
        img:projectimg3,
        category:"MINIMALIST",
        imgBlog:blogImg3 ,
        imgDetails:{
            imgDetailsImg1:projectimg1,
            imgDetailsImg2:projectimg2,
            imgDetailsImg3:projectimg3,
            imgDetailsImg4:projectimg4,
            imgDetailsImg5:projectimg5,
            imgDetailsImg6:projectimg6
        }
    },
    


    
    {
        id:3,
        img:projectimg4,
        category:"MODERN",
        imgBlog:blogImg1 ,
        imgDetails:{
            imgDetailsImg1:projectimg7,
            imgDetailsImg2:projectimg8,
            imgDetailsImg3:projectimg9,
            imgDetailsImg4:projectimg10,
            imgDetailsImg5:projectimg11,
            imgDetailsImg6:projectimg3
        }
        
    },
    {
        id:4,
        img:projectimg5,
        category:"MODERN",
        imgBlog:blogImg2 ,
        imgDetails:{
            imgDetailsImg1:blogImg6,
            imgDetailsImg2:blogImg5,
            imgDetailsImg3:blogImg1,
            imgDetailsImg4:blogImg2,
            imgDetailsImg5:blogImg3,
            imgDetailsImg6:blogImg4
        }
        
    },
    {
        id:5,
        img:projectimg6,
        category:"MODERN",
        imgBlog:blogImg3 ,
        imgDetails:{
            imgDetailsImg1:detailsImg3,
            imgDetailsImg2:detailsImg1,
            imgDetailsImg3:detailsImg4,
            imgDetailsImg4:detailsImg2,
            imgDetailsImg5:detailsImg6,
            imgDetailsImg6:detailsImg5
        }
        
    },
    {
        id:6,
        img:projectimg7,
        category:"MODERN",
        imgBlog:blogImg1 ,
        imgDetails:{
            imgDetailsImg1:projectimg2,
            imgDetailsImg2:projectimg4,
            imgDetailsImg3:projectimg5,
            imgDetailsImg4:projectimg6,
            imgDetailsImg5:projectimg11,
            imgDetailsImg6:projectimg10
        }
        
    },



    {
        id:7,
        img:projectimg8,
        category:"SMALL SPACE",
        imgBlog:blogImg1 ,
        imgDetails:{
            imgDetailsImg1:projectimg1,
            imgDetailsImg2:projectimg3,
            imgDetailsImg3:projectimg7,
            imgDetailsImg4:projectimg8,
            imgDetailsImg5:projectimg9,
            imgDetailsImg6:projectimg5
        }
        
    },
    {
        id:8,
        img:projectimg9,
        category:"SMALL SPACE",
        imgBlog:blogImg2 ,
        imgDetails:{
            imgDetailsImg1:detailsImg6,
            imgDetailsImg2:detailsImg5,
            imgDetailsImg3:detailsImg2,
            imgDetailsImg4:detailsImg1,
            imgDetailsImg5:detailsImg3,
            imgDetailsImg6:detailsImg4
        }
        
    },
    {
        id:9,
        img:projectimg10,
        category:"SMALL SPACE",
        imgBlog:blogImg3 ,
        imgDetails:{
            imgDetailsImg1:blogImg3,
            imgDetailsImg2:blogImg2,
            imgDetailsImg3:blogImg1,
            imgDetailsImg4:blogImg3,
            imgDetailsImg5:blogImg5,
            imgDetailsImg6:blogImg6
        }
        
    },
    {
        id:10,
        img:projectimg4,
        category:"SMALL SPACE",
        imgBlog:blogImg1 ,
        imgDetails:{
            imgDetailsImg1:projectimg1,
            imgDetailsImg2:projectimg3,
            imgDetailsImg3:projectimg7,
            imgDetailsImg4:projectimg8,
            imgDetailsImg5:projectimg9,
            imgDetailsImg6:projectimg5
        }
        
    },




    {
        id:11,
        img:projectimg11,
        category:"TOP SELLERS",
        imgBlog:blogImg1 ,
        imgDetails:{
            imgDetailsImg1:projectimg1,
            imgDetailsImg2:projectimg3,
            imgDetailsImg3:projectimg5,
            imgDetailsImg4:projectimg6,
            imgDetailsImg5:projectimg10,
            imgDetailsImg6:projectimg11
        }
        
    },
    {
        id:12,
        img:projectimg2,
        category:"TOP SELLERS",
        imgBlog:blogImg2 ,
        imgDetails:{
            imgDetailsImg1:blogImg6,
            imgDetailsImg2:blogImg5,
            imgDetailsImg3:blogImg4,
            imgDetailsImg4:blogImg3,
            imgDetailsImg5:blogImg2,
            imgDetailsImg6:blogImg1
        }
        
    },
    {
        id:13,
        img:projectimg6,
        category:"TOP SELLERS",
        imgBlog:blogImg3 ,
        imgDetails:{
            imgDetailsImg1:detailsImg3,
            imgDetailsImg2:detailsImg2,
            imgDetailsImg3:detailsImg4,
            imgDetailsImg4:detailsImg5,
            imgDetailsImg5:detailsImg6,
            imgDetailsImg6:detailsImg1
        }
    },
   
]


export default projectData