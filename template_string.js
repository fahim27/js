
let name = "Fahim";
let age = 20;

let home_district = "Sunamgonj";


let html;



//es5 formate......
html =

"<ul>" +
    "<li> Name" + name + "</li>" +
    "<li> Age" + age + "</li>"
    "<li> Home District" + home_district + "</li>"
"</ul>"

//es6 format..........
html =
    `<ul>
            <li> name:${name}</li>
            <li> age:${age}</li>
            <li> home_distric:${home_district}</li>
        </ul>
    `

document.body.innerHTML = html;