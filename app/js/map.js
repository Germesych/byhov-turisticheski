// Яндекс карта
// 53.51259931405131
// 30.223673999999974
const addressMap = document.querySelector(".address-map");
const coordinatesN1 = document.querySelector(".coordinates-n");
const coordinatesE1 = document.querySelector(".coordinates-e");const yandexMapInit = document.querySelector(".object-page__map-block");
if (addressMap) {
  const coordinatesN = +coordinatesN1.innerText;
  const coordinatesE = +coordinatesE1.innerText;
}

if (yandexMapInit) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map(
        "map",
        {
          center: [coordinatesN, coordinatesE],
          zoom: 9,
        },
        {
          searchControlProvider: "yandex#search",
        }
      ),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="map__address">$[properties.iconContent]</div>'
      ),
      myPlacemarkWithContent = new ymaps.Placemark(
        [coordinatesN, coordinatesE],
        {
          hintContent: "Описание при наведении",
          balloonContent: "",
          iconContent: addressMap.innerText,
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#imageWithContent",
          // Своё изображение иконки метки.
          iconImageHref: "map.png",
          // Размеры метки.
          iconImageSize: [20, 20],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [-15, 25],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout,
        }
      );

    myMap.geoObjects.add(myPlacemarkWithContent);
  });
}
