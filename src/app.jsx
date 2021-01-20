import React, {useState,useEffect} from 'react';
import VideoList from './components/video_list/video_list';
import Navbar from './components/navbar';

function App() {
  const [videos, setVideos] = useState([]);
  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search/?part=snippet&maxResults=20&q=${query}&type=video&key=AIzaSyC0idE6awq0zQwFDJOKW1FVFCPnV9uNnuI`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item =>({...item, id:item.id.videoId}))
      )
      .then(items => setVideos(items))
      .then(items => console.log(query))
      .catch(error => console.log('error', error));
  }
  
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyC0idE6awq0zQwFDJOKW1FVFCPnV9uNnuI", 
    requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);
 return(
  <> 
  <Navbar onSearch={search}/> 
  <div className="wrap">
    <VideoList videos={videos}/>
  </div>
  </>
 )
}

export default App;