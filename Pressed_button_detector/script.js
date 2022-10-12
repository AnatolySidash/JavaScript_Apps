const block = document.querySelector('.block');

document.addEventListener('keydown', function (key) {
   let keyName = key.keyCode === 32 ? 'Space' : key.key;
   block.querySelector('.key__number').innerText = key.keyCode;
   block.querySelector('.key__name').innerText = keyName.toUpperCase();
   block.querySelector('.key span').innerText = keyName;
   block.querySelector('.code span').innerText = key.keyCode;
   block.classList.add('active');
});