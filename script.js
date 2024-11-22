async function show()
{
    let a = await fetch ("http://localhost:3000/student");
    let b = await a.json();

    // let finalData = b.map((e)=>`
    //     <h1>${e.name}</h1>
    //     <h1>${e.age}</h1>
    //     <h1>${e.city}</h1>
    //     <h1>${e.id}</h1>
    // `).join("-------------------")

    let finalData = b.map((e)=>`
        <tr>
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>${e.age}</td>
            <td>${e.city}</td>
            <td><button onclick="mydelete('${e.id}')">delete</button></td>
            <td><button onclick="myedit('${e.id}')">Edit</button></td>
        </tr>
    `).join("  ")

    document.querySelector('#output').innerHTML = finalData;
}
 
show();


function mydelete(id)
{
    fetch(`http://localhost:3000/student/${id}`,{
        method:'DELETE'
    })
    .then(re=>alert("Deleted successfully.!!!"))
}

function insertdata()
{
    let data={
        name : document.querySelector('#name').value,
        age : document.querySelector('#age').value,
        city : document.querySelector('#city').value
    }
    fetch("http://localhost:3000/student",{
        method: 'POST',
        Headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>alert("inserted..!!!"))
}

 async function myedit(id){
    let myupdate = await fetch(`http://localhost:3000/student/${id}`);
    let redata = await myupdate.json()
    let senddata = `
    <h1>Updata Data</h1>
    <input type="text" value="${redata.id}" readonly> <br>
    <input type="text" value="${redata.name}" id="name1"> <br>
    <input type="text" value="${redata.age}" id="age1"> <br>
    <input type="text" value="${redata.city}" id="city1"> <br>
    <input type="submit" onclick="finalupdate('${redata.id}')">
    `

    document.querySelector('#edittable').innerHTML = senddata
}

function finalupdate(id)
{
    let fdata = {
        name:document.querySelector('#name1').value,
        age:document.querySelector('#age1').value,
        city:document.querySelector('#city1').value,
    }
    fetch(`http://localhost:3000/student/${id}`,
    {
        method:'PUT',
        Headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(fdata)
    })
    .then(r=>alert("Updated...!!"))
}