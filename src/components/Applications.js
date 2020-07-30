import React, { useState } from 'react';
import axios from 'axios';

const Applications = (props) => {

    const [newData, setData] = useState([]);

    axios.get('http://localhost:4200/api/apps', { 
        params: {
            results: 1
        }
    })
    .then(res => {
            console.log(res.data);
            console.log(res.status);
            console.log(res.statusText);
            console.log(res.headers);
            console.log(res.config);
            const response = res.data;
            // this.setData({ data: response});
        })
    .catch(error => console.log(error));
    
    return (
        <h1>Applications</h1>
    );
    
    
}

export default Applications;