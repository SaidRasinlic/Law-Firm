import React from 'react';
import '../../assets/styles/style-pages/faq_page.scss';
import { Fade } from 'react-awesome-reveal';

const Faq = () => (
  <section id="faq-section">
    <h1 id="faq">Najčešća pitanja</h1>
    <Fade triggerOnce cascade damping={0.1}>
      <ul id="faq-list">
        <li>
          <p>Treba li mi advokat i sudski postupak?</p>
          <p>
            U našem okruženju generalno se propagira nepovjerenje u pravosudni sistem
            i „bespotrebnost“ izlaganju troškovima angažovanja advokata. Takvi stavovi
            i „savjeti“ dolaze od strane nestručnih osoba koji nisu imali nikakva ili
            su imali loša iskustva zbog nesavjesnog i nestručnog zastupanja. Ukoliko
            smatrate da je Vaše pravo na bilo koji način povrijeđeno trebate se prije
            svega konsultovati sa advokatom u kojeg imate povjerenja, a shodno njegovom
            savjetu donijeti odluku o vođenju sudskog postupka. Pravosudne institucije
            rade svoj posao, ukoliko Vi znate na koji način pred istima ostvariti svoje
            pravo. Bez obzira na dužinu trajanja sudskih postupaka, prvenstveno pred
            sudovima u Sarajevu, a zbog njihove preopterećenosti velikim brojem predmeta,
            smatramo da uvijek trebate tražiti  zaštitu svojih prava. Optrećenost sudova
            velikim brojem predmeta karakteristična je za sve pravosudne sisteme,
            a ne samo ovaj u BiH. Vrijeme svakako prolazi, a uspjeh dolazi samo ukoliko
            ste krenuli u zaštitu svojih prava.
          </p>
        </li>

        <li>
          <p>Da li se advokatski savjeti naplaćuju?</p>
          <p>
            Pravni savjeti se uglavnom naplaćuju, a razlikuju se pismeni i usmeni pravni
            savjeti, od čega zavisi i cijena istih. Praksa advokatske kancelarije je da
            klijentu zakaže termin u kancelariji, tokom kojeg termina se pruža usluga
            pravnog savjetovanja. Ako se postigne dogovor oko saradnje, u tom slučaju
            usluga savjeta ulazi u cijenu prve radnje koja se preduzima od strane advokata
            u postupku (npr. sastava tužbe ili podneska).
            Kratke i okvirne informacije koje se mogu dati preko telefona se naravno ne naplaćuju.
          </p>
        </li>

        <li>
          <p>Na koji način se određuje cijena advokatskih usluga?</p>
          <p>
            Cijena advokatskih usluga u FBiH je određena Advokatskom tarifom FBiH,
            prema kojoj tarifi je za svaku pojedinu radnju, u zavisnosti od
            vrijednosti spora, određena i jedinstvena naknada za rad advokata. Također,
            neovisno o odredbama navedene tarife, advokat može sa klijentom ugovoriti
            visinu nagrade za svoj rad.
          </p>
        </li>

        <li>
          <p>Šta znači kada advokat radi na procenat ? </p>
          <p>
            Uglavnom advokat za svaku poduzetu radnju, u ime i za račun klijenta, od istog
            naplaćuje advokatske troškove u skladu sa odredbama advokatske tarife, odnosno
            njihovog ugovora o nagradi za rad advokata. Ukoliko klijent uspije u sporu,
            druga strana koja je izgubila spor, ima obavezu da klijentu nadoknadi sve nastale
            advokatske i sudske troškove.
            U određenim slučajevima kada postoji velika izvjesnost dobitka spora
            sa jedne strane i izuzetno solventan dužnik sa druge strane, postoji
            mogućnost ugovaranja rada na procenat. Ovo znači da advokat svoje usluge
            neće naplatiti od svog klijenta, već će iste naplatiti samo i jedino u
            slučaju uspjeha u sporu od druge strane. Advokat u ovom slučaju ima pravo
            osim na troškove koje mu je sud priznao za sastavljanje podnesaka i zastupanje,
            i na nagradu od klijenta prema procentualnoj vrijednosti predmeta spora. Najčešće
            se ovakav vid zastupanja ugovara kad se kao tuženi pojavljuju  platežno sposobni
            dužnici poput države i njenih organa, banaka ili osiguravajućih društva.
          </p>
        </li>

        <li>
          <p>Besplatna pravna pomoć socijalno ugroženim osobama?</p>
          <p>
            Ako ste osoba koja spada u kategoriju socijalno ugroženih, što će na osnovu Vaše
            prezentacije dokaza, advokat samostalno procijeniti, a od slučaja do slučaja,
            advokat će preuzeti besplatno Vaše zastupanje, ali samo u slučaju njegove procjene
            da to može uraditi sa uspjehom. U svakom slučaju advokat će tražiti onu nagradu koju
            je zastupana stranka ostvarila
            po osnovu njegova zastupanja na teret protivne stranke.
          </p>
        </li>

        <li>
          <p>Šta znači advokatska tajna?</p>
          <p>
            Advokatsku tajnu predstavlja sve ono što je advokat prilikom pružanja pravne pomoći
            saznao kao povjerljivo od svoje stranke ili na drugi način. U naravi ovu tajnu pored
            saznanja advokata predstavljaju svi spisi, tonski, računalni, slikovni i slični zapisi,
            te depoziti stranaka koji se nalaze u advokatskoj kancelariji. Advokat smije saopštiti
            činjenice i okolnosti, koje predstavljaju advokatsku tajnu, samo u određenoj vrsti
            postupka po pristanku osobe od koje je to saznao, datog u pismenoj formi, ili ako je
            otkrivanje tajne nužno u krivičnom postupku ili postupku disciplinske
            odgovornosti advokata za dokazivanje njegove nevinosti.
          </p>
        </li>

        <li>
          <p>U koje vrijeme je advokat dostupan?</p>
          <p>
            Advokat je na raspolaganju strankama najčešće u radno vreme kancelarije radnim danima
            od 09:00 do  17:00. Ukoliko postoji mogućnost advokat će se javiti na telefon u slučaju
            da nije zauzet ili na nekom suđenju. Kada ne postoji mogućnost da se advokat javi na
            poziv, javiće se prvom slobodnom prilikom u okviru radnog vremena kancelarije.
            Dostupnost van okvira radnog vremena je također moguća ali se posebno ugovara
            sa određenim klijentima i uz posebnu cijenu takvih usluga.
          </p>
        </li>

        <li>
          <p>Kakav treba biti odnos između advokata i klijenta?</p>
          <p>
            Vjernost stranci je osnovna dužnost advokata. Ona je važnija od interesa
            advokata i kolegijalnih obzira. Zastupanju stranke advokat je dužan posvetiti svu
            svoju stručnost i savjesnost te joj cjelovito
            i pravovremeno  pružiti očekivanu pravnu pomoć.
            <br />
            <br />
            Klijent, s druge strane, treba biti iskren prema svom advokatu, saopštiti mu sve
            činjenice i okolnosti, uključujući i one koji mu ne idu u korist, te mu u
            konačnici prezentirati sve dokaze kojima raspolaže. Osim navedenog, treba
            se pridržavati i drugih dogovorenih obaveza, uključujući obavezu plaćanja
            advokatskih usluga, dogovorenom dinamikom.
            Samo uz potpunu i iskrenu saradnju advokata i klijenta uspjeh je moguć.
          </p>
        </li>

        <li>
          <p>Da li se klijentu može garantovati uspjeh u postupku?</p>
          <p>
            Ne postoji jedinstven odgovor na navedeno pitanje. Odgovor zavisi od mnogih činjenica
            vezanih za predmet spora. Advokat posjeduje stručno znanje koje mu omogućava da već pri
            proučavanju predmeta, na samom početku, može pretpostaviti mogućnost i vjerovatnoću
            uspjeha. Postoje predmeti koji su „rutinski“, sa velikom šansom za dobitak. Postoje
            i predmeti u određenim pravnim oblastima u kojima ne postoji jedinstvena sudska praksa,
            pa će rezultat spora ovisiti od tumačenja prava ili sudske prakse postupajućeg suda/ije.
            Neki predmeti imaju vrlo malu mogućnost da budu uspješni. Nije toliko značajno da li
            će advokat uzimati  samo sigurne predmete u rad  ali je izuzetno bitno  da advokat
            upozna stranku sa svim mogućim rizicima i da se stranci transparentno i ispravno
            ukaže na sve  rizike. Na kraju, pri upoznavanju sa rizicima, klijentu treba ostaviti
            mogućnost da sam izabere da li će se upustiti u spor kad zna sve mogućnosti.
          </p>
        </li>

        <li>
          <p>Mogu li Vas angažovati kao advokata ako ne živim u Sarajevu?</p>
          <p>
            Svakako da postoji mogućnost da se advokat angažuje iako klijent nije u Sarajevu
            gdje je sjedište njegove advokatske kancelarije. Praksa u ovakvim slučajevima
            je da se stranci na email pošalje punomoć koju ona potom, potpisanu, najčešće
            poštom vrati na adresu kancelarije. Ključna stvar je da postoji sporazum između
            kancelarije i klijenta o angažovanju, dok samo fizičko prisustvo prilikom potpisa
            punomoći nije uvijek neophodno.
            Ovo isto važi i za potpisivanje ugovora o zastupanju između  advokata i klijenta.
          </p>
        </li>

        <li>
          <p>Da li je neophodno da prisustvujem suđenjima ako Vas angažujem?</p>
          <p>
            Onog momenta kada klijent advokatu potpiše predmetnu punomoć za zastupanje,
            klijent nema više obavezu prisustvovanja suđenjima osim u posebnim slučajevima.
            Najčešće klijent mora prisustvovati suđenju u danu kada je zakazano njegovo saslušanje.
            Saslušanjem se, obaveza prisustva  suđenju, završava. Naravno svako ima pravo da prati
            i prisustvuje suđenju na kome ga zastupa advokat.
          </p>
        </li>

        <li>
          <p>Da li je bolje da angažujem mlađeg ili starijeg advokata?</p>
          <p>
            Mladi advokati imaju prednost u tome što imaju više energije i želje za radom kroz koji
            će se afirmisati. Obično imaju više vremena za posvetiti se slučaju, bore se za svakog
            klijenta i preporuku jer je to jedini način za njihovu reklamu.
            Stariji advokati uglavnom
            imaju više iskustva što nekad može biti neprocjenjivo ali s druge strane i manje vremena
            i strpljenja za posvećivanje određenom predmetu. Činjenica je da oni ne mogu zastupati
            svakog klijenta lično, zbog obimnosti predmeta, već će zastupanje u određenim predmetima
            vršiti njihovi uposlenici. Mada i od ovih pravila ima odstupanja. Najbolji odgovor
            na ovo pitanje je slušati preporuku drugih ljudi koji su imali pozitivna iskustva
            sa određenom advokatskom kancelarijom što može biti dovoljno. Najbolje je angažovati
            advokata koji osim stručnosti ima i moralne kvalitete, a jedini
            način za ovu provjeru je preporuka ili Vaš lični utisak nakon
            obavljenog razgovora sa istim.
          </p>
        </li>

        <li>
          <p>Šta znači nadoknada troškova postupka?</p>
          <p>
            Stranka koja u cijelosti izgubi parnicu dužna je protivnoj stranci nadoknaditi
            troškove. Parnične troškove čine izdaci učinjeni u toku ili u povodu postupka.
            Parnični troškovi obuhvaćaju i nagradu za rad advokata i drugih osoba kojima
            zakon priznaje pravo na nagradu.
          </p>
        </li>

        <li>
          <p>Da li advokatska kancelarija zastupa strane državljane?</p>
          <p>
            Advokatska kancelarija zastupa strane državljane također kao i domaće.
            Komunikacija između advokata i stranke se odvija najčešće na engleskom jeziku.
            Za sve dodatne informacije strani državljani nas mogu kontaktirati preko sajta.
          </p>
        </li>

        <li>
          <p>Smiju li se advokati reklamirati?</p>
          <p>
            Advokatima je strogo zabranjeno reklamiranje, te isti moraju poštovati Kodeks
            advokatske etike koji zabranjuje bilo kakvu vrstu reklamiranja. Advokata
            preporučuju stručnost, sposobnost, uspjeh, ugled i povjerenje koje je
            stekao svojim radom i ponašanjem.
          </p>
        </li>

        <li>
          <p>Da li postoje specijalizovani advokati za pojedine oblasti?</p>
          <p>
            Većina advokata se bavi određenim oblastima prava pri čemu rijetko koji
            advokat ima vremena i kapaciteta da se bavi baš svim pravnim oblastima.
            Najčešće se u praksi pravi podjela na advokate koji se bave krivičnim
            pravom i advokate koji se bave građanskim pravom, tzv. krivičari i parničari.
            Velike advokatske kancelarije se najviše bave korporativnim odnosno privrednim pravom.
            Advokati koji se predstavljaju da su specijalizirani za neke još uže oblasti
            (npr. navodno vodeći advokati za naknadu štete, legalizacije i sl.)  uglavnom
            prave sebi reklamu jer većina dobrih  advokata parničara može riješiti većinu
            slučajeva iz oblasti građanskog prava. Reklamiranje advokata je strogo
            zabranjeno te stranke trebaju biti oprezne
            pri isticanju pojedinih advokatskih kancelarija kao vodećih u nekim oblastima.
          </p>
        </li>
      </ul>
    </Fade>
  </section>
);

export default Faq;
