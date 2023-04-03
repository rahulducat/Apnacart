import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelect } from '@mui/base';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { Table } from '@mui/material';
import { DLT } from '../redux/actions/action';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Header = () => {
  const [price ,setPrice]=useState(0);
  const getdata = useSelector((state)=> state.cartreducer.carts);
   console.log(getdata);
  const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const total=()=>{
    let price=0;
    getdata.map((ele,k)=>{
        price=ele.price*ele.qnty+price
    });
    setPrice(price);
   }
  const handleClose = () => {
    setAnchorEl(null);
  };
const dlt=(id)=>{
  dispatch(DLT(id))
}
useEffect(()=>{
  total();
 },[total])
  return (
    <>
     <Navbar className="navbar navbar-light bg-warning" style={{height:"60px"}}>
        <Container>
            
          <NavLink to="/" className="text-decoration-none text-light mx-4"><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boat_logo_small.webp?v=1672379935" Link to="/" className="text-decoration-none text-light "></img></NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-dark ">Home</NavLink>
          </Nav>
          
          <Badge  badgeContent={getdata.length} color="primary"  id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
      <i className="fa-sharp fa-solid fa-cart-shopping text-light" style={{fontSize:25,cursor:'pointer'}} ></i>
    </Badge>
    <Menu 
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          getdata.length ?
          <div className='card_details' style={{width:"20rem",padding:"10"}}>
<Table>
  <thead>
    <tr>
      <th>  Photos</th>
<th>Restaurant Name</th>
    </tr>
  </thead>
  <tbody>
    {
      getdata.map((e)=>{
        return(
          <>
          <tr>
            <td>
            <NavLink to={`/cart/${e.id}`}  onClick={handleClose}><img src={e.imgdata} style={{width:"5rem",height:"5rem",marginLeft:"10px",borderRadius:"2px",cursor:"pointer"}}/>
            </NavLink>
            </td>
            <td>
              <p>{e.rname}</p>
              <p> price  : ₹{e.price}</p>
              <p>Quantity : {e.qnty}</p>
              <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                <i className='fas fa-trash smalltrash'>
                </i>
              </p>
            </td>
            <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
            <i className='fas fa-trash largetrash'></i>
            </td>
          </tr>
          </>
        )
      })
    }
    <p className='text-center'>Total : ₹ {price}</p>
  </tbody>
</Table>
          </div>:
            <div className='card_details'>
            <i className='fas fa-close' onClick={handleClose} style={{ position:"absolute", fontSize: 25, cursor: "pointer" ,left:"140px" }} ></i>
            <p className='emptycart' style={{padding:20 ,textAlign:"center"}}>Your carts is empty</p>
            <p className='sad' style={{padding:20 ,textAlign:"center"}}>(╥_╥)</p>
                    </div>
        }
      
      </Menu>
      <Form className="d-flex mx-4 " >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
