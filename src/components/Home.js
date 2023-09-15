import React , {useState ,useEffect} from 'react'
import {Row ,Col} from 'react-bootstrap';
import Cards from './Cards'
import {hotelList} from '../actions/homeAction'
import { useDispatch , useSelector} from 'react-redux';
function Home() {

    // create state to hold data from api call
    // const [hotel,setHotel]=useState([])

    // function to get api call
    // const fetchData = async ()=>{
    //     const result = await fetch('/restaurants.json')
    //     result.json().then(
    //         data =>{
    //             setHotel(data.restaurants);
    //         }
    //     )
        
    // }
    // console.log(hotel);

    const dispatch = useDispatch()

    useEffect(() => {
      // fetchData()
      dispatch(hotelList())
    
      
    }, [])

    const {hotel} =useSelector(state=>state.hotelReducer)
    console.log(hotel);
    


  return (
    <Row>
        {
          hotel.map(item=>(
            <Col className='py-3 p-5' sm={6} md={4} lg={3} >
                <Cards hotels={item} />
                </Col>
            
          ))  
          
        }
        
        
    </Row>
  )
}

export default Home