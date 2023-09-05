// Buat beberapa elemen salju secara dinamis
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❄";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.opacity = Math.random();
    document.body.appendChild(snowflake);

    // Hapus elemen salju setelah selesai animasi
    snowflake.addEventListener("animationiteration", () => {
        snowflake.remove();
    });
}

// Buat salju turun secara berulang
setInterval(createSnowflake, 500); // 500 adalah nilai pengulangan salju
//jika ingin salju lebih banyak maka kurangi nilai
