//array find method 
// allows you to find a single iterm in ana array.similar to filter function buts fi8nds an aelemnet in the array return the signle lement as opposed to array of elements

const users=[{
    name:"siva",
    age:20
},
{
    name:"lilly",
    age:14
},
{

    name:"anudhim",
    age:13
}
]
const user = users.find((user)=>user.name==='lilly')
console.log(user)