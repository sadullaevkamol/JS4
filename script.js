// first of all i gonna create our array

let namesInfo = []

// then i am creating endless cycle



for (i = 0; i < Infinity; i++) {
    // now i am goun gto create a prompt that will be asking for commands
    let commandsInfo = prompt('Введите команду (add, del, stop)')
    // now i am creating if condiiton for stop command
    if (commandsInfo == 'stop') {
        break;
        // now i somehow have to create add 
    }else if (commandsInfo == `add`) {
        let justnameInfo = prompt('Введите имя которое хотите добавть')
        namesInfo.push(justnameInfo)
        // creating the same thing but with del
    }else if (commandsInfo == 'del'){
        let justnameInfo = prompt('Введите имя которое хотите удалить')
        namesInfo.splice (justnameInfo, 1)
    }
     
}

console.log(namesInfo);