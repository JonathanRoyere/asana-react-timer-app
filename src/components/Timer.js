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

    // handleStartClick() {
    //   // add a set timeout because of many click initialy
    //   if(this.state.timerRunning == false) {
    //
    //     // update timer bool to prevend multiple init
    //     this.setState({
    //         timerRunning: true
    //       })
    //
    //
    //
    //   this.incrementer = setInterval( () =>
    //     this.setState({
    //         secondsElapsed: this.state.secondsElapsed + 1
    //       })
    //     , 1000);
    //   }
    // }


    handleStartClick() {
      // add a set timeout because of many click initialy
      if(this.state.timerRunning == false) {

        // update timer bool to prevend multiple init
        this.setState({
            timerRunning: true
          })


          // set timeout to trigger after bool , bind this -> setTimeout -> setInterval to change the state correctly
        setTimeout(function() {
          this.incrementer = setInterval( function() {
            this.setState({
              secondsElapsed: this.state.secondsElapsed + 1
            })
          }.bind(this)
          , 1000);
        }
        .bind(this), 10)

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
    let time = formattedSeconds(this.state.secondsElapsed).split(':');

    let hours = parseFloat( time[0] );
    let minutes = (parseFloat( time[1]) * 0.0166667)
    let formatedTime = (hours + minutes).toFixed(2); // trim decimal
        console.log( hours , minutes , formatedTime );
    // step on onclick make submit button log time
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
