const verses = [
    "و خداوند نور آسمان‌ها و زمین است. (قرآن ۲۴:۳۵)",
    "خوشا به حال کسانی که در راه راست هدایت می‌شوند. (قرآن ۲:۲)",
    "خداوند با صابران است. (قرآن ۲:۱۵۳)",
    "خداوند بهترین پشتیبان است. (قرآن ۳:۱۵۹)",
    "آی کسانی که ایمان آورده‌اید، صبر و نماز را پیشه کنید. (قرآن ۲:۲۲۳)",
    "محبت و رحمت خداوند همیشه همراه شماست. (قرآن ۹:۱۱)",
    "هر کس نیکی کند، آن را در برابر خود خواهد یافت. (قرآن ۲:۱۱۲)",
    "نور خداوند بر دل‌های پرهیزکار می‌تابد. (قرآن ۶:۱۲۵)",
    "خداوند داناترین و حکیم‌ترین است. (قرآن ۴:۱۱)",
    "با خداوند هیچ چیز دشوار نیست. (قرآن ۵:۱۱۰)"
];

const verseBox = document.getElementById("verseBox");
const getVerseBtn = document.getElementById("getVerse");

getVerseBtn.addEventListener("click", () => {
    // انتخاب آیه شانسی
    const randomIndex = Math.floor(Math.random() * verses.length);
    const selectedVerse = verses[randomIndex];

    // نمایش آیه
    verseBox.textContent = selectedVerse;

    // افکت کوتاه روی کارت
    verseBox.style.transform = "scale(1.05)";
    setTimeout(() => {
        verseBox.style.transform = "scale(1)";
    }, 200);
});
