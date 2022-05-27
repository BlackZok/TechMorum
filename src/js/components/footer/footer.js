import {generalFooter} from "./footerModel";

const footer = document.querySelector('#footer');

let footerHtml = generalFooter.map((a) => {
    return `
    <div class="col-md-4" style="background-color: #1f1f1f;> 
        <div class="home-footer__info" style="background-color: #1f1f1f; display: flex; justify-content: center; text-align: center;">
            <h3 class="home-footer__title"><a style = "color: rgba(255,255,255, 0.7);
             border-bottom: 1px solid rgba(255,255,255, 0.7);">${a.title}</h3>
            <ul class="home-footer__list">
                <li class="home-footer__item" style = "list-style-type: none;">
                <a href = "" style = "color: rgba(255,255,255, 0.7); line-height: 2;">${a.content.map((cont) => `<li style = "list-style-type: none;">${cont.text}</li>`).join(" ")}</a></li>
            </ul>
        </div>
    </div>
    ` /*Magic code, don't touch*/
}).join(" ");

footer.insertAdjacentHTML('beforeend', footerHtml);


/* <div class="row home-footer__content">

<div class="col-lg-3 col-md-6 col-12">
    
</div>

<div class="col-lg-3 col-6">
    <div class="home-footer__info">
        <h3 class="home-footer__title">Основное</h3>
        <ul class="home-footer__list">
            <li class="home-footer__item"><a class="home-footer__txt" href="/index.html">Главная</a></li>
            <li class="home-footer__item"><a class="home-footer__txt" href="/catalog.html">Каталог</a></li>
            <li class="home-footer__item"><a class="home-footer__txt" href="/services.html">Услуги</a></li>
        </ul>
    </div>
</div>




<div class="col-lg-3 col-6">
    <div class="home-footer__info">
        <h3 class="home-footer__title">Информация</h3>
        <ul class="home-footer__list">
            <li class="home-footer__item"><a class="home-footer__txt" href="/about.html">Компания</a></li>
        </ul>
    </div>
</div>

<div class="col-lg-3 col-6">
    <div class="home-footer__info">
        <h3 class="home-footer__title">Контакты</h3>
        <ul class="home-footer__list">
            <li class="home-footer__item-geo">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>

                <a class="home-footer__txt" href="https://yandex.ru/maps/20728/korolev/house/ulitsa_frunze_1a/Z04YfgVmTUQEQFtvfXVzdXVnYg==/?ll=37.826986%2C55.924604&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=16.23" class="home-footer__link-geo" title="ул. Фрунзе, 1А, Королёв, Московская обл., 141070">
                    ул. Калинина, 6Б, Королёв, Московская обл., 141070
                </a>
            </li>
            <li class="home-footer__item-geo">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                <a class="home-footer__txt" href="tel:+78005553535" title="Позвонить...">+7 (800) 555-35-35</a>
            </li>
            <li class="home-footer__item-geo">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                <a class="home-footer__txt" href="mailto:info@medmorum.ru">info@medmorum.ru</a>
            </li>
        </ul>
    </div>
</div>
</div> */