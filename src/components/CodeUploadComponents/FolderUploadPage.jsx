import React, { Component } from 'react';

class FolderUpload extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div>
                <input type='file'/>
            </div>
         );
    }
}
 
export default FolderUpload;