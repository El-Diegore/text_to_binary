function toggleButton(){
    const maxChar = 100;
    const textarea = document.getElementById('text_id');
    const button = document.getElementById('send_button');
    const label_msg = document.getElementById('label_id');

    button.disabled = textarea.value.trim() === '';
    if(textarea.value.length > maxChar){
        label_msg.classList.remove('none');
        button.classList.remove('btn')
        button.classList.add('btn-disabled')
    }else{
        label_msg.classList.add('none');
        button.classList.add('btn')
        button.classList.remove('btn-disabled')
    }
}
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