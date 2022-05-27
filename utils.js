/**
 * @param {Function} 'getValueByIdElm' : Dùng để lấy giá trị của các input
 * @param {Function} 'showValueResult' : Dùng để hiển thị kết quả 
 */

 var $ = document.getElementById.bind(document);

// es5
// function getValueByIdElm(id){
//     return document.getElementById(id).value;
// }
// function showValueResult(id, value){
//     document.getElementById(id).style.display = 'block';
//     document.getElementById(id).innerHTML = value;
//}

//es6 
const getValueByIdElm = (id) => $(id).value;
const showValueResult = (id, value) => {
  $(id).style.display = 'block';
  $(id).innerHTML = value;
}

// function leap year

const leapYear = (year) =>   ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);


const getDayBefore= (inputDay , inputMonth , inputYear , isLeapYear)=>{
  let dayBefore = inputDay - 1;
  if (dayBefore == 0) {
    if (inputMonth == 1) {
      inputMonth = 12;
      inputYear = inputYear - 1;
    } else {
      inputMonth = inputMonth - 1;
    }
    dayBefore = getDaysOfMonth(inputMonth, isLeapYear);
  }
  return `${dayBefore}/${inputMonth}/${inputYear}`;
}

const getDaysOfMonth = (inputMonth, isLeapYear) => {
  let daysOfMonth = 0;
  if (inputMonth == 1 || inputMonth == 3 || inputMonth == 5 || inputMonth == 7 || inputMonth == 8 || inputMonth == 10 || inputMonth == 12) {
    daysOfMonth = 31;
  } else if (inputMonth == 2) {
    if (isLeapYear) {
      daysOfMonth = 29;
    } else {
      daysOfMonth = 28;
    }
  } else {
    daysOfMonth = 30;
  }
  return daysOfMonth;
}

const getDayAfter = (inputDay, inputMonth, inputYear ,isLeapYear)=>{
  let dayAfter = inputDay;
  let monthAfter = inputMonth;
  let yearAfter = inputYear;
  if (inputDay == 31) {
    dayAfter = 1;
    monthAfter = inputMonth + 1;
  }
  if (inputMonth == 12) {
    dayAfter = 1;
    monthAfter = 1;
    yearAfter = inputYear + 1;
  }
  if (inputMonth == 2 && inputDay == 28 && !isLeapYear) {
    dayAfter = 1;
    monthAfter = inputMonth + 1;
  }
  if (inputMonth == 2 && inputDay == 29 && isLeapYear) {
    dayAfter = 1;
    monthAfter = inputMonth + 1;
  }
  if (inputMonth == 4 || inputMonth == 6 || inputMonth == 9 || inputMonth == 11 && inputDay == 30) {
    dayAfter = 1;
    monthAfter = inputMonth + 1;
  }
  return `${dayAfter}/${monthAfter}/${yearAfter}`;
}

// function getDayOfWeek 
const getDayOfWeek = (inputDay, inputMonth, inputYear ) => {
  let dayOfWeek = 0;
  let date = new Date(inputYear, inputMonth - 1, inputDay);
  dayOfWeek = date.getDay();
  return dayOfWeek;
}


const checkPerson = (value) =>{
  switch(value){
    case 'F': return 'Chào bố yêu! Chúc bố một ngày vui vẻ!';
    case 'M': return 'Chào mẹ yêu! Chúc mẹ một ngày vui vẻ!';
    case 'B': return 'Chào thằng con trời đánh! Giờ này còn mở tab ẩn danh! Chúc thằng con trời một ngày vui vẻ!';
    case 'G': return 'Chào bé yêu! Chúc bé một ngày vui vẻ!';
    default: return 'Mầy là ma à????? Sợ quá cơ!';
  }
}

const readRealNumber = (value) => {
  switch(value){
      case 0: return 'linh';
      case 1: return 'một';
      case 2: return 'hai';
      case 3: return 'ba';
      case 4: return 'bốn';
      case 5: return 'năm';
      case 6: return 'sáu';
      case 7: return 'bảy';
      case 8: return 'tám';
      case 9: return 'chín';
      default: return 'Con số gì đây? Gì đây mà con mấy';
  }
}
const readRealNumber2 = (value) => {
  switch(value){
      case 1: return 'mười';
      case 2: return 'hai';
      case 3: return 'ba';
      case 4: return 'bốn';
      case 5: return 'năm';
      case 6: return 'sáu';
      case 7: return 'bảy';
      case 8: return 'tám';
      case 9: return 'chín';
      default: return 'Con số gì đây? Gì đây mà con mấy';
  }
}

function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getDistance(coordinatesX, coordinatesY, coordinatesX1, coordinatesX2) {
  let distance = Math.sqrt(Math.pow(coordinatesX - coordinatesX1, 2) + Math.pow(coordinatesY - coordinatesX2, 2));
  return distance.toFixed(4);
}