import React from "react";
import ReactDOM from 'react-dom/client';


const Title = () => (
    <h1 className="head" tabindex='5'>
        Namaste React using JSX
    </h1>
);

const HeadingComponent = () => (
    <div id='container'>
        <Title />
        <h className="heading">Namaste React Functional COmponent</h>
    </div>
)
const heading = <h1 id='heading'>Namaste React using JSX👀</h1>

const react = ReactDOM.createRoot(document.getElementById('root'));

react.render(<HeadingComponent/>)