const userName = document.querySelector('#writeBox1');
const message = document.querySelector('#writeBox2');
const passComfirm = document.querySelector('.passComfirm');
const commentUL = document.querySelector('.commentUL');
const addBtn = document.querySelector('#addBtn');

// msg 삭제
function deletecomment(e) {
  let deleteLI = e.target.parentElement;
  deleteLI.remove();
}

// up toggle

function upToggle(e, up) {
  up.classList.toggle('yellow');
}

//추가할 username과 message
function nameNmessage() {
  let li = document.createElement('li');
  let div = document.createElement('div');
  let div2 = document.createElement('div');
  let p = document.createElement('p');
  let span = document.createElement('span');
  let btn = document.createElement('button');
  let up = document.createElement('button');

  div.setAttribute('class', 'comment');
  p.setAttribute('class', 'commentText');
  span.setAttribute('class', 'commetDate');
  btn.classList.add('deleteMsg');
  up.classList.add('good');

  div2.textContent = userName.value;
  p.textContent = message.value;
  btn.textContent = 'Del';
  up.textContent = 'UP';
  span.textContent = new Date().toLocaleString();

  div.append(div2, p);
  li.append(div, span, btn, up);

  btn.addEventListener('click', deletecomment);
  up.addEventListener('click', (e) => upToggle(e, up));

  return li;
}

// message 추가시 비밀번호 입력
function passwordCheck() {
  let password = '1234';
  if (passComfirm.value !== password) {
    alert('password가 틀렸습니다.');
    return false;
  }
  return true;
}

// addBtn 클릭 시 트윗 추가
function addComment(e) {
  let pass = passwordCheck();
  if (!pass || userName.value === '' || message.value === '') {
    return;
  }
  let li = nameNmessage();
  commentUL.insertBefore(li, commentUL.children[0]);
  userName.value = '';
  message.value = '';
}

addBtn.addEventListener('click', addComment);
