function sumArgs(...args) {
  if (args.length === 0) {
    return 0;
  } else if (args.length === 1) {
    return args[0];
  } else {
    return args.reduce((cv, acc) => {
      return cv + acc;
    }, 0);
  }
}

module.exports = sumArgs;
