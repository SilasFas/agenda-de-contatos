const button = document.getElementById('button-ID')
const inputName = document.getElementById('name')
const inputPhone = document.getElementById('phone')
const emptyMessage = document.getElementById('p-message')
let rows = ''
let dataArray = []

inputPhone.addEventListener('input', (event) => {
    let inputPhoneValue = event.target.value;

    // Remove any letters from the input value
    let sanitizedPhoneValue = inputPhoneValue.replace(/[^0-9]/g, '');

    // Update the input field value with the sanitized value
    event.target.value = sanitizedPhoneValue;
});

button.addEventListener('click', (event) => {
    event.preventDefault()

    NamePhoneValidation()
})

function NamePhoneValidation() {

    // check if the user is inserting the full name
    let validName = handleFullName(inputName.value)
    function handleFullName(fullName) {
        const validNameArray = fullName.split(' ')
        return validNameArray.length >= 2
    }

    // check if the user is inserting a valid phonenumber with at least 10 digits
    let validPhone = handleTenDigits(inputName.value)
    function handleTenDigits(tenDigits) {
        tenDigitsArray = []
        tenDigitsArray = inputPhone.value.split('')
        let valid = tenDigitsArray.length >= 10
        return tenDigits = valid
    }

    validName && validPhone == true ? repeatedData(validName, validPhone)
        : alert('Verifique se inseriu nome completo e sobrenome, ou se o número tem pelo menos 10 dígitos.')
}

// check if the name and the phonenumber is being repeated on the list
function repeatedData(validNameBoolean, validPhoneBoolean) {
    if (dataArray.includes(inputName.value) || dataArray.includes(inputPhone.value)) {
        alert(`O nome ${inputName.value} ou número ${inputPhone.value} já estão na lista.`)

    } else {
        dataArray.push(inputName.value)
        dataArray.push(inputPhone.value)
        displayData(validNameBoolean, validPhoneBoolean)
    }
}

// display data on the contact list
function displayData(validNameBoolean, validPhoneBoolean) {
    if (validNameBoolean, validPhoneBoolean) {

        let row = '<tr>'
        row += `<td>${inputName.value}</td>`
        row += `<td>${inputPhone.value}</td>`
        row += '</tr>'
        rows += row

        const tablebody = document.querySelector('tbody')
        tablebody.innerHTML = rows

        // clear the input values
        inputName.value = ''
        inputPhone.value = ''

        // remove the empty list message
        emptyMessage.innerHTML = ''
    }
}