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
var pHealth = document.getElementById("hpAmount")
var pMana = document.getElementById("manaAmount")

var hero = {
    isAlive: true,
    name: "ArneSlayer",
    hp: 100,
    mana: 0,
    DmgTaken: function(amount) {
        if(this.hp - amount <= 0) {
            this.isAlive = false;
            this.hp = 0;
            console.log(`${this.name} has died!`);
            img.src = "assets/images/dead.jpg";
            pHealth.innerHTML = "0, you are dead!"
            return
        }
        if(this.hp - amount <= 50) {
            this.hp -= amount;
            img.src = "assets/images/real-shit.jpg";
            pHealth.innerHTML = `${this.hp}, health getting low!`
            return
        } else {
            this.hp -= amount;
            pHealth.innerHTML = this.hp
            return
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
        pMana.innerHTML = this.mana;
    },
    CastSpell: function(cost) {
        if(this.mana - cost < 0) {
            console.log("Insufficient mana")
        } else {
            hero.mana -= cost;
            console.log(`${this.name} casts a spell!`)
        }
        pMana.innerHTML = this.mana;
    }
};

var btnDmgTaken = document.getElementById("dmg")
var btnAddMana = document.getElementById("mana")
var btnCastSpell = document.getElementById("spell")

btnDmgTaken.addEventListener("click", function() {
    hero.DmgTaken(20);
});
btnAddMana.addEventListener("click", function() {
    hero.AddMana(20);
});
btnCastSpell.addEventListener("click", function() {
    hero.CastSpell(20);
});
