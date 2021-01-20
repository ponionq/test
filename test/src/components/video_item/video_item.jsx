import React from 'react';
import styles from "./video_item.module.css";
const Videoitem = ({video}) => {

    // 반복하는게 싫다면
    // ({video}) ---props.video 축약
    // 이름을 변경 
    // ({video:itemVidoe})---이름 변경

    return (
        <li className={styles.item}>
            <div>
                <img src={video.snippet.thumbnails.default.url} alt="이미지"/>
                <p>{video.snippet.title}</p>
            </div>
        </li>
    );
}

export default Videoitem;