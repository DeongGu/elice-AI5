// 클로저 예시
function first() {
  const f = "안녕하세요. 처음입니다.";
  function second() {
    const s = "여기는 두번째입니다.";
    console.log(f, s);
  }
  return second;
}

const result = first();
result();

// first();
console.log(result);
console.log(first());

// 클로저 활용

const increase = (function () {
  let num = 0;
  return function () {
    return ++num;
  };
})();

console.log(increase());
console.log(increase());
console.log(increase());

//

const counter = (function () {
  let num = 0;

  return {
    increase() {
      return ++num;
    },

    decrease() {
      return --num;
    },
  };
})();

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());

console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.decrease());
