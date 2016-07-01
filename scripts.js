
//get random color
function getRandomColor() {
          
         //an array of letters.
 	 	 var letters = '0123456789ABCDEF'.split('');
         //the first character to add a color to a div in CSS
 	 	 var color = '#';
 	 	 
           
         //get a number between 1 - 5
         for (var i = 0; i < 6; i++ ) {
 	 	 color += letters[Math.round(Math.random() * 15)];
           
 	 	 }
           
 	 	 return color;
	 	 
}//getRandomColor function
          
//going time
//variables to calculate reaction 		
var clickedTime; 
var createdTime;
var reactionTime;

function makeBox() {
    
	 	//get a random number from 0 to 1.
	 	 var time=Math.random();
          
         //multiply by 5000 since we want from 1 to 5 seconds.
	 	 time=time*5000;
          
          
	 	     //settimeout runs a function after a certain period of time.
			 setTimeout(function() {
				 if (Math.random()>0.5) {
                  //if the randmo number is bigger the 0.5 make a box.
                document.getElementById("box").style.borderRadius="100px";
				 } 
                 
                 else {
                // if random number is not bigger than 0.5 make it a circle.	
                document.getElementById("box").style.borderRadius="0";
				 }
                 
				 var top=Math.random();
				 top=top*300;
				 var left=Math.random();
				 left=left*500;
                 
				 document.getElementById("box").style.top=top+"px";
				 document.getElementById("box").style.left=left+"px";
				 document.getElementById("box").style.backgroundColor=getRandomColor();
				 document.getElementById("box").style.display="block";
                 
				//time when the box appears	
				 createdTime=Date.now();
                 
                 //send the variable time, and this will halt the function for 5 seconds.
			 }, time);
             
}//end of function makeBox


//function to get the time
document.getElementById("box").onclick=function() {
    
            //when the user clicks.
            clickedTime=Date.now();
            
            //the number of miliseconds when the box is created and user clisk
            // the difference. Since is in milliseconds hence division by 1000 to get seconds.
            reactionTime=(clickedTime-createdTime)/1000;
            
            //display the result of the difference between the two variables.    
            document.getElementById("time").innerHTML=reactionTime;
            
            this.style.display="none";
            
            makeBox();
            
}//end of function

makeBox();


