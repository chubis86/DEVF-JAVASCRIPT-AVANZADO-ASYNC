/////////////////////////////////EJERCICIO 1///////////////////////////////////

const e1= document.querySelector("#e1");
/* e1.addEventListener("click", ()=>{
    let api="https://pokeapi.co/api/v2/type/";
    fetch(api)
      .then(response => response.json())
      .then(json => imprimirE1(json.results));
})

const imprimirE1 = arreglo =>{
    let contador=1;
    arreglo.forEach(tipo => {
        console.log(`${contador}.- TIPO: ${tipo.name} URL: ${tipo.url} ` );
        contador++;
    });
}
 */

e1.addEventListener("click", funcionE1);

async function funcionE1(){
    let api="https://pokeapi.co/api/v2/type/";
    const resultadoE1 = await fetch(api);
    const resultadoE12 = await resultadoE1.json();
    imprimirE1(resultadoE12.results);

}

const imprimirE1 = arreglo =>{
    let contador=1;
    arreglo.forEach(tipo => {
        console.log(`${contador}.- TIPO: ${tipo.name} URL: ${tipo.url} ` );
        contador++;
    });
}
    
/////////////////////////////////EJERCICIO 2///////////////////////////////////

/* const e2= document.querySelector("#e2");
e2.addEventListener("click", ()=>{
    let api="https://openlibrary.org/books/OL26234146M.json";
    fetch(api)
      .then(response => response.json())
      .then(json => imprimirE2(json));
}) */

const e2= document.querySelector("#e2");
e2.addEventListener("click", funcionE2);

async function funcionE2(){
    let api="https://openlibrary.org/books/OL26234146M.json";
    const resultadoE2 = await fetch(api);
    const resultadoE22 = await resultadoE2.json();
    imprimirE2(resultadoE22);

}

const imprimirE2 = arreglo =>{
    
    console.log(`Libro: ${arreglo.title}`);
    console.log(`Autor: ${arreglo.subtitle}`);
    console.log(`Libro: ${arreglo.description}`);
    
}

/////////////////////////////////EJERCICIO 3///////////////////////////////////

/* const e3= document.querySelector("#e3");
e3.addEventListener("click", ()=>{
    let api="https://openlibrary.org/authors/OL3778242A/works.json";
    fetch(api)
      .then(response => response.json())
      .then(json => imprimirE3(json.entries));
}) */

const e3= document.querySelector("#e3");
e3.addEventListener("click", funcionE3);

async function funcionE3(){
    let api="https://openlibrary.org/authors/OL3778242A/works.json";
    const resultadoE3 = await fetch(api);
    const resultadoE32 = await resultadoE3.json();
    imprimirE3(resultadoE32.entries);

}

const imprimirE3 = arreglo =>{
    let contador=1;
    arreglo.forEach(elemento => {
        console.log(`${contador}.- Título: ${elemento.title} Fecha: ${elemento.created.value} ` );
        contador++;
    });
}

/////////////////////////////////EJERCICIO 4///////////////////////////////////

const e4= document.querySelector("#e4");
e4.addEventListener("click", funcionE4);
/* e4.addEventListener("click", ()=>{
    let api="https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay";
    fetch(api)
      .then(response => response.json())
      .then(json => console.log(`El género de la banda "COLDPLAY es: ` + json.artists[0].strGenre));
      //.then(json => console.log(json));
}) */

async function funcionE4(){
    let api="https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay";
    const resultadoE4 = await fetch(api);
    const resultadoE42 = await resultadoE4.json();
    console.log(`El género de la banda "COLDPLAY es: ` + resultadoE42.artists[0].strGenre);

}


/////////////////////////////////EJERCICIO 5///////////////////////////////////

const e5= document.querySelector("#e5");
e5.addEventListener("click", funcionE5);
/* e4.addEventListener("click", ()=>{
    let api="https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay";
    fetch(api)
      .then(response => response.json())
      .then(json => console.log(`El género de la banda "COLDPLAY es: ` + json.artists[0].strGenre));
      //.then(json => console.log(json));
}) */

async function funcionE5(){
    let api="https://swapi.dev/api/people/2";
    const resultadoE5 = await fetch(api);
    const resultadoE52 = await resultadoE5.json();
    imprimirE5(resultadoE52);

}

async function imprimirE5(arreglo){
    let contador=1;
    console.log(`El nombre del personaje es: ` + arreglo.name);
    arreglo.films.forEach(async elemento =>  {
        let titulo = await pelicula(elemento);
        console.log(`${contador}.- Título: ` + titulo);
        contador++;
    });
}

async function pelicula(url){
    let api=url;
    const peli = await fetch(api);
    const peli2 = await peli.json();
    return peli2.title;
}

/////////////////////////////////EJERCICIO 6///////////////////////////////////

const e6= document.querySelector("#e6");
e6.addEventListener("click", funcionE6);
let arregloE6=[];
let comodinE6=[];

async function funcionE6(){
    let api="https://pokeapi.co/api/v2/generation/1?limit=151";
    const resultadoE6 = await fetch(api);
    const resultadoE62 = await resultadoE6.json();
    imprimirE6(resultadoE62.pokemon_species);
    //console.log(resultadoE62.pokemon_species);
}

async function imprimirE6(arreglo){
    let contador=0;
    arreglo.forEach(async elemento =>  {
        contador++;
        comodinE6.push(contador, elemento.name, informacionE6(elemento.name));
        arregloE6.push(comodinE6);
        comodinE6=[];
        //await arregloE6.push(await informacionE6(elemento.name));
        
        //await arregloE6.push(contador + " " + elemento.name + " " + await informacionE6(elemento.name));
        //await console.log(contador + " " + elemento.name + " " + await informacionE6(elemento.name));
        
        //comodinE6=[];
        
    });
    //comodinE6.forEach(elemento=>{console.log(elemento);} );
   console.log(arregloE6);
    
}

async function informacionE6(url){
    let api2="https://pokeapi.co/api/v2/pokemon/"+url;
    const datosE6 = await fetch(api2);
    const datosE62 = await datosE6.json();
    return JSON.stringify(datosE62.weight) + " " + JSON.stringify(datosE62.types);
}



/////////////////////////////////EJERCICIO 7///////////////////////////////////

const e7= document.querySelector("#e7");
e7.addEventListener("click", funcionE7);
/* e4.addEventListener("click", ()=>{
    let api="https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay";
    fetch(api)
      .then(response => response.json())
      .then(json => console.log(`El género de la banda "COLDPLAY es: ` + json.artists[0].strGenre));
      //.then(json => console.log(json));
}) */

async function funcionE7(){
    let api="https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-08-01&end_date=2023-08-08&api_key=rPZGxu6TxvDbBvpL6LwlhKJGFVPwgH6oclpANviA";
    const resultadoE7 = await fetch(api);
    const resultadoE72 = await resultadoE7.json();
    imprimirE7(resultadoE72.near_earth_objects);
}

async function imprimirE7(arreglo){
    //Vamos a tener que crear un arreglo con las fechas
    const fechas=['2023-08-01', '2023-08-02', '2023-08-03', '2023-08-04', '2023-08-05', '2023-08-06', '2023-08-07'];
    fechas.forEach(fecha=>{
        console.log(fecha);
        let contador=1;
        arreglo[fecha].forEach(asteroide=>{
            console.log(`${contador} ${asteroide.name}` );
            contador++;
        });
            
    });
}
