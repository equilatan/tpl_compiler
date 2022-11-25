
function bruh(){
    
    let i = 0;

    if(!token_arr.includes("<delimiter>")){
        printSyntax("Missing ';' at the end of the statement.")
    }



    if(token_arr[i] == "<data_type>"){
        printSyntax(token_arr[i]);     
        i++;
         
        if(token_arr[i] == "<identifier>"){
            printSyntax(token_arr[i]);   
            i++;
               
            if(token_arr[i] == "<delimiter>")
            {
                printSyntax(token_arr[i]);
                i++;
            }
            else if(token_arr[i]== "<assignment_operator>")
            {
                printSyntax(token_arr[i]);
                i++
 
                while(token_arr[i] != "<delimeter>");
            }
        }
    }
    
}

function wrongSyntax(){
    printSyntax("Syntax Error!");
}

function printSyntax(s){
    document.getElementById("syntax").textContent += s;
}