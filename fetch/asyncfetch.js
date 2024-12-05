


async function fetchdata() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    // console.log(data)
    output = '';
    for (i = 0; i < data.length; i++) {
        // console.log();
        output += `<li>Name: ${data[i].name} email:  ${data[i].email}</li>`
    }
    document.body.innerHTML = output

}
fetchdata();

