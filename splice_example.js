let starHollows = ['Lorelai', 'Rory', 'Luke', 'Lane', 'Kirk', 'Taylor'];


// remove all elements starting from index 1

// starHollows.splice(1);


// Remove 2 elements starting from index 1

// starHollows.splice(1,2);


// Remove 1 element starting from index -2

// starHollows.splice(-2,1);


// Remove 1 element from index 5, and insert 'Hitchcock' and 'Scully'

// starHollows.splice(5,1,"Hitchcock","Scully")

// Remove 0 element, and insert 'Gunther', 'Carol', 'Susan' before index 1;

starHollows.splice(1,0,'Gunther','Carol','Susan');

console.table(starHollows);






