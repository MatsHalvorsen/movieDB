//Model
let pictures = [
    "grot.jpg",
    "joker.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg",

];

let currentIndex = 0;

//View
updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <nav class="menu">
    <ul>
        <li><a href="#">MovieDB</a></li>
        <li><a href="#">MOVIE</a></li>
        <li><a href="#">SERIES</a></li>
        <li class="push"><input type="text" placeholder="Search"></li>
    </ul>
</nav>

<main>
    <article>
        <div class="article-headImage article-section">
            <img id="headImage" src="ironMan.jpg" alt="picture of the Iron Man suite">
        </div>
        <div class="article-imageSlider article-section">
            <div id="imageSlide">
                <button id="pointersLeft" onclick="prevSlide()">ᐸ</button>
                <img id="slide" src="${pictures[(currentIndex + pictures.length - 1) % pictures.length]}"
                 alt="picture of a movie">
                <img id="slide" src="${pictures[currentIndex]}" alt="picture of a movie">
                <img id="slide" src="${pictures[(currentIndex + 1) % pictures.length]}" alt="picture of a movie">
                <img id="slide" src="${pictures[(currentIndex + 2) % pictures.length]}" alt="picture of a movie">
                <button id="pointersRight" onclick="nextSlide()">ᐳ</button>
            </div>
        </div>
    </article>

</main>
    `;
}



//Controller
function nextSlide() {
    currentIndex = (currentIndex + 1) % pictures.length;
    updateView();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + pictures.length) % pictures.length;
    updateView();
}
