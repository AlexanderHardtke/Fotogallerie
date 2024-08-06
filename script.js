let images = [
    'img/1.jpg', 'img/2.jpg', 'img/3.jpg',
    'img/4.jpg', 'img/5.jpg', 'img/6.jpg',
    'img/7.jpg', 'img/8.jpg', 'img/9.jpg',
    'img/10.jpg', 'img/11.jpg', 'img/12.jpg',
    'img/13.jpg', 'img/14.jpg', 'img/15.jpg',
    'img/16.jpg', 'img/17.jpg', 'img/18.jpg',
    'img/19.jpg', 'img/20.jpg', 'img/21.jpg',
    'img/22.jpg', 'img/23.jpg', 'img/24.jpg',
    'img/25.jpg', 'img/26.jpg', 'img/27.jpg',
    'img/28.jpg', 'img/29.jpg', 'img/30.jpg',
    'img/31.jpg', 'img/32.jpg', 'img/33.jpg',
    'img/34.jpg', 'img/35.jpg', 'img/36.jpg',
    'img/37.jpg', 'img/38.jpg', 'img/39.jpg',
    'img/40.jpg', 'img/41.jpg', 'img/42.jpg'
];

function showBurgerMenu() {
    let checkBox = document.getElementById('checkbox');
    if (checkBox.checked == true) {
        document.getElementById('menu').classList.add('show-burgerMenu');
    }
    else {
        document.getElementById('menu').classList.remove('show-burgerMenu');
    }
}

function loadPhotos() {
    for (i = 0; i < images.length; i++) {
        document.getElementById('imageContainer').innerHTML += /*html*/`
        <img class="image" src="${images[i]}" onclick="openImage(${i})">
        `;
    }
}

function openImage(i) {
    let img = document.getElementById('overlay');
    if (!img.classList.contains('showOverlay')) {
        showPhoto();
        showOverlay(i);
        document.getElementById('centerPhoto').src = images[i];
        transitionPhoto();
        setTimeout(removeTransitionPhoto, 1);
    }
    else {
        showPhoto();
        showOverlay(i);
        document.getElementById('centerPhoto').src = images[i];
    }
}

function showOverlay(i) {
    let overlay = document.getElementById('overlay');
    overlay.innerHTML = /*html*/`
        <img class="escButton" src="./img/icons/x_orange.png" onclick="hidePhoto()">
        <img class="centerPhoto" id="centerPhoto">
        <div class="icons">
            <img class="arrow" src="./img/icons/arrow_left_orange2.png" onclick="previousPhoto(${i})">
            <img class="arrow" src="./img/icons/arrow_right_orange2.png" onclick="nextPhoto(${i})">
        </div>
        `
}

function nextPhoto(i) {
    i++;
    if (i == images.length) {
        let x = window.confirm("Ende der Fotogalerie erreicht! Von vorne beginnen?");
        if (x == true) {
            i = 0;
            openImage(i);
            rightTransition();
            setTimeout(removeRightTransition, 1);
        }
        else {
            hidePhoto();
        }
    }
    else {
        openImage(i);
        rightTransition();
        setTimeout(removeRightTransition, 1);
    }
}

function previousPhoto(i) {
    if (i <= 0) {
        let x = window.confirm("Erstes Bild der Fotogalerie! Von hinten beginnen?");
        if (x == true) {
            i = images.length;
            i--;
            openImage(i);
            leftTransition();
            setTimeout(removeLeftTransition, 1);
        }
        else {
            hidePhoto();
        }
    }
    else {
        i--;
        openImage(i);
        leftTransition();
        setTimeout(removeLeftTransition, 1);
    }
}

function showPhoto() {
    document.getElementById('overlay').classList.add('showOverlay');
    document.querySelector('h1').classList.add('dNone');
}

function hidePhoto() {
    document.getElementById('overlay').classList.remove('showOverlay');
    document.querySelector('h1').classList.remove('dNone');
}

function transitionPhoto() {
    document.getElementById('centerPhoto').classList.add('transitionImg');
}

function removeTransitionPhoto() {
    document.getElementById('centerPhoto').classList.remove('transitionImg');
}

function rightTransition() {
    document.getElementById('centerPhoto').classList.add('transRight');
}

function removeRightTransition() {
    document.getElementById('centerPhoto').classList.remove('transRight');
}

function leftTransition() {
    document.getElementById('centerPhoto').classList.add('transLeft');
}

function removeLeftTransition() {
    document.getElementById('centerPhoto').classList.remove('transLeft');
}