var table = document.getElementById('table');
table.addEventListener('input', function(ev){
  var className = ev.target.className;
  var total = document.getElementsByClassName(className +' total')[0];
  var marks = document.getElementsByClassName(className);
  var counter = 0;
  var currentResult = 0;
  for (var i = 0; i < marks.length; i++) {
    console.log("mark= " + marks[i].value);
    if ((marks[i].value * 1)  > 1 && (marks[i].value * 1) < 7) {
      currentResult += marks[i].value * 1;
      counter++;
    }
  }

  if (currentResult > 1) {
    total.innerHTML = (currentResult / counter).toFixed(2);
  }
} );
