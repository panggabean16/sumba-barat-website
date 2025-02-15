// script.js
// Anda bisa menambahkan fungsionalitas JavaScript di sini
console.log("Script.js loaded!");

// Contoh: Menambahkan event listener ke tombol atau elemen lain
document.addEventListener('DOMContentLoaded', function () {
    const heroText = document.querySelector('.hero h2');
    heroText.addEventListener('click', function () {
        alert('Anda mengklik teks hero!');
    });
});
