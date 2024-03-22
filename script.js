function copyText() {
  // 복사할 텍스트를 포함하고 있는 textarea 요소를 가져옵니다.
  const textArea = document.querySelector(".invisible-textarea");
  
  // textarea의 내용을 선택합니다.
  textArea.select();
  textArea.setSelectionRange(0, 99999); // 모바일 기기에서의 선택을 보장합니다.
  
  // 선택된 텍스트를 클립보드에 복사합니다.
  document.execCommand("copy");
  
  // 사용자에게 텍스트가 복사되었음을 알립니다.
  alert("양식이 성공적으로 복사되었습니다. 내용을 작성하신 후, 채팅을 통해 전달해 주시면 감사하겠습니다 :)");
}