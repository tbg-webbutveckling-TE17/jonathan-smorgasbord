var btnAddFriend = document.querySelector(".aFriend");
var btnRemoveFriend = document.querySelector(".rFriend")
var inputFriend = document.querySelector(".iFriend")

var user = {
    friends: ["Hello", "bye"],
    addFriend: function(friend) {
        this.friends.push(friend);
    },
    removeFriend: function(friend) {
        this.friends.pop(friend);
    }
};

btnAddFriend.addEventListener("click", function() {
    user.addFriend(prompt("Insert name: "))
});

btnRemoveFriend.addEventListener("click", function() {
    user.removeFriend(prompt("Insert name: "))
});

var img = document.getElementById("image")

var btnDmgTaken = document.getElementsByTagName("button", 2);
var btnAddMana = document.getElementsByTagName("button", 3);
var btnCastSpell = document.getElementsByTagName("button", 4);

var hero = {
    isAlive: true,
    name: "ArneSlayer",
    hp: 100,
    mana: 0,
    DmgTaken: function(amount) {
        if(this.hp - amount < 0) {
            this.isAlive = false;
            this.hp = 0;
            console.log(`${this.name} has died!`);
            img.src = "assets/images/dead.jpg";
        } else {
            
            this.hp -= amount;
        }
    },
    AddMana: function(amount) {
        if(this.mana + amount >= 100) {
            this.mana = 100;
            console.log("Mana fully restored!")
        } else {
            this.mana += amount;
            console.log(`${this.mana} mana added!`)
        }
    },
    CastSpell: function(cost) {
        if(this.mana - cost < 0) {
            console.log("Insufficient mana")
        } else {
            hero.mana -= cost;
            console.log(`${this.name} casts a spell!`)
        }
    }
};

hero.addMana(30);
hero.castSpell(20);
hero.castSpell(20);
hero.dmgTaken(90);
hero.dmgTaken(20);
