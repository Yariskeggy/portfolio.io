const menuOpen = () => {
    let btn = document.querySelector('.header__hamburger');
    let el = document.querySelector('.section-main__links');

    if (document.documentElement.clientWidth < 1000) {
        document.addEventListener('click', function (event) {
            var isClickInside = btn.contains(event.target);
            if (isClickInside) {
                el.style.display = 'flex';
            } else {
                el.style.display = 'none';
            }
        });
    }


}

menuOpen()