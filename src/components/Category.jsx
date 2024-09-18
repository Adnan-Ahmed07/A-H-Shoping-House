import { useCallback, useEffect, useRef, useState } from "react"
import Footer from "./Footer"
import Navigation from "./Navigation"
import Card from "./Card";
import cls from './Category.module.css'

const Category = (props)=>{
    const [category,setCategory] = useState([]);
    const [changeValue, setValue] = useState(0);
    const fetchData = useCallback(()=>{

         fetch(props.url).then(res=>res.json()).then(data=>{
            
            setCategory(data)
 
         })
    })
    useEffect(()=>{
        fetchData();
    },[fetchData])
    const changeValueHandler = (event)=>{
       setValue(event.target.value)
    }

    const newData = category.map((el)=>el.fields)
    console.log(newData)
    return (
        <>
        <Navigation/>
        <div className= {`${cls['flex']}`}>
            <div className={`${cls['category-filter-size']} ${cls['margin-top']} ${cls['margin-left']}`}>
                <p>price</p>
                <input type="range" min={0} max={50000} onChange={changeValueHandler} step={500}/>
                <p>৳0-৳{changeValue}</p>
                </div>
            <div className={` ${cls['card-container']} ${cls['grid']} ${cls['grid-center']}`}>
                { category.map((el)=>{
                    if(el.fields.product_price<=changeValue || changeValue===0)
                    return <Card product={el.fields}></Card>
                })}
                {/* <Card product = {category}></Card> */}
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Category