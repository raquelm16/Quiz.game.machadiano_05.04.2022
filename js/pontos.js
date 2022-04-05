let r1 = document.querySelector('#r1')
let r2 = document.querySelector('#r2')
let r3 = document.querySelector('#r3')
let r4 = document.querySelector('#r4')
let r5 = document.querySelector('#r5')
let r6 = document.querySelector('#r6')
let r7 = document.querySelector('#r7')
let r8 = document.querySelector('#r8')
let r9 = document.querySelector('#r9')
let r10 = document.querySelector('#r10')
let name = document.querySelector('#name')

let resultado = document.querySelector('#resultado')

let botao = document.querySelector('#verificar')
botao.addEventListener('click', setVerificar)


function setVerificar() {
    
    if (name.value == '') {
        console.log(name);
        
        alert('Preencha o nome!')
        resultado.innerHTML  = ""
    } else {
        let pontos = 0
        if (r1.value == '4') {
            pontos += 10
        }

        if (r2.value == '2') {
            pontos += 10
        }

        if (r3.value == '1') {
            pontos += 10
        }

        if (r4.value == '1') {
            pontos += 10
        }

        if (r5.value == '3') {
            pontos += 10
        }

        if (r6.value == '1') {
            pontos += 10
        }

        if (r7.value == '2') {
            pontos += 10
        }

        if (r8.value == '2') {
            pontos += 10
        }

        if (r9.value == '1') {
            pontos += 10
        }

        if (r10.value == '1') {
            pontos += 10
        }

        resultado.innerHTML = ("<h3>Resultado</h3><br>" + pontos)

    }


}

