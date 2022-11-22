let restaurant = {
	name: 'ASB',
        guestCapacity: 75,
	guestCount: 0,
	checkAvailability: function(partySize){
		return partySize<=this.guestCapacity-this.guestCount
        },
	seatParty: function(partySize){
                this.guestCount = this.guestCount + partySize
        },
	removeParty: function(partySize){
                this.guestCount = this.guestCount - partySize
	},
}

    restaurant.seatParty(72)
    console.log(restaurant.checkAvailability(4))
    restaurant.removeParty(1)
    console.log(restaurant.checkAvailability(4))
    

    
