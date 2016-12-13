Після того як користувач заповнив і відправив форму, дані можна переглянути в Google Sheets тут:
`https://docs.google.com/spreadsheets/d/1J9taZvzRYuqqm_CpW9GYuzfT69tcuSbK3yLRG9nTyDk/edit#gid=1670949304`

Або ж у вигляді діаграм в Google Forms тут:
`https://docs.google.com/forms/d/13ScCTHSliQ5XDv7KyJkO1IEqbMtDlHuRmbfHQbmD3DU/edit?edit_requested=true#responses`

Щоб замінити гугл-форму

1. Створити нову форму тут docs.google.com/forms з текстовими полями `ім'я`, `емейл` та полем `role` з варіантами відповіді 'teacher' та 'student'
2. У вкладці Відповіді  обрати 'Переглянути відповів в Google Sheets' -> Новий документ.
3. Відкрити попередній перегляд форми і Відкрити Dev Tools.
4.    
  a. Знайти поля вводу з атрибутами `name='entry.xxx'`
  б. Замінити в `index.html` відповідні атрибути `name` для форми.
5.    
  a. Знайти кнопку сабміту форми. Це прихований інпут наступного вигляду `<input type="hidden" name="fbzx" value="7658006794998780417">`
  б. Замінити в `local.js` значенні змінної `submitRef` на атрибут `value` кнопки сабміту гугл форми.

6. Знайти форму і замінии змінну `baseURL` в `local.js` на значення її атрибуту `action`
