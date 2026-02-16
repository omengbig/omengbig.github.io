function toggleMusic() {
    const info = document.getElementById("music-info");
    const playerSection = document.getElementById("player-section");
    const iframe = playerSection.querySelector("iframe");

    const isShowing = playerSection.classList.toggle("show");

    if (isShowing) {
        if (!iframe.src.includes("autoplay=1")) {
            iframe.src = "https://open.spotify.com/embed/playlist/0zrgMuiJpvi9KANTJEag1m?utm_source=generator?autoplay=1";
        }
        info.innerText = "Hide Player";
        info.classList.add("text-pink-500");
    } else {
        info.innerText = "Click to expand player";
        info.classList.remove("text-pink-500");
    }
}

const textElement = document.getElementById("typing-text");
function playTyping() {
    textElement.classList.remove("animate-typing");
    void textElement.offsetWidth;
    textElement.classList.add("animate-typing");
}
playTyping();
setInterval(playTyping, 10000);

function reveal() {
    document.querySelectorAll(".reveal").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50)
            el.classList.add("active");
    });
}
window.addEventListener("scroll", reveal);
reveal();