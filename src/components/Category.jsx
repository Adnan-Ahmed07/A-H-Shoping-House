import { useCallback, useEffect, useState } from "react"
import Footer from "./Footer"
import Navigation from "./Navigation"
import Card from "./Card";

const Category = ()=>{
    const [category,setCategory] = useState({});
    const fetchData = useCallback(()=>{
         fetch('http://localhost:8000/category').then(res=>res.json()).then(data=>{
            setCategory(data.fields)
         })
    })
    useEffect(()=>{
        fetchData();
    },[fetchData])
    return (
        <>
        <Navigation/>
        <div className= {`${cls['flex']}`}>
            <div className={`${cls['category-filter-size']}`}></div>
            <div >
                <Card product = {category}></Card>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Category