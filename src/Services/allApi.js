const { baseurl } = require("./baseUrl");
const { commonApi } = require("./commonApi");

//register api
export const registerAPI =  async(reqBody)=>{
    return await commonApi("post",`${baseurl}/user/register`,reqBody,"")
}

//login api
export const loginAPI =  async(reqBody)=>{
    return await commonApi("post",`${baseurl}/user/login`,reqBody,"")
} 

//add image api
export const addImageAPI= async(reqBody,reqHeader)=>{
    return await commonApi("post",`${baseurl}/image/add`,reqBody,reqHeader)
}

//get all images
export const allImagesAPI = async()=>{
    return await commonApi("get",`${baseurl}/images`,"","")
}

//get user images
export const userImagesAPI = async()=>{
    return await commonApi("get",`${baseurl}/user/images`,"","")
}