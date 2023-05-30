import React from 'react';
import ReactDOM from 'react-dom/client';
import "./sass/style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import AppRouter from './routers/AppRouter';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import configureStore from "./store/configureStore"
import { addBlog } from './actions/blogActions';
import { Provider } from 'react-redux';
const blogImg1 = require("./image/blogImg1.jpg")
const blogImg2 = require("./image/blogImg2.jpg")
const blogImg3 = require("./image/blogImg3.jpg")
const blogImg4 = require("./image/blogImg4.jpg")
const blogImg5 = require("./image/blogImg5.jpg")
const blogImg6 = require("./image/blogImg6.jpg")

const store = configureStore()

store.subscribe(()=>{
  console.log(store.getState());
    
});

store.dispatch(addBlog({title:"Title:",img:blogImg1,desc:"Description:"}))
store.dispatch(addBlog({title:"Title:",img:blogImg2,desc:"Description:"}))
store.dispatch(addBlog({title:"Title:",img:blogImg3,desc:"Description:"}))
store.dispatch(addBlog({title:"Title:",img:blogImg4,desc:"Description:"}))
store.dispatch(addBlog({title:"Title:",img:blogImg5,desc:"Description:"}))
store.dispatch(addBlog({title:"Title:",img:blogImg6,desc:"Description:"}))


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<>
<Provider store={store}>
<AppRouter/>
  <ToastContainer />
</Provider>
</>
  </React.StrictMode>
);


