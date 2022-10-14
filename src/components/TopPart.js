import './TopPart.css'
function TopPart(props){
  return (
    <div className="TopPart">
      <img src={props.avatarUrl} alt="" className="bgcolor" />
      <div className='hello-kitty'>{props.name}</div>
    </div>
  );  
}
export default TopPart