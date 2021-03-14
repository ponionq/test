import React from 'react';
import styles from "./video_item.module.css";
const Videoitem = ({video,video:{snippet},onVideoClick, display}) => {

    // 반복하는게 싫다면
    // ({video}) ---props.video 축약
    // 이름을 변경 
    // ({video:itemVidoe})---이름 변경
    const displayType = display == 'list'  ?  styles.list : styles.grid;
    return (
        <li className={`${styles.item} ${displayType}`} onClick={() => onVideoClick(video)}>
            <div>
                <img src={video.snippet.thumbnails.default.url} alt="이미지"/>
                <p>{video.snippet.title}</p>
            </div>
        </li>
    );
}

export default Videoitem;