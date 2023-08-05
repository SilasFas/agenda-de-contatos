const button = document.getElementById('button-ID')
const inputName = document.getElementById('name')
const inputPhone = document.getElementById('phone')
let rows = ''

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

    validName ? displayName(validName) : alert('Insira o nome e o sobrenome')
}

function displayName(nameBoolean) {
    if (nameBoolean) {

        let row = '<tr>'
        row += `<td>${inputName.value}</td>`
        row += '</tr>'
        rows += row

        console.log(rows)
        const tablebody = document.querySelector('tbody')
        tablebody.innerHTML = rows

        // clear the input name
        inputName.value = ''
    }
}











// return nomeComoArray.length >= 2



