// let array = ["ahmad","raza","hassan","fatimah"]// bohata sare deta ko aik sath likhna ho to array iske ilawa agar karna he to phir alag alag variable bnanan huga 
            //  0     1       2         3 index 0zero se chalta he indexing yani counting or ye zero se starte huti he 
// array[4] = "kamran"  //agar array men aik or value add karna he to index number ke hisab se number dalden 
//  console.log(array.length)// array men kitni value parhi he to .lenght used karte he 
// array ko string men bhi kikh sakte he 
// array = "ahmad" //string ke anadr ye apka alpha bad ko ginke zero index se chladega jo index numer denge woh dedega 
// console.log(array[4]);// sirf 1 value consol karwana he to index ke number ko consoe karwayge

// rool ava 1 galati maff karta undefin ajata he  he 2 galati hugi to to erore ajayga 

// chapter 16 array ading and removing
// aray ke mathods
// 1 mathod
// .pop(); //ye array ke akhhir se 1 element ko remove kardeta he 
//   // 2 mwthod
//    .push(); //ye value add karedeta he bger index batay ye khud us value ko akhri last index men add kardega 
  //  or push aik sath multiple value bhi add karsakta he 

//   let array = ["ahmad","raza","hassan","fatimah"]
//   // array .push("karime","raheem","safeer")
//   // console.log (array)  //(array[5])
//   array .pop()  // ye array ke akhir se last wala value remove kardega or jitni bar col karenege utnni bar remove kardega
//  array .pop()
//   console.log (array)  //(array[5])
  // anser  ['ahmad', 'raza']
// ........................./
  // shift and unshift
  // unshift array ke shoroh start men add karta he or jo .push ye last me add karta he 
  // or shift ye strate se remove karta he .pop ye last se remove karta he 
    // let array = ["ahmad","raza","hassan","fatimah"]
    // array .unshift("raza ", "noshad",'furqan')
//  console.log (array)  //(array[5])
//  anser(7) ['raza ', 'noshad', 'furqan', 'ahmad', 'raza', 'hassan', 'fatimah']
//     let array = ["ahmad","raza","hassan","fatimah"]
// array .shift();
// array.shift();
// console.log   (array.length)// (array)  (array[2])
// answer ['hassan', 'fatimah']

// algorithum fifo (first in last out ) lifo (last in first out)



let products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 52000, quantity: 3 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
        { id: 4, color: "white", price: 54000, quantity: 4 },
        { id: 5, color: "blue", price: 51000, quantity: 2 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "Zubair: It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "Excellent Product",
          comments: "Ali: I absolutely love it!",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 102,
      title: "Mobile",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "orange", price: 48000, quantity: 6 },
        { id: 3, color: "green", price: 55000, quantity: 8 },
        { id: 4, color: "purple", price: 53000, quantity: 3 },
        { id: 5, color: "gold", price: 59000, quantity: 1 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "Zubair: It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "Best Mobile",
          comments: "Ali: Perfect for my needs!",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 103,
      title: "Headphones",
      variations: [
        { id: 1, color: "black", price: 3000, quantity: 15 },
        { id: 2, color: "white", price: 3500, quantity: 10 },
        { id: 3, color: "red", price: 3200, quantity: 5 },
        { id: 4, color: "blue", price: 3400, quantity: 8 },
        { id: 5, color: "green", price: 3100, quantity: 12 },
      ],
      reviews: [
        {
          id: 1,
          user: "Samira",
          rating: 4.2,
          title: "Great Sound",
          comments: "Samira: The sound quality is impressive.",
          date: "10-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Tariq",
          rating: 4.0,
          title: "Good for the Price",
          comments: "Tariq: Comfortable and decent sound.",
          date: "09-02-2021",
          status: true,
        },
        {
          id: 3,
          user: "Zara",
          rating: 4.7,
          title: "Love Them!",
          comments: "Zara: Best headphones for my workouts.",
          date: "08-02-2021",
          status: true,
        },
      ],
    },
  ];
  
  // Exercise 1
  // Get all product titles and display them in array format.
  // Example: ['Sony LED 40 inch', 'Mobile', 'Bike']
  // Try with function or without function

  // let products = [
  //   {
  //     id: 101,
  //     title: "Sony LED 40 inch",
  //     variations: [
  //       { id: 1, color: "black", price: 50000, quantity: 5 },
  //       { id: 2, color: "red", price: 52000, quantity: 3 },
  //       { id: 3, color: "silver", price: 55000, quantity: 8 },
  //       { id: 4, color: "white", price: 54000, quantity: 4 },
  //       { id: 5, color: "blue", price: 51000, quantity: 2 },
  //     ],
  //     reviews: [ 


  // function getProductById(products, productId) {
  //   for (let i = 0; i < products.length; i++) {
  //     if (products[i].id === productId) {
  //       return products[i];
  //     }
  //   }}
  
  // console.log(getProductById(products, 101))**