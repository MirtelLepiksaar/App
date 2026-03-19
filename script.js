
async function mdea() {
    const a = { mina: "perses" };
const response = await fetch('https://tinkr.tech/sdb/MirteliDB', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(a)
});
const data = response.json()
console.log(data)
}
