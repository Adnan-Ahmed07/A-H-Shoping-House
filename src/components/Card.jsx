import cls from './Card.module.css'

const Card = (props)=>{
    return (
    <div className={`${cls['container']} ${cls['card-border-radius']} ${cls['flex']} ${cls['flex-center']}`}>
        <img src={props.product.product_image_url} className={`${cls['card-img']}`} ></img>
        <div className={`${cls['card-content']} ${cls['flex']} ${cls['flex-center']}`}>
        <h3>{props.product.product_name}</h3>
        <p>৳{props.product.product_price}</p>
        </div>

    </div>
    )
}
export default Card;
