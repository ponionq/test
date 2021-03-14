import React, {useState,useEffect} from 'react';
import VideoList from './components/video_list/video_list';
import Navbar from './components/navbar';
import VideoDetail from './components/video_detail/video_detail';
import styles from './app.module.css';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo,setSelectedVideo] = useState(null);
  
  const selectVideo = (video) => {
    setSelectedVideo(video);
  };
  
  const search = query => {
    // youtube.search(query).then(videos => setVideos(videos));

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search/?part=snippet&maxResults=20&q=${query}&type=video&key=AIzaSyC0idE6awq0zQwFDJOKW1FVFCPnV9uNnuI`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item =>({...item, id:item.id.videoId}))
      )
      .then(items => {
        setVideos(items);
        setSelectedVideo(null);
      })
      .then(items => console.log(query))
      // .then(videos => setVideos(videos))
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
    <section className={styles.content}>
      {selectedVideo && 
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo} />
        </div>
      }
      <div className={styles.list}>
        <VideoList 
            videos={videos} 
            onVideoClick={selectVideo}  
            display = {selectedVideo ?  'list': 'grid'}
        />
      </div>
    </section>
    
      
    

    
  </div>
  </>
 )
}

export default App;