var x = "off";

function flip() {
document.getElementById("audio").play();
    if (x == "off") {
        document.getElementById("image1").src = "https://images.unsplash.com/photo-1614059929044-c5f7a1025a07?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85";

        x = "on";
    } else {
        document.getElementById("image1").src = "https://images.unsplash.com/photo-1613912836585-0f5a284738f6?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85";
        x = "off";
    }
}
