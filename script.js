const nupp = document.querySelector("button");
nupp.addEventListener("click", function () {
  async function Jobud() {
    const response = await fetch('https://tinkr.tech/sdb/Mirtel-Lepiksaar/Tiny-Chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'John', age: 25 })
    });
  };
  Jobud();
  
});
