---
sidebar_position: 9
---

# Android ≈ iOS

Обе мобильные операционные системы - Android и iOS во многом работают одинаково. Есть разница в UI, есть разница в UX, но очень многое совпадает, помимо простейших вещей типа "запросы в сеть" и "сохранение в базу данных".

Например на обеих платформах есть runtime permissions - механизм запроса разрешений у пользователя, без которого приложение не может получить персональную информацию, такую как геолокация, доступ к файлам, контактам. Принципиально данная функция в обеих платформах одинаковая, но технически реализована разумеется по разному. 

Но для нас важно что со стороны логики приложения принцип один - в какой-то момент, когда например мы хотим получить местоположение пользователя для показа на карте, надо запросить разрешение и как только оно будет получено - получить местоположение. Этот порядок действий не зависит от платформы, он одинаковый. Было бы круто делать это в общем коде, а не отдельно на платформах, не так ли?

Другой пример - получение фотографии с камеры или с галереи. Для логики приложения также на обеих платформах суть будет одинаковая - в какой-то момент мы хотим получить фото, для этого откроется выбор из галереи (или интерфейс приложения камеры) и после выбора фото - оно будет передано приложению и может быть обработано им. Тоже было бы круто управлять этим в общем коде.

Занимаясь разработкой под обе операционные системы, мы увидели множество схожих логических моментов для реализации в приложениях. И определили для себя подход: 

:::tip

Если нам нужно выполнить действие, которое логически на платформах одинаковое, то мы должны делать его напрямую из общего кода

:::

Следуя этому подходу мы реализовали набор дополнительных библиотек:
- [moko-permissions](https://github.com/icerockdev/moko-permissions) - позволяет нам запрашивать разрешения из общего кода;
- [moko-media](https://github.com/icerockdev/moko-media) - позволяет получать изображения и видео с камеры или галереи устройства;
- [moko-geo](https://github.com/icerockdev/moko-geo) - позволяет получить или отслеживать текущее местоположение устройства;
- [moko-biometry](https://github.com/icerockdev/moko-biometry) - позволяет запросить подтверждение биометрических данных (FaceID, TouchID);
- [moko-maps](https://github.com/icerockdev/moko-maps) - позволяет управлять содержимым карты из общего кода, например рисовать маркеры и отображать пути.

Дальше в курсе вы попробуете часть этих библиотек на практике.

:::info

Разрабатывая проект всегда рассматривайте вариант обобщения какой либо функциональности используемой на платформах. Например, вместо независимой реализации воспроизведения аудио, можно используя expect/actual предоставить себе возможность управлять данным функционалом напрямую из общего кода. А в дальнейшем и выделить это в MOKO библиотеку :)

:::
