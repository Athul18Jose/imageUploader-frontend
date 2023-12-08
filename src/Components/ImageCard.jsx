import React, { useEffect, useState } from 'react'
import './Card.css'
import { userImagesAPI } from '../Services/allApi'
import { baseurl } from '../Services/baseUrl'

function ImageCard() {

    const [userImages,setUserImages]= useState([])

const getUserImages =async()=>{
    const result = await userImagesAPI()
    console.log(result);
    if(result.status === 200){
        setUserImages(result.data)
    }
    else{
        alert("Error")
    }
}

useEffect(()=>{
    getUserImages()
},[])

    return (
        <>
            <div class="gallery-image">
                {
                    userImages.length>0?userImages.map((image)=>(
                        <div class="img-box">
                    <img src={image?`${baseurl}/uploads/${image?.image}`:null} alt="" />
                    <div class="transparent-box">
                        <div class="caption">
                            <p>{image.title}</p>
                            <p class="opacity-low">{image.description}</p>
                        </div>
                    </div>
                </div>
                    )):<h1>Start Uploading</h1>
                }
            </div>
        </>
    )
}

export default ImageCard