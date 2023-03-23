
let stars = document.getElementById('stars');

let Moon = document.querySelector('.Moon');

let moon = document.getElementById('moon');

let mountains3 = document.getElementById('mount3');

let mountains4 = document.getElementById('mount4');

let river = document.getElementById('river');

let boat6 = document.getElementById('boat');




window.onscroll = ()=>{
    let value = scrollY;
    stars.style.left = value + 'px';
   
    moon.style.top = value*1 + 'px';
 
    mountains3.style.right = value * 1.5 + 'px';
    mountains4.style.left= value * 1.2 + 'px';
   
    river.style.left = value + 'px';
    boat6.style.left = value + 'px';
    Moon.style.fontSize = value + 'px';
    if(scrollY>=67){
        Moon.style.fontSize = 67 + 'px';
        Moon.style.Position = 'fixed';
       
        if(scrollY>=180){
            document.querySelector('.main').style.background = 'linear-gradient(#0a82c2 , #178ff1)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#280355 , #680c9e)'; 
        }

        if(scrollY>=180){
            moon.style.visibility = 'hidden';
        }else{
            moon.style.visibility = 'visible';
        }
    }

}