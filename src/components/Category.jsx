import { useCallback, useEffect, useState } from "react"
import Footer from "./Footer"
import Navigation from "./Navigation"
import Card from "./Card";
import cls from './Category.module.css'

const Category = ()=>{
    const [category,setCategory] = useState([]);
    const [isFetched, setfetched] = useState(false);
    const fetchData = useCallback(()=>{
        setfetched(false)
         fetch('http://localhost:8000/category').then(res=>res.json()).then(data=>{
            
            setCategory(data)
            setfetched(true)
         })
    })
    useEffect(()=>{
        fetchData();
    },[])

    const newData = category.map((el)=>el.fields)
    console.log(newData)
    return (
        <>
        <Navigation/>
        <div className= {`${cls['flex']}`}>
            <div className={`${cls['category-filter-size']}`}>price</div>
            <div className={` ${cls['card-container']} ${cls['grid']} ${cls['grid-center']}`}>
                { category.map((el)=>{
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