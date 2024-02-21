const playButton = document.getElementById("playButton");
const container = document.querySelector("main");
const usernameInput = document.getElementById("usernameInput");

const instruction = document.querySelector(".instruction");
const exitGame = document.querySelectorAll("#quit");
const contentGame = document.getElementById("content");

const backsound = document.getElementById("bc");
const layer = document.querySelector(".layer");
const pauseBtn = document.querySelector(".pause");
const pause = document.getElementById("pause");
const restart = document.querySelectorAll("#restart");
const scorePause = document.getElementById("score-pause");
const failPause = document.getElementById("fail-pause");

let fail = document.getElementById("fail");
let scoreElement = document.getElementById("score");

const imgTarget = document.querySelectorAll(".target img");
const ubinPiano = document.getElementById("areaTargetPoin");

const time = document.getElementById("time");
const playerName = document.getElementById("namePlayer");
const hitungMundur = document.getElementById("hitung-mundur");

function checkInputValue() {
  if (usernameInput.value) {
    playButton.disabled = false; // Mengaktifkan tombol jika input memiliki nilai
    playButton.classList.replace("bg-gray-600", "bg-blue-600");
    console.log(usernameInput.value);
    playerName.textContent = usernameInput.value;
  } else {
    playButton.classList.replace("bg-blue-600", "bg-gray-600");
    playButton.classList.replace("hover:bg-blue-800", "bg-gray-600");
    playButton.disabled = true; // Menonaktifkan tombol jika input tidak memiliki nilai
  }
}

// Memanggil fungsi checkInputValue setiap kali nilai input berubah
usernameInput.addEventListener("input", checkInputValue);

// Menonaktifkan tombol "Play" saat halaman dimuat (jika input awalnya tidak valid)
checkInputValue();

// In Game
// Mulai permainan
playButton.addEventListener("click", function () {
  instruction.classList.replace("flex", "hidden");
  contentGame.classList.replace("hidden", "flex");
  usernameInput.value = "";

  hitungMundur.classList.replace("hidden", "flex");
  layer.classList.replace("hidden", "flex");

  scoreElement.textContent = 0;
  fail.textContent = 0;
  countdown();
});

// PROBLEM : Countdown hanya berfungsi 1 kali setelah halaman di REFRESH
let defaultCountdown = 3;
function countdown() {
  hitungMundur.textContent = defaultCountdown;

  const intervalId = setInterval(function () {
    defaultCountdown--;

    if (defaultCountdown >= 0) {
      hitungMundur.textContent = defaultCountdown;
      if (defaultCountdown == 0) {
        hitungMundur.style.display = "none";
        layer.classList.replace("flex", "hidden");
        clearInterval(intervalId);
        animationtarget("add");
        backsound.play();
        tekanUbin();
        startStopwatch();
        defaultCountdown = 3;
      }
    }
  }, 1000);
}

// Stopwatch
// initialization
let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

// Format waktu agar selalu dua digit
function formatTime(time) {}

function updateDisplay() {}

function startStopwatch() {
  // if (!isRunning) {
  //   startTime = Date.now() - elapsedTime;
  //   timerInterval = setInterval(function () {
  //     elapsedTime = Date.now() - startTime;
  //     updateDisplay();
  //   }, 10);
  //   isRunning = true;
  // }
}

function stopStopwatch() {}

function resetStopwatch() {}

// End Stopwatch

function animationtarget(action) {
  if (action == "add") {
    imgTarget[0].classList.add("animation-target1");
    imgTarget[1].classList.add("animation-target2");
    imgTarget[2].classList.add("animation-target3");
    imgTarget[3].classList.add("animation-target4");
  }
  if (action == "remove") {
    imgTarget[0].classList.remove("animation-target1");
    imgTarget[1].classList.remove("animation-target2");
    imgTarget[2].classList.remove("animation-target3");
    imgTarget[3].classList.remove("animation-target4");
  }
  // imgTarget.forEach((e) => {
  // });
}

function tekanUbin() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "D" || event.key === "d") {
      console.log("Tombol D ditekan");
      periksaTombol("D");
    }
    if (event.key === "F" || event.key === "f") {
      console.log("Tombol F ditekan");
      periksaTombol("F");
    }
    if (event.key === "J" || event.key === "j") {
      console.log("Tombol J ditekan");
      periksaTombol("J");
    }
    if (event.key === "K" || event.key === "k") {
      console.log("Tombol K ditekan");
      periksaTombol("K");
    }
  });
}

let score = 0;
let failPoin = 0;
function periksaTombol(tombol) {
  // Dapatkan posisi ubin dan area target
  let posisiUbin = ubinPiano.getBoundingClientRect();

  const target = {
    D: imgTarget[0],
    F: imgTarget[1],
    J: imgTarget[2],
    K: imgTarget[3],
  };

  const targetImg = target[`${tombol}`];
  const posisiTarget = targetImg.getBoundingClientRect();

  console.log(posisiTarget.top.toFixed());

  // Memeriksa apakah bagian bawah ubin berada di atas bagian atas target

  if (posisiTarget.top >= 350) {
    score += 1;
    scoreElement.textContent = score;
  }

  if (posisiTarget.top < 350) {
    failPoin += 1;
    fail.textContent = failPoin;
  }
}

// procedure PerbaruiPermainan():
//     perbarui posisi setiap ubin dalam ubin_piano
//     untuk setiap ubin dalam ubin_piano:
//         jika ubin mencapai bagian bawah layar:
//             jika pemain menekan ubin:
//                 tambahkan skor
//             hapus ubin dari ubin_piano
//             tambahkan kembali ubin ke ubin_piano dengan properti yang baru

// Ambil elemen ubin piano

// procedure tekanUbin():
//     jika pemain menekan ubin:
//         periksa apakah ubin yang ditekan adalah ubin yang tepat
//         jika benar:
//             tambahkan skor
//         jika salah:
//             kurangi nyawa
// Mendengarkan event keyboard setelah tombol "Play" diklik

//       procedure AnimasiKetukanPadaUbin(u):
//     // Implementasi animasi seperti perubahan warna, pergerakan, atau efek lainnya

// procedure AnimasiMenghilangkanUbin(u):
//     // Implementasi animasi untuk menghilangkan ubin, misalnya dengan membuatnya transparan atau menggerakkannya ke arah tertentu

// procedure AnimasiMunculKembaliUbin(u):
//     // Implementasi animasi untuk muncul kembali ubin, misalnya dengan mengembalikannya ke posisi awal dengan pergerakan dari luar layar

//Resatart
// restart.forEach((restartBtn) => {
//   restartBtn.addEventListener("click", function () {
//     scoreElement.textContent = 0;
//     fail.textContent = 0;

//     pause.classList.replace("flex", "hidden");
//     countdown();
//   });
// });

// Resume
pauseBtn.addEventListener("click", function () {
  backsound.pause();
  layer.classList.replace("hidden", "flex");
  pause.classList.replace("hidden", "flex");

  animationtarget("remove");

  scorePause.textContent = score;
  failPause.textContent = failPoin;
});

exitGame.forEach((e) => {
  e.addEventListener("click", function () {
    contentGame.classList.replace("flex", "hidden");
    instruction.classList.replace("hidden", "flex");
    layer.classList.replace("flex", "hidden");
    pause.classList.replace("flex", "hidden");

    animationtarget("remove");
  });
});

// procedure ulang permainan
