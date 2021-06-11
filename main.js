var checkMark = function (mark) {
  if (isNaN(mark) || mark < 0 || mark > 10) {
    return false;
  }
  return true;
};

// BÀI TẬP 1
var btnCalculateMark = document.querySelector("#btnCalculateMark");
console.log(btnCalculateMark);
var txtResult = document.querySelector("#txtResult");
btnCalculateMark.onclick = function () {
  txtStandardMark = parseFloat(
    document.querySelector("#txtStandardMark").value
  );
  txtFirstMark = parseFloat(document.querySelector("#txtFirstMark").value);
  txtSecondMark = parseFloat(document.querySelector("#txtSecondMark").value);
  txtThirdMark = parseFloat(document.querySelector("#txtThirdMark").value);
  slPriorRegion = parseFloat(document.querySelector("#slPriorRegion").value);
  slPriorNum = parseFloat(document.querySelector("#slPriorNum").value);
  if (
    isNaN(txtStandardMark) ||
    !checkMark(txtFirstMark) ||
    !checkMark(txtSecondMark) ||
    !checkMark(txtThirdMark)
  ) {
    txtResult.innerHTML = "Input không hợp lệ";
    return;
  }
  var status = false;
  var sumMark =
    txtFirstMark + txtSecondMark + txtThirdMark + slPriorNum + slPriorRegion;
  if (
    sumMark >= txtStandardMark &&
    txtFirstMark > 0 &&
    txtSecondMark > 0 &&
    txtThirdMark > 0
  ) {
    status = true;
  }
  if (status) {
    txtResult.style.backgroundColor = "green";
    txtResult.style.color = "white";
  } else {
    txtResult.style.backgroundColor = "red";
    txtResult.style.color = "yellow";
  }
  txtResult.innerHTML =
    "Tổng điểm là : " + sumMark + " - " + (status ? "ĐẬU" : "RỚT");
};

// BÀI TẬP 2
var billDetail = document.querySelector("#billDetail");
billDetail.style.display = "none";
var calculateElectricityMoney = function(electricityNum){
  var result = 0;
  if(electricityNum <= 50){
    result = electricityNum * 500;
  }else if(electricityNum > 50 && electricityNum <= 100){
    result = 50 * 500 + (electricityNum - 50) * 650;
  } else if( electricityNum > 100 && electricityNum <= 200){
    result = 50 * 500 + 50 * 650 + (electricityNum - 100) * 850;
  }else if(electricityNum > 200 && electricityNum <= 350){
    result = 50 * 500 + 50 * 650 + 100 * 850 + (electricityNum - 200) * 1100;
  }else{
    result = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (electricityNum - 350) * 1300;
  }
  return result;
}


var btnCalculateMoney = document.querySelector("#btnCalculateMoney");
var txtMoney = document.querySelector("#txtMoney");
btnCalculateMoney.onclick = function(){
  billDetail.style.display = "none";
  
  txtCusName = document.querySelector("#txtCusName").value;
  // console.log(txtCusName);
  txtConsume = parseInt(document.querySelector("#txtConsume").value);
  if(isNaN(txtConsume) || txtCusName.length == 0 || txtConsume < 0){
    txtMoney.innerHTML = "Input không hợp lệ";
    return;
  }
  var result = calculateElectricityMoney(txtConsume);
  txtMoney.innerHTML = "Tổng tiền điện là: " + result.toLocaleString() + "VNĐ";
}

var btnPrintBill = document.querySelector("#btnPrintBill");
btnPrintBill.onclick= function(){
  
  txtCusName = document.querySelector("#txtCusName").value;
  txtConsume = parseInt(document.querySelector("#txtConsume").value);
  if(isNaN(txtConsume) || txtCusName.length == 0 || txtConsume < 0){
    txtMoney.innerHTML = "Input không hợp lệ";
    return;
  }
  var txtName = document.querySelector("#txtName");
  txtName.innerHTML = txtCusName;
  var txtNumber = document.querySelector("#txtNumber");
  txtNumber.innerHTML = txtConsume + "kWh";
  var txtMoneyBill = document.querySelector("#txtMoneyBill");
  txtMoneyBill.innerHTML = calculateElectricityMoney(txtConsume).toLocaleString() + " VNĐ";
  billDetail.style.display = "block";
}