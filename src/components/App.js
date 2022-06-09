import video from "../data/video.js";
import MainVideo from "./MainVideo";
import Button from "./Button.js";
import Comments from "./Comments"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
    <MainVideo video={video}/>
    <h1>{video.title}</h1>
    <p>{video.views} Views | Uploaded {video.createdAt}</p>
    <Button video={video}/>
    <Comments video={video}/>
    
    </div>
  );
}

export default App;
