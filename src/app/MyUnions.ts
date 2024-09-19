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
