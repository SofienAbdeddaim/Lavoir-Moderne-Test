const interleave = ([ x, ...xs ], ys = []) => {
    return  x === undefined
      ? ys                             // base: no x
      : [ x, ...interleave (ys, xs) ]
};

exports.joinListsAlternatingly = (req, res) => {
    res.status(200).json(interleave(req.body.list1, req.body.list2));
};