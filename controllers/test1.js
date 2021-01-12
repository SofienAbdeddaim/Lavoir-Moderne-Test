const forCalculate = (list) => {
  let sum = 0;
  for(let i=0; i<list.length; i++) {
    sum += list[i];
  }
  return {"result": sum};
}
const forEachCalculate = (list) => {
  let sum = 0;
  list.forEach(val => {
    sum += val;
  });
  return {"result": sum};
}

const whileCalculate = (list) => {
  let i = 0;
  let sum = 0;
  while(i < list.length) {
    sum += list[i];
    i++;
  }
  return {"result": sum};
}

const recursionCalculate = (list) => {
  let sum = (array) => (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
  return {"result": sum(list)};
}

exports.calculWithFor = (req, res) => {
  res.status(200).json(forCalculate(req.body.list));
};

exports.calculWithForEach = (req, res) => {
  res.status(200).json(forEachCalculate(req.body.list));
};

exports.calculWithWhile = (req, res) => {
  res.status(200).json(whileCalculate(req.body.list));
};

exports.calculWithRecursion = (req, res) => {
  res.status(200).json(recursionCalculate(req.body.list));
};

exports.calculWithAll = (req, res) => {
  res.status(200).json(
    {
      "for": forCalculate(req.body.list),
      "forEach": forEachCalculate(req.body.list),
      "while": whileCalculate(req.body.list),
      "recursion": recursionCalculate(req.body.list)
    }
  );
}
