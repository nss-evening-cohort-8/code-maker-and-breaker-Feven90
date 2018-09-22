
const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}


const secretButton = document.getElementById("secret");
secretButton.addEventListener ('click', () => {
    const word = document.getElementById("user_input").value;
    let input = word.split("");    
    for (let i=0; i<input.length; i++){
        input2 = input.join('');
const secret = `${input2.charCodeAt(i)}`;
printToDom(secret,"printSecret");
        };

});



const convertButton = document.getElementById("secret2");
convertButton.addEventListener ('click', () => {
    const word = document.getElementById("user_input2").value;
    let input = word.split(",");    
    for (let i=0; i<input.length; i++){
        input2 = input.join('');
const secret = String.fromCharCode(word);
printToDom(secret,'convert');
        };
      window.onload;
});

