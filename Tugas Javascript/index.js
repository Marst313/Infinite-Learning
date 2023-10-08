'use strict';

// ! 1.Function
const color = document.getElementById('color');
const body = document.getElementsByTagName('body');

const changeBg = () => {
  body[0].style.backgroundColor = color.value;
  console.log('helo');
};

color.addEventListener('change', changeBg);

// ! 2.While do
const minusBtn = document.querySelector('.while > .minus');
const plusBtn = document.querySelector('.while > .plus');
const number = document.querySelector('.while span');

minusBtn.addEventListener('click', () => {
  let numberValue = +number.innerHTML;

  numberValue = numberValue - 1;
  while (numberValue < 1) numberValue = 1;

  number.innerHTML = numberValue;
});

plusBtn.addEventListener('click', () => {
  let numberValue = +number.innerHTML;

  do {
    numberValue = numberValue + 1;
    break;
  } while (numberValue >= 1);

  number.innerHTML = numberValue;
});

// ! 3.For Statement
const forStatement = document.querySelector('.forStatement');
const forStatementValue = document.querySelector('#forStatement');

forStatement.addEventListener('click', () => {
  let jumlahPerulangan = forStatementValue.value || 5;

  for (let i = 1; i <= jumlahPerulangan; i++) {
    let paragraph = document.createElement('p');

    paragraph.textContent = 'Ini adalah paragraf ke-' + i;

    document.querySelector('.hasil').appendChild(paragraph);
  }
});

// ! 4.Switch case
function ubahOutput() {
  const pilihan = document.getElementById('pilihan').value;
  const outputElement = document.getElementById('output');

  switch (pilihan) {
    case 'opsi1':
      outputElement.textContent = `Anda memilih Tempe`;
      break;
    case 'opsi2':
      outputElement.textContent = `Anda memilih Rendang`;
      break;
    case 'opsi3':
      outputElement.textContent = `Anda memilih Nasi Goreng`;
      break;
    default:
      outputElement.textContent = 'Pilih opsi di atas';
  }
}

// ! 5.If,Else,Nested If
function cekUmur() {
  const umur = parseInt(prompt('Masukkan umur Anda:'));

  if (isNaN(umur)) {
    document.getElementById('hasilUmur').textContent = 'Mohon masukkan umur yang valid.';
  } else {
    if (umur < 18) {
      document.getElementById('hasilUmur').textContent = 'Anda masih di bawah umur.';
    } else if (umur >= 18 && umur < 60) {
      document.getElementById('hasilUmur').textContent = 'Anda sudah dewasa.';
    } else {
      document.getElementById('hasilUmur').textContent = 'Anda sudah lanjut usia.';
    }
  }
}
