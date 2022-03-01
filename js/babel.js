
console.log('hello parcel!');


async function test () {
  const promise =Promise.resolve(123);
  console.log(await promise);
}

test(); 
// async await 문법은 BABLE의 추가적인 플러그인을 설치해야 , ES5문법으로 변환된다. 그래서,
// Error 발생 > Message: regeneratorRuntime is not defined
//   추가설정 필요함
// npm i -D @babel/plugin-transform-runtime