import { v4 as uuid } from "uuid"

export const addBlog =({title,img,desc}:any)=>({
  type:"ADD_BLOG",
  blog:{
    id:uuid(),
    title:title,
    img:img,
    desc:desc
  }
})



export const editBlog =(id:any,update:any)=>({
  type:"UPDATE_BLOG",
  id,
  update
})


export const removeBlog =({id}:any)=>({
  type:"REMOVE_BLOG",
  id:id
})



