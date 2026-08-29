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


function updateStaticAuthMenu() {

    const authToken = localStorage.getItem("authToken");
    const userID = localStorage.getItem("userID");

    const isAuthenticated =
        authToken &&
        authToken !== "null" &&
        authToken !== "undefined" &&
        userID &&
        userID !== "null" &&
        userID !== "undefined";


    document
        .querySelectorAll(".auth-logged-in")
        .forEach(item => {
            item.hidden = !isAuthenticated;
        });


    document
        .querySelectorAll(".auth-logged-out")
        .forEach(item => {
            item.hidden = !!isAuthenticated;
        });
}