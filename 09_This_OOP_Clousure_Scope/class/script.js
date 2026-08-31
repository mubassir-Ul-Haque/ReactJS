class User{
    constructor(name,address,username,email){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email; 
        this.role = "user"
    }

checkrole(){
    console.log(`You are a ${this.role}`);
}

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `from ${this.name} : ${text}`;
        h1.style.color= "red";
        document.body.append(h1);
    }
};

//classical inheritance

class Admin extends User{
    constructor(name,address,username,email){
        super(name,address,username,email);
        this.role = "admin";
    }

    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        })
    }

}

let u1 = new User("mubassir" , "dhaka" , "mubassir@2002" , "mubassir@gmail.com");

let u2 = new User("sofi" , "bd" , "mubassir@2002" , "muba@gmail.com" );

let u3 = new User("redwan" , "chittagong" , "mubassir@2002" , "mubassir@gmail.com" );

let a1 = new Admin("redwan" , "dhaka" , "mubassir@2002" , "mubassir@gmail.com");


//protypal inheritance

let coffee = {
    color:"dark",
    drink:function(){
        console.log("good")
    }
}

let arabiantea = Object.create(coffee); //shared
arabiantea.taste = "salty"
arabiantea.extrainfo = "production in arab";
arabiantea.drink();
console.log(arabiantea)


