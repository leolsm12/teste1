const sequencia = (num) => {
    let a = 0;
    let b = 1;
  
    while (b <= num) {
      if (b === num) {
        return true;
      }
      const temp = a + b;
      a = b;
      b = temp;
    }
  
    return false;
  }
  
  const numero = 9;
  if (sequencia(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
  }