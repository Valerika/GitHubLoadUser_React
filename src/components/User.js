import React, {Component} from 'react';

class Users extends Component {
  constructor() {
      super();
      this.state = {
          data: ''
      }
      this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'https://api.github.com/users', true);
    xhr.onload = function() {
      const data = JSON.parse(xhr.responseText);
      this.setState({ data: data });
    }.bind(this);
    xhr.send();
  }

  render(){
      const user = Object.entries(this.state.data).map((item, index) =>
        <div key={index} className="user__profile">
               <figure>
                    <img className="user__avatar" src={item[1].avatar_url} role="presentation"/>
                    <figcaption>
                        <a target="_blank" className="user__login" href="{item[1].html_url}">{item[1].login}</a>
                        <p className="user__role"> Role: {item[1].type}</p>
                    </figcaption>
              </figure>
        </div>
      )
      return(
          <div className="listUser">
            {user}
          </div>
      );
  }
}

export default Users;
