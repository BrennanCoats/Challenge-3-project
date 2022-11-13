function generatePassword(){
    var characterAmount = document.getElementById('characterbox').value;
    var includeUppercase = document.getElementById ('uppercase').checked;    
    var includeNumbers = document.getElementById ('numbers').checked;
    var includeSymbols = document.getElementById ('symbols').checked;

    var passwordcharacters = randomPassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
     
    document.getElementById('passwordDisplay').value = passwordcharacters.toString().replaceAll(',' , '');
}

function randomPassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    const LowercaseCodes = 'abcdefghifklmnopqrstuvwxyz'
    const UppercaseCodes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numberCodes = '1234567890'
    const symbolCodes = '!@#$%^&*()'
    
    let randopass = LowercaseCodes
    
    if (includeUppercase) 
        randopass = randopass.concat(UppercaseCodes);
    if (includeNumbers) 
        randopass = randopass.concat(numberCodes);
    if (includeSymbols) 
        randopass = randopass.concat(symbolCodes);
   
    var passwordcharacters = [];
    var character = "";

    for (let i=0; i < characterAmount; i++) {
        character = randopass [Math.floor(Math.random() * randopass.length)];
        passwordcharacters.push(character);
    }

    return passwordcharacters;
}


