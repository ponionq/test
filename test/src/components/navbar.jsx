import React, { useRef } from 'react';
import './common.css';
const Navbar = ({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        // console.log(inputRef.current.value);
        onSearch(value)
    }
    const onKeyPress = (event) => {
        if(event.key === 'Enter'){
            handleSearch();
        }
    }
    const onclick = () => {
        handleSearch();
    }
    return (
        <div className="search">
            <div className="wrap">
                <h1>
                    <a href="./"><img src="./images/logo.png" alt="로고"/>
                        <span>Youtube</span>
                    </a>
                </h1>
                <div className="searcch_inpbtn">
                    <input ref={inputRef}type="text" className="search-inp" onKeyPress={onKeyPress}/>
                    <button><img src="./images/search.png" alt="검색이미지" onClick={onclick}/></button>
                </div>
            </div>
        </div>
    );

}

export default Navbar;