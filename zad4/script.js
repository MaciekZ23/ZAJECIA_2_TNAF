function sum(tab)
{
    return tab.reduce((acc, current) => acc + current, 0);
}

console.log(sum([1, 5, 3]));
console.log(sum([12, 34, 3, 4]));