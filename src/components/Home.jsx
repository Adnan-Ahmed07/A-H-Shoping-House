import Navigation from './Navigation.jsx'
import {Splide,SplideSlide,SplideTrack} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Preview from './Preview.jsx'
import { useState,useEffect } from 'react'



const Home = ()=>{
    const [men,setMen] = useState({})
    const [women,setWomen] = useState({})
    useEffect(()=>{
        const f = fetch('http://localhost:8000').then(res=>res.json()).then(data=>{
            
            setMen(data[0].fields)
            setWomen(data[1].fields)
        })
    },[])
    console.log(men)
    return (
            <>
            <Navigation/>


            <Splide aria-lable = "my fav img" hasTrack = {false}>
                {/* <div className='splide__toggle__play'>
                </div> */}
                <SplideTrack>
            <SplideSlide>
                <img src='https://github.com/Adnan-Ahmed07/Adnan-s/blob/main/project/images/2.jpg?raw=true' alt='image 1'/>
            </SplideSlide>
            <SplideSlide>
                <img src='https://github.com/Adnan-Ahmed07/Adnan-s/blob/main/project/images/3.jpg?raw=true' alt='image 1'/>
            </SplideSlide>
            

                </SplideTrack>
            </Splide>
            <Preview category = {men}/>
            <Preview category = {women}/>
            </>
    )
}
export default Home;