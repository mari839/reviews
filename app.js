const reviews = [
    {
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, praesentium. Iusto voluptates sapiente dicta quas, doloremque qui reiciendis quo ad facere nostrum, assumenda officia saepe, corrupti nemo provident reprehenderit minus.",
    },
    {
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, a! Iusto in facilis, aliquam sit deserunt at officia. Vero corrupti aperiam officiis assumenda nesciunt tempora ex ut distinctio minus amet",
    },
    {
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dignissimos obcaecati error, praesentium natus nulla incidunt culpa alias sit officia vitae, aliquam est amet, consequatur temporibus repudiandae harum adipisci.",
    },
    {
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquam earum quia assumenda, dignissimos reprehenderit delectus accusantium suscipit sapiente provident, soluta commodi natus debitis id ullam tempora eius veritatis nobis? ",
    },
];

const image = document.querySelector(".image");
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const review = document.querySelector(".review");

const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");
const randomButton = document.querySelector(".random-button");


let currentItem = 0;

window.onload = function () {
    changePerson();
};

previousButton.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    changePerson();
})


nextButton.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    changePerson();
})

randomButton.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    changePerson();
})

function changePerson() {
    const currentNumber = reviews[currentItem];
    image.src = currentNumber.img;
    name.innerHTML = currentNumber.name;
    job.innerHTML = currentNumber.job;
    review.innerHTML = currentNumber.text
}
