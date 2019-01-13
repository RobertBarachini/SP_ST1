
# Description

This is the main repository for a web development class at FRI.

Heroku link: https://spherokuapp123.herokuapp.com/

# Setup
1. Nov c9 projekt s predlogo Node.js (in že nastavljenim mongodb)
2. npm install
3. Terminali:
	(po ukazih in po tem kaj delajo):
	1. "random ukazi"
	2. nodemon (zagon aplikacije)
	3. mongod (mongodb)(Zagon baze: cd ~/workspace/mongodb in nato ./mongod)
	4. mongo (za gledanje baze)

## Za primer potrebe po namestitvi MongoDB:
Namestitev MongoDB:
* sudo apt-get remove mongodb-org mongodb-org-server
* sudo apt-get autoremove
* sudo rm -rf /usr/bin/mongo*
* sudo rm /etc/apt/sources.list.d/mongodb*.list
* sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
* echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
* sudo apt-get update
* sudo apt-get install mongodb-org mongodb-org-server
* sudo touch /etc/init.d/mongod
* sudo apt-get install mongodb-org-server

# Opis projekta, vizije in delovanja strani

## Vizija
Naša vizija je izdelava sodobnega socialnega omrežja, ki temelji na združevanju informacij tako iz uporabnikove lokalne shrambe kot tudi iz vseh mogočih zunanjih virov.
Poimenovali smo se [Aggregate.io](README.md) zaradi tega, ker na enem mestu zbiramo podatke. 
Osnovna ideja je možnost deljenja:
* zgodb v tekstovni obliki
* slik z diska
* večpredstavnih vsebin iz drugih platform (embed)

Živimo v času hitrih sprememb in rastočih digitalnih trendov in verjamemo, da je čas najpomembnejša dobrina, zato je naš cilj izdelati platformo, ki na enem mestu združuje vse najljubše storitve (ki se jih da deljiti).

## Opis projekta
V prvi fazi smo izdelali samo ogrodje strani in ga oplemenitili s pomočjo Bootstrap frameworka. Cilj prve stopnje razvoja ni delujoča spletna stran, temveč le nekakšen prikaz potenciala. Izgled in funkcionalnosti nista končna.

## Delovanje strani
V splošnem je stran povezana tako, da lahko uporabnik dobi občutek kako bo stran delovala. Na vsaki strani je nekaj tako imenovanih aktivnih elementov, ki so povezani z drugimi deli strani, ostali (pasivni) elementi pa služijo kot dopolnilo in nekako izničijo občutek praznosti. Ker so določeni elementi le estetski, ne služijo praktičnega namena - so le vizualno sidro.

## Vodnik po strani
Nov uporabnik najprej pride na index.html. Tam ima na voljo številne druge povezave. V primeru, da se želi prijaviti ali registrirati klikne gumb desno zgoraj. Ko je uporabnik prijavljen dobi pravico do interakcije z objavami. Prav tako lahko ponovno klikne na sliko desno zgoraj in obišče svojo domačo stran, kjer so zbrane objave uporabnika. Od tam naprej lahko uporabnik ureja, briše, kreira nove objave, ali pa posodobi svoje nastavitve. Na vrhu strani je tudi search bar, ki poišče ključne besede in vrne relevantne objave. Prijavljen uporabnik lahko tudi ureja in briše svoje objave. Na strani objave lahko uporabniki pustijo komentarje. Predvidenih funkcionalnosti je še več, a bodo dodane pri naslednji izdaji. V primeru vprašanj me prosim kontaktirajte.

## Tipi uporabnikov
#### Guest
* lahko gleda objave na glavni strani
* lahko se prijavi ali registrira
* lahko si ogleda profil od drugega uporabnika
#### User
* vse kar lahko počne Guest
* ureja in briše svoje objave
* kreira nove objave
* komentira
* 'lajka'
* ureja svoje nastavitve
#### Admin
* vse kar lahko počne User, a za vse uporabnike (razen spreminjanja uporabnikovih nastavitev)

## Dovoljeni uporabniški vnosi
* Username
je dolg med 4 in 20 znakov, ki so lahko velike in male crke, ter stevilke
* Password 
je lahko karkoli
* Name 
je dolg med 1 in 50 znakov, lahko so male in velike crke ter znak '-'
* Bio 
polje je lahko prazno
* Search 
polje ne sme biti prazno

* Tags 
v polju se mora vsaka beseda zaceti z znakom '#', potem sledijo male in veliko crke, ter stevilke
* Description 
polje vsebuje med 1 in 500 znakov
* Comments 
uporabnik lahko komentira med 1 in 500 znakov

## Naprave na katerih aplikacija deluje
* Računalnik
* Telefon
* Tablica

## Merjenje časa nalaganja strani na dveh brskalnikih
### Route | Load time [s] Chrome | Load time [s] Brave Browser
* / | 4.35 | 2.26
* /posts/{postId} | 2.55 | 0.53
* /users/{userId} | 1.58 | 0.32
* /login | 1.47 |  0.19
* /register | 1.62 | 0.12
* /db | 1.54 | 0.33
* /editPost/{postId} | 1.51 | 0.54
* /editProfile/{profileId} | 1.63 | 0.51
* /users/{userId}/1 | 1.44 | 0.49
* /users/{userId}/2 | 1.52 | 0.55
* /users/{userId}/3 | 1.47 | 0.51

Najpočasneje je naloži glavna stran '/'.
Razlogov je več. Najbolj očiten razlog je, da mora brskalnik naložiti največ komponent, saj je ta stran najbolj masovna. Prav tako na tej strani opravi največ klicev in pridobi največ resourcov. Ker je resourcov veliko se čas poveča. Na čas nalaganja strani vplivajo tudi extensioni.

Test za vsako stran se izvedel 3x na vsakem brskalniku in vzel povprečje. Brave je nekoliko hitrejši, saj je bolj lightweight browser. Na nalaganje vplivajo tudi Chrome extensions, ki upočasnijo nalaganje.

## Apache JMeter
Konfiguracija:
MongoDB in JMeter ter aplikacija sta pognana na istem računalniku.
Specifikacije računalnika:
CPU: Intel core i7 4900MQ
	Osnova frekvenca: 2.80 GHz
	Turbo frekvenca: 3.80 GHz
	Cores: 4, Niti: 8
RAM: 16GB (zaradi konfiguracije le 8GB uporabnega) DDR3
DISK: SSD 480GB 2.5''

1) a) 1000 uporabnikov v 1 sekundi, 1 ponovitev
Error: 0%, Minimalni čas dostopanja: 4ms, Maksimalni čas dostopanja 588ms, Stevilo zahtev na sekundo 669.
b) 2000 uporabnikov v 1 sekundi , 1 ponovitev
Error: 0%, Minimalni čas dostopanja: 23ms, Maksimalni čas dostopanja 2123ms, Stevilo zahtev na sekundo 630.
c) 2100 uporabnikov v 1 sekundi, 1 ponovitev
Error: 3,4%, Minimalni čas dostopanja: 68ms, Maksimalni čas dostopanja 2499ms, Stevilo zahtev na sekundo 606.
d) Nato Error konstantno naraste in do 20000 uporabnikov sprejme v eni sekundi, ampak Error pride na 80%.
Sepravi v enem sunkovitem navalu stran sprejme priblizno 2000 uporabnikov, brez errorjev!.

2) b) 
