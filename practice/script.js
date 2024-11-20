async function showdata()
{
    let a = await fetch ("http://localhost:3000/students");
    let b = await a.json();

    let finalData = b.map((e)=>`
        <h1>${e.name}</h1>
        <h1>${e.id}</h1>
        <h1>${e.city}</h1>
        <h1>${e.age}</h1>
    `).join("*****************");

    document.querySelector('#output').innerHTML = finalData;
}

showdata();