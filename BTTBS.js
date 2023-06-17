/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(a) {
    
    let minPriceofStock = a[0];
    let maxProfit = 0;
    for(let i=1; i<a.length; i++){
        if(minPriceofStock>a[i]){
            minPriceofStock = a[i];
         }
            maxProfit = Math.max(maxProfit,a[i]-minPriceofStock)
        
    }
    return maxProfit;


};