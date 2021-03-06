function pagination (req, res, next){
  var offset = parseInt(req.query.offset || 0);
  var limit = parseInt(req.query.limit || 30);
  var keyword = res.locals.keywordValue;
  res.locals.pagination = [];
  for (var i = 0; i < res.locals.pageNumber; i++) {
    res.locals.pagination[i] = {
        id: i+1,
        url: "/api?offset="+(limit*i)+"&limit="+limit+"&keyword="+keyword
    }

  }
  console.log(res.locals.pagination);
  next();
}

module.exports = {
    pagination: pagination
};
