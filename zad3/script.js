function range(a, b)
{
    const wynik = [];
    if(a > b)
    {
        for(let i = a; i >= b; i--)
        {
            wynik.push(i);
        }
    }
    for(let i = a; i <=b; i++)
    {
        wynik.push(i);
    }
    return wynik;
}


console.log(range(1, 3)); 
console.log(range(5, 1));