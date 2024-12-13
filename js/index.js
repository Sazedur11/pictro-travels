// const kbdElements = document.querySelectorAll('.kbd');
// const getInputField = document.getElementById('input-field');





// // Attach event listeners
// kbdElements.forEach((element) => {
//     element.onclick = handleClick;
// });

// function handleClick(event) {
//     const ticketPress = event.target.innerText;
//     const elementId = event.target.id;
//     // console.log(`Clicked on: ${elementId}`);
//     addTicketInfo(elementId);

//     //Only one time click the each button
//     if (event.target.classList.contains('clicked')) {
//         return;
//     }
//      // Already Clicked this button you can't click again
//      event.target.classList.add('clicked');

//     // total seat
//     if(ticketPress === elementId){
//         getTotalSeat();
        
//         //get table body and set inner content
//         const getTableBody = document.getElementById('table-body');
//         // create a table
//         const tableTr = document.createElement('tr');
//         // create a table td
//         const seatNameTableTd = document.createElement('td');
//         seatNameTableTd.innerText = elementId;
//         tableTr.appendChild(seatNameTableTd);

//         const seatClassNameTd = document.createElement('td');
//         seatClassNameTd.innerText = 'Economy';
//         tableTr.appendChild(seatClassNameTd);
        
//         const priceTableTd = document.createElement('td');
//         priceTableTd.innerText = 550;
//         tableTr.appendChild(priceTableTd);
//         // set the value in table body
//         getTableBody.appendChild(tableTr);

//         // get the total price
//         const getTotalPrice = document.getElementById('total-price');
//         const totalPriceInnerText = parseFloat(getTotalPrice.innerText);
//         const price = parseFloat(priceTableTd.innerText);
//         const totalTicketPrice = totalPriceInnerText + price;
//         getTotalPrice.innerText = totalTicketPrice;

//         const getGrandTotal = document.getElementById('grand-total');
//         // coupon section
//         if(getTableBody.childElementCount >= 4){
//             console.log('get your offer')
//             showCouponInput()
//             const grandPrice = parseFloat(getTotalPrice.innerText);
//             getGrandTotal.innerText = grandPrice;
//             console.log(getGrandTotal.innerText);
            
//             // if click the coupon btn
//             const couponButton = document.getElementById('coupon-btn');
//             couponButton.addEventListener('click', function getCouponBtn() {
//             // trim use here for remove extra spaces
//             const couponCode = getInputField.value.trim();
//             if (couponCode === 'NEW15') {
//                 const discount = grandPrice * 0.15;
//                 const discountedPrice = grandPrice - discount;
//                 getGrandTotal.innerText = discountedPrice.toFixed(2);
//                 console.log(`Discounted Price: ${getGrandTotal.innerText}`);
//                 }
//                 else if(couponCode === 'COUPLE20'){
//                     const discount = grandPrice * 0.2;
//                     const discountedPrice = grandPrice - discount;
//                     getGrandTotal.innerText = discountedPrice.toFixed(2);
//                     console.log(`Discounted Price: ${getGrandTotal.innerText}`);
//                 }
                
//                 else{
//                     const grandPrice = getTotalPrice.innerText;
//                     getGrandTotal.innerText = grandPrice;
//                 }
//             }
//         )
           
//         }
//         else{
//             const grandPrice = getTotalPrice.innerText;
//             getGrandTotal.innerText = grandPrice;
//             console.log(getGrandTotal.innerText);
//         }
//     }
// }

// function addTicketInfo(elementId){
//     document.getElementById(elementId).style.backgroundColor = '#1DD100';
//     document.getElementById(elementId).style.color= 'white'
// }

// function getTotalSeat(){
//     const totalSeat = document.getElementById('total-seat');
//     const leftSeat = totalSeat.innerText - 1;
//     totalSeat.innerText = leftSeat;
// }

// // show the coupon input section
// function showCouponInput(){
//     const getCouponInput = document.getElementById('Coupon-input');
//     getCouponInput.classList.remove('hidden');
// }


