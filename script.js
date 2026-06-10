const verses = [
    "آیه 1: خداوند رحمتش را بر شما نازل کند ✨",
    "آیه 2: هر روزت پر از آرامش باشد 💛",
    "آیه 3: ایمان داشته باش، همه چیز ممکن است ☁️🕊️"
];

document.getElementById('verseBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    document.getElementById('verseText').innerText = verses[randomIndex];
});
