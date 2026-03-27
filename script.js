const nupp = document.querySelector("button");
const text_bar = document.querySelector("input");
nupp.addEventListener("click", function () {
  async function saada() {
    const response = await fetch('https://tinkr.tech/sdb/Mirtel-Lepiksaar/Tiny-Chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ saatja: "mina", jutt: text_bar.value })
    });
  };
  saada();
  text_bar.value = "";
  let minaräägin = document.createElement("p");
  async function võta() {
    
  }
  minaräägin.textContent = 
});
