import React from 'react';

class Timer extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state ={timeinsec: 0};

    }

    render()
    {
        return(
        <div > Time in seconds : {this.state.timeinsec} </div>
    );
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
      }

    componentWillUnmount() {
        clearInterval(this.interval);
      }

      tick() {
        this.setState(state => ({
            timeinsec: state.timeinsec + 1
        }));
      }

};
export default Timer;