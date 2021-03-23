class loadImages {
    constructor({ wrapper, delay, speed, width, height }) {
        this.wrapper = document.querySelector(wrapper);
        this.img = this.wrapper.querySelectorAll('img');
        this.delay = delay;
        this.speed = speed;
        this.width = width;
        this.height = height;
    }

    init() {
        this.setClass();
        this.setStyle();
        this.setLoader();
    }

    setClass() {
        this.wrapper.classList.add('load-block');
        this.img.forEach(item => item.classList.add('load-img'));
    }

    setStyle() {
        const style = document.createElement('style');
        style.textContent = `
        .load-block {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .load-img {
            display: none;
            width: ${this.width};
            height: ${this.height};
            padding: 5px;
        }

        .load-img.active {
            display: block;
        }
        
        .loader-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: ${this.width};
            height: ${this.height};
            margin: 5px;
            background-color: #ecf0f1;
            transition: all .3s;
        }
        
        .loader-wrapper.hide {
            display: none;
        }
        
        .loader {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            border: 5px solid skyblue;
            border-top-color: rgb(227, 239, 243);
            animation: spin ${this.speed}s linear infinite;
        }
        
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        `;
        document.head.appendChild(style);
    }

    setLoader() {
        this.img.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('loader-wrapper');
            div.innerHTML = `<div class="loader"></div>`;
            this.wrapper.appendChild(div);
            setTimeout(() => {
                div.classList.add('hide');
                document.querySelectorAll('.loader-wrapper').forEach(item => item.remove());
                item.classList.add('active');
            }, this.delay);
        });
    }
}