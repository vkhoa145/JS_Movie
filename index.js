// Slider
// Render first picture
let slideIndex = 1;
let time = 3000;
showSlides(slideIndex);
// Event on click
function plusSlide (x) {
    clearInterval(myInterval) // 1st: Delete the interval function 
    showSlides(slideIndex += x); // 2nd: show the next slide
    autoSlide();// callback the autoslide because cleatInterval will prevent the autoSlide in default
   
};

// Function create manual slider
function showSlides (index) {
    const slides = document.getElementsByClassName('carousell-item');
    // Loop execution will hide the remain picture which are not at the active-click 
    for (i = 0; i < slides.length;i++) {
        slides[i].style.display = 'none';
    }
    // When click event on right side come to the last img, it will render agian the first picture
    if (index > slides.length) {
        slideIndex = 1;
    }
    // When click event on left side come to the first img, it will render the last picture
    if (index < 1) {
        slideIndex = slides.length;
    }
    //  The finall index will be display at this:
    slides[slideIndex-1].style.display = 'block';
    
};
// Auto slider
autoSlide(); 
// Calling repeatly picture by setInterval functions
function autoSlide () {
    myInterval = setInterval(() => {
        plusSlide(1)
        
    }, time);
}
// Pause on click event 
let carousell = document.getElementById('carousell');
carousell.addEventListener('mouseenter',pause)
carousell.addEventListener('mouseleave', leave)
function pause () {
    clearInterval(myInterval)
}
function leave () {
    autoSlide()
}

// Movie Raw Data
const data = {
    movie : [
        {name:'Spider man: No way home',id:1,img:'./img/spiderman-nowayhome.jpeg',type:'Comedy/Fantasy',duration:'2h38m',ratings:'PG-13',desc:'Part 3 of MCU spider man movie',now:true,soon:false},
        {name:'Spider man: Far from home',id:2,img:'./img/spidernam-farfromhome.jpeg',type:'Comedy/Fantasy',duration:'2h38m',ratings:'PG',desc:'Part 2 of MCU spider man movie',now:true,soon:false},
        {name:'Doctor Strange: Multiverse of Madness',id:3,img:'./img/doctor.webp',type:'Action/Adventure',duration:'2h6m',ratings:'PG-13',desc:'A movie of Scarlet Witch which has Doctor Strange as cameo',now:true,soon:false},
        {name:'Captain America: The First Avenger',id:4,img:'./img/cap.jpeg',type:'Fantasy/Adventure',duration:'2h4m',ratings:'PG-13',desc:'The first ever Avenger in MCU',now:true,soon:false},
        {name:'Captain America: The First Avenger',id:4,img:'./img/cap.jpeg',type:'Fantasy/Adventure',duration:'2h4m',ratings:'PG-13',desc:'The first ever Avenger in MCU',now:false,soon:true},
        {name:'Captain America: The First Avenger',id:4,img:'./img/cap.jpeg',type:'Fantasy/Adventure',duration:'2h4m',ratings:'PG-13',desc:'The first ever Avenger in MCU',now:false,soon:true},
        {name:'Captain America: The First Avenger',id:4,img:'./img/cap.jpeg',type:'Fantasy/Adventure',duration:'2h4m',ratings:'PG-13',desc:'The first ever Avenger in MCU',now:false,soon:true},
        {name:'Captain America: The First Avenger',id:4,img:'./img/cap.jpeg',type:'Fantasy/Adventure',duration:'2h4m',ratings:'PG-13',desc:'The first ever Avenger in MCU',now:false,soon:true},
        {name:'Captain America: The First Avenger',id:4,img:'./img/cap.jpeg',type:'Fantasy/Adventure',duration:'2h4m',ratings:'PG-13',desc:'The first ever Avenger in MCU',now:false,soon:true},
        {name:'Captain America: The First Avenger',id:4,img:'./img/cap.jpeg',type:'Fantasy/Adventure',duration:'2h4m',ratings:'PG-13',desc:'The first ever Avenger in MCU',now:false,soon:true},
        
    ],
    
   
};
// Destructuring data 
const {movie} = data;

// Filter movie: now showing 
function filterStatus () {
    let a = {}
    for (i=0; i < movie.length;i++) {
        if (movie[i].now === true) {
            
            a = {...movie[i]}
            console.log(a)
        } else {
            console.log(movie[i].now)
        }
        
    }
    

    
 
}
filterStatus()
//  Promise
// 1.Execute the filter function 
// 2. Put the result of filter function into rendermovie function 



// Render movie list 
renderMovieList('current')
function renderMovieList (id) {
    
    
    const movieRender = movie.map((movie)=>{
        return (
            `
            <div class="movie-content">
                <div class="movie-poster">
                    <img src=${movie.img} alt=${movie.name}>
                </div>
                <div class="movie-content__container">
                    <h2>${movie.name}</h2>
                    <p>${movie.desc}</p>
                    <div class="movie-content__user">
                        <button>XEM CHI TIẾT</button>
                        <button>ĐẶT VÉ</button>
                    </div>
                </div>
            </div>
            `
        )
    },'')
    const html = document.getElementById(`${id}-movie`);
    html.innerHTML = movieRender;
}
// Classifiering status of movie (current,soon)


const demo = [1,2,3,4,5] // Array
const spread1 = {...demo} // Chuyển đổi thành object 
const spread2 = [...demo] // Sao chép mảng 
console.log(spread1,spread2)
// spread1: {1:1, 2:2, 3:3, 4:4, 5:5}
// spread2 : [1,2,3,4,5]


const zxc = 'abcd';
const az = [...zxc];
const ac = {...zxc};
console.log(az,ac)
// az: ['a','b','c','d']
// ac: {0:a,1:b,2:c,3:d}

const obj1 = {name:'khoa',age:25};
const obj2 ={address:'214 le van sy',email:'khoa@gmail.com'}
const obj3 = {...obj1,...obj2}
const obj4 = {...obj1,obj2}
const obj5 = {obj1,...obj2}
console.log(obj3)
//  obj3 = {
//     name:'khoa',
//     age:25,
//     address:'214 le van sy',
//     email:'khoa@gmail.com'
// }
console.log(obj4)
// obj4 = {
//     name:'khoa',
//     age:25,
//     obj2 : {
//         address:'214 le van sy',
//         email:'khoa@gmail.com',
//     }
// }
console.log(obj5)
