let newFun = (a, b, c) => {
  if (!c) {
    c = 0;
  }
  if (b == 1) {
    return a + c;
  } else {
    c += parseInt((a + "").repeat(b));
    return newFun(a, --b, c);
  }
};
console.log(newFun(3, 5));
