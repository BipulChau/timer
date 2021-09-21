let time = process.argv.slice(2);
let setTimer = time.map(t =>  t * 1000);

for (const sec of setTimer) {
  if (typeof(sec) === "number" && sec > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, sec);
  } else {
    continue;
  }
}

  




