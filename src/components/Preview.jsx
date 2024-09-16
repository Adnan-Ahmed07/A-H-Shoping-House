import cls from './Preview.module.css'

const Preview = (props)=>{
   
    return (
        <div className = {`${cls['preview-width']} ${cls['flex']} ${cls['flex-center']} ${cls['flex-justify-center']} ${(props.category.category===1)?cls['preview-color-men']:cls['preview-color-women']} ${cls['preview-separate']}`}>
            <div className={`${cls['preview-box']} ${(props.category.category===1)?cls['preview-box-border-men'] : cls['preview-box-border-women']}`}>
                <div className={`${cls['preview-img-fit']} ${cls['flex']} ${cls['flex-center']} ${(props.category.category===2)?cls['flex-justify-right']:''}`}>
                    <img src={props.category.product_image_url}/>
                    <div className = {`${cls['preview-text-margin']}`}>
                    <h3>{props.category.product_name}</h3>
                    <p className={`${cls['preview-text']}`}>{props.category.product_description}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Preview