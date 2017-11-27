var quotes = [
  'There are many ways to skin a cat, as the saying goes, but the truth is that most of them are pretty inhumane.',
  'Its better to ask forgiveness than it is to get permission.',
  'Well-behaved women seldom make history.',
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('myQuote').innerHTML = quotes[randomNumber];
}
