const contenitore= document.getElementById("container")
console.log(contenitore);

// Dichiariamo i numeri da 0 a 100
for(let i = 1; i <= 100; i++){

    // Poniamo la condizione che sia i multipli di 3 che di 5 stampi fizzbuzz
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");

    }

    // Multipli di 3 stampano fizz
    else if(i % 3 === 0){
        console.log("Fizz");
    }

    // Multipli di 5 stampano buzz
    else if(i % 5 === 0){
        console.log("Buzz");
    }

    // Tutti gli altri numeri
    else{
        console.log(i);
    }

    // aggiungiamo uno span 
    const quadrato= document.createElement('span')
    
    // diamo una classe ad ogni span
    quadrato.classList.add("square")
    
    // Inseriamo i numeri nella classe
    quadrato.append(i)
    
    // aggiungiamo lo span con le sue classi e il contenuto nel nostro contenitore
    contenitore.append(quadrato)
}



