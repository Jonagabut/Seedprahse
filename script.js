// Password yang telah dienkripsi dalam Base64
const correctPasswordEncoded = "em9uYWdhbnRlbmcx"; // "" dalam Base64

// Daftar tips yang akan ditampilkan secara acak
const tips = [
    "Selalu gunakan kata sandi yang kuat dan unik untuk setiap akun.",
    "Aktifkan autentikasi dua faktor untuk keamanan tambahan.",
    "Jangan bagikan informasi pribadi Anda secara sembarangan.",
    "Perbarui perangkat lunak Anda secara rutin untuk mendapatkan patch keamanan terbaru.",
    "Waspadai email phishing dan jangan klik tautan yang mencurigakan."
];

// Fungsi untuk menampilkan tips acak
function tampilkanTipAcak() {
    const tipsContainer = document.getElementById('tips-container');
    const tipAcak = tips[Math.floor(Math.random() * tips.length)];
    tipsContainer.textContent = tipAcak;
}

// Tampilkan tip acak saat halaman dimuat
tampilkanTipAcak();

// Perbarui tip setiap 10 detik
setInterval(tampilkanTipAcak, 10000);

// Fungsi untuk membuka modal login
function openLoginModal(url) {
    const modal = document.getElementById("login-modal");
    modal.style.display = "block";
    modal.dataset.url = url; // Simpan URL tujuan dalam atribut data-url
}

// Fungsi untuk menutup modal login
function closeModal() {
    const modal = document.getElementById("login-modal");
    modal.style.display = "none";
}

// Fungsi untuk memproses login
function login() {
    const passwordInput = document.getElementById("password").value;
    const errorDiv = document.getElementById("error");
    const modal = document.getElementById("login-modal");
    const targetUrl = modal.dataset.url;

    // Enkripsi input password menggunakan Base64
    const encodedInput = btoa(passwordInput);

    // Periksa apakah password yang dimasukkan sesuai dengan password yang dienkripsi
    if (encodedInput === correctPasswordEncoded) {
        window.location.href = targetUrl; // Arahkan ke URL tujuan jika login berhasil
    } else {
        errorDiv.innerHTML = "Password salah!"; // Tampilkan pesan error jika password salah
    }
}

// Tambahkan event listener untuk tombol login
document.getElementById("confirmLogin").addEventListener("click", login);

// Tambahkan event listener untuk menutup modal jika area di luar modal diklik
window.onclick = function(event) {
    const modal = document.getElementById("login-modal");
    if (event.target === modal) {
        closeModal();
    }
};