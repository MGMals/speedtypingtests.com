window.startTypingAnimation = () => {

    const words = ["Faster", "Smarter", "Better", "Like a Pro"];
    let index = 0;

    setInterval(() => {

        const wordElement = document.getElementById("changing-word");

        if (!wordElement) return;

        wordElement.style.opacity = 0;

        setTimeout(() => {
            index = (index + 1) % words.length;
            wordElement.textContent = words[index];
            wordElement.style.opacity = 1;
        }, 300);

    }, 2200);
};