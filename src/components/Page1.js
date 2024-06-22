import React from 'react';
// import Button from './Button';

function page1(){
    return (
        <div className='page1' id='page1'>
            <h1>
                <a href='https://manusha8.github.io/resume/'>Welcome</a>
            </h1>
            <div className='middle_container'>
                <div className='nature_loves'>manusha
                    <div>Loves Nature</div>
                </div>
            </div>
            <div>
                <button className='button' onClick={()=> window.location.href= "#page2"}>Next</button>
            </div>
        </div>
    )
}

export default page1;


