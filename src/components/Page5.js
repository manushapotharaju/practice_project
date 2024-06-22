import React from "react";

function page5() {
    return (
        <div className='page5' id='page5'>
            {/* <h1>Page5</h1> */}
            <div className='middle_container'>
                <div className='nature_loves'>manusha
                    <div>Loves Nature</div>
                </div>
            </div>
            <div>
                <button className='button' onClick={() => window.location.href = "#page6"}>Next</button>
            </div>
        </div>
    )
}
export default page5