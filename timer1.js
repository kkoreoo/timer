const timer = (arr) => {
  let delay = arr;
  delay.sort((a, b) => {
    return a - b;
  });

  delay = delay.map(Number);

  let beep = 0;
  
  for (const element of delay) {
    if (element < 0 || typeof(element) !== 'number') {
      continue; // skips the element if negative num or not a num;
    } else if (element >= 0) {
      beep = element * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log('beep');
      }, beep);
    }
  }
};

timer(process.argv.splice(2,));










