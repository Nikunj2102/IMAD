//submit username/password to login

var submit=document.getElementById("submit_btn");
submit.onclick = function(){
  //make a request to the server and send the name
 
    //create a request to the counter end point
    
    var request=new XMLHttpRequest();
    
    //capture the response ans store it in a variable
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          
          // we take some action
          if(request.status===200)
          {     
              console.log("user logged in");
              alert("logged in successffullly");
          }
          else if(request.status=== 403)
          {
              alert("invalid username/password");
          }
          else if(request.status===500)
          {
              alert("something went wrong on the server");
          }
        }
          
      };
      var username=document.getElementById("username").value;
      var password=document.getElementById("password").value;
      //make a request
      console.log(username);
      console.log(password);
      request.open('POST', "http://nikunjdhingra21.imad.hasura-app.io/login ", true);
      request.setRequestHeader("Content-Type" , "application/json");
      request.send(JSON.stringify({username: username , password: password}));
     
 
};
