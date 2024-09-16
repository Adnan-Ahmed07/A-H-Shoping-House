import cls from './Card.module.css'

const Card = (props)=>{
    return (
    <div className={`${cls['container']} ${cls['card-border-radius']} ${cls['flex']} ${cls['flex-center']}`}>
        <img src={props.product.product_img_url} ></img>
        

    </div>
    )
}
export default Card;
