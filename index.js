VANTA.BIRDS({
    el: "#your-element-selector",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0xc8d5f0,
    color2: 0xc85959
})


let title = document.getElementById('title')
let note = document.getElementById('note')
let btn = document.getElementById('btn')
let rightdiv = document.getElementById('rightdiv')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(title.value)
    console.log(note.value);

    // Create a new div element for the note
    let noteDiv = document.createElement('div');
    
    // Add inner HTML content
    noteDiv.innerHTML = `
        <h2>${title.value}</h2>
        <p data-note="${note.value}">${note.value.slice(0, 20)}...</p>
        <i class="fa-sharp fa-solid fa-pen"></i>
        <i class="fa-solid fa-trash"></i>
    `;
    
    // Append the new note div to the rightdiv
    rightdiv.appendChild(noteDiv);
    
    // Clear the input fields
    title.value = '';
    note.value = '';
    
    // Add event listeners for the delete buttons
    let dbtns = document.getElementsByClassName('fa-trash');
    for (let i = 0; i < dbtns.length; i++) {
        dbtns[i].addEventListener('click', () => {
            dbtns[i].parentElement.style.display = 'none';
        });
    }
    
    // Add event listeners for the edit buttons
    let ebtns = document.getElementsByClassName('fa-pen');
    for (let i = 0; i < ebtns.length; i++) {
        ebtns[i].addEventListener('click', () => {
            // Retrieve the full note text from the data-note attribute
            title.value = ebtns[i].parentElement.childNodes[1].innerText;
            note.value = ebtns[i].parentElement.childNodes[3].getAttribute('data-note');
            ebtns[i].parentElement.style.display = 'none';
        });
    }
});
