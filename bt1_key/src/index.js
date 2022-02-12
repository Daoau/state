import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class OnPressedKey extends React.Component{
  constructor(){
    super();
    this.state={
      keypressed: ''
    }
  }
  handler = (e) => {
    console.log(e)
    this.setState({keypressed: e.key});
  };
  render () {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Key pressed is: {this.state.keypressed}</p>
        <input type="text" onKeyPress={(e) => this.handler(e)} />
      </div>
    )
  }
}
ReactDOM.render(
  <OnPressedKey />,
  document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
