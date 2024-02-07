function calculateMoney(ticketSale) {
     if(ticketSale>=0){
               ticketCost=ticketSale*120;
               othersCost=500+(8*50);
               return ticketCost-othersCost;
     }
     return "Please give an accurate number!!!";
    
    }

const ticket=calculateMoney(-130);
console.log(ticket);
