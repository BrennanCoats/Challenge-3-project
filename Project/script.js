

const characterAmountEl = document.getElementById('characterbox') 
const includeUppercaseEl = document.getElementById ('uppercase')    
const includeNumbersEl = document.getElementById ('numbers')
const includeSymbolsEl = document.getElementById ('symbols')
const generateEl = document.getElementById('generate')
const password = document.getElementById('passwordDisplay')

generateEl.addEventListener('click', generatePassword);

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
    const characterAmount = characterAmountEl.value
    const includeUppercase = includeUppercaseEl.checked
    const includeSymbols = includeSymbolsEl.checked
    const includeNumbers = includeNumbersEl.checked
    passwordDisplay.innertext = password
    var LowercaseCodes = 'abcdefghifklmnopqrstuvwxyz'
    var UppercaseCodes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var numberCodes = '1234567890'
    var symbolCodes = '!@#$%^&*()'
    
    let randopass = LowercaseCodes
    if (includeUppercase) randopass = randopass.concat(UppercaseCodes)
    if (includeNumbers) randopass = randopass.concat(numberCodes)
    if (includeSpecialcharacters) randopass = randopass.concat(symbolCodes)
    const passwordcharacters = []
    for (let i=0; i < characterAmount; i++) {
        const character = randopass[Math.floor(Math.random() * randopass.length)]
        passwordcharacters.push(String.fromrandopass(character))
    }
    return passwordcharacters.join('')
}

