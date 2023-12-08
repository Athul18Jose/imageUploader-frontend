import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';


function Header({loggedin}) {
  const navigate = useNavigate()


  const login = loggedin?true:false;

  const logout =()=>{
    
    sessionStorage.clear()
    navigate('/')
    
  }
  return (
    <>
     <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <Link to={'/'}>
          <MDBNavbarBrand>
            <img
              src='https://elementstark.com/woocommerce-extension-demos/wp-content/uploads/sites/2/2016/12/upload.png'
              height='30'
              alt=''
              loading='lazy'
            />
            ImageUploader
          </MDBNavbarBrand>
          </Link>
          <Link>
          {
            login?
            <MDBBtn onClick={logout}>LogOut</MDBBtn>
            :
            <div>
            <Link to={'/login'}>
            <MDBBtn>
                Login 
            </MDBBtn>
            </Link>
            <Link to={'/register'}>
            <MDBBtn className='ms-2'>
                Register 
            </MDBBtn>
            </Link>
          </div>
          }
          </Link>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header