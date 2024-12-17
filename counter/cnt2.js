let count = 0;
const value = document.getElementById("value");
const inc = document.getElementsByClassName("inc");
const dec = document.getElementsByClassName("dec");
const res = document.getElementsByClassName("res");




inc.addEventListener("click" , function() {
    count += 1;

    value.textContent = count;
     return value;
     

};  );

dec.addEventListener("click" , function() {
    count -= 1;

    value.textContent = count;
     return value;

}; );

res.addEventListener("click" , function() {
    count = 0;

    value.textContent = count;
     return value;

}; );