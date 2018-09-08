import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Home extends React.Component{
    render(){
        return(
            <div>home</div>
        )
    }
}
ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
