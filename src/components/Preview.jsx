import cls from './Preview.module.css'

const Preview = (props)=>{
    
    return (
        <div className = {`${cls['preview-width']} ${(props.category.category===1)?cls['preview-color-men']:cls['preview-color-women']} ${cls['preview-separate']}`}>
            
        </div>
    )
}
export default Preview