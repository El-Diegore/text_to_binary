function textToBinary(){
    const text = document.getElementById('text_id').value
    const result = document.getElementById('result_id')
    //El párametro en toString(2) indica que lo transforma en 2, si es 10 en base 10.
    //padStart como parametro recibe en largo del nuevo string y el segundo con qué se rellena
    const binary = text.split('')
    .map(letter => letter.charCodeAt(0)
    .toString(2)
    .padStart(8, '0')).join(' ')
    return result.textContent = binary
}