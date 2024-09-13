import classess from './SearchBar.module.css'
import { useState,useRef } from 'react'
const SearchBar = ()=>{
    const [isFocused, setFocused]=useState(false);
    
    const focusHandler = ()=>{
        setFocused(true)
    }
    const blurHandler=()=>{
        setFocused(false)
    }
    const enterHandler = (event)=>{
        if(event.key ==='Enter'){
            // setFocused(false);
            event.target.value = ''
        }
    }
    return (
        <div className={`${classess.container} ${(isFocused)?classess['search-focus']:''}`}>
            <span className={`${classess['material-symbols-outlined'] } ${classess['search-icon']}`}>Search</span>
            <input placeholder='Search' className={`${classess[`search-input`]}`}  onFocus={focusHandler} onBlur={blurHandler} onKeyDown={enterHandler}/>
            
        </div>
    )
}
export default SearchBar;