function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = "💗";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function createMail() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 4 + "s";

  heart.innerText = "💌";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function createKiss() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 5 + "s";

  heart.innerText = "💋";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

const strs = [
  "Bae à",
  "Yêu và được yêu em là điều hạnh phúc nhất đối với anh",
  "Dù chúng ta cách xa về đại lý nhưng anh tin rằng trái tim đôi ta luôn hướng về nhau",
  "Khoảng cách chỉ có thể ngăn cản anh nhìn thấy em, chạm vào em nhưng không thể ngăn được tình yêu và nỗi nhớ mà anh dành cho em từng ngày",
  "Chúc mừng ngày lễ tình nhân với món quà mà cuộc đời đã ban tặng cho anh, đó chính là em",
  "Chúc em Valentine ấm áp, vui vẻ",
  "Mong sớm được gặp em, yêu em!",
];

for (let i = 0; i < strs.length; i++) {
  setTimeout(() => {
    document.getElementById("text").innerHTML = "💌 " + strs[i];
  }, i * 3000);
}
setTimeout(() => {
  document.getElementById("body").style.display = "flex"
  document.getElementById("text").innerHTML = '';
  document.getElementById("text").style.display = "none"
  setInterval(createHeart, 200);
  setInterval(createMail, 200);
  setInterval(createKiss, 200);
}, strs.length * 3000);
