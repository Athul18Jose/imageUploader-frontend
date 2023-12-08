import React from 'react'
import Upload from '../Components/Upload'
import ImageCard from '../Components/ImageCard'
import Header from '../Components/Header'

function Dashboard() {
  return (
    <>
      <Header loggedin />
      <div>
        <Upload />
      </div>
      <div>
        <h1 style={{ fontFamily: 'IBM Plex Sans' }} className="text-center m-3">Your Uploads</h1>
        <ImageCard />
      </div>
    </>
  )
}

export default Dashboard