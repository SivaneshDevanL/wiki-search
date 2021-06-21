import React, { useState } from 'react';
import './home.css'

export default function App(){
    const [link,setLink]=useState()
    const [linkname,setLinkname]=useState()
    var t;
    function makeapicall(e){
        let val=e.target.value
        if(val){
        fetch('https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=opensearch&search='+val)
        .then(x=>x.json())
        .then(y=>{setLinkname(y[1]);
            setLink(y[3]);
        })
    }
    else{
        setLink()
        setLinkname()
    }
    }
    function call(e){
        clearTimeout(t)
        t=setTimeout(()=>{
            makeapicall(e);
        },400)
    }
    return(
        <>
        <h3 className="wiki">Wiki Search</h3>
        <div className="wiki">
        <input onInput={call} /></div>
        <div id="link">
            {link&&link.map((val,i)=>(
               <div className="suggestion"> 
              <a href={val} target="_blank" rel="noreferrer" >{linkname[i]}</a></div>
            ))}
        </div>
        </>
    )
}