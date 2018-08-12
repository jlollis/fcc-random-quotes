var quotes = [
  '"There are many ways to skin a cat, as the saying goes, but the truth is that most of them are pretty inhumane."',
  '"Its better to ask forgiveness than it is to get permission."',
  '"Well-behaved women seldom make history."',
  '"Rough diamonds may sometimes be mistaken for worthless pebbles."',
  '"But how shall we expect charity towards others, when we are uncharitable to ourselves? Charity begins at home, is the voice of the world; yet is every man his greatest enemy, and, as it were, his own executioner."',
  '"What song the Syrens sang, or what name Achilles assumed when he hid himself among women, though puzzling questions, are not beyond all conjecture."',
  '"Blessed are the pure in heart, for they will see God."',
  '"The darkness and the light are both alike to you. For you formed my inward parts...I will praise you."',
  '"That the networks and nets of antiquity were little different in the form from ours at present, is confirmable...in this Quincuncial method."',
  '"In order for the light to shine so brightly, the darkness must be present."'
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("myQuote").innerHTML = quotes[randomNumber];
}

$(this).attr("href", 'https://twitter.com/intent/tweet?text=' + 'myQuote');