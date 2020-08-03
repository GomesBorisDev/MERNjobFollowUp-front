import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Applications = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4200/api/apps")
        .then((res) => { const job = res.data;
                        setData(job); })
        .catch((error) => console.log(error));
    }, []);

    const jobData = data.map(application => {

        if (application.email === true) {
            application.email = "Sent by: Email";
        };

        if (application.website === true) {
            application.website = "Sent by: Website";
        };

        if (application.linkedin === true) {
            application.linkedin = "Sent by: Linkedin";
        };

        return(
            <div key={application._id} className="card col-4">
                <div className="card-body">
                    <h5 className="card-title">{application.company}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{application.position}</h6>
                    <a href="#" className="card-link">{application.url}</a>
                    <h6 className="card-subtitle mb-2 text-muted">{application.email}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{application.website}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{application.linkedin}</h6>
                    <p className="card-text">{application.comment}</p>
                    <p className="card-text">{application.addedAt}</p>
                </div>
            </div>
        )
    })
    
    return (
            
            <div className="row">
                
                {jobData}
                
            </div>
        
    );
    
    
}

export default Applications;