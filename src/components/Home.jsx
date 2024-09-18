import Navigation from './Navigation.jsx'
import {Splide,SplideSlide,SplideTrack} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Preview from './Preview.jsx'
import { useState,useEffect, useCallback } from 'react'
import Footer from './Footer.jsx'
import Errorr from './Errorr.jsx'


const Home = ()=>{
    const [men,setMen] = useState({})
    const [women,setWomen] = useState({})
    const[isFetched,setFetch]=useState(true)
    const f = useCallback(()=>{
        fetch('http://localhost:8000').then(res=>res.json()).then(data=>{
            setFetch(true)
            setMen(data[0].fields)
            setWomen(data[1].fields)
        }).catch(()=>{
            setFetch(false)
        })
    },[])
    useEffect(()=>{
        f()
    },[])
    let el;
    if(isFetched){
        el =                    <>
        <Navigation/>


<Splide aria-lable = "my fav img" options={{type:'loop',autoplay:true,interval:2000}}>
            <SplideSlide>
                <img src='https://th.bing.com/th/id/R.bbad446f66af6403bf23a98a8634459b?rik=WEPtEkLBmyrsiA&pid=ImgRaw&r=0' />
            </SplideSlide>
            <SplideSlide>
                <img src='https://wpbingosite.com/wordpress/kooto/wp-content/uploads/2023/01/slider-16.jpg' />
            </SplideSlide>
            <SplideSlide>
                <img src='https://wpbingosite.com/wordpress/kooto/wp-content/uploads/2023/01/slider-8.jpg' />
            </SplideSlide>
            <SplideSlide>
                <img src='https://wpbingosite.com/wordpress/kooto/wp-content/uploads/2023/01/slider-7.jpg'/>
            </SplideSlide>
        </Splide>
        <Preview category = {men}/>
        <Preview category = {women}/>
        <Footer/>
        </>
    }
    else{
        el = <Errorr msg = {1}/>
    }
    return (
        el
    )
}
export default Home;