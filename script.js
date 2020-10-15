function myFunction(t) {
    if (t==0) {
        document.getElementById("demo").value += document.getElementById("button0").innerHTML;
    }
    if (t==1) {
        document.getElementById("demo").value += document.getElementById("button1").innerHTML;
    }
    
   else if (t==2){
    document.getElementById("demo").value += document.getElementById("button2").innerHTML;

   }
   else if (t==3){
    document.getElementById("demo").value += document.getElementById("button3").innerHTML;

   }
   else if (t==4){
    document.getElementById("demo").value +=  document.getElementById("button4").innerHTML;

   }
   else if (t==5){
    document.getElementById("demo").value +=  document.getElementById("button5").innerHTML;

   }
   if (t==6) {
        document.getElementById("demo").value += document.getElementById("button6").innerHTML;
    }
    if (t==7) {
        document.getElementById("demo").value += document.getElementById("button7").innerHTML;
    }
    if (t==8) {
        document.getElementById("demo").value += document.getElementById("button8").innerHTML;
    }
    if (t==9) {
        document.getElementById("demo").value += document.getElementById("button9").innerHTML;
    }

    
}
function myFunction2(y) {
    if (y==1){
    document.getElementById("demo").value +=  document.getElementById("button10").innerHTML;
    }

    else if (y==2){
    document.getElementById("demo").value +=  document.getElementById("button11").innerHTML;
    }

    else if (y==3){
    document.getElementById("demo").value +=  document.getElementById("button12").innerHTML;
    }

    else if (y==4){
    document.getElementById("demo").value += document.getElementById("button13").innerHTML;
    }

} 
function cancel(){
    document.getElementById('demo').value = "";
}
function equalTo(){
        var result = document.getElementById("demo").value;
        if(result.includes(" +  +")){
            
            document.getElementById("demo").value += "";
        }
        else if(result.includes("+")){
            var value_1 = document.getElementById("demo").value.split("+")[0];
            var value_2 = document.getElementById("demo").value.split("+")[1];
            document.getElementById("demo").value += " "+ " "+"=" +" "+ " "+Number(Number(value_1) + Number(value_2));
        }
        else if(result.includes(" -  -")){
            
            document.getElementById("demo").value += "";
        }
        else if(result.includes("-")){
            var value_1 = document.getElementById("demo").value.split("-")[0];
            var value_2 = document.getElementById("demo").value.split("-")[1];
            document.getElementById("demo").value += " "+ " "+"=" +" "+ " "+Number(Number(value_1) - Number(value_2));
        }
        else if(result.includes(" *  *")){
            
            document.getElementById("demo").value += "";
        }
        else if(result.includes("*")){
            var value_1 = document.getElementById("demo").value.split("*")[0];
            var value_2 = document.getElementById("demo").value.split("*")[1];
            document.getElementById("demo").value += " "+ " "+"=" +" "+ " "+Number(Number(value_1) * Number(value_2));
        }
        else if(result.includes(" /  /")){
            
            document.getElementById("demo").value += "";
        }
        else if(result.includes("/")){
            var value_1 = document.getElementById("demo").value.split("/")[0];
            var value_2 = document.getElementById("demo").value.split("/")[1];
            document.getElementById("demo").value += " "+ " "+"=" +" "+ " "+Number(Number(value_1) / Number(value_2));
        }   
}
