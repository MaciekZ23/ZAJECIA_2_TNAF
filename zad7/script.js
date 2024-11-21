function isHappyNumber(n)
{
    const seen = new Set();
    while(n != 1)
    {
        n = String(n).split('').reduce((sum, digit) => sum + Math.pow(Number(digit), 2), 0);
        if(seen.has(n))
        {
            return false;
        }
        seen.add(n);
    }
    return true;
}

console.log(isHappyNumber(19));
console.log(isHappyNumber(2));