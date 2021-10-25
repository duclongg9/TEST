var plorp = ["BINH", "HUNG" , "PHUC" , "CAO" , "KHANH"];
var long = plorp.reduce(function(a, b) { 
  return a.length > b.length ? a : b
}, '');
console.log(long);
