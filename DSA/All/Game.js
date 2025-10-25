
function TicTocToe(arr){

for(let i = 0; i < 3; i++){
    if(arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]){
        if(arr[i][0] == "x"){
            return "player 1 will win";
        }else if(arr[i][0] == "0"){
            return "Player 2 will win";
        }
    }
}

for(let i = 0; i < 3; i++){
    if(arr[0][i] == arr[1][i]&& arr[1][i] == arr[2][i]){
        if(arr[0][i] == "x"){
            return "player 1 will win";
        }else if(arr[0][i] == "0"){
            return "player 2 will win";
        }
    }
}

for(let i = 0; i < 3; i++){
    if(arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]){
        if(arr[0][0] == "x"){
            return "player 1 will win";
        }else if(arr[0][0] == "0"){
            return "player 2 will win"; 
        }
    }

    if(arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]){
        if(arr[0][2] == "x"){
            return "player 1 will win";
        }else if(arr[0][2] == "0"){
            return "player 2 will win";
        }
    }

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(arr[i][j] == "#"){
                return "continue";
            }
        }
    }
    return "its a tie";
}
}
console.log(TicTocToe([ 
    ["#", "0", "x"],
    ["x", "x", "0"],
    ["x", "#", "x"]
]));
    


