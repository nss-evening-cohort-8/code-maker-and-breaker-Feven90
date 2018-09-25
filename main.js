
const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const secretButton = document.getElementById("secret");
secretButton.addEventListener ('click', () => {
    const word = document.getElementById("user_input").value;
    let input = word.split("");    
    for (let i=0; i<input.length; i++){
        // let input2 = input.join('');
        // const secret = `${input2.charCodeAt(i)}${','}`;
    const secret = `${word.charCodeAt(i)}${','}`;
printToDom(secret,"printSecret");
        };
});

const convertButton = document.getElementById("secret2");
convertButton.addEventListener ('click', () => {
    const word = document.getElementById("user_input2").value;
    let input = word.split(",");    
    for (let i=0; i<input.length; i++){
const secret = String.fromCharCode(input[i]);
printToDom(secret,'convert');
        };
});

