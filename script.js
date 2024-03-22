function copyForm() {
  var copyText = document.getElementById("applicationForm");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // 모바일 기기에서 사용하기 위함
  document.execCommand("copy");
  alert("가입 신청서가 복사되었습니다. 붙여넣기를 통해 사용하세요.");
}
