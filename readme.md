To add your form & sheet:
1. Create new form docs.google.com/forms with fields text `name`, `email` and multiple choice `role` with options 'teacher' and 'student'
2. In RESPONSES tab click green button 'View responses in Sheets' and select New Sheet to save responses.
3. Click eye button on top of the page to open Preview Mode
4. Open Dev Tools and find appropriate inputs
5. Copy input `name` attributes values and replace appropriate values in `index.html`

    `<input type="text" name="entry.340286705" value="student" hidden>`

    `<input type="text" required placeholder="Name" value="name" name="entry.90471835" class="reg_log_input">`

    `<input type="email" required placeholder="Email" value="name@mail.co" name="entry.1962057131" class="reg_log_input">`

6. Find in Preview submit button. Its hidden and should look like this `<input type="hidden" name="fbzx" value="7658006794998780417">`.
Copy `value` attribute and replace submitRef in `local.js`

    `submitRef = '&submit=7658006794998780417'`

7. Find in Preview form action and replace `baseURL` variable in `local.js`
