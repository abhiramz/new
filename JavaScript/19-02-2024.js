function findUser(id) {

    let users = [
        {
            id : 1,
            name : "john",
            email : "john@gmail.cpom"

        },
        {
            id : 2,
            name : "jane",
            email : "jane@gmail.com"

        },
        {
            id : 3,
            name : "mike",
            email : "mike@gmail.com"

        },
    ];

    let user = users.find((e) => e.id === id);
    return user;

}
let user = findUser(1);
console.log("User : ",user);

function findUser1(id) {

    let users = [
        {
            id : 1,
            name : "john",
            email : "john@gmail.cpom"

        },
        {
            id : 2,
            name : "jane",
            email : "jane@gmail.com"

        },
        {
            id : 3,
            name : "mike",
            email : "mike@gmail.com"

        },
    ];

    setTimeout(()=> {
        let user = users.find ((e) => e.id === id);
        return user;
    },1000)

}

let user1 = findUser1(1);
console.log("User1 : ",user1);

//20-02-2024


function findUser2(id) {
    return new Promise((resolve, reject) => {
        let users = [
            {
                id : 1,
                name : "john",
                email : "john@gmail.cpom"
    
            },
            {
                id : 2,
                name : "jane",
                email : "jane@gmail.com"
    
            },
            {
                id : 3,
                name : "mike",
                email : "mike@gmail.com"
    
            },
        ];
        
        setTimeout(() => {
            let user= users.find((e) => e.id === id);
            if (users) {
                resolve(user);
            } else {
                reject("user not found");
            }
        },5000);
        
    })
}

let user2 = findUser2(2);
console.log("user2 : ", user2);

user2.then((user) => {
    console.log("Reached then...");
    console.log("user : ", user);
    user.address = "myAddress";
    return user;
})
.then((user) =>{
    console.log("user :",user);
    user.pincode = "123456";
    return user;
})
.then((user) => {
    console.log("user : ",user);

})
.catch((error) => {
    console.log("Reached catch...");
    console.log("eror : ",error);

})

.finally(()=>{
    console.log("Reached finally...");
})