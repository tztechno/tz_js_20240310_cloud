
const today = new Date();
const s = today.toISOString();
console.log(s)

const basetime = end;
const validtime = end;
const band = 'B03';
const prod = 'ALBD';
const z = 3;
const x = 7;
const y = 3;

const url = `https://www.jma.go.jp/bosai/himawari/data/satimg/${basetime}/fd/${validtime}/${band}/${prod}/${z}/${x}/${y}.jpg`;

console.log(url)

