type User3 = {
    name: string,
    id: number
}
type Admin = {
    username: string,
    id: number
}
let sakib :User3 | Admin ={
    name: 'sakib',id: 123
}

sakib = {username:'admin sakib',id:123}

const stringArray:string[] =['s','a','k'] 
const numberArray:number[] =[1,2,3] 
const mixArray:(string | number)[] =[1,2,3,'k'] 


// custom data/value

let customSit :"front"| "back" 

customSit ='front'
customSit ='front'

//touple

let tUser :[number,string,boolean]
tUser = [11,'sm',true]

type UserT = [number,string]

const user :UserT = [12,'w@gmail.com']

interface UserInterface {
    name: string,
    email: string,
    getNumber:() =>number,
    getCoupon(couponName:string,value: number): string
}

interface Admin2 extends UserInterface {
    role: 'admin'
}

const hitesh:Admin2 = {
    name:"hello",
    role: 'admin',
    email:'h@h.com',
    getCoupon: (name:'qwe',value:10)=>{return 'qw'},
    getNumber: ()=>{return 123}
}

class UserClass {
    email:string
    name: string
    constructor(email:string,name:string){
        this.email =email
        this.name = name
    }
}

const hitesh3 = new UserClass('h@h','no')
