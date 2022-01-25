//debemos abrir nuestro HTML con un servidor
//sino no nos lee el archivo

const sumar = (num1, num2) => {
    return num1+num2;
}

const restar = (num1, num2) => {
    return num1-num2;
}

const multiplicar = (num1, num2) => {
    return num1*num2;
}

const dividir = (num1, num2) => {
    return num1/num2;
}

const mostrarResult = (operacion, num1, num2, resultado) =>{
    const respuesta = document.createElement('h3');
    respuesta.textContent = `La ${operacion} del ${num1} y el ${num2} es ${resultado}`;
    document.body.appendChild(respuesta);
}
module.exports = {sumar,restar,multiplicar,dividir,mostrarResult}


/* export{
    sumar, 
    restar,
    multiplicar,
    dividir,
    mostrarResult
} */
