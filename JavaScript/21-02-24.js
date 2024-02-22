 async function findUser(id) {
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
        },1000);
        
    })
}

async function getUser(){
    let user = await findUser(2);
    console.log("user : ", user);
}

getUser();