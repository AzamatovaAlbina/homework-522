import "./App.css";
import BottomPart from "./components/BottomPart";
import TopPart from "./components/TopPart";
const comment = [
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl:
        "https://i.pinimg.com/736x/1e/58/76/1e5876f5d9e9ae637f54565bf2051e5e.jpg",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl:
        "https://imageio.forbes.com/specials-images/imageserve/09zFfq433L08b/960x960.jpg?format=jpg&width=960",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2CIDapM-a9OkoYGdndeyc6-zpA6z5rMsD5mZmhCuU8F4XfWNnq8xOU2QRJvT2BWvCV4&usqp=CAU",
    },
  },
];

function App() {
  return (
    <div className="App">
      {comment.map((item) => (
        <div className="container">
          <TopPart avatarUrl={item.author.avatarUrl}
          name={item.author.name}/>
          <BottomPart text={item.text}
          date={item.date}/>
        </div>
      ))}
    </div>
  );
}

export default App;
