import React from 'react';


function page3(){
    return (
        <div className='page3' id='page3'>
            {/* <h1>Page3</h1> */}
            <div className='middle_container'>
                <div className='nature_loves'>manusha
                    <div>Loves Nature</div>
                </div>
            </div>
            <div>
                <button className='button' onClick={() => window.location.href = "#page4"}>Next</button>
            </div>
        </div>
    )
}

export default page3