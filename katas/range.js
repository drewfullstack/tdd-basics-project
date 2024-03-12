function range(...args) {
  if (args.length === 0) {
    return [];
  }

  if (args.length === 1) {
    const length = args[0];
    let outputArray = [];
    for (let i = 0; i < length; i++) {
      outputArray.push(i);
    }
    return outputArray;
  }

  if (args.length === 2) {
    const length = args[0];
    const startValue = args[1];
    let outputArray = [];
    let count = 0;
    for (let i = startValue; count < length; i++) {
      outputArray.push(i);
      count += 1;
    }
    return outputArray;
  }

  if (args.length === 3) {
    const length = args[0];
    const startValue = args[1];
    const step = args[2];
    let outputArray = [];
    let count = 0;
    for (let i = startValue; count < length; i += step) {
      outputArray.push(i);
      count += 1;
    }
    return outputArray;
  }
}

module.exports = range;
