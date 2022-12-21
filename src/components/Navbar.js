import React from "react";

export default function Navbar({handleQuery}) {

    const allList = document.querySelectorAll('.navbar li')
    const allListArray = Array.from(allList)
    allListArray.forEach(element => {
        element.addEventListener('click',(e)=>{
            handleQuery(element.innerText)
            element.classList.add('active-nav-item')
        })
    })
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>Sports</li>
          <li>Politics</li>
          <li>Technology</li>
          <li>Science</li>
          <li>Health</li>
        </ul>
      </nav>
    </>
  );
}
