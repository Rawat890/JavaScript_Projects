const stars = document.querySelectorAll(".fa-star-o")
const RatedValue = document.querySelector(".ratedNum")

let currentSelectors =-1;

stars.forEach((starItem, index) => {
    starItem.dataset.rating= index +1;
    starItem.addEventListener('mouseover', handleMouseOver);
    starItem.addEventListener('click', handleOnClick);
    starItem.addEventListener('mouseleave', handleMouseLeave);


});


//getting the current rated value
function handleMouseOver(event) {
    console.log("============");
    console.log(event.target.dataset);
    console.log("===========");

    const currentRateVal= event.target.dataset.rating;
    if (!currentRateVal) {
        return;
    }
    else handleUpdateRatingState(currentRateVal);

}


//selection of star
function handleUpdateRatingState(getCurrentVal) {
    for (let i = 0; i < 5; i++) {
       if (i<getCurrentVal) {
         stars[i].classList.replace('fa-star-o', 'fa-star')
       }
       else{
        stars[i].classList.replace('fa-star','fa-star-o')
       }
        
    }
}


function handleOnClick(event) {
    const currentRateVal= event.target.dataset.rating;

    //selected stars
    currentSelectors = currentRateVal;
    handleUpdateRatingState(currentSelectors)
    RatedValue.textContent =currentSelectors;

}


function handleMouseLeave(event) {
   handleUpdateRatingState(currentSelectors);
}


