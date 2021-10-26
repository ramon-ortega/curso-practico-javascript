// Cuadrado 
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log(`El lado del cuadrado mide: ${ladoCuadrado}cm`);

const perimetroCuadrado = 4 * ladoCuadrado;
console.log(`El perimetro del cuadrado mide: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado mide: ${areaCuadrado}cm^2`)

console.groupEnd();

// Triangulo

console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "El lado 1 del triangulo mide: "
    + ladoTriangulo1
    + "cm, "
    + "El lado 2 del triangulo mide: "
    + ladoTriangulo2
    + "cm, "
    + "La base del triangulo mide: "
    + baseTriangulo
    + "cm"
    );
    
const alturaTriangulo = 5.5;
console.log(`La altura del triangulo mide: ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del triangulo mide: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El area del triangulo mide: ${areaTriangulo}cm^2`);

console.groupEnd();

// Rectangulo

console.group("Rectangulo");

const alturaRectangulo = 4;
const baseRectangulo = 5;
console.log(
    "La altura del rectangulo mide: " 
    + alturaRectangulo
    + "cm, "
    + "La base del rectangulo mide: "
    + baseRectangulo
    + "cm, "
);

const perimetroRectangulo = 2 * (alturaRectangulo + baseRectangulo);
console.log(`El perimetro del rectangulo mide: ${perimetroRectangulo}cm`);

const areaRectangulo = alturaRectangulo * baseRectangulo;
console.log(`El area del rectangulo mide ${areaRectangulo}cm^2`);

console.groupEnd();

// Circulo

console.group("Circulo");

const PI = Math.PI;
console.log(`El valor de PI es: ${PI}`);

const radioCirculo = 5;
const diametroCirculo = 2 * radioCirculo;
console.log(
    "El radio del circulo mide: "
    + radioCirculo
    + "cm, "
    + "El diametro del circulo mide: "
    + diametroCirculo
    + "cm, "
);

const perimetroCirculo = diametroCirculo * PI;
console.log(`El perimetro del circulo mide: ${perimetroCirculo}cm`);

const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log(`El area del circulo mide: ${areaCirculo}cm^2`);

console.groupEnd();