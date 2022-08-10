import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import resumePath from './../../Experience.md'


const Resume = () => {

    let [file,setFile] = useState("")

    useEffect(()=>{
       
        fetch(resumePath)
        .then((res) => res.text())
        .then((md) => {
            setFile(md);
        });
    },[])

    return (
        <div className="content">
            <ReactMarkdown children={file} />
      </div>
    );
};

export default Resume;
