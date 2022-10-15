import "./Block.css";

function Block(props) {
  const classes = props.className + " block"; // // this is my propject eeeeevvvv deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
  return <div className={classes}>{props.children}</div>;
}
export default Block;
