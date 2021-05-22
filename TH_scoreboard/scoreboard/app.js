//Create and return elements accepts 3 elements - 1st is type - string (h1, span, div),2nd - attributes like id used for CSS,3rd arugment is the content/children of the element 
//Title is an object

//React creates plain js scripts - <h1 id="main-title title='This is a title">My First React Element!</h1>
/*const title = React.createElement( 
    'h1',
    { id: 'main-title', title: 'This is a title.'},
    //children of the element
    'My First React Element!'
);*/

//To convert to JSX

//const title = <h1>My First React Element</h1>

//Create other elements
/*const description = React.createElement(
    'p',
    null,
    'My first paragraph!'
); */

//To convert to JSX
//const description = <p>I just learned how to create a React node and render it into the DOM.</p>;


//Combines both Title and Description elements 
/*const header = React.createElement(
    'header',
    null,
    title, description
);*/

//To convert parent element to children
/*const header = (
<header>
    <h1>My First React Element</h1>
    <p>I just learned how to create a React node and render it into the DOM.</p>;
</header>
);
//creating and updating DOM - ReactDOM.render function - connects react to DOM
//accepts two arguments and 1) react element or javascript object describes element, 2) actual html document.getElementID is the container
*/

//To convert to javascript expressions into strings

//const title = 'My First React Element';
const description = 'I just learned how to create a node and render it into the DOM.';
const myTitleID = 'main-title';
const name = 'Kia';

const header = (
    <header>
        <h1 id={myTitleID}>{ name }'s First React Element</h1>
            <p>{ description }</p>
    </header>
);

ReactDOM.render(
    header, 
    document.getElementById('root')
);
