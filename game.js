var fishCount = 0;
var increaseamount = 1;
var steelrod = 50; 
var hassteelrod = false; 
var goldrod = 1500;
var hasgoldrod = false;
var diamondrod = 15000;
var hasdiamondrod = false;

/*displays the amount of fish you have*/
function increaseFish(){
  fishCount += increaseamount;
  document.getElementById("fishdisplay").innerHTML = fishCount; 
}

/*buying of steelrod*/
function boughtsteelrod(){
  if (hassteelrod==false){
    if(fishCount>=50){
      fishCount -= steelrod;
      document.getElementById("fishdisplay").innerHTML = fishCount;
      hassteelrod=true;
      document.getElementById("roddisplay").src = '/images/steel.png';
      increaseamount=15;
    }
    else{
      alert("You do not have enough fish");
    }
  }
  else{
    alert("You have already bought this");
  }
      
} 

/*buying of goldrod*/
function boughtgoldrod(){
  if (hasgoldrod==false){
    if(fishCount>=1500){
      fishCount-=goldrod
      document.getElementById("fishdisplay").innerHTML = fishCount;
      hasstealrod=true;
      hasgoldrod=true;
      document.getElementById("roddisplay").src = '/images/gold.png';
      increaseamount=150;
    }
    else{
      alert("You do not have enough fish");
    }
  }
  else{
    alert("You have already bought this");
  }
}

/*buying of diamondrod*/
function boughtdiamondrod(){
  if(hasdiamondrod==false){
    if(fishCount>=15000){
      fishCount-=diamondrod
      document.getElementById("fishdisplay").innerHTML = fishCount;
      hasstealrod=true;
      hasgoldrod=true;
      hasdiamondrod=true;
      document.getElementById("roddisplay").src = '/images/diamond.png';
      increaseamount=1000;
    }
    else{
      alert("You do not have enough fish");
    }
  }
  else{
    alert("You already have this rod");
  }
}

if(hasdiamondrod==true){
  increaseamount+=100
}