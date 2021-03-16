// Плагин для слабовидящих
window.addEventListener("DOMContentLoaded", () => {
  const $visually = document.querySelector(".visually-impaired");
  if ($visually) {
    /**
     * Это основной блок выполенения плагина
     * Если класс присудствует, значит плагин запускаеися
     */

    document.body.insertAdjacentHTML('afterbegin', `
    <div class="nav-visually" id="visually-block">
      <div class="nav-visually__setings">
        <h4>Размер шрифта PX</h4>
        <button class="nav-visually__btn" name="text--up">А+</button>
        <button class="nav-visually__btn" name="text--reduce">А-</button>
      </div>
      <!-- /.nav-visually__setings -->
      <div class="nav-visually__setings">
        <h4>Цвет сайта</h4>
        <!-- Черным по белому -->
        <button class="nav-visually__btn color--bw" name="visually__on-wb">Ц</button>
        <!-- Белым по черному -->
        <button class="nav-visually__btn color--wb" name="visually__on-bw">Ц</button>
        <!-- темно синий по голбому -->
        <button class="nav-visually__btn color--bb" name="visually__on-bb">Ц</button>
        <!-- коричневый по бежевому -->
        <button class="nav-visually__btn color--brown" name="visually__on-brown">Ц</button>
        <!-- зеленый по темнокоричневому -->
        <button class="nav-visually__btn color--bgreen" name="visually__on-bgreen">Ц</button>
      </div>
      <!-- /.nav-visually__setings -->
      <div class="nav-visually__setings">
        <h4>Выключить изображения</h4>
        <button class="nav-visually__btn" name="nav-visually__img-on">включены</button>
        <button class="nav-visually__btn" name="nav-visually__img-off">Выключены</button>
        <button class="nav-visually__btn" name="nav-visually__img-bw">черно-белые</button>
      </div>
      <!-- /.nav-visually__setings -->
      <div class="nav-visually__setings">
        <h4>Закрыть блок навигации</h4>
        <button class="nav-visually__btn nav-visually__close" name="close">Закрыть</button>
        <button class="nav-visually__btn" name="reset">Сбросить все настройки</button>
      </div>
      <!-- /.nav-visually__setings -->
    </div>
    `);




    const $visuallyBlock = document.querySelector("#visually-block");
    //Обрабатываем клик по кнопки для отображения панели правления
    $visually.addEventListener("click", () => {
      $visuallyBlock.style.display = "flex";
    });

    // Все кнопки
    const $allButtons = $visuallyBlock.querySelectorAll("button");

    //
    $allButtons.forEach(function (item) {
      item.addEventListener("click", (event) => {
        changeOfStyle(event.target.name);
      });
    });

    // Закрытие блока
    $visuallyBlock
      .querySelector(".nav-visually__close")
      .addEventListener("click", () => {
        $visuallyBlock.style.display = "none";
      });

    // Добавляем словия для стиля
    function changeOfStyle(btnName) {
      let inBtnName = btnName;
      if (
        inBtnName === "nav-visually__img-on" ||
        inBtnName === "nav-visually__img-off" ||
        inBtnName === "nav-visually__img-bw"
      ) {
        // Работаем с картинками
        visuallyImage(inBtnName);
      } //Работа с текстом
      else if (
        inBtnName === "visually__on-wb" ||
        inBtnName === "visually__on-bw" ||
        inBtnName === "visually__on-bb" ||
        inBtnName === "visually__on-brown" ||
        inBtnName === "visually__on-bgreen"
      ) {
        bgTextColor(inBtnName);
      } // Сброс настроек
      else if (inBtnName === "reset") {
        console.log("Сбросить настроки");
        delCssClassName();
      } //Работаем с текстом
      else if (inBtnName === "text--up" || inBtnName === "text--reduce") {
        console.log("Работаем с текстом - ", inBtnName);
        textConfig(inBtnName);
      }
    }

    // Функции обработки событий плагина

    // Работа с фоном и цветом текста
    function bgTextColor(name){
      let className = document.body.className;
      document.body.classList.remove('visually__on-wb');
      document.body.classList.remove('visually__on-bw');
      document.body.classList.remove('visually__on-bb');
      document.body.classList.remove('visually__on-brown');
      document.body.classList.remove('visually__on-bgreen');
      if (
        className === "visually__on-wb" ||
        className === "visually__on-bw" ||
        className === "visually__on-bb" ||
        className === "visually__on-brown" ||
        className === "visually__on-bgreen"
      ){
        document.body.classList.add(`${name}`);
      } else{
        document.body.classList.add(`${name}`);
      }
    }
    // Работа с фоном и цветом текста


    // Работа с изображениями
    function visuallyImage(name) {
      if(name === 'nav-visually__img-on'){
        console.log('Сратал сброс картинок',name);
        let className = document.body.className;
        document.body.classList.remove('nav-visually__img-off');
        document.body.classList.remove('nav-visually__img-bw');
      } else if(name === 'nav-visually__img-off' || name === 'nav-visually__img-bw'){
        addClassCssImg(name)
      }
      let bodyArre = [document.body.classList]
      // console.dir(bodyArre);
    }
    function addClassCssImg(name){
      document.body.classList.remove('nav-visually__img-bw');
      document.body.classList.remove('nav-visually__img-off');
      document.body.classList.add(`${name}`);
      console.log(name)
      // прогонять все через цикл а потом уже вешать или удалять класс 
    }
    // END Работа с изображениями

    //Текст
    function textConfig(name){
      // document.body.classList.remove('text--up');
      if(name === 'text--up'){
        document.body.classList.add(`${name}`);
      } else if(name = 'text--reduce'){
        document.body.classList.remove('text--up');
      }
      
      // console.log('Text UP ', name)
    }
    // END Текст
    // Удаление коласса, возврат к настройкам по умолчанию
    function delCssClassName() {
      let classRemove = document.body.className;
      if (classRemove) {
        document.querySelector("body").className = "";
      }
    }
  }
});
