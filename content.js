// Contenuti dell'app Danimarchizziamoci — struttura dati
// Gli step 1-2 sono gratuiti (testo completo). Gli step 3-50 sono a pagamento
// (qui solo titolo + breve anteprima, come teaser prima dello sblocco).

const FREE_INTRO = {
  title: "Benvenuto in Danimarchizziamoci",
  html: `
    <p><strong>Perché scegliere la Danimarca?</strong></p>
    <p>La Danimarca offre un'elevata qualità della vita, un sistema educativo innovativo,
    buone opportunità lavorative e stipendi competitivi. La gerarchia lavorativa è
    "orizzontale": ci si dà del tu e i rapporti sono diretti e informali.</p>
    <p>Lo stile di vita danese è spesso associato al concetto di <em>Hygge</em>, un senso
    di comfort e accoglienza che permea molte abitudini quotidiane: candele, momenti di
    relax in compagnia, attenzione al benessere, forte equilibrio tra vita lavorativa e
    personale.</p>
    <p><strong>Quanto ti senti pronto per la tua nuova vita in Danimarca?</strong></p>
    <ol>
      <li>Per niente pronto — mi affascina l'idea, ma non ho ancora un piano concreto</li>
      <li>Un po' pronto — sto raccogliendo informazioni, ma ho ancora molti dubbi</li>
      <li>Abbastanza pronto — ho iniziato a organizzarmi, ma non tutto è chiaro</li>
      <li>Quasi pronto — ho già preso decisioni importanti e sto cercando casa/lavoro</li>
      <li>Completamente pronto — ho un piano chiaro e sono determinato a partire</li>
    </ol>
    <p><em>"Trasferirsi in Danimarca non è una fuga, ma una scelta consapevole. Prima di
    fare le valigie, chiediti se sei pronto ad abbracciare un nuovo modo di vivere, più
    silenzioso ma anche più autentico."</em></p>
  `
};

// Checklist rapida gratuita — sintesi unificata dei due mini-PDF
// ("5 step fondamentali" + "10 passi per la Danimarca"), con punti
// interattivi spuntabili (lo stato si salva sul telefono dell'utente).
const QUICKSTART_CHECKLIST = [
  {
    group: "Prima di partire",
    items: [
      "Decidi città/area: cambia disponibilità di case, lavoro e tempi burocratici",
      "Documento d'identità valido per l'espatrio (non serve il passaporto, basta la carta d'identità)",
      "Contratto di affitto o prova di domicilio, se già lo hai",
      "Documenti di lavoro o studio, se già li hai",
      "Tessera sanitaria italiana (solo per urgenze)",
    ]
  },
  {
    group: "Cercare casa",
    items: [
      "Usa portali affidabili: BoligPortal, Lejebolig.dk (attenzione: molti sono a pagamento)",
      "Diffida di chi chiede soldi prima di far vedere casa, foto \"troppo perfette\", prezzi troppo bassi",
      "Verifica che l'alloggio sia registrabile (bopælsregistrering) — senza non ti registri al comune",
    ]
  },
  {
    group: "Cercare lavoro",
    items: [
      "Jobnet.dk, Jobindex.dk, Ofir.dk, Jobsearch.dk, LinkedIn",
      "Settori più accessibili per iniziare: ristorazione, pulizie, magazzino/logistica, produzione, customer service (se parli inglese)",
      "Avere già un contratto (anche part-time) aiuta ad ottenere prima la tessera sanitaria",
    ]
  },
  {
    group: "Appena arrivi",
    items: [
      "Compila il Modulo OD1 su nyidanmark.dk (varia se hai già lavoro o \"fondi a sufficienza\")",
      "Prenota appuntamento SIRI per il certificato di residenza",
      "Vai in Comune per il CPR — porta un testimone (di solito il locatore)",
      "Richiedi la tessera sanitaria gialla e scegli il medico di base (Lægevalg)",
      "Attiva il MitID — serve per comune, SKAT, banca, busta paga, tutto",
    ]
  },
  {
    group: "Primi 30 giorni",
    items: [
      "Apri un conto in banca (serve il MitID, armati di pazienza)",
      "Controlla la tua situazione fiscale su skat.dk",
      "Registrati per eventuali sussidi/benefici se ti spettano",
      "Impara qualche parola base di danese (Hej, Tak) — si nota e si apprezza",
    ]
  },
];

const STEPS = [
  {
    n: 1, free: true, title: "Trovare un alloggio",
    html: `
      <p>Il primo passo è cercare un appartamento e potresti iniziare già dall'Italia.
      Molti portali praticano una strategia promozionale in cui gli utenti devono
      annullare l'iscrizione attivamente dopo un periodo introduttivo a pagamento — attenzione.</p>
      <h4>Portali per cercare casa</h4>
      <ul>
        <li><strong>Bolius.dk</strong> — centro di competenza gratuito su casa, muffa, isolamento, riscaldamento</li>
        <li><strong>Findbolig.nu</strong> — gratuito, lista d'attesa, di proprietà DEAS</li>
        <li><strong>Lejebolig.dk</strong> — ricerca gratuita, contattare proprietari a pagamento</li>
        <li><strong>Heimstaden</strong> — gratuito, ~161.000 immobili in 9 paesi</li>
        <li><strong>Boligportal.dk</strong> — 339 DKK per 4 settimane di contatto proprietari</li>
        <li><strong>DBA.dk</strong> — gratuito, profilo di ricerca con notifiche email</li>
        <li><strong>Findroommate.dk</strong>, <strong>Findboliger.dk</strong>, <strong>Propstep.com</strong> e altri</li>
      </ul>
      <h4>Attenzione alle truffe!</h4>
      <p>Se vieni truffato (es. acconto per un appartamento inesistente), denuncia online
      su <strong>politi.dk</strong> usando il MitID. Tieni pronti: comunicazioni col locatore,
      contratto firmato, prova del pagamento, indirizzo dell'immobile.</p>
    `
  },
  {
    n: 2, free: true, title: "Cercare un lavoro",
    html: `
      <p>Dopo l'alloggio, il passo successivo è cercare lavoro. LinkedIn, gruppi Facebook e
      siti dedicati sono i tuoi migliori alleati. Serve un buon CV in inglese e una lettera
      di presentazione personalizzata.</p>
      <h4>Siti utili</h4>
      <ul>
        <li>workindenmark.dk, jobnet.dk, jobindex.dk, eures.dk</li>
        <li>jobsincopenhagen.com, it-jobbank.dk, jobted.dk, jobfisk.dk</li>
        <li>jobsearch.dk, careerjet.dk, findjobhub.com (studenti)</li>
        <li>ufaglærtejobs.dk (non qualificati), sydjob.dk (sud Danimarca)</li>
        <li>jobstafet.dk (agricolo), gastrojob.dk (ristorazione), aupairdanmark.dk</li>
      </ul>
      <h4>Cercare lavoro su Facebook</h4>
      <p>Scrivi post mirati: chi sei, cosa cerchi, età, esperienza, livello di inglese.
      Sii breve e conciso. Parole chiave utili: "Job søges i Danmark", "Job in Denmark",
      oppure il gruppo italiano "Cerco/offro lavoro in Danimarca".</p>
      <p class="locked-teaser">🔒 Dallo Step 3 in poi: le aziende che accettano candidature
      spontanee, il CV in stile danese (template pronto), i contratti di lavoro, le agenzie
      interinali, e altri 46 step su tasse, sanità, scuola, trasporti e molto altro.</p>
    `
  },
  { n: 3, free: false, title: 'Aziende per candidature spontanee', teaser: 'Elenco di aziende danesi che accettano candidature spontanee, settore per settore, con link diretti.',
    html: `
      <p>DSV – Di cosa si occupa e opportunità di lavoro</p>
      <p>DSV è una delle più grandi aziende danesi nel settore trasporti e logistica.</p>
      <p>Gestisce trasporti su strada, aria e mare, oltre a servizi corriere e logistica di magazzino per migliaia di aziende in tutto il mondo.</p>
      <p>Di cosa si occupa concretamente</p>
      <p>Trasporto merci via strada (camion, distribuzione, spedizioni)</p>
      <p>Trasporto aereo e marittimo</p>
      <p>Servizi corriere/express</p>
      <p>Logistica di magazzino e gestione depositi</p>
      <p>Soluzioni di supply chain per aziende internazionali</p>
      <p>È una multinazionale enorme: opera in più di 80 paesi e ha oltre</p>
      <ul><li>000 dipendenti.</li></ul>
      <p>Opportunità lavorative</p>
      <p>Sì, offre molte opportunità di lavoro, soprattutto nei settori:</p>
      <ul><li>magazzini e logistica (warehouse, picking/packing)</li><li>autisti / trasporti</li><li>customer service</li><li>amministrazione e back office</li><li>IT e supply chain</li><li>ruoli operativi nei centri logistici</li></ul>
      <p>Accetta candidature spontanee?</p>
      <p>Sì, DSV accetta candidature spontanee.</p>
      <p>Sul loro sito (DSV.com → Careers) c’è una sezione dedicata dove si possono:</p>
      <p>inviare candidature aperte (“unsolicited applications”), caricare il CV nel loro database, candidarsi per posizioni specifiche nei vari dipartimenti.</p>
      <p>Altre aziende che accettano candidature spontanee 👇🏻</p>
      <ul><li>Everllence Denmark</li></ul>
      <p>Attività: azienda danese del settore ingegneria, tecnologie marine e energia, con sedi a Copenaghen, Holeby, Brøndby e Frederikshavn.</p>
      <p>Offerta candidati spontanei: Sì — la pagina “Jobs at Everllence</p>
      <p>Denmark” afferma che “If no suitable role is listed, we encourage you to send a speculative application.”</p>
      <p>(Per ruoli tecnici, ingegneria, produzione, manutenzione o supporto tecnico).</p>
      <ul><li>NIRAS A/S</li></ul>
      <p>Attività: multinazionale danese che opera in consulenza e ingegneria in settori come infrastrutture, ambiente, energia e digitale.</p>
      <p>Offerta candidati spontanei: Sì — sul sito “Sign up for our job agent or submit an unsolicited application.”</p>
      <ul><li>Bosch Rexroth Denmark (Gruppo Bosch)</li></ul>
      <p>Settore: industria, automazione, produzione</p>
      <p>Dove: Ballerup, Randers</p>
      <p>Ruoli comuni:</p>
      <p>tecnici, assemblaggio, magazzino, ingegneri, amministrativi</p>
      <ul><li>Capgemini Denmark</li></ul>
      <p>Settore: IT, digitale, consulenza, project management</p>
      <p>Dove: Vallensbæk, Viby</p>
      <p>Ruoli comuni: IT support, consulenti, digital specialists, analyst</p>
      <ul><li>TrackMan</li></ul>
      <p>Settore: tecnologia sportiva, software e hardware</p>
      <p>Dove: HQ in Danimarca (area di Copenaghen, ma lavoro anche internazionale)</p>
      <p>Ruoli comuni: magazzino, produzione, customer service, IT, supporto tecnico</p>
      <ul><li>Shaping New Tomorrow</li></ul>
      <p>Settore: retail, abbigliamento, fashion</p>
      <p>Dove: Aalborg, Odense, Aarhus, vari store in DK</p>
      <p>Ruoli comuni: negozio, magazzino, logistica, customer service</p>
      <ul><li>Novicell</li></ul>
      <p>Settore: digital marketing, sviluppo software, e-commerce</p>
      <p>Dove: Aarhus, Copenaghen, altre sedi</p>
      <p>Ruoli comuni: marketing, contenuti, sviluppo web, supporto clienti B2B</p>
      <ul><li>Innovative A/S</li></ul>
      <p>Settore: tecnologia, produzione, componentistica</p>
      <p>Dove: varie sedi in Danimarca</p>
      <p>Ruoli comuni: assemblaggio, magazzino, controllo qualità, supporto tecnico</p>
      <ul><li>Compass Group Denmark</li></ul>
      <p>Settore: ristorazione, mensa, cleaning, facility</p>
      <p>Dove: tutta la Danimarca (scuole, aziende, ospedali)</p>
      <p>Ruoli comuni: cucina, pulizie, servizio mensa, housekeeping, catering</p>
      <ul><li>Copenhagen Merchants Group</li></ul>
      <p>Settore: logistica, spedizioni, commodities, trading</p>
      <p>Dove: varie sedi in Danimarca</p>
      <p>Ruoli comuni: logistica, supply chain, back office, ruoli amministrativi</p>
      <p>Panorama attuale in Danimarca</p>
      <ul><li>Tagli in casa Novo Nordisk, ma investimento produttivo in arrivo</li></ul>
      <p>Novo Nordisk ha annunciato la riduzione di 9.000 posti di lavoro, di cui circa 5.000 in Danimarca, come parte di una riorganizzazione per snellire operazioni e focalizzarsi su aree strategiche come diabete e obesità.</p>
      <p>Allo stesso tempo, è in corso un investimento in infrastrutture: una nuova fabbrica a Odense per farmaci per malattie rare che genererà</p>
      <p>400 posti di lavoro entro il 2027.</p>
      <ul><li>Offerte attive nel settore biotech/farmaceutico</li></ul>
      <p>Glassdoor segnala a settembre 2025 circa 118 annunci nel campo biotech e 194 posizioni in ambito farmaceutico in Danimarca.</p>
      <p>Le posizioni coprono una vasta gamma:</p>
      <p>Ruoli tecnici come operatori di laboratorio, specialisti GMP, tecnici QC, validazione processi.</p>
      <p>Profili più avanzati come Pharmaceutical Scientist, Regulatory Affairs</p>
      <p>(CMC), Project Manager, Process Engineer, Medical Writer, e Therapy</p>
      <p>Area Manager in oncologia.</p>
      <ul><li>Domanda in crescita anche nel reclutamento tramite agenzie</li></ul>
      <p>Agenzie come Hays (Life Science &amp; Pharma Denmark) offrono ruoli in</p>
      <p>R&amp;D, sviluppo clinico/commerciale, laboratorio, arte ingegneristiche, QA/RA e vendite.</p>
      <p>Sempre più richieste per ruoli come Clinical Data Scientist, Head of</p>
      <p>Lab Operations e Technician in ambito Life Sciences.</p>
      <ul><li>Atypical Careers</li><li>Cluster biotech attivi e dinamici</li></ul>
      <p>La Danimarca ospita aziende biotech emergenti e innovative come</p>
      <p>Adcendo, IO Biotech, Muna Therapeutics e Zealand Pharma, che partecipano a studi clinici avanzati, vaccini oncologici, terapie spaziali e collaborazioni internazionali.</p>
      <p>Ad esempio, Adcendo ha recentemente dosato il primo paziente nel suo trial fase 1/2, mentre IO Biotech è stata riconosciuta come una delle aziende biotech più innovative a livello mondiale.</p>
      <p>Zealand Pharma, con sede a Søborg, si concentra su molecole peptidiche per il diabete e l’obesità, con circa 200 dipendenti e parte del cluster Medicon Valley.</p>
      <ul><li>Voices from the field – cosa dicono gli addetti ai lavori In forum</li></ul>
      <p>come Reddit, gli utenti segnalano:</p>
      <p>“Novo has been hiring a lot for expansion projects in the last 2 years.</p>
      <p>If you're a mechanical engineer or process engineer or have QA experience, the chances are good still for now. I haven't seen many positions for R&amp;D or clinical trials though.”</p>
      <p>Insomma: buona domanda per ruoli tecnici, ma meno opportunità per</p>
      <p>R&amp;D o trial.</p>
      <ul><li>Impatto economico del Pharma sulla Danimarca</li></ul>
      <p>Il settore farmaceutico, soprattutto grazie a Novo Nordisk, ha contribuito significativamente alla crescita economica del Paese: la crescita del PIL è stata rivista al rialzo per il 2025 (ora stimata a 2,9</p>
      <p>%), e il Pharma rappresenta circa un quinto dei nuovi posti di lavoro generati.</p>
      <p>Consigli pratici per chi cerca (o consiglia) ruoli in Pharma/Biotech in</p>
      <p>Danimarca:</p>
      <p>Specializzarsi in ruoli tecnici: GMP, QC, process engineering, laboratori.</p>
      <p>Tenere d’occhio job board e agenzie: Glassdoor, portali biotech, Temp- Team, Hays, e siti aziendali (es. Lundbeck, Zealand).</p>
      <ul><li>temp-team.dk      🔗  lundbeck.com</li></ul>
      <p>Attivare il network nel cluster biotech: partecipare a eventi, contattare realtà come Adcendo, IO Biotech, Zealand.</p>
      <p>Considerare programmi come il Manufacturing Talent Programme di</p>
      <p>Novo: pensato per neolaureati, offre formazione, rotazioni, mentoring, e supporto alla relocation.</p>
      <p>Aziende con posizioni aperte</p>
      <p>Novo Nordisk Operatori GMP, Process Engineer, QA Specialist</p>
      <p>Nuova fabbrica a Odense (400 posti entro il 2027)</p>
      <p>Lundbeck QC Analyst, Regulatory Affairs, Lab Technicians</p>
      <p>Specializzata in neuroscienze, sede a Copenaghen</p>
      <p>Zealand Pharma Research Scientist, Clinical Trial Manager</p>
      <p>Focus su diabete e obesità, sede a Søborg</p>
      <p>Adcendo Clinical Project Manager, Lab Specialist</p>
      <p>Biotech innovativa in oncologia</p>
      <p>IO Biotech Medical Writer, Clinical Research Associate Riconosciuta per i vaccini oncologici</p>
      <p>Muna Therapeutics Researcher, Drug Discovery Scientist Startup in crescita, focus neurodegenerativo</p>
      <p>Imprese di costruzioni</p>
      <p>NCC.dk – Una delle imprese di costruzioni più grandi della</p>
      <p>Danimarca</p>
      <p>NCC è una delle aziende di costruzioni più importanti del Nord</p>
      <p>Europa e in Danimarca si occupa di progetti enormi: scuole, ospedali, ponti, strade, abitazioni, uffici e anche grandi impianti tecnici come acquedotti e depuratori.</p>
      <p>Se ti interessa lavorare nell’edilizia, nelle infrastrutture o nei cantieri, NCC è una delle aziende più serie e strutturate presenti in</p>
      <p>Danimarca.</p>
      <p>Che cosa fa NCC in Danimarca</p>
      <p>Costruisce e ristruttura edifici pubblici (scuole, ospedali, centri sportivi).</p>
      <p>Realizza infrastrutture come strade, ponti e tunnel.</p>
      <p>Costruisce case, appartamenti e uffici moderni.</p>
      <p>Si occupa di impianti tecnici grandi e complessi (acqua, depurazione, energia).</p>
      <p>L’azienda è parte del gruppo svedese NCC AB, molto conosciuto in tutto il Nord Europa.</p>
      <p>Perché può interessarti</p>
      <p>È una realtà stabile e con tantissimi dipendenti.</p>
      <p>Offre posti di lavoro a vari livelli: operai, tecnici, ingegneri, project manager, amministrativi.</p>
      <p>Pubblica spesso nuove opportunità lavorative e accetta anche candidature spontanee.</p>
      <p>Nota importante</p>
      <p>Non va confuso con NCC-DK (ncc-dk.dk), che invece è il Nationalt</p>
      <p>Cybersikkerhedscenter, il centro nazionale danese per la cybersicurezza. Sono due realtà completamente diverse.</p>
      <p>Lavori più richiesti in Danimarca (2025)</p>
      <p>La Danimarca pubblica periodicamente la cosiddetta 'Positive List', un elenco di professioni per le quali vi è forte richiesta di lavoratori. Nel</p>
      <p>2025 i settori principali includono:</p>
      <ul><li>Settore sanitario: medici, infermieri, farmacisti, psicologi.</li><li>Settore tecnologico: sviluppatori software, ingegneri informatici,</li></ul>
      <p>data scientist, specialisti cloud.</p>
      <ul><li>Ingegneria: meccanica, civile, ambientale, chimica.</li><li>Settore educativo: insegnanti qualificati.</li><li>Professioni artigiane e tecniche: elettricisti, idraulici, saldatori,</li></ul>
      <p>carpentieri.</p>
      <ul><li>Finanza e contabilità: revisori contabili, analisti finanziari.</li><li>Architetti e figure del design tecnico.</li></ul>
      <p>Questo è il modello che abbiamo usato finora, ma</p>
      <p>con l’avvento dell’AI, le aziende e i recruiter preferiscono quello a una colonna. Forse sarebbe il caso di informarsi, qualora fosse possibile, in modo da andare sul sicuro.</p>
    ` },
  { n: 4, free: false, title: 'CV e Lettera di presentazione', teaser: 'Come deve essere un CV ATS-friendly in Danimarca + template pronto da compilare, in inglese e italiano.',
    html: `
      <p>Come deve essere un CV per lavorare in Danimarca</p>
      <p>Cercare lavoro in Danimarca significa capire che cosa si aspettano davvero le aziende, soprattutto quelle internazionali che usano spesso software ATS o sistemi con intelligenza artificiale per leggere i CV.</p>
      <p>Questo significa una cosa semplice: il CV deve essere facile da capire sia per un HR danese che per una macchina.</p>
      <p>Cosa piace agli HR in Danimarca</p>
      <p>Gli HR danesi preferiscono CV:</p>
      <p>semplici, puliti e lineari senza grafica e senza troppi colori con informazioni chiare e concrete con ruoli e date ben visibili con competenze scritte in modo diretto (niente giri di parole)</p>
      <p>Qui va dritto al sodo chi scrive cosa fa e cosa sa fare, non chi racconta troppo.</p>
      <p>Cosa NON piace agli HR danesi</p>
      <p>CV troppo grafici o “creativi”</p>
      <p>colonne complicate, icone, loghi, tabelle decorative frasi lunghe e vaghe informazioni inutili (stato civile, figli, hobby strani)</p>
      <p>foto poco professionali</p>
      <p>CV senza parole chiave legate al ruolo</p>
      <p>ATS e intelligenza artificiale: cosa significa?</p>
      <p>Molte aziende, prima dell’HR, usano software che “scansionano” il CV.</p>
      <p>Questi sistemi cercano parole chiave, formattazione semplice e testi leggibili.</p>
      <p>👉 Un CV troppo elaborato può essere scartato automaticamente anche se sei perfetto per quel lavoro.</p>
      <p>Per questo è importante avere un CV ATS-friendly, cioè:</p>
      <p>una colonna unica zero grafica testo pulito parole chiave del settore formato PDF esportato da Word/Docs (non scansioni)</p>
      <p>Perché i CV fatti con Canva possono creare problemi</p>
      <p>Quando si esporta un CV da Canva, alcuni elementi possono diventare immagini, oppure possono spostarsi.</p>
      <p>Gli errori più comuni sono:</p>
      <p>testo che diventa immagine → l’ATS non lo legge colonne che si disallineano icone che confondono il sistema tabelle grafiche che non vengono interpretate caratteri convertiti in formati “strani”</p>
      <p>Per questo Canva è perfetto per un CV estetico, ma non per un CV da inviare alle grandi aziende.</p>
      <p>Consiglio pratico:</p>
      <p>Se vuoi usare Canva, prepara sempre:</p>
      <p>una versione grafica (per inviarla all’HR dopo il primo contatto)</p>
      <p>una versione ATS-friendly fatta in Word o Google Docs per la candidatura iniziale.</p>
      <p>Come deve essere un CV perfetto in Danimarca in PDF (esportato da Word/Docs)</p>
      <p>una colonna unica massimo 1–2 pagine descrizioni brevi e pratiche parole chiave prese dalla job description sezioni chiare: Profilo – Esperienze – Istruzione – Competenze –</p>
      <p>Lingue – Certificazioni</p>
      <p>Ecco qui una versione in inglese, che puoi utilizzare per il tuo Cv 👇🏻</p>
      <p>FACSIMILE (modello pronto da compilare – English)</p>
      <p>FIRST NAME LAST NAME</p>
      <p>Address (optional) – City, Denmark</p>
      <p>📞 +45 XXXXXXXX</p>
      <p>📧 name@email.com</p>
      <ul><li>LinkedIn (optional)</li></ul>
      <p>PROFESSIONAL SUMMARY</p>
      <p>Professional with experience in [sector], strong communication skills and the ability to work in multicultural teams.</p>
      <p>Reliable, flexible and motivated. Looking for opportunities in</p>
      <p>[role/industry].</p>
      <p>WORK EXPERIENCE</p>
      <p>[Job Title]</p>
      <p>[Company Name] – [City, Country]</p>
      <p>MM/YYYY – Present</p>
      <p>Responsibilities:</p>
      <p>[Task 1]</p>
      <p>[Task 2]</p>
      <p>[Task 3]</p>
      <p>Tools/Software: [List]</p>
      <p>Result/Achievement (optional): [Short sentence]</p>
      <p>[Job Title]</p>
      <p>[Company Name] – [City, Country]</p>
      <p>MM/YYYY – MM/YYYY</p>
      <p>Daily tasks: [Short bullet list]</p>
      <p>Teamwork with [relevant team/customers].</p>
      <p>Ensured quality and efficiency.</p>
      <p>EDUCATION</p>
      <p>[Degree or Diploma]</p>
      <p>[School / University] – [City]</p>
      <p>MM/YYYY – MM/YYYY</p>
      <p>SKILLS</p>
      <p>Customer service</p>
      <p>Warehouse / logistics operations</p>
      <p>POS systems</p>
      <p>MS Office (Word, Excel, PowerPoint)</p>
      <p>[Other relevant skills]</p>
      <p>Languages:</p>
      <p>Italian – Native</p>
      <p>English – B2/C1</p>
      <p>Danish – Basic / In progress</p>
      <p>CERTIFICATIONS (optional)</p>
      <p>First Aid</p>
      <p>Hygiene certificate (Hygiejnebevis)</p>
      <p>Safety training</p>
      <p>IT/Excel courses</p>
      <p>ADDITIONAL INFORMATION (optional)</p>
      <p>Immediate availability</p>
      <p>Driving licence</p>
      <p>Residence/work permit in Denmark</p>
      <p>Lettera di presentazione</p>
      <p>Struttura tipica di una lettera di presentazione in Danimarca:</p>
      <ul><li>Intestazione: Il tuo nome, cognome, indirizzo (non italiano),</li></ul>
      <p>numero di telefono (non italiano) e indirizzo email.</p>
      <ul><li>Data e luogo</li><li>Destinatario: Nome e cognome del responsabile delle</li></ul>
      <p>assunzioni, o dell'ufficio risorse umane (HR).</p>
      <ul><li>Oggetto: Indicare chiaramente la posizione a cui ti candidi.</li><li>Saluto: "Kære [Nome del destinatario]" (Caro/a [Nome del</li></ul>
      <p>destinatario]), “Dear...”.</p>
      <ul><li>Introduzione: Spiega brevemente chi sei e perché stai</li></ul>
      <p>scrivendo.</p>
      <ul><li>Corpo: Evidenzia le tue competenze ed esperienze più</li></ul>
      <p>rilevanti, collegandole alle esigenze dell'azienda.</p>
      <ul><li>Conclusione: Riassumi brevemente i motivi per cui sei il</li></ul>
      <p>candidato ideale e ringrazia per l'attenzione.</p>
      <ul><li>Saluti: "Med venlig hilsen" (Cordiali saluti), “Kind regards”.</li><li>Firma: Il tuo nome e cognome.</li></ul>
      <p>Consigli aggiuntivi:</p>
      <p>Correggi attentamente: errori grammaticali o di ortografia possono creare un'impressione negativa.</p>
      <p>Adatta il tuo CV: assicurati che il tuo CV sia coerente con la tua lettera di presentazione.</p>
      <p>Informati sull'azienda: mostra che hai fatto le tue ricerche sull'azienda e sulla cultura danese.</p>
      <p>www.danimarchizziamoci.eu</p>
    ` },
  { n: 5, free: false, title: 'Contratti di lavoro', teaser: 'Cosa deve contenere un contratto danese, facsimile completo, cosa controllare prima di firmare.',
    html: `
      <p>Elementi fondamentali di un contratto di lavoro danese:</p>
      <p>Parti coinvolte: Nome completo e dettagli di contatto sia del datore di lavoro che del dipendente.</p>
      <p>Data di inizio: La data esatta in cui inizia il rapporto di lavoro.</p>
      <p>Luogo di lavoro: L'indirizzo dell'azienda o una descrizione generale della zona di lavoro.</p>
      <p>Mansioni: Una descrizione chiara e dettagliata delle tue responsabilità e delle attività che dovrai svolgere.</p>
      <p>Orario di lavoro: L'orario di lavoro standard, inclusi eventuali turni o flessibilità.</p>
      <p>Pausa pranzo: La durata della pausa pranzo e se è retribuita.</p>
      <p>Retribuzione: Lo stipendio base, eventuali bonus, modalità di pagamento (mensile, settimanale) e valuta utilizzata.</p>
      <p>Periodo di prova: La durata del periodo di prova e le condizioni per la sua conclusione.</p>
      <p>Ferie: Il numero di giorni di ferie annuali a cui hai diritto.</p>
      <p>Malattia: Le procedure da seguire in caso di malattia e la durata massima di assenza retribuita.</p>
      <p>Licenziamento: Le condizioni per il licenziamento e il preavviso richiesto.</p>
      <p>Sindacato: Se applicabile, informazioni sull'appartenenza al sindacato e sul contratto collettivo nazionale.</p>
      <p>Clausola di non concorrenza: Potrebbe essere inclusa una clausola che limita le tue attività lavorative dopo la cessazione del rapporto.</p>
      <p>Consigli aggiuntivi:</p>
      <p>Traduzione: Se non parli danese, chiedi una traduzione del contratto nella tua lingua madre o in inglese.</p>
      <p>Consulenza legale: Se hai dubbi o preoccupazioni, consulta un avvocato specializzato in diritto del lavoro.</p>
      <p>Sindacati: Informati sui sindacati danesi e sulle loro funzioni.</p>
      <p>Possono fornirti assistenza e rappresentanza in caso di controversie con il datore di lavoro.</p>
      <p>Come si presenta un contratto di lavoro (tra parentesi ciò che deve essere inserito):</p>
      <p>Versione danese 👇🏿</p>
      <p>Ansættelseskontrakt:</p>
      <p>Denne følgende ansættelseskontrakt er dags dato indgået mellem:</p>
      <p>[Indsæt virksomhedsoplysninger]</p>
      <p>Ref.: Virksomheden</p>
      <p>Virksomhedsnavn:</p>
      <p>Adresse:</p>
      <p>CVR. nr.:</p>
      <p>[Indsæt medarbejderoplysninger]</p>
      <p>Ref.: Medarbejderen</p>
      <p>Navn:</p>
      <p>Adresse:</p>
      <p>CPR. nr.:</p>
      <ul><li>TILTRÆDELSE OG ARBEJDSSTED</li><li>1 Medarbejderen er pr. [dato indsættes] ansat som [titel indsættes].</li><li>2 De første [indsæt antal måneder for prøvetid] er på prøvetid.</li><li>3 Arbejdsstedet er [adressen for arbejdsstedet indsættes].</li><li>4 Ansættelsens varighed er [ansættelsesforholdets varighed, hvis</li></ul>
      <p>stillingen er tidsbegrænset].</p>
      <p>2 ANSVAR OG BEFØJELSER</p>
      <ul><li>1 Medarbejderen varetager og har ansvar for [beskrivelse af</li></ul>
      <p>arbejdsopgaverne og ansvarsområderne indsættes].</p>
      <ul><li>2 Medarbejderen refererer til [indsæt stilling eller navn på den</li></ul>
      <p>overordnede som der refereres til].</p>
      <ul><li>LØN OG PENSION</li><li>1 Medarbejderen aflønnes med kroner/kr. [indsæt beløb] i timen</li></ul>
      <p>inkl./ekskl. pension.</p>
      <ul><li>2 Lønnen udbetales [indsæt dato for udbetaling af løn].</li><li>3 Med henblik herpå afholdes årligt en lønsamtale, første gang i</li></ul>
      <p>[indsæt år].</p>
      <ul><li>ARBEJDSTID</li><li>1 Den normale ugentlige arbejdstid er aftalt til [Indsæt antal timer]</li><li>2 Arbejdstiden er eksklusiv 30 minutters frokostpause. [Indsæt</li></ul>
      <p>eventuelt tidsrum her]</p>
      <ul><li>3 Arbejdstiden udføres sædvanligvis fra [indsæt ugedage hvor</li></ul>
      <p>arbejdet udføres fx mandag til fredag] mellem kl. [indsæt daglig arbejdstid]</p>
      <ul><li>4 [Ved overarbejde beskrives betingelser og betaling for</li></ul>
      <p>overarbejde]</p>
      <ul><li>FERIE OG FRIDAGE</li><li>1 Medarbejderen er berettiget til ferie jf. ferieloven.</li><li>SYGDOM</li><li>1 Ved sygdom er Medarbejderen forpligtet til at melde sit fravær til</li></ul>
      <p>[indsæt navnet på den overordnede] hurtigst muligt og senest kl. [indsæt klokkeslæt] på fraværsdagen.</p>
      <ul><li>2 Såfremt det anmodes fra virksomheden, skal medarbejderen vise</li></ul>
      <p>dokumentation for sygdom.</p>
      <ul><li>OPSIGELSE</li><li>1 De første [indsæt antal måneder for prøvetid] er prøvetid og i denne</li></ul>
      <p>periode kan opsigelse fra begge parter finde sted med et varsel på 7 dage.</p>
      <p>Efter prøveperioden er slut, er der et varsel på en måned plus løbende måneds for opsigelse.</p>
      <ul><li>TAVSHEDSPLIGT</li><li>1 Medarbejderen har tavshedspligt i forhold til alt, hvad denne erfarer</li></ul>
      <p>i forbindelse med arbejdet, medmindre der er tale om forhold, der ifølge sagens natur skal bringes til tredjemands kundskab. Dette gælder også, efter eventuel fratrædelse.</p>
      <ul><li>IMMATERIELLE RETTIGHEDER</li><li>1 Alt det materiale der er lavet af medarbejderen under udførelsen af</li></ul>
      <p>dennes arbejde eller efter anvisningerne fra virksomheden, tilhører virksomheden.</p>
      <ul><li>2 Enhver rettighed over medarbejderens opfindelser tilfalder</li></ul>
      <p>virksomheden uden omkostninger.</p>
      <ul><li>BIBESKÆFTIGELSE</li><li>1 Medarbejderen er ikke berettiget til at tage såvel betalt som</li></ul>
      <p>ubetalt job/arbejde/beskæftigelse ved siden af dette arbejde, medmindre virksomheden har givet skriftlig accept.</p>
      <ul><li>2 [Hvis sidebeskæftigelse er tilladt: “Det er aftalt, at Medarbejderen</li></ul>
      <p>må tage arbejde uden for virksomheden, såfremt beskæftigelsen kan varetages uden at være til hindre for arbejdet i [Indsæt virksomhedsnavn]</p>
      <ul><li>PERSONALEHÅNDBOG</li><li>1 Medarbejderen forpligter sig til at lære og følge de retningslinjer,</li></ul>
      <p>der er udarbejdet af virksomheden, herunder gælder blandt andet personalehåndbogen. [Hvis en sådan er udarbejdet]</p>
      <p>N.B.: Ci sono vari tipi di contratti di lavoro, questo è solo un facsimile per darvi l’idea delle voci che deve contenere</p>
      <ul><li>ANDRE BESTEMMELSER</li><li>1 Nærværende ansættelsesforhold er omfattet af funktionærloven</li></ul>
      <p>og ferieloven.</p>
      <ul><li>2 Ansættelsesforholdet er ikke omfattet af kollektive</li></ul>
      <p>overenskomster.</p>
      <ul><li>3 Alternativ: [Ansættelsesforholdet er omfattet af følgende</li></ul>
      <p>kollektive overenskomst: [indsæt navnet på den pågældende overenskomst].]</p>
      <ul><li>4 [Hvis medarbejderen har ret til uddannelse] Virksomheden</li></ul>
      <p>tilbyder mulighed for uddannelse efter behov og som kompetenceudvikling. Dette aftales konkret mellem medarbejder og nærmeste leder, såfremt det er relevant.</p>
      <ul><li>UNDERSKRIFTER</li></ul>
      <p>Kontrakten er underskrevet i 2 ens eksemplarer, begge parter modtager et eksemplar. Begge parter er indforståede med de anførte ansættelsesvilkår.</p>
      <p>Dato:                                                     Dato:</p>
      <p>________________________________  _____________________________</p>
      <p>[indsæt Medarbejderens fulde navn]           [indsæt Virksomhedens fulde navn]</p>
    ` },
  { n: 6, free: false, title: 'Agenzie Interinali', teaser: 'Le agenzie vikarbureau più importanti, come iscriversi, consigli pratici.',
    html: `
      <p>Le agenzie interinali, o vikarbureau in danese, sono molto diffuse in</p>
      <p>Danimarca e rappresentano uno strumento utile per chi cerca lavoro, sia temporaneo che a lungo termine. Queste agenzie mettono in contatto candidati con aziende che hanno bisogno di personale temporaneo o stagionale.</p>
      <p>Perché utilizzare un'agenzia interinale in Danimarca?</p>
      <p>Ampia scelta di lavori: Le agenzie offrono un'ampia gamma di posizioni in diversi settori, dal manifatturiero al terziario.</p>
      <p>Flessibilità: I contratti temporanei possono essere un'ottima soluzione per chi cerca un lavoro flessibile o vuole testare un nuovo ambiente lavorativo.</p>
      <p>Supporto nella ricerca del lavoro: Le agenzie forniscono assistenza nella stesura del curriculum, nella preparazione ai colloqui e nella comprensione del mercato del lavoro danese.</p>
      <p>Quali sono le agenzie interinali più importanti in Danimarca?</p>
      <p>Esistono numerose agenzie interinali in Danimarca, alcune delle più conosciute sono:</p>
      <p>JKS: Una delle più grandi agenzie, nota anche per assumere senza</p>
      <p>CPR (il numero di identificazione personale danese).</p>
      <p>Randstad: Un'agenzia internazionale molto presente anche in</p>
      <p>Danimarca, con un'ampia offerta di lavori.</p>
      <p>JM Manpower ApS: Un'altra agenzia importante, con una lunga esperienza nel settore.</p>
      <p>JobTeam: Un'agenzia che offre un'ampia gamma di servizi, dalla ricerca del personale alla formazione.</p>
      <p>Nordvikar: Un'agenzia specializzata in alcuni settori specifici.</p>
      <p>Adecco: Un'agenzia internazionale con una forte presenza anche in</p>
      <p>Danimarca.</p>
      <p>Hartmanns: Un'agenzia con una lunga tradizione nel settore.</p>
      <p>Moment                         www.moment.dk</p>
      <p>Vikar DK A/S                  www.vikardk.dk</p>
      <p>PlejeVikar A/S                www.plejevikar.dk</p>
      <p>NH Bemanding              www.nhbemanding.dk</p>
      <p>BlueCollar A/S                www.bluecollar.dk</p>
      <p>Back Up Vikar                www.backupvikar.dk</p>
      <p>TempTeam Denmark     www.temp-team.dk</p>
      <p>Airswift Denmark           www.airswift.com</p>
      <p>Ulteriori Agenzie Interinali</p>
      <p>Come trovare un'agenzia interinale in Danimarca?</p>
      <p>Per trovare un'agenzia interinale in Danimarca puoi:</p>
      <p>Fare una ricerca online: utilizza motori di ricerca come Google, inserendo termini come</p>
      <p>"vikarbureau</p>
      <p>Danmark"</p>
      <p>o il nome dell'agenzia che ti interessa.</p>
      <p>Consultare siti specializzati:</p>
      <p>esistono siti web come www.workindenmark.dk) che offrono una vasta gamma di offerte di lavoro e informazioni utili per chi cerca lavoro in Danimarca.</p>
      <p>Chiedere consigli: parla con altri italiani che vivono in Danimarca o con conoscenti che hanno già utilizzato i servizi di un'agenzia interinale, oppure iscriviti al gruppo Facebook “Danimarchizziamoci”</p>
      <p>e chiedi tramite un post.</p>
      <p>Consigli utili</p>
      <p>Registrati su più agenzie: aumenta così le tue possibilità di trovare un lavoro.</p>
      <p>Tieni aggiornato il tuo curriculum: assicurati che il tuo curriculum sia in danese o in inglese e che sia chiaro e conciso.</p>
      <p>Preparati bene ai colloqui: informati sull'azienda e sul ruolo per cui ti candidi.</p>
      <p>Sii paziente: la ricerca di un lavoro può richiedere del tempo.</p>
      <p>Avvertenza: prima di firmare qualsiasi contratto, leggi attentamente tutte le condizioni e, se hai dubbi, chiedi chiarimenti all'agenzia.</p>
      <p>https://italien.um.dk/it/la-danimarca/lavorare-e-studiare-in-danimarca</p>
      <p>Potresti essere interessato a:</p>
      <ul><li>Come leggere la busta paga:</li></ul>
      <p>Visma.dk</p>
      <ul><li>Lavorare e studiare in Danimarca 👇🏻</li><li>Casting (attore): www.dask-online.dk</li></ul>
      <p>www.onlinecasting.dk www.unitedcasting.dk</p>
      <ul><li>Lavorare con Wolt: www.wolt.dk</li><li>Distribuisci riviste pubblicitarie: www.blivomdeler.nu</li></ul>
      <p>Sønderborg</p>
    ` },
  { n: 7, free: false, title: 'Sindacati e A-Kasse', teaser: 'Come funzionano sindacati e A-kasse, quale scegliere, elenco completo con siti.',
    html: `
      <p>I sindacati rappresentano specifiche categorie professionali.</p>
      <p>Contrattazione collettiva: I sindacati negoziano con le associazioni dei datori di lavoro per stabilire i contratti collettivi nazionali. Questi contratti definiscono salari minimi, orari di lavoro, ferie, e altre condizioni lavorative per interi settori.</p>
      <p>Servizi per i membri: I sindacati offrono una vasta gamma di servizi ai loro membri, tra cui:</p>
      <p>Assistenza legale in caso di controversie lavorative</p>
      <p>Consulenza sulla sicurezza sul lavoro</p>
      <p>Corsi di formazione professionale</p>
      <p>Assistenza nella ricerca di lavoro</p>
      <p>Assicurazioni e pensioni</p>
      <p>Partecipazione politica: I sindacati danesi sono attivi nella politica nazionale, influenzando le decisioni legislative che riguardano il mondo del lavoro.</p>
      <p>Sindacati per varie categorie di lavoro:</p>
      <p>Sì, in Danimarca esistono sindacati per praticamente tutte le categorie di lavoro, dai metalmeccanici agli insegnanti, dagli infermieri ai lavoratori dell'edilizia. La scelta del sindacato dipende dalla tua professione e dal settore in cui lavori, ma puoi scegliere anche un sindacato generico, cioè, che comprende più categorie di lavoratori.</p>
      <p>Costi di iscrizione:</p>
      <p>Il costo dell'iscrizione a un sindacato varia a seconda del sindacato e della categoria professionale. In generale, le quote associative sono una piccola percentuale dello stipendio e offrono un ottimo rapporto qualità-prezzo considerando i servizi offerti.</p>
      <p>www.danimarchizziamoci.eu</p>
      <p>Perché iscriversi a un sindacato:</p>
      <p>Tutela dei diritti dei lavoratori: I sindacati sono la voce dei lavoratori e si battono per garantire condizioni di lavoro eque e sicure.</p>
      <p>Migliore retribuzione:</p>
      <p>Grazie alla contrattazione collettiva, i sindacati contribuiscono a stabilire salari più alti e condizioni contrattuali più favorevoli.</p>
      <p>Assistenza legale: In caso di controversie con il datore di lavoro, avere un sindacato alle spalle può fare la differenza.</p>
      <p>Possibilità di formazione: Molti sindacati offrono corsi di formazione e aggiornamento professionale.</p>
      <p>Rete di contatti: Iscriversi a un sindacato significa far parte di una comunità di lavoratori e avere accesso a una rete di contatti.</p>
      <p>In conclusione, iscriversi a un sindacato in Danimarca è un investimento nel proprio futuro professionale. Ti offre una serie di vantaggi e ti permette di far sentire la tua voce nel mondo del lavoro.</p>
      <p>Helsingør</p>
      <p>A-Kasse</p>
      <p>L'A-kasse in Danimarca è un concetto fondamentale per comprendere il sistema di protezione sociale del paese.</p>
      <p>Cos'è un'A-kasse?</p>
      <p>Letteralmente "cassa", è un fondo di assicurazione sociale a cui i lavoratori danesi contribuiscono regolarmente. È un'istituzione privata ma regolamentata dallo Stato, che offre una serie di protezioni finanziarie in caso di disoccupazione, malattia a lungo termine, maternità/paternità e altre situazioni che possono interrompere l'attività lavorativa.</p>
      <p>Perché è utile?</p>
      <p>LA-kasse svolge un ruolo cruciale nel garantire un certo livello di sicurezza economica ai lavoratori danesi:</p>
      <p>Indennità di disoccupazione: In caso di perdita del lavoro, l'A-kasse eroga un'indennità mensile per un periodo determinato, aiutando a coprire le spese durante la ricerca di un nuovo impiego.</p>
      <p>Protezione in caso di malattia: Se si è impossibilitati a lavorare a causa di una malattia prolungata,l'A-kasse può fornire un sostegno finanziario.</p>
      <p>Maternità/paternità: L'A-kasse contribuisce a garantire un reddito durante il periodo di congedo parentale, permettendo ai genitori di dedicarsi ai propri figli.</p>
      <p>Altre protezioni: A seconda dell'A-kasse a cui si è iscritti, potrebbero essere offerti altri servizi come corsi di formazione per la riqualificazione professionale o consulenza finanziaria.</p>
      <p>Come funziona l'iscrizione?</p>
      <p>Scelta dell'A-kasse: In Danimarca esistono diverse A-kasse, ognuna con le proprie caratteristiche e offerte. La scelta dipende spesso dal settore lavorativo e dalle esigenze individuali..</p>
      <p>Benefici: I benefici offerti variano da un'A-kasse all'altra, ma in generale sono simili per quanto riguarda le protezioni di base.</p>
      <p>Skt. Alban</p>
      <p>Copenhagen</p>
      <p>Perché è importante?</p>
      <p>L'A-kasse è un pilastro del modello sociale danese che mira a garantire un elevato livello di benessere a tutti i cittadini.</p>
      <p>Iscriversi a un'A-kasse offre una serie di vantaggi:</p>
      <p>Sicurezza economica: In caso di eventi imprevisti l'A-kasse fornisce un sostegno finanziario importante.</p>
      <p>Tranquillità: Sapere di essere protetti in caso di bisogno permette di affrontare il futuro con maggiore serenità.</p>
      <p>Integrazione nel mercato del lavoro: L'A-kasse è parte integrante del sistema lavorativo danese e contribuisce a facilitare la mobilità professionale.</p>
      <p>In sintesi,  è uno strumento fondamentale per garantire la sicurezza economica dei lavoratori danesi. Offre una serie di protezioni che vanno ben oltre la semplice indennità di disoccupazione, contribuendo a creare un sistema sociale solido e sostenibile.</p>
      <p>L’A-kasse viene spesso abbinata al Sindacato, risparmiando quindi sull’intero pacchetto.</p>
      <p>Cattedrale di Ribe</p>
      <p>Elenco delle principali A-kasse in Danimarca</p>
      <p>Nome A-kasse</p>
      <p>CA A-kasse</p>
      <p>Min A-kasse</p>
      <p>FTF-A</p>
      <p>ASE</p>
      <p>Akademikernes (AKA)</p>
      <p>Dansk Metal</p>
      <p>3F</p>
      <p>HK</p>
      <p>Krifa</p>
      <p>FOA</p>
      <p>Socialpædagogernes (SL)</p>
      <p>MA A-kasse</p>
      <p>Journalisternes</p>
      <p>BUPL</p>
      <p>Det Faglige Hus</p>
      <p>Guida realizzata da Danimarchizziamoci</p>
      <p>Settore / Target</p>
      <p>Business, communication, marketing</p>
      <p>Generale, aperta a tutti</p>
      <p>Intersettoriale, anche settore pubblico</p>
      <p>Autonomi, freelance, imprenditori</p>
      <p>Accademici, laureati</p>
      <p>Metalmeccanici, tecnici</p>
      <p>Edilizia, trasporti, pulizie, ristorazione, industria</p>
      <p>Uffici, commercio, logistica, amministrazione</p>
      <p>Intersettoriale, ispirazione cristiana</p>
      <p>Sanità, sociale, educazione</p>
      <p>Educatori sociali</p>
      <p>Umanistica, sociale, artistica</p>
      <p>Giornalisti, comunicatori</p>
      <p>Pedagoghi, insegnanti di asili</p>
      <p>Intersettoriale, una delle più economiche</p>
      <p>Sito web ca.dk min-a-kasse.dk ftf-a.dk ase.dk aka.dk danskmetal.dk</p>
      <p>3f.dk hk.dk krifa.dk foa.dk sl.dk ma-kasse.dk journalistforbundet.dk bupl.dk detfagligehus.dk</p>
      <p>Horsens</p>
    ` },
  { n: 8, free: false, title: 'Skattekort', teaser: 'Hovedkort, Bikort, Frikort: cosa sono e come richiederli passo-passo su skat.dk.',
    html: `
      <p>La carta delle tasse, o Skattekort, è essenziale per lavorare in</p>
      <p>Danimarca. Ci sono tre tipi principali: Hovedkort, Bikort e Frikort, ognuna con funzioni specifiche a seconda del tuo impiego.</p>
      <p>Hovedkort (Carta principale):</p>
      <p>Funzione: È la carta fiscale principale di un individuo.</p>
      <p>Serve per calcolare l'imposta sul reddito da lavoro e altre fonti di reddito.</p>
      <p>Utilizzo: Viene utilizzata dal datore di lavoro per trattenere le tasse direttamente dallo stipendio.</p>
      <p>Caratteristiche: Ogni residente in Danimarca ne ha una.</p>
      <p>Contiene informazioni personali, come il numero di CPR</p>
      <p>(Central Person Register), lo stato civile e il numero di figli a carico.</p>
      <p>Bikort (Carta secondaria):</p>
      <p>Funzione: È una carta che viene utilizzata solo se hai più contribuenti (ad es. un datore di lavoro e SU o due (o più)</p>
      <p>datori di lavoro).</p>
      <p>Utilizzo: La puoi utilzzare in diversi posti.</p>
      <p>Caratteristiche: La carta “B” indica solo la percentuale che ti verrà detratta dalle tasse. Quando un pagatore utilizza la tua bikort,  detrae l'intera imposta dal pagamento.</p>
      <p>Frikort (Carta esente da imposte):</p>
      <p>Funzione: È una carta speciale che indica che il titolare non è soggetto all'imposta sul reddito da lavoro.</p>
      <p>Utilizzo: Viene utilizzata da persone che non hanno un reddito imponibile, come studenti a tempo pieno o pensionati con un reddito molto basso.</p>
      <p>Caratteristiche: Non prevede trattenute fiscali dallo stipendio.</p>
      <p>Perché sono importanti? Queste carte sono fondamentali per garantire che le tasse vengano calcolate e pagate correttamente. Il datore di lavoro utilizza le informazioni contenute nelle carte per determinare l'importo da trattenere dallo stipendio e versare all'amministrazione fiscale.</p>
      <p>Quando e come si richiedono?</p>
      <ul><li>Hovedkort: Viene rilasciata su richiesta online sul sito di Skat,</li></ul>
      <p>questo link vi porta direttamente nella pagina apposita:</p>
      <p>https://skat.dk/borger/aarsopgoerelse-forskudsopgoerelse-og- indkomst/hovedkort-bikort-og-frikort/forstaa-dit-skattekort</p>
      <p>Bikort: Si richiede all'amministrazione fiscale se si ha un secondo lavoro, ecc.</p>
      <p>Frikort: Si richiede se si rientra nelle categorie che danno diritto a questa tipologia di carta, come studenti a tempo pieno o pensionati con un reddito molto basso.</p>
      <p>Dove posso trovare maggiori informazioni? Per informazioni più dettagliate e specifiche sulla tua situazione, ti consiglio di consultare il sito web dell'amministrazione fiscale danese (Skat):</p>
      <p>www.skat.dk.</p>
      <p>Importante: Il sistema fiscale danese è abbastanza complesso e le regole possono cambiare nel tempo. È sempre consigliabile rivolgersi direttamente all'amministrazione fiscale o ad un consulente fiscale per una consulenza personalizzata.</p>
      <p>N.B.: se vuoi fare la Skattekort da solo, vai sul sito e compila il modulo (Blanket) 04.063.</p>
      <p>La carta delle tasse</p>
    ` },
  { n: 9, free: false, title: 'Certificato di Residenza (SIRI)', teaser: 'Come prenotare l\'appuntamento, modulo OD1, documenti da portare.',
    html: `
      <p>Per ottenere il certificato di residenza, devi fissare un appuntamento presso l’ufficio immigrazione Siri, compilando il modulo OD1. Quest’ultimo si presenta in versione digitale o cartacea. All’interno troverai anche il foglio che dovrà compilare e firmare il tuo datore di lavoro, che si chiama:</p>
      <p>“Arbejdsgivererklæring”. Porta con te tutti i documenti necessari, inclusi il contratto di casa e, se richiesto, il contratto di lavoro.</p>
      <p>Nel caso in cui ti stessi trasferendo con fondi a sufficienza, cioè , dimostrando di essere in grado di sostentarti da solo/a per un anno, allora il Mod. OD1 è differente, ma lo trovi comunque nel solito sito e, in questo caso, dovrai far vedere una copia del tuo estratto conto, in cui ci saranno almeno 10.000 euro. Se non hai un conto intestato a te, ma un componente della tua famiglia o un/una fidanzato/a può dimostrare di mantenerti, allora occorre una dichiarazione della persona.</p>
      <p>Una volta controllati i documenti, l’impiegato ti dirà: o che riceverai il certificato di residenza con la posta (o via email) o ti consegna il documento immediatamente, questo dipende da alcuni fattori, non accade spesso.</p>
      <p>N.B.: Se ti presenti con fondi a sufficienza e poi trovi un lavoro, ricordati di modificare il tuo status, compilando un nuovo Mod.</p>
      <p>OD1 e inviarlo senza doversi presentare personalmente.</p>
      <p>Compilare il Modulo OD1 da qui: www.nyidanmark.dk</p>
    ` },
  { n: 10, free: false, title: 'Registrazione al Comune', teaser: 'Tessera sanitaria, CPR, attivazione MitID: la procedura passo-passo.',
    html: `
      <p>Con il certificato di residenza, recati in Comune per richiedere la tessera sanitaria contenente il numero CPR. Ti verrà chiesto di scegliere un medico di base e di attivare il MitID, fondamentale per gestire le tue pratiche burocratiche in Danimarca. Non sempre, però, il MitId viene attivato in comune, può capitare che ti venga data una busta contenente le istruzioni per attivarlo da solo, ma se non riuscissi, chiedi aiuto in comune. Chiama per un altro appuntamento.</p>
      <p>N.B.:È necessario portare un testimone per dimostrare che vivi realmente in Danimarca.</p>
      <ul><li>Un sito utile per leggere la tua cartella clinica è:</li></ul>
      <p>www.sundhed.dk</p>
      <p>Tessera sanitaria</p>
      <p>Gruppo assicurativo</p>
      <p>Num.del medico</p>
      <p>Valida da...</p>
      <p>Num.del comune</p>
      <p>Nome e indirizzo del medico</p>
      <p>Data di nascita e cpr</p>
      <p>Nome, cognome e indirizzo di residenza</p>
      <p>Regione</p>
      <p>MitID e i vari modi in cui si può usare.</p>
      <p>Sort Sol - Sønderjylland</p>
      <p>📌Ricordate l’apostille per i vari certificati da autenticare, che si fa nello Stato in cui il certificato stesso è stato prodotto.</p>
    ` },
  { n: 11, free: false, title: 'Sanità danese', teaser: 'Come funziona il sistema sanitario, Gruppo 1 vs Gruppo 2, sanità per i bambini.',
    html: `
      <p>Sanità in Danimarca: come funziona</p>
      <p>In Danimarca il sistema sanitario è pubblico e gratuito per tutti i residenti iscritti al CPR (registro nazionale). Le spese mediche sono coperte dalle tasse e gestite dai comuni e dalle regioni. Ogni cittadino sceglie un medico di base (praktiserende læge), che fa da punto di riferimento per visite, prescrizioni e invii agli specialisti.</p>
      <p>Pro:</p>
      <p>Assistenza gratuita e di alta qualità.</p>
      <p>Accesso semplice al medico di base e ai servizi d’urgenza.</p>
      <p>Buona organizzazione e tempi rapidi nei casi gravi.</p>
      <p>Contro:</p>
      <p>Attese lunghe per visite specialistiche non urgenti.</p>
      <p>Limitata libertà di scelta (serve sempre il rinvio del medico).</p>
      <p>Cure odontoiatriche e oculistiche quasi sempre a pagamento.</p>
      <p>Differenze con l’Italia:</p>
      <p>In Italia molte visite specialistiche sono accessibili tramite ticket; in</p>
      <p>Danimarca invece non esistono ticket, ma la copertura dipende dal tipo di servizio. Gli ospedali danesi sono moderni e digitalizzati, ma il sistema si basa più sulla fiducia e sulla responsabilità individuale che sul controllo burocratico tipico italiano.</p>
      <p>Differenza tra Gruppo 1 e Gruppo 2</p>
      <p>In Danimarca, una volta registrati con il tuo numero CPR e la tessera sanitaria (“sundhedskort”), sei automaticamente assegnato o puoi scegliere di essere assegnato a uno dei due gruppi assicurativi pubblici: Gruppo 1 o Gruppo 2.</p>
      <p>Gruppo 1</p>
      <p>È quello predefinito e il più comune: circa il 98 % della popolazione è iscritta in questo gruppo.</p>
      <p>Sei assegnato a un medico di base (“GP”) della zona e lo cambi solo con certe modalità.</p>
      <p>Per vedere uno specialista, occorre che il medico di base faccia la rinvio (referral).</p>
      <p>Le prestazioni fondamentali (visita medico, ospedale pubblico)</p>
      <p>sono gratuitamente coperte dal sistema pubblico.</p>
      <p>Gruppo 2</p>
      <p>Offre una maggiore flessibilità: non sei obbligato a scegliere un medico di base nella zona né ad avere un referral per ogni specialista.</p>
      <p>Tuttavia: le prestazioni non sono completamente gratuite — se vai da un medico o specialista che applica tariffe più alte della soglia pubblica o non convenzionato, pagherai la differenza.</p>
      <p>Potrebbe essere una scelta se vuoi più libertà nella scelta del medico o dello specialista.</p>
      <p>Sanità danese per i bambini</p>
      <p>In Danimarca i bambini hanno diritto a cure sanitarie pubbliche gratuite, che comprendono controlli medici regolari, vaccinazioni, cure dentistiche e visite scolastiche. Tutto questo è garantito a chi possiede il CPR e la tessera sanitaria gialla (sundhedskort).</p>
      <ul><li>7 visite preventive gratuite dal medico di base tra 0 e 5 anni (3 nel</li></ul>
      <p>primo anno di vita).</p>
      <ul><li>Visite domiciliari da parte di un *health visitor* (infermiere</li></ul>
      <p>specializzato) dopo la nascita, con consulenze su allattamento, sviluppo e dieta.</p>
      <ul><li>Programma nazionale di vaccinazioni pediatriche, completamente</li></ul>
      <p>gratuito.</p>
      <ul><li>Visite scolastiche periodiche: esami della vista, dell’udito, crescita e</li></ul>
      <p>sviluppo.</p>
      <ul><li>Cure dentistiche gratuite per tutti i minori fino ai 18 anni.</li><li>Accesso gratuito a ospedali pubblici e assistenza pediatrica.</li></ul>
      <p>https://youtu.be/m-yk9IllV3c?</p>
      <p>si=b8AbHptDvBQmdzRd</p>
      <p>Per ulteriori informazioni sui gruppi assicurativi 1 e 2, ti invito a guardare il mio video 👇🏻</p>
      <p>Perché scegliere l’uno o l’altro?</p>
      <p>Scegli Gruppo 1 se: vuoi affidarti al sistema pubblico con copertura completa, vuoi evitare spese extra e non ti serve accesso libero immediato a qualunque specialista.</p>
      <p>Scegli</p>
      <p>Gruppo se:</p>
      <p>vuoi più autonomia nella scelta dei medici/specialisti, sei disposto a pagare eventuali differenze o preferisci non essere “vincolato” a un solo medico di base.</p>
      <p>Gruppo assicurativo</p>
      <p>Se ti hanno fissato un appuntamento  per una visita specialistica, ma la data è molto lontana, puoi chiamare l’ufficio del paziente, che c’è in ogni regione, si chiama “Patient Kontor”.</p>
      <p>Fai attenzione nella ricerca, perchè per accedere bisogna digitare prima la regione di appartenenza. Per esempio, il seguente link riguarda il centro della Danimarca:</p>
      <p>www.sundhed-regionmidtjylland.dk</p>
      <p>In Danimarca, il sistema delle ferie è regolato da una legge piuttosto chiara e vantaggiosa per i lavoratori. I lavoratori dipendenti accumulano diritto alle ferie e ricevono un'indennità chiamata</p>
      <p>Feriepenge (denaro per le ferie), che corrisponde a circa il 12,5% del salario lordo guadagnato.</p>
      <p>Come funziona il sistema delle ferie:</p>
      <p>Ogni lavoratore ha diritto a 5 settimane di ferie pagate all'anno. La particolarità è che i giorni di ferie vengono maturati mese per mese e possono essere utilizzati contemporaneamente al periodo in cui vengono guadagnati. Ad esempio, se inizi a lavorare in gennaio, già da febbraio avrai maturato giorni di ferie che potrai sfruttare.</p>
      <p>Feriepenge:</p>
      <p>Il 12,5% del tuo stipendio lordo viene accantonato e potrai richiedere il pagamento di queste somme quando prendi le ferie. I Feriepenge vengono gestiti da un fondo pubblico chiamato FerieKonto, o da eventuali fondi aziendali, e puoi richiederli attraverso il portale danese, una volta che hai pianificato le tue ferie. Questi soldi ti verranno versati quando prendi effettivamente i giorni di ferie.</p>
      <p>La nuova legge sulle ferie:</p>
      <p>Dal 2020, la Danimarca ha introdotto una riforma del sistema ferie.</p>
      <p>Cosa cambia / è già cambiato</p>
      <ul><li>Con la nuova legge sulle ferie:</li></ul>
      <p>Il periodo di optjening (maturazione delle ferie) va dal 1° settembre al 31 agosto dell’anno successivo.</p>
      <p>Ogni mese si maturano 2,08 giorni di ferie per un lavoratore a tempo pieno.</p>
    ` },
  { n: 12, free: false, title: 'Ferie e Feriepenge', teaser: 'Come funzionano ferie, Feriepenge e Dagpenge (disoccupazione) in Danimarca.',
    html: `
      <p>Feriepenge? Guida ai “Dagpenge” (Disoccupazione)</p>
      <p>Le ferie possono essere usufruite quasi contemporaneamente alla maturazione, non più necessariamente con un grosso ritardo come nel passato.</p>
      <p>Il periodo per godersi la ferie maturata (ferieafholdelsesperiode)</p>
      <p>va dal 1° settembre dell’anno di maturazione fino al 31 dicembre dell’anno successivo — quindi fino a 16 mesi nella maggior parte dei casi.</p>
      <ul><li>Per quanto riguarda i “feriedagpenge” (ovvero il sussidio ferie per</li></ul>
      <p>chi è disoccupato o percepisce prestazioni), le regole sono chiare:</p>
      <p>La domanda per le feriedagpenge relative all’anno vacanze</p>
      <ul><li>9.2024-31.8.2025 deve essere presentata entro il 31 gennaio</li></ul>
      <p>2026.</p>
      <p>Per i periodi successivi ci sono scadenze analoghe (es. per anno successivo: domanda entro 31 gennaio 2027)</p>
      <ul><li>Un dettaglio importante per i datori di lavoro:</li></ul>
      <p>La “5ª settimana di ferie” (cioè la settimana di ferie extra oltre le 4 settimane standard) deve essere pagata in contanti se non è stata utilizzata o trasferita — ad esempio per il periodo che termina nel 2025: pagamento al più tardi con lo stipendio di marzo 2025.</p>
      <p>In sintesi</p>
      <ul><li>La legge del 2020 resta la base del sistema ferie in Danimarca.</li><li>L’aggiornamento del 2023 introduce solo modifiche amministrative</li></ul>
      <p>e non cambia il diritto alle ferie.</p>
      <ul><li>Le 5 settimane restano obbligatorie, con flessibilità e possibilità di</li></ul>
      <p>godimento immediato.</p>
      <ul><li>I piccoli importi di ferie residue ora possono essere pagati</li></ul>
      <p>automaticamente.</p>
      <p>Ciò che devi sapere  sui “Dagpenge” (breve introduzione, i dettagli li trovate sui siti delle A-kasse)</p>
      <p>Dagpenge: la disoccupazione danese.</p>
      <p>I dagpenge sono un’indennità di disoccupazione danese destinata a chi perde il lavoro ma è iscritto a un’apposita assicurazione chiamata</p>
      <p>A-kasse (arbejdsløshedskasse, cioè “cassa di disoccupazione”).</p>
      <p>Non si tratta quindi di un aiuto automatico dello Stato, ma di un sistema volontario assicurativo: solo chi è membro di una A-kasse e ha versato i contributi può riceverli.</p>
      <p>Come funziona</p>
      <ul><li>Iscrizione a una A-kasse</li></ul>
      <p>Puoi scegliere liberamente la tua A-kasse (ce ne sono molte: es.</p>
      <p>MA, 3F, HK, CA, FOA, IDA…).</p>
      <p>Devi essere iscritto da almeno 1 anno per poter avere diritto ai dagpenge.</p>
      <p>Durante questo periodo, la A-kasse riceve un contributo mensile (intorno ai 480–550 DKK).</p>
      <ul><li>Requisiti lavorativi</li></ul>
      <p>Per avere diritto ai dagpenge devi dimostrare di aver lavorato un certo numero di ore nei 3 anni precedenti:</p>
      <ul><li>924 ore se sei a tempo pieno (fuldtidsforsikret)</li><li>258 ore se sei part-time (deltidsforsikret)</li></ul>
      <p>Le ore devono risultare da contratti regolari, con contributi versati e registrati presso SKAT.</p>
      <ul><li>Importo e durata</li></ul>
      <p>L’indennità corrisponde a circa 90% del tuo stipendio medio (fino a un massimo di circa 20.359 DKK lordi al mese nel 2025).</p>
      <p>Si può ricevere per un massimo di 2 anni (3.848 ore) nell’arco di 3 anni.</p>
      <p>È però necessario dimostrare di essere attivamente alla ricerca di un lavoro e registrarsi regolarmente su Jobnet.dk.</p>
      <ul><li>Durante la disoccupazione</li></ul>
      <p>Devi partecipare a colloqui obbligatori con la tua A-kasse e il</p>
      <p>Jobcenter.</p>
      <p>Ogni mese devi aggiornare online il tuo status e le candidature inviate.</p>
      <p>Se trovi un lavoro anche temporaneo, i giorni in cui lavori vengono sottratti dal periodo totale di dagpenge, ma puoi accumularne di nuovi se lavori a sufficienza.</p>
      <p>In breve</p>
      <p>Per accedere ai dagpenge serve:</p>
      <p>Essere membro di una A-kasse da almeno 12 mesi</p>
      <p>Aver lavorato 1.924 ore negli ultimi 3 anni (tempo pieno)</p>
      <p>Essere disoccupato e attivamente in cerca di lavoro</p>
      <p>Registrarsi su Jobnet.dk e rispettare gli obblighi di contatto con</p>
      <p>A-kasse e Jobcenter</p>
      <p>Durata massima: 2 anni di indennità in un periodo di 3 anni.</p>
      <p>Come si ricaricano i dagpenge in Danimarca</p>
      <p>Guida chiara e aggiornata per capire come maturare un nuovo periodo di disoccupazione</p>
      <ul><li>Cos’è il rinnovo dei dagpenge</li></ul>
      <p>Quando hai quasi esaurito le ore di sussidio, puoi maturare un nuovo periodo di 2 anni (3.848 ore) lavorando e accumulando ore registrate ufficialmente.</p>
      <ul><li>Se lavori come dipendente</li></ul>
      <p>Per ottenere un nuovo periodo completo servono 1.924 ore di lavoro nei 3 anni precedenti. In pratica, con un lavoro full-time da 37 ore a settimana, raggiungi questa soglia in circa un anno.</p>
      <ul><li>Se lavori come autonoma</li></ul>
      <p>Serve dimostrare un reddito equivalente a 1.924 ore di lavoro dipendente, calcolato dalla tua A-kasse in base al reddito lordo annuale.</p>
      <ul><li>Il periodo di riferimento</li></ul>
      <p>Le ore devono essere accumulate entro gli ultimi 3 anni</p>
      <p>(optjeningsperioden). In casi speciali (malattia, maternità, studio, ecc.) la A-kasse può estendere il periodo.</p>
      <ul><li>Quando raggiungi le 1.924 ore</li></ul>
      <p>Ottieni di nuovo 3.848 ore di diritto a dagpenge (pari a 2 anni di sussidio). Le ore vengono registrate automaticamente dal sistema dopo che il datore di lavoro le ha segnalate.</p>
      <ul><li>Esempio pratico</li></ul>
      <p>Se ti restano 693 ore di dagpenge, queste equivalgono a circa 94 giorni lavorativi, cioè circa 4‒4,5 mesi di copertura. Dopo quel periodo, potrai ricevere nuove indennità solo se avrai raggiunto le</p>
      <ul><li>924 ore lavorate.</li></ul>
    ` },
  { n: 13, free: false, title: 'Aprire un conto in banca', teaser: 'Le migliori banche nel 2025, cosa serve agli expat italiani.',
    html: `
      <p>Aprire un conto in banca può richiedere del tempo, fino a tre mesi a Copenaghen. Esplora le varie opzioni bancarie e considera l’uso di un conto online come Lunar (anche per questo tipo di conto occorre il cpr).</p>
      <p>Migliori banche in Danimarca nel 2025</p>
      <p>Ecco una selezione delle banche più rilevanti, senza entrare troppo nei dettagli numerici:</p>
      <p>Danske Bank — la più grande, premio “Best Bank in Denmark” 2025.</p>
      <p>Nordea Danmark — forte presenza nei servizi retail e business.</p>
      <p>Jyske Bank — una delle grandi banche danesi, con buona copertura e servizi.</p>
      <p>Nykredit — specializzata nei mutui e credito immobiliare, molto forte nel segmento casa.</p>
      <p>DLR Kredit — banca/minore ma menzionata nelle top 10 per servizio.</p>
      <p>Sydbank — banca regionale con buona reputazione.</p>
      <p>Spar Nord Bank — banca locale, utile se stai fuori Copenaghen.</p>
      <p>Arbejdernes Landsbank — banca con forte legame locale e buone recensioni.</p>
      <p>Ringkjøbing Landbobank — menzionata nelle classifiche nordiche per performance.</p>
      <p>(Un po’ più piccola ma comparsa nelle liste) Saxo Bank — banca digitale/innovativa, utile se lavori molto online.</p>
      <p>Cosa cambierà nel 2026 per le banche</p>
      <p>Le banche dovranno applicare regolamentazioni ancora più stringenti in termini di supervisione, rischi operativi e infrastrutture digitali, secondo la strategia della Danish Financial</p>
      <p>Supervisory Authority.</p>
      <p>Maggiore trasparenza e diffusione dei tassi di interesse su prestiti e depositi: la Danmarks Nationalbank pubblica statistiche aggiornate che servono da riferimento.</p>
      <p>Oppure consulta il sito www.findbank.dk avrai la possibilità di scegliere la banca più adatta alle tue esigenze.</p>
      <p>Per gli expat/stranieri: alcune semplificazioni in corso (apertura conto, requisito CPR, tempi) che rendono la banca più accessibile.</p>
      <p>Cosa serve sapere agli expat italiani</p>
      <p>Per aprire un conto: quasi tutte le banche richiedono CPR- nummer, prova dell’indirizzo, documento d’identità.</p>
      <p>Verifica le fee (spese) e se il servizio è disponibile anche in inglese o supporta clienti stranieri — alcune banche sono molto</p>
      <p>“danesizzate”.</p>
      <p>Controlla se la banca supporta ** MobilePay / IBAN danese**, importante per stipendio, affitto, pagamenti locali.</p>
      <p>Se lavori tra Italia e Danimarca o hai redditi all’estero: segnala questo alla banca, controlla condizioni di cambio valuta e trasferimenti.</p>
      <p>Tieni presente che dal 2026 le banche saranno più digitali e con processo di verifica più rigoroso: avere documenti pronti</p>
      <p>(residenza, lavoro, CPR) aiuta molto.</p>
    ` },
  { n: 14, free: false, title: 'App e info per i trasporti', teaser: 'Moovit, DSB, Rejsekort come app, Pendlerkort: quale scegliere.',
    html: `
      <p>Moovit, DSB, Rejseplanen, DOT, Rejsekort e Pendlerkort.</p>
      <p>Le app che ho menzionato sono strumenti essenziali per chi vive o visita la Danimarca e utilizza i mezzi pubblici. Ecco una breve spiegazione di ciascuna:</p>
      <p>Moovit:  Questa app è una delle più popolari al mondo e offre informazioni in tempo reale su bus, treni, metro e altre opzioni di trasporto pubblico in molte città danesi. È possibile pianificare il percorso, controllare gli orari, vedere le fermate più vicine e ricevere avvisi sui ritardi.</p>
      <p>DSB:</p>
      <p>L'app ufficiale delle</p>
      <p>Ferrovie</p>
      <p>Danesi fornisce informazioni specifiche sui treni, inclusi orari, percorsi e prezzi dei biglietti. È particolarmente utile per chi viaggia spesso in treno.</p>
      <p>Rejseplanen: Questa app è un vero e proprio pianificatore di viaggio che copre l'intera rete di trasporto pubblico danese.</p>
      <p>Consente di trovare il percorso più veloce e conveniente  tra due punti, combinando diversi mezzi di trasporto.</p>
      <p>Altre App utili oltre a queste, esistono altre app che possono essere utili a seconda delle esigenze individuali, come quelle delle singole compagnie di autobus locali o delle regioni.</p>
      <p>Rejsekort e Pendlerkort: qual è la più conveniente?</p>
      <p>Rejsekort — cosa cambia a partire dal 2026</p>
      <p>A partire da maggio 2026, la carta fisica Rejsekort non potrà più essere usata come mezzo di pagamento per i trasporti pubblici in Danimarca.</p>
      <p>Cosa fare:</p>
      <p>a.Scarica l’app “Rejsekort as an app” sul tuo smartphone</p>
      <p>(disponibile su App Store e Google Play).</p>
      <p>b.Attiva il tuo profilo nell’app: potrai registrarti, caricare gli abbonamenti o i biglietti e “check-in” / “check-out”</p>
      <p>direttamente dallo smartphone.</p>
      <p>c.Se hai ancora credito sulla tua carta fisica, chiudi il vecchio Rejsekort: oppure cancella l’accordo di ricarica automatica (“top-up”) e usa tutto il denaro residuo prima della chiusura.</p>
      <p>Se non hai smartphone o preferisci una soluzione non digitale, è prevista un’alternativa dedicata (nuova carta/lettore) che sarà attiva durante il 2026.</p>
      <p>DOT: L'app ufficiale dei trasporti di Copenhagen offre informazioni dettagliate sui bus, metro e treni nella capitale danese.</p>
      <p>Rejsekort anonima o flex</p>
      <p>Rejsekort  personale</p>
      <p>Queste carte NON esisteranno più</p>
      <p>Rejsekort Personale / Personligt</p>
      <p>Nell’app “Rejsekort som app” tu ti registri con i tuoi dati (nome, età, pagamento ecc.) e l’app ti assegna automaticamente la tua categoria</p>
      <p>(bambino, giovane, adulto, pensionato) e le relative tariffe scontate.</p>
      <p>Quindi questa è, di fatto, la versione “personale” del Rejsekort: è legata a te, non è prestabile.</p>
      <p>Non puoi essere anonimo nell’app, perché per usarla devi inserire i tuoi dati personali.</p>
      <p>Rejsekort Flex</p>
      <p>La vecchia Rejsekort Flex (quello fisico che potevi anche prestare a famiglia/amici) esiste ancora come prodotto, ma è un tipo di carta che verrà chiuso durante il 2026 insieme al resto delle carte fisiche.</p>
      <p>Nell’app l’idea è diversa: non è che hai “la tua carta Flex”, ma puoi comunque aggiungere più persone al tuo viaggio e pagare per altri</p>
      <p>(adulti, bambini, bici, cane) direttamente dall’app prima di fare check-in. Quindi la funzione “porto qualcun altro con me” rimane, ma non in modo anonimo e non come carta separata.</p>
      <p>Tradotto semplice: la logica di Flex (viaggiare anche per altri) c’è ancora, ma dentro l’app personale, non come tessera fisica separata.</p>
      <p>Rejsekort Anonimo / Anonymt</p>
      <p>No: l’anonimo NON esiste nell’app.</p>
      <p>La Rejsekort Anonymt è una carta fisica che puoi comprare senza</p>
      <p>CPR, senza registrarti, e si poteva prestare. Ma proprio perché è anonima, non può diventare un profilo nell’app. L’app richiede identificazione, quindi niente anonimato digitale.</p>
      <p>Questo tipo di carta anonima verrà eliminato nel 2026 insieme alle altre carte fisiche. È previsto un’alternativa fisica per chi non usa smartphone / vuole restare non tracciabile, ma sarà un sistema nuovo (lettore + nuova card), non l’Anonimo classico.</p>
      <p>Carta dei pendolari che non esisterà più</p>
      <p>Pendlerkort (abbonamento pendolare)</p>
      <p>Il Pendlerkort continua ad esistere come abbonamento per una zona fissa casa↔lavoro/scuola.</p>
      <p>Però non è dentro “Rejsekort som app”. Lo gestisci tramite l’altra app ufficiale, che si chiama Rejsebillet: lì compri e tieni sul telefono il tuo</p>
      <p>Pendlerkort digitale.</p>
      <p>Quindi: chi fa il pendolare avrà l’abbonamento sul telefono, ma tecnicamente è un prodotto separato rispetto al check-in/check-out della Rejsekort app.</p>
      <p>Quale Carta Scegliere?</p>
      <p>La scelta tra Rejsekort e Pendlerkort dipende dal tuo stile di vita e dalle tue abitudini di viaggio. Se viaggi spesso e in modo irregolare, la Rejsekort è più adatta. Se invece fai sempre lo stesso percorso e hai bisogno di una soluzione economica, la</p>
      <p>Pendlerkort è la scelta migliore.</p>
      <p>Consigli Utili:</p>
      <p>Scarica le app prima di partire: È consigliabile scaricare le app necessarie prima di arrivare in Danimarca per poterle utilizzare subito.</p>
      <p>Controlla le zone tariffarie: Le tariffe dei trasporti pubblici variano in base alle zone tariffarie. Assicurati di controllare quale zona tariffaria copre il tuo percorso.</p>
      <p>Pianifica i tuoi viaggi: Utilizza le app per pianificare i tuoi viaggi in anticipo e assicurati di prendere il mezzo giusto all'orario giusto.</p>
      <p>Copenaghen è divisa in zone. Questa mappa ti potrà essere utile non solo per capire le distanze dal centro, ma per poter fare l’abbonamento giusto con la Pendlerkort.</p>
      <p>Biglietti Orange</p>
      <p>Il biglietto Orange è il biglietto più economico in Danimarca, ma solo per lunghe percorrenze. Questo significa che ha condizioni diverse rispetto agli altri tipi di biglietto: I biglietti Orange vengono messi in vendita circa due mesi prima del giorno di viaggio. Il biglietto è valido solo per la partenza selezionata e non può essere modificato né rimborsato.</p>
      <p>Qual è la differenza tra un biglietto Orange e un biglietto Orange Fri?</p>
      <p>Sia i biglietti Orange che i biglietti Orange Fri sono legati a una partenza specifica. La differenza è che il biglietto DSB Orange Fri può essere rimborsato fino a 30 minuti prima della partenza, mentre il biglietto Orange no. Per questo motivo, i biglietti Orange Fri costano anche un po' di più rispetto ai normali biglietti Orange."</p>
      <p>Come si acquista un biglietto Orange?</p>
      <p>I biglietti Orange possono essere acquistati online tramite l'app DSB e nel negozio online di DSB per i viaggi con DSB o per i viaggi in treno che includono sia DSB che GoCollective.</p>
      <p>Durante tutto l’anno, in particolar modo nei periodi festivi o di ferie, vengono messi a disposizione migliaia di biglietti ancora più economici, sarebbe utile, quindi,  iscriversi alla newsletter di DSB o fare attenzione alle pubblicità, in modo da poter acquistare prima possibile un biglietto. Prima lo si compra e più scelta e più risparmio si ha.</p>
      <p>N.B.: Ulteriori dettagli sui biglietti Orange vai sul sito DSB.dk</p>
    ` },
  { n: 15, free: false, title: 'Asili Nido', teaser: 'Vuggestue, Børnehave, costi, sussidi e come iscriversi.',
    html: `
      <p>In Danimarca i servizi per la prima infanzia fanno parte del sistema educativo pubblico e sono regolati dalla Legge sui servizi per l’infanzia (Dagtilbudsloven). L’obiettivo non è solo custodire i bambini mentre i genitori lavorano, ma favorire lo sviluppo personale, sociale e linguistico fin dai primi anni di vita.</p>
      <p>Tipologie di strutture</p>
      <p>Esistono diversi tipi di servizio, tutti gestiti a livello comunale</p>
      <p>(kommune), ma con la possibilità di scegliere anche strutture private:</p>
      <ul><li>Vuggestue (asilo nido): accoglie bambini dai circa 6 mesi ai 2-3</li></ul>
      <p>anni.</p>
      <ul><li>Børnehave (scuola materna): per bambini da 3 anni fino all’inizio</li></ul>
      <p>della scuola dell’obbligo (6 anni).</p>
      <ul><li>Integreret institution (struttura integrata): accoglie bambini da 0 a 6</li></ul>
      <p>anni, combinando nido e materna.</p>
      <ul><li>Dagpleje (assistente domiciliare): servizio familiare, in cui una</li></ul>
      <p>persona accoglie fino a 4-5 bambini nella propria abitazione, sotto la supervisione del comune.</p>
      <p>Ogni struttura deve rispettare un piano pedagogico comunale</p>
      <p>(pædagogisk læreplan) che include attività di gioco, natura, movimento, apprendimento e creatività.</p>
      <p>Età e diritto al posto</p>
      <p>Ogni bambino con residenza ufficiale in Danimarca ha diritto a un posto in un servizio per l’infanzia a partire da circa 26 settimane di età (6 mesi), fino all’inizio della scuola dell’obbligo. Il diritto riguarda però l’accesso al servizio, non una specifica struttura: il comune deve garantire un posto, ma non necessariamente in quella richiesta dai genitori.</p>
      <p>Costi e sovvenzioni</p>
      <p>Le tariffe sono stabilite dal comune e variano leggermente da zona a zona. Il comune copre almeno il 75% dei costi, mentre le famiglie pagano al massimo il 25%. A titolo indicativo (2025):</p>
      <ul><li>Asilo nido (Vuggestue): circa 4.000–4.700 DKK/mese, a seconda se</li></ul>
      <p>il pranzo è incluso.</p>
      <ul><li>Scuola materna (Børnehave): circa 2.300–3.100 DKK/mese.</li><li>I pasti (madordning) non sempre sono inclusi: verifica con la singola</li></ul>
      <p>struttura.</p>
      <p>Riduzioni e agevolazioni:</p>
      <ul><li>Sussidio in base al reddito (økonomisk friplads): se il reddito</li></ul>
      <p>familiare è basso, la quota può essere ridotta o annullata.</p>
      <ul><li>Sussidio per fratelli (søskendetilskud): se due o più figli</li></ul>
      <p>frequentano contemporaneamente, il secondo paga circa la metà.</p>
      <ul><li>I sussidi vengono richiesti al comune tramite il portale Borger.dk o</li></ul>
      <p>l’ufficio Pladsanvisningen.</p>
      <p>Ammissione e iscrizione</p>
      <ul><li>Il bambino deve avere un numero CPR e una residenza registrata</li></ul>
      <p>nel comune.</p>
      <ul><li>L’iscrizione si effettua online tramite il portale comunale (Digital</li></ul>
      <p>Pladsanvisning).</p>
      <ul><li>È possibile iscrivere il bambino già nei primi mesi di vita,</li></ul>
      <p>soprattutto nelle grandi città dove le liste d’attesa sono lunghe.</p>
      <ul><li>Il comune invia un’offerta di posto (tilbud om plads) quando si</li></ul>
      <p>libera una disponibilità.</p>
      <ul><li>Se si rifiuta il posto proposto, si resta in lista ma si rischia di</li></ul>
      <p>perdere priorità.</p>
      <p>Aspetti pratici da tenere a mente</p>
      <ul><li>Agisci presto: nelle zone di Copenaghen, Aarhus o Odense l’attesa</li></ul>
      <p>può essere di diversi mesi.</p>
      <ul><li>Lingua: la lingua principale è il danese, ma molti educatori sono</li></ul>
      <p>abituati a bambini stranieri. Alcuni asili offrono anche international groups.</p>
      <ul><li>Orari: in media dalle 6:30/7:00 alle 16:30/17:00, ma varia per</li></ul>
      <p>comune.</p>
      <ul><li>Chiusure: durante le vacanze di Natale, Pasqua e in parte d’estate;</li></ul>
      <p>se chiudono, il comune deve offrire una soluzione alternativa.</p>
      <ul><li>Periodo di ambientamento (indkøring): dura alcuni giorni o</li></ul>
      <p>settimane e richiede la presenza graduale dei genitori.</p>
      <p>Età del bambino</p>
      <p>Tipo di struttura</p>
      <p>Indicazione dei costi mensili</p>
      <p>Note principali</p>
      <p>0–2/3 anni</p>
      <p>Vuggestue ca. 4.000–4.700 DKK</p>
      <p>Attività sensoriali e motorie</p>
      <p>3–6 anni</p>
      <p>Børnehave ca. 2.300–3.100 DKK</p>
      <p>Preparazione alla scuola</p>
      <p>0–6 anni</p>
      <p>Integreret institution</p>
      <p>Varia</p>
      <p>Nido e materna nello stesso spazio</p>
      <p>0–5 anni</p>
      <p>Dagpleje ca. 2.000–3.000 DKK</p>
      <p>Ambiente familiare, piccoli gruppi</p>
      <p>Comunicazioni: avvengono spesso tramite app come Aula o BørneIntra, dove vengono segnate presenze, foto e avvisi quotidiani</p>
      <p>Riepilogo utile</p>
      <ul><li>Fonti ufficiali</li><li>lifeindenmark.borger.dk – Regole per l’infanzia</li><li>international.kk.dk – Costi a Copenaghen</li><li>Retsinformation.dk – Dagtilbudsloven</li><li>Skole-forældre.dk – Servizi per la prima infanzia</li></ul>
      <p>In Danimarca, l'istruzione è obbligatoria per i bambini dai 6 ai 16 anni.</p>
      <p>Tuttavia, i bambini possono iniziare la scuola primaria (Folkeskole) a 5 o 6 anni. Per l’iter burocratico si va in comune.</p>
      <p>Iscrizione alla scuola:</p>
      <p>Età di ingresso: I bambini in Danimarca vengono generalmente iscritti a scuola all'inizio dell'anno in cui compiono 6 anni. Tuttavia, come previsto dalla **Folkeskolelovens § 54**, è possibile iscriverli già a partire dai 5 anni.</p>
      <p>Classi: La scuola primaria danese, la "Folkeskole," copre dal 0. al 9. o</p>
      <ul><li>anno (equivalente alle scuole elementari e medie in Italia). Il primo</li></ul>
      <p>anno è conosciuto come "0. klasse" o "børnehaveklasse", una sorta di anno preparatorio.</p>
      <p>Scuola dell'infanzia: Prima della Folkeskole, la maggior parte dei bambini frequenta il "børnehave" (scuola dell'infanzia) da quando hanno circa 3 anni fino a 5 o 6 anni. Questo non è obbligatorio ma è molto comune.</p>
      <p>Iscrizione: I genitori devono iscrivere i loro figli alla scuola primaria nella primavera dell'anno in cui il bambino compie 6 anni. La scuola a cui il bambino è assegnato è solitamente quella più vicina alla residenza della famiglia, ma i genitori possono anche scegliere un'altra scuola pubblica o privata.</p>
      <p>La scuola in Danimarca è gratuita e il sistema educativo è noto per la sua enfasi sull'apprendimento attivo, il lavoro di gruppo e lo sviluppo delle capacità individuali.</p>
    ` },
  { n: 16, free: false, title: 'Scuola dell\'obbligo', teaser: 'Folkeskole, iscrizione, novità 2025 per le famiglie expat.',
    html: `
      <p>Novità sulla scuola dell’obbligo in Danimarca (2025)</p>
      <p>Nel 2025 sono entrate in vigore importanti modifiche alla legge sulla scuola danese, la</p>
      <p>'Lov om</p>
      <p>Folkeskolen', che definisce il funzionamento della scuola dell’obbligo (Folkeskole). Le novità fanno parte del programma nazionale di riforma chiamato 'Folkeskolens</p>
      <p>Kvalitetsprogram</p>
      <p>–</p>
      <p>Frihed og</p>
      <p>Fordybelse'</p>
      <p>(Libertà e Approfondimento).</p>
      <p>Principali novità legislative</p>
      <ul><li>La riforma comprende 33 iniziative per migliorare qualità,</li></ul>
      <p>flessibilità e autonomia delle scuole danesi.</p>
      <ul><li>Le modifiche entrano progressivamente in vigore dal 1° gennaio</li></ul>
      <p>2025 e per l’anno scolastico 2025/26.</p>
      <ul><li>Ecco i punti principali:</li><li>Riduzione del numero di prove obbligatorie da otto a sei, con</li></ul>
      <p>cambiamenti nelle modalità delle prove orali e scritte.</p>
      <ul><li>Maggiore autonomia alle scuole e ai consigli scolastici locali: meno</li></ul>
      <p>vincoli centrali, più decisioni comunali.</p>
      <ul><li>Abolizione dell’obbligo dei 45 minuti quotidiani di attività fisica:</li></ul>
      <p>sarà facoltativo e deciso a livello locale.</p>
      <ul><li>Revisione delle 'læreplaner' (piani di studio): le scuole potranno</li></ul>
      <p>adattarle alle proprie esigenze.</p>
      <ul><li>Possibilità di introdurre valutazioni con voti già dalla 6ª o 7ª classe,</li></ul>
      <p>se la scuola lo ritiene utile.</p>
      <p>Riduzione dei vincoli sulle competenze di insegnamento</p>
      <p>('undervisningskompetence') nelle prime classi, per favorire maggiore flessibilità organizzativa.</p>
      <ul><li>Graduale eliminazione della 10ª classe ('10th grade') dalle scuole</li></ul>
      <p>pubbliche entro il 2030.</p>
      <p>Cosa cambia per le famiglie expat italiane</p>
      <ul><li>In Danimarca l’istruzione è obbligatoria dai 6 ai 16 anni, ma non è</li></ul>
      <p>obbligatoria la frequenza della scuola pubblica: i genitori possono scegliere scuole private o l’istruzione a casa (homeschooling), purché rispettino gli standard nazionali.</p>
      <ul><li>Con le nuove regole, ogni comune ('kommune') può organizzare in</li></ul>
      <p>modo autonomo il calendario, gli orari e alcune materie, quindi è importante informarsi localmente.</p>
      <ul><li>Alcune prove e valutazioni sono state modificate: utile chiedere in</li></ul>
      <p>anticipo alla scuola come vengono gestite le prove finali.</p>
      <ul><li>La maggiore flessibilità consente soluzioni personalizzate per</li></ul>
      <p>studenti stranieri o bilingue.</p>
      <ul><li>Per chi sceglie scuole private o internazionali, è consigliato</li></ul>
      <p>verificare la corrispondenza del percorso con la Folkeskole danese.</p>
      <p>Fonti ufficiali e approfondimenti</p>
      <ul><li>Ministero dell’Istruzione danese (UVM.dk) – Folkeskolens Kvalitetsprogram</li><li>Retsinformation.dk – Lov om Folkeskolen (LTA/2025/1100)</li><li>Skole-forældre.dk – Panoramica sulle nuove regole</li><li>EURYDICE / Commissione Europea – Riforme nazionali dell’istruzione</li></ul>
      <p>generale in Danimarca</p>
    ` },
  { n: 17, free: false, title: 'Scuole Superiori e Licei Internazionali', teaser: 'Gymnasium, STX/HHX/HTX/HF, scuole internazionali a Copenaghen con costi.',
    html: `
      <ul><li>Il Gymnasium in Danimarca</li></ul>
      <p>Il Gymnasium è la scuola secondaria superiore generale e accademica, corrispondente al nostro liceo.</p>
      <p>In Danimarca esistono diversi percorsi che rientrano in questo livello di studi:</p>
      <p>STX (Studentereksamen)</p>
      <p>È il programma più diffuso, di tipo generale, con forte attenzione alle materie classiche, scientifiche, linguistiche e sociali.</p>
      <p>Durata: 3 anni.</p>
      <p>Struttura: un breve foundation course (circa 3 mesi) seguito da un specialized study programme di circa 2 anni e 9 mesi.</p>
      <p>HHX (Higher Commercial Examination Programme)</p>
      <p>È orientato a materie economiche, aziendali, commercio internazionale e lingue.</p>
      <p>Durata: 3 anni.</p>
      <p>Utile per chi intende proseguire verso studi in economia, business, management o commercio.</p>
      <p>HTX (Higher Technical Examination Programme)</p>
      <p>Si concentra su materie scientifiche, tecnologiche e applicate.</p>
      <p>Durata: 3 anni.</p>
      <p>Adatto a studenti interessati a ingegneria, informatica, scienze naturali e tecnologie innovative.</p>
      <p>HF (Higher Preparatory Examination Programme)</p>
      <p>È più breve, dura 2 anni. È pensato per studenti che desiderano una preparazione più rapida per accedere a certi percorsi universitari o professionali.</p>
      <p>Accesso e finalità</p>
      <p>L’ammissione al Gymnasium avviene di solito dopo la scuola secondaria inferiore (Folkeskole, 9° o 10° anno).</p>
      <p>Il diploma finale (studentereksamen) permette l’accesso alle università danesi e viene riconosciuto anche in tutta l’UE.</p>
      <p>Ogni percorso è pensato per bilanciare materie comuni</p>
      <p>(danese, inglese, matematica, scienze) con specializzazioni legate all’indirizzo scelto.</p>
      <p>Fonti ufficiali</p>
      <p>Portale per studenti: UG.dk (in danese, completo e sempre aggiornato).</p>
      <p>Ministero danese dell’Istruzione (in inglese): eng.uvm.dk.</p>
      <ul><li>Licei e Scuole Internazionali a Copenaghen</li></ul>
      <p>Copenaghen offre diverse possibilità per famiglie expat che vogliono un percorso scolastico internazionale, adatto a studenti stranieri o a chi desidera ottenere un titolo riconosciuto a livello globale.</p>
      <p>Principali scuole:</p>
      <ul><li>Copenhagen International School (CIS)</li></ul>
      <p>Curriculum: International Baccalaureate (PYP, MYP, Diploma).</p>
      <p>Lingua: Inglese.</p>
      <p>Età: 3–18 anni.</p>
      <p>Costi: da circa 141.000 a 197.000 DKK/anno a seconda del livello scolastico.</p>
      <p>Pro: altissimo standard educativo, insegnanti internazionali, IB riconosciuto in tutto il mondo.</p>
      <p>Contro: costi molto elevati e liste d’attesa frequenti.</p>
      <ul><li>International School of Hellerup (ISH)</li></ul>
      <p>Curriculum: International Baccalaureate (PYP, MYP, Diploma).</p>
      <p>Lingua: Inglese.</p>
      <p>Età: 3–19 anni.</p>
      <p>Costi: circa 120.000–180.000 DKK/anno.</p>
      <p>Pro: ambiente internazionale e inclusivo, prezzi leggermente più accessibili rispetto a CIS.</p>
      <p>Contro: costi comunque alti e disponibilità limitata.</p>
      <ul><li>European School Copenhagen (ESC)</li></ul>
      <p>Curriculum: europeo, con sezioni linguistiche (inglese, danese, francese).</p>
      <p>Lingua: più opzioni (inglese, francese, danese).</p>
      <p>Età: dall’infanzia fino al Gymnasium.</p>
      <p>Costi: gratuita (scuola pubblica internazionale).</p>
      <p>Pro: unico liceo internazionale pubblico in città, altissima qualità.</p>
      <p>Contro: posti molto limitati, accesso con criteri stringenti.</p>
      <ul><li>Birkerød Gymnasium (a nord di Copenaghen)</li></ul>
      <p>Curriculum: IB Diploma Programme + opzioni danesi (STX, HF).</p>
      <p>Lingua: Inglese e Danese.</p>
      <p>Costi: essendo pubblico, è molto più economico rispetto a</p>
      <p>CIS o ISH (solo eventuali contributi).</p>
      <p>Pro: ottimo equilibrio tra programma internazionale e sistema danese, IB riconosciuto.</p>
      <p>Contro: distanza dal centro città, meno risorse rispetto alle private top-level.</p>
      <p>Guida rapida: Gymnasium e Licei Internazionali a Copenaghen</p>
      <ul><li>Gymnasium in Danimarca</li></ul>
      <p>Durata: normalmente 3 anni (STX, HHX, HTX).</p>
      <p>Struttura: Foundation course (3 mesi) + Specialized study programme</p>
      <p>(2 anni e 9 mesi).</p>
      <p>Altri percorsi: HF (2 anni, più breve e preparatorio).</p>
      <p>Fonti ufficiali: eng.uvm.dk (Ministero dell’Istruzione), ug.dk (portale studenti).</p>
      <ul><li>Scuole internazionali a Copenaghen</li></ul>
      <p>Scuola</p>
      <p>Curriculum</p>
      <p>Lingua</p>
      <p>Costi indicativi</p>
      <p>Note</p>
      <p>Sankt Petri Schule</p>
      <p>Birkerød Gymnasium</p>
      <p>European School Copenhagen</p>
      <p>Copenhagen International School (CIS)</p>
      <p>International School of Hellerup (ISH)</p>
      <p>Tedesco + danese</p>
      <p>(Gymnasium con studentereksamen)</p>
      <p>IB + STX/HF</p>
      <p>Curriculum europeo</p>
      <p>IB (Primary–Diploma)</p>
      <p>IB (PYP–DP)</p>
      <p>Tedesco</p>
      <p>Inglese + danese</p>
      <p>Inglese</p>
      <p>Inglese</p>
      <p>Inglese, danese, francese</p>
      <p>A pagamento</p>
      <p>Gratuita (pubblica)</p>
      <p>Pubblico, costi bassi</p>
      <p>141.000–197.000 DKK/anno</p>
      <p>120.000–180.000 DKK/anno</p>
      <p>Posti molto limitati, alta domanda.</p>
      <p>Alternativa ibrida, IB meno costoso.</p>
      <p>Top internazionale, ottima reputazione, costi alti.</p>
      <p>Internazionale, un po’ meno costosa di CIS.</p>
      <p>Ottima per famiglie germanofone, storia prestigiosa.</p>
    ` },
  { n: 18, free: false, title: 'Accademie e Università', teaser: 'Akademiuddannelser, istituti principali, città e campus.',
    html: `
      <p>Akademiuddannelser:</p>
      <p>formazione accademica professionale breve in Danimarca</p>
      <p>Akademiuddannelser (abbreviate spesso in 'Akademi') sono percorsi di formazione post-qualifica pensati per adulti che hanno già completato una formazione professionale o un diploma, e che desiderano aggiornare o ampliare le proprie competenze senza smettere di lavorare. Si tratta di programmi di formazione superiore breve, collocati al livello 5 del quadro nazionale danese delle qualifiche (Den Danske Kvalifikationsramme), quindi immediatamente sotto al livello universitario.</p>
      <p>Struttura e durata</p>
      <p>Un percorso completo di Akademiuddannelse corrisponde a 60 crediti</p>
      <p>ECTS, composto da moduli obbligatori, moduli a scelta e un progetto finale</p>
      <p>(afgangsprojekt). La durata media, se seguita a tempo pieno, è di circa 1 anno, ma la maggior parte degli studenti frequenta a tempo parziale, nell’arco di 2–3 anni.</p>
      <p>Requisiti di accesso</p>
      <p>Per iscriversi è necessario aver completato una formazione secondaria o professionale danese o equivalente, e avere almeno due anni di esperienza lavorativa rilevante. In mancanza di requisiti formali, è possibile una valutazione delle competenze (realkompetencevurdering).</p>
      <p>Costi e finanziamento</p>
      <p>Le Akademiuddannelser non sono coperte dal sussidio SU, poiché destinate a lavoratori adulti. I corsi sono a pagamento, ma spesso finanziabili dal datore di lavoro o da programmi regionali di formazione continua.</p>
      <p>Istituto</p>
      <p>Città/Campus principali</p>
      <p>Note</p>
      <p>KEA – Københavns</p>
      <p>Erhvervsakademi</p>
      <p>Copenaghen</p>
      <p>Marketing, design, IT, business</p>
      <p>Cphbusiness</p>
      <p>Copenaghen, Lyngby, Hillerød, Gestione, finanza, commercio</p>
      <p>Zealand –</p>
      <p>Sjællands</p>
      <p>Næstved, Roskilde, Køge, Slagelse</p>
      <p>Economia, turismo, logistica, IT</p>
      <p>EASV –</p>
      <p>Erhvervsakademi</p>
      <p>Esbjerg, Sønderborg</p>
      <p>Ingegneria, commercio, EADania</p>
      <p>Randers, Viborg, Skive, Hobro, Business, tecnologia, UCL</p>
      <p>Erhvervsakademi</p>
      <p>Odense, Vejle, Svendborg</p>
      <p>Pedagogia, salute, leadership</p>
      <p>UC Syd – University</p>
      <p>College South</p>
      <p>Haderslev, Kolding, Esbjerg, Aabenraa</p>
      <p>Educazione, sanità, management</p>
      <p>A chi sono rivolte</p>
      <p>Sono adatte a professionisti che desiderano specializzarsi, fare carriera o cambiare ruolo. Gli ambiti più comuni includono management, marketing, amministrazione, energia, pedagogia, salute, turismo e comunicazione.</p>
      <p>Differenze rispetto ad altri percorsi</p>
      <p>Un’Akademiuddannelse è più breve e pratica rispetto a una</p>
      <p>Diplomuddannelse, ma più avanzata rispetto a una formazione professionale. Può servire anche come ponte verso livelli successivi di istruzione.</p>
      <p>Dove si possono seguire</p>
      <p>Le Akademiuddannelser vengono offerte in numerosi istituti e città danesi.</p>
      <p>Ecco l’elenco aggiornato:</p>
      <p>UC Syd – University</p>
      <p>College South</p>
      <p>Haderslev, Kolding, Esbjerg, Aabenraa</p>
      <p>Educazione, sanità, management</p>
      <p>University College</p>
      <p>Absalon</p>
      <p>Næstved, Roskilde, Slagelse, Scienze sociali, salute, Professionshøjskol en Metropol (ora</p>
      <p>Copenaghen, Frederiksberg, Servizi sociali, educazione, salute</p>
      <p>Aarhus Business</p>
      <p>Academy</p>
      <p>Aarhus</p>
      <p>Business, marketing, VIA University</p>
      <p>College</p>
      <p>Aarhus, Horsens, Herning, Holstebro, Design, ingegneria, management</p>
      <p>UCN – University</p>
      <p>College Nordjylland</p>
      <p>Aalborg, Hjørring, Thisted</p>
      <p>Educazione, salute, business e IT</p>
      <p>Le Akademiuddannelser vengono offerte in numerosi istituti e città danesi. Ecco l’elenco aggiornato:</p>
      <p>Molti istituti offrono corsi sia in presenza che online, generalmente in lingua danese, con alcune eccezioni in inglese per moduli specifici.</p>
      <ul><li>Approfondimenti utili</li><li>finduddannelse.dk – Guida alle Akademiuddannelser</li><li>ucsyd.dk – Spiegazione ufficiale</li><li>eadania.dk – Offerta formativa aggiornata</li></ul>
      <p>🇩🇰 Università in Danimarca: Panoramica</p>
      <p>La Danimarca conta otto università pubbliche riconosciute, tutte con un forte orientamento alla ricerca e un'ampia offerta di corsi in inglese, soprattutto a livello di Master e PhD.</p>
      <p>Ecco l'elenco completo:</p>
      <ul><li>Università di Copenaghen (KU) – Fondata nel 1479, è la più antica e</li></ul>
      <p>prestigiosa del paese, spesso classificata tra le prime 100 al mondo.</p>
      <p>Vanta nove premi Nobel tra i suoi affiliati.</p>
      <ul><li>Università di Aarhus (AU) – Rinomata per la sua</li></ul>
      <p>eccellenza in scienze sociali, medicina e scienze naturali. È la seconda università più grande della Danimarca.</p>
      <ul><li>Università Tecnica della Danimarca (DTU) – Specializzata in</li></ul>
      <p>ingegneria e tecnologia, è tra le migliori università tecniche d'Europa.</p>
      <ul><li>Università di Aalborg (AAU) – Conosciuta per il suo approccio</li></ul>
      <p>didattico basato su progetti (PBL), offre programmi innovativi in ingegneria, scienze sociali e IT.</p>
      <ul><li>Università della Danimarca Meridionale (SDU) – Offre una vasta</li></ul>
      <p>gamma di programmi, con campus in diverse città tra cui Odense e Sønderborg.</p>
      <ul><li>Università di Roskilde (RUC) – Famosa per il suo approccio</li></ul>
      <p>interdisciplinare e l'apprendimento basato su problemi reali.</p>
      <ul><li>Copenhagen Business School (CBS) – Una delle principali business</li></ul>
      <p>school europee, offre programmi focalizzati su economia, management e business internazionale.</p>
      <ul><li>IT University of Copenhagen (ITU) – Specializzata in informatica,</li></ul>
      <p>design digitale e comunicazione.</p>
      <p>Requisiti di Ammissione</p>
      <p>Programmi di Laurea Triennale (Bachelor)</p>
      <ul><li>Diploma di scuola superiore: Deve essere equivalente al sistema</li></ul>
      <p>danese. Gli studenti italiani devono verificare la corrispondenza del loro diploma attraverso il sito ufficiale.</p>
      <ul><li>Competenze linguistiche: La maggior parte dei programmi richiede la</li></ul>
      <p>conoscenza dell'inglese (TOEFL, IELTS) o del danese, a seconda del corso.</p>
      <ul><li>Sistema di quote: Le ammissioni sono gestite tramite il sistema</li></ul>
      <p>Coordinated Admission (KOT), con scadenze solitamente a metà marzo per l'inizio a settembre.</p>
      <p>Programmi di Laurea Magistrale (Master)</p>
      <ul><li>Laurea triennale: Deve essere riconosciuta e pertinente al programma</li></ul>
      <p>scelto.</p>
      <ul><li>Prova di lingua: Necessaria per dimostrare la competenza in inglese o</li></ul>
      <p>danese.</p>
      <ul><li>Documentazione: Curriculum vitae, lettera motivazionale e, in alcuni</li></ul>
      <p>casi, lettere di raccomandazione .</p>
      <p>Classifiche Internazionali</p>
      <p>Secondo le classifiche QS World University Rankings 2025:</p>
      <ul><li>Università di Copenaghen: 100ª posizione mondiale.</li><li>Università Tecnica della Danimarca (DTU): 109ª posizione.</li><li>Università di Aarhus: 144ª posizione.</li><li>Università di Aalborg: 306ª posizione.</li><li>Università della Danimarca Meridionale (SDU): 324ª posizione.</li></ul>
      <p>Costi e Finanziamenti</p>
      <ul><li>Cittadini UE/SEE: L'istruzione è gratuita.</li><li>Studenti internazionali: Le tasse universitarie variano tra 6.000 e</li><li>000 EUR all'anno, a seconda del programma e dell'università.</li><li>Borse di studio: Disponibili per studenti meritevoli e possono coprire</li></ul>
      <p>parzialmente o totalmente le tasse e le spese di soggiorno</p>
      <p>Curiosità e informazioni poco conosciute</p>
      <ul><li>Kaospilot: Un'istituzione educativa unica che combina</li></ul>
      <p>imprenditorialità, design e leadership creativa. Fondata da Uffe Elbæk, è conosciuta per il suo approccio non convenzionale all'educazione.</p>
      <ul><li>Approccio</li></ul>
      <p>didattico:</p>
      <p>Molte università danesi utilizzano l'apprendimento basato su problemi</p>
      <p>(PBL), promuovendo la collaborazione e la risoluzione pratica dei problemi.</p>
      <ul><li>Lingua: Sebbene molti programmi siano offerti in inglese, imparare il</li></ul>
      <p>danese può essere vantaggioso per l'integrazione e le opportunità lavorative post-laurea.</p>
      <ul><li>Risorse Utili</li><li>Study in Denmark: studyindenmark.dk</li><li>Ministero dell'Istruzione danese: ufm.dk</li><li>Coordinated Admission (KOT): optagelse.dk</li></ul>
      <p>Cosa si intende per "Programmi di laurea magistrale"?</p>
      <p>In Danimarca (come nel resto d’Europa, grazie al sistema di Bologna), l’università è divisa in tre cicli:</p>
      <ul><li>Bachelor’s Degree (Laurea triennale) – 3 anni</li><li>Master’s Degree (Laurea magistrale) – 2 anni</li><li>PhD (Dottorato di ricerca) – 3 anni</li></ul>
      <p>Quindi, quando parlo di "Programmi di laurea magistrale", mi riferisco a quelli accessibili solo dopo aver ottenuto una laurea triennale o equivalente.</p>
      <p>Chi può iscriversi a un'università danese?</p>
      <ul><li>Chi NON ha mai fatto l’università (diplomati)</li></ul>
      <p>Può iscriversi a un Bachelor’s Degree (Laurea triennale).</p>
      <p>Requisiti principali:</p>
      <ul><li>Avere un diploma equivalente a quello danese. Il diploma italiano di</li></ul>
      <p>maturità (liceo, tecnico, ecc.) è valido, ma potrebbero richiedere anche corsi integrativi a seconda dell'indirizzo.</p>
      <ul><li>Avere certificazione linguistica: di solito inglese (IELTS, TOEFL) o</li></ul>
      <p>danese, se il corso è in danese.</p>
      <ul><li>Iscrizione via il portale optagelse.dk entro metà marzo (per iniziare a</li></ul>
      <p>settembre).</p>
      <ul><li>Convalida del diploma: puoi vedere le equivalenze qui</li></ul>
      <p>→ ufm.dk - valutazione titoli</p>
      <ul><li>Chi ha già una laurea triennale italiana (o estera)</li></ul>
      <p>Può iscriversi a un Master’s Degree (Laurea magistrale), se la laurea è ritenuta compatibile.</p>
      <p>In questo caso:</p>
      <ul><li>Devi candidarti direttamente sul sito dell’università che offre il</li></ul>
      <p>Master.</p>
      <ul><li>Servono documenti tipo: diploma di laurea con esami sostenuti, CV,</li></ul>
      <p>lettera motivazionale, certificati di lingua.</p>
      <ul><li>Alcuni programmi richiedono anche esperienze lavorative o un</li></ul>
      <p>portfolio (soprattutto in ambito creativo).</p>
      <ul><li>Elenco dei Master → studyindenmark.dk - Master programme.</li><li>Chi ha già una laurea ma vuole cambiare completamente percorso</li></ul>
      <p>Hai due opzioni:</p>
      <p>A. Iscriverti di nuovo a un Bachelor’s Degree</p>
      <p>✔ Si può fare anche se hai già una laurea.</p>
      <p>✔ L’università valuta caso per caso se farti accedere direttamente o se convalidare alcuni esami.</p>
      <p>❗ Attenzione: alcune università potrebbero non accettare che ti iscriva a un corso “inferiore” a quello che hai già, a meno che tu non dimostri motivi validi (es. cambio campo).</p>
      <p>B. Iscriverti a un Top-Up Bachelor</p>
      <p>È un programma di 1-1,5 anni pensato per chi ha già un diploma accademico di tipo professionale (tipo lauree brevi o tecniche), utile per ottenere un titolo completo danese.</p>
      <p>Attenzione a questi dettagli 👇🏻</p>
      <ul><li>Alcuni corsi sono a numero chiuso e hanno una media minima da</li></ul>
      <p>rispettare (come medicina, psicologia, architettura).</p>
      <ul><li>Se il corso è in danese, spesso serve il Test i Dansk 3 o equivalenti</li></ul>
      <p>(es: Studieprøven).</p>
      <ul><li>I programmi in inglese sono molto richiesti dagli internazionali, ma c’è</li></ul>
      <p>molta selezione nei Master.</p>
      <p>Mare del Nord - Mar Baltico</p>
      <p>Grenen (Skagen)</p>
      <p>Mini Guida: Convalida dei titoli di studio italiani in Danimarca</p>
      <ul><li>Autorità competente</li></ul>
      <p>Danish Agency for Higher Education and Science (Styrelsen for</p>
      <p>Forskning og Uddannelse)</p>
      <p>È l’ente che si occupa di valutare i titoli esteri in Danimarca.</p>
      <p>Fa parte del Ministero dell’Istruzione Superiore e della Scienza.</p>
      <p>Sede: Haraldsgade 53, DK-2100 Copenhagen Ø</p>
      <p>Email: ufs@ufm.dk</p>
      <p>Tel: +45 72 31 78 00</p>
      <ul><li>www.ufm.dk</li></ul>
      <p>Link diretto:</p>
      <p>https://ufm.dk/en/education/recognition-and-transparency/ recognition-guide/?set_language=en</p>
      <ul><li>A cosa serve la valutazione:</li><li>Per candidarsi a un lavoro in Danimarca dove il datore richiede</li></ul>
      <p>equivalenze formali.</p>
      <ul><li>Per accedere a corsi di laurea o master nelle università danesi.</li><li>Per alcune professioni regolamentate (medico, infermiere,</li></ul>
      <p>insegnante, ecc.) serve la valutazione come primo passo, ma la licenza finale viene rilasciata da autorità professionali specifiche.</p>
      <ul><li>Documenti richiesti</li><li>Copia del diploma/laurea (in italiano).</li><li>Transcript of records (certificato con voti e corsi sostenuti).</li><li>Copia di eventuali altri certificati (master, specializzazioni).</li><li>Traduzione in inglese o danese dei documenti principali</li></ul>
      <p>(spesso richiesta).</p>
      <ul><li>Copia del passaporto o carta d’identità.</li></ul>
      <p>N.B: Tutti i documenti vanno inviati in copia leggibile (non serve l’originale).</p>
      <ul><li>Come inviare la domanda</li></ul>
      <p>Puoi scegliere due modalità :</p>
      <ul><li>Online tramite NemID/MitID (solo se sei già residente in</li></ul>
      <p>Danimarca).</p>
      <ul><li>Per email o posta tradizionale</li></ul>
      <p>→allegando il modulo ufficiale compilato e i documenti.</p>
      <ul><li>Tempi</li></ul>
      <p>Normalmente: entro 2 mesi dalla ricezione della domanda. Per professioni regolamentate, i tempi possono essere piùl unghi.</p>
      <p>https://ufm.dk/en/education/recognition-and-transparency/get- assessment/background-report/skema_mgldok_en.pdf</p>
      <p>Modulo ufficiale (in inglese per il riconoscimento dei titoli)</p>
      <ul><li>Esempio pratico:</li></ul>
      <p>"Maria, 22 anni, ha un diploma di liceo scientifico in Italia. Vuole fare</p>
      <p>Medicina in Danimarca. Deve iscriversi al Bachelor in Medicina via</p>
      <p>Optagelse.dk entro marzo, fornendo il diploma e una certificazione di lingua. Se invece ha già fatto 3 anni di biologia in Italia e vuole continuare con un Master in Biotecnologie, dovrà candidarsi direttamente presso l’università che lo offre, inviando anche il suo transcript accademico e un buon CV."</p>
      <p>Cos'è un "transcript accademico"?</p>
      <p>Il transcript accademico è un documento ufficiale rilasciato dall'università che attesta:</p>
      <ul><li>Gli esami sostenuti</li><li>I voti ottenuti</li><li>I crediti acquisiti (in Italia, CFU; in Danimarca, ECTS)</li><li>La durata del corso di studi</li><li>L'anno di conseguimento del titolo</li></ul>
      <p>È fondamentale per le università danesi valutare la compatibilità del tuo percorso di studi precedente con il programma a cui intendi iscriverti.</p>
      <p>Se hai studiato in Italia, puoi richiederlo alla segreteria della tua università; spesso è disponibile anche in inglese.</p>
      <p>È gratuito iscriversi a un nuovo corso universitario in Danimarca se si possiede già una laurea?</p>
      <p>Sì, l'istruzione superiore in Danimarca è gratuita per i c i t t a d i n i d e l l ' U E / S E E e d e l l a S v i z z e r a , indipendentemente dal numero di titoli di studio già conseguiti.</p>
      <p>Tuttavia, è importante notare che:</p>
      <ul><li>Fino al 2019, esisteva una normativa chiamata uddannelsesloft</li></ul>
      <p>("tetto educativo") che limitava l'accesso a un secondo corso di laurea gratuito. Questa legge è stata abrogata nel dicembre 2019, quindi attualmente non ci sono restrizioni per chi desidera intraprendere un nuovo percorso di studi, anche se si possiede già una laurea.</p>
      <ul><li>Le università possono valutare caso per caso l'ammissione a un</li></ul>
      <p>nuovo corso di laurea, soprattutto se si tratta di un livello inferiore rispetto al titolo già posseduto. È consigliabile contattare direttamente l'istituzione per informazioni dettagliate.</p>
      <p>Università meno conosciute ma di qualità</p>
      <p>Oltre alle università più note, esistono istituzioni meno conosciute che offrono programmi di alta qualità:</p>
      <ul><li>Royal Danish Academy of Fine Arts: Fondata nel 1754, è una delle più</li></ul>
      <p>antiche accademie d'arte d'Europa, specializzata in arti visive, architettura e design. Wikipedia.</p>
      <ul><li>VIA University College: Offre programmi professionali in ambiti come</li></ul>
      <p>insegnamento, ingegneria e design.</p>
      <ul><li>University College Copenhagen (KP): Focalizzata su programmi</li></ul>
      <p>professionali in educazione, sanità e servizi sociali.</p>
      <p>Programmi di Studio in Inglese</p>
      <p>Molte università danesi offrono programmi di laurea magistrale in inglese, rendendo l'accesso più agevole per gli studenti internazionali.</p>
      <p>Tuttavia, i programmi di laurea triennale in inglese sono meno comuni.</p>
      <p>È importante verificare la lingua di insegnamento del programma prescelto.</p>
      <p>Requisiti Linguistici</p>
      <p>Per i programmi in inglese, è generalmente richiesto un certificato di competenza linguistica come IELTS o TOEFL.</p>
      <p>Per i programmi in danese, è necessario superare esami come il</p>
      <p>"Studieprøven i dansk" o il "Danskprøve 3". educations.com+1ku.dk+1</p>
      <p>Università di Copenaghen</p>
      <p>Università di Copenaghen</p>
      <p>Prima indagine su diversità e inclusione</p>
      <p>L’Università di Copenaghen (KU) ha inserito nella sua strategia la diversità, l’uguaglianza e l’inclusione. Con la prima indagine ufficiale di inclusione, ora ha anche una base dati solida per lavorare. Hanno partecipato oltre 8.000 studenti e dipendenti.</p>
      <p>Le 5 conclusioni più sorprendenti</p>
      <ul><li>Le minoranze politiche si sentono escluse – alcuni studenti di destra</li></ul>
      <p>dichiarano di non osare esprimere le proprie opinioni per paura di esclusione sociale. Il 39% degli studenti che si definiscono minoranza politica dice di non potersi sentire sé stesso (contro il 9% degli altri).</p>
      <ul><li>Gli studenti e i dipendenti internazionali vivono KU come “chiuso” –</li></ul>
      <p>barriere linguistiche e culturali, esclusione dalla vita sociale, meno opportunità di carriera. Il 35% degli impiegati internazionali riferisce difficoltà linguistiche.</p>
      <ul><li>Il personale tecnico-amministrativo (TAP) si sente di serie B – molti</li></ul>
      <p>segnalano di essere sottovalutati e trattati con superiorità dai docenti/ricercatori (VIP).</p>
      <ul><li>Le strutture fisiche discriminano – il 42% degli studenti con disabilità</li></ul>
      <p>fisica ha difficoltà a partecipare alla didattica. Un terzo dei dipendenti con disabilità o neurodivergenza si sente spesso escluso.</p>
      <ul><li>Alcuni studenti nascondono parti della loro identità – studenti</li></ul>
      <p>minoritari (per genere, religione, sessualità, salute mentale) dicono di mascherare chi sono. Il 21% degli studenti trans non sente di poter essere sé stesso.</p>
      <p>Le 5 conclusioni meno sorprendenti</p>
      <ul><li>La maggioranza è soddisfatta – 82% del personale e 74% degli</li></ul>
      <p>studenti afferma di potersi sentire sé stesso a KU. L’84% dice di sentirsi accolto.</p>
      <ul><li>La cultura danese dell’alcol crea barriere – feste e bar del venerdì</li></ul>
      <p>rendono difficile partecipare a chi non beve. Studenti musulmani e astemi si sentono esclusi.</p>
      <ul><li>Regole non scritte e codici sociali – il 22% degli studenti trova</li></ul>
      <p>difficile orientarsi tra le regole implicite (voti alti, associazioni, lavoro studentesco).</p>
      <ul><li>Mancanza di rappresentanza e modelli di ruolo – il 22% degli</li></ul>
      <p>studenti non trova modelli nel proprio corso. Troppi docenti “uomini bianchi anziani”, poca diversità etnica e di genere.</p>
      <ul><li>Il sessismo è ancora un problema – il 9% delle donne e il 5% degli</li></ul>
      <p>uomini percepiscono una cultura sessista.</p>
      <p>Dottorande e professoresse raccontano commenti sessisti regolari.</p>
    ` },
  { n: 19, free: false, title: 'Vita studentesca e alloggi', teaser: 'Il costo della vita in Danimarca è relativamente alto. Gli studenti dovrebbero prevedere un budget mensile tra €800 e €1.200 per coprire…',
    html: `
      <p>Il costo della vita in Danimarca è relativamente alto. Gli studenti dovrebbero prevedere un budget mensile tra €800 e €1.200 per coprire spese come alloggio, cibo e trasporti.</p>
      <p>Alloggi universitari in Danimarca: cosa sapere</p>
      <p>Alloggi garantiti dalle università?</p>
      <p>No, in Danimarca non esiste un sistema nazionale di residenze universitarie pubbliche garantite come in altri paesi. Ogni università ha una propria politica, e gli alloggi NON sono automatici né inclusi con l’ammissione.</p>
      <p>Tuttavia:</p>
      <ul><li>Alcune università offrono supporto attivo nella ricerca dell’alloggio,</li></ul>
      <p>soprattutto per gli studenti internazionali (soprattutto non europei).</p>
      <ul><li>Le stanze in residenze studentesche (kollegier) si esauriscono molto</li></ul>
      <p>presto. È fondamentale fare domanda con largo anticipo.</p>
      <p>Tipologie di alloggio</p>
      <p>Kollegium (plurale: Kollegier)</p>
      <ul><li>Sono le residenze studentesche danesi.</li></ul>
      <p>Possono essere:</p>
      <p>◦ Camere singole con bagno condiviso</p>
      <p>◦ Piccoli appartamenti autonomi</p>
      <ul><li>Gestite da organizzazioni come:</li></ul>
      <p>◦ Kollegiernes Kontor i København (KKIK)</p>
      <p>◦ CIU – Kollegier i Aarhus</p>
      <p>◦ Student Housing Odense</p>
      <ul><li>Prezzi: da 2500 a 4500 DKK/mese (330-600 €), a seconda della</li></ul>
      <p>città e del tipo.</p>
      <p>Alloggi privati in condivisione</p>
      <ul><li>Stanze in appartamenti condivisi (værelse i delelejlighed)</li><li>Prezzi: dai 3500 ai 6000 DKK/mese o anche di più a Copenaghen</li><li>Si trovano su siti come:</li></ul>
      <p>◦ BoligPortal.dk</p>
      <p>◦ Lejebolig.dk</p>
      <p>◦Facebook groups locali (es: “Rooms in Aarhus/Copenhagen for</p>
      <p>Students”)</p>
      <p>Appartamenti indipendenti</p>
      <ul><li>Molto rari e cari per studenti</li><li>Possono servire coppie o famiglie</li><li>Spesso richiedono depositi molto alti (fino a 3 mesi di affitto + 1</li></ul>
      <p>mese anticipato)</p>
      <p>Università e il supporto agli alloggi</p>
      <p>🇩🇰 University of Copenhagen (KU)</p>
      <ul><li>Ha un ufficio “Housing Foundation” solo per studenti</li></ul>
      <p>internazionali, con un sistema a punti per ottenere una stanza.</p>
      <p>◦ https://housingfoundation.ku.dk</p>
      <p>🇩🇰 Aarhus University (AU)</p>
      <ul><li>Offre garanzia di alloggio per i nuovi studenti</li></ul>
      <p>internazionali (master e exchange)</p>
      <p>◦ https://international.au.dk/life/living-in-denmark/ housing</p>
      <p>🇩🇰 SDU – Southern Denmark University</p>
      <ul><li>Collabora con enti locali per trovare stanze a Odense e Sønderborg</li></ul>
      <p>◦ https://www.sdu.dk/en/uddannelse/housing</p>
      <p>🇩🇰 Aalborg University (AAU)</p>
      <ul><li>Offre aiuto con ricerca alloggi per studenti</li></ul>
      <p>internazionali</p>
      <p>◦ https://www.en.aau.dk/education/life-at-aau/ housing</p>
      <p>Copenhagen Business School (CBS)</p>
      <ul><li>Offre posti limitati per exchange e full-degree students</li></ul>
      <p>◦ https://www.cbs.dk/en/international-opportunities/ international-students/housing</p>
      <p>Dettagli delle strutture</p>
      <ul><li>Tietgenkollegiet (Ørestad)</li></ul>
      <p>Dorm di design circolare, 360 stanze (26–42 m²), ognuna con bagno privato. Aree comuni con caffè, sala studio, lavanderia, strumenti musicali, ecc.</p>
      <ul><li>Bikuben Kollegium (Ørestad)</li></ul>
      <p>Circa 96 monolocali, incluso un piccolo numero per studenti internazionali. Affitto indicativo: 2 985 DKK/mese per camera singola.</p>
      <ul><li>Grønjordskollegiet (Amager)</li></ul>
      <p>Uno dei più grandi: ~920 stanze, organizzate in 5 blocchi. Include palestra, spazi per studio, bar sociale “Hatten Bar”.</p>
      <ul><li>Valkendorfs Kollegium (Centro città)</li></ul>
      <p>Storico, fondato nel 1589, situato vicino all’Università di Copenaghen, frequentato da studenti UCPH.</p>
      <p>Alloggi per studenti vicino alla DTU (Lyngby)</p>
      <ul><li>Campus principali gestiti da Boligfonden DTU (BDTU)</li><li>Campus Village</li><li>Piccoli container per studenti internazionali, all'interno del campus.</li><li>Atmosfera vivace e multiculturale.</li><li>Lundtofte Student Residence</li><li>416 monolocali + camere singole e bilocali.</li><li>A pochi passi dal campus DTU, moderni e ben isolati.</li><li>Villum Kann Rasmussen Kollegiet (VKR)</li><li>84 stanze (12 m²) con cucina e bagno condivisi.</li><li>Prezzo: ~3.358 DKK/mese. Deposito: ~10.274 DKK.</li><li>Hempel Kollegiet</li><li>200 stanze ensuite (bagno privato), cucina comune.</li><li>Prezzo: da 5.198 DKK/mese. Deposito: ~12.660 DKK.</li><li>Alta percentuale di studenti internazionali.</li><li>Altre opzioni vicine</li><li>Basecamp Lyngby</li><li>Alloggi di design: camere e monolocali.</li><li>Prezzi: da 6.295 a 11.550 DKK/mese.</li><li>Include palestra, terrazza, aree comuni e Wi-Fi.</li><li>U2 Campus Apartments</li><li>Complesso moderno di 312 monolocali.</li><li>Situato a nord-ovest del campus, gestito da BDTU.</li></ul>
      <p>Suggerimento:</p>
      <p>Controlla disponibilità sul sito BDTU.dk o sui portali housing per studenti.</p>
      <p>Tempistiche e consigli pratici</p>
      <ul><li>Inizia a cercare l’alloggio appena ricevi la lettera di ammissione.</li><li>Iscriviti ai portali delle residenze anche prima di avere il visto (se</li></ul>
      <p>serve).</p>
      <ul><li>Attenzione alle truffe sugli affitti online: non inviare mai denaro prima</li></ul>
      <p>di firmare un contratto verificabile.</p>
      <ul><li>Metti in conto che trovare casa a Copenaghen è molto difficile –</li></ul>
      <p>valuta città come Odense, Aarhus o Aalborg se cerchi più tranquillità e meno concorrenza.</p>
    ` },
  { n: 20, free: false, title: 'Video Testimonianze Università', teaser: 'Testimonianze di giovani universitari in Danimarca Lara Biancalana racconta la sua esperienza ❤️ Giuseppe ci racconta la sua esperienza universitaria…',
    html: `
      <p>Testimonianze di giovani universitari in Danimarca</p>
      <p>Lara Biancalana racconta la sua esperienza ❤️</p>
      <p>▶️ <a href="https://youtu.be/g4dqD2O3vUQ" target="_blank" rel="noopener">Studentessa alla Royal Danish Academy of Music (Accademia Reale Danese di Musica): Lara Biancalana</a></p>
      <p>Giuseppe ci racconta la sua esperienza universitaria presso la SDU di Esbjerg e di Odense 👇🏻</p>
      <p>▶️ <a href="https://youtu.be/t6bggu34BWs" target="_blank" rel="noopener">Giuseppe si racconta: la mia esperienza alla SDU di Esbjerg e Odense</a></p>
    ` },
  { n: 21, free: false, title: 'SU — Sussidio per gli studenti', teaser: '(e nuove regole), requisiti e come ottenerlo Novità per gli studenti in Danimarca (2026-2027) Negli ultimi anni la Danimarca ha introdotto…',
    html: `
      <p>(e nuove regole), requisiti e come ottenerlo</p>
      <p>Novità per gli studenti in Danimarca (2026-2027)</p>
      <p>Negli ultimi anni la Danimarca ha introdotto una serie di modifiche importanti riguardanti il sistema di supporto economico agli studenti (SU) e le regole di ammissione alle università. Queste novità entreranno in vigore gradualmente tra il 2025 e il 2027, e riguarderanno in particolare chi inizierà un nuovo percorso di studi dopo il 1° luglio 2025.</p>
      <p>🇩🇰 Cos’è lo SU</p>
      <p>Lo Statens Uddannelsesstøtte (SU) è il contributo economico mensile che lo Stato danese riconosce agli studenti. È un sistema pensato per permettere a tutti di studiare, anche senza il supporto economico dei genitori. Può essere concesso anche agli studenti stranieri, ma solo se rispettano determinate condizioni di residenza o lavoro (status parificato ai cittadini danesi).</p>
      <p>Cosa cambia dal 2026-2027</p>
      <p>Il parlamento danese ha approvato una riforma che riduce leggermente la durata massima del periodo in cui si può ricevere lo</p>
      <p>SU. Le nuove regole si applicano a chi inizierà un nuovo corso universitario o professionale dal 1° luglio 2025 in poi.</p>
      <ul><li>Il numero massimo di 'klip SU' (le mensilità di SU) scende da 70 a</li></ul>
      <p>58 per i nuovi studenti.</p>
      <ul><li>Lo SU sarà più strettamente legato alla durata effettiva del</li></ul>
      <p>programma di studio ('normeret studietid').</p>
      <p>Periodo</p>
      <p>Cosa succede</p>
      <p>Fino al 30 giugno 2025</p>
      <p>Valgono le regole attuali (70 klip</p>
      <p>SU)</p>
      <p>Dal 1° luglio 2025</p>
      <p>Chi inizia un nuovo corso rientra nel nuovo regime</p>
      <p>Dal 1° gennaio 2027</p>
      <p>Entrata in vigore effettiva della riforma SU per i nuovi iscritti</p>
      <ul><li>Rimangono invariati l’importo base mensile e le regole per gli</li></ul>
      <p>studenti stranieri UE, ma verranno introdotti controlli più severi.</p>
      <ul><li>Il nuovo sistema entrerà ufficialmente in vigore dal 1° gennaio 2027,</li></ul>
      <p>ma sarà valido solo per chi ha iniziato dopo il 1° luglio 2025.</p>
      <p>Date chiave</p>
      <p>Requisiti di ammissione e altri aggiornamenti</p>
      <ul><li>Le università danesi stanno introducendo nuovi criteri di selezione</li></ul>
      <p>per l’ammissione a corsi con molta richiesta (es. medicina, psicologia, informatica).</p>
      <ul><li>Alcuni atenei, come l’Università del Sud della Danimarca (SDU), non</li></ul>
      <p>accetteranno più studenti extra-UE auto-finanziati per l’ammissione invernale 2026.</p>
      <ul><li>Restano invariati i requisiti linguistici: serve una certificazione di</li></ul>
      <p>danese (Studieprøven) o inglese (TOEFL/IELTS).</p>
      <ul><li>Per chi arriva dall’Italia, valgono sempre i titoli di scuola superiore o</li></ul>
      <p>laurea riconosciuti tramite l’Agenzia danese per il riconoscimento titoli.</p>
      <p>Cosa significa per gli expat italiani</p>
      <ul><li>Se inizi un corso prima del 1° luglio 2025, continuerai con le</li></ul>
      <p>vecchie regole SU.</p>
      <ul><li>Se inizi dopo, avrai meno mesi di sostegno e dovrai pianificare con</li></ul>
      <p>attenzione i tempi tra bachelor e master.</p>
      <ul><li>Le pause lunghe o i cambi di corso rischiano di farti perdere parte</li></ul>
      <p>del diritto al contributo.</p>
      <ul><li>Se lavori almeno 10-12 ore a settimana, puoi mantenere lo 'status</li></ul>
      <p>lavoratore UE' e accedere allo SU anche senza cittadinanza danese.</p>
      <ul><li>È consigliabile informarsi presso il SU-kontor dell’università e</li></ul>
      <p>controllare la propria situazione su su.dk.</p>
      <p>📌 In sintesi</p>
      <ul><li>Le regole SU cambiano dal 2026-2027 solo per i nuovi iscritti.</li><li>Meno mesi disponibili (da 70 a 58), ma stesso importo mensile.</li><li>Più attenzione ai tempi di laurea e ai requisiti di lavoro/residenza.</li><li>Gli studenti già iscritti non subiscono modifiche.</li><li>Alcuni atenei limiteranno l’ingresso di studenti extra-UE auto-</li></ul>
      <p>finanziati dal 2026.</p>
      <p>Requisiti e come ottenere l’SU</p>
      <p>L’SU (Statens Uddannelsesstøtte) è il sussidio mensile per studenti riconosciuto dallo Stato danese.</p>
      <p>Requisiti principali:</p>
      <ul><li>Iscrizione</li></ul>
      <p>a un’istruzione riconosciuta</p>
      <p>(università, academy, professionale, ecc.).</p>
      <ul><li>CPR attivo e residenza in Danimarca.</li><li>Essere cittadino UE con diritto all’SU, che si può ottenere in due</li></ul>
      <p>modi:</p>
      <ul><li>Lavoratore in Danimarca (la via più comune)</li></ul>
      <p>Ottieni il diritto all’SU se:</p>
      <ul><li>Lavori 10–12 ore a settimana (varia leggermente secondo il</li></ul>
      <p>contratto).</p>
      <ul><li>Hai un contratto regolare e ricevi buste paga.</li><li>Mantieni il lavoro durante il periodo in cui ricevi l’SU.</li><li>Familiemedlem (ricongiungimento)</li></ul>
      <p>Se non lavori, puoi comunque avere l’SU se:</p>
      <p>Vivi con un partner danese o europeo già residente in Danimarca che lavora oppure ha già diritto all’SU.</p>
      <p>Siete registrati allo stesso indirizzo (Folkeregister).</p>
      <p>In questo caso, ricevi l’SU tramite i diritti del partner.</p>
      <p>È meno comune, ma è una possibilità reale.</p>
      <p>Come si ottiene</p>
      <ul><li>Accedi a minSU.dk con il tuo MitID.</li><li>Carica eventuali documenti richiesti (contratto di lavoro, buste</li></ul>
      <p>paga, o documentazione di ricongiungimento).</p>
      <ul><li>Invia la domanda per il tuo corso di studi.</li><li>L’attesa è in genere di 2–6 settimane.</li><li>L’SU viene pagato ogni mese sul tuo conto danese.</li></ul>
    ` },
  { n: 22, free: false, title: 'Sprogskole — Scuola di danese', teaser: 'In Danimarca la Sprogskole è una scuola linguistica pubblica o privata dove gli stranieri possono imparare il danese. Ecco un breve…',
    html: `
      <p>In Danimarca la Sprogskole è una scuola linguistica pubblica o privata dove gli stranieri possono imparare il danese. Ecco un breve riassunto di come funziona:</p>
      <ul><li>Accesso: La maggior parte dei nuovi arrivati in Danimarca ha</li></ul>
      <p>diritto a frequentare la Sprogskole gratuitamente o a un costo ridotto, grazie ai finanziamenti statali. Nella maggior parte dei casi, si paga un deposito di ca. 2000 kr, che verrà poi restituito, se si finiranno i moduli di studio in un tempo ragionevole. È possibile iscriversi tramite il comune di residenza.</p>
      <ul><li>Livelli di corso: I corsi sono divisi in vari livelli, dal principiante</li></ul>
      <p>(A1) all'avanzato (C1). Ci sono anche percorsi specifici in base al background educativo e linguistico degli studenti.</p>
      <ul><li>Frequenza: Le lezioni possono essere a tempo pieno, part-time,</li></ul>
      <p>o serali, a seconda delle esigenze dello studente, ma non solo, dipende spesso dal comune di residenza, il quale mette a disposizione determinati giorni e determinati orari, diurni o serali. Molti programmi offrono flessibilità per conciliare lo studio con il lavoro o altri impegni.</p>
      <ul><li>Contenuti: Oltre all'insegnamento della lingua, i corsi spesso</li></ul>
      <p>includono elementi di cultura e società danese per aiutare gli studenti a integrarsi meglio.</p>
      <ul><li>Esami: Al termine di ciascun livello, è possibile sostenere un</li></ul>
      <p>esame per certificare le proprie competenze linguistiche. Il completamento di determinati livelli è spesso richiesto per ottenere la residenza permanente o la cittadinanza danese.</p>
      <p>Una scuola di lingue municipale non dà diritto a SU, ma un programma completo alla VUC, invece, sì. Puoi ottenere indicazioni su SU dal supervisore SU presso VUC.</p>
      <p>Hai il diritto di frequentare l'istruzione danese per un massimo di 5 anni. La scuola di lingua valuterà i tuoi prerequisiti in modo che tu possa iniziare dal livello adatto a te.</p>
      <p>Nella legge danese sull’istruzione viene fatta una distinzione tra studenti del corso I e studenti del corso S; per studenti del corso I si intendono i rifugiati e familiari dei rifugiati. Gli studenti del corso S sono lavoratori, studenti, ecc.</p>
      <p>Molti di voi mi hanno fatto spesso questa domanda: quanto tempo ci vuole per imparare il danese? Dipende totalmente da te!!!</p>
      <p>Sulla tua conoscenza precedente del danese, sulla tua motivazione, sulla tua lingua madre, sul tuo ambiente di apprendimento e sui tuoi metodi di apprendimento. Se sei davvero serio, dovresti provare a vivere in Danimarca almeno sei mesi e seguire un corso intensivo di danese (questo di solito è a pagamento e ci si deve rivolgere al VUC)</p>
      <p>Lezioni e settimane necessarie per raggiungere un livello</p>
      <p>Settimane richieste</p>
      <p>(2 lezioni a settimana)</p>
      <p>A1</p>
      <p>Livello CEFR</p>
      <p>A2</p>
      <p>B1</p>
      <p>B2</p>
      <p>Inizio</p>
      <p>Pratica più semplice</p>
      <p>Pratica facile</p>
      <p>Livello intermedio superiore</p>
      <p>I corsi comunali sono suddivisi nel seguente modo:</p>
      <p>DU1 - DU2 - DU3</p>
      <p>Il DU1 è rivolto a chi non sa leggere l’alfabeto latino o a chi non sa leggere e scrivere nella loro lingua madre. La formazione è divisa in</p>
      <p>6 moduli.</p>
      <p>Il DU2 è rivolto a chi ha un percorso scolastico e formativo breve nel proprio paese d’origine.</p>
      <p>Il DU3 è rivolto a chi ha un background scolastico e formativo medio o lungo. Al Danskuddannelse 3 (DU3) impari il danese con una forte attenzione alla grammatica.. È quindi importante che tu abbia una conoscenza sistematica della grammatica e che tu sia abituato ad acquisire nuovo materiale di lettura in modo autonomo e rapido.</p>
      <p>Questo corso richiede 4-6 ore di compiti a settimana sulle piattaforme online della scuola.</p>
      <p>Tversted</p>
      <p>Klitplantage</p>
      <p>(Nordjylland)</p>
      <p>Prova di esame del DU3:</p>
      <p>Il test è ad un livello corrispondente a B2 (QCER). La prova consiste in una parte scritta e una orale. Per la parte scritta  è prevista una prova di comprensione del testo e una prova di presentazione scritta.</p>
      <p>Dopo l'istruzione danese 3, sei pronto per trovare un lavoro o proseguire gli studi in Danimarca. L’ultima parte del DU3 è la</p>
      <p>“Studieprøven”, che per accedervi dovrai aver superato il PD3 con buoni voti. Dopo la prova di studio (Studieprøven) avrai il livello della lingua danese per essere ammesso all'istruzione superiore in</p>
      <p>Danimarca.</p>
      <p>Cos’è l’FVU?</p>
      <p>FVU è rivolto agli adulti di età superiore ai 25 anni che desiderano migliorare le proprie capacità di lettura, scrittura e matematica o le proprie capacità di risoluzione di compiti digitali e inglese. Le singole fasi dell'insegnamento possono concludersi con un esame. Anche in questo caso il corso è suddiviso in 4 livelli: FVU 1,2,3 e 4 e ognuno termina con una prova finale in cui viene rilasciato un attestato. Per ulteriori dettagli chiedi alla Sprogskole.</p>
      <p>www.danimarchizziamoci.eu</p>
      <p>Consegna del mio primo diploma di lingua danese</p>
      <p>AOF - Tønder</p>
      <p>https://danskherognu.dk https://youtube.com/@klartilstartidanmark4525?</p>
      <p>si=Y7JMk2e26OcDjK0o https://youtube.com/@jetterenane?si=qV4FnZFuyIIAzJSj</p>
      <p>Buone App per imparare il danese</p>
      <p>Duolingo</p>
      <p>Babbel</p>
      <p>Memrise.</p>
      <p>Rosetta Stone.</p>
      <p>Drops superprof.dk</p>
      <p>Link  di siti e canali YouTube per imparare il danese:</p>
      <p>Dansk her og nu</p>
      <p>Klar til start i Danmark</p>
      <p>Lær dansk med Jette</p>
      <p>Learn danish free https://youtube.com/@danishclass101?si=CDWxaORNtOgc3RVn</p>
    ` },
  { n: 23, free: false, title: 'Infortunio sul lavoro', teaser: 'In Danimarca il sistema di protezione contro gli infortuni sul lavoro è ben strutturato e offre supporto completo ai lavoratori in caso di…',
    html: `
      <p>In Danimarca il sistema di protezione contro gli infortuni sul lavoro è ben strutturato e offre supporto completo ai lavoratori in caso di incidente. Ecco cosa succede se si subisce un infortunio sul lavoro:</p>
      <ul><li>Segnalazione dell'infortunio</li></ul>
      <p>Se un lavoratore subisce un infortunio sul lavoro, è importante segnalare l'incidente al datore di lavoro il prima possibile. Il datore di lavoro ha l’obbligo legale di riportare l'infortunio all'autorità preposta, l’Arbejdsmarkedets Erhvervssikring (AES), entro 9 giorni dall'incidente. Anche il lavoratore stesso o il medico curante può effettuare la segnalazione se il datore di lavoro non lo fa.</p>
      <ul><li>Valutazione medica</li></ul>
      <p>Dopo aver segnalato l'incidente, il lavoratore viene sottoposto a una valutazione medica per determinare la gravità delle lesioni e stabilire se vi siano effetti a lungo termine. Il medico rilascia un certificato che può essere utilizzato per richiedere l'indennizzo.</p>
      <ul><li>Compensazione per l'inabilità temporanea</li></ul>
      <p>Se l’infortunio causa un'incapacità temporanea a lavorare, il lavoratore ha diritto a ricevere una compensazione. Durante il periodo di assenza per malattia causata dall'infortunio, il lavoratore può ricevere un'indennità (sygedagpenge) attraverso il sistema di assicurazione malattia danese. L'importo dipende dal salario del lavoratore e può essere erogato per un periodo limitato.</p>
      <ul><li>Indennizzo per invalidità permanente</li></ul>
      <p>Se l'infortunio provoca un'invalidità permanente, parziale o totale, il lavoratore può ottenere un risarcimento per invalidità. L'importo dipende dal livello di riduzione della capacità lavorativa e dalle conseguenze a lungo termine dell'infortunio. Questo risarcimento è fornito dall'Arbejdsmarkedets Erhvervssikring (AES).</p>
      <p>La valutazione dell'invalidità è espressa in percentuale. Per esempio, una riduzione della capacità lavorativa del 20% comporterebbe un risarcimento proporzionato.</p>
      <p>Se il danno è grave e permanente, potrebbe esserci diritto a una somma una tantum o a pagamenti periodici.</p>
      <ul><li>Compensazione per danno personale</li></ul>
      <p>Oltre alla compensazione per la perdita della capacità lavorativa, il lavoratore può ottenere un risarcimento per il danno fisico e morale</p>
      <p>(méngodtgørelse). Questo riguarda il dolore e la sofferenza fisica causati dall'infortunio.</p>
      <ul><li>Reinserimento lavorativo (Fleksjob e Riabilitazione)</li></ul>
      <p>Se, a causa dell'infortunio, il lavoratore non è in grado di riprendere il suo precedente impiego, il sistema danese offre programmi di riabilitazione e reinserimento lavorativo.</p>
      <p>Il programma Fleksjob consente di adattare il lavoro alle nuove capacità del lavoratore, con il sostegno di sussidi governativi.</p>
      <p>In alternativa, il comune può fornire assistenza nella riqualificazione professionale, aiutando il lavoratore a sviluppare nuove competenze per trovare un'altra occupazione.</p>
      <ul><li>Protezione finanziaria attraverso l'assicurazione lavorativa</li></ul>
      <p>In Danimarca, i datori di lavoro sono tenuti a stipulare un'assicurazione obbligatoria contro gli infortuni sul lavoro per i propri dipendenti. Questa assicurazione copre le spese mediche, le indennità giornaliere durante il periodo di inabilità e i risarcimenti per invalidità permanente.</p>
      <ul><li>Tutela legale e reclami</li></ul>
      <p>Se il lavoratore ritiene che il risarcimento o le condizioni lavorative non siano adeguati, può fare reclamo all'Arbejdsmarkedets Erhvervssikring o cercare assistenza legale. Esistono anche sindacati e organizzazioni che possono offrire supporto e consulenza in caso di controversie relative agli infortuni sul lavoro.</p>
      <p>https://www.aes.dk/</p>
      <ul><li>Infortuni mortali</li></ul>
      <p>In caso di infortunio mortale, la famiglia della vittima può ricevere un risarcimento per la perdita del sostegno economico. Inoltre, sono previsti aiuti per le spese funerarie.</p>
      <ul><li>Salute e sicurezza sul lavoro</li></ul>
      <p>La Danimarca ha norme rigorose in materia di salute e sicurezza sul lavoro, che vengono supervisionate dall'autorità preposta, la Arbejdstilsynet. Se un infortunio è causato dalla mancata conformità del datore di lavoro alle norme di sicurezza, il datore di lavoro può essere soggetto a sanzioni.</p>
      <p>In sintesi:</p>
      <p>Il sistema danese protegge i lavoratori in caso di infortunio sul lavoro, offrendo compensazioni economiche, assistenza medica e programmi di reinserimento lavorativo. È importante seguire la procedura corretta per segnalare l'incidente e assicurarsi di ottenere tutto il supporto disponibile attraverso l'Arbejdsmarkedets Erhvervssikring e altri enti competenti.</p>
      <p>Ulteriori in formazioni sugli infortuni sul lavoro le trovi qui 👇🏻</p>
      <p>N.B.: può succedere che il datore di lavoro non denunci l’infortunio all’assicurazione e i motivi possono essere vari. Fatelo presente voi al medico del pronto soccorso, in modo che rimanga prova scritta.</p>
      <p>L'iter per una persona con invalidità che si trasferisce in Danimarca richiede la considerazione di vari aspetti legati al welfare, all'assistenza sociale e alla burocrazia. Ecco una panoramica su come funziona:</p>
      <ul><li>Registrazione al CPR (Numero di Registrazione Civile)</li></ul>
      <p>Una delle prime cose da fare quando ci si trasferisce in Danimarca è ottenere un numero di registrazione civile</p>
      <p>(CPR).</p>
      <p>Questo è fondamentale per accedere ai servizi pubblici, compresi quelli sanitari e di assistenza sociale.</p>
      <ul><li>Accesso al Sistema Sanitario (Sundhedskort)</li></ul>
      <p>Una volta ottenuto il CPR, si riceve la **Sundhedskort** (tessera sanitaria), che dà accesso al sistema sanitario pubblico danese, gratuito per tutti i residenti. Il sistema sanitario copre visite mediche, ricoveri, esami, e in alcuni casi anche servizi di assistenza a domicilio per persone con disabilità.</p>
      <ul><li>Servizi per persone con disabilità</li></ul>
      <p>La Danimarca ha un sistema di welfare molto sviluppato, che offre una serie di servizi e benefici per persone con disabilità. I principali servizi includono:</p>
      <ul><li>Assistenza domiciliare: Se necessario, le persone con disabilità</li></ul>
      <p>possono ricevere assistenza direttamente a casa, che può includere aiuto nelle attività quotidiane, come la pulizia, il cibo, e l'igiene personale.</p>
      <ul><li>Mobilità: Per le persone con difficoltà motorie, ci sono programmi di</li></ul>
      <p>supporto per l'acquisto di ausili come sedie a rotelle o automobili adattate.</p>
      <ul><li>Adattamento abitativo: Possono essere concessi sussidi per</li></ul>
      <p>modificare la casa in modo che sia adatta alle esigenze di una persona con disabilità.</p>
      <ul><li>Personale di assistenza personale (BPA): Questo programma</li></ul>
      <p>fornisce assistenti personali per le persone con gravi disabilità, garantendo un supporto continuo per tutte le necessità quotidiane.</p>
    ` },
  { n: 24, free: false, title: 'Invalidità', teaser: 'Richiesta di pensione per invalidità (Førtidspension) Se una persona con invalidità non può lavorare a causa delle sue condizioni, può fare…',
    html: `
      <ul><li>Richiesta di pensione per invalidità (Førtidspension)</li></ul>
      <p>Se una persona con invalidità non può lavorare a causa delle sue condizioni, può fare richiesta per la pensione anticipata per invalidità</p>
      <p>(førtidspension). Questa pensione è disponibile per chi non ha possibilità di essere riabilitato per tornare al lavoro. Tuttavia, il processo di valutazione è rigoroso e include:</p>
      <p>Valutazioni mediche.</p>
      <p>Discussioni con le autorità locali sui possibili tentativi di riabilitazione.</p>
      <p>Una decisione finale da parte del comune.</p>
      <ul><li>Accesso ai benefici sociali</li></ul>
      <p>In Danimarca, i comuni offrono una serie di sussidi e benefici alle persone con invalidità, inclusi contributi per il trasporto, aiuti per la vita quotidiana, e supporto per partecipare alla vita sociale. L’accesso a questi benefici dipende dalla gravità dell’invalidità e dalla valutazione delle necessità da parte dei servizi sociali locali.</p>
      <ul><li>Lavoro protetto e integrazione</li></ul>
      <p>Se la persona con disabilità può ancora lavorare parzialmente, ci sono programmi di lavoro protetto (Fleksjob) e sussidi per l'occupazione.</p>
      <p>Questi programmi aiutano le persone a trovare un'occupazione con condizioni di lavoro adattate alle loro capacità.</p>
      <ul><li>Esenzioni e agevolazioni fiscali</li></ul>
      <p>In alcuni casi, le persone con disabilità possono beneficiare di esenzioni o agevolazioni fiscali, a seconda della situazione specifica e della gravità dell’invalidità.</p>
      <ul><li>Supporto dal Comune</li></ul>
      <p>Il comune locale (Kommune) è il principale responsabile del supporto alle persone con disabilità. È qui che si fa la maggior parte delle richieste per l'assistenza domiciliare, i benefici sociali, le pensioni di invalidità e i servizi speciali. È consigliabile contattare il proprio comune per avere informazioni dettagliate sul supporto disponibile.</p>
      <p>In generale, la Danimarca offre un buon livello di assistenza e supporto alle persone con invalidità, grazie al suo sistema di welfare inclusivo. Tuttavia, è importante familiarizzare con i processi burocratici e pianificare con cura l'integrazione nel sistema danese.</p>
      <p>www.danimarchizziamoci.eu</p>
    ` },
  { n: 25, free: false, title: 'Patente di Guida (e rinnovo)', teaser: 'Patente di guida dalle Isole Faroe, da un paese dell\'UE o da un paese SEE (Islanda, Norvegia e Liechtenstein) Se hai una patente di guida…',
    html: `
      <p>Patente di guida dalle Isole Faroe, da un paese dell'UE o da un paese</p>
      <p>SEE (Islanda, Norvegia e Liechtenstein)</p>
      <p>Se hai una patente di guida rilasciata dalle Isole Faroe, da un paese dell'UE o da un paese SEE (Islanda, Norvegia e Liechtenstein), puoi utilizzarla in Danimarca. Puoi scegliere di convertirla in una patente di guida dell'UE danese senza dover sostenere un esame di guida, se hai la residenza in Danimarca.</p>
      <p>Patente di guida turistica</p>
      <p>Se non possiedi una patente di guida internazionale o una patente estera tradotta, puoi ottenere una patente di guida turistica presso la polizia, che ti autorizza temporaneamente a guidare in Danimarca. Devi portare con te la documentazione del tuo paese d'origine relativa alla tua patente di guida. Questo vale solo per chi ha una patente dai paesi terzi.</p>
      <p>Rinnovo patente</p>
      <p>Quando ti presenti al borgerservice (in comune, previo appuntamento)</p>
      <p>per rinnovare la patente di guida, è necessaria la seguente documentazione:</p>
      <p>Una foto recente. Devi portarne una. Alcuni comuni offrono la possibilità di fare la foto al borgerservice a pagamento.</p>
      <p>La tua vecchia patente di guida.</p>
      <p>Un documento di identificazione (passaporto o tessera sanitaria).</p>
      <p>Eventualmente un certificato medico (leggi i casi in cui è necessario)</p>
      <p>Se non sei cittadino danese o nordico: Devi portare il permesso di soggiorno/certificato di soggiorno.</p>
      <p>Ulteriori info sul sito Borger.dk 👇🏻 https://www.borger.dk/Handlingsside?selfserviceId=a40a572e-a931- 4ef4-b1e9-c61d36bca576</p>
      <p>Christiania, un posto speciale da visitare a</p>
      <p>Copenaghen</p>
    ` },
  { n: 26, free: false, title: 'Fornitura Elettrica', teaser: 'Informazioni sulle principali compagnie e su come scegliere il miglior fornitore di energia elettrica. Le principali compagnie elettriche…',
    html: `
      <p>Informazioni sulle principali compagnie e su come scegliere il miglior fornitore di energia elettrica.</p>
      <p>Le principali compagnie elettriche danesi sono:</p>
      <p>Ørsted:</p>
      <p>Un colosso energetico globale con sede in</p>
      <p>Danimarca, noto principalmente per i suoi parchi eolici offshore. Tuttavia, offre anche contratti di fornitura elettrica per i consumatori domestici e industriali.</p>
      <p>SEAS-NVE: Una delle più grandi utility danesi, che fornisce elettricità, gas e calore a un vasto numero di clienti in</p>
      <p>Danimarca. Offre una gamma completa di servizi energetici, dalla fornitura all'efficienza energetica.</p>
      <p>Energi Danmark: Un'altra grande compagnia elettrica danese che offre contratti di fornitura elettrica a prezzi competitivi. È nota per la sua attenzione alla sostenibilità e per le sue iniziative per promuovere l'uso di energie rinnovabili.</p>
      <p>Elgiganten Energimarked: Una compagnia elettrica che fa parte di un grande gruppo di   elettronica di consumo. Offre contratti di fornitura elettrica insieme a una vasta gamma di prodotti elettronici.</p>
      <p>Danske Commodities: Un trader di energia indipendente che offre contratti di fornitura elettrica a prezzi competitivi. È noto per la sua flessibilità e per la sua capacità di adattare i contratti alle esigenze dei clienti.</p>
      <p>Norlys e OK: Entrambe sono aziende solide e ben radicate nel mercato danese, offrendo  una   gamma di servizi energetici che va dalla fornitura di elettricità al gas e, in alcuni casi, anche a servizi di telecomunicazione.</p>
      <p>Come scegliere la compagnia elettrica giusta?</p>
      <p>La scelta della compagnia elettrica dipende da diversi fattori, tra cui:</p>
      <p>Prezzo: Confronta le tariffe offerte dalle diverse compagnie per trovare l'offerta più conveniente.</p>
      <p>Sostenibilità: Se la sostenibilità è una priorità, scegli una compagnia che produca o acquisti una grande quantità di energia rinnovabile.</p>
      <p>Servizi aggiuntivi: Alcune compagnie offrono servizi aggiuntivi, come la possibilità di gestire il proprio consumo energetico online o l'accesso a tariffe speciali per i veicoli elettrici.</p>
      <p>Consigli utili</p>
      <p>Confronta le offerte: Utilizza un comparatore online per confrontare le offerte delle diverse compagnie elettriche.</p>
      <p>Leggi attentamente i contratti: Prima di sottoscrivere un contratto, leggi attentamente le condizioni generali per evitare sorprese.</p>
      <p>Verifica la reputazione della compagnia:</p>
      <p>Informati sulla reputazione della compagnia leggendo le recensioni dei clienti.</p>
      <p>Presenza locale: Se preferisci una compagnia con una forte presenza nella tua zona, valuta le opzioni locali.</p>
      <p>Ci sono numerose altre compagnie in Danimarca, ma sarebbe utile, secondo me, usare questo sito per ottenere la migliore offerta nella tua zona di residenza. È sufficiente inserire l’indirizzo di casa e quanto pensi di consumare annualmente, inserisci i tuoi dati per poter essere ricontattato da loro, che ti proporranno un’offerta. Se non dovesse soddisfarti, sarai libero di rifiutare. Il sito si chiama “Elfinder”, questo è il link: www.elfinder.dk</p>
      <p>Ringriderfest al castello di</p>
      <p>Sønderborg</p>
      <p>La regina Margherita II, che ha abdicato il 14 gennaio 2024, e la nuova coppia reale:</p>
      <p>la regina Mary e re Federico X.</p>
    ` },
  { n: 27, free: false, title: 'Compagnie Telefoniche', teaser: 'Cosa sapere sulle compagnie telefoniche danesi: Alta qualità del servizio: In generale, le compagnie telefoniche danesi sono note per…',
    html: `
      <p>Cosa sapere sulle compagnie telefoniche danesi:</p>
      <p>Alta qualità del servizio:</p>
      <p>In generale, le compagnie telefoniche danesi sono note per offrire una buona qualità del servizio, con reti affidabili e una copertura estesa.</p>
      <p>Flessibilità dei piani: Troverai una vasta gamma di piani tariffari, che variano in base al consumo di dati, minuti e SMS.</p>
      <p>Molte compagnie offrono anche opzioni per personalizzare il tuo piano.</p>
      <p>Concorrenza: Il mercato danese è molto competitivo  ciò significa che puoi trovare offerte molto vantaggiose, soprattutto se sei disposto a confrontare i diversi operatori.</p>
      <p>Linguaggio: Anche se la Danimarca non è un paese anglofono, molte compagnie offrono assistenza clienti in inglese, facilitando la scelta per i turisti o gli espatriati.</p>
      <p>Tønder, la mia prima città</p>
      <p>Quali sono le principali compagnie telefoniche danesi?</p>
      <p>Alcune delle compagnie telefoniche più conosciute in Danimarca sono:</p>
      <p>Telenor: Uno dei maggiori operatori, offre una vasta gamma di servizi, tra cui telefonia mobile, internet fisso e TV.</p>
      <p>3 Denmark: Conosciuta per le sue offerte aggressive e per la sua rete 5G in continua espansione.</p>
      <p>Telia: Un altro grande operatore con una lunga storia nel settore delle telecomunicazioni.</p>
      <p>YouSee: Un marchio di TDC, offre servizi di telefonia, internet e TV.</p>
      <p>Quale scegliere?</p>
      <p>La scelta della compagnia telefonica migliore dipende da diversi fattori, tra cui:</p>
      <p>Copertura: Assicurati che la rete copra le zone in cui ti trovi più spesso.</p>
      <p>Prezzo: Confronta i piani tariffari per trovare quello che meglio si adatta al tuo budget.</p>
      <p>Servizi aggiuntivi: Valuta i servizi extra offerti, come le app, i servizi di streaming inclusi, le opzioni di roaming.</p>
      <p>Assistenza clienti: Un buon servizio clienti è fondamentale in caso di problemi o per richiedere assistenza.</p>
      <p>Come scegliere?</p>
      <p>Utilizza un comparatore online: Ci sono molti siti web che ti permettono di confrontare le offerte delle diverse compagnie in modo semplice e veloce.</p>
      <p>Leggi attentamente i contratti: Prima di sottoscrivere un contratto leggi attentamente tutte le condizioni, comprese le eventuali penali per la risoluzione anticipata.</p>
      <p>Chiedi consiglio: Se hai dubbi, puoi chiedere consiglio a amici, colleghi o consultare forum online, ma meglio ancora, scrivi un post sul gruppo fb “Danimarchizziamoci”, noi siamo qui apposta!</p>
      <p>Un consiglio in più: Se hai intenzione di soggiornare in Danimarca per un breve periodo, potresti valutare l'acquisto di una SIM prepagata, tipo Lyca e Lebara. In questo modo, eviterai di sottoscrivere un contratto a lungo termine e potrai scegliere il piano tariffario più adatto alle tue esigenze. Queste ultime le trovi facilmente nei negozi 7Eleven, nei supermercati (alla cassa), in stazione, aeroporto, ecc</p>
      <p>Gendarmstien</p>
      <p>(Sønderjylland)</p>
    ` },
  { n: 28, free: false, title: 'Importare l\'auto italiana', teaser: 'Sono esenti da queste spese coloro i quali abbiano un contratto di lavoro a termine (6 mesi) e chi soggiorna in Danimarca al massimo 185…',
    html: `
      <p>Sono esenti da queste spese coloro i quali abbiano un contratto di lavoro a termine (6 mesi) e chi soggiorna in Danimarca al massimo 185 giorni.</p>
      <p>Se vuoi chiedere a Skat quanto devi pagare di tasse per la tua auto, vai sul sito:</p>
      <p>Skat.dk ➡ Borger ➡ Blanketter ➡ 21 Punktafgift; motor (scritto proprio così).</p>
      <p>I moduli sono in danese (21.059) e in inglese (21.059 EN).</p>
      <p>Se vuoi aprire la pratica per poter guidare in Danimarca con la tua targa straniera, c’è un costo di 400 kr.</p>
      <p>Se vuoi sapere in anticipo quanto dovrai pagare per il cambio targhe, andate sul sito: “motorregister.skat.dk” e cliccate ⬇</p>
      <p>“Beregn registreringsafgiften” in danese, per l’inglese lo saprai tu.</p>
      <p>Prima di cominciare l’operazione di calcolo della tua auto usata italiana, prepara tutti i dati dell’auto, libretto di circolazione, ecc.</p>
      <p>poiché dovrai inserirli, sia quelli inerenti alla registrazione che quelli tecnici. Le cifre su questo sito sono solo indicative.</p>
      <p>L’auto avrà bisogno di due revisioni che saranno eseguite nello stesso giorno presso officine autorizzate.</p>
      <p>Se la macchina supererà il controllo si verrà a sapere il costo del cambio targa.</p>
      <p>Viene richiesto, inoltre, di presentare il CoC (Certificato di</p>
      <p>Conformità europeo) della macchina e solitamente in Italia non ci viene dato di default all’acquisto di un’auto nuova: va richiesto direttamente al produttore tramite il proprio concessionario oppure ci sono dei siti online in cui richiederlo. Quindi non è sufficiente il libretto di circolazione italiano.</p>
      <p>Il costo del CoC cambia da marca a marca e va dai 120/150€ in su e ci vogliono almeno 15/20 giorni lavorativi per averlo.</p>
      <p>Solitamente viene spedito in forma cartacea</p>
      <p>(alcuni siti forniscono anche la versione pdf).</p>
      <p>Questo è il facsimile del modulo da compilare (in danese), c’è anche la versione inglese ⬇</p>
    ` },
  { n: 29, free: false, title: 'Boligstøtte — Sussidio per l\'affitto', teaser: 'Come richiedere il sussidio per l’abitazione (boligstøtte) e chi può beneficiarne. Vai sul sito www.borger.dk e cerca “Boligstøtte”,…',
    html: `
      <p>Come richiedere il sussidio per l’abitazione (boligstøtte) e chi può beneficiarne.</p>
      <p>Vai sul sito www.borger.dk e cerca “Boligstøtte”, cliccaci sopra e ti si apre la pagina. Aiutati con il Google traduttore o segui semplicemente ciò che ti sto spiegando nella versione danese del sito.</p>
      <p>Alla prima domanda: “Vil du søge boligstøtte?” Clicca la prima risposta evidenziata in blu: “Søg boligstøtte”.</p>
      <p>Si apre un’altra pagina, clicca il rettangolo verde con scritto</p>
      <p>“videre”.</p>
      <p>Si apriranno un paio di pagine in cui ti spiegano quale sia la procedura, quanto tempo durerà e ti chiedono se hai i documenti pronti sia per rispondere alle domande che ti fanno, inerenti all’appartamento in cui abiti, sia per allegarli.</p>
      <p>Dai il consenso di condividere i tuoi dati personali con gli enti appositi. Se non lo dai, non potrai ricevere il sussidio, dal momento che loro devono controllare le tue informazioni.</p>
      <p>Dovrai usare il MitId e rispondere alle domande. Se tutto procede come dovrebbe, alla fine del questionario, ti verrà calcolato ciò che potrai ricevere come sussidio mensile.</p>
      <p>Chi può beneficiare del Boligstøtte?</p>
      <p>Chiunque abbia un appartamento in affitto e un contratto regolare, può richiedere il sussidio.</p>
      <p>Non puoi ottenerlo, invece, se il contratto di affitto non é intestato a te. Se vivi in famiglia e paghi l’affitto, questo non ti da diritto di riceverlo.</p>
      <p>Il boligstøtte funge da sostegno per le persone a basso reddito, chi è in disoccupazione, pensionati, studenti, ecc. e viene calcolato in base al reddito e alla superficie dell’appartamento.</p>
      <p>Se dovessi avere problemi a fare la richiesta digitalmente, potrai sempre rivolgerti al comune e chiedere aiuto ad un dipendente, sono molto gentili e aiutano i cittadini in qualsiasi situazione di disagio si trovino.</p>
      <p>Sculture di sabbia</p>
      <p>Ringkøbing</p>
    ` },
  { n: 30, free: false, title: 'Børne- og ungeydelse — assegni familiari', teaser: 'Nota: in questa sezione della guida originale il contenuto è un\'infografica (immagine), senza testo estraibile — qui una sintesi dei punti…',
    html: `
      <p><em>Nota: in questa sezione della guida originale il contenuto è un'infografica (immagine), senza testo estraibile — qui una sintesi dei punti chiave da verificare con te prima della pubblicazione definitiva.</em></p>
      <p>Le famiglie residenti in Danimarca con figli hanno diritto a un contributo periodico chiamato <strong>børne- og ungeydelse</strong>, erogato automaticamente da Udbetaling Danmark una volta che CPR, indirizzo e nucleo familiare sono registrati al Comune — non serve farne richiesta separata, ma il primo pagamento può richiedere alcune settimane.</p>
      <p>L'importo varia in base all'età del figlio (più alto per i bambini piccoli, più basso per gli adolescenti) ed è versato trimestralmente sul conto corrente registrato con MitID/NemKonto.</p>
    ` },
  { n: 31, free: false, title: 'Essere madre single in Danimarca', teaser: 'Essere genitore single in Danimarca può sembrare impegnativo, ma il sistema danese offre diverse forme di supporto economico e sociale, sia…',
    html: `
      <p>Essere genitore single in Danimarca può sembrare impegnativo, ma il sistema danese offre diverse forme di supporto economico e sociale, sia da parte dello Stato che attraverso enti e associazioni dedicate alle famiglie. Questa sezione raccoglie tutte le informazioni utili per conoscere i tuoi diritti e sapere a chi rivolgerti.</p>
      <p>Sostegno economico</p>
      <ul><li>Børnetilskud til enlige (Assegno per genitori single) – Si richiede su</li></ul>
      <p>borger.dk ed è un contributo economico aggiuntivo per i genitori soli.</p>
      <p>Viene erogato ogni trimestre e non va restituito.</p>
      <p>👉 https://www.borger.dk</p>
      <ul><li>Børne- og ungeydelse (Assegno per bambini e giovani) –</li></ul>
      <p>Conosciuto come 'børnecheck', è versato automaticamente dallo</p>
      <p>Stato per tutti i figli sotto i 18 anni.</p>
      <ul><li>Børnebidrag (Assegno di mantenimento) – L’altro genitore ha</li></ul>
      <p>l’obbligo legale di contribuire al mantenimento del figlio. Se non lo fa, Udbetaling Danmark può intervenire per garantire il pagamento.</p>
      <ul><li>Økonomisk friplads (Riduzione retta asilo) – Se il reddito è basso, si</li></ul>
      <p>può chiedere al comune una riduzione o copertura totale delle spese per l’asilo o scuola dell’infanzia.</p>
      <ul><li>Boligstøtte (Sussidio per l’affitto) – Se vivi in affitto puoi chiedere un</li></ul>
      <p>aiuto mensile per coprire parte del canone. 👉 https://www.borger.dk</p>
      <ul><li>Enkeltydelser (Aiuti per spese eccezionali) – Il comune può</li></ul>
      <p>aiutarti per spese impreviste</p>
      <p>(cure mediche, trasloco, abbigliamento invernale per i bambini).</p>
      <ul><li>Barselsdagpenge e SU (Congedo parentale e sostegno agli</li></ul>
      <p>studenti) – Se sei studentessa puoi combinare la SU con le indennità di maternità (*barselsdagpenge*). Chiedi sempre alla tua università per sapere se ne hai diritto.</p>
      <p>Consulenza e supporto sociale</p>
      <ul><li>Mødrehjælpen – Offre sostegno economico, pratico e psicologico</li></ul>
      <p>alle madri single. 👉 https://moedrehjaelpen.dk</p>
      <ul><li>Forælder Fonden – Fornisce consulenza gratuita a genitori</li></ul>
      <p>separati o single su economia domestica, relazioni e affitto.</p>
      <p>👉 https://foraelderfonden.dk</p>
      <ul><li>Børnetelefonen (Telefono per bambini e genitori) – Numero</li></ul>
      <p>gratuito 116 111 per parlare con qualcuno o ricevere aiuto.</p>
      <p>👉 https://bornetelefonen.dk</p>
      <ul><li>Mindhelper.dk – Portale per giovani e genitori su salute mentale,</li></ul>
      <p>ansia e stress. 👉 https://mindhelper.dk</p>
      <ul><li>Il Kommune (il Comune) – Ogni comune offre orientamento e</li></ul>
      <p>supporto ai genitori in difficoltà tramite Borgerservice o servizi sociali.</p>
      <ul><li>Borger.dk – Portale nazionale con sezioni su genitorialità,</li></ul>
      <p>separazione e sussidi. 👉 https://www.borger.dk</p>
      <p>❤️ In sintesi</p>
      <p>La Danimarca ha un sistema molto solido di protezione per i genitori single:</p>
      <ul><li>Aiuti economici automatici e su richiesta.</li><li>Sostegni comunali personalizzati.</li><li>Supporto umano e psicologico garantito da associazioni e Stato.</li></ul>
      <p>👉 Se sei una madre (o un padre) single in Danimarca, non restare sola/o: qui chiedere aiuto è normale e rispettato.</p>
      <p>Lucy consiglia</p>
      <ul><li>Non fare tutto da sola: in Danimarca chiedere aiuto è normale.</li></ul>
      <p>Contatta il tuo comune o associazioni come Mødrehjælpen.</p>
      <ul><li>Crea la tua rete danimarchizzata: unisciti a gruppi Facebook di</li></ul>
      <p>mamme italiane o internazionali.</p>
      <ul><li>Controlla periodicamente i tuoi diritti su borger.dk: alcuni aiuti</li></ul>
      <p>non sono automatici.</p>
      <ul><li>Gestisci un piccolo budget familiare con app come Spiir o</li></ul>
      <p>Minøkonomi.</p>
      <ul><li>Scegli asili vicini a casa e iscriviti presto alle liste comunali.</li><li>Partecipa alle attività gratuite nelle biblioteche locali.</li><li>Ricorda di prenderti cura anche di te: una mamma serena è una</li></ul>
      <p>mamma forte.</p>
      <p>Capitolo 1: La cultura danese del second-hand</p>
      <p>La Danimarca ha una forte tradizione di riutilizzo e sostenibilità, riflessa nella popolarità del mercato di seconda mano. Il concetto di</p>
      <p>"Genbrug" (riutilizzo) è centrale nella cultura danese: molti scelgono oggetti usati per motivi ecologici, economici e anche per trovare pezzi unici.</p>
      <p>Curiosità: Molti giovani danesi arredano le loro prime case esclusivamente con mobili e accessori di seconda mano, vedendo questo stile come pratico e creativo.</p>
      <p>Capitolo 2: Dove trovare oggetti usati in Danimarca</p>
      <p>*Siti web e app principali*</p>
      <ul><li>È il sito di riferimento per la compravendita di seconda mano in</li></ul>
      <p>Danimarca. Trovi di tutto: dai mobili ai giocattoli, dai vestiti agli elettrodomestici.</p>
      <ul><li>Suggerimento: Utilizza i filtri di ricerca per trovare articoli vicini alla</li></ul>
      <p>tua zona.</p>
      <ul><li>Simile a DBA, ma con un’interfaccia più semplice. Ideale per chi</li></ul>
      <p>cerca oggetti economici senza troppe formalità.</p>
      <ul><li>*Facebook Marketplace*</li><li>Perfetto per cercare oggetti nella tua area e negoziare direttamente</li></ul>
      <p>con i venditori locali. Spesso puoi trovare offerte last minute.</p>
      <ul><li>Piattaforma di aste online per articoli vintage, design e pezzi unici.</li></ul>
      <p>Ideale per chi cerca oggetti di alta qualità o collezionabili.</p>
    ` },
  { n: 32, free: false, title: 'Genbrug — Negozi dell\'usato', teaser: '*Negozi e centri di riciclo* *Genbrug Centres* Sono veri e propri centri per il riciclo e la vendita di articoli donati. Puoi trovare…',
    html: `
      <p>*Negozi e centri di riciclo*</p>
      <ul><li>*Genbrug Centres*</li><li>Sono veri e propri centri per il riciclo e la vendita di articoli</li></ul>
      <p>donati. Puoi trovare mobili, elettrodomestici e utensili a prezzi simbolici.</p>
      <ul><li>*Charity Shops*</li><li>Negozi gestiti da organizzazioni come Røde Kors (Croce</li></ul>
      <p>Rossa) e Kirkens Korshær. Ottimi per mobili usati e piccoli oggetti per la casa.</p>
      <p>Capitolo 3: Consigli per l’acquisto sicuro</p>
      <ul><li>*Verifica le condizioni degli oggetti*</li><li>Chiedi foto aggiuntive al venditore o visita di persona per</li></ul>
      <p>ispezionare i mobili. Controlla la presenza di danni o segni di usura.</p>
      <ul><li>*Sii pronto a negoziare*</li><li>In mercatini e vendite informali, negoziare è accettato. Parti</li></ul>
      <p>sempre da un’offerta inferiore rispetto al prezzo richiesto.</p>
      <ul><li>*Confronta i prezzi*</li><li>Usa DBA.dk o altre piattaforme per verificare il valore medio di</li></ul>
      <p>un oggetto simile prima di acquistarlo.</p>
      <p>Capitolo 4: Strumenti di pagamento e sicurezza</p>
      <ul><li>*MobilePay:*</li><li>È il metodo di pagamento più usato, ma non offre protezione</li></ul>
      <p>all’acquirente. Effettua il pagamento solo dopo aver ricevuto l’oggetto o esserti assicurato della serietà del venditore.</p>
      <ul><li>*Evita truffe:*</li><li>Non inviare denaro anticipatamente per oggetti non visti di</li></ul>
      <p>persona. Se il prezzo è troppo basso rispetto al mercato, potrebbe essere un segnale di allarme.</p>
      <p>Capitolo 5: I periodi migliori per cercare offerte</p>
      <ul><li>- Primavera-estate: Durante i traslochi, molte persone vendono</li></ul>
      <p>mobili a prezzi bassissimi.</p>
      <ul><li>- Dopo le festività: Trovi regali non apprezzati o oggetti sostituiti</li></ul>
      <p>da nuovi.</p>
      <p>Capitolo 6: Suggerimenti pratici per i nuovi arrivati</p>
      <ul><li>*Arredare casa:*</li><li>La maggior parte degli appartamenti in Danimarca è affittata</li></ul>
      <p>vuota. Inizia da Facebook Marketplace o Genbrug Centres per trovare i mobili essenziali.</p>
      <ul><li>*Organizza il trasporto:*</li><li>Spesso i venditori non offrono la consegna. Considera di</li></ul>
      <p>noleggiare un furgoncino o di chiedere aiuto a un amico con un’auto spaziosa.</p>
      <ul><li>*Trova mercatini locali:*</li><li>Partecipa ai mercatini dell’usato nei weekend. Spesso si trovano</li></ul>
      <p>oggetti unici a prezzi simbolici, specialmente nelle zone residenziali.</p>
      <ul><li>*Free your stuff*: pagina Facebook in cui vengono postate cose</li></ul>
      <p>che vengono regalate, spesso in buone condizioni. Unico investimento: recuperarle a casa di chi le regala.</p>
      <p>I negozi dell’usato si presentano così</p>
    ` },
  { n: 33, free: false, title: 'Assicurazioni Sanitarie', teaser: 'Sistema Sanitario Pubblico: Come funziona In Danimarca, tutti i residenti sono automaticamente coperti dal Servizio Sanitario Nazionale,…',
    html: `
      <p>Sistema Sanitario Pubblico: Come funziona</p>
      <p>In Danimarca, tutti i residenti sono automaticamente coperti dal</p>
      <p>Servizio Sanitario Nazionale, che include:</p>
      <ul><li>Consultazioni gratuite con il medico di base (praktiserende læge).</li><li>Cure ospedaliere, interventi e trattamenti specialistici.</li><li>Accesso a cure pediatriche e maternità.</li></ul>
      <p>Per accedere ai servizi, è necessario registrarsi presso il comune di residenza (Folkeregistrer) e ottenere la Sundhedskort (la tessera sanitaria gialla). Questa tessera contiene il nome del medico di base e deve essere presentata durante le visite.</p>
      <p>Perché scegliere un'assicurazione sanitaria privata?</p>
      <p>Anche se il sistema pubblico è efficiente, alcune persone preferiscono sottoscrivere un’assicurazione sanitaria privata per coprire:</p>
      <ul><li>Trattamenti non inclusi: Cure dentali, fisioterapia, psicologia,</li></ul>
      <p>occhiali.</p>
      <ul><li>Accesso rapido: Ridurre i tempi di attesa per specialisti o</li></ul>
      <p>interventi.</p>
      <ul><li>Trattamenti alternativi: Come agopuntura o chiropratica.</li></ul>
      <p>Le migliori assicurazioni private in Danimarca</p>
      <p>Ecco un confronto delle principali opzioni:</p>
      <p>Assicurazione</p>
      <p>Caratteristiche principali</p>
      <p>Ideale per</p>
      <p>Sygeforsikring</p>
      <p>“Danmark”</p>
      <p>Integrazione al pubblico; copre dentista, occhiali e farmaci</p>
      <p>Topdanmark</p>
      <p>Tryg</p>
      <p>Codan</p>
      <p>PFA</p>
      <p>Helbredssikring</p>
      <p>Residenti a lungo termine</p>
      <p>Accesso rapido a specialisti; opzioni familiari</p>
      <p>Cure private; Copertura internazionale</p>
      <p>Personalizzabile; include trattamenti estetici e specialistici</p>
      <p>Focus su prevenzione e supporto psicologico</p>
      <p>Famiglie e viaggiatori</p>
      <p>Espatriati e chi lavora all’’estero</p>
      <p>Chi cerca soluzioni su misura</p>
      <p>Lavoratori e famiglie attenti al benessere</p>
      <p>Cosa considerare prima di scegliere</p>
      <ul><li>Esigenze personali: Hai bisogno di cure dentali, fisioterapia o altro?</li><li>Budget: Valuta il costo mensile e le franchigie applicabili.</li><li>Viaggi: Se viaggi spesso, verifica che l’assicurazione includa copertura</li></ul>
      <p>internazionale.</p>
      <p>*Link utili*</p>
      <ul><li>Sygeforsikringen danmark (https://www.sygeforsikring.dk/)</li><li>Topdanmark (https://www.topdanmark.dk/)</li><li>Tryg (https://www.tryg.dk/)</li><li>Codan (https://www.codan.dk/)</li><li>PFA (https://www.pfa.dk/)</li></ul>
      <p>Compagnie Assicurative in Danimarca</p>
      <p>Ulteriori informazioni</p>
      <ul><li>Tryg</li></ul>
      <p>Tryg è una delle assicurazioni più grandi e conosciute in Danimarca, con una vasta gamma di prodotti, dalle assicurazioni sulla casa e sulla vita a quelle per auto e animali domestici. La compagnia ha una lunga esperienza nel settore e offre polizze molto personalizzabili.</p>
      <ul><li>Assicurazioni offerte:</li><li>Assicurazione sulla casa (Boligforsikring)</li><li>Assicurazione sanitaria (Sundhedsforsikring), compresa la polizza</li></ul>
      <p>per il rimborso spese mediche private.</p>
      <ul><li>Assicurazione infortuni (Ulykkesforsikring)</li><li>Assicurazione per animali domestici (Kæledyrsforsikring)</li><li>Assicurazione per bicicletta (Cykelforsikring)</li><li>Assicurazione auto (Bilforsikring), con opzioni per responsabilità</li></ul>
      <p>civile, danni e furto.</p>
      <p>Caratteristiche: Tryg è molto apprezzata per l'assistenza clienti e le soluzioni assicurative personalizzate. Offre anche sconti per pacchetti di polizze (ad esempio, casa + auto).</p>
      <ul><li>Topdanmark</li></ul>
      <p>Topdanmark è un altro grande attore del mercato assicurativo danese, con una solida reputazione per la qualità dei suoi servizi. Offre un'ampia varietà di polizze, dalle assicurazioni sulla casa a quelle per la salute e gli infortuni e in più quella sulla vita.</p>
      <ul><li>Assicurazione vita (Livsforsikring)</li></ul>
      <p>Caratteristiche: Topdanmark è conosciuta per i suoi premi competitivi e per la varietà di copertura che offre. Ha anche una buona reputazione per la gestione dei sinistri e la velocità nei pagamenti.</p>
      <ul><li>Alka Forsikring</li></ul>
      <p>Alka è una compagnia che si distingue per l'orientamento al cliente e l’offerta di polizze personalizzabili. È ben posizionata nel mercato delle assicurazioni per la casa, gli infortuni e la vita.</p>
      <p>Offre le stesse assicurazioni delle precedenti menzionate.</p>
      <ul><li>Caratteristiche: Alka è nota per la sua capacità di offrire soluzioni</li></ul>
      <p>pratiche a prezzi accessibili, con un buon supporto online e tramite app.</p>
      <ul><li>PFA Forsikring</li></ul>
      <p>PFA è uno dei principali fornitori di assicurazioni pensionistiche in</p>
      <p>Danimarca, ma offre anche altre polizze assicurative, comprese quelle sulla vita e infortuni. È conosciuta per le sue soluzioni per i lavoratori e per chi cerca opzioni legate alla pensione.</p>
      <ul><li>Assicurazioni offerte:</li><li>Assicurazione sulla vita, anche in combinazione con piani pensionistici</li><li>Assicurazione infortuni</li><li>Assicurazione sanitaria privata, in particolare per le aziende e i</li></ul>
      <p>lavoratori autonomi</p>
      <ul><li>Caratteristiche: PFA è molto focalizzata su assicurazioni pensionistiche</li></ul>
      <p>e soluzioni per i professionisti. È una scelta solida per chi vuole integrare la pensione con una polizza vita.</p>
      <ul><li>Danica Pension</li></ul>
      <p>Danica è una delle compagnie assicurative più rispettate in Danimarca, specializzata principalmente in pensioni e assicurazioni sulla vita, ma offre anche altre polizze complementari.</p>
      <p>Offre un gran numero di assicurazioni.</p>
      <ul><li>Caratteristiche: Danica Pension è conosciuta per i suoi piani</li></ul>
      <p>pensionistici avanzati, ma è anche un'ottima scelta per chi cerca un pacchetto assicurativo completo.</p>
      <p>Altre opzioni di assicurazione</p>
      <ul><li>Forsia: È una compagnia specializzata nell’ assicurazione per i</li></ul>
      <p>professionisti e nel settore della salute mentale e fisica. Offre polizze specifiche per chi lavora in condizioni rischiose o ha bisogno di una protezione extra in caso di infortunio o malattia.</p>
      <ul><li>Codan Forsikring: Un’altra compagnia che offre assicurazioni in</li></ul>
      <p>ambito auto, casa, vita e salute. Codan è ben conosciuta per l'assistenza ai clienti e per la possibilità di adattare le polizze alle esigenze personali.</p>
      <ul><li>Lærerstandens</li></ul>
      <p>Brandforsikring</p>
      <p>(LBF):</p>
      <p>Questa compagnia è specializzata in assicurazioni per i membri del settore educativo, ma offre anche pacchetti per famiglie e professionisti in generale. Se sei insegnante o lavori nel settore pubblico, LBF potrebbe offrirti vantaggi aggiuntivi.</p>
      <ul><li>If  Forsikring</li></ul>
      <p>Benefici:</p>
      <p>Gestione rapida dei sinistri: il 72% dei casi viene risolto entro 24 ore.</p>
      <p>Programmi di sconti fino al 15% su pacchetti assicurativi multipli.</p>
      <p>Offrono coperture personalizzabili per adattarsi alle esigenze individuali.</p>
      <p>Punti di forza:</p>
      <p>Ampia presenza nei paesi nordici, garantendo supporto anche in mobilità.</p>
      <p>Buona assistenza clienti e opzioni di gestione online​</p>
      <p>Altre Considerazioni</p>
      <p>In Danimarca, molte assicurazioni sono altamente personalizzabili e si possono combinare per ottenere pacchetti vantaggiosi. Ad esempio, combinando polizze per casa, vita e infortuni, alcune compagnie offrono sconti significativi. La digitalizzazione è molto avanzata, e molte compagnie offrono la possibilità di gestire le polizze tramite app, portali online e assistenza clienti 24/7.</p>
      <ul><li>GF Forsikring</li></ul>
      <p>Struttura unica: è un'associazione di membri, e ogni assicurato diventa parte di una "club assicurativo", con diritto di voto e possibilità di influenzare la gestione.</p>
      <p>Polizze disponibili: includono coperture per casa, contenuti, veicoli, viaggi, infortuni, animali domestici, identità digitale, emergenze psicologiche e danni causati da calamità naturali.</p>
      <p>Benefici:</p>
      <p>Parte dei profitti viene restituita agli assicurati sotto forma di sconti o dividendi.</p>
      <p>Supporto extra per prevenzione e gestione digitale dei rischi</p>
      <p>(es. furto di identità o cyberbullismo).</p>
      <p>Inclusione di servizi come assistenza psicologica gratuita per i membri.</p>
      <p>Punti di forza:</p>
      <p>Gestione locale e vicinanza agli assicurati tramite le loro sedi distribuite.</p>
      <p>Focus sulla sostenibilità e il supporto sociale</p>
      <p>N.B.: Sito utile per risparmiare sulle assicurazioni, energia e tanto altro:</p>
      <p>👇🏿 www.tjenestetorvet.dk</p>
      <p>Conclusione</p>
      <p>Avere un’assicurazione sanitaria privata non è obbligatorio, ma può essere una scelta utile per chi desidera maggiore tranquillità o ha esigenze particolari. Valuta attentamente le opzioni disponibili e scegli quella che meglio si adatta al tuo stile di vita e alle tue necessità.</p>
      <p>Tjenestetorvet – Come confrontare velocemente preventivi in</p>
      <p>Danimarca</p>
      <p>Tjenestetorvet è uno di quei servizi super utili quando arrivi in</p>
      <p>Danimarca e devi capire quale assicurazione scegliere, quale compagnia di internet conviene di più, o se stai cercando una soluzione economica per la corrente o per installare una pompa di calore.</p>
      <p>È un portale gratuito che ti permette di ricevere più preventivi in una volta sola da aziende diverse, così puoi confrontare i prezzi senza dover contattare ogni fornitore singolarmente (cosa che in DK richiede sempre tempo e pazienza!).</p>
      <p>Cosa puoi confrontare?</p>
      <p>Assicurazioni (casa, auto, responsabilità, ecc.)</p>
      <p>Avvocati (per consulenze o pratiche specifiche)</p>
      <p>Internet/bredbånd</p>
      <p>Corrente elettrica</p>
      <p>Pompe di calore</p>
      <p>…e molti altri servizi legati alla vita quotidiana in Danimarca.</p>
      <p>Come funziona in pratica</p>
      <p>Scegli il servizio che ti interessa.</p>
      <p>Inserisci le informazioni richieste (pochissimi minuti).</p>
      <p>Ricevi più preventivi da vari fornitori.</p>
      <p>Li confronti e scegli quello che fa per te.</p>
      <p>Quanto costa?</p>
      <p>È completamente gratuito per te.</p>
      <p>Il portale guadagna dalle aziende, non dagli utenti. Tu puoi usarlo senza pagare nulla.</p>
      <p>Quando ti può essere utile nella vita reale?</p>
      <p>Quando devi scegliere l’assicurazione per il tuo primo appartamento in Danimarca.</p>
      <p>Quando vuoi cambiare compagnia internet perché quella attuale è lenta o troppo cara.</p>
      <p>Quando stai valutando una pompa di calore per la tua casa.</p>
      <p>Quando hai bisogno di una consulenza legale e vuoi capire chi offre il prezzo migliore.</p>
      <p>Gråsten</p>
      <p>Slot</p>
      <p>L'iscrizione all'AIRE (Anagrafe degli Italiani Residenti all'Estero) è obbligatoria per i cittadini italiani che trasferiscono la propria residenza all'estero per più di 12 mesi. Ecco un riassunto dettagliato per includerlo nella tua Guida per il trasferimento in</p>
      <p>Danimarca:</p>
      <p>Cosa comporta l'iscrizione all'AIRE</p>
      <ul><li>Obbligo legale: È necessaria per formalizzare la residenza</li></ul>
      <p>all'estero e garantire la regolarità amministrativa.</p>
      <ul><li>Procedura:</li><li>La domanda si presenta tramite il portale</li></ul>
      <p>o presso il Consolato italiano di competenza.</p>
      <ul><li>Documentazione richiesta: modulo compilato, copia del</li></ul>
      <p>documento d’identità italiano e una prova di residenza (ad esempio contratto d’affitto, bollette, o certificati di registrazione locale).</p>
      <ul><li>Cancellazione dal Comune italiano: L’iscrizione all’AIRE</li></ul>
      <p>comporta la cancellazione dall’anagrafe della popolazione residente in Italia.</p>
      <p>Diritti che decadono</p>
      <ul><li>Assistenza sanitaria pubblica italiana: Con l’iscrizione all’AIRE, si</li></ul>
      <p>perde l'accesso al Servizio Sanitario Nazionale (SSN), tranne in caso di rientro temporaneo in Italia per esigenze urgenti</p>
      <p>(accessibile con il modello S1 o tramite polizze private).</p>
      <ul><li>Alcune agevolazioni: Non si ha diritto ad alcune detrazioni</li></ul>
      <p>fiscali, come quelle per spese mediche, e potrebbero esserci limitazioni nelle prestazioni sociali erogate dai Comuni italiani.</p>
    ` },
  { n: 34, free: false, title: 'AIRE', teaser: 'Diritti mantenuti Assistenza consolare: Si ha diritto a richiedere assistenza presso il Consolato italiano, per esempio per il rinnovo del…',
    html: `
      <p>Diritti mantenuti</p>
      <ul><li>Assistenza consolare: Si ha diritto a richiedere assistenza presso</li></ul>
      <p>il Consolato italiano, per esempio per il rinnovo del passaporto.</p>
      <ul><li>Voto all'estero: Si può partecipare a referendum e elezioni</li></ul>
      <p>politiche italiane votando per corrispondenza.</p>
      <ul><li>Accesso alla cittadinanza e ad alcuni servizi: Si mantiene la</li></ul>
      <p>cittadinanza italiana e i diritti connessi, come l’accesso all’istruzione e all’assistenza sanitaria in Italia per soggiorni brevi​</p>
      <p>Vantaggi dell'iscrizione all'AIRE</p>
      <p>Registrazione formale presso il Consolato facilita l'accesso ai servizi consolari.</p>
      <p>Obblighi fiscali definiti: agevola la gestione delle imposte in Italia ed evita problemi di doppia imposizione​.</p>
      <p>Mod. Iscrizione</p>
      <p>Aire</p>
      <p>Mod. Cambio residenza https://bit.ly/49eVcPI https://bit.ly/4i2AwhP</p>
      <p>La Blå Kort danese (tessera sanitaria europea) è un documento che garantisce l'accesso all'assistenza sanitaria di base quando ti trovi temporaneamente in un altro paese europeo.</p>
      <p>Cosa copre la Blå Kort?</p>
      <p>Ti dà diritto alle cure mediche essenziali, necessarie durante il tuo soggiorno temporaneo in un altro paese europeo, alle stesse condizioni e costi applicati ai residenti locali.</p>
      <p>Copre visite mediche, ricoveri d'urgenza, farmaci essenziali e trattamenti legati a condizioni croniche, se necessari.</p>
      <p>Non copre:</p>
      <p>Rimpatri sanitari.</p>
      <p>Cure private.</p>
      <p>Assistenza non urgente o trattamenti programmati (es. interventi estetici).</p>
      <p>Dove funziona?</p>
      <p>Valida nei paesi dell’Unione Europea (UE), dello Spazio Economico</p>
      <p>Europeo (SEE) (Norvegia, Islanda e Liechtenstein) e in Svizzera.</p>
      <p>Quando usarla?</p>
      <p>Viaggi brevi, vacanze, studio, lavoro temporaneo.</p>
      <p>È essenziale averla sempre con te per evitare di pagare in anticipo per le cure mediche.</p>
      <p>Come ottenerla?</p>
      <p>In Danimarca, puoi richiederla tramite il portale online gratuitamente:</p>
      <p>bit.ly/3B56NUL</p>
      <p>Viene spedita al tuo indirizzo e ha una validità di 5 anni.</p>
      <p>“Come usufruire della sanità italiana o estera dopo l’iscrizione all’AIRE”</p>
      <p>Tessera sanitaria blu</p>
      <p>Blå Kort</p>
      <p>In Danimarca, esistono diverse piattaforme e organizzazioni che offrono l'accesso a case economiche attraverso un sistema di iscrizione e graduatoria. Ecco alcune delle principali opzioni e caratteristiche:</p>
      <ul><li>Danmark Bolig</li><li>Descrizione: Piattaforma nazionale che raccoglie oltre</li></ul>
      <p>560.000 alloggi in affitto gestiti da organizzazioni di edilizia sociale. Offre una panoramica completa di varie tipologie di case, incluse case per famiglie, studenti e anziani.</p>
      <ul><li>Iscrizione: Gratuita; non è richiesta una quota annuale per</li></ul>
      <p>accedere alle informazioni.</p>
      <ul><li>Caratteristiche: Permette di cercare alloggi disponibili o di</li></ul>
      <p>iscriversi a liste d'attesa. Le ricerche possono essere filtrate per criteri come dimensioni, prezzo massimo, accessibilità per disabili e possibilità di avere animali domestici.</p>
      <ul><li>Tempi di attesa: Variabili, a seconda della zona e del tipo di</li></ul>
      <p>alloggio richiesto.</p>
      <ul><li>Sito: (https://www.danmarkbolig.dk).</li><li>DAB (Dansk Almennyttigt Boligselskab)</li><li>Descrizione: Una delle più grandi organizzazioni di edilizia</li></ul>
      <p>sociale in</p>
      <p>Danimarca.</p>
      <p>Amministra numerosi complessi residenziali, compresi alloggi per studenti e anziani.</p>
      <ul><li>Iscrizione: Richiede una quota annuale, generalmente</li></ul>
      <p>intorno ai 100-300 DKK.</p>
      <ul><li>Caratteristiche: Consente di iscriversi a liste d'attesa per</li></ul>
      <p>diversi tipi di alloggi in varie località.</p>
      <ul><li>Tempi di attesa: Dipendono dalla domanda per l'area</li></ul>
      <p>desiderata e dalla disponibilità degli alloggi.</p>
      <ul><li>Sito: (https://www.dabbolig.dk)</li></ul>
    ` },
  { n: 35, free: false, title: 'Case del comune', teaser: 'BL - Danmarks Almene Boliger Descrizione: Associazione che rappresenta le organizzazioni di edilizia sociale in Danimarca. Fornisce…',
    html: `
      <ul><li>BL - Danmarks Almene Boliger</li><li>Descrizione: Associazione che rappresenta le organizzazioni di</li></ul>
      <p>edilizia sociale in Danimarca. Fornisce informazioni e accesso agli alloggi sociali in tutto il paese.</p>
      <ul><li>Iscrizione: Alcune organizzazioni richiedono una quota annuale</li></ul>
      <p>per la registrazione.</p>
      <ul><li>Caratteristiche: Focus su alloggi a prezzi accessibili, spesso</li></ul>
      <p>destinati a famiglie, studenti e persone a basso reddito.</p>
      <ul><li>Sito: BL.dk</li></ul>
      <p>Considerazioni</p>
      <ul><li>Costi: Alcune piattaforme, come DAB, richiedono una quota</li></ul>
      <p>annuale per iscriversi alle liste d'attesa, mentre altre, come</p>
      <p>DanmarkBolig, sono gratuite.</p>
      <ul><li>Tempi di attesa: In aree molto richieste, come Copenhagen, i</li></ul>
      <p>tempi di attesa possono essere lunghi (anche anni). In località meno popolose, l'accesso può essere più rapido.</p>
      <ul><li>Requisiti: Spesso è richiesto un numero CPR (codice personale</li></ul>
      <p>danese) per completare l'iscrizione.</p>
      <ul><li>Domea</li><li>Ampia Rete di Alloggi</li></ul>
      <p>Domea.dk collabora con numerose associazioni abitative locali</p>
      <p>(boligforeninger) in tutto il Paese, gestendo migliaia di case popolari.</p>
      <p>Offre diverse tipologie di abitazioni, da appartamenti a case unifamiliari, in varie zone della Danimarca, incluse aree urbane, suburbane e rurali.</p>
      <ul><li>Accessibilità Economica</li></ul>
      <p>Le abitazioni gestite da Domea sono sovvenzionate dal sistema di welfare danese, il che significa affitti più bassi rispetto al mercato privato.</p>
      <p>L’affitto è calcolato in base al costo effettivo della gestione dell’edificio, garantendo trasparenza e prezzi equi.</p>
      <ul><li>Iscrizione e Priorità</li></ul>
      <p>È necessario iscriversi alla lista d’attesa per accedere a una casa popolare tramite Domea.dk. L’iscrizione comporta un costo annuale</p>
      <p>(generalmente modesto, attorno ai 200-300 DKK).</p>
      <p>Le liste d’attesa funzionano su un sistema di anzianità, ma in alcuni casi, categorie specifiche (es. pensionati, giovani coppie o persone con bisogni speciali) possono avere priorità.</p>
      <ul><li>Supporto alla Comunità</li></ul>
      <p>Domea.dk non si limita a fornire abitazioni, ma promuove anche lo sviluppo di comunità forti e inclusive. Organizza spesso iniziative sociali e programmi per migliorare il benessere dei residenti.</p>
      <ul><li>Standard di Qualità</li></ul>
      <p>Gli alloggi sono mantenuti a un livello elevato, con regolari manutenzioni e aggiornamenti.</p>
      <p>La piattaforma offre informazioni dettagliate su ciascuna proprietà, incluse dimensioni, condizioni, costo dell'affitto e altre spese.</p>
      <ul><li>Flessibilità</li></ul>
      <p>È possibile trasferirsi facilmente all’interno della rete Domea, ad esempio passando da una casa più grande a una più piccola in base alle esigenze della propria famiglia.</p>
      <p>Alcuni alloggi sono progettati per essere accessibili a persone con disabilità.</p>
      <ul><li>Trasparenza e Sostenibilità</li></ul>
      <p>Domea.dk opera con un modello no-profit e reinveste gli utili nel miglioramento degli alloggi e delle strutture.</p>
      <p>Spesso, gli edifici sono progettati o ristrutturati seguendo standard di sostenibilità, con focus su efficienza energetica e riduzione dell'impatto ambientale.</p>
      <p>*Ecco una guida pratica per utilizzare Domea.dk e iscriversi alla lista d’attesa per un’abitazione popolare in Danimarca°.</p>
      <ul><li>Accedere al sito</li></ul>
      <p>Vai su www.domea.dk.</p>
      <p>Puoi navigare il sito in danese. Se hai difficoltà, usa un traduttore automatico come Google Translate per tradurre le pagine.</p>
      <ul><li>Creare un profilo</li></ul>
      <p>Per iscriversi, devi prima creare un account.</p>
      <ul><li>Clicca su "Log ind" o "Opret bruger" (Crea account).</li><li>Ti serviranno i seguenti dati:</li></ul>
      <p>Nome e cognome</p>
      <p>Indirizzo email</p>
      <p>Numero CPR (il codice fiscale danese). Se non hai ancora un</p>
      <p>CPR, potresti avere difficoltà a completare questa fase.</p>
      <p>Dati di contatto (telefono, indirizzo attuale, ecc.).</p>
      <ul><li>Iscriversi alle liste d’attesa</li></ul>
      <p>Una volta creato il profilo, vai nella sezione "Find bolig" (Trova abitazione).</p>
      <p>Cerca case disponibili in base a:</p>
      <p>Zona geografica.</p>
      <p>Tipo di abitazione (es. appartamento, casa unifamiliare, ecc.).</p>
      <p>Budget e dimensioni desiderate.</p>
      <p>Dopo aver selezionato una o più opzioni, puoi iscriverti alle liste d’attesa cliccando su "Skriv dig op" (Iscriviti).</p>
      <p>Costo dell’iscrizione</p>
      <p>Ogni lista ha un costo annuale (circa 200-300 DKK). Puoi pagare con carta di credito o altri metodi accettati.</p>
      <ul><li>Controllare lo stato della lista d’attesa</li></ul>
      <p>Accedi regolarmente al tuo profilo per monitorare la tua posizione nella lista.</p>
      <p>Domea.dk invia notifiche via email quando un’abitazione è disponibile per te.</p>
      <ul><li>Accettare o rifiutare un’abitazione</li></ul>
      <p>Quando ti offrono un’abitazione, hai un tempo limitato</p>
      <p>(solitamente pochi giorni) per accettarla.</p>
      <p>Se rifiuti più volte, potresti perdere priorità nella lista.</p>
      <ul><li>Altri consigli utili</li></ul>
      <p>Iscriviti a più liste d’attesa: aumenta le possibilità di trovare una casa.</p>
      <p>Flessibilità sulla zona: cerca anche in città o aree meno richieste, dove le liste d’attesa sono più corte.</p>
      <p>Priorità speciali: Se hai esigenze particolari (es. problemi di salute, disabilità, ecc.), contatta Domea per verificare se puoi ottenere priorità</p>
      <p>Green George</p>
      <p>Scultura di</p>
      <p>Thomas Dambo</p>
      <p>Christiania</p>
      <p>Copenaghen</p>
      <p>L'acquisto di una casa in Danimarca da parte di uno straniero, compresi i cittadini dell'UE, è fattibile ma richiede il rispetto di alcune regole specifiche.</p>
      <ul><li>Requisiti per acquistare una casa in Danimarca</li></ul>
      <p>Per acquistare una proprietà in Danimarca, uno straniero deve soddisfare almeno uno dei seguenti criteri:</p>
      <p>Residenza permanente in Danimarca: Devi aver vissuto nel paese per almeno 5 anni.</p>
      <p>Scopo professionale o familiare: Se hai un lavoro stabile in</p>
      <p>Danimarca o motivazioni familiari valide (es. coniuge o figli che vivono nel paese), puoi ottenere l'autorizzazione all'acquisto.</p>
      <p>Permesso speciale dal Ministero della Giustizia: Se non soddisfi i criteri sopra, puoi fare richiesta al Ministero della</p>
      <p>Giustizia danese per un permesso speciale</p>
      <p>♦️Guida in danese per l’acquisto di una casa 👇🏻</p>
      <p>Nota importante: I cittadini dell'UE possono avere un vantaggio grazie alla libertà di movimento, ma è comunque necessario dimostrare un legame concreto con la Danimarca.</p>
    ` },
  { n: 36, free: false, title: 'Acquistare casa in DK', teaser: 'Passaggi burocratici per acquistare una casa a. Cercare un avvocato immobiliare (boligadvokat) In Danimarca, è fortemente consigliato…',
    html: `
      <ul><li>Passaggi burocratici per acquistare una casa</li></ul>
      <p>a. Cercare un avvocato immobiliare (boligadvokat)</p>
      <p>In Danimarca, è fortemente consigliato assumere un avvocato immobiliare. Questo professionista ti assisterà nella verifica del contratto di vendita, della documentazione e delle condizioni della casa.</p>
      <p>L'avvocato immobiliare protegge i tuoi interessi durante tutta la transazione.</p>
      <p>b. Trovare la casa</p>
      <p>Puoi cercare case tramite portali online o agenzie immobiliari</p>
      <p>(ejendomsmægler).</p>
      <p>Alcuni dei siti più popolari sono:</p>
      <p>Boligsiden.dk: Portale ufficiale per annunci di case in vendita.</p>
      <p>Nybolig.dk: Agenzia immobiliare con una vasta selezione di proprietà.</p>
      <p>Home.dk: Un altro importante portale per case e appartamenti.</p>
      <p>Estate.dk: Specializzato in compravendite immobiliari.</p>
      <p>EDC.dk: Offre una gamma completa di proprietà residenziali e commerciali.</p>
      <p>c. Ottenere un prestito ipotecario</p>
      <p>La maggior parte delle persone in Danimarca finanzia l'acquisto tramite un mutuo. Le banche danesi offrono condizioni competitive, ma è necessario avere un buon storico creditizio e una documentazione chiara del reddito.</p>
      <p>Mutuo massimo: Di solito, puoi ottenere un finanziamento fino all’80% del valore della proprietà. Il resto deve essere coperto tramite risparmi o prestiti privati.</p>
      <p>d. Firmare il contratto preliminare</p>
      <p>Una volta trovata la casa, l'avvocato immobiliare negozierà i termini del contratto preliminare.</p>
      <p>Puoi richiedere una clausola speciale di</p>
      <p>"approvazione dell'avvocato" (advokatforbehold), che ti consente di ritirarti dalla trattativa senza perdere il deposito, se il tuo avvocato trova problemi.</p>
      <p>e. Registrare la proprietà</p>
      <p>Dopo aver firmato il contratto e completato il pagamento, è necessario registrare la proprietà al Registro delle Proprietà danese (Tinglysningsretten).</p>
      <p>C'è una tassa di registrazione da pagare, che è circa 0,6% del valore della proprietà, più una tassa fissa di 1.850 DKK.</p>
      <p>*Ulteriore sito: Boligejer.dk offre una panoramica, contiene guide e mette a disposizione strumenti utili per chi deve acquistare o vendere una casa.</p>
      <ul><li>Problematiche burocratiche</li></ul>
      <p>Lingua danese: La documentazione è spesso in danese, quindi può essere necessario un traduttore se non sei fluente.</p>
      <p>Lungaggini per l'autorizzazione: Se hai bisogno del permesso del</p>
      <p>Ministero della Giustizia, il processo può richiedere settimane o mesi.</p>
      <p>Imposte sulla proprietà: Devi considerare il costo delle tasse annuali sulla proprietà</p>
      <p>(ejendomsskat)</p>
      <p>e sul reddito immobiliare</p>
      <p>(ejendomsværdiskat).</p>
      <p>Legami insufficienti: Senza un forte legame con la Danimarca, ottenere il permesso può essere complicato.</p>
      <ul><li>A chi rivolgersi</li></ul>
      <p>Avvocato immobiliare (boligadvokat): Fondamentale per gestire contratti e trattative.</p>
      <p>Agenzia immobiliare (ejendomsmægler): Può aiutarti nella ricerca e negoziazione con il venditore.</p>
      <p>Ministero della Giustizia: Per richieste di permesso speciale</p>
      <p>(consulta il sito ufficiale per i moduli e i contatti).</p>
      <p>Banca danese: Per ottenere il mutuo e discutere le opzioni finanziarie.</p>
      <ul><li>Consigli pratici</li></ul>
      <p>Flessibilità geografica: Le case fuori dalle grandi città, come</p>
      <p>Copenaghen, Aarhus o Odense, sono più accessibili in termini di prezzo e tempi di attesa.</p>
      <p>Raccolta fondi personale: Avere una buona quota di capitale iniziale può ridurre le difficoltà legate al mutuo.</p>
      <p>Valutare bene i costi extra: Oltre al prezzo della casa, considera le tasse di registrazione, manutenzione, e le utenze.</p>
      <p>Altri modi di comprare casa in Danimarca</p>
      <p>Andelsbolig  – Pro e Contro</p>
      <p>Se un andelsbolig (cooperativa abitativa danese) sia una buona idea dipende dalle tue priorità personali e dalla specifica associazione abitativa; i vantaggi includono spesso un prezzo più basso e spese comuni condivise, mentre gli svantaggi possono essere prestiti bancari più costosi, libertà limitata per ristrutturazioni e il rischio di una diminuzione del valore se l’economia dell’associazione non è sana. Un’analisi approfondita delle condizioni economiche e degli statuti dell’associazione è fondamentale prima di prendere una decisione.</p>
      <p>Vantaggi di un andelsbolig</p>
      <ul><li>Prezzo più basso: spesso si ottiene più casa per il proprio denaro</li></ul>
      <p>rispetto a un’abitazione di proprietà, poiché il prezzo è inferiore.</p>
      <ul><li>Spese comuni: le spese di manutenzione dell’immobile vengono</li></ul>
      <p>condivise con gli altri soci.</p>
      <ul><li>Meno costi: non si paga l’imposta sul valore catastale e non ci sono</li></ul>
      <p>spese notarili per il rogito.</p>
      <ul><li>Possibilità di rivalutazione: puoi accumulare risparmio nel tuo</li></ul>
      <p>andelsbolig, come avviene con una casa di proprietà.</p>
      <p>Svantaggi di un andelsbolig</p>
      <ul><li>Prestiti più costosi: non si può accedere a un mutuo ipotecario</li></ul>
      <p>(realkreditlån), ma solo prestiti bancari, spesso più cari.</p>
      <p>Cosa dovresti considerare</p>
      <ul><li>Analizzare la situazione economica dell’associazione: controlla</li></ul>
      <p>bilanci, budget e piani di manutenzione per assicurarti che siano solidi ed evitare brutte sorprese.</p>
      <ul><li>Valutare ubicazione e potenziale valore futuro: una posizione</li></ul>
      <p>richiesta e l’intenzione di vivere nell’appartamento per diversi anni possono rendere l’investimento più vantaggioso.</p>
      <ul><li>Verificare statuto e regolamento: per capire chiaramente i tuoi</li></ul>
      <p>obblighi di manutenzione e le regole dell’associazione, ad esempio sull’affitto a terzi.</p>
      <ul><li>Parlare con consulenti: assicurati di avere una consulenza</li></ul>
      <p>competente sia dalla banca che da un avvocato prima di decidere.</p>
      <p>Skagen</p>
      <p>(Autunno)</p>
      <p>Scambio di abitazioni</p>
      <p>Hjembytte.dk è un portale danese per lo scambio di abitazioni in affitto.</p>
      <p>Il nome significa letteralmente “scambio di casa” (hjem = casa, bytte = scambiare).</p>
      <p>In pratica, è una piattaforma dove gli inquilini che vivono in affitto possono:</p>
      <p>inserire la propria casa (appartamento o stanza)</p>
      <p>indicare che tipo di abitazione stanno cercando in cambio trovare altri inquilini con cui scambiarsi gli appartamenti, con l’approvazione dei rispettivi proprietari.</p>
      <p>È molto usato in Danimarca da chi:</p>
      <p>vive in bolig sociali o cooperative e vuole spostarsi in un’altra zona, oppure non vuole affrontare liste d’attesa lunghe nei siti di alloggi pubblici.</p>
      <p>Serve quindi a facilitare i cambi di alloggio tra affittuari, non a trovare nuove case in affitto “classiche”.</p>
      <p>Tutto avviene legalmente, ma ogni scambio deve essere approvato dal landlord (il proprietario o l’amministrazione dell’immobile).</p>
      <p>Sito ufficiale: www.hjembytte.dk</p>
      <p>Forse può interessarti anche👇🏻</p>
    ` },
  { n: 37, free: false, title: 'Appartamenti arredati', teaser: 'La ricerca di appartamenti arredati può variare a seconda delle esigenze (breve o lungo termine). Ecco alcune opzioni da includere: Housing…',
    html: `
      <p>La ricerca di appartamenti arredati può variare a seconda delle esigenze (breve o lungo termine). Ecco alcune opzioni da includere:</p>
      <p>Housing Denmark:</p>
      <p>Specializzata in affitti per expat. Offrono assistenza nella gestione del contratto.</p>
      <p>Appartamenti spesso pronti per essere abitati con mobili essenziali.</p>
      <p>BoligPortal:</p>
      <p>La più grande piattaforma di affitti in Danimarca.</p>
      <p>Possibilità di filtrare gli annunci per "arredati".</p>
      <p>Richiede una piccola quota per accedere ai dettagli dei proprietari.</p>
      <p>Sublet e servizi di breve termine:</p>
      <p>Airbnb e  Wimdu  sono utili per contratti flessibili.</p>
      <p>Alcuni proprietari offrono sconti per periodi superiori a tre mesi.</p>
      <p>Coliving e stanze condivise:</p>
      <p>Findroommate.dk è perfetta per trovare stanze arredate e condividere le spese con altri inquilini.</p>
      <p>Molto utilizzata dai giovani professionisti e studenti.</p>
      <p>www.airbnb.dk www.wimdu.com www.findroommate.dk www.boligportal.dk www.housingdenmark.dk</p>
      <ul><li>Movinn:</li><li>Movinn offre appartamenti arredati e servizi pensati per espatriati,</li></ul>
      <p>lavoratori su progetti temporanei, aziende e individui. Gli appartamenti sono completamente arredati e includono servizi come Wi-Fi, lavanderia, manutenzione e pulizie regolari. Operano principalmente in</p>
      <p>Danimarca e Svezia, con sedi in città come Copenaghen e Aarhus.</p>
      <ul><li>Movinn si distingue per la flessibilità: non richiedono deposito per</li></ul>
      <p>clienti aziendali, offrono opzioni di locazione a breve termine con solo un mese di preavviso per la disdetta e un servizio di cambio appartamento senza complicazioni. È ideale per chi cerca un'alternativa confortevole e senza stress alle locazioni tradizionali.</p>
      <ul><li>Forenom:</li><li>Forenom è un'altra azienda specializzata in appartamenti arredati</li></ul>
      <p>per soggiorni a breve e lungo termine, pensati per viaggiatori d'affari, aziende e individui. Offrono opzioni flessibili, tra cui appartamenti di servizio, alloggi temporanei e hotel appartamento.</p>
      <ul><li>Presenti in diversi Paesi nordici, inclusa la Danimarca, Forenom si</li></ul>
      <p>concentra su comodità e personalizzazione, con opzioni di locazione su misura per diverse esigenze aziendali o personali.</p>
      <p>Entrambi i siti sono affidabili e ben recensiti, ma la scelta dipende dal tipo di servizio e flessibilità richiesti. Movinn sembra avere un focus più marcato sulla semplicità e sui servizi senza costi nascosti, mentre</p>
      <p>Forenom offre una maggiore diffusione geografica nei Paesi nordici.</p>
      <p>Suggerimenti per gli expat:</p>
      <p>Leggere attentamente i contratti, in particolare per spese incluse e durata minima.</p>
      <p>Contattare i locatori per confermare la disponibilità di mobili.</p>
      <p>www.movinn.com www.forenom.com</p>
    ` },
  { n: 38, free: false, title: 'Biciclette', teaser: 'In Danimarca, la bicicletta è una parte fondamentale della cultura e dei trasporti quotidiani. *Noleggio* Bike-sharing: Copenaghen ha…',
    html: `
      <p>In Danimarca, la bicicletta è una parte fondamentale della cultura e dei trasporti quotidiani.</p>
      <p>*Noleggio*</p>
      <ul><li>Bike-sharing: Copenaghen ha sistemi come Donkey Republic e</li></ul>
      <p>Bycyklen, che permettono di noleggiare bici tramite app.</p>
      <p>*Noleggio tradizionale*</p>
      <ul><li>Ci sono negozi locali in tutte le principali città, ideali per noleggi a</li></ul>
      <p>lungo termine.</p>
      <p>*Acquisto*</p>
      <ul><li>Nuovo: Rivenditori come  *Cykelshoppen.dk* e *Cykelpartner.dk*</li></ul>
      <p>offrono una vasta gamma di bici nuove.</p>
      <ul><li>Usato: Puoi acquistare bici economiche su *DBA.dk* o *Facebook</li></ul>
      <p>Marketplace*.</p>
      <p>*App utili*</p>
      <ul><li>Google Maps: Ottimo per trovare percorsi ciclabili.</li><li>Donkey Republic: Per il bike-sharing.</li><li>Rejseplanen: Include informazioni su trasporti pubblici con bici.</li></ul>
      <p>www.donkey.bike.dk www.ridemovi.com</p>
      <p>Siti utili:</p>
      <p>*Suggerimenti*</p>
      <ul><li>Usa una catena di sicurezza robusta; i furti di bici sono comuni.</li><li>Abbigliamento riflettente è consigliato per la sicurezza.</li></ul>
      <p>Gruppo FB: “BUY/SELL bicycle in Copenhagen”</p>
      <p>Per chi si trasferisce: la bicicletta non è solo un mezzo di trasporto ecologico, ma anche un modo per immergersi nella cultura danese.</p>
      <p>*Regole fondamentali*</p>
      <ul><li>Obblighi: Luci anteriori e posteriori sono obbligatorie di notte o in</li></ul>
      <p>condizioni di scarsa visibilità. Usa il campanello.</p>
      <ul><li>Codice della strada: Rispetta i segnali e dai la precedenza ai</li></ul>
      <p>pedoni.</p>
      <ul><li>Piste ciclabili: Segui le piste ciclabili dedicate; pedalare sui</li></ul>
      <p>marciapiedi è vietato.</p>
      <ul><li>Parcheggio: Usa solo aree designate, altrimenti potresti ricevere</li></ul>
      <p>una multa.</p>
    ` },
  { n: 39, free: false, title: 'Baby Sitting', teaser: 'Trovare una babysitter affidabile in Danimarca è semplice grazie a piattaforme dedicate che offrono una vasta gamma di opzioni per…',
    html: `
      <p>Trovare una babysitter affidabile in Danimarca è semplice grazie a piattaforme dedicate che offrono una vasta gamma di opzioni per soddisfare le esigenze delle famiglie.</p>
      <p>Ecco alcune piattaforme principali:</p>
      <ul><li>Sitly</li></ul>
      <p>Sitly connette genitori e babysitter locali, permettendo di filtrare i profili in base alle proprie esigenze. L’iscrizione base è gratuita, ma per contattare direttamente i babysitter è necessario un abbonamento Premium (da circa 250 DKK al mese). I genitori possono verificare le referenze e organizzare colloqui per selezionare il candidato ideale​.</p>
      <p>www.sitly.dk</p>
      <ul><li>MinBabysitter</li></ul>
      <p>La piattaforma offre un grande network di babysitter in tutta la</p>
      <p>Danimarca. Include funzioni di screening e verifiche di sicurezza, raccomandazioni basate su feedback di altri genitori, e un sistema per trovare babysitter anche in emergenza. È possibile accedere rapidamente a molte opzioni e creare una lista personalizzata delle preferenze.​ www.minbabysitter.dk</p>
      <ul><li>Babysits</li></ul>
      <p>Babysits è una piattaforma popolare che consente ai genitori di trovare babysitter nella propria area. È orientata a costruire fiducia tramite recensioni, interviste e comunicazioni dirette tra genitori e babysitter. Include un’app mobile per gestire il processo​.</p>
      <p>www.babysits.dk</p>
      <ul><li>Care è una piattaforma affidabile e popolare per trovare babysitter,</li></ul>
      <p>utilizzata anche in Danimarca. Offre numerosi vantaggi, come una vasta selezione di profili di babysitter, recensioni dei clienti, strumenti di messaggistica e opzioni di screening www.care.com</p>
      <p>Guida rapida e pratica per trovare lavoro come babysitter in tutta la</p>
      <p>Danimarca.</p>
      <p>Include gruppi Facebook nazionali e locali, portali di lavoro e consigli essenziali per candidarsi. Lingue consigliate: inglese e/o danese</p>
      <p>(parole chiave: babysitter, barnepige, børnepasning).</p>
      <p>Gruppi Facebook – Nazionali</p>
      <ul><li>Privat børnepasning Danmark – gruppo nazionale su childcare</li></ul>
      <p>privato.</p>
      <p>Link: https://www.facebook.com/groups/352617872596533/</p>
      <ul><li>Au pair in Denmark – community au pair/host families; utile anche per</li></ul>
      <p>networking babysitting.</p>
      <p>Link: https://www.facebook.com/groups/59583066626/</p>
      <p>Gruppi Facebook – Locali per Città</p>
      <p>🇩🇰 Copenaghen</p>
      <ul><li>Babysitters in Copenhagen</li></ul>
      <p>Link: https://www.facebook.com/groups/babysitter.copenhagen/</p>
      <ul><li>Copenhagen Babysitting</li></ul>
      <p>Link: https://www.facebook.com/groups/264567867219160/</p>
      <ul><li>Wonderful Copenhagen (community expat, utile per annunci)</li></ul>
      <p>Link: https://www.facebook.com/groups/WonderfulCopenhagen/</p>
      <p>🇩🇰 Aarhus</p>
      <ul><li>Aarhus Internationals (community expat: molti post su babysitting)</li></ul>
      <p>Link: https://www.facebook.com/groups/AarhusInternationals/</p>
      <ul><li>Børnepasning i Aarhus – Babysitter</li></ul>
      <p>Link: https://www.facebook.com/groups/444157597584861/</p>
      <ul><li>Babysitterforum i Aarhus og Omegn</li></ul>
      <p>Link: https://www.facebook.com/groups/323929471039373/</p>
      <p>🇩🇰 Odense</p>
      <ul><li>Internationals in Odense (community con annunci lavoro babysitting)</li></ul>
      <p>Link: https://www.facebook.com/groups/555647407786416/</p>
      <ul><li>Barnepige og rengøringshjælp i Odense</li></ul>
      <p>Link: https://www.facebook.com/groups/612743405532127/</p>
      <p>🇩🇰 Aalborg</p>
      <ul><li>Barnepige i Aalborg</li></ul>
      <p>Link: https://www.facebook.com/groups/barnepigeiaalborg/</p>
      <ul><li>Aalborg Internationals (community expat)</li></ul>
      <p>Link: https://www.facebook.com/groups/aalborginternational/</p>
      <p>🇩🇰 Esbjerg / Ribe / Varde</p>
      <ul><li>Barnepige Esbjerg</li></ul>
      <p>Link: https://www.facebook.com/groups/243763502331717/</p>
      <ul><li>Barnepige – Esbjerg, Ribe og Varde</li></ul>
      <p>Link: https://www.facebook.com/groups/295366503812828/</p>
      <ul><li>Esbjerg International Community (community expat)</li></ul>
      <p>Link:</p>
      <p>https://www.facebook.com/groups/esbjerginternationalcommunity/</p>
      <p>🇩🇰 Vejle</p>
      <ul><li>Babysitter, Barnepige, Børnepasser i VEJLE</li></ul>
      <p>Link: https://www.facebook.com/groups/566877313411527/</p>
      <ul><li>Det sker i Vejle (community locale; a volte annunci babysitter)</li></ul>
      <p>Link: https://www.facebook.com/groups/543322636067762/</p>
      <p>Portali di lavoro e piattaforme utili</p>
      <ul><li>Jobindex – principale portale lavoro in DK. Parole chiave: babysitter,</li></ul>
      <p>barnepige, childcare.</p>
      <p>Link: https://www.jobindex.dk</p>
      <ul><li>Work in Denmark – portale pubblico per offerte lavoro.</li></ul>
      <p>Link: https://workindenmark.dk</p>
      <ul><li>DBA (Den Blå Avis) – annunci tra privati, a volte babysitting.</li></ul>
      <p>Link: https://www.dba.dk</p>
      <p>Consigli essenziali per candidarsi</p>
      <ul><li>Pubblica in EN/DA: indica anni di esperienza, fasce d’età seguite,</li></ul>
      <p>attività offerte (compiti, pasti, attività creative).</p>
      <ul><li>Disponibilità chiara: pomeriggi/serate/weekend; specifica zone</li></ul>
      <p>coperte e se hai bici/mezzo.</p>
      <ul><li>Referenze: cita 1–2 famiglie (nome + contatto, se consentito) o</li></ul>
      <p>prepara referenze su richiesta.</p>
      <ul><li>Messaggio rapido per rispondere ai post: 3–4 righe + contatti.</li></ul>
      <p>Mini‑template (post breve da copiare)</p>
      <p>EN 🇬🇧Hi! I’m [Name], experienced babysitter in [City/Area]. I can help with homework, prepare simple meals and plan creative activities. Available afternoons/evenings/weekends. DM me or contact: [email] [phone].</p>
      <p>DA🇩🇰 Hej! Jeg hedder [Navn] og har erfaring som babysitter i [By/Område]. Jeg kan hjælpe med lektier, lave enkle måltider og arrangere kreative aktiviteter.</p>
      <p>Tilgængelig eftermiddag/aften/weekend. Skriv en besked eller kontakt mig på:</p>
      <p>[email] [telefon].</p>
    ` },
  { n: 40, free: false, title: 'Skat — Introduzione al sistema fiscale danese', teaser: '(SKAT) Sistema fiscale danese: cosa sapere Residenza fiscale Se sei residente in Danimarca, sei soggetto a «imposta illimitata»: devi…',
    html: `
      <p>(SKAT)</p>
      <p>Sistema fiscale danese: cosa sapere</p>
      <ul><li>Residenza fiscale</li></ul>
      <p>Se sei residente in Danimarca, sei soggetto a «imposta illimitata»:</p>
      <p>devi dichiarare il tuo reddito mondiale (cioè redditi sia da</p>
      <p>Danimarca sia da altri paesi) per essere tassato in Danimarca.</p>
      <p>Se non sei residente in Danimarca, ma hai redditi da fonti danesi, applica la tassazione “limitata”: solo i redditi danesi.</p>
      <p>Devi stabilire quando sei considerato residente fiscale:</p>
      <p>tipicamente se abiti in Danimarca, hai il domicilio, etc.</p>
      <ul><li>Aliquote di imposta sul reddito</li></ul>
      <p>Il sistema fiscale è progressivo: più alto è il reddito, maggiore la percentuale d’imposta.</p>
      <p>Per il 2025-2026: per un residente le aliquote massime possono arrivare fino a circa</p>
      <p>52,07</p>
      <p>%</p>
      <p>(o</p>
      <p>~55,90% includendo contributi/AM-tax) sul reddito ordinario.</p>
      <p>Ci sono imposte statali e comunali, e contributi sul mercato del lavoro (“AM-tax”) da considerare.</p>
      <p>Esempio: per redditi da dividendi/azioni, dal 2025 scatta un’aliquota del 27% fino ad una certa soglia e 42% oltre (la soglia sarà aumentata nel 2026)</p>
      <p>Copenaghen</p>
      <ul><li>Deduzioni, tassazione speciale e convenzioni</li></ul>
      <p>La</p>
      <p>Danimarca ha stipulato convenzioni contro la doppia imposizione — per esempio con l’Italia — per evitare che lo stesso reddito venga tassato due volte.</p>
      <p>Ci sono regimi speciali per “expatriates” o ricercatori: ad es.</p>
      <p>tassazione forfettaria del ~27% (più contributo) per un periodo definito, se soddisfano certi requisiti.</p>
      <p>Devi registrarti e ottenere il “tax-card” (carta fiscale) dopo l’arrivo in Danimarca, e fare la dichiarazione di imposta annuale</p>
      <p>(årsopgørelsen) tramite il sistema digitale.</p>
      <ul><li>Redditi e beni all’estero</li></ul>
      <p>Se possiedi proprietà immobiliari fuori dalla Danimarca (ad es. in</p>
      <p>Italia), queste rientrano nella dichiarazione se sei residente fiscale in Danimarca: devi verificare obblighi specifici per “non-Danish property”. skat.dk</p>
      <p>Se hai conti bancari, investimenti, redditi da affitto in Italia: in teoria questi redditi vanno dichiarati in Danimarca se sei residente fiscale lì, ma bisogna verificare la convenzione italo-danese contro doppia imposizione per capire il paese che ha diritto a tassarli e possibili crediti d’imposta.</p>
      <ul><li>IVA, imposte indirette e tasse patrimoniali</li></ul>
      <p>L’IVA danese (moms) è al 25% sulla maggior parte dei beni e servizi.</p>
      <p>Non esiste una vera “wealth tax” (tassa sul patrimonio totale) in</p>
      <p>Danimarca per le persone fisiche ordinariamente residenti.</p>
      <p>Principali detrazioni e agevolazioni fiscali in Danimarca</p>
      <p>Pendlerfradrag (deduzione per pendolari)</p>
      <p>Se vai al lavoro lontano da casa (minimo 24 km al giorno), puoi dedurre una cifra per chilometro percorso. L’importo varia ogni anno, ma in media è tra 1,90 e 4,60 DKK al km (solo andata).</p>
      <p>Renteudgifter (interessi passivi)</p>
      <p>Gli interessi pagati su mutui, prestiti o carte di credito possono essere dedotti parzialmente dal reddito imponibile.</p>
      <p>Fagforeningskontingent (quota sindacale o A-kasse)</p>
      <p>Le quote versate al sindacato o all’assicurazione contro la disoccupazione (A-kasse) sono deducibili fino a un massimo stabilito da SKAT ogni anno.</p>
      <p>Håndværkerfradrag</p>
      <p>/</p>
      <p>Servicefradrag</p>
      <p>(detrazioni per lavori domestici)</p>
      <p>Se paghi professionisti per servizi domestici (pulizie, giardinaggio, manutenzioni, riparazioni energetiche), puoi dedurre una parte della spesa manodopera.</p>
      <p>Gaver til velgørenhed (donazioni a enti riconosciuti)</p>
      <p>Le donazioni a organizzazioni approvate dallo Stato sono deducibili fino a un limite annuale.</p>
      <p>Arbejde i hjemmet (lavoro da casa)</p>
      <p>Alcuni lavoratori possono dedurre spese per home office, ma solo se riconosciute dal datore o dimostrabili come necessarie.</p>
      <p>Tutte le detrazioni si inseriscono o si controllano nella tua area personale TastSelv su skat.dk, di solito già precompilate ma modificabili fino a 1° luglio dell’anno successivo.</p>
    ` },
  { n: 41, free: false, title: 'Supermercati', teaser: 'Il supermercato più economico in Danimarca nel 2024 pare sia il 365 Discount. Al secondo posto troviamo Rema 1000 e al terzo posto Netto.…',
    html: `
      <p>Il supermercato più economico in Danimarca nel 2024 pare sia il  365</p>
      <p>Discount. Al secondo posto troviamo Rema 1000 e al terzo posto Netto.</p>
      <p>Un altro economico e con prodotti di qualità è LIDL in cui si trova anche qualcosa di italiano e di altre nazioni.</p>
      <p>I supermercati più cari e di alta qualità sono Føtex, Kvickly, Bilka, Meny e Daglì Brugsen.</p>
      <p>Se cerchi prodotti di marca e internazionali, frutta fresca, carne di ottimo taglio, ecc. è necessario fare la spesa in questi ultimi supermercati menzionati. Qui, sebbene abbiano prezzi elevati, ci sono comunque delle ottime offerte in determinati periodi del mese. Una cosa molto utile da fare, sarebbe quella di visitare il sito del supermercato e vedere le offerte settimanali. Un’altra cosa da fare potrebbe essere quella di guardare la rivista settimanale, che si trova solitamente all’ingresso del supermercato.</p>
      <p>Tips: se vai al supermercato in un orario che oscilla tra le 18 e le 19 è molto probabile che tu possa trovare in delle ceste apposite o, dipende, a seconda del tipo di prodotto, merce di ogni genere super scontata.</p>
      <p>Questo perchè sta per scadere e viene applicato uno sconto elevato per evitare lo spreco del cibo.</p>
      <p>Solitamente, questa merce ha l’etichetta del prezzo di colore giallo, a differenza delle altre di colore bianco.</p>
      <p>Ne ho parlato in questo video in cui potrai farti un’idea di quanto spenda una famiglia in un mese a Copenaghen.</p>
      <p>Link:</p>
      <p>https://youtu.be/BDpo2wgAiVg?</p>
      <p>si=99Dq6z36ZMxprfy4</p>
      <p>Supermercati e catene in Danimarca – Guida aggiornata</p>
      <p>La spesa in Danimarca è notoriamente più costosa rispetto ad altri paesi europei, ma scegliere la catena giusta può fare una grande differenza. Le principali catene si dividono in due categorie: i supermercati 'discount', con prezzi bassi e assortimento essenziale, e i supermercati 'full-service', con più scelta e servizi aggiuntivi.</p>
      <p>Catene Discount (più economiche)</p>
      <p>REMA 1000</p>
      <p>Prezzo: 💸 Più economica</p>
      <p>Cosa trovi: Alimentari base, freschi, prodotti locali, private label.</p>
      <p>Fedeltà: App REMA 1000 – funzioni 'Scan Selv' (self checkout) e offerte digitali.</p>
      <p>Spesa online/consegna: Sito e app con ordini locali (copertura variabile).</p>
      <p>Note: Catena norvegese molto popolare in Danimarca; riferimento per chi vuole risparmiare.</p>
      <p>Lidl</p>
      <p>Prezzo: 💸 Economica</p>
      <p>Cosa trovi: Alimentari, importazioni tedesche, prodotti internazionali e bio.</p>
      <p>Fedeltà: App Lidl Plus con coupon e offerte settimanali.</p>
      <p>Spesa online/consegna: Spesa online limitata; focus su promozioni in store.</p>
      <p>Note: Molto apprezzata da expat per la varietà e le promozioni extra alimentari.</p>
      <p>365discount (ex Fakta)</p>
      <p>Prezzo: 💸 Economica</p>
      <p>Cosa trovi: Essenziali, prodotti Coop e private label.</p>
      <p>Fedeltà: App Coop con punti e bonus per membri.</p>
      <p>Spesa online/consegna: Nessun servizio nazionale; dipende dal punto vendita locale.</p>
      <p>Note: Catena Coop nata per coprire la fascia discount; presente in tutto il paese.</p>
      <p>Netto</p>
      <p>Prezzo: 💸 Economica</p>
      <p>Cosa trovi: Prodotti base, promozioni settimanali, linea economica</p>
      <p>'Xtra'.</p>
      <p>Fedeltà: App Netto+ con sconti personalizzati e funzione Scan&amp;Go.</p>
      <p>Spesa online/consegna: Nessuna spesa online diretta, ma offerte digitali via app.</p>
      <p>Note:</p>
      <p>Molto diffusa, specialmente nelle grandi città.</p>
      <p>Prezzi leggermente più alti di REMA 1000.</p>
      <p>Supermercati Full-Service</p>
      <p>Føtex / Bilka (Salling Group)</p>
      <p>Prezzo: 💶 Medio</p>
      <p>Cosa trovi: Ampia scelta: alimentari, articoli per la casa, elettronica, abbigliamento (Bilka).</p>
      <p>Fedeltà: App føtex plus con coupon e scontrini digitali.</p>
      <p>Spesa online/consegna: Servizio BilkaToGo – ritiro e consegna a domicilio (circa 39 DKK imballaggio + 39 DKK consegna).</p>
      <p>Note: Ideale per spese grandi o familiari; Bilka è un vero ipermercato.</p>
      <p>Brugsen / SuperBrugsen / Kvickly (Coop)</p>
      <p>Prezzo: 💶 Medio</p>
      <p>Cosa trovi: Ampio assortimento, focus su prodotti locali, bio e artigianali.</p>
      <p>Fedeltà: App Coop + carta membro 'Coop Medlem' con offerte e bonus.</p>
      <p>Spesa online/consegna: Servizio coop.dk MAD chiuso nel 2023; acquisti solo in store.</p>
      <p>Note: Ottimo per chi cerca qualità e prodotti sostenibili; presenti anche piccoli negozi Brugsen nei paesi.</p>
      <p>MENY (Dagrofa)</p>
      <p>Prezzo: 💶 Medio-alto</p>
      <p>Cosa trovi: Macelleria, gastronomia, piatti pronti e prodotti premium.</p>
      <p>Fedeltà: App MENY con offerte personalizzate e lista spesa digitale.</p>
      <p>Spesa online/consegna: Spesa online su shop.meny.dk (consegna gratuita per ordini superiori a 999 DKK, altrimenti il costo di consegna è di 79 DKK).</p>
      <p>Note: Scelta ideale per prodotti freschi e di qualità; servizio 'mad ud af huset' per catering.</p>
      <p>SPAR</p>
      <p>Prezzo: 💶 Medio</p>
      <p>Cosa trovi: Supermercato di quartiere o di paese con generi alimentari e articoli base.</p>
      <p>Fedeltà: App SPAR SAMMEN con prezzi membri e volantini digitali.</p>
      <p>Spesa online/consegna: Consegne tramite Wolt in molte aree urbane.</p>
      <p>Note: Comodo e vicino, ma non il più economico.</p>
      <p>Fa parte del gruppo Dagrofa.</p>
      <p>Min Købmand</p>
      <p>Prezzo: 💶 Medio-alto</p>
      <p>Cosa trovi: Negozio di prossimità gestito da commercianti locali.</p>
      <p>Fedeltà: Promozioni locali; integrazione con app Dagrofa e Wolt.</p>
      <p>Spesa online/consegna: Spesso disponibile via Wolt per consegne rapide.</p>
      <p>Note: Il minimarket del villaggio: utile per chi vive in aree rurali o ha bisogno di orari lunghi.</p>
      <p>Consigli pratici</p>
      <ul><li>Scarica le app fedeltà: Coop, Netto+, føtex plus, Lidl Plus, MENY.</li></ul>
      <p>Molte offerte sono solo digitali.</p>
      <ul><li>Controlla le 'ugeavis' (offerte settimanali) disponibili online o in app.</li><li>Porta sempre le tue borse riutilizzabili: i sacchetti si pagano a parte</li></ul>
      <p>(2–5 DKK).</p>
      <ul><li>Se vuoi risparmiare, orientati su REMA 1000 o Netto; se cerchi qualità</li></ul>
      <p>e freschi, scegli MENY o SuperBrugsen.</p>
      <ul><li>Per chi vive fuori città, Min Købmand o SPAR sono i punti di riferimento</li></ul>
      <p>per la spesa quotidiana.</p>
      <p>Parcheggi gratuiti:</p>
      <p>A Copenaghen, trovare parcheggi gratuiti è difficile nelle aree centrali, ma possibile in periferia.</p>
      <p>Zone come Amager Strand e Valby offrono opzioni gratuite, ma occorre verificare i limiti di tempo.</p>
      <p>Parcheggi a pagamento:</p>
      <p>La città è divisa in zone colorate:</p>
      <p>Rossa (più cara): circa 38 DKK/ora.</p>
      <p>Verde: circa 25 DKK/ora.</p>
      <p>Blu: circa 16 DKK/ora.</p>
      <p>Gialla: 12 DKK/ora</p>
      <p>I prezzi variano in base alla vicinanza al centro. Le tariffe serali e nei weekend sono spesso più basse.</p>
      <p>App utili:</p>
      <p>EasyPark: consente di pagare e prolungare la sosta tramite smartphone.</p>
      <p>ParkMan: offre una panoramica dei parcheggi disponibili e permette pagamenti rapidi.</p>
      <p>Copenhagen Parking: app ufficiale con informazioni aggiornate sulle zone e le tariffe.</p>
    ` },
  { n: 42, free: false, title: 'Parcheggi', teaser: 'ParkPark: progettata per semplificare e rendere più economico il pagamento dei parcheggi in Danimarca. Questa app si distingue per il suo…',
    html: `
      <p>ParkPark: progettata per semplificare e rendere più economico il pagamento dei parcheggi in Danimarca. Questa app si distingue per il suo approccio trasparente, applicando solo un piccolo sovrapprezzo orario per coprire i costi di gestione, senza gli alti margini aggiuntivi tipici di altre soluzioni di parcheggio.</p>
      <p>Caratteristiche principali:</p>
      <ul><li>Costo basso e trasparenza: La App richiede una ricarica</li></ul>
      <p>iniziale (ad esempio, 200 DKK), che serve come credito per pagare il parcheggio. È possibile ottenere un rimborso completo del credito non utilizzato senza costi aggiuntivi.</p>
      <ul><li>Compatibilità: Disponibile sia per dispositivi iOS che Android, è</li></ul>
      <p>facile da usare e offre funzionalità GPS per individuare i parcheggi.</p>
      <ul><li>Copertura: Include molte città e aree della Danimarca e</li></ul>
      <p>consente l'accesso a parcheggi gestiti da autorità comunali e private.</p>
      <ul><li>Internazionalizzazione: Oltre ai servizi in Danimarca, supporta il</li></ul>
      <p>pagamento dei parcheggi in alcune altre nazioni, rendendola utile anche per chi viaggia.</p>
      <p>Punti di attenzione:</p>
      <p>Alcuni utenti segnalano problemi con abbonamenti non voluti o difficoltà nel ricevere rimborsi tempestivi. È consigliabile leggere attentamente i termini e condizioni prima di utilizzarla​.</p>
    ` },
  { n: 43, free: false, title: 'Viaggiare con gli animali', teaser: 'Introduzione di animali in Danimarca Requisiti sanitari: L\'animale deve avere un microchip conforme agli standard ISO. È obbligatoria la…',
    html: `
      <p>Introduzione di animali in Danimarca</p>
      <ul><li>Requisiti sanitari:</li></ul>
      <p>L'animale deve avere un microchip conforme agli standard ISO.</p>
      <p>È obbligatoria la vaccinazione antirabbica aggiornata, somministrata almeno 21 giorni prima dell'ingresso in Danimarca.</p>
      <p>Serve un passaporto europeo per animali domestici, rilasciato da un veterinario autorizzato.</p>
      <p>Se l'animale proviene da Paesi extra-UE, potrebbero essere necessari ulteriori certificati e test sanitari specifici</p>
      <ul><li>Restrizioni razziali:</li></ul>
      <p>Sono vietati i cani appartenenti a 13 razze considerate pericolose, come Pit Bull Terrier, Tosa Inu, Dogo Argentino, American Bulldog, e i loro incroci. In questi casi non è possibile importarli, allevarli o venderli nel Paese.</p>
      <p>Siti utili per informazioni ufficiali:</p>
      <p>Autorità veterinaria danese: www.foedevarestyrelsen.dk</p>
      <p>Acquisto e adozione</p>
      <p>I cani e gatti possono essere acquistati da allevatori certificati o adottati tramite rifugi per animali. I rifugi danesi sono molto attenti al benessere degli animali e controllano rigorosamente i potenziali adottanti.</p>
      <p>App e siti utili per adozioni o acquisti includono:</p>
      <p>www.dyrevaernet.dk     (rifugi e adozioni)</p>
      <p>www.koebhund.dk     (vendita di cani)</p>
      <p>Vita quotidiana con animali in Danimarca</p>
      <p>1- Regole per i bisogni:</p>
      <p>È obbligatorio raccogliere i rifiuti del cane e utilizzare i cestini dedicati presenti in città e nei parchi.</p>
      <p>Molti parchi pubblici hanno aree specifiche per cani dove possono essere lasciati liberi.</p>
      <p>2- Alloggi e strutture pet-friendly:</p>
      <p>Hotel per animali: esistono pensioni e hotel per animali domestici, come: www.hunde-hotellet.dk  ideali per viaggi o assenze prolungate.</p>
      <p>Pet sitting: servizi come www.gudog.dk offrono pet-sitter affidabili, oppure www.care.com</p>
      <p>3- Trasporto:</p>
      <p>Gli animali sono ammessi su autobus e treni (di solito gratuitamente per i piccoli animali in contenitori, mentre per i cani di taglia grande potrebbe essere richiesto un biglietto).</p>
      <p>Il cane deve sempre essere tenuto al guinzaglio in spazi pubblici, salvo nelle aree designate.</p>
      <p>Cure veterinarie e assicurazioni</p>
      <p>Le cliniche veterinarie in Danimarca sono ben attrezzate, ma i costi possono essere elevati.</p>
      <p>È consigliato sottoscrivere un’assicurazione sanitaria per animali domestici.</p>
      <p>Siti e App consigliati:</p>
      <p>www.dyrlægevagten.dk  per emergenze veterinarie.</p>
      <p>www.gipote.dk  piattaforma per acquistare e vendere animali.</p>
      <p>www.vifinderhund.dk  volontari si occupano di cercare i cani smarriti.</p>
      <p>N.B.: cani di piccola taglia e gatti non pagano sui mezzi pubblici, purché sistemati in appositi contenitori/sacche. I cani di grossa taglia pagano il biglietto al costo di un bambino.</p>
      <p>Trasferimento dall’ Italia</p>
      <p>Ecco tutto ciò che devi sapere, dalla documentazione ai mezzi di trasporto possibili.</p>
      <p>Documenti obbligatori</p>
      <ul><li>Passaporto europeo per animali</li><li>Microchip registrato</li><li>Vaccinazione antirabbica valida (da almeno 21 giorni)</li><li>Certificato di buona salute (richiesto per viaggio in aereo)</li><li>Viaggio in auto (consigliato se possibile)</li><li>Vantaggi: il cane viaggia con te, meno stress, più flessibilità.</li><li>Richiede: kennel o trasportino sicuro, soste frequenti.</li><li>Costi stimati: 300–600 € tra benzina, pedaggi, hotel pet-friendly.</li><li>Volo aereo (in stiva pressurizzata)</li><li>Adatto per cani sopra 10 kg. Compagnie come Lufthansa, KLM, Air</li></ul>
      <p>France e SAS accettano animali in stiva.</p>
      <ul><li>Serve: kennel rigido omologato IATA, certificato di buona salute,</li></ul>
      <p>prenotazione speciale.</p>
      <ul><li>Costi stimati: 150–400 € a tratta.</li><li>Svantaggi: ambiente stressante per l'animale.</li><li>Trasporto via terra con corriere professionale</li><li>Adatto se non puoi accompagnare il cane. Ditte come EuroPet</li></ul>
      <p>Transport, Animalcouriers, Pet Transport Europe offrono viaggi su veicoli attrezzati.</p>
      <ul><li>Richiede: stessi documenti sanitari, kennel o trasportino.</li><li>Costi stimati: 500–1.000 €.</li><li>Svantaggi: viaggio più lungo, affidamento totale a terzi.</li></ul>
      <p>Consiglio finale</p>
      <p>Scegli la soluzione più adatta in base al tuo tempo, budget e al temperamento del cane.</p>
      <p>Ricorda:</p>
      <p>mai affidarsi a corrieri improvvisati. Se hai dubbi, chiedi consiglio a un veterinario e verifica sempre con le autorità danesi.</p>
      <p>La mia Sandy ❤️</p>
      <p>🍀 Per lavare il tuo cane:</p>
      <p>www.maxizoo.dk</p>
      <p>In tutta la nazione!</p>
    ` },
  { n: 44, free: false, title: 'Trasferire denaro', teaser: 'Trasferire denaro da un conto bancario italiano a uno danese di solito non comporta il pagamento di tasse specifiche, poiché si tratta di…',
    html: `
      <p>Trasferire denaro da un conto bancario italiano a uno danese di solito non comporta il pagamento di tasse specifiche, poiché si tratta di un trasferimento di denaro già in tuo possesso. Tuttavia, ci sono alcune considerazioni importanti da tenere a mente:</p>
      <ul><li>Costi del trasferimento</li><li>Se entrambi i conti sono in Euro e il trasferimento avviene all'interno</li></ul>
      <p>dell'UE, puoi utilizzare un bonifico **SEPA** (Single Euro Payments</p>
      <p>Area). In questo caso, le commissioni sono minime o assenti, purché la transazione avvenga in Euro.</p>
      <ul><li>Se trasferisci denaro in corone danesi (DKK), potrebbero esserci costi</li></ul>
      <p>aggiuntivi legati al cambio valuta e alle commissioni bancarie.</p>
      <ul><li>Controllo dei capitali</li><li>In Danimarca e in Italia non ci sono limiti o tasse sui trasferimenti di</li></ul>
      <p>denaro all'interno dell'UE, purché il denaro abbia una provenienza lecita.</p>
      <ul><li>Tuttavia, è possibile che il trasferimento venga monitorato per</li></ul>
      <p>verificare che non si tratti di attività sospette, come evasione fiscale o riciclaggio di denaro. Se trasferisci somme elevate, potrebbe essere richiesto di giustificarne la provenienza.</p>
      <ul><li>Dichiarazione fiscale</li><li>Se sei residente fiscale in Danimarca, dovresti dichiarare i tuoi redditi</li></ul>
      <p>globali all’autorità fiscale danese (SKAT). Tuttavia, trasferire denaro che è già stato tassato in Italia non comporta una doppia tassazione.</p>
      <ul><li>Se il trasferimento riguarda redditi non dichiarati o investimenti,</li></ul>
      <p>potresti dover fornire documentazione alle autorità danesi.</p>
      <p>Consigli utili:</p>
      <ul><li>Consulta un consulente fiscale per assicurarti di rispettare tutte le</li></ul>
      <p>normative.</p>
      <ul><li>Se trasferisci grandi somme, informa preventivamente la tua banca,</li></ul>
      <p>ma ricorda di dichiarare tutto a SKAT.</p>
      <p>Ecco alcune piattaforme e servizi affidabili per trasferire denaro con attenzione ai costi e ai tassi di cambio:</p>
      <ul><li>Wise (ex TransferWise)</li><li>Caratteristiche principali:</li><li>Offre tassi di cambio reali (quelli del mercato interbancario),</li></ul>
      <p>senza margini nascosti.</p>
      <ul><li>Commissioni trasparenti e basse, calcolate in base all'importo.</li><li>Molto veloce: i trasferimenti spesso arrivano in poche ore o</li></ul>
      <p>giorni.</p>
      <p>Ideale per: Somme piccole e medie con risparmio sui costi di conversione.</p>
      <p>Sito:</p>
      <ul><li>Revolut</li><li>Caratteristiche principali:</li><li>Permette di trasferire denaro in DKK senza commissioni (entro</li></ul>
      <p>un limite mensile).</p>
      <ul><li>Cambio valuta competitivo durante i giorni lavorativi (attenzione</li></ul>
      <p>a sovrapprezzi nel weekend).</p>
      <ul><li>Facile da usare tramite app, con possibilità di inviare</li></ul>
      <p>direttamente da un conto multivaluta.</p>
      <p>Ideale per: Chi ha già un account Revolut e trasferisce somme occasionali.</p>
      <p>Sito:</p>
      <ul><li>PayPal</li><li>Caratteristiche principali:</li><li>Molto comodo e veloce, soprattutto se anche il destinatario ha</li></ul>
      <p>un conto PayPal.</p>
      <ul><li>Tuttavia, i tassi di cambio e le commissioni possono essere meno</li></ul>
      <p>vantaggiosi rispetto ad altre opzioni.</p>
      <p>Ideale per: Trasferimenti urgenti o piccoli importi.</p>
      <p>Sito:</p>
      <p>https://wise.com/dk/blog/sende-penge-til-udlandet-danske-bank https://www.revolut.com https://www.paypal.com/dk/home</p>
      <ul><li>OFX</li></ul>
      <p>Caratteristiche principali:</p>
      <p>Ottime tariffe per trasferimenti di grandi somme.</p>
      <p>Assistenza clienti dedicata e cambio competitivo.</p>
      <p>Può richiedere più tempo rispetto a Wise o Revolut.</p>
      <p>Ideale per: Importi elevati o trasferimenti aziendali.</p>
      <p>Sito:</p>
      <ul><li>Bonifico bancario SEPA</li></ul>
      <p>Caratteristiche principali:</p>
      <p>Se trasferisci in Euro all'interno dell'UE, molte banche italiane offrono bonifici SEPA gratuiti o con basse commissioni.</p>
      <p>Tuttavia, convertire in corone danesi attraverso le banche potrebbe comportare tassi di cambio meno favorevoli.</p>
      <p>Ideale per: Somme in Euro senza urgenza.</p>
      <p>Consiglio finale:</p>
      <p>Prima di scegliere, verifica il costo totale del trasferimento</p>
      <p>(commissioni + cambio valuta). Puoi simulare le spese sul sito o l'app della piattaforma.</p>
      <p>Se vuoi risparmiare, Wise e Revolut sono tra le opzioni più economiche e veloci.</p>
      <p>Per somme elevate, valuta servizi dedicati come OFX o un consulente bancario.</p>
      <p>https://www.ofx.com/en-ie/</p>
    ` },
  { n: 45, free: false, title: 'Auto e furgoni Euro 4', teaser: 'Molti italiani arrivano in Danimarca con un’auto o un furgone Euro 4 ancora perfettamente funzionante in Italia, ma le regole qui sono…',
    html: `
      <p>Molti italiani arrivano in Danimarca con un’auto o un furgone Euro 4 ancora perfettamente funzionante in Italia, ma le regole qui sono molto diverse — soprattutto se diventi residente.</p>
      <p>Se hai la residenza in Danimarca</p>
      <p>Appena ottieni la residenza danese, non puoi continuare a circolare con targa italiana, neanche se il mezzo è intestato a te. Hai 30 giorni di tempo per registrarlo presso</p>
      <p>Motorstyrelsen, pagare la registreringsafgift e ottenere le targhe danesi. In caso contrario rischi sanzioni salate, fermo amministrativo o confisca del veicolo.</p>
      <p>Il problema delle Euro 4</p>
      <p>La Danimarca non vieta i veicoli Euro 4 in sé, ma limita fortemente la loro circolazione nelle città più grandi. Dal 2023, nelle cosiddette miljøzoner (zone a basse emissioni) — come Copenaghen, Aarhus, Odense e Aalborg — i furgoni diesel Euro 4 senza filtro antiparticolato</p>
      <p>(DPF) non possono entrare.</p>
      <p>Se il tuo furgone Euro 4 ha già un DPF installato, puoi continuare a circolare, ma devi documentarlo ufficialmente, registrarlo su miljoezoner.dk e applicare l’adesivo identificativo. Se non ha il DPF, puoi installarne uno omologato oppure limitare l’uso del mezzo alle aree fuori dalle città principali.</p>
      <p>La tassa di registrazione (registreringsafgift)</p>
      <p>Quando registri un veicolo Euro 4 in Danimarca, Motorstyrelsen calcola la tassa in base a valore, emissioni, anno e uso del veicolo. I costi possono essere molto elevati, anche pari o superiori al valore del mezzo. Molti residenti preferiscono quindi vendere l’auto in Italia e comprarne una direttamente in Danimarca.</p>
      <p>Eccezioni temporanee</p>
      <p>Puoi guidare un veicolo con targa italiana solo per un periodo breve se non sei ancora residente, sei appena arrivato (entro 30 giorni) o hai ottenuto un permesso temporaneo da Motorstyrelsen.</p>
      <p>Skagen</p>
      <p>*TjekBil* è un ottimo strumento danese per controllare la storia delle auto usate prima di acquistarle, e può davvero aiutarti a evitare truffe o brutte sorprese. Ecco una panoramica di come funziona e altri suggerimenti utili:</p>
      <p>Cosa fa?</p>
      <ul><li>Fornisce una panoramica dettagliata sulla storia dell’auto usando il</li></ul>
      <p>numero di targa o il numero di telaio (VIN).</p>
      <p>Puoi verificare:</p>
      <ul><li>Chilometraggio</li></ul>
      <p>registrato</p>
      <p>(per evitare manomissioni del contachilometri).</p>
      <ul><li>Precedenti incidenti o danni.</li><li>Proprietari precedenti.</li><li>Controlli periodici obbligatori (MOT o *syn* in danese).</li><li>Eventuali pendenze fiscali sull’auto (es. tasse di registrazione non</li></ul>
      <p>pagate).</p>
      <p>Perché è utile?</p>
      <ul><li>Evita acquisti rischiosi e ti permette di avere una visione chiara del</li></ul>
      <p>valore e delle condizioni del veicolo.</p>
      <p>Quanto costa?</p>
      <ul><li>Alcune informazioni di base sono gratuite, ma per dettagli più</li></ul>
      <p>approfonditi potrebbe esserci un piccolo costo.</p>
      <p>Sito:</p>
      <p>“Come controllare e verificare che un’auto usata sia affidaile e non rubata”</p>
      <p>https://www.tjekbil.dk/import-af-bil#</p>
      <p>Altri modi per non essere truffati con un’auto usata in Danimarca</p>
      <ul><li>Controlla il registro delle ipoteche</li></ul>
      <p>Verifica se l’auto è stata utilizzata come garanzia per un prestito.</p>
      <p>Acquistare un’auto con un pegno potrebbe comportare problemi legali e il rischio di dover pagare il debito residuo.</p>
      <ul><li>Chiedi il report del controllo tecnico (Synsrapport)</li></ul>
      <p>In Danimarca, tutte le auto devono passare un controllo tecnico regolare (syn).</p>
      <p>Puoi richiedere il report completo al venditore o trovarlo su siti come</p>
      <ul><li>Acquista tramite rivenditori affidabili</li></ul>
      <p>Preferisci concessionarie riconosciute rispetto a venditori privati.</p>
      <p>I concessionari offrono spesso garanzie sull’acquisto, che non sono obbligatorie tra privati.</p>
      <ul><li>Utilizza FDM (Forenede Danske Motorejere)</li></ul>
      <p>È l’associazione danese degli automobilisti.</p>
      <p>Offrono servizi di ispezione pre-acquisto per verificare le condizioni del veicolo.</p>
      <p>Possono anche aiutarti con la documentazione e l'assicurazione.</p>
      <ul><li>Evita transazioni in contanti</li></ul>
      <p>In Danimarca, le transazioni per grandi somme (come l’acquisto di un’auto) devono essere documentate. Usa un bonifico bancario per una maggiore sicurezza.</p>
      <ul><li>Controlla le recensioni del venditore</li></ul>
      <p>Se stai acquistando online, es. su siti come Bilbasen.dk o verifica le recensioni e la reputazione del venditore.</p>
      <p>Consiglio extra:</p>
      <p>Documenti da richiedere:</p>
      <ul><li>Certificato di proprietà (Registreringsattest).</li><li>Prova del pagamento delle tasse stradali (grøn ejerafgift o vægtafgift).</li><li>Contratto di vendita chiaro, preferibilmente firmato con assistenza legale.</li></ul>
      <p>Bilbogen.dk https://fdm.dk</p>
      <p>GulogGratis.dk</p>
    ` },
  { n: 46, free: false, title: 'Aprire un\'attività', teaser: 'Erhvervshus – Centri per il Business in Danimarca Gli Erhvervshus sono centri pubblici di consulenza gratuita per imprenditori, start-up e…',
    html: `
      <p>Erhvervshus – Centri per il Business in Danimarca</p>
      <p>Gli Erhvervshus sono centri pubblici di consulenza gratuita per imprenditori, start-up e lavoratori autonomi in Danimarca. Il termine significa letteralmente “case del business” e rappresenta un punto di riferimento locale per chi vuole aprire, sviluppare o far crescere un’attività.</p>
      <p>Struttura</p>
      <p>Esistono sei Erhvervshuse regionali in tutta la Danimarca, finanziati dallo Stato e gestiti in collaborazione con le regioni danesi. Ogni ufficio copre la propria area geografica e lavora insieme ai municipi</p>
      <p>(kommuner) e alle camere di commercio locali.</p>
      <p>A chi si rivolgono</p>
      <ul><li>A chi vuole avviare una nuova impresa (iværksættere).</li><li>A chi ha già un’azienda e vuole farla crescere o internazionalizzarla.</li><li>A chi vuole capire come registrare una ditta (PMV, IVS, ApS, ecc.),</li></ul>
      <p>cercare finanziamenti o migliorare la strategia aziendale.</p>
      <ul><li>A chi è appena arrivato in Danimarca e vuole lavorare in proprio: molti</li></ul>
      <p>servizi sono disponibili anche in inglese.</p>
      <p>Cosa offrono</p>
      <ul><li>Consulenza gratuita e personalizzata con esperti del business</li></ul>
      <p>danese.</p>
      <ul><li>Assistenza nella registrazione su virk.dk e nella comprensione delle</li></ul>
      <p>regole fiscali (SKAT, CVR, VAT/MOMS).</p>
      <ul><li>Workshop e seminari su business plan, marketing, digitalizzazione e</li></ul>
      <p>sostenibilità.</p>
      <ul><li>Aiuto per accedere a fondi, sovvenzioni e programmi europei.</li><li>Collegamenti con mentor, investitori e reti locali di imprese.</li></ul>
      <p>Esempi pratici</p>
      <p>Un italiano che vuole aprire un’attività di consulenza o import-export può ricevere aiuto per scegliere la forma legale corretta, registrare il</p>
      <p>CVR e trovare finanziamenti pubblici. Le piccole imprese possono ottenere supporto per vendere all’estero e per la promozione internazionale.</p>
      <p>Dove trovarli</p>
      <ul><li>Erhvervshus Nordjylland – https://www.ehnord.dk</li><li>Erhvervshus Midtjylland – https://www.ehmidtjylland.dk</li><li>Erhvervshus Sydjylland – https://www.ehsyd.dk</li><li>Erhvervshus Sjælland – https://www.ehsjaelland.dk</li><li>Erhvervshus Hovedstaden – https://www.ehhs.dk</li><li>Business Center Bornholm – https://www.businessbornholm.dk</li></ul>
      <p>🟩Gli Erhvervshus sono la porta d’ingresso ufficiale al mondo del business in Danimarca. Che tu voglia aprire una piccola attività, un negozio online o una società, puoi ricevere gratuitamente l’aiuto di consulenti esperti, anche in inglese. È un servizio pubblico pensato per farti partire con il piede giusto — senza sprecare tempo o soldi inutilmente.</p>
      <p>♦️Vuoi aprire una piccola attività per vendere online?</p>
      <p>https://www.ecwid.com/da/blog/how-to-start-a-small- business.html</p>
      <p>♦️ Ulteriori dritte per aprire un’attività da soli:</p>
      <p>www.salary.dk</p>
      <p>♦️”Your Europe” è un sito che fornisce informazioni su previdenza, imprenditoria, ecc.</p>
      <p>www.europa.eu</p>
      <p>♦️Forbrugerrådet Tænk è l’organizzazione danese per la tutela dei consumatori, indipendente e senza fini di lucro. Sul suo sito ufficiale (taenk.dk) pubblica test comparativi, guide e consigli su prodotti, banche, assicurazioni e servizi, aiutando i cittadini a fare scelte informate e a conoscere i propri diritti. È una risorsa molto utile anche per gli expat, perché permette di orientarsi meglio nel mercato danese e capire come funziona la tutela dei consumatori nel Paese.</p>
      <ul><li>www.tænk.dk</li></ul>
    ` },
  { n: 47, free: false, title: 'Volontariato', teaser: 'Volontariato in Danimarca — panoramica per expat Il volontariato in Danimarca è molto diffuso e ben organizzato: tantissime associazioni,…',
    html: `
      <p>Volontariato in Danimarca — panoramica per expat</p>
      <p>Il volontariato in Danimarca è molto diffuso e ben organizzato:</p>
      <p>tantissime associazioni, enti locali e organizzazioni umanitarie offrono opportunità per chi vuole contribuire alla comunità, indipendentemente dalla lingua o dalla nazionalità.</p>
      <p>Tipi di volontariato</p>
      <p>Sociale: supporto a famiglie vulnerabili, anziani, migranti, richiedenti asilo, bambini nei centri d’accoglienza.</p>
      <p>Ambiente e natura:</p>
      <p>pulizia spiagge, progetti ecologici, manutenzione parchi, iniziative green.</p>
      <p>Cultura ed eventi: aiuto durante festival, attività nei “culture houses”, organizzazione di eventi, supporto logistico/comunicazione.</p>
      <p>Educazione e giovani: tutoraggio, doposcuola, mentoring, attività sportive e ricreative.</p>
      <p>Progetti rurali o agricoli:</p>
      <p>fattorie biologiche, iniziative di sostenibilità, attività nelle isole o campagne.</p>
      <p>Città dove è più facile fare volontariato</p>
      <p>Copenaghen: molte organizzazioni internazionali, possibilità di fare volontariato anche senza parlare danese.</p>
      <p>Aarhus: comunità giovane, molte iniziative per studenti ed expat.</p>
      <p>Odense, Aalborg, Roskilde: centri con forte attività associativa e progetti culturali.</p>
      <p>Aree rurali e isole: progetti di natura/ambiente, fattorie e iniziative ecologiche.</p>
      <p>Dove rivolgersi</p>
      <p>Portali nazionali di annunci del volontariato:</p>
      <ul><li>Frivilligjob.dk</li><li>Volunteering.dk</li></ul>
      <p>Organizzazioni umanitarie:</p>
      <p>Croce</p>
      <p>Rossa danese, centri asilo, associazioni locali.</p>
      <p>Comuni e “Frivilligcenter”: centri volontariato presenti in molte città che orientano i nuovi arrivati.</p>
      <p>Opportunità di volontariato in Danimarca</p>
      <p>Røde Kors (Croce Rossa Danese) – Copenaghen e altre città</p>
      <p>Attività: supporto nei negozi dell’usato, aiuto nei centri per richiedenti asilo, attività ricreative con adulti e bambini, compagnia agli anziani.</p>
      <p>Impegno: da 2–3 ore a settimana; accettano anche volontari stranieri.</p>
      <p>Vores Asylbørn – Copenaghen</p>
      <p>Attività: supporto ai bambini nei centri d’accoglienza, aiuto compiti, organizzazione attività creative, gioco e accompagnamento.</p>
      <p>Impegno: minimo 2 ore alla settimana per periodi medio-lunghi.</p>
      <p>Frivilligcenter VSV – Copenaghen (Vesterbro, Valby, Sydhavnen)</p>
      <p>Attività: progetti di comunità, mense sociali, attività per giovani, supporto ad eventi, iniziative ambientali.</p>
      <p>Impegno: molto flessibile; varie attività disponibili anche per chi non parla danese.</p>
      <p>Progetti ambientali rurali – Bornholm, Jylland, Sjælland</p>
      <p>Attività: manutenzione aree naturali, progetti ecologici, fattorie biologiche, pulizia spiagge, glamping e attività sostenibili.</p>
      <p>Impegno: da alcune settimane a qualche mese; perfetti per chi ama la natura e vuole immergersi nel territorio.</p>
      <p>Portali nazionali (Frivilligjob.dk / Volunteering.dk)</p>
      <p>Attività: centinaia di annunci su tutta la Danimarca — sociale, ambiente, cultura, sport, progetti per bambini e giovani.</p>
      <p>Impegno: variabile; ideale per trovare opportunità vicino a casa o adatte a chi parla inglese.</p>
    ` },
  { n: 48, free: false, title: 'Testimonianze in video', teaser: '4 video con testimonianze reali di chi vive già in Danimarca.',
    html: `
      <p>Le vostre esperienze, positive o negative che siano, sono importanti e utili per chiunque voglia trasferirsi o ci sta pensando, perciò sono sempre disponibile qualora qualcuno volesse essere intervistato e inserito nel prossimo aggiornamento della Guida</p>
      <p>Di seguito il video di Mario, un bravissimo ragazzo, primo dei miei</p>
      <p>“danimarchizzati”.</p>
      <p>Racconta brevemente la sua bella avventura in questo Paese 🇩🇰</p>
      <p>▶️ <a href="https://youtu.be/nKPLfcyRYyg" target="_blank" rel="noopener">Mario Cozzi, scultore italiano, felice della sua scelta</a></p>
      <p>La storia di Chiara non è altrettanto positiva, ma non ha comunque smesso di sognare la Danimarca 🇩🇰😍</p>
      <p>▶️ <a href="https://youtu.be/a7xcF7gWnFc" target="_blank" rel="noopener">Chiara racconta la sua esperienza</a></p>
      <p>Giuseppe ci porta invece nel mondo universitario danese: la sua esperienza alla SDU (University of Southern Denmark), tra Esbjerg e Odense 🎓</p>
      <p>▶️ <a href="https://youtu.be/t6bggu34BWs" target="_blank" rel="noopener">Giuseppe si racconta: la mia esperienza alla SDU di Esbjerg e Odense</a></p>
      <p>E infine Lara, che ha scelto Copenaghen per studiare musica alla Royal Danish Academy of Music, l’Accademia Reale Danese di Musica 🎶</p>
      <p>▶️ <a href="https://youtu.be/g4dqD2O3vUQ" target="_blank" rel="noopener">Studentessa alla Royal Danish Academy of Music (Accademia Reale Danese di Musica): Lara Biancalana</a></p>
    ` },
  { n: 49, free: false, title: 'Ristoranti italiani in Danimarca', teaser: '(i vostri consigli) Copenaghen: Il Mattarello (Nørreport) Parma e Pasta (Lyngby) Italgastro (Nørreport) Divina Pizza &amp; Birra Da Fabio…',
    html: `
      <p>(i vostri consigli)</p>
      <p>Copenaghen:</p>
      <ul><li>Il Mattarello (Nørreport)</li><li>Parma e Pasta (Lyngby)</li><li>Italgastro (Nørreport)</li><li>Divina Pizza &amp; Birra</li><li>Da Fabio (Vanløse)</li><li>Forni’s (Ringsted)</li><li>Italy&amp;Italy (Ringsted)</li><li>Pizzeria Luca (Copenaghen e Lyngby)</li><li>Pizzeria Little Brother (Copenaghen-Frederiksberg)</li><li>Pizzeria Sud</li><li>Pizzeria MaMeMi</li><li>Ristorante da Claudio (Frederiksberg)</li><li>La Fresca (Vanløse)</li><li>Strutto</li><li>A metà Bakery (Valby)</li><li>Personal Chef - Massimo Ricci- Sito Web 👇🏻</li></ul>
      <p>www.coo-king.net</p>
      <p>❤️ Questo mini elenco di ristoranti italiani in giro per la Danimarca è nato per caso, ma ho intenzione di svilupparlo bene e inserire ulteriori ristoranti (e dettagli con foto), che mi segnalerete voi e che proverò anch’io personalmente. Grazie per le vostre dritte e continuate a farlo, in modo da aggiornare la Guida la prossima Primavera.</p>
      <ul><li>Ristorante Italiano (Nørreport)</li><li>La Passione (Holte)</li><li>Da Basso (Hellerup)</li></ul>
      <p>Odense:</p>
      <p>I pupi Siciliani</p>
      <p>Gourmet Værkstedet</p>
      <p>Storms Pakhus (Street Food) stand italiano</p>
      <p>Il Gusto (Gelateria)</p>
    ` },
  { n: 50, free: false, title: 'Eventi di Danimarchizziamoci', teaser: '“Danimarchizzatis Hygge” 11.2023 Venner CPH Lucys Fødselsdag 12.2022 Next House CPH Conclusione Trasferirsi in Danimarca è stata una delle…',
    html: `
      <p>“Danimarchizzatis Hygge”</p>
      <ul><li>11.2023</li></ul>
      <p>Venner</p>
      <p>CPH</p>
      <p>Lucys Fødselsdag</p>
      <ul><li>12.2022</li></ul>
      <p>Next House</p>
      <p>CPH</p>
      <p>Conclusione</p>
      <p>Trasferirsi in Danimarca è stata una delle decisioni migliori della mia vita. L'ho trovata un paese accogliente, pieno di opportunità e con un ritmo di vita che mi ha permesso di ritrovare me stessa. Sono sicura che anche tu ti innamorerai di questo piccolo angolo di paradiso. Immagina di vivere in un paese dove l’aria è pulita, i servizi pubblici sono efficienti e la qualità della vita è alta. Benvenuto in Danimarca! Qui potrai godere di un discreto sistema sanitario, di un'istruzione di livello mondiale e di una natura incontaminata. Cosa aspetti a farne parte? Sei pronto a diventare un vero danese? Impara a pronunciare “Hygge” acquista una bicicletta e preparati a fare scorta di candele. Scherzi a parte, la Danimarca è un paese che ha molto da offrire. Scopri perché così tanti decidono di trasferirsi qui e unisciti alla comunità! La Danimarca ti aspetta con le braccia aperte! Un paese dove la sostenibilità incontra il comfort, l'uguaglianza è un valore fondamentale e l’Hygge fa parte della vita quotidiana. Non perdere l'opportunità di vivere un'esperienza unica. Inizia a pianificare il tuo trasferimento e preparati a scoprire un nuovo modo di vivere.</p>
      <p>Trasferirsi in Danimarca può sembrare complesso, ma con le giuste informazioni e preparazione è possibile affrontare ogni sfida con successo. Sono qui per aiutarti, sia attraverso i miei contenuti gratuiti sui social, sia con consulenze personalizzate, visita il sito:</p>
      <p>www.danimarchizziamoci.eu</p>
      <p>Spero che questa “Guida” ti sia stata utile e mi farebbe piacere ricevere un tuo feedback.</p>
      <p>Grazie</p>
      <p>Buona fortuna nel tuo percorso!</p>
      <p>I miei canali Social</p>
      <p>Seguimi!</p>
      <p>E abbraccio tutti voi per la fiducia e l’affetto che mi dimostrate!</p>
      <p>Ringraziamenti e saluti</p>
      <p>Ringrazio Lara, Giuseppe, Mario e Chiara per le loro testimonianze🤍</p>
      <p>Luisanna e Alessandro per il contributo sui miei social, e alcune foto all’interno della Guida. Li trovate su IG 🤍</p>
      <p>@ggluisanna</p>
      <p>@alessandro_echi_danimarca (seguite il podcast)</p>
      <p>Un ringraziamento davvero speciale va a chi mi ha ispirata alla creazione di questa Guida, senza di lei non esisterebbe.</p>
      <p>Giulia Gaglianese 🤍</p>
      <p>👇🏻</p>
      <p>CEO&amp;Founder ICONÉLLE</p>
      <p>Marketing|Communication|Branding|Content Creation&amp;Social Media</p>
      <p>Management</p>
      <p>IG e TikTok: @iconelle.it</p>
    ` },
  { n: 51, free: false, title: 'Aziende internazionali che assumono in inglese', teaser: 'Elenco di aziende che lavorano in inglese in Danimarca, divise per settore, con città e link diretto alla pagina "lavora con noi" di ognuna.',
    html: `
      <p>Un elenco di aziende che lavorano abitualmente in inglese in Danimarca, divise per settore: hotel e ospitalità, negozi, IT, grandi multinazionali, ingegneria e industria, logistica.</p>
      <p>Per ognuna trovi la città o la sede e il link diretto alla pagina "lavora con noi" ufficiale. A differenza di un singolo annuncio, la pagina di un'azienda non scade: mostra sempre le posizioni aperte in quel momento.</p>
      <p><a class="btn-primary" href="viewer.html?f=Aziende_Internazionali_Danimarca.pdf">📄 Apri l'elenco delle aziende</a></p>
    ` },
];


// Esempio di posizioni aperte (dati reali di esempio — da aggiornare settimanalmente)
const SAMPLE_JOBS = [
  { role: "Kok (cuoco/a)", city: "Copenaghen", status: "Esempio" },
  { role: "IT Supporter", city: "Odense", status: "Esempio" },
  { role: "Housekeeper — Scandic Sydhavnen", city: "Copenaghen", status: "Esempio" },
  { role: "Maler (pittore edile)", city: "Frederiksberg C", status: "Esempio" },
];

// Risorse gratuite (scheda "Gratis"): PDF caricati accanto a index.html
// Documenti della parte a pagamento aperti nel visualizzatore (titolo + scheda a cui tornare)
const PAID_DOCS = [
  { file: "Aziende_Internazionali_Danimarca.pdf", title: "Aziende internazionali che assumono in inglese" },
];

const FREE_RESOURCES = [
  { file: "Cosa_Nessuno_ti_Dice_Danimarca.pdf", icon: "🇩🇰",
    title: "Cosa nessuno ti dice sulla Danimarca",
    desc: "Cosa non piace ai danesi, cosa odiano, a cosa fanno attenzione e cosa si aspettano da chi arriva." },
  { file: "Costo_della_Vita_Italia_vs_Danimarca.pdf", icon: "💶",
    title: "Quanto costa vivere in Danimarca?",
    desc: "Confronto con l'Italia, numeri alla mano: affitto, spesa, bollette, trasporti." },
  { file: "Scheda_Sopravvivenza_Danimarca.pdf", icon: "🆘",
    title: "Scheda di sopravvivenza",
    desc: "Numeri di emergenza, 10 frasi in danese che ti salvano e cosa fare se ti serve aiuto." },
  { file: "Muoversi_in_Danimarca_Guida_pratica.pdf", icon: "🚆",
    title: "Muoversi in Danimarca",
    desc: "Treni, bus, metro e Rejsekort: come spostarsi e quali app usare." },
  { file: "Fleksjob_in_Danimarca_Guida_pratica.pdf", icon: "🤝",
    title: "Il Fleksjob in Danimarca",
    desc: "Cos'è, chi può averlo e come funziona la richiesta al Comune." },
  { file: "Trasferirsi_in_Danimarca_da_Pensionato.pdf", icon: "🌅",
    title: "Trasferirsi in Danimarca da pensionato",
    desc: "Residenza, sanità, pensione e tasse per chi arriva senza lavorare." },
];
