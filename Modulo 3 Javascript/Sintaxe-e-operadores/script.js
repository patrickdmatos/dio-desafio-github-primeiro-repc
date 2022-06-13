const num1 = 20;
const num2 = 20;

if(num1 === num2)
{
    console.log("os numeros " + num1 + " e " + num2 + " são iguais");
}
else{
    console.log("os numeros " + num1 + " e " + num2 + " não são iguais");
}
function maior(num1, num2)
{
    const soma = num1 + num2;
    let comp10 = 'menor';
    let comp20 = 'menor';

    if(soma > 10)
    {
        comp10 = 'maior';
    }
    if(soma > 20)
    {
        comp20 = 'maior';
    }

    return ("O resultado da sua soma é " + soma + ", que é " + comp10 + " do que 10 e " + comp20 + " do que 20.");
}

console.log(maior(num1, num2));