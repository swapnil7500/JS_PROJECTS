const form = document.querySelector('form');
form.addEventListener('submit',function(e) {
  e.preventDefault();
  const hight = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const results = document.getElementById('results');

  if(hight<=0||isNaN(hight)){
    results.innerHTML =` not valid ${hight}`;
  }
  else if(weight<=0||isNaN(weight)){
    results.innerHTML = `not valid ${weight}`;
  }
  else{
    const bmi = (weight / ((hight * hight )/ 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }

})