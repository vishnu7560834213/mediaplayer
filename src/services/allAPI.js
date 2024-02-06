import { commonAPI } from "./commonAPI";
import { serverUrl } from "./serverUrl";

//upload video

export const uploadVideo = async(reqBody)=>{
    //make POST http request "http://localhost:4000/videos" to add videos to the json-server,return response to the add component
    return await commonAPI("POST", `${serverUrl}/videos`, reqBody);
}

//get all videos from the json

export const getAllVideo = async()=>{
    //make GET http request "http://localhost:4000/videos" to get all videos from the json-server,return response to the view component
    return await commonAPI("GET", `${serverUrl}/videos`, "");
}

//get a videos

export const getAVideo = async(id)=>{
    //make GET http request "http://localhost:4000/videos/id" to get all videos from the json-server,return response to the video card component
    return await commonAPI("GET", `${serverUrl}/videos/${id}`, "");
}

//delete a videos

export const deleteVideo = async(id)=>{
    //make DELETE http request "http://localhost:4000/videos/id" to delete videos from the json-server,return response to the video card component
    return await commonAPI("DELETE", `${serverUrl}/videos/${id}`, {});
}

//store watching video history to json server

export const addToHistory = async(videoDetails)=>{
    // make post http request 'http://localhost:4000/history' to store videos to the json-server return response to the videocard component
    return await commonAPI("POST", `${serverUrl}/history`, videoDetails);
}

//GET watching video history to json server
export const getAllHistory = async()=>{
    //make get http request "http://localhost:4000/history" to get videos from json-serveer return response to the videocard component
    return await commonAPI("GET", `${serverUrl}/history`, "");
}

//add  category to json server
export const addToCategory = async(reqBody)=>{
    //make POST http request "http://localhost:4000/categories" to store videos to json-serveer return response to the category component
    return await commonAPI("POST", `${serverUrl}/categories`, reqBody);
}

//get all category from json server
export const getAllCategory = async()=>{
    //make GET http request "http://localhost:4000/categories" to get videos from json-serveer return response to the category component
    return await commonAPI("GET", `${serverUrl}/categories`, "");
}

// delete  all category from json server
export const deleteCategory = async(id)=>{
    //make DELETE http request "http://localhost:4000/categories" to delete videos from json-serveer return response to the category component
    return await commonAPI("DELETE", `${serverUrl}/categories/${id}`, {});
}

// update  a category from json server
export const updateCategory = async(id,body)=>{
    //make PUT http request "http://localhost:4000/categories/id" to update videos to the json-serveer return response to the category component
    return await commonAPI("PUT", `${serverUrl}/categories/${id}`, body);
}

// delete watch history from server
export const deleteHistory = async(id)=>{
    //make delete http request "http://localhost:4000/history" to delete videos from json-serveer return response to the videocard component
    return await commonAPI("DELETE", `${serverUrl}/history/${id}`, {});
}
