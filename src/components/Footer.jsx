import cls from './Footer.module.css'

const Footer = ()=>{
    return <footer className={`${cls['footer-size']} ${cls['footer-bg-color']} ${cls['flex']} ${cls['flex-justify-between']}`}>
        {/* <div className={`${cls['flex']} ${cls['flex-left']} ${cls['margin-auto']}`}>
        <a href='https://github.com/Adnan-Ahmed07/A-H-Shoping-House'>About us</a>
        <p>Contact us : 01931847414, 01632012060, 01994770830</p>

        </div> */}
        <div className={`${cls['font']}`}>
            <h3>ONLINE SHOPPING</h3>
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Home & Living</li>
                <li>Beauty</li>
                <li>Gift Card</li>
                <li>Adnan's Shopping House</li>
            </ul>
        </div>
            <div className={`${cls['flex-self-center']}`}>
            <a>Contact Us</a>
            <p>01931847414, 01632012060, 01994770830</p>

            </div>
        <div className={`${cls['font']} ${cls['margin-right']}`}>
            <h3>CUSTOMER POLICIES</h3>
            <ul>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Returns</li>
                <li>Terms Of Use</li>
                <li>Track Orders</li>
                <li>Shipping</li>
                <li>Cancellation</li>
            </ul>
        </div>

        </footer>
}
export default Footer;