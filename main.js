// Add class function
function addClass(o, c) {
  var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
  if (re.test(o.className)) return;
  o.className = (o.className + " " + c)
    .replace(/\s+/g, " ")
    .replace(/(^ | $)/g, "");
}

// Remove class function
function removeClass(o, c) {
  var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
  o.className = o.className
    .replace(re, "$1")
    .replace(/\s+/g, " ")
    .replace(/(^ | $)/g, "");
}

// Add classes to the logo
var item = document.getElementById("brand");
item.addEventListener("mouseover", active, false);
item.addEventListener("mouseout", reset, false);

function active() {
  removeClass(this, "reset-brand");
  addClass(this, "active-brand");
}

function reset() {
  removeClass(this, "active-brand");
  addClass(this, "reset-brand");
}

