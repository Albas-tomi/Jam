let hariTahunBaru = new Date(new Date().getFullYear() + 1,0,1);

let hari = document.getElementById('hari');
let jam = document.getElementById('jam');
let menit = document.getElementById('menit');
let detik = document.getElementById('detik');


setInterval(function() {
    let now = new Date();
    let waktuTunggu = (hariTahunBaru - now) / 1000;
    updateJam(waktuTunggu);
}, 1000);

const updateJam = (sisaWaktu) => {
    let harii = Math.floor(sisaWaktu / 86400);
    sisaWaktu -= harii * 86400;

    let jams = Math.floor(sisaWaktu/3600);
    sisaWaktu -= jams * 3600;

    let menits = Math.floor(sisaWaktu/60);
    sisaWaktu -= menits*60;

    let detiks = Math.floor(sisaWaktu%60);

    hari.innerHTML = Number(harii);
    jam.innerHTML = Number(jams);
    menit.innerHTML = Number(menits);
    detik.innerHTML = Number(detiks);
}

const Number = (number) => {
    return number < 10 ? "0" + number : number;
}