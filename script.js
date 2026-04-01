// Praktikum JS
// Rafli Ahmad Fauzi 2405815
// Pemweb 4C

// SOAL A1
const tombolCTA = document.querySelector(".cta");
// harusnya class yang digunakan adalah .cta
tombolCTA.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Terima kasih! Mengarahkan ke halaman pendaftaran...");
});

// SOAL A2
const cards = document.querySelectorAll(".pricing-card");
// selector salah karena class yang dipilih yaitu pricing-cards, seharusnya pricing-card karena di htmlnya untuk pricing-card ada 3
console.log("Jumlah paket tersedia: " + cards.length);

// SOAL A3
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    cards.forEach(function (c) {
      c.classList.remove("selected");
    });
    card.classList.add("selected");
    // untuk menambahkan class dengan add (sebelumnya tambah)

    // SOAL B1
    // (forEach dan addEventListener sudah include)
    //  ambil nama paket dari h3
    const namaPaket = card.querySelector("h3").innerText;
    // tampilin ke bawah
    const info = document.getElementById("pilihan-info");
    info.innerText = "Paket dipilih: " + namaPaket.toUpperCase();
  });
});

// SOAL B2
const faqs = document.querySelectorAll(".faq-item h4");

faqs.forEach(function (judul) {
  judul.addEventListener("click", function () {
    // ambil <p> setelah h4
    const jawaban = this.nextElementSibling;

    // toggle class visible
    jawaban.classList.toggle("visible");
  });
});

// SOAL B3
const searchInput = document.getElementById("faq-search");
const faqItems = document.querySelectorAll(".faq-item");

searchInput.addEventListener("input", function () {
  // inputan yang diketik jadi huruf kecil semua
  const ketik = this.value.toLowerCase();

  faqItems.forEach(function (item) {
    const judul = item.querySelector("h4").innerText.toLowerCase();

    // buat cek inputan si user nya ada di judul faq apa engga
    if (judul.includes(ketik)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});
