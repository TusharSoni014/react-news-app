import React, { useRef } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

export default function Header({handleQuery}) {

    const inputSearch = useRef(null)

    function sendData(e){
        e.preventDefault()
        handleQuery(inputSearch.current.value)
        inputSearch.current.value = ''
    }

  return (
    <div className="header">

      <div className="heading">
        <h1>Taza <span style={{color:'rgb(255, 0, 123)'}}>खबर</span></h1>
        <form onSubmit={sendData} className="search-news">
          <input ref={inputSearch} type="text" placeholder="Search..." />
          <button type="submit">
            <BiSearchAlt2 className="search-icon" />
          </button>
        </form>
      </div>
    </div>
  );
}
