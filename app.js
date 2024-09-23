const reveiw = [
    {
        img: "images/pooja.jpg",
        nam: 'Pooja Navaghane',
        word: "  “ I completed B.Tech from a AES college and I wanted to choose my career in Development field. So I joined Qspiders and gone through a crash course, which was very helpful in learning web technologies, I learned web development from excellent faculty who tuned my skills and made me a professional developer.  ”",
        job: " Web-Tech Developer"
    },
    {
        img: "images/shubham.jpg",
        nam: "  Shubham Savaratkar",
        word: "“  After a long gap in my career I decided to learn web designing. Though I don't have any software knowledge, the trainers of WebTechCourse guided me with positive approach. I like to thank Qspiders for their support and encouragement throughout the course.”",
        job: " Web-Tech Developer"
    }
    ,
    {
        img: "images/sakshi.jpg",
        nam: "  Sakshi Gaikwad",
        word: "“  Learning from GIT has transformed my skills to a big extent. When I joined Java Full-stack  course, I had zero skills. But now I am happy that I am knowledgeable to develop innovative websites. Thanks to the entire team of Qspiders for their constant support.",
        job: " Web-Tech Developer"
    }
    ,
    {
        img: "images/te22.png",
        nam: "  Priti Shirke",
        word: "“  I am an MCA graduate and done various courses but I was unable to outshine and get a good job. Your faculties has a excellent teaching methodology that driven great interest in learning web Development which made me to get placed right after completing the course. Thanks to Qspiders!”",
        job: " Web-Tech Developer"
    }
    ,
    {
        img: "images/te33.png",
        nam: "  Ragini Shinde",
        word: "“ The teacher was very professional, he was very present, and kind towards learning phase and everything. My overall experience with this Qspiders was actually good. I will recommend to everyone who are looking for IT course.”",
        job: " Web-Tech Developer"
    }
    ,
    {
        img: "images/te11.png",
        nam: "  Rohini Verma",
        word: "“ The teacher was very professional, he was very present, and kind towards learning phase and everything. My overall experience with this Qspiders was actually good. I will recommend to everyone who are looking for IT course.”",
        job: " Web-Tech Developer"
    }
    ,
    {
        img: "images/img5.webp",
        nam: "  Jyotsna Sharma",
        word: "“  Learning from GIT has transformed my skills to a big extent. When I joined Java Full-stack  course, I had zero skills. But now I am happy that I am knowledgeable to develop innovative websites. Thanks to the entire team of Qspiders for their constant support”",
        job: " Web-Tech Developer"
    }
]


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const userName = document.getElementById("name");
const jobName = document.querySelector(".job");
const image = document.querySelector(".user-img");
const infor = document.querySelector(".para");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
   showPerson()

});


function showPerson() {
    let item = reveiw[currentItem];

    userName.textContent = item.nam;
    image.src = item.img;
    infor.textContent = item.word;
    jobName.textContent = item.job
}


prevBtn.addEventListener('click', function () {
    currentItem --;
    if (currentItem < 0) {
    currentItem =   reveiw.length - 1;
  }
    showPerson();
   
})

nextBtn.addEventListener('click', function () {
       currentItem ++;
    
if (currentItem > reveiw.length-1 ) {
    currentItem = 0;
    }
  
    showPerson();
})