// ESM --> import /export 키워드 사용



// Node JS환경에서는 CommonJS사용 --> require('filename') / module.exports 사용
// const autoprefixer = require('autoprefixer'); // NodeJS에서 사용하는함수require()
// // import autoprefixer from 'autoprefixer'; 과 동일

// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }

/////////// 위의 내용을 더 간결하게 표현
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}

//1.  최소 server실행시 (parcel ) ERROR가 발생함
//2. Erorr Message =>  /Users/apple/git/fc_bootstrap/index.html:undefined:undefined: PostCSS plugin autoprefixer requires PostCSS 8.
//3. 원인: postcss 버전(8.4.7)과 autoprefixer 버전(^10.4.2)이 충돌하기 때문
//4. 해결방법: autoprefixer 9버전으로 바꿔준다.