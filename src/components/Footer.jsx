import cls from './Footer.module.css'

const Footer = ()=>{
    return <footer className={`${cls['footer-size']} ${cls['footer-bg-color']} ${cls['flex']} ${cls['flex-center-hor']}`}>
        <div className={`${cls['flex']} ${cls['flex-center']} ${cls['margin-auto']}`}>
        <a href='https://github.com/Adnan-Ahmed07/A-H-Shoping-House'>About us</a>
        <p>Contact us : 01931847414, 01632012060, 01994770830</p>

        </div>
        </footer>
}
export default Footer;