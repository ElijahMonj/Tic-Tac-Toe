
const personFactory = (name, marker) => {
    const sayHello = () => console.log('hello!');
    return { name, marker, sayHello };
};
  
  const player1 = personFactory('Kaguya', 'X');
  const player2 = personFactory('Miyuki', 'O');
  let newArray;
  

  const gameBoardArray = (() => {
    const gameBoard =document.getElementsByClassName('box');
    const gridArray=Array.from(gameBoard);
    return {
      gridArray,
    };
  })();


toChange();
   
function toChange(){

  document.getElementById("versus").innerHTML = "Miyuki vs. Kaguya";
  const grid=gameBoardArray.gridArray;
  const p1=player1;
  const p2=player2;
  let turn=true;
  newArray=[];
  let winner="";
  
  for(let i=0;i<grid.length;i++){
    grid[i].textContent="";
    grid[i].style.backgroundImage="url()";
    
  }

  grid.forEach(v => v.addEventListener('click', function() {

    if((v.textContent=='')&&(winner=="")){
      if(turn==true){
         v.textContent=p1.marker;
          v.style.backgroundImage = "url(p1.png)";
          turn=false;
         
      }else if(turn==false){
        v.textContent=p2.marker;
        v.style.backgroundImage= "url(p2.png)";
        turn=true;
      }
      for(let i=0;i<grid.length;i++){
        newArray[i]=grid[i].textContent;
      }
     
    }
    
    if((newArray[0]=='X')&&(newArray[1]=='X')&&(newArray[2]=='X')){
      document.getElementById("versus").innerHTML = p1.name+" won!";
      winner=p1.name;
    }
    if((newArray[3]=='X')&&(newArray[4]=='X')&&(newArray[5]=='X')){
      document.getElementById("versus").innerHTML = p1.name+" won!";
      winner=p1.name;
    }
    if((newArray[6]=='X')&&(newArray[7]=='X')&&(newArray[8]=='X')){
      winner=p1.name;
      document.getElementById("versus").innerHTML = winner+" won!";
    }
    //horizontal
    if((newArray[0]=='X')&&(newArray[3]=='X')&&(newArray[6]=='X')){
      
      winner=p1.name;
      document.getElementById("versus").innerHTML = winner+" won!";
    }
    if((newArray[1]=='X')&&(newArray[4]=='X')&&(newArray[7]=='X')){
    
      winner=p1.name;
      document.getElementById("versus").innerHTML = winner+" won!";
    }
    if((newArray[2]=='X')&&(newArray[5]=='X')&&(newArray[8]=='X')){
    
      winner=p1.name;
      document.getElementById("versus").innerHTML = winner+" won!";
    }
    //vertical
    if((newArray[0]=='X')&&(newArray[4]=='X')&&(newArray[8]=='X')){
    
      winner=p1.name;
      document.getElementById("versus").innerHTML = winner+" won!";
    }
    if((newArray[2]=='X')&&(newArray[4]=='X')&&(newArray[6]=='X')){
     
      winner=p1.name;
      document.getElementById("versus").innerHTML = winner+" won!";
    }
    //diagonal
    //player 2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if((newArray[0]=='O')&&(newArray[1]=='O')&&(newArray[2]=='O')){
      
      winner=p2.name;
      document.getElementById("versus").innerHTML = winner+" won!";
    }
    if((newArray[3]=='O')&&(newArray[4]=='O')&&(newArray[5]=='O')){
     
      winner=p2.name;
      document.getElementById("versus").innerHTML = winner+" won!";
    }
    if((newArray[6]=='O')&&(newArray[7]=='O')&&(newArray[8]=='O')){
      
      winner=p2.name;
      document.getElementById("versus").innerHTML = winner+" won!";
    }
    //horizontal
    if((newArray[0]=='O')&&(newArray[3]=='O')&&(newArray[6]=='O')){
      
      winner=p2.name;
      document.getElementById("versus").innerHTML = winner+" won!";
    }
    if((newArray[1]=='O')&&(newArray[4]=='O')&&(newArray[7]=='O')){
     
      winner=p2.name;
      document.getElementById("versus").innerHTML = winner+" won!";
    }
    if((newArray[2]=='O')&&(newArray[5]=='O')&&(newArray[8]=='O')){
     
      winner=p2.name;
      document.getElementById("versus").innerHTML = winner+" won!";
    }
    //vertical
    if((newArray[0]=='O')&&(newArray[4]=='O')&&(newArray[8]=='O')){
    
      winner=p2.name;
      document.getElementById("versus").innerHTML = winner+" won!";
    }
    if((newArray[2]=='O')&&(newArray[4]=='O')&&(newArray[6]=='O')){
      
      winner=p2.name;
      document.getElementById("versus").innerHTML = winner+" won!";
    }
    //diagonal
    else if((newArray[0]!="")&&(newArray[1]!="")&&(newArray[2]!="")&&(newArray[3]!="")&&
    (newArray[4]!="")&&(newArray[5]!="")&&(newArray[6]!="")&&(newArray[7]!="")&&(newArray[8]!="")&&winner==""){
      document.getElementById("versus").innerHTML = "It's a draw!";
    }  

  }));
 
}

