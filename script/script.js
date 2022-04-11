const btnIgual = document.getElementById('igual');
const btnBorrarTodo = document.getElementById('borrar-todo');
const btnBorrar = document.getElementById('borrar');
const textoSuperior = document.getElementById('texto-superior');
const textoInferior = document.getElementById('texto-inferior');
const btnNumero = document.querySelectorAll('.numero');
const btnOperador = document.querySelectorAll('.operador');


class Calculadora {
    constructor(textoValorInferior,textoValorSuperior){
        this.textoValorInferior = textoValorInferior
        this.textoValorSuperior = textoValorSuperior
        this.valorInferior = ''
        this.valorSuperior = ''
        this.operador = undefined
    }

    agregarNumero(numero){
    if(numero === '.' && this.valorInferior.includes('.')) return
    this.valorInferior = this.valorInferior + numero
    }
    imprimirDisplay() {
        this.textoValorInferior.innerText = this.valorInferior
        this.textoValorSuperior.innerText = this.valorSuperior
    }
    borrar (){
        this.valorInferior = this.valorInferior.slice(0,-1)
    }
    elegirOperacion(operador) {
        if(this.valorInferior == '') return
        if(this.valorSuperior != '') {
            this.realizarCalculo()
        }
        this.operador = operador
        this.valorSuperior = this.valorInferior
        this.valorInferior = ''
    }
    realizarCalculo() {
        let resultado
        let conversionValorSuperior = parseFloat(this.valorSuperior)
        let conversionValorInferior = parseFloat (this.valorInferior)
        if(isNaN(conversionValorSuperior) || isNaN(conversionValorInferior)) return
        switch (this.operador) {
            case '+':
            resultado = conversionValorSuperior + conversionValorInferior
            break
            case '-':
            resultado = conversionValorSuperior - conversionValorInferior
            break
            case 'x':
            resultado = conversionValorSuperior * conversionValorInferior
            break
            case '/':
            resultado = conversionValorSuperior / conversionValorInferior
            break
            default: return
        }
        
        this.valorInferior = resultado
        this.operador = undefined
        this.valorSuperior= ''
    }

    limpiarPantalla() {
        this.valorInferior = ''
        this.valorSuperior = ''
        this.operador = undefined

    }
}


const calculadora = new Calculadora (textoInferior,textoSuperior)



btnNumero.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadora.agregarNumero(boton.innerText)
        calculadora.imprimirDisplay() 
    })
})

btnBorrar.addEventListener('click',() => {
    calculadora.borrar()
    calculadora.imprimirDisplay()
})

btnOperador.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadora.elegirOperacion(boton.innerText)
        calculadora.imprimirDisplay() 
    })
})
btnIgual.addEventListener('click',() => {
    calculadora.realizarCalculo()
    calculadora.imprimirDisplay()
})

btnBorrarTodo.addEventListener('click',() => {
    calculadora.limpiarPantalla()
    calculadora.imprimirDisplay()
})