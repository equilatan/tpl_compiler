const { systemPreferences } = require("electron");

function semantic_declaration(){

    if(chkDataType(result[0])){
        printSemantic("eyo bitch");
    }
    else{
        printSemantic("bro wtf");
    }

    /*
    for(var i=0; i < result.length; i++){

        
    }*/
}

function printSemantic(s){
    document.getElementById("semantic").textContent = s;
}


function chkDataType(dataType){

    const typeArr = ["int","double","String","float","boolean"];

    if(typeArr.includes(dataType)){
        return true;
    }
    else return false;
}