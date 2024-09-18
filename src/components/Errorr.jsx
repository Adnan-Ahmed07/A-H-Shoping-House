import './Errorr.css'
const Errorr = (props)=>{
    
    return <div className="error-container middle">
        <p className="error-message">{(props.msg)?'Something went wrong':'Invalid URL'}</p>
        <p className="suggestion">{(props.msg)?'Please check your internet connection':'Please Insert correct URL'}</p>
    </div>
}
export default Errorr