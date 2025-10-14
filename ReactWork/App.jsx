const parent = document.getElementById('parent');
// console.log(parent);

const root = ReactDOM.createRoot(parent);
const h2 = React.createElement("h2", {style:{color:'brown',textAlign:'center'}}, "ABES Engineering College");
// root.render(h2);
/*
const li1 = React.createElement("li",{} , "React");
const li2 = React.createElement("li", {}, "Python");
const li3 = React.createElement("li", {}, "Java");
const h4 = React.createElement("h4",{}, "Skills")
const ul = React.createElement("ul",{style:{backgroundColor:'blue', color:'white'}}, li1,li2,li3);

const img = React.createElement("img",{src:"https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&ar=16%3A9&crop=faces&fit=crop", style:{height: '200px', width:'200px',borderRadius:'50%'}});
const myname = React.createElement('h3',{style:{}}, "Smita");

const a = React.createElement('div',{style:{display:'flex',gap:'300px',alignItems:'center'}}, img,myname)

const wrapper = React.createElement('div', {style:{fontSize:'30px'}}, h2,a,h4, ul);
root.render(wrapper); 
*/
//JSX
const h21 = <h2>Hello , I am using JSX.</h2>;
root.render(h21);