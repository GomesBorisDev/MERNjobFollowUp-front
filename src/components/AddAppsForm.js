import React, { useState } from 'react';
// import axios from 'axios';

const AddAppsForm = (props) => {

	const [newCompany, setCompany] = useState('');
	const [newPosition, setPosition] = useState('');
	const [newUrl, setUrl] = useState('');
	const [newComment, setComment] = useState('');

    const onChangeCompany = e => {
		setCompany(e.currentTarget.value);	
		console.log(e.currentTarget.value);
	};

	const onChangePosition = e => {
		setPosition(e.currentTarget.value);	
        console.log(e.currentTarget.value);
	};

	const onChangeUrl = e => {
		setUrl(e.currentTarget.value);	
        console.log(e.currentTarget.value);
	};
	
	const onChangeComment = e => {
		setComment(e.currentTarget.value);	
        console.log(e.currentTarget.value);
	};
	
    const onSubmit = e => {
		e.preventDefault();
		
		const company = newCompany;
		const position = newPosition;
		const url = newUrl;

		const comment = newComment;

        const email = document.getElementById("email").checked;
        const website = document.getElementById("website").checked;
		const linkedin = document.getElementById("linkedin").checked;

		const addedAt = Date.now();
		console.log(addedAt);
    
        const data = {
          company: company,
          position: position,
          url: url,
          email: email,
          website: website,
          linkedin: linkedin,
		  comment: comment,
		  addedAt: addedAt
        };

		console.log(data);
		
		fetch('http://localhost:4200/api/apps', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
		.then(response => response.json())
    	.then(json => {
        	console.log(json);
		})
		.catch(err => {
            console.log("Error in AddAppsForm !");
		});
		
		window.location.reload();
    
	};
	
	return(
		<form onSubmit={onSubmit}>

			<input className="m-2" value={newCompany} onChange={onChangeCompany} name="company" type="text" placeholder="Company"/><br/>
			<input className="m-2" value={newPosition} onChange={onChangePosition} name="position" type="text" placeholder="Job Position"/><br/>
			<input className="m-2" value={newUrl} onChange={onChangeUrl} name="url" type="url" placeholder="URL"/><br/>

			<h4>Sent by:</h4>
			<label htmlFor="email">Email</label>
			<input className="m-2" id="email" name="email" type="checkbox"/>
			<br/>
			<label htmlFor="website">Website</label>
			<input className="m-2" id="website" name="website" type="checkbox"/>
			<br/>
			<label htmlFor="linkedin">Linkedin</label>
			<input className="m-2" id="linkedin" name="linkedin" type="checkbox"/>
			<br/>

			<textarea className="m-2" value={newComment} onChange={onChangeComment} name="comment" type="text" placeholder="Comment"/>
			<br/>

			<button className="btn btn-primary" type="submit">Submit</button>

		</form>
	)
}


export default AddAppsForm;