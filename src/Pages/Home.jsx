import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import { allImagesAPI } from '../Services/allApi'
import { baseurl } from '../Services/baseUrl'



function Home() {

    const [islogin, setLogin] = useState(false)

    const [allImages, setAllImages] = useState([])
    console.log(allImages);

    const getAllImages = async () => {
        const result = await allImagesAPI()
        if (result.status === 200) {
            setAllImages(result.data)
        }
        else {
            alert("Error")
        }
    }


    useEffect(() => {
        getAllImages()
        if (sessionStorage.getItem('token')) {
            setLogin(true)
        } else {
            setLogin(false)
        }
    }, [])
    return (
        <>
            <Header loggedin={islogin} />
            <div className='text-center m-4'>
                <img width={'30%'} src="https://elementstark.com/woocommerce-extension-demos/wp-content/uploads/sites/2/2016/12/upload.png" alt="" />
                <h1 style={{ fontFamily: 'IBM Plex Sans' }}>Image Uploader</h1>
                {
                    islogin ?
                        <Link to={'/dashboard'}>
                            <MDBBtn className='m-2'>Manage Your Uplloads</MDBBtn>
                        </Link>
                        :
                        <Link to={'/login'}>
                            <MDBBtn className='m-2'>Upload Image</MDBBtn>
                        </Link>
                }
            </div>
            <div class="gallery-image">
            {
                allImages.length > 0 ?
                    allImages.map((images) => (
                        
                            <div class="img-box">
                                <img src={images?`${baseurl}/uploads/${images?.image}`:null} alt="" />
                                <div class="transparent-box">
                                    <div class="caption">
                                        <p>{images.title}</p>
                                        <p class="opacity-low">{images.description}</p>

                                    </div>
                                </div>
                            </div>
                        
                    ))
                    : "Empty Gallery"
            }
            </div>

        </>
    )
}

export default Home