const prizeBtn = document.querySelector('.info__prize-btn');
const prizeTable = document.querySelector('.info__prize-table')
prizeBtn.addEventListener('click', ()=>{
    prizeTable.classList.toggle('_active');
    prizeBtn.classList.toggle('_active');
})

const defineDay = () => {

    const date = Date.now();

    if (date < 1671580800000) {   // 21.12
        return 0;
    }

    if (date < 1671667200000) {   // 22.12
        return 1;
    }

    if (date < 1671753600000) {   // 23.12
        return 2;
    }

    if (date < 1671840000000) {   // 24.12
        return 3;
    }

    if (date < 1671926400000) {   // 25.12
        return 4;
    }

    if (date < 1672012800000) {   // 26.12
        return 5;
    }

    if (date < 1672099200000) {   // 27.12
        return 6;
    }

    if (date < 1672185600000) {   // 28.12
        return 7;
    }

    return 8;
}
