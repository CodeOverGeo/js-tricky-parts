function curriedAdd(total) {
  if (total === undefined) return 0;
  return function addTo(num) {
    if (num === undefined) return total;
    total += num;
    return addTo;
  };
}

module.exports = { curriedAdd };
