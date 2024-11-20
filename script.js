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