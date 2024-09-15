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
                <a href="" onMou>Category</a>

            <div className ={`${classess['box-position']} ${classess['nav-category-modal-width']}`}>
            <ul>
                    <li>Men</li>
                    <li>Women</li>
                </ul>
            </div>
                
            </nav>
        <div className={`${classess.flex} ${classess['flex-center']} ${classess['margin-left-full']}`}>
        <SearchBar/>
        <div className={`${classess.flex} ${classess['flex-horizontal-center']} ${classess['nav-icon-left']} ${classess['icon']}`}>
        <span className={` ${classess.flex} ${classess['material-symbols-outlined']}`}>shopping_bag</span>
        <span>Bag</span>
        </div>
        </div>
        </header>
    )
}
export default Navigation