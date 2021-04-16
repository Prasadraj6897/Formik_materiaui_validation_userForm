import axios from "axios"
const GETPOSTS = "GETPOSTS";
const PUTPOSTS = "PUTPOSTS";
const UPDATEPOSTS = "UPDATEPOSTS";
const DELETEPOSTS = "DELETEPOSTS";
const LIKEPOSTS = "LIKEPOSTS";

///changed https://localhost:5000/posts to  https://project1-memories.herokuapp.com/posts for online deployment

const url = "https://project1-memories.herokuapp.com/posts"

// const fetchposts = () =>axios.get(url)

let getPosts_ACTION = () => {
    // console.log(userdata)
    return async (dispatch) => {
        
        try{
            let response =await axios.get(url); 
            let payload = response.data
            dispatch({type : GETPOSTS, payload:payload})
        }catch(error){

        }
    } 
}

let put_Posts_ACTION = (newposts) => {
    console.log("newposts", newposts)
    return async (dispatch) => {
        
        try{
            // console.log("url", url)
            let response = await axios.post("https://project1-memories.herokuapp.com/posts", newposts);
            let payload = response.data
            
            dispatch({type : PUTPOSTS, payload:payload})
        }catch(error){

        }
    } 
}

let update_Posts_ACTION = (id, updateposts) => {
    
    return async (dispatch) => {
        
        try{
            // console.log("url", url)
            let response = await axios.patch("https://project1-memories.herokuapp.com/posts"+ '/' + id, updateposts);
            let payload = response.data
            
            dispatch({type : UPDATEPOSTS, payload:payload})
        }catch(error){

        }
    } 
}

let Delete_Posts_ACTION = (id) => {
    
    return async (dispatch) => {
        
        try{
            
             await axios.delete("https://project1-memories.herokuapp.com/posts"+ '/' + id);
             
            
            dispatch({type : DELETEPOSTS, payload:id})
        }catch(error){

        }
    } 
}

let Like_Posts_ACTION = (id) => {
    
    return async (dispatch) => {
        
        try{
            
             const {data} = await axios.patch("https://project1-memories.herokuapp.com/posts"+ '/' + id + '/' + 'likepost');
           
            //  console.log("url", "http://localhost:5000/posts"+ '/' + id + '/' + 'likepost')
            dispatch({type : LIKEPOSTS, payload:data})
        }catch(error){

        }
    } 
}




export {GETPOSTS, PUTPOSTS,UPDATEPOSTS,DELETEPOSTS,LIKEPOSTS, getPosts_ACTION, put_Posts_ACTION, update_Posts_ACTION, Delete_Posts_ACTION, Like_Posts_ACTION}