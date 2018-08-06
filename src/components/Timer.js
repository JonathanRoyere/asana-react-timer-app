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
        timerRunning: false,
        lastClearedIncrementer: null
      };
      this.incrementer = null;
    }

    handleStartClick() {
      if(this.state.timerRunning == false) {
      this.incrementer = setInterval( () =>
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1,
            timerRunning: true
          })
        , 1000);
      }
    }

    handleStopClick() {
      clearInterval(this.incrementer);
      this.setState({
        lastClearedIncrementer: this.incrementer,
        timerRunning: false
      });
    }

    handleResetClick() {
      clearInterval(this.incrementer);
      this.setState({
        secondsElapsed: 0,
        timerRunning: false,
        laps: []
      });
    }

    submitTimer() {
    // clears convert time to x.xx format then submit to the jarvis api function (see addon)
    }


    render() {
      return (
        <div className="stopwatch">
          <input type="text" value={formattedSeconds(this.state.secondsElapsed)} />
          <h1 className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</h1>
            <a href="#" onClick={this.handleStartClick.bind(this)}><i className="start-btn fa fa-play"></i></a>
            <a href="#" onClick={this.handleStopClick.bind(this)}><i className="stop-btn fa fa-pause" ></i></a>
            <a href="#" onClick={this.handleResetClick.bind(this)}><i className="fa fa-undo"></i></a>
            <div className="submit-cont">
              <a href="#" onClick={this.submitTimer.bind(this)}>Submit Time</a>
            </div>
        </div>
      );
    }
  }

  export default Timer
