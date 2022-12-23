Uruchamianie aplikacji:
 1. Otworz wiersz polecen i przejdz do katalogu z projektem (nodelogin-master)
 2. Zeby zainstalowac zaleznosci, wpisz polecenie (wystarczy tylko raz): npm install
 3. Zeby uruchomic aplikacje, wpisz polecenie: nodemon index.js
 4. Otworz przegladarke i wpisz w pasku adresu: http://localhost:3000
 5. Zeby zamknac aplikacje, wcisnij Ctrl+C w wierszu polecen.

Linki(dokumentacja po angielsku):
 - Wprowadzenie do node.js i MVC https://blog.logrocket.com/building-structuring-node-js-mvc-application/
 - Wprowadzenie do ejs i szablonow https://www.topcoder.com/thrive/articles/using-ejs-template-engine-with-express-js
 - Wiecej o ejs i dynamicznych stronach https://levelup.gitconnected.com/render-dynamic-content-in-nodejs-using-templates-a58cae681148
 - Mongoose quickstart https://mongoosejs.com/docs/

MongoDB
 1. pobierz i zainstaluj mongodb compass https://www.mongodb.com/products/compass
 2. do polaczenia z baza uzyj nastepujacy URI/connection string: mongodb+srv://dbadmin:pX8MoJtuUZYq0zIA@cluster0.1u9piui.mongodb.net/?authMechanism=DEFAULT

Co dalej?
 1. Mozliwosc zmiany hasla ze stronki z profilem.
 2. Szyfrowanie hasel i automatyczne resetowanie.
 3. Walidacja wprowadzonych danych na stronie rejestracji. Np. 
  - username: minimalnie 6 znakow; tylko litery i cyfry
  - email: minimalnie 6 znakow; musi zawierac @ i .
  - haslo: minimalnie 8 znakow
  - haslo1 i haslo2 musza byc takie same
 4. Wlaczenie https z wlasnym certyfikatem.
 5. Duzo bardziej skomplikowane: stworzyc forum albo czat dostepny po zalogowaniu.
  - przyklad tutaj https://betterprogramming.pub/socket-io-and-nextjs-build-real-time-chat-application-part-1-976555ecba
