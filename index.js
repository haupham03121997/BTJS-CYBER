



// BÀi TẬP 1
function exerciseOne() {
  // CÁCH 1: ưu tiên cách 1
  // get value Element : use function getValueByIdElm

  let firstNumber = +getValueByIdElm('firstNumber');
  let secondNumber = +getValueByIdElm('secondNumber');
  let threeNumber = + getValueByIdElm('threeNumber');
  var temp;
  if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber) || !Number.isInteger(threeNumber)) return alert('Please enter a number');

  if (firstNumber > secondNumber) {
    temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
  }
  if (firstNumber > threeNumber) {
    temp = firstNumber;
    firstNumber = threeNumber;
    threeNumber = temp;
  }
  if (secondNumber > threeNumber) {
    temp = secondNumber;
    secondNumber = threeNumber;
    threeNumber = temp;
  }
  showValueResult('result-exercise-1', `Kết quả được sắp xếp sau khi người dùng nhập: ${firstNumber} ${secondNumber} ${threeNumber}`);

  // CÁCH 2

  //  sử dụng hàm sort của javascript
  // const resultSort = [firstNumber, secondNumber, threeNumber].sort((a, b) => a - b);
  // showValueResult('result-exercise-1', `Kết quả được sắp xếp sau khi người dùng nhập: ${resultSort[0]} ${resultSort[1]} ${resultSort[2]}`);

  // show kết quả với hàm join javascript thay vì tách  từng phần tử của mảng theo vị trí
  // showValueResult('result-exercise-1', `Kết quả được sắp xếp sau khi người dùng nhập: ${resultSort.join('->')}`);

}

// BÀI TẬP 2

function exerciseTwo(){
  let inputDay = +getValueByIdElm('inputDay');
  let inputMonth = +getValueByIdElm('inputMonth');
  let inputYear = +getValueByIdElm('inputYear');
  if (!Number.isInteger(inputDay) || !Number.isInteger(inputMonth) || !Number.isInteger(inputYear)) return alert('Please enter a number');

  var isValidDay = true;

  let isLeapYear = leapYear(inputYear);
  if (inputDay < 1 || inputDay > 31)  isValidDay = false;
  if (inputMonth < 1 || inputMonth > 12)  isValidDay = false;
  if (inputMonth == 2 && inputDay > 28 && !isLeapYear)  isValidDay = false;
  if (inputMonth == 2 && inputDay > 29 && isLeapYear)  isValidDay = false;
  if (inputMonth == 4 || inputMonth == 6 || inputMonth == 9 || inputMonth == 11 && inputDay > 30)  isValidDay = false;
  
  if(!isValidDay) {
    return  showValueResult('result-exercise-2', `${inputDay}/${inputMonth}/${inputYear} is a valid date`);
  }else{
    let dayBefore = getDayBefore(inputDay, inputMonth, inputYear ,isLeapYear);
    let dayAfter = getDayAfter(inputDay, inputMonth, inputYear ,isLeapYear);
    return showValueResult('result-exercise-2', `Có 2 kết quả cho bạn: Ngày trước đó là ${dayBefore} và ngày sau đó là ${dayAfter}`);
  }
}


function exerciseTwoThree (){ 
  
  var currentPerson ;
  var radios = document.getElementsByName('family')

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      currentPerson = radios[i].value
      break;
    }
  }
  showValueResult('result-exercise-3', checkPerson(currentPerson));
}

function exerciseFour(){
  let firstNumber = +getValueByIdElm('firstNumberInt');
  let secondNumber = +getValueByIdElm('secondNumberInt');
  let threeNumber = + getValueByIdElm('threeNumberInt');
  if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber) || !Number.isInteger(threeNumber)) return alert('Phải nhập số nguyên nha moày. Ngáo ngáo kí đầu giờ -_-');
  let countOdd = 0;
  let countEven = 0;

  // if( firstNumber % 2 == 0) countEven++;
  // else countOdd++;

  // if( secondNumber % 2 == 0) countEven++;
  // else countOdd++;

  // if( threeNumber % 2 == 0) countEven++;
  // else countOdd++;
  firstNumber % 2 == 0 ? countEven++ : countOdd++;
  secondNumber % 2 == 0 ? countEven++ : countOdd++;
  threeNumber % 2 == 0 ? countEven++ : countOdd++;

  showValueResult('result-exercise-4', `Có  ${countOdd} số lẻ và  ${countEven} số chẳn`);
}
// BÀI TẬP 5 

function exerciseFive(){
    let inputMonth = +getValueByIdElm('inputMonth5');
    let inputYear = +getValueByIdElm('inputYear5');
    let isValidDate = true;
    if(inputMonth< 1 && inputMonth > 12) isValidDate = false;
    if(inputYear < 0) isValidDate = false;
    if(!isValidDate) return alert('Nhập sai định dạng tháng hoặc năm');

    // kiểm tra năm nhuận
    let isLeapYear = leapYear(inputYear);

    // lấy ngày của tháng
    let daysOfMonth = getDaysOfMonth(inputMonth, isLeapYear);
 
    showValueResult('result-exercise-5', `Tháng ${inputMonth}/${inputYear} là ngày có ${daysOfMonth} ngày trong tháng`);
}

function exerciseSix(){
    let coordinatesXStudent1 = +getValueByIdElm('coordinatesXStudent1');
    let coordinatesYStudent1 = +getValueByIdElm('coordinatesYStudent1');
    let coordinatesXStudent2 = +getValueByIdElm('coordinatesXStudent2');
    let coordinatesYStudent2 = +getValueByIdElm('coordinatesYStudent2');
    let coordinatesXStudent3 = +getValueByIdElm('coordinatesXStudent3');
    let coordinatesYStudent3 = +getValueByIdElm('coordinatesYStudent3');
    if(Number.isNaN(coordinatesXStudent1) || Number.isNaN(coordinatesYStudent1) || Number.isNaN(coordinatesXStudent2) || Number.isNaN(coordinatesYStudent2) || Number.isNaN(coordinatesXStudent3) || Number.isNaN(coordinatesYStudent3)) return alert('Nhập sai định dạng tọa độ');
    
     
    let coordinatesXSchool = 0;
    let coordinatesYSchool = 0;

    let distanceStudent1 = getDistance(coordinatesXStudent1, coordinatesYStudent1, coordinatesXSchool, coordinatesYSchool);
    let distanceStudent2 = getDistance(coordinatesXStudent2, coordinatesYStudent2, coordinatesXSchool, coordinatesYSchool);
    let distanceStudent3 = getDistance(coordinatesXStudent3, coordinatesYStudent3, coordinatesXSchool, coordinatesYSchool);  


    // result 
    showValueResult('result-exercise-6', `Khoảng cách giữa trường và sinh viên 1 là ${distanceStudent1} m, khoảng cách giữa trường và sinh viên 2 là ${distanceStudent2} m, khoảng cách giữa trường và sinh viên 3 là ${distanceStudent3} m`);
}


function exerciseSeven(){
    let firstNumber = +getValueByIdElm('firstRealNumber');
    let secondNumber = +getValueByIdElm('secondRealNumber');
    let threeNumber = + getValueByIdElm('threeRealNumber');
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber) || !Number.isInteger(threeNumber)) return alert('Phải nhập số thực nha moày. Ngáo ngáo kí đầu giờ -_-');

    firstNumber = Math.abs(firstNumber);
    secondNumber = Math.abs(secondNumber);
    threeNumber = Math.abs(threeNumber);
    showValueResult('result-exercise-7', `Kết quả: ${firstNumber}, ${secondNumber}, ${threeNumber}`);
}


function exerciseEight (){
  let firstNumber = +getValueByIdElm('intNumber8');
  if(!Number.isInteger(firstNumber)) return alert('Nhập số nguyên nha moày');
  if(firstNumber < 100 ) return showValueResult('result-exercise-8', `Nhập số lớn hơn lớn hơn 99 nha moày`);
  if(firstNumber > 999) return showValueResult('result-exercise-8', `Nhập số nhỏ hơn 1000 nha moày! Sô to đùng ai mà đọc cho nẩu -_-`);


  // Lấy số hàng trăm
  let result1 = Math.floor(firstNumber / 100) % 10;
  // Lấy số hàng chục
  let result2 = Math.floor(firstNumber / 10) % 10;
  // Lấy số hàng đơn vị
  let result3 = firstNumber % 10;

  
  if(result2 === 0 && result3 === 0){
    return showValueResult('result-exercise-8', `${jsUcfirst(readRealNumber(result1))} trăm nghìn`);
  }

  if(result2 === 0 && result3 !== 0){
    showValueResult('result-exercise-8', `Kết quả: ${jsUcfirst(readRealNumber(result1))} trăm ${readRealNumber(result2)}  ${readRealNumber(result3)}`);
  }

  if(result2 !== 0 && result3 === 0){
    showValueResult('result-exercise-8', `Kết quả: ${result1} trăm ${readRealNumber2(result2)}`);
  }

  if(result2 !== 0 && result3 !== 0){
    showValueResult('result-exercise-8', `Kết quả: ${jsUcfirst(readRealNumber(result1))} trăm ${readRealNumber2(result2)} ${readRealNumber(result3)}`);
  }

}


function exerciseNine(){
  let edgeA = +getValueByIdElm('edgeA');
  let edgeB = +getValueByIdElm('edgeB');
  let edgeC = +getValueByIdElm('edgeC');
  if(!Number.isInteger(edgeA) || !Number.isInteger(edgeB) || !Number.isInteger(edgeC)) return alert('Nhập số nguyên nha moày! Nhập z bố tiên sư nào mà tính cho ra cái tam giác -_-');

  if(edgeA + edgeB <= edgeC || edgeA + edgeC <= edgeB || edgeB + edgeC <= edgeA){
    return showValueResult('result-exercise-9', `Không phải là tam giác`);
  }
  if(edgeA === edgeB && edgeB === edgeC){
    return showValueResult('result-exercise-9', `Là tam giác đều`);
  }
  if(edgeA === edgeB || edgeB === edgeC || edgeA === edgeC){
    return showValueResult('result-exercise-9', `Là tam giác cân`);
  }
  showValueResult('result-exercise-9', `Là tam giác thường`);
}


