//import '../assets'
import { useState } from "react";
import classess from "./navigation.module.css";
import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";

const Navigation = () => {
  const styl = `${classess["nav-bottom"]} ${classess.flex} ${classess["flex-center"]}`;

  const categories = ["Men", "Women"];

  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  // Handler function for category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  
  return (
    <header className={styl}>
      <img src="/Adnan's.png" className={classess["nav-img"]} />
      <nav
        className={`${classess.flex} ${classess["nav-size"]} ${classess["flex-evenly"]} ${classess["nav-style"]} ${classess["box-position-absolute"]}`}
      >
        {/* <a href="http://localhost:5000">Home</a> */}
        <Link to='/'>Home</Link>
        <div
          className={`${classess["flex"]} ${classess["flex-center"]} ${classess["nav-modal"]}`}>
          <Link
            to="/category"
            className={`${classess["nav-category-modal"]}`}
          >
           
            Category
            </Link>
         

          <div className={` ${classess["box-position"]} ${classess["hidden"]}`}>
            <ul>
              <li>
                <Link to="/men">Men</Link>

              </li>
              <li>
              <Link to="/women">Women</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={`${classess.flex} ${classess["flex-center"]} ${classess["margin-left-full"]}`}
      >
        <SearchBar />
        <div
          className={`${classess.flex} ${classess["flex-horizontal-center"]} ${classess["nav-icon-left"]} ${classess["icon"]}`}
        >
          <span
            className={` ${classess.flex} ${classess["material-symbols-outlined"]}`}
          >
            shopping_bag
          </span>
          <span>Bag</span>
        </div>
      </div>
    </header>
  );
};
export default Navigation;
