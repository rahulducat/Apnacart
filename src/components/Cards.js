import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'
import { useDispatch } from 'react-redux';
import Cardsdata from '../components/carts';
import '../style.css';
import { ADD } from '../redux/actions/action';
import { warning } from '@remix-run/router';
import { fontStyle } from '@mui/system';


const Cards = () => {
   
    const [data,setData]=useState(Cardsdata);
    
  const dispatch=useDispatch();
  const send=(e)=>{
    dispatch(ADD(e));
    
  }
  return (
  
  <div className='container mt-3'>
    <h2 className='text-center bg-dark'><img src="https://hips.hearstapps.com/esq.h-cdn.co/assets/17/31/1600x800/landscape-1501527338-es-072817-cool-giant-headphones-for-music.jpg?resize=640:*"/></h2>
    <div style={{backgroundColor:"#FFC107"}}>
    <h2><img src="https://img.freepik.com/premium-photo/positive-person-listening-music-wireless-headphones-enjoying-audio-sound-mp3-song-headset-confident-guy-using-earphones-enjoy-stereo-record-radio-rhythm-studio_482257-40413.jpg?w=740"/></h2>
    
    <div className='text'style={{position:'absolute',left:"850px",bottom:"10rem",top:"28rem"}}>
      <h2 style={{color:"black",fontStyle:"italic"}}><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boat_logo_small.webp?v=1672379935" Link to="/" className="text-decoration-none text-light "></img><br/><br/>
      India's fastest growing<br/> audio& wearables<br/> brand. The most <br/>incredible rangeof <br/>wireless earphones,<br/>earbuds, headphones,<br/> smart watches,<br/> and home audio.
      </h2>
    </div>
    </div>
    <div  className='text-center bg-dark' style={{marginBottom:"1rem"}}>
    < img src="https://reviewed-com-res.cloudinary.com/image/fetch/s--eZYBU6XM--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1579278708948/money-on-headphones.jpg" />
   </div>
    <div className="row d-flex justify-content-center align-items-center  navbar-light bg-warning" >
      {
        data.map((element, id) => {
          return (
            <>
              <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
                <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                  Price : ₹ {element.price}
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center">
                  <Button variant="primary"  onClick={()=> send(element)}
                   className='col-lg-12' >Add to Cart</Button>

                  </div>

                </Card.Body>
              </Card>
            </>
          )
        })
      }

    </div>
  </div>
  )
}

export default Cards
