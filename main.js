const questions=document.querySelectorAll('.quesion-answer');
questions.forEach((question)=>{
    const btn= question.querySelector('.question-btn');
    btn.addEventListener("click",()=>{
        questions.forEach((item)=>{
            if(item!==question){
                item.classList.remove("show-text");
            }

        });
        question.classList.toggle("show-text");
        
    });
});