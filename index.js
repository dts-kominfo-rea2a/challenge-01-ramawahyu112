// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
//Color
let purple = 'purple';
let yellow = 'Yellow';
let pink = 'Pink';
let white = 'White';
let blue = 'Blue';
let black = 'Black';
let grey = 'Grey';

//Restaurant
let bento = 'Bento';
let sushi = 'Sushi';
let Pancake = 'Pancake';
let eggy = 'Eggy';
let tempura = 'Tempura';
let padang ='Padang';
let tteok = 'Tteok';
let geprek = 'Geprek';
let katsu = 'Katsu';
//First User Color
let favoriteColor = new Set(); 
favoriteColor.add(yellow);
favoriteColor.add(pink);
favoriteColor.add(white);
favoriteColor.add(purple);
//First User Restaurant
let favoriteRestaurant = new Set();
favoriteRestaurant.add(bento);
favoriteRestaurant.add(sushi);
favoriteRestaurant.add(Pancake);
favoriteRestaurant.add(eggy);
favoriteRestaurant.add(padang);
favoriteRestaurant.add(tteok);
favoriteRestaurant.add(sushi);
favoriteRestaurant.add(sushi);

const firstUser = {
    name:'Monica',
    gender: 'Female',
    age: 17,
    email: 'monica@dingdong.com',
    favoriteColor: favoriteColor,
    isHavePet: 'yes',
    education: [{name: 'SD 01', city: 'Jakarta', graduate: 2016},
                {name: 'SMP 02', city: 'Jakarta', graduate: 2019},
                {name: 'SMA 03', city: 'Tangerang'},
            ],
    favoriteRestaurant:favoriteRestaurant,
    

};
//Second User Color
favoriteColor = new Set();
favoriteColor.add(blue);
favoriteColor.add(black);
favoriteColor.add(grey);

//Second User Restaurant
favoriteRestaurant = new Set();
favoriteRestaurant.add(tempura);
favoriteRestaurant.add(bento);
favoriteRestaurant.add(sushi);
favoriteRestaurant.add(Pancake);
favoriteRestaurant.add(katsu);
favoriteRestaurant.add(geprek);
favoriteRestaurant.add(Pancake);
favoriteRestaurant.add(eggy);

const secondUser = {
    name:'Wendy',
    gender: 'Male',
    age: 23,
    email: 'wendy@dingdong.com',
    favoriteColor: favoriteColor,
    isHavePet: 'no',
    education: [{name: 'SD 02', city: 'Jakarta', graduate: 2010},
                {name: 'SMP 03', city: 'Bogor', graduate: 2013},
                {name: 'SMA 01', city: 'Surabaya', graduate: 2016},
                {name: 'Universitas Maju', city: 'Tangerang'},
            ],
    favoriteRestaurant:favoriteRestaurant,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};