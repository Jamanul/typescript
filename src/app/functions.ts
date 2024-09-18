const addThree =(num:number):number=>{
    return num +3
}
addThree(7)


function consoleErr(s:string):void {
    console.log(s)
}

function handleError (s:string):never{
    throw new Error('hello')
}