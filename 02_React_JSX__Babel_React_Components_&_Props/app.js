// // hard way

// const Element= React.createElement('h1',{id:'title'},"I am react");
// const h1 = ReactDOM.createRoot(document.getElementById('root'));

// h1.render(Element);

// // JSX: js XML: look like HTML
// //Babel = JSX --->React.createElement()

// const Element = <h1 id="title">gelo</h1>;
// const Element2 = (<>
//     <h1>help me</h1>
//     <h1>i am stuck in js</h1>
// </>);



// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(Element);
// root.render(Element2);

// // React Component

// function App(name){

//     return(
//         <h1>hello World {<p>Hi {name}</p>} ji</h1>
//     );
// }

// // React.createElement("ul",null,[React.createElement("ul",null,<li>HTML</li>)
// // ,React.createElement("ul",null,<li>CSS</li>)])


// const courses = ["HTML","CSS","Javascript","React"];
// // [<li>HTML</li>,<li>CSS</li>,<li>JavaScript</li>,<li>React</li>]
// const element = (
// <ul>
//     {courses.map(course=><li>{course}</li>)}
// </ul>
// )


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


// // props

// const ab = {backgroundColor:"orange", clor:"white"};
// const element =<h1 id='title' className="first" style={ab}>Mubassir</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(element);


// // real analogy

// function Header({name}){

//     return (
//         <h1>{name} Welcome to Indian Election Commission Website</h1>
//     )
// }

// // const props = {
// //     name:"Rohit"
// // }

// // const {name} = props;

// function Main({user}){

//     return (
//         <>
//         <h2>Hi {user.name}</h2>
//         <h3>{user.age>18? "Ypur are eligible for vote": "Your are not eligible for vote"}</h3>
//         <p>Your city is {user.city}</p>
//         </>
        
//     )
// }

// function Footer(){

//     return (
//         <h3>Thansk for visiting our website</h3>
//     )
// }


// function App(){

//     return (
//         <>
//        <Header name="Rohit"></Header>
//        <Main user={{name:"Rohit",age:30,city:"Kotdwar"}}></Main>
//        <Footer />
//        </>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App/>);

// // App()
// // <App/>
