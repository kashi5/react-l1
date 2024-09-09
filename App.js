/*
<div id="parent">
    <div id="child">
        <h1>Hello World</h1>
    </div>
</div>


*/
const parent = React.createElement('div', { id: 'parent' }, 
    React.createElement('div', {id:"child1"},
        [React.createElement('h1', null, 'Hello World'),
        React.createElement('h2', null, 'Hello World'),
        React.createElement('h3', null, 'Hello World'),
    ]), 
    React.createElement('div', {id:"child1"},
        [React.createElement('h1', null, 'Hello World'),
        React.createElement('h2', null, 'Hello World'),
        React.createElement('h3', null, 'Hello World'),
    ])
        );

const heading = React.createElement('h1', { id: 'heading', xyz: "abc" }, 'Hello World');
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);



