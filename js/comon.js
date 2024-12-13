// get the seat button
const kbdElements = document.querySelectorAll('.kbd');

// set event listners
kbdElements.forEach((element) =>{
    element.onclick = handleClick
});

// create a function
function handleClick(event){
    const ticketInnerText = event.target.innerText;
    const ticketId = event.target.id;
    //set the seat bg color
    changeSeatBG(ticketId);
    
    //only one time clicked on each btn
    if(event.target.classList.contains('clicked')){
        return
    }
    event.target.classList.add('clicked');

    if(ticketInnerText === ticketId){
        //total seat calculation
        getTotalSeat();

        //get the table body
        const getTableBody = document.getElementById('table-body');

        //create table 
        const tableTr = document.createElement('tr')

        //create a table td
        const setTicketId = document.createElement('td');
        setTicketId.innerText = ticketId;
        tableTr.appendChild(setTicketId);
        
        const setTicketClass = document.createElement('td');
        setTicketClass.innerText = 'economy';
        tableTr.appendChild(setTicketClass);

        const setTicketPrice = document.createElement('td');
        setTicketPrice.innerText = 550;
        tableTr.appendChild(setTicketPrice);

        getTableBody.appendChild(tableTr);

        // get the total price section
        const getTotalPrice = document.getElementById('total-price');
        const totalPriceInnerText = parseFloat(getTotalPrice.innerText);
        const price = parseFloat(setTicketPrice.innerText);
        const totalTicketPrice = totalPriceInnerText + price;
        getTotalPrice.innerText = totalTicketPrice;
        
        //get grand total 
        const getGrandTotal = document.getElementById('grand-total');
        const grandPrice = parseFloat(getTotalPrice.innerText);
        getGrandTotal.innerText = grandPrice;
        // discount area
        if(getTableBody.childElementCount >= 4){
            showCouponInput();

            //if clicked the coupon button
            const getCouponBtn = document.getElementById('coupon-btn');
            getCouponBtn.addEventListener('click', function (){
                const getInputField = document.getElementById('input-field');
                const couponCode = getInputField.value;
                if(couponCode === 'NEW15'){
                    const discount = grandPrice * 0.15;
                    const discountedPrice = grandPrice - discount;
                    getGrandTotal.innerText = discountedPrice;
                }
                else if(couponCode === 'COUPLE20'){
                    const discount = grandPrice * 0.20;
                    const discountedPrice = grandPrice - discount;
                    getGrandTotal.innerText = discountedPrice;
                }
                else{
                    getGrandTotal.innerText = grandPrice;
                }
            })
        }
        else{
            getGrandTotal.innerText = grandPrice;
        }
    }
};

//change the clicked seat background
function changeSeatBG(id){
    document.getElementById(id).style.backgroundColor ='#1DD100';
    document.getElementById(id).style.color = 'white';
};

//total seat calculation
function getTotalSeat(){
    const totalSeat = document.getElementById('total-seat');
    const leftSeat = totalSeat.innerText -1 ;
    totalSeat.innerText = leftSeat;
};

//show the coupon input field
function showCouponInput(){
    const getCouponInput = document.getElementById('Coupon-input');
    getCouponInput.classList.remove('hidden');
};

//show th next btn
function showNextBtn(){
    const getNextBtn = document.getElementById('next-btn');
    getNextBtn.classList.remove('hidden');
    
};
function actionNextBtn(){
    hideSection();
    showSeccessSection();
}

//get phone num input
const getPhoneNum = document.getElementById('phone-num');
getPhoneNum.addEventListener('input', ()=>{
        if(getPhoneNum.value.length == 11){
            showNextBtn()
        }
});

//hide the main section
function hideSection(){
    const header = document.getElementById('header');
    header.classList.add('hidden')
    const mainSection = document.getElementById('main-section');
    mainSection.classList.add('hidden');
    const footer = document.getElementById('footer');
    footer.classList.add('hidden');
};
//show the success section
function showSeccessSection(){
    const successSection = document.getElementById('success-section');
    successSection.classList.remove('hidden');
};

function continueBtn(){
    const header = document.getElementById('header');
    header.classList.remove('hidden')
    const mainSection = document.getElementById('main-section');
    mainSection.classList.remove('hidden');
    const footer = document.getElementById('footer');
    footer.classList.remove('hidden');
    const successSection = document.getElementById('success-section');
    successSection.classList.add('hidden');
}