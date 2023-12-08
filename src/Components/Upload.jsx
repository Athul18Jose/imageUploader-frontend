import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { addImageAPI } from '../Services/allApi'


function Upload() {

  const [imgpreview, setImgpreview] = useState("")

  const [token, setToken] = useState("")

  const [imageDetails, setImageDetails] = useState({
    image: "",
    title: "",
    description: ""
  })

  const handleAdd = async (e) => {
    e.preventDefault()
    const { image, title, description } = imageDetails;
    if (!image || !title || !description) {
      alert("Please fill all fields")
    }
    else {
      const reqBody = new FormData()
      reqBody.append("image", image)
      reqBody.append("title", title)
      reqBody.append("description", description)

      const reqHeader = {
        "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${token}`
      }

      //api request
      const result = await addImageAPI(reqBody, reqHeader)
      console.log(result);

      if (result.status === 200) {
        console.log(result.data);
        alert("Image added successfully")
        setImageDetails({
          image: "",
          title: "",
          description: ""
        })
        
      }
      else {
        alert("title already exist")
      }
    }
  }

  useEffect(() => {
    if (imageDetails.image) {
      setImgpreview(URL.createObjectURL(imageDetails.image))
    }
  }, [imageDetails.image])

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
    else {
      setToken("")
    }
  }, [])

  return (
    <div>
      <h1 style={{ fontFamily: 'IBM Plex Sans' }} className="text-center m-3">Upload Image</h1>
      <Container>
        <Row>
          <Col>
            <div style={{ textAlign: 'right' }}>
              <label className='m-4' style={{ cursor: 'pointer' }}>
                <input onChange={(e) => setImageDetails({ ...imageDetails, image: e.target.files[0] })} type="file" style={{ display: 'none' }} />
                <img className='pic' height={'200px'} width={"100%"} src={imgpreview ? imgpreview : "https://user-images.githubusercontent.com/6290720/91559755-9d6e8c00-e973-11ea-9bde-4b60c89f441a.png"} alt="" />
              </label>
            </div>
          </Col>
          <Col className='mt-5'>
            <MDBInput className='my-3'
              onChange={(e) => setImageDetails({ ...imageDetails, title: e.target.value })}
              value={imageDetails.title}
              label='Title'
              id='controlledValue'
              type='text'
            />
            <MDBInput className='my-3'
              onChange={(e) => setImageDetails({ ...imageDetails, description: e.target.value })}
              value={imageDetails.description}
              label='Description'
              id='controlledValue'
              type='text'
            />
            <MDBBtn onClick={handleAdd}>Upload</MDBBtn>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Upload