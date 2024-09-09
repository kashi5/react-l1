import React from 'react';
import ReactDOM from 'react-dom/client';


const elem = <span> React Element</span>
//React Element 
const element = React.createElement(
    'h1', 
    {id: 'heading'}, 
    'Hello World'
);

//JSX (transpiled before ir reaches the js engine) - parcel  - Bable
//JSX => React.createElement => React Element => HTMLElement(render)
const heading = <h1 className="head" tabIndex="1"> Hello World 🚀</h1>;

const Title = () => (
    <h1 className="head" tabIndex="5"> 
    | Namaste React using JSX |
    {elem}
    </h1>
);


const random_number = Math.random();
//React Functional Component
const HeadingComponent = () => (
    <div id ="container">
        <h1>{random_number}</h1>
        <Title />
        {Title()} 
        <h1 className="head" tabIndex="1"> Hello World 🚀</h1>
    </div>
    
)

//React Functional Component
const HeadingComponent1 = () => <h1 className="head" tabIndex="1"> Hello World 🚀</h1>;

//both HeadingComponent1 and HeadingComponent are same

//React Element
const HeadingComponent3 = <h1 className="head" tabIndex="1"> Hello World 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);  //syntax for React element
root.render(<HeadingComponent />); //syntax for React Functional Component