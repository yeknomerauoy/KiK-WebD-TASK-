
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 
var sum=0;
const arr1=[
  "food1" , "food2" ,"food3" ,"food4" ,
  "food5" , "food6" ,"food7" ,"food8" 
];
const arr2=[
 0 ,0 ,0 ,0 ,
 0 ,0 ,0 ,0
];

const arr3=[
  0 ,0 ,0 ,0 ,
  0 ,0 ,0 ,0
 ];

const arr4=[
  0 ,0 ,0 ,0 ,
  0 ,0 ,0 ,0
 ];
function read(num,x){
  sum=sum+num;
  arr2[x-1]+=1
  arr3[x-1]=1
  arr4[x-1]=num
  fn2()
  
}

function raisealrm(){
  if (sum!=0){
    var y="\n";
    let i=0;
    let j=1;
    while(i<arr3.length){
      if (arr3[i]==1){
        y+=j+". "+arr1[i]+ "       x "+arr2[i]+"  = "+ arr4[i]*arr2[i] +"\n";
        j++
      }
      i++;
    }
    alert("YOUR CART .\n"+ y+ "\nGST (@ 18%)    = "+ Math.round(sum*0.18)+"\nTOTAL              = "+ Math.round(sum*1.18)+"\nPRESS \" OK \" TO PLACE ORDER");
    alert("YOUR ORDER HAS BEEN PLACED");
    location.reload();
}
  else{
    alert("YOU HAVE 0 VALUE ORDER");
    
  }
}

function fn1(){
  alert("YOUR RESPONSE HAS BEEN RECORDED")
}

function fn2(){
  document.getElementById("side").innerHTML=" Total= "+sum;
}
