import React from 'react';

const StepBubble = (props) => {


    return ( 
        <div className='card' style={{ width: '18rem', minHeight: '300px', margin: '10px' }}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <div class="collapse" id={"collapse" + props.title}>
                    <p class="card card-body">
                        {props.description}
                    </p>
                </div>
                {/* <div className='button-container'>
                    <button>
                    </button>
                </div> */}
            </div>
        </div>
     );
}
 
export default StepBubble;