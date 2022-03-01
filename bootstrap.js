// import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import Dropdown from 'bootstrap/js/dist/dropdown';


const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
  // bootstrap 전체파일을 가져왔을 경우라면
  // --> return new bootstrap.Dropdown(dropdownToggleEl)

  // bootstrap의 일부인 Dropdown만 가져왔을 경우라면, 생성자함수를 그대로 사용하기
  return new Dropdown(dropdownToggleEl)
})





////// MODAL //////
 // Modal Component - Initialize
import Modal from 'bootstrap/js/dist/modal';

new Modal(document.querySelector('#exampleModal'), {// Modal 선택자
  // backdrop: true, // 모달배경 클릭 시, modal 사라짐
  backdrop: 'static', // 모달배경 클릭으로 modal종료 불가
  keyboard: true, // esc로 모달 사라지게 할 수 있음
  focus: false
})

// new Modal(document.querySelector('#myModal'))


// const showModalBtn = document.querySelector('.modal-show');
// showModalBtn.addEventListener('click',()=>{
//   myModal.show();
// })
// showModalBtn.addEventListener('shown.bs.modal', function () {
//   myInput.focus();
// });