import React from 'react';
import axios from 'axios';

class AddAppsForm extends React.Component {
  constructor() {
    super();
      this.state = {
        company: '',
        position: '',
        url: '',
        email: '',
        website: '',
        linkedin: '',
        comment: '',
        // date: ''
    };
  };


    onChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
        console.log(e.currentTarget.value);
    };

    onSubmit = e => {
        e.preventDefault();
        
        let email = document.getElementById("email").checked;
        let website = document.getElementById("website").checked;
        let linkedin = document.getElementById("linkedin").checked;
    
        const data = {
          company: this.state.company,
          position: this.state.position,
          url: this.state.url,
          email: email,
          website: website,
          linkedin: linkedin,
          comment: this.state.comment
        };

        console.log(data);
    
        axios.post('http://localhost:4200/api/apps', data ).then(
            res => {
            this.setState({
              company:'',
              position:'',
              url:'',
              email:'',
              website:'',
              linkedin:'',
              comment:''
            })
            console.log(res.data);
            // console.log(this.props.history);
            // this.props.history.push('/');
          })
          .catch(err => {
            console.log("Error in AddAppsForm !");
          });
    };

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input value={this.company} onChange={this.onChange} name="company" type="text" placeholder="Company"/><br/>
                <input value={this.position} onChange={this.onChange} name="position" type="text" placeholder="Job Position"/><br/>
                <input value={this.url} onChange={this.onChange} name="url" type="url" placeholder="URL"/><br/>

                <h3>Sent by:</h3>
                <label htmlFor="email">Email</label>
                <input value={this.email} id="email" name="email" type="checkbox"/>
                <br/>
                <label htmlFor="website">Website</label>
                <input value={this.website} id="website" name="website" type="checkbox"/>
                <br/>
                <label htmlFor="linkedin">Linkedin</label>
                <input value={this.linkedin} id="linkedin" name="linkedin" type="checkbox"/>
                <br/>

                <textarea value={this.comment} onChange={this.onChange} name="comment" type="text" placeholder="Comment"/>
                <br/>

                <button type="submit">Submit</button>

            </form>
        )
    }
}

export default AddAppsForm;