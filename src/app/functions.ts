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

function createUser(name:string,price:number):{name:string,price:number}{
    return {name,price}
}
createUser('sakib',100)

type User ={
    name: string,
    email: string,
    isPaid?: boolean
}

const getUser =(user:User):User=>{
    return {name:user.name,email:user.email,isPaid:user.isPaid}
}

getUser({name:"L",email:"L",isPaid:true})
type User2 ={
    name: string,
    email: string,
    isPaid?: boolean
}

const getUser2 =(user:User2):User2=>{
    return {name:user.name,email:user.email}
}

getUser2({name:"L",email:"L",isPaid:true})


type myNumber ={
    mobile : string
}

type userDetails = myNumber & User2