# Яндекс Рецепты

Команда разработки:

- [Филипп Романов](https://github.com/fletcherist)
- [Антон Ахатов](https://github.com/gcor)
- [Яна Берникова](https://github.com/Solechko)
- [Артем Лучин](https://github.com/artemluchin)

## Технологии

- [React Native](https://facebook.github.io/react-native/) + [Redux](https://github.com/reactjs/redux)
- [Node.js](https://nodejs.org/en/) + [Express](http://expressjs.com/) + [MongoDB](https://www.mongodb.com/)
- TeamCity CI
- AppMetrica
- ESLint ([config](https://github.com/yandexdataschool/prj-c-kitchen/blob/master/.eslintrc))

## Open Source модули

- [react-native-sensor-manager](https://github.com/kprimice/react-native-sensor-manager)
- [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)
- [react-native-push-notification](https://github.com/zo0r/react-native-push-notification)

## Разработка

Подготовка к разработке:

```
$ git clone https://github.com/yandexdataschool/prj-c-kitchen.git
$ cd prj-c-kitchen
$ npm install
```

Если разработка будет проходить не на реальном девайсе, то необходимо запустить эмулятор устройства на базе Android. Если используется Android Studio, то эмулятор можно запустить следующей командой:

```
$ emulator @<emulator_name>
```

Проверить подключено устройство или нет можно следующей командой:
```
$ adb devices
```

### Debug-версия
Запуск _debug_-версии приложения:

```
$ npm run a
```
Приложение запустится и будет готово для разработки.

Для удобства имеется debugging-меню, которое всплывает при нажитии на кнопку меню устройства. В нем содержатся полезные утилиты для отладки (_Hot reloading_, _Remote console_ и т.д.).

__Внимание!__ Если версия Android > 5.x, то debugging-меню запускается следующей командой из терминала:
```
$ adb shell input keyevent 82
```

Если не используется Hot reloading, то обновить приложение после внесенных правок можно двойным нажатием кнопки `R` в эмуляторе. На девайсе нужно вызвать debugging-меню и нажать на `Reload`.

### Release-версия

Для запуска релизной версии приложения нужно выполнить следующую команду:

```
$ npm run t
```

### Release apk

Для подготовки релизного .apk выполнить следующую команду:

```
$ npm run b
```

Файл .apk будет находиться тут:

`prj-c-kitchen/android/app/build/outputs/apk/release.apk`

## API

Для предоставления данных используется сервер, который работает с базой данных рецептов. Посмотреть реализацию сервера можно [тут](https://github.com/yandexdataschool/prj-c-kitchen-backend).

## Git Flow

Разработка ведется в отдельных ветках, которые потом, посредством pull-request'ов, добавляются в главную ветку - `master`.
