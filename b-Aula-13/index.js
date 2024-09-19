function salvar(texto){
    window.localStorage.setItem('nameStore', texto)
}

document.getElementById('nameInput').addEventListener('blur', (event) => {
    salvar(event.target.value);
})