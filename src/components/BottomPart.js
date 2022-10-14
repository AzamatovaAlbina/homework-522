import "./BottomPart.css"
function BottomPart(props){
    return (
      <div className="BottomPart">
        <div>{props.text}</div>
        <div>{props.date.toLocaleDateString()}</div>
      </div>
    );
    
}
export default BottomPart