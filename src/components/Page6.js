import React from "react";
function page6(){
    return(
        <div className="page6" id="page6">
            {/* <h1>Page6</h1> */}
            <div className='middle_container'>
                <div className='nature_loves'>manusha
                    <div>Loves Nature</div>
                </div>
            </div>
            <div>
                <button className="button" onClick={() => window.location.href = "#page1"}>Next</button>
            </div>
        </div>
    )
}
export default page6;