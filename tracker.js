//use of meathods to changing the properties of object
let resturant = {
    name: 'Govinda',
    total_capicity : 60,
    guest_count: 0,
    checkAvailability: function (newguest){
        let seats_left = this.total_capicity - this.guest_count;
        return newguest <= seats_left;
    },
    addguestcount: function(newguest){
        if(resturant.checkAvailability(newguest) == true){
            this.guest_count = this.guest_count + newguest;
            console.log(`new ${newguest} added. total ${this.guest_count} guests`);
        }
        else{
            console.log('Sorry, No place Available');
        }

    },
    removecount: function(goodbyeguest){
        this.guest_count = this.guest_count - goodbyeguest;
        console.log(`${goodbyeguest} went. total ${this.guest_count} guests in restaurent`);

    }

}


resturant.addguestcount(15);
resturant.addguestcount(10);
resturant.removecount(7);