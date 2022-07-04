function printExpression(value) {
  document.querySelector("#expression").innerHTML += value;
}

function calculate() {
  let expression = document.querySelector("#expression").innerHTML;
  document.querySelector("#answer").innerHTML = eval(expression);
}

// search로 +, -, *, /, % 찾으셔서 그것에 대해
// split으로 앞의 숫자와 뒤의 숫자를 구분해서
// 구분을 하려면 조건문을 써야할 것 같음
// 실제로 연산한 결과를 answer 내보내기
