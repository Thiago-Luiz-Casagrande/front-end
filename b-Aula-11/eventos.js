function salvar(texto){
    window.sessionStorage.setItem('cor', texto)
}

document.getElementById('inputTexto').addEventListener('blur', (event) => {
    salvar(event.target.value);
})
/*
localStorage.setItem('chave', 'valor')
sessionStorage.getItem('chave')
localStorage.removeItem('chave')
sessionStorage.clear()   */