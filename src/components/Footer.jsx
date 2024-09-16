import cls from './Footer.module.css'

const Footer = ()=>{
    return <footer className={`${cls['footer-size']} ${cls['footer-bg-color']} ${cls['flex']} ${cls['pos-end']}`}>
        <a href='https://github.com/Adnan-Ahmed07/A-H-Shoping-House'>About us</a>
        </footer>
}
export default Footer;