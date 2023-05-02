const contenitore= document.getElementById("container")
console.log(contenitore);

// Dichiariamo i numeri da 0 a 100
for(let i = 1; i <= 100; i++){

    // aggiungiamo uno span 
    const quadrato= document.createElement('span')
        
    // diamo una classe ad ogni span
    quadrato.classList.add("square")
    
    // aggiungiamo lo span con le sue classi e il contenuto nel nostro contenitore
    contenitore.append(quadrato)

    // Poniamo la condizione che sia i multipli di 3 che di 5 stampi fizzbuzz
    if (i % 3 === 0 && i % 5 === 0){
        quadrato.append("FizzBuzz")
        quadrato.classList.add("square-fizz-buzz")
        console.log("FizzBuzz");

    }

    // Multipli di 3 stampano fizz
    else if(i % 3 === 0){
        quadrato.append("Fizz")
        quadrato.classList.add("square-fizz")
        console.log("Fizz");
    }

    // Multipli di 5 stampano buzz
    else if(i % 5 === 0){
        quadrato.append("Buzz")
        quadrato.classList.add("square-buzz")
        console.log("Buzz");
    }

    // Tutti gli altri numeri
    else{
        quadrato.append(i)
        console.log(i);
    }

 
}



