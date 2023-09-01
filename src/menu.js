import {Menu} from './core/menu'


export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.items = [];

        // Запрещаем стандартное контекстное меню
        document.addEventListener('contextmenu', event => {
            event.preventDefault();
            this.open(event.clientX, event.clientY);
        });

        // Закрываем меню при клике вне его
        document.addEventListener('click', () => this.close());

        this.el.addEventListener('click', event => {
            if (event.target.classList.contains('menu-item')) {
                console.log('Command:', event.target.textContent);
            }
        });
    }

    open(x, y) {
        this.el.style.top = `${y}px`;
        this.el.style.left = `${x}px`;
        this.el.classList.add('open');
    }
    close() {
        this.el.classList.remove('open');
    }

    add(label) {
        const item = document.createElement('li');
        item.textContent = label;
        item.classList.add('menu-item');
        this.el.appendChild(item);
    }
    
}

const contextMenu = new ContextMenu('#menu');


contextMenu.add('Считать клики за 3 секунды');
contextMenu.add('Создать фигуру');
contextMenu.add('Поменять цвет');
contextMenu.add('Вызвать сообщение');
