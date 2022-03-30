 // get all Answer images
  images= ["image/magic8ball_1.png","image/magic8ball_2.png","image/magic8ball_3.png","image/magic8ball_4.png"]
 
function ask(){
      if(question.value.length<1){
          //Display message if did not enter question
      document.getElementById("error").innerHTML="Enter Your Question Please"
      }
      else
      {
    //Get a random index
    random_index = Math.floor(Math.random()*images.length);
    //Display the image 
   document.getElementById('show_image').src = `${images[random_index]}`
    //Clear the question input field
    document.getElementById("question").value="";
   // Clear the error msg 
    document.getElementById("error").innerHTML="";

}
}