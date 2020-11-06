const fetch = require('node-fetch');

module.exports.getHomePage = function(req, res){
  res.render('index')
}

module.exports.getCyberpunkNews = function (req, res) {
fetch(
    'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=1091500&count=5&maxlength=300&format=json'
  )
    .then((res) => res.json())
    //получили конкретный элемент (объект)
    .then((json) => {
      res.render('cyberpunk', { newsArr: json.appnews.newsitems });
      // console.log(json.appnews.newsitems);
    });
};

module.exports.getVampireNews = function(req, res){
  fetch(
    'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=532790&count=5&maxlength=300&format=json'
  )
    .then((res) => res.json())
    //получили конкретный элемент (объект)
    .then((json) => {
      res.render('vampire', { newsArr: json.appnews.newsitems });
      // console.log(json.appnews.newsitems);
    });

}

module.exports.getDyinglight2News = function(req,res){
  fetch(
    'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=534380&count=5&maxlength=300&format=json'
  )
    .then((res) => res.json())
    //получили конкретный элемент (объект)
    .then((json) => {
      res.render('dyinglight2', { newsArr: json.appnews.newsitems });
      // console.log(json.appnews.newsitems);
    });
}
