const nupp = document.querySelector("button");
const text_bar = document.querySelector("input");
const div = document.querySelector("div");
const body = document.querySelector("body");
const username = document.createElement("input").readonly;
username.classList.add("username")
body.appendChild(username)
nupp.addEventListener("click", function () {
  async function saada() {
    const response = await fetch('https://tinkr.tech/sdb/Mirtel-Lepiksaar/Tiny-Chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ saatja: "mina", jutt: text_bar.value })
    });
  };
  saada();
  
  const minaraagin = document.createElement("strong");
  div.appendChild(minaraagin);
  minaraagin.classList.add("mina");
  minaraagin.textContent = text_bar.value;
  text_bar.value = "";
  
});
