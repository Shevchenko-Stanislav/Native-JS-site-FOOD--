import {getResource} from '../services/services';

function cards() {
    class MenuCard {
        constructor(src, alt, title, discr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.discr = discr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.course = 10;
            this.classes = classes;
            this.setDollarPrice();
        }

        setDollarPrice () {
            this.price = this.price * this.course;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.discr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
        `;
        this.parent.append(element);
        }
    }

    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //         });
    //     });

    // Запрос на сервер реализован, но т.к. у меня нет возможности
    // обратиться к реальной базе данных, мы будем использовать воображение
    // и готовый массив из '../services/services'.

    const serverResponse = getResource();
    serverResponse.forEach(({img, altimg, title, descr, price}) => {
        new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    });
}

export default cards;