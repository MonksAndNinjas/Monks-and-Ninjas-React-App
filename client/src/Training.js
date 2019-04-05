import React from 'react';
import Calendar from 'react-calendar';

class Training extends React.Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <h1>Training</h1>

        <span>Type of Service: $Price: Duration</span>

        <br/><br/>

        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    )
  }
}

export default Training;
