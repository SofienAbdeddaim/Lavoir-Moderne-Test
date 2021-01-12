const higherPath = (matrix) => {
    let sum = 0;
    for(let i=0; i<matrix.length - 1; i++) {
        for(let j=0; j<matrix[i].length - 1; j++) {
            sum += matrix[i+1][j]>matrix[i][j+1] ? matrix[i+1][j] : matrix[i][j+1];
        }
    }
    return sum;
};

exports.calculateHigherPath = (req, res) => {
    res.status(200).json(higherPath(req.body.matrix));
};