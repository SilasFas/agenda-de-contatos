const button = document.getElementById('button-ID')
const inputName = document.getElementById('name')
const inputPhone = document.getElementById('phone')
let rows = ''
let dataArray = []


button.addEventListener('click', (event) => {
    event.preventDefault()

    validationInputName()
})

// check if the user is inserting the full name
function validationInputName() {
    let validName = handleInputName(inputName.value)

    function handleInputName(fullName) {
        const validNameArray = fullName.split(' ')
        return validNameArray.length >= 2
    }
    validName ? repeatedData(validName) : alert('Insira o nome e o sobrenome')
}

// check if the name and the phonenumber is being repeated
function repeatedData(validNameBoolean) {
    if (dataArray.includes(inputName.value)) {
        alert(`${inputName.value} já está na lista de contatos`)
    } else {
        dataArray.push(inputName.value)
        console.log(dataArray)
        displayName(validNameBoolean)
    }
}

function displayName(validNameBoolean) {
    if (validNameBoolean) {

        let row = '<tr>'
        row += `<td>${inputName.value}</td>`
        row += '</tr>'
        rows += row

        console.log(rows)
        const tablebody = document.querySelector('tbody')
        tablebody.innerHTML = rows

        // clear the input name
        // inputName.value = ''
    }
}