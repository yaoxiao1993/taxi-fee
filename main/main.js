'use strict';
function getTaxiFee(distance, wait){
    var taxiFee = 0;
    if(distance <= 2){
        taxiFee = 6;
    }else if(distance > 2 && distance <= 8){
        taxiFee = 6 + (distance - 2) * 0.8;
    }else{
        taxiFee = 10.8 + (distance - 8) * 1.2;
    }
    taxiFee = taxiFee + wait * 0.25;
    return Math.round(taxiFee);
}

module.exports = getTaxiFee;