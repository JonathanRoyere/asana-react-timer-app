import React , {Component} from 'react';
import Timer from './Timer'
import axios from 'axios';


class Tasks extends React.Component {

state = {
  tasks : [],
  loading: true
}



get_tasks() {


const access_token = 'Bearer 0/9b8457f00cc052533ab3d834eefd7316';


//access token but thats only for a single user
//get the tasks
  axios.get('https://app.asana.com/api/1.0/tasks?assignee=me&completed_since=now&limit=100&workspace=2462109727483',  { 'headers': { 'Authorization': access_token ,  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'} }).then(res => {
        const items = res.data.data;

        console.log(items)
        this.setState({
          tasks : items ,
          loading: false
        });
      })

      //
      // axios.get('https://app.asana.com/api/1.0/tasks/717448977901196',  { 'headers': { 'Authorization': access_token ,  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'} }).then(res => {
      //       const items = res.data;
      //
      //       console.log(items)
      //
      //     })




//
    //
    // DOESNT WORK BUT WILL NEED OAUTH IN THE FUTURE FOR MULTIPLE USERS
    // axios.get('https://app.asana.com/755878620620863/oauth_authorize',  { 'headers': {  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' , 'Access-Control-Allow-Origin': true} }).then(res => {
    //       const items = res.data;
    //
    //       console.log(items)
    //       this.setState({ tasks : items });
    //     })

// https://app.asana.com/api/1.0/tasks?assignee=me&completed_since=now&limit=100&workspace=2462109727483
//

}


  constructor(props) {
    super(props);

  }

  componentDidMount() {
      this.get_tasks();
  }

  render() {
    if(this.state.loading) {
          return 'Loading...'
      }  else {


        { var task_list = Object.keys(this.state.tasks).map((item, i) => (
              <li className="task-wrapper" key={i}>
                  <a href="#" className="single-task" data-task-id="{i}">{this.state.tasks[item].name}</a>
                  <Timer />
              </li>
          ))}

          return (<div>
              <ul className="task-wrap">{task_list}</ul>
            </div>);



  }
}
}

export default Tasks
