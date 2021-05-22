//Create and return elements accepts 3 elements - 1st is type - string (h1, span, div),2nd - attributes like id used for CSS,3rd arugment is the content/children of the element 
//Title is an object

//React creates plain js scripts - <h1 id="main-title title='This is a title">My First React Element!</h1>
const title = React.createElement( 
    'h1',
    { id: 'main-title', title: 'This is a title.'},
    //children of the element
    'My First React Element!'
);
//Create other elements

const description = React.createElement(
    'p',
    null,
    'My first paragraph!'
);

//Combines both Title and Description elements 
const header = React.createElement(
    'header',
    null,
    title, description

);
//creating and updating DOM - ReactDOM.render function - connects react to DOM
//accepts two arguments and 1) react element or javascript object describes element, 2) actual html document.getElementID is the container


ReactDOM.render(
    header, 
    document.getElementById('root')
);
