import React from "react";
import ReactDOM  from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
 
import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render( 
    <SpeechProvider appId="f9783241-a2a4-4065-899c-052e255aae44" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>, 
document.getElementById('root'));