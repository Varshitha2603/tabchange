"use strict"

document.body.style.backgroundColor = "#D2E3C8"


let nature_image = document.getElementById("nature1");

let history_btn = document.getElementById("p1");

let vision_btn = document.getElementById("p2");

let goals_btn = document.getElementById("p3");

let about_title = document.getElementById("h4_text");

let about_content = document.getElementById("para_content");

let obj = [
    {
        img : "nature1.jpg",
        about_tit : "History",
        about_con : "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        img : "nature2.jpg",
        about_tit : "Vision",
        about_con : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word."
    },
    {
        img : "nature3.jpg",
        about_tit : "Goals",
        about_con : "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet.', comes from a line in section 1.10.32."
    }
];

let btn = document.querySelectorAll("button");
btn.forEach((button,index) => {
    button.addEventListener("click",() => {
        button.classList.add(`active`);
        button.classList.remove(`active2`);
        console.log(index);
        nature_image.src = obj[index].img;
        about_title.innerText = obj[index].about_tit;
        about_content.innerText = obj[index].about_con; 
        btn.forEach((item,indexNew) => {
            if(indexNew != index)
            {
                item.classList.remove(`active`);
                item.classList.add(`active2`);
            }
        });
    });
});
        
    




