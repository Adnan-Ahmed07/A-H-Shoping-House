//import '../assets'
import classess from './navigation.module.css'
import SearchBar from './SearchBar.jsx'
const Navigation = ()=>{
    const styl = `${classess['nav-bottom']} ${classess.flex} ${classess['flex-center']}`
    return (
        <header className = {styl}>
            <img src="/Adnan's.png" className={classess['nav-img']}/>
            <nav className={`${classess.flex} ${classess['nav-size']} ${classess['flex-evenly']} ${classess['nav-style']}`}>      
                <a href="">Home</a>
                <a href="">Category</a>
                
            </nav>
        <SearchBar/>
        <span className={` ${classess.flex} ${classess['material-symbols-outlined']} ${classess['nav-icon-left']}`}>shopping_bag</span>
        </header>
    )
}
export default Navigation