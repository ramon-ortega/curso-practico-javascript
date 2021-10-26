// Cuadrado 

console.group("Cuadrado");

function perimetroCuadrado(lado){
    return 4 * lado;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

// Triangulo

console.group("Triangulo");
    
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

// Rectangulo

console.group("Rectangulo");

function perimetroRectangulo(altura, base){
    return 2 * (altura + base);
}

function areaRectangulo(altura, base){
    return base * altura;
}

console.groupEnd();

// Circulo

console.group("Circulo");

const PI = Math.PI;
console.log(`El valor de PI es: ${PI}`);

function diametroCirculo(radio){
    return 2 * radio;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return PI * (radio * radio);
}

console.groupEnd();

// Conexion Js con HTML

function calculoPerimetro(){
    const input = document.getElementById("calculoCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calculoArea(){
    const input = document.getElementById("calculoCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);

    alert(area);
}