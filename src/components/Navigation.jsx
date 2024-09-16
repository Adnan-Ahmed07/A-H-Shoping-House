//import '../assets'
import { useState } from "react";
import classess from "./navigation.module.css";
import SearchBar from "./SearchBar.jsx";
const Navigation = () => {
  const styl = `${classess["nav-bottom"]} ${classess.flex} ${classess["flex-center"]}`;
  const [isHover, setHover] = useState(false);
  const mouseLeaveHandler = () => {
    setHover(false);
  };
  const mouseEnterHandler = () => {
    setHover(true);
  };
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
        <a href="http://localhost:5000">Home</a>
        <div
          className={`${classess["flex"]} ${classess["flex-center"]} ${classess["nav-modal"]}`}>
          <a
            href="http://localhost:5000/category"
            className={`${classess["nav-category-modal"]}`}
          >
            Category
          </a>

          <div className={` ${classess["box-position"]} ${classess["hidden"]}`}>
            <ul>
              <li>
                <a href="http://localhost:5000/men">Men</a>
              </li>
              <li>
                <a href="http://localhost:5000/women">Women</a>
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
