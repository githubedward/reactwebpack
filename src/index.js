import React from 'react';
import ReactDOM from 'react-dom';
import Other from './other';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Hello WebPack! Hello WebPack!</h1>
        <Other />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
