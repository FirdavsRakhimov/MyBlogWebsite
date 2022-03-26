let nav = document.querySelector("header nav");
window.onscroll = function() {
  if(document.documentElement.scrollTop > 40){
    nav.classList.add("sticky");
  }else{
    nav.classList.remove("sticky");
  }
}


function myFunction() {
  let x = document.querySelector('header nav ul');
  let z = document.getElementsByTagName('li');

  for(let i = 0; i <= z.length - 1; i++){
    z[i].style.padding = "25px 0";
    z[i].style.borderBottom = "1px solid #eee"
    z[i].style.alignItems = "center"
  }
  if (x.style.display === 'none') {
    x.style.display = 'block';
    x.style.position = "fixed";
    x.style.top = "50px"
    x.style.left = "0"
    x.style.backgroundColor="rgba(87, 87, 87, 0.9)"
    x.style.width="100%"
    x.style.textAlign="center"
  } else {
    x.style.display = 'none';
  }
}