import React from "react";

function page2() {
  return (
    <div className="page2" id="page2">
      {/* <h1>Page2</h1> */}
      <div className='middle_container'>
                <div className='nature_loves'>manusha
                    <div>Loves Nature</div>
                </div>
            </div>
      <div>
        <div>
            <button className="button" onClick={() => window.location.href = "#page3"}>Next</button>
        </div>

      </div>
    </div>
  );
}

export default page2;
