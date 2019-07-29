var
text=document.getElementById("text");
si=document.getElementById("size");
fo=document.getElementById("font");
function bold () { 
    
if(text.style.fontWeight=="bold"){text.style.fontWeight="normal"}
else {text.style.fontWeight="bold"} }

function it () { 
    
    if(text.style.fontStyle=="italic"){text.style.fontStyle="normal"}
    else {text.style.fontStyle="italic"} ;}
    
function ul() {
    if (text.style.textDecoration=="underline"){text.style.textDecoration=""} else {text.style.textDecoration="underline"}
}
function sizee() {
    text.style.fontSize=si.value
}
function font() { text.style.fontFamily=fo.value}




    $('#que1').hover(function(){
    
    $('#dr1').css("opacity","0.3");
    $("#drr1").show();
    
    },function(){
    
        $('#dr1').css("opacity","1");
        $("#drr1").hide();
})
    
$('#que2').hover(function(){
    
    $('#dr2').css("opacity","0.3");
    $("#drr2").show();
    
    },function(){
    
        $('#dr2').css("opacity","1");
        $("#drr2").hide();
})


$('#que3').hover(function(){
    
    $('#dr3').css("opacity","0.3");
    $("#drr3").show();
    
    },function(){
    
        $('#dr3').css("opacity","1");
        $("#drr3").hide();
})

    $("#drr1").click(function(){

        $("#back").show();
        
        
        }
        
        );
        
        $("#icon").click(function(){
        
        $("#back").hide(); });
        
        
    
        $("#drr2").click(function(){

            $("#back").show();
            
            
            }
            
            );
            
            $("#icon").click(function(){
            
            $("#back").hide(); });

            
        $("#drr3").click(function(){

            $("#back").show();
            
            
            }
            
            );
            
            $("#icon").click(function(){
            
            $("#back").hide(); });
            
            
            
        



            $('#que11').hover(function(){
    
                $('#dr11').css("opacity","0.3");
                $("#drr11").show();
                
                },function(){
                
                    $('#dr11').css("opacity","1");
                    $("#drr11").hide();
            })
                
            $('#que11').hover(function(){
                
                $('#dr21').css("opacity","0.3");
                $("#drr21").show();
                
                },function(){
                
                    $('#dr21').css("opacity","1");
                    $("#drr21").hide();
            })
            
            
            $('#que11').hover(function(){
                
                $('#dr31').css("opacity","0.3");
                $("#drr31").show();
                
                },function(){
                
                    $('#dr31').css("opacity","1");
                    $("#drr31").hide();
            })
            
                $("#drr11").click(function(){
            
                    $("#back").show();
                    
                    
                    }
                    
                    );
                    
                    $("#icon").click(function(){
                    
                    $("#back").hide(); });
                    
                    
                
                    $("#drr21").click(function(){
            
                        $("#back").show();
                        
                        
                        }
                        
                        );
                        
                        $("#icon").click(function(){
                        
                        $("#back").hide(); });
            
                        
                    $("#drr31").click(function(){
            
                        $("#back").show();
                        
                        
                        }
                        
                        );
                        
                        $("#icon").click(function(){
                        
                        $("#back").hide(); });      
        
        
    

  
                        var firebaseConfig = {
                            apiKey: "AIzaSyDiZrwpbJfA5NSTZuq_iE9xr72Hh5gsrZo",
                            authDomain: "test-b864d.firebaseapp.com",
                            databaseURL: "https://test-b864d.firebaseio.com",
                            projectId: "test-b864d",
                            storageBucket: "",
                            messagingSenderId: "222056306148",
                            appId: "1:222056306148:web:967f2e380d5bdccc"
                          };
                          // Initialize Firebase
                          firebase.initializeApp(firebaseConfig);
                        