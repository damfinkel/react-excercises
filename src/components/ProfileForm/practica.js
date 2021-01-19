const a = { foo: 1, bar: 2};
const b = a;
b.bar = 20;

console.log(a);
console.log(b);

////////////////////

// useEffect siempre se ejecuta una vez al montar el componente, y si le pasamos una prop como parámetro se va a ejecutar
// cada vez que esa prop cambie;