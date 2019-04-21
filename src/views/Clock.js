import React from 'react';

export default class Clock extends React.Component {
  format(time) {
    let seconds = time % 60;
    let minutes = Math.floor(time/60)%60;
    let hours = Math.floor(time / 3600);
    let final;
    hours =  hours.toString().length === 1 ? "0" + hours : hours;
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    if(hours){
      final = hours + ':' + minutes + ':' + seconds
    } else if (!hours && minutes){
      final = minutes + ':' + seconds;
    } else if (!hours && !minutes && seconds){
      final = seconds;
    } else if (!hours && !minutes && !seconds){
      final = 'DONE'
    }
    return final;
  }
  render() {
    const { time } = this.props;
    return (
      <div className="displayedTime">
        <h1 style={{ margin: 0, }}>{this.format(time)}</h1>
      </div>
    )
  }
}
