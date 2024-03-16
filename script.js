let btn = document.querySelector(".btn");
let right_inner = document.querySelector(".right_inner");
let h1= document.querySelector("h1");
let h2= document.querySelector("h2");
let sound=document.querySelector('#sound');

function check() {
  return new Promise((resolve, reject) => {
    right_inner.innerHTML=`<img src="74H8.gif" alt="">`;
    let id=Math.floor(Math.random()*1000);
console.log(id);
    setTimeout(function callback() {
      resolve();
      right_inner.innerHTML = "";
      h2.innerHTML+=`${id}`;
      h1.innerText="Your Order is Ready!!!";
      h2.style.display="block";
    }, id+2000);
    
    
  });
}

btn.addEventListener('click', () => {
  h1.innerText="Processing...";
  
  h2.innerHTML=`Order Id:`;
  h2.style.display="none";
  right_inner.innerHTML = "";
  check().then(() => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedValues = [];
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        selectedValues.push(checkbox.value);
        checkbox.checked = false;
      }
    });
    if(selectedValues.length===0)
    {
      h2.innerText="Waiting";
      h1.innerText="Waiting for Order";
    }
    else{
      sound.play();
      selectedValues.forEach((ele) => {
        console.log(ele);
        if (ele === 'pasta') {
          right_inner.innerHTML += `<img src="https://ifoodreal.com/wp-content/uploads/2021/06/pasta-with-zucchini-and-tomatoes-recipe-2.jpg">`;
        }
         else if (ele === 'shake') {
          right_inner.innerHTML += `<img src="https://www.oliviascuisine.com/wp-content/uploads/2021/06/strawberry-milkshake.jpg">`;
        } 
        else if (ele === 'Fry rice') {
          right_inner.innerHTML += `<img src="https://th.bing.com/th/id/OIP.GGcElWYhTufbXLgO_YrdrgHaE8?rs=1&pid=ImgDetMain">`;
        }
        else if (ele === 'drink') {
          right_inner.innerHTML += `<img src="https://www.christinascucina.com/wp-content/uploads/2021/07/fullsizeoutput_f479-1341x2048.jpeg">`;
        } else if (ele === 'Salmon Toast') {
          right_inner.innerHTML += `<img src="https://bing.com/th?id=OSK.48da810809daaf91f005ea1e4107ca61">`;
        }
        else if (ele === 'pizza') {
          right_inner.innerHTML += `<img src="https://www.engelvoelkers.com/wp-content/uploads/2014/07/pizza-stock.jpg">`;
        } else if (ele === 'Pao bhaji') {
          right_inner.innerHTML += `<img src="https://i2.wp.com/vegecravings.com/wp-content/uploads/2016/10/pav-bhaji-recipe-step-by-step-instructions.jpg?w=1612&quality=65&strip=all&ssl=1">`;
        }
        else if (ele === 'Parantha') {
          right_inner.innerHTML += `<img src="https://th.bing.com/th/id/OIP.BrxD-3rK58XFSrjINKueegHaE8?rs=1&pid=ImgDetMain">`;
        }
      });
    }
    
  });
});
