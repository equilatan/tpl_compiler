
function bruh(){
    
    let i = 0;
    let pattern_1 = ['<data_type>','<identifier>','<delimiter>'];
    let pattern_2 = ['<data_type>','<identifier>','<assignment_operator>','<value>'];
    let pattern_3 = ['<value>', '<arithmetic_operator>'];
    let valueChk = '';
    let syntaxChk = true;
    if(!token_arr.includes("<delimiter>")){
        printSyntax("Error: Missing ';' at the end of the statement.");
    }
    else{
        for(let i = 0; token_arr[i]!="<delimiter>"; i++){

            if(!(token_arr[i] == pattern_1[i] || token_arr[i] == pattern_2[i] || token_arr[i] == valueChk)){
                printSyntax("Syntax error!"); 
                syntaxChk = false;
                break;
            }

            if(token_arr[i] == "<value>"){
                valueChk = '<arithmetic_operator>';
            }
            else if(token_arr[i] == '<arithmetic_operator>'){
                valueChk = '<value>';
            }

        }
        if(syntaxChk==true){
            printSyntax("Syntax is Correct!"); 
        } 

        }
    }
    
    


function wrongSyntax(){
    printSyntax("Syntax Error!");
}

function printSyntax(s){
    document.getElementById("syntax").textContent = s;
}