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
    return parseFloat(lado1) + parseFloat(lado2) + parseFloat(base);
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

// Rectangulo

console.group("Rectangulo");

function perimetroRectangulo(base, altura){
    return (parseFloat(base) + parseFloat(altura)) * 2;
}

function areaRectangulo(base, altura){
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

// Triangulo Isoceles

console.group("Triangulo Isoceles");
    
function perimetroTrianguloIso(lado1, lado2, base){
    return parseFloat(lado1) + parseFloat(lado2) + parseFloat(base);
}

function alturaTrianguloIso(lado1, base){
    const altura = Math.sqrt(Math.pow(lado1,2) - Math.pow((base/2),2) );
    console.log(lado1);
    console.log(base); 
    console.log(altura);
    return altura;
}

function areaTrianguloIso(lado1, base){
    const altura = alturaTrianguloIso(lado1, base);
    return (base * altura) / 2;
}

console.groupEnd();

// Conexion Js con HTML

function calculoPerimetroCuadrado(){
    const input = document.getElementById("calculoCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    
    alert(perimetro);
}

function calculoAreaCuadrado(){
    const input = document.getElementById("calculoCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);

    alert(area);
}

function calculoPerimetroRectangulo(){
    const inputBase = document.getElementById("calculoRectanguloBase");
    const inputAltura = document.getElementById("calculoRectanguloAltura");
    const base = inputBase.value;
    const altura = inputAltura.value;
    const perimetro = perimetroRectangulo(base, altura);
    
    alert(perimetro);
}

function calculoAreaRectangulo(){
    const inputBase = document.getElementById("calculoRectanguloBase");
    const inputAltura = document.getElementById("calculoRectanguloAltura");
    const base = inputBase.value;
    const altura = inputAltura.value;

    const area = areaRectangulo(base,altura);

    alert(area);
}

function calculoPerimetroTriangulo(){
    const inputLado1 = document.getElementById("calculoTrianguloLado1");
    const inputLado2 = document.getElementById("calculoTrianguloLado2");
    const inputBase = document.getElementById("calculoTrianguloBase");
    const lado1 = inputLado1.value;
    const lado2 = inputLado2.value;
    const base = inputBase.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    
    alert(perimetro);
}

function calculoAreaTriangulo(){
    const inputBase = document.getElementById("calculoTrianguloBase");
    const inputAltura = document.getElementById("calculoTrianguloAltura");
    const base = inputBase.value;
    const altura = inputAltura.value;

    const area = areaTriangulo(base, altura);
    
    alert(area);
}

function calculoPerimetroCirculo(){
    const inputRadio = document.getElementById("calculoCirculo");
    const radio = inputRadio.value;

    const perimetro = perimetroCirculo(radio);

    alert(perimetro);
}

function calculoAreaCirculo(){
    const inputRadio = document.getElementById("calculoCirculo");
    const radio = inputRadio.value;

    const area = areaCirculo(radio);

    alert(area);
}

function calculoPerimetroTrianguloIso(){
    const inputLado1 = document.getElementById("calculoTrianguloLado1Iso");
    const inputLado2 = document.getElementById("calculoTrianguloLado2Iso");
    const inputBase = document.getElementById("calculoTrianguloBaseIso");
    const lado1 = inputLado1.value;
    const lado2 = inputLado2.value;
    const base = inputBase.value;

    if (lado1 == lado2 && lado1 != base) {
        const perimetro = perimetroTrianguloIso(lado1, lado2, base); 
        alert(perimetro);
    } else {
        alert("Mete los datos de un triángulo isosceles");
    }
}

function calculoAreaTrianguloIso(){
    const inputLado1 = document.getElementById("calculoTrianguloLado1Iso");
    const inputLado2 = document.getElementById("calculoTrianguloLado2Iso");
    const inputBase = document.getElementById("calculoTrianguloBaseIso");
    const lado1 = inputLado1.value;
    const lado2 = inputLado2.value;
    const base = inputBase.value;

    if (lado1 == lado2 && lado1 != base) {
        const area = areaTrianguloIso(lado1, base);
        alert(area);
    } else {
        alert("Mete los datos de un triángulo isosceles");
    }
}