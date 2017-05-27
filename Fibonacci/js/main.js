// //Primer ejemplo
function* fibonacci( limit = Infinity ) {
  let a = 0;
  let b = 1;
 
  while( a < limit ) 
  {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [...first10] = fibonacci(40);
console.log(first10);