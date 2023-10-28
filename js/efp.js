navbar = document.querySelector(".navbar");
header = document.querySelector(".header");
mlinks = document.querySelector(".mlinks");
lines = document.querySelector(".lines");
closei = document.querySelector(".close");

newsandevents = document.querySelector(".navbar .newsandevents");
publications = document.querySelector(".navbar .publications");
education = document.querySelector(".navbar .education");

downlistnews = document.querySelector(".downlistnews");
downlistpub = document.querySelector(".downlistpub");
downlistedu = document.querySelector(".downlistedu");

more1 = document.querySelector(".downlistnews .box.list ul li.more");
more2 = document.querySelector(".downlistpub .box.list ul li.more");
more3 = document.querySelector(".downlistedu .box.list ul li.more");

emptyboxul1 = document.querySelector(".downlistnews .box.emptycontent ul");
emptyboxul2 = document.querySelector(".downlistpub .box.emptycontent ul");
emptyboxul3 = document.querySelector(".downlistedu .box.emptycontent ul");


lines.addEventListener("click", function () {
    mlinks.classList.toggle("rmv");
    closei.style.display = 'block';
    this.style.display = 'none';
});
closei.addEventListener("click", function () {
    mlinks.classList.toggle("rmv");
    lines.style.display = 'block';
    this.style.display = 'none';
});
newsandevents.addEventListener("click", function () {
    downlistnews.classList.toggle("clicked");
    document.querySelector(".navbar ul li").classList.toggle("active");
    document.querySelector(".navbar ul").classList.toggle("hovered");
});
publications.addEventListener("click", function () {
    downlistpub.classList.toggle("clicked");
    document.querySelector(".navbar ul li").classList.toggle("active");
    document.querySelector(".navbar ul").classList.toggle("hovered");
});
education.addEventListener("click", function () {
    downlistedu.classList.toggle("clicked");
    document.querySelector(".navbar ul li").classList.toggle("active");
    document.querySelector(".navbar ul").classList.toggle("hovered");
});
// newsandevents.addEventListener("click", dropdownclick (downlistnews));
// publications.addEventListener("click", dropdownclick (downlistpub));
// education.addEventListener("click", dropdownclick (downlistedu));

more1.addEventListener("click", function () {
    emptyboxul1.classList.toggle("show");
    this.style.color = '#2F5FAE';
});
more2.addEventListener("click", function () {
    emptyboxul2.classList.toggle("show");
    this.style.color = '#2F5FAE';
});
more3.addEventListener("click", function () {
    emptyboxul3.classList.toggle("show");
    this.style.color = '#2F5FAE';
});


function dropdownclick (dropdown) {
    dropdown.classList.toggle("clicked");
    document.querySelector(".navbar ul li").classList.toggle("active");
    document.querySelector(".navbar ul").classList.toggle("hovered");
}