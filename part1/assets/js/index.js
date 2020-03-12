const tz_select = document.querySelector('#js-tz-toogle');
const tz_dropdown = document.querySelector('#js-tz-dropdown');
const intl_select = document.querySelector('#js-intl-toggle');
const intl_dropdown = document.querySelector('#js-intl-dropdown');
const overlay = document.querySelector('.overlay');

tz_select.addEventListener('click', toogTZleSelect);
tz_dropdown.addEventListener('click', handleTZSelectedOption);
intl_select.addEventListener('click', toogIntlleSelect);
intl_dropdown.addEventListener('click', handleIntlSelectedOption);
overlay.addEventListener('click', handleCloseOnoverlayClick);

function toogTZleSelect() {
    // const dropdown = document.querySelector('.tz-select__dropdown');

    tz_dropdown.classList.toggle('tz-close');
    toogleOverlay();
}

function handleTZSelectedOption({ target: { dataset } }) {
    const selectedValue = dataset.tz;
    if (!selectedValue) return;
    tz_select.innerHTML = selectedValue;
    toogTZleSelect();
}

function toogIntlleSelect() {
    // const dropdown = document.querySelector('.intl__dropdown');
    intl_dropdown.classList.toggle('tz-close');
    toogleOverlay();
}

function handleIntlSelectedOption({ target }) {
    let selectedValue;

    if (!target.dataset.intl) {
        selectedValue = target.parentNode.dataset.intl;
    } else {
        selectedValue = target.dataset.intl;
    }
    intl_select.setAttribute('src', selectedValue);
    toogIntlleSelect();
}

function toogleOverlay() {
    overlay.classList.toggle('open')
}

function handleCloseOnoverlayClick() {
    console.log('xax', );
    if (!intl_dropdown.classList.contains('tz-close')) {
        toogIntlleSelect()
    } else {
        toogTZleSelect()
    }
}