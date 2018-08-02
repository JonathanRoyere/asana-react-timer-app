import React , {Component} from 'react';



const formattedSeconds = function(sec) {
  // divide hours then by minutes echo condition for proper amount of zeroes
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - (hours * 3600)) / 60) ;
  let time = hours + ':' + ( minutes > 9 ? "" : "0") + minutes + ':' + ('0' + sec % 60).slice(-2);
  return time;
}


class Timer extends React.Component {


  //  formattedSeconds(sec) {
  //   // divide hours then by minutes echo condition for proper amount of zeroes
  //   let hours = Math.floor(sec / 3600);
  //   let minutes = Math.floor((sec - (hours * 3600)) / 60) ;
  //   let time = hours + ':' + ( minutes > 9 ? "" : "0") + minutes + ':' + ('0' + sec % 60).slice(-2);
  //   return time;
  // }


    constructor(props) {
      super(props);
      this.state = {
        secondsElapsed: 0,
        laps: [],
        lastClearedIncrementer: null
      };
      this.incrementer = null;
    }

    handleStartClick() {
      this.incrementer = setInterval( () =>
        this.setState({
          secondsElapsed: this.state.secondsElapsed + 1
        })
      , 1000);
    }

    handleStopClick() {
      clearInterval(this.incrementer);
      this.setState({
        lastClearedIncrementer: this.incrementer
      });
    }

    // handleResetClick() {
    //   clearInterval(this.incrementer);
    //   this.setState({
    //     secondsElapsed: 0,
    //     laps: []
    //   });
    // }


    render() {
      return (
        <div className="stopwatch">
          <input type="text" value={formattedSeconds(this.state.secondsElapsed)} />
          <h1 className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</h1>


            <a href="#" onClick={this.handleStartClick.bind(this)}>start<i className="start-btn fa fa-play"></i></a>
            <a href="#" onClick={this.handleStopClick.bind(this)}>stop<i className="stop-btn fa fa-pause" ></i></a>

        </div>
      );
    }
  }

  export default Timer
