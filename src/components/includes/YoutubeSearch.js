import React, {useRef} from 'react'

function YoutubeSearch({onSearch}) {
    const inputRef = useRef()
    const handSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }
    const onKeyPress = (event) => {
        if(event.key === "Enter"){
            // console.log("onKeyPress");
            handSearch();
        }
    }
        const onClick = () => {
            // console.log("onclick");
            handSearch();
        }
    
  return (
            <div className="youtube__search">
        <h2>검색하기</h2>
        <input
        ref={inputRef}
        type="search"
        placeholder="검색하세요"
        onKeyPress={onKeyPress}/>
        <button type="submit"
        onClick={onClick}>검색</button>
    </div>
  )
}

export default YoutubeSearch