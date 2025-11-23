import type { MultipleChoiceQuestion, TextFillQuestion, ReadingText } from './types';

// Using a new version identifier 'v9' for all questions
export const WOORDENSCHAT_QUESTIONS: MultipleChoiceQuestion[] = [
  // 34 Vragen (v9)
  { id: 'w_v9_1', type: 'multiple-choice', text: 'Pragmatisch', options: [{id: 'wv91a', text: 'Theoretisch'}, {id: 'wv91b', text: 'Praktisch'}, {id: 'wv91c', text: 'Dromerig'}, {id: 'wv91d', text: 'Chaotisch'}] },
  { id: 'w_v9_2', type: 'multiple-choice', text: 'Cruciaal', options: [{id: 'wv92a', text: 'Onbelangrijk'}, {id: 'wv92b', text: 'Beslissend'}, {id: 'wv92c', text: 'Gevaarlijk'}, {id: 'wv92d', text: 'Tijdelijk'}] },
  { id: 'w_v9_3', type: 'multiple-choice', text: 'Faciliteren', options: [{id: 'wv93a', text: 'Vergemakkelijken'}, {id: 'wv93b', text: 'Moeilijk maken'}, {id: 'wv93c', text: 'Kopen'}, {id: 'wv93d', text: 'Bouwen'}] },
  { id: 'w_v9_4', type: 'multiple-choice', text: 'Kwantiteit', options: [{id: 'wv94a', text: 'Kwaliteit'}, {id: 'wv94b', text: 'Hoeveelheid'}, {id: 'wv94c', text: 'Eigenschap'}, {id: 'wv94d', text: 'Waarde'}] },
  { id: 'w_v9_5', type: 'multiple-choice', text: 'Nuance', options: [{id: 'wv95a', text: 'Groot verschil'}, {id: 'wv95b', text: 'Fijn onderscheid'}, {id: 'wv95c', text: 'Kleur'}, {id: 'wv95d', text: 'Oordeel'}] },
  { id: 'w_v9_6', type: 'multiple-choice', text: 'Consensus', options: [{id: 'wv96a', text: 'Ruzie'}, {id: 'wv96b', text: 'Overeenstemming'}, {id: 'wv96c', text: 'Twijfel'}, {id: 'wv96d', text: 'Gesprek'}] },
  { id: 'w_v9_7', type: 'multiple-choice', text: 'Sceptisch', options: [{id: 'wv97a', text: 'Gelovig'}, {id: 'wv97b', text: 'Twijfelend'}, {id: 'wv97c', text: 'Zeker'}, {id: 'wv97d', text: 'Blij'}] },
  { id: 'w_v9_8', type: 'multiple-choice', text: 'Potentieel', options: [{id: 'wv98a', text: 'Mogelijkheid'}, {id: 'wv98b', text: 'Kracht'}, {id: 'wv98c', text: 'Gevaar'}, {id: 'wv98d', text: 'Zekerheid'}] },
  { id: 'w_v9_9', type: 'multiple-choice', text: 'Integriteit', options: [{id: 'wv99a', text: 'Slimheid'}, {id: 'wv99b', text: 'Eerlijkheid'}, {id: 'wv99c', text: 'Snelheid'}, {id: 'wv99d', text: 'Rijkdom'}] },
  { id: 'w_v9_10', type: 'multiple-choice', text: 'Impliciet', options: [{id: 'wv910a', text: 'Duidelijk'}, {id: 'wv910b', text: 'Inbegrepen'}, {id: 'wv910c', text: 'Uitgesproken'}, {id: 'wv910d', text: 'Eenvoudig'}] },
  { id: 'w_v9_11', type: 'multiple-choice', text: 'Subjectief', options: [{id: 'wv911a', text: 'Feitelijk'}, {id: 'wv911b', text: 'Persoonlijk'}, {id: 'wv911c', text: 'Algemeen'}, {id: 'wv911d', text: 'Correct'}] },
  { id: 'w_v9_12', type: 'multiple-choice', text: 'Variabele', options: [{id: 'wv912a', text: 'Constante'}, {id: 'wv912b', text: 'Wisselende factor'}, {id: 'wv912c', text: 'Uitkomst'}, {id: 'wv912d', text: 'Oorzaak'}] },
  { id: 'w_v9_13', type: 'multiple-choice', text: 'Hypothese', options: [{id: 'wv913a', text: 'Feit'}, {id: 'wv913b', text: 'Veronderstelling'}, {id: 'wv913c', text: 'Bewezen stelling'}, {id: 'wv913d', text: 'Leugen'}] },
  { id: 'w_v9_14', type: 'multiple-choice', text: 'Analyseren', options: [{id: 'wv914a', text: 'Samenvoegen'}, {id: 'wv914b', text: 'Ontleden'}, {id: 'wv914c', text: 'Maken'}, {id: 'wv914d', text: 'Vergeten'}] },
  { id: 'w_v9_15', type: 'multiple-choice', text: 'Component', options: [{id: 'wv915a', text: 'Geheel'}, {id: 'wv915b', text: 'Onderdeel'}, {id: 'wv915c', text: 'Resultaat'}, {id: 'wv915d', text: 'Begin'}] },
  { id: 'w_v9_16', type: 'multiple-choice', text: 'Fictief', options: [{id: 'wv916a', text: 'Echt'}, {id: 'wv916b', text: 'Verzonnen'}, {id: 'wv916c', text: 'Historisch'}, {id: 'wv916d', text: 'Toekomstig'}] },
  { id: 'w_v9_17', type: 'multiple-choice', text: 'Corruptie', options: [{id: 'wv917a', text: 'Eerlijkheid'}, {id: 'wv917b', text: 'Omkoping'}, {id: 'wv917c', text: 'Samenwerking'}, {id: 'wv917d', text: 'Verbetering'}] },
  { id: 'w_v9_18', type: 'multiple-choice', text: 'Expansie', options: [{id: 'wv918a', text: 'Krimp'}, {id: 'wv918b', text: 'Uitbreiding'}, {id: 'wv918c', text: 'Stilstand'}, {id: 'wv918d', text: 'Vertrek'}] },
  { id: 'w_v9_19', type: 'multiple-choice', text: 'Globaal', options: [{id: 'wv919a', text: 'Plaatselijk'}, {id: 'wv919b', text: 'Algemeen'}, {id: 'wv919c', text: 'Gedetailleerd'}, {id: 'wv919d', text: 'Specifiek'}] },
  { id: 'w_v9_20', type: 'multiple-choice', text: 'Simultaan', options: [{id: 'wv920a', text: 'Na elkaar'}, {id: 'wv920b', text: 'Gelijktijdig'}, {id: 'wv920c', text: 'Vooraf'}, {id: 'wv920d', text: 'Onverwacht'}] },
  { id: 'w_v9_21', type: 'multiple-choice', text: 'Stabiliteit', options: [{id: 'wv921a', text: 'Verandering'}, {id: 'wv921b', text: 'Bestendigheid'}, {id: 'wv921c', text: 'Onzekerheid'}, {id: 'wv921d', text: 'Zwakte'}] },
  { id: 'w_v9_22', type: 'multiple-choice', text: 'Irrelevant', options: [{id: 'wv922a', text: 'Belangrijk'}, {id: 'wv922b', text: 'Niet ter zake doend'}, {id: 'wv922c', text: 'Nuttig'}, {id: 'wv922d', text: 'Duidelijk'}] },
  { id: 'w_v9_23', type: 'multiple-choice', text: 'Specificeren', options: [{id: 'wv923a', text: 'Raden'}, {id: 'wv923b', text: 'Nader omschrijven'}, {id: 'wv923c', text: 'Samenvatten'}, {id: 'wv923d', text: 'Verbergen'}] },
  { id: 'w_v9_24', type: 'multiple-choice', text: 'Alternatief', options: [{id: 'wv924a', text: 'Verplichting'}, {id: 'wv924b', text: 'Andere mogelijkheid'}, {id: 'wv924c', text: 'Probleem'}, {id: 'wv924d', text: 'Oplossing'}] },
  { id: 'w_v9_25', type: 'multiple-choice', text: 'Diversiteit', options: [{id: 'wv925a', text: 'Eentonigheid'}, {id: 'wv925b', text: 'Verscheidenheid'}, {id: 'wv925c', text: 'Eenvoud'}, {id: 'wv925d', text: 'Snelheid'}] },
  { id: 'w_v9_26', type: 'multiple-choice', text: 'Exclusief', options: [{id: 'wv926a', text: 'Inclusief'}, {id: 'wv926b', text: 'Uitsluitend'}, {id: 'wv926c', text: 'Goedkoop'}, {id: 'wv926d', text: 'Gewoon'}] },
  { id: 'w_v9_27', type: 'multiple-choice', text: 'Frequent', options: [{id: 'wv927a', text: 'Zelden'}, {id: 'wv927b', text: 'Regelmatig'}, {id: 'wv927c', text: 'Nooit'}, {id: 'wv927d', text: 'Soms'}] },
  { id: 'w_v9_28', type: 'multiple-choice', text: 'Identiek', options: [{id: 'wv928a', text: 'Verschillend'}, {id: 'wv928b', text: 'Precies hetzelfde'}, {id: 'wv928c', text: 'Gelijkwaardig'}, {id: 'wv928d', text: 'Uniek'}] },
  { id: 'w_v9_29', type: 'multiple-choice', text: 'Mentaal', options: [{id: 'wv929a', text: 'Lichamelijk'}, {id: 'wv929b', text: 'Geestelijk'}, {id: 'wv929c', text: 'Sociaal'}, {id: 'wv929d', text: 'Fysiek'}] },
  { id: 'w_v9_30', type: 'multiple-choice', text: 'Revisie', options: [{id: 'wv930a', text: 'Nieuwbouw'}, {id: 'wv930b', text: 'Herziening'}, {id: 'wv930c', text: 'Vernietiging'}, {id: 'wv930d', text: 'Ontwerp'}] },
  { id: 'w_v9_31', type: 'multiple-choice', text: 'Segment', options: [{id: 'wv931a', text: 'Geheel'}, {id: 'wv931b', text: 'Onderdeel'}, {id: 'wv931c', text: 'Cirkel'}, {id: 'wv931d', text: 'Lijn'}] },
  { id: 'w_v9_32', type: 'multiple-choice', text: 'Ultiem', options: [{id: 'wv932a', text: 'Eerste'}, {id: 'wv932b', text: 'Uiteindelijk'}, {id: 'wv932c', text: 'Slechtste'}, {id: 'wv932d', text: 'Middelste'}] },
  { id: 'w_v9_33', type: 'multiple-choice', text: 'Volumineus', options: [{id: 'wv933a', text: 'Klein'}, {id: 'wv933b', text: 'Omvangrijk'}, {id: 'wv933c', text: 'Luid'}, {id: 'wv933d', text: 'Zwaar'}] },
  { id: 'w_v9_34', type: 'multiple-choice', text: 'Accuraat', options: [{id: 'wv934a', text: 'Slordig'}, {id: 'wv934b', text: 'Nauwkeurig'}, {id: 'wv934c', text: 'Snel'}, {id: 'wv934d', text: 'Moeilijk'}] }
];

export const BEGRIJPEND_LEZEN_TEXTS: ReadingText[] = [
  {
    id: 'blt_v9_1',
    title: 'De Opkomst van Artificiële Intelligentie',
    paragraphs: [
      'Artificiële Intelligentie (AI) is niet langer een futuristisch concept uit sciencefictionfilms; het is een integraal onderdeel geworden van ons dagelijks leven. Van spraakassistenten in onze telefoons tot algoritmen die bepalen welke films we zien op streamingdiensten, AI is overal. In essentie verwijst AI naar machines of computersystemen die taken kunnen uitvoeren waarvoor normaal gesproken menselijke intelligentie nodig is, zoals visuele perceptie, spraakherkenning en besluitvorming.',
      'De voordelen van AI zijn legio. In de gezondheidszorg helpen AI-systemen artsen bij het sneller en nauwkeuriger diagnosticeren van ziekten. In de transportsector maken zelfrijdende auto\'s de weg veiliger door menselijke fouten te elimineren. Ook in het onderwijs biedt AI mogelijkheden voor gepersonaliseerd leren, waarbij de lesstof automatisch wordt aangepast aan het niveau en de behoeften van de individuele leerling. Dit kan leiden tot efficiënter onderwijs en betere resultaten.',
      'Echter, de opkomst van AI brengt ook serieuze uitdagingen en ethische vragen met zich mee. Er is de angst voor banenverlies, omdat machines steeds meer taken van mensen overnemen. Daarnaast zijn er zorgen over privacy en de beveiliging van data. Algoritmen kunnen ook onbedoeld vooroordelen bevatten als ze getraind zijn met bevooroordeelde data, wat kan leiden tot discriminatie. Het is daarom cruciaal dat de ontwikkeling van AI gepaard gaat met strikte regelgeving en ethische richtlijnen om ervoor te zorgen dat de technologie de mensheid dient en niet schaadt.'
    ],
    questions: [
      { id: 'blq_v9_1', type: 'multiple-choice', text: 'Wat is volgens de tekst de essentie van AI?', options: [{id: 'blqv91a', text: 'Het is een concept uit sciencefictionfilms.'}, {id: 'blqv91b', text: 'Systemen die taken uitvoeren die menselijke intelligentie vereisen.'}, {id: 'blqv91c', text: 'Robots die de wereld overnemen.'}, {id: 'blqv91d', text: 'Algoritmen voor streamingdiensten.'}] },
      { id: 'blq_v9_2', type: 'multiple-choice', text: 'Welk voordeel van AI wordt genoemd in de context van de gezondheidszorg?', options: [{id: 'blqv92a', text: 'Het vervangen van alle artsen.'}, {id: 'blqv92b', text: 'Snellere en nauwkeurigere diagnoses.'}, {id: 'blqv92c', text: 'Goedkopere medicijnen.'}, {id: 'blqv92d', text: 'Minder wachttijden in de wachtkamer.'}] },
      { id: 'blq_v9_3', type: 'multiple-choice', text: 'Hoe kan AI het onderwijs verbeteren?', options: [{id: 'blqv93a', text: 'Door leraren overbodig te maken.'}, {id: 'blqv93b', text: 'Door gepersonaliseerd leren aan te bieden.'}, {id: 'blqv93c', text: 'Door strenger te straffen.'}, {id: 'blqv93d', text: 'Door de schooldagen korter te maken.'}] },
      { id: 'blq_v9_4', type: 'multiple-choice', text: 'Waarom is er angst voor banenverlies?', options: [{id: 'blqv94a', text: 'Omdat machines taken van mensen overnemen.'}, {id: 'blqv94b', text: 'Omdat mensen lui worden.'}, {id: 'blqv94c', text: 'Omdat AI te duur is voor bedrijven.'}, {id: 'blqv94d', text: 'Omdat er minder mensen geboren worden.'}] },
      { id: 'blq_v9_5', type: 'multiple-choice', text: 'Wat wordt bedoeld met "vooroordelen in algoritmen"?', options: [{id: 'blqv95a', text: 'Dat computers een eigen mening hebben.'}, {id: 'blqv95b', text: 'Dat data incorrect verwerkt wordt door hardwarefouten.'}, {id: 'blqv95c', text: 'Dat systemen discriminerende beslissingen kunnen nemen door getrainde data.'}, {id: 'blqv95d', text: 'Dat programmeurs expres fouten maken.'}] },
      { id: 'blq_v9_6', type: 'multiple-choice', text: 'Wat is de conclusie van de tekst?', options: [{id: 'blqv96a', text: 'We moeten stoppen met de ontwikkeling van AI.'}, {id: 'blqv96b', text: 'AI is alleen maar gevaarlijk.'}, {id: 'blqv96c', text: 'Ontwikkeling van AI moet samengaan met ethische regels.'}, {id: 'blqv96d', text: 'De mensheid heeft AI niet nodig.'}] },
    ]
  },
  {
    id: 'blt_v9_2',
    title: 'De Kracht van Slaap',
    paragraphs: [
      'Slaap wordt vaak gezien als een periode van inactiviteit, een tijd waarin het lichaam en de geest "uitstaan". Niets is echter minder waar. Tijdens onze slaap vinden er vitale processen plaats die essentieel zijn voor onze fysieke en mentale gezondheid. Het is een actieve toestand waarin herstelwerkzaamheden worden uitgevoerd, herinneringen worden verwerkt en energievoorraden worden aangevuld.',
      'Een van de belangrijkste functies van slaap is geheugenconsolidatie. Terwijl we slapen, verwerken onze hersenen de informatie die we gedurende de dag hebben opgenomen. Belangrijke informatie wordt opgeslagen in het langetermijngeheugen, terwijl overbodige details worden gewist. Dit verklaart waarom een goede nachtrust essentieel is voor studenten en iedereen die nieuwe vaardigheden wil leren. Zonder voldoende slaap vermindert ons concentratievermogen en wordt het moeilijker om nieuwe informatie op te nemen.',
      'Chronisch slaaptekort kan ernstige gevolgen hebben. Op korte termijn leidt het tot prikkelbaarheid, vermoeidheid en een verminderd reactievermogen. Op lange termijn wordt het geassocieerd met een verhoogd risico op ernstige aandoeningen zoals obesitas, diabetes, hart- en vaatziekten en depressie. In een maatschappij die altijd "aan" staat, is het belangrijk om slaap niet te zien als een luxe, maar als een fundamentele pijler van een gezonde levensstijl, net zo belangrijk als voeding en lichaamsbeweging.'
    ],
    questions: [
      { id: 'blq_v9_7', type: 'multiple-choice', text: 'Wat gebeurt er volgens de tekst tijdens de slaap?', options: [{id: 'blqv97a', text: 'De hersenen stoppen met werken.'}, {id: 'blqv97b', text: 'Het lichaam staat volledig uit.'}, {id: 'blqv97c', text: 'Er vinden vitale herstelprocessen plaats.'}, {id: 'blqv97d', text: 'Je verliest veel energie.'}] },
      { id: 'blq_v9_8', type: 'multiple-choice', text: 'Wat is geheugenconsolidatie?', options: [{id: 'blqv98a', text: 'Het vergeten van dromen.'}, {id: 'blqv98b', text: 'Het opslaan en verwerken van informatie in de hersenen.'}, {id: 'blqv98c', text: 'Het leren van nieuwe dingen tijdens het wakker zijn.'}, {id: 'blqv98d', text: 'Het wakker worden met nieuwe ideeën.'}] },
      { id: 'blq_v9_9', type: 'multiple-choice', text: 'Waarom is slaap belangrijk voor studenten?', options: [{id: 'blqv99a', text: 'Omdat ze dan niet hoeven te studeren.'}, {id: 'blqv99b', text: 'Omdat het helpt bij het opslaan van geleerde informatie.'}, {id: 'blqv99c', text: 'Omdat ze anders te laat in de les komen.'}, {id: 'blqv99d', text: 'Omdat dromen antwoorden geven op toetsvragen.'}] },
      { id: 'blq_v9_10', type: 'multiple-choice', text: 'Wat is een gevolg van slaaptekort op de korte termijn?', options: [{id: 'blqv910a', text: 'Diabetes.'}, {id: 'blqv910b', text: 'Hart- en vaatziekten.'}, {id: 'blqv910c', text: 'Prikkelbaarheid en verminderd reactievermogen.'}, {id: 'blqv910d', text: 'Gewichtsverlies.'}] },
      { id: 'blq_v9_11', type: 'multiple-choice', text: 'Hoe moet slaap volgens de tekst gezien worden?', options: [{id: 'blqv911a', text: 'Als tijdverspilling.'}, {id: 'blqv911b', text: 'Als een luxe voor in het weekend.'}, {id: 'blqv911c', text: 'Als een fundamentele pijler van gezondheid.'}, {id: 'blqv911d', text: 'Als iets dat alleen kinderen nodig hebben.'}] },
      { id: 'blq_v9_12', type: 'multiple-choice', text: 'Wat wordt er tijdens de slaap met "overbodige details" gedaan?', options: [{id: 'blqv912a', text: 'Ze worden extra goed onthouden.'}, {id: 'blqv912b', text: 'Ze worden gewist.'}, {id: 'blqv912c', text: 'Ze worden omgezet in dromen.'}, {id: 'blqv912d', text: 'Ze worden opgeschreven.'}] },
    ]
  },
   {
    id: 'blt_v9_3',
    title: 'De Evolutie van de Fiets',
    paragraphs: [
      'De fiets is een van de meest efficiënte en duurzame vervoermiddelen ter wereld, maar hij zag er niet altijd zo uit als vandaag. De voorloper van de moderne fiets, de "Draisienne" of loopfiets, werd in 1817 uitgevonden door Karl von Drais. Deze houten constructie had geen pedalen; de berijder moest zich met zijn voeten afzetten tegen de grond om vooruit te komen. Het was een rage, maar ook zwaar en oncomfortabel.',
      'De echte doorbraak kwam later in de 19e eeuw met de toevoeging van pedalen en later de kettingaandrijving. De "Hoge Bi", met zijn enorme voorwiel en kleine achterwiel, is een iconisch beeld uit die tijd. Hoewel sneller, was hij ook gevaarlijk vanwege de hoogte. De uitvinding van de "veiligheidsfiets" rond 1885, met twee even grote wielen en luchtbanden (uitgevonden door John Boyd Dunlop), maakte fietsen comfortabeler en toegankelijk voor het grote publiek. Dit leidde tot een enorme toename in mobiliteit, vooral voor vrouwen, voor wie de fiets een symbool van vrijheid werd.',
      'Tegenwoordig ondergaat de fiets opnieuw een evolutie met de opkomst van de elektrische fiets. De e-bike maakt fietsen mogelijk voor langere afstanden en voor mensen die fysiek minder sterk zijn. In stedelijke gebieden wordt de fiets steeds vaker gezien als de oplossing voor files en luchtvervuiling. Steden over de hele wereld investeren in fietspaden en infrastructuur, waarmee de fiets zijn positie als vervoermiddel van de toekomst verstevigt.'
    ],
    questions: [
        { id: 'blq_v9_13', type: 'multiple-choice', text: 'Wat was een kenmerk van de "Draisienne"?', options: [{id: 'blqv913a', text: 'Het had een groot voorwiel.'}, {id: 'blqv913b', text: 'Het was gemaakt van staal.'}, {id: 'blqv913c', text: 'Het had geen pedalen.'}, {id: 'blqv913d', text: 'Het had een elektrische motor.'}] },
        { id: 'blq_v9_14', type: 'multiple-choice', text: 'Waarom was de "Hoge Bi" gevaarlijk?', options: [{id: 'blqv914a', text: 'Hij ging te snel.'}, {id: 'blqv914b', text: 'Vanwege de hoogte van het zadel.'}, {id: 'blqv914c', text: 'Hij had geen remmen.'}, {id: 'blqv914d', text: 'De banden waren te glad.'}] },
        { id: 'blq_v9_15', type: 'multiple-choice', text: 'Wat maakte de "veiligheidsfiets" toegankelijk voor het grote publiek?', options: [{id: 'blqv915a', text: 'De lage prijs.'}, {id: 'blqv915b', text: 'De twee even grote wielen en luchtbanden.'}, {id: 'blqv915c', text: 'De mooie kleuren.'}, {id: 'blqv915d', text: 'De elektrische ondersteuning.'}] },
        { id: 'blq_v9_16', type: 'multiple-choice', text: 'Welke rol speelde de fiets voor vrouwen in de 19e eeuw?', options: [{id: 'blqv916a', text: 'Het was verboden voor vrouwen.'}, {id: 'blqv916b', text: 'Het was een symbool van vrijheid.'}, {id: 'blqv916c', text: 'Het was te zwaar om te gebruiken.'}, {id: 'blqv916d', text: 'Het werd alleen gebruikt voor sport.'}] },
        { id: 'blq_v9_17', type: 'multiple-choice', text: 'Wat is het voordeel van de moderne e-bike?', options: [{id: 'blqv917a', text: 'Hij is goedkoper dan een gewone fiets.'}, {id: 'blqv917b', text: 'Je hoeft helemaal niet te trappen.'}, {id: 'blqv917c', text: 'Hij maakt langere afstanden mogelijk.'}, {id: 'blqv917d', text: 'Hij heeft geen onderhoud nodig.'}] },
        { id: 'blq_v9_18', type: 'multiple-choice', text: 'Waarom investeren steden in fietsinfrastructuur?', options: [{id: 'blqv918a', text: 'Om auto\'s te verbieden.'}, {id: 'blqv918b', text: 'Omdat fietsen mooi zijn.'}, {id: 'blqv918c', text: 'Als oplossing voor files en luchtvervuiling.'}, {id: 'blqv918d', text: 'Om meer belasting te kunnen heffen.'}] },
    ]
  }
];

export const REKENEN_QUESTIONS: MultipleChoiceQuestion[] = [
    // 32 Vragen (v9)
    { id: 'r_v9_1', type: 'multiple-choice', text: 'Wat is 20% van 450?', options: [{id: 'rv91a', text: '45'}, {id: 'rv91b', text: '90'}, {id: 'rv91c', text: '100'}, {id: 'rv91d', text: '120'}] },
    { id: 'r_v9_2', type: 'multiple-choice', text: 'Bereken: 1/4 + 2/3', options: [{id: 'rv92a', text: '3/7'}, {id: 'rv92b', text: '11/12'}, {id: 'rv92c', text: '9/12'}, {id: 'rv92d', text: '3/12'}] },
    { id: 'r_v9_3', type: 'multiple-choice', text: 'Een auto rijdt 150 km in 2 uur. Wat is de gemiddelde snelheid?', options: [{id: 'rv93a', text: '60 km/u'}, {id: 'rv93b', text: '70 km/u'}, {id: 'rv93c', text: '75 km/u'}, {id: 'rv93d', text: '80 km/u'}] },
    { id: 'r_v9_4', type: 'multiple-choice', text: 'Wat is de oppervlakte van een rechthoek van 12 bij 8 meter?', options: [{id: 'rv94a', text: '40 m²'}, {id: 'rv94b', text: '80 m²'}, {id: 'rv94c', text: '96 m²'}, {id: 'rv94d', text: '100 m²'}] },
    { id: 'r_v9_5', type: 'multiple-choice', text: 'Los op: 3x + 5 = 20', options: [{id: 'rv95a', text: 'x = 3'}, {id: 'rv95b', text: 'x = 5'}, {id: 'rv95c', text: 'x = 6'}, {id: 'rv95d', text: 'x = 15'}] },
    { id: 'r_v9_6', type: 'multiple-choice', text: 'Een recept voor 8 personen vraagt 4 eieren. Hoeveel eieren voor 12 personen?', options: [{id: 'rv96a', text: '5'}, {id: 'rv96b', text: '6'}, {id: 'rv96c', text: '7'}, {id: 'rv96d', text: '8'}] },
    { id: 'r_v9_7', type: 'multiple-choice', text: 'Wat is het gemiddelde van 10, 20, 30 en 40?', options: [{id: 'rv97a', text: '20'}, {id: 'rv97b', text: '25'}, {id: 'rv97c', text: '30'}, {id: 'rv97d', text: '35'}] },
    { id: 'r_v9_8', type: 'multiple-choice', text: 'Bereken: 50 - 3 * (2 + 4)', options: [{id: 'rv98a', text: '282'}, {id: 'rv98b', text: '32'}, {id: 'rv98c', text: '44'}, {id: 'rv98d', text: '10'}] },
    { id: 'r_v9_9', type: 'multiple-choice', text: 'Een vierkant heeft een oppervlakte van 64 m². Wat is de omtrek?', options: [{id: 'rv99a', text: '16 m'}, {id: 'rv99b', text: '24 m'}, {id: 'rv99c', text: '32 m'}, {id: 'rv99d', text: '64 m'}] },
    { id: 'r_v9_10', type: 'multiple-choice', text: 'Op een kaart met schaal 1:100 is een lijn 5 cm. Hoe lang is dit in werkelijkheid?', options: [{id: 'rv910a', text: '0.5 m'}, {id: 'rv910b', text: '5 m'}, {id: 'rv910c', text: '50 m'}, {id: 'rv910d', text: '500 m'}] },
    { id: 'r_v9_11', type: 'multiple-choice', text: 'Schrijf 0,6 als een breuk (vereenvoudigd).', options: [{id: 'rv911a', text: '6/10'}, {id: 'rv911b', text: '3/5'}, {id: 'rv911c', text: '2/3'}, {id: 'rv911d', text: '1/6'}] },
    { id: 'r_v9_12', type: 'multiple-choice', text: '€1000 op de bank tegen 5% rente per jaar. Hoeveel is dit na 1 jaar?', options: [{id: 'rv912a', text: '€1005'}, {id: 'rv912b', text: '€1050'}, {id: 'rv912c', text: '€1500'}, {id: 'rv912d', text: '€1100'}] },
    { id: 'r_v9_13', type: 'multiple-choice', text: 'Wat is de mediaan van: 2, 4, 6, 8, 100?', options: [{id: 'rv913a', text: '4'}, {id: 'rv913b', text: '6'}, {id: 'rv913c', text: '8'}, {id: 'rv913d', text: '24'}] },
    { id: 'r_v9_14', type: 'multiple-choice', text: 'Verdeel €1000 in de verhouding 2:3. Wat is het kleinste deel?', options: [{id: 'rv914a', text: '€200'}, {id: 'rv914b', text: '€300'}, {id: 'rv914c', text: '€400'}, {id: 'rv914d', text: '€600'}] },
    { id: 'r_v9_15', type: 'multiple-choice', text: 'Bereken: 6² + √81', options: [{id: 'rv915a', text: '21'}, {id: 'rv915b', text: '45'}, {id: 'rv915c', text: '54'}, {id: 'rv915d', text: '117'}] },
    { id: 'r_v9_16', type: 'multiple-choice', text: 'Wat is de inhoud van een kubus met zijde 4 cm?', options: [{id: 'rv916a', text: '12 cm³'}, {id: 'rv916b', text: '16 cm³'}, {id: 'rv916c', text: '64 cm³'}, {id: 'rv916d', text: '96 cm³'}] },
    { id: 'r_v9_17', type: 'multiple-choice', text: '40 is 10% van welk getal?', options: [{id: 'rv917a', text: '4'}, {id: 'rv917b', text: '400'}, {id: 'rv917c', text: '4000'}, {id: 'rv917d', text: '40000'}] },
    { id: 'r_v9_18', type: 'multiple-choice', text: 'Inkoop €100, verkoop €120. Wat is het winstpercentage?', options: [{id: 'rv918a', text: '10%'}, {id: 'rv918b', text: '20%'}, {id: 'rv918c', text: '30%'}, {id: 'rv918d', text: '120%'}] },
    { id: 'r_v9_19', type: 'multiple-choice', text: 'Bereken: 5/6 : 1/2', options: [{id: 'rv919a', text: '5/12'}, {id: 'rv919b', text: '5/3'}, {id: 'rv919c', text: '6/5'}, {id: 'rv919d', text: '10/6'}] },
    { id: 'r_v9_20', type: 'multiple-choice', text: 'Het is 14:00 uur. Hoe laat is het over 3,5 uur?', options: [{id: 'rv920a', text: '16:30'}, {id: 'rv920b', text: '17:00'}, {id: 'rv920c', text: '17:30'}, {id: 'rv920d', text: '18:30'}] },
    { id: 'r_v9_21', type: 'multiple-choice', text: 'Wat is het Kleinste Gemene Veelvoud (KGV) van 6 en 8?', options: [{id: 'rv921a', text: '12'}, {id: 'rv921b', text: '16'}, {id: 'rv921c', text: '24'}, {id: 'rv921d', text: '48'}] },
    { id: 'r_v9_22', type: 'multiple-choice', text: 'Een groep heeft 10 mannen en 30 vrouwen. Hoeveel procent is vrouw?', options: [{id: 'rv922a', text: '25%'}, {id: 'rv922b', text: '33%'}, {id: 'rv922c', text: '66%'}, {id: 'rv922d', text: '75%'}] },
    { id: 'r_v9_23', type: 'multiple-choice', text: 'Los op: 2x - 10 = 50', options: [{id: 'rv923a', text: 'x = 20'}, {id: 'rv923b', text: 'x = 30'}, {id: 'rv923c', text: 'x = 40'}, {id: 'rv923d', text: 'x = 60'}] },
    { id: 'r_v9_24', type: 'multiple-choice', text: 'Een prijs daalt van €100 naar €80. Wat is het kortingspercentage?', options: [{id: 'rv924a', text: '10%'}, {id: 'rv924b', text: '20%'}, {id: 'rv924c', text: '25%'}, {id: 'rv924d', text: '80%'}] },
    { id: 'r_v9_25', type: 'multiple-choice', text: 'Wat is de Grootste Gemene Deler (GGD) van 24 en 36?', options: [{id: 'rv925a', text: '6'}, {id: 'rv925b', text: '8'}, {id: 'rv925c', text: '12'}, {id: 'rv925d', text: '24'}] },
    { id: 'r_v9_26', type: 'multiple-choice', text: 'Je loopt 10 km in 15 minuten (op de fiets). Wat is je snelheid?', options: [{id: 'rv926a', text: '20 km/u'}, {id: 'rv926b', text: '30 km/u'}, {id: 'rv926c', text: '40 km/u'}, {id: 'rv926d', text: '60 km/u'}] },
    { id: 'r_v9_27', type: 'multiple-choice', text: 'Een driehoek heeft hoeken van 90° en 40°. Hoe groot is de derde hoek?', options: [{id: 'rv927a', text: '40°'}, {id: 'rv927b', text: '50°'}, {id: 'rv927c', text: '60°'}, {id: 'rv927d', text: '140°'}] },
    { id: 'r_v9_28', type: 'multiple-choice', text: 'Wat is het volgende getal: 2, 4, 8, 16, ...?', options: [{id: 'rv928a', text: '24'}, {id: 'rv928b', text: '30'}, {id: 'rv928c', text: '32'}, {id: 'rv928d', text: '64'}] },
    { id: 'r_v9_29', type: 'multiple-choice', text: 'Wat is 150% van 20?', options: [{id: 'rv929a', text: '25'}, {id: 'rv929b', text: '30'}, {id: 'rv929c', text: '35'}, {id: 'rv929d', text: '40'}] },
    { id: 'r_v9_30', type: 'multiple-choice', text: 'Wat is de wortel van 225?', options: [{id: 'rv930a', text: '12'}, {id: 'rv930b', text: '15'}, {id: 'rv930c', text: '25'}, {id: 'rv930d', text: '112.5'}] },
    { id: 'r_v9_31', type: 'multiple-choice', text: '3 pennen kosten €1,50. Wat kosten 5 pennen?', options: [{id: 'rv931a', text: '€2,00'}, {id: 'rv931b', text: '€2,50'}, {id: 'rv931c', text: '€3,00'}, {id: 'rv931d', text: '€3,50'}] },
    { id: 'r_v9_32', type: 'multiple-choice', text: 'Bereken: 12 - (-5)', options: [{id: 'rv932a', text: '7'}, {id: 'rv932b', text: '17'}, {id: 'rv932c', text: '-7'}, {id: 'rv932d', text: '-17'}] }
];

export const NUMERIEK_REDENEREN_QUESTIONS: TextFillQuestion[] = [
    // 20 Vragen (v9)
    { id: 'nr_v9_1', type: 'text-fill', text: '5, 10, 15, 20, ?, ?', placeholders: 2 },
    { id: 'nr_v9_2', type: 'text-fill', text: '100, 90, 80, 70, ?, ?', placeholders: 2 },
    { id: 'nr_v9_3', type: 'text-fill', text: '1, 2, 4, 8, 16, ?, ?', placeholders: 2 },
    { id: 'nr_v9_4', type: 'text-fill', text: '3, 6, 5, 10, 9, ?, ?', placeholders: 2 },
    { id: 'nr_v9_5', type: 'text-fill', text: '1, 1, 2, 3, 5, 8, ?, ?', placeholders: 2 },
    { id: 'nr_v9_6', type: 'text-fill', text: '80, 40, 20, 10, ?, ?', placeholders: 2 },
    { id: 'nr_v9_7', type: 'text-fill', text: '2, 5, 11, 23, 47, ?, ?', placeholders: 2 },
    { id: 'nr_v9_8', type: 'text-fill', text: '10, 13, 16, 19, ?, ?', placeholders: 2 },
    { id: 'nr_v9_9', type: 'text-fill', text: '50, 55, 53, 58, 56, ?, ?', placeholders: 2 },
    { id: 'nr_v9_10', type: 'text-fill', text: '1, 4, 9, 16, 25, ?, ?', placeholders: 2 },
    { id: 'nr_v9_11', type: 'text-fill', text: '2, 3, 5, 7, 11, 13, ?, ?', placeholders: 2 },
    { id: 'nr_v9_12', type: 'text-fill', text: '240, 120, 60, 30, ?, ?', placeholders: 2 },
    { id: 'nr_v9_13', type: 'text-fill', text: '4, 8, 12, 16, ?, ?', placeholders: 2 },
    { id: 'nr_v9_14', type: 'text-fill', text: '3, 9, 27, 81, ?, ?', placeholders: 2 },
    { id: 'nr_v9_15', type: 'text-fill', text: '100, 102, 105, 109, 114, ?, ?', placeholders: 2 },
    { id: 'nr_v9_16', type: 'text-fill', text: '20, 19, 17, 14, 10, ?, ?', placeholders: 2 },
    { id: 'nr_v9_17', type: 'text-fill', text: '6, 12, 18, 24, ?, ?', placeholders: 2 },
    { id: 'nr_v9_18', type: 'text-fill', text: '5, 25, 125, 625, ?, ?', placeholders: 2 },
    { id: 'nr_v9_19', type: 'text-fill', text: '10, 20, 15, 25, 20, ?, ?', placeholders: 2 },
    { id: 'nr_v9_20', type: 'text-fill', text: '1, 8, 27, 64, ?, ?', placeholders: 2 }
];

export const CORRECT_ANSWERS: Record<string, string | string[]> = {
  // Woordenschat (v9)
  w_v9_1: 'Praktisch', w_v9_2: 'Beslissend', w_v9_3: 'Vergemakkelijken', w_v9_4: 'Hoeveelheid', w_v9_5: 'Fijn onderscheid',
  w_v9_6: 'Overeenstemming', w_v9_7: 'Twijfelend', w_v9_8: 'Mogelijkheid', w_v9_9: 'Eerlijkheid', w_v9_10: 'Inbegrepen',
  w_v9_11: 'Persoonlijk', w_v9_12: 'Wisselende factor', w_v9_13: 'Veronderstelling', w_v9_14: 'Ontleden', w_v9_15: 'Onderdeel',
  w_v9_16: 'Verzonnen', w_v9_17: 'Omkoping', w_v9_18: 'Uitbreiding', w_v9_19: 'Algemeen', w_v9_20: 'Gelijktijdig',
  w_v9_21: 'Bestendigheid', w_v9_22: 'Niet ter zake doend', w_v9_23: 'Nader omschrijven', w_v9_24: 'Andere mogelijkheid', w_v9_25: 'Verscheidenheid',
  w_v9_26: 'Uitsluitend', w_v9_27: 'Regelmatig', w_v9_28: 'Precies hetzelfde', w_v9_29: 'Geestelijk', w_v9_30: 'Herziening',
  w_v9_31: 'Onderdeel', w_v9_32: 'Uiteindelijk', w_v9_33: 'Omvangrijk', w_v9_34: 'Nauwkeurig',

  // Begrijpend Lezen (v9)
  blq_v9_1: 'Systemen die taken uitvoeren die menselijke intelligentie vereisen.',
  blq_v9_2: 'Snellere en nauwkeurigere diagnoses.',
  blq_v9_3: 'Door gepersonaliseerd leren aan te bieden.',
  blq_v9_4: 'Omdat machines taken van mensen overnemen.',
  blq_v9_5: 'Dat systemen discriminerende beslissingen kunnen nemen door getrainde data.',
  blq_v9_6: 'Ontwikkeling van AI moet samengaan met ethische regels.',
  blq_v9_7: 'Er vinden vitale herstelprocessen plaats.',
  blq_v9_8: 'Het opslaan en verwerken van informatie in de hersenen.',
  blq_v9_9: 'Omdat het helpt bij het opslaan van geleerde informatie.',
  blq_v9_10: 'Prikkelbaarheid en verminderd reactievermogen.',
  blq_v9_11: 'Als een fundamentele pijler van gezondheid.',
  blq_v9_12: 'Ze worden gewist.',
  blq_v9_13: 'Het had geen pedalen.',
  blq_v9_14: 'Vanwege de hoogte van het zadel.',
  blq_v9_15: 'De twee even grote wielen en luchtbanden.',
  blq_v9_16: 'Het was een symbool van vrijheid.',
  blq_v9_17: 'Hij maakt langere afstanden mogelijk.',
  blq_v9_18: 'Als oplossing voor files en luchtvervuiling.',

  // Rekenen (v9)
  r_v9_1: '90', r_v9_2: '11/12', r_v9_3: '75 km/u', r_v9_4: '96 m²', r_v9_5: 'x = 5',
  r_v9_6: '6', r_v9_7: '25', r_v9_8: '32', r_v9_9: '32 m', r_v9_10: '5 m',
  r_v9_11: '3/5', r_v9_12: '€1050', r_v9_13: '6', r_v9_14: '€400', r_v9_15: '45',
  r_v9_16: '64 cm³', r_v9_17: '400', r_v9_18: '20%', r_v9_19: '5/3', r_v9_20: '17:30',
  r_v9_21: '24', r_v9_22: '75%', r_v9_23: 'x = 30', r_v9_24: '20%', r_v9_25: '12',
  r_v9_26: '40 km/u', r_v9_27: '50°', r_v9_28: '32', r_v9_29: '30', r_v9_30: '15',
  r_v9_31: '€2,50', r_v9_32: '17',

  // Numeriek Redeneren (v9)
  nr_v9_1: ['25', '30'],       // +5
  nr_v9_2: ['60', '50'],       // -10
  nr_v9_3: ['32', '64'],       // x2
  nr_v9_4: ['18', '17'],       // x2, -1, x2, -1...
  nr_v9_5: ['13', '21'],       // Fibonacci
  nr_v9_6: ['5', '2.5'],       // /2
  nr_v9_7: ['95', '191'],      // x2 + 1 (2*2+1=5, 5*2+1=11, 11*2+1=23, 23*2+1=47...)
  nr_v9_8: ['22', '25'],       // +3
  nr_v9_9: ['61', '59'],       // +5, -2
  nr_v9_10: ['36', '49'],      // kwadraten (6², 7²)
  nr_v9_11: ['17', '19'],      // priemgetallen
  nr_v9_12: ['15', '7.5'],     // /2
  nr_v9_13: ['20', '24'],      // +4
  nr_v9_14: ['243', '729'],    // x3
  nr_v9_15: ['120', '127'],    // +2, +3, +4, +5, +6, +7...
  nr_v9_16: ['5', '-1'],       // -1, -2, -3, -4, -5, -6
  nr_v9_17: ['30', '36'],      // +6
  nr_v9_18: ['3125', '15625'], // x5
  nr_v9_19: ['30', '25'],      // +10, -5
  nr_v9_20: ['125', '216']     // macht 3 (1³, 2³, 3³...)
};

export const EXPLANATIONS: Record<string, string> = {
  // Woordenschat Uitleg (v9)
  w_v9_1: "**Betekenis:** Praktisch, gericht op feiten en bruikbaarheid.\n**Voorbeeld:** Laten we een *pragmatische* oplossing zoeken voor dit probleem.",
  w_v9_2: "**Betekenis:** Beslissend, doorslaggevend.\n**Voorbeeld:** Zijn hulp was *cruciaal* voor het slagen van het project.",
  w_v9_3: "**Betekenis:** Vergemakkelijken, mogelijk maken.\n**Voorbeeld:** De software *faciliteert* het samenwerken op afstand.",
  w_v9_4: "**Betekenis:** Hoeveelheid of aantal.\n**Voorbeeld:** We gaan voor kwaliteit boven *kwantiteit*.",
  w_v9_5: "**Betekenis:** Fijn onderscheid, klein detail.\n**Voorbeeld:** Er zit veel *nuance* in haar mening.",
  w_v9_6: "**Betekenis:** Algemene gelijkheid van opvatting, overeenstemming.\n**Voorbeeld:** We moeten proberen *consensus* te bereiken.",
  w_v9_7: "**Betekenis:** Geneigd tot twijfel.\n**Voorbeeld:** Hij was nogal *sceptisch* over het nieuwe plan.",
  w_v9_8: "**Betekenis:** Mogelijkheid, wat iets of iemand zou kunnen worden.\n**Voorbeeld:** Deze speler heeft veel *potentieel*.",
  w_v9_9: "**Betekenis:** Eerlijkheid en betrouwbaarheid.\n**Voorbeeld:** Zijn *integriteit* is onomstreden.",
  w_v9_10: "**Betekenis:** Inbegrepen maar niet uitdrukkelijk gezegd.\n**Voorbeeld:** Dat was een *impliciete* waarschuwing.",
  w_v9_11: "**Betekenis:** Persoonlijk, volgens eigen mening.\n**Voorbeeld:** Schoonheid is *subjectief*.",
  w_v9_12: "**Betekenis:** Een grootheid die kan veranderen.\n**Voorbeeld:** Het weer is een onvoorspelbare *variabele*.",
  w_v9_13: "**Betekenis:** Stelling die men als waarheid aanneemt.\n**Voorbeeld:** Onze *hypothese* bleek niet te kloppen.",
  w_v9_14: "**Betekenis:** Ontleden, grondig onderzoeken.\n**Voorbeeld:** We moeten de resultaten eerst goed *analyseren*.",
  w_v9_15: "**Betekenis:** Onderdeel van een geheel.\n**Voorbeeld:** Vertrouwen is een belangrijk *component* van een relatie.",
  w_v9_16: "**Betekenis:** Verzonnen, niet werkelijk.\n**Voorbeeld:** De personages in dit boek zijn *fictief*.",
  w_v9_17: "**Betekenis:** Het aannemen van steekpenningen, omkoping.\n**Voorbeeld:** Het land strijdt tegen *corruptie*.",
  w_v9_18: "**Betekenis:** Uitbreiding, vergroting.\n**Voorbeeld:** De *expansie* van het bedrijf gaat snel.",
  w_v9_19: "**Betekenis:** In grote lijnen, algemeen.\n**Voorbeeld:** Ik heb een *globaal* idee van wat ik wil doen.",
  w_v9_20: "**Betekenis:** Op hetzelfde moment, gelijktijdig.\n**Voorbeeld:** De vertaling verscheen *simultaan* op het scherm.",
  w_v9_21: "**Betekenis:** Standvastigheid, stevigheid.\n**Voorbeeld:** Politieke *stabiliteit* is belangrijk voor de economie.",
  w_v9_22: "**Betekenis:** Niet van belang, niet ter zake doend.\n**Voorbeeld:** Die opmerking is volkomen *irrelevant*.",
  w_v9_23: "**Betekenis:** In detail beschrijven, nader aanduiden.\n**Voorbeeld:** Kunt u uw klacht *specificeren*?",
  w_v9_24: "**Betekenis:** Een andere mogelijkheid.\n**Voorbeeld:** Er is geen goed *alternatief* voor deze route.",
  w_v9_25: "**Betekenis:** Verscheidenheid, variatie.\n**Voorbeeld:** We streven naar meer *diversiteit* in het team.",
  w_v9_26: "**Betekenis:** Uitsluitend, alleen voor een bepaalde groep.\n**Voorbeeld:** Dit is een *exclusief* interview.",
  w_v9_27: "**Betekenis:** Vaak voorkomend, regelmatig.\n**Voorbeeld:** Hij stelt *frequente* vragen.",
  w_v9_28: "**Betekenis:** Helemaal hetzelfde.\n**Voorbeeld:** De tweeling droeg *identieke* jassen.",
  w_v9_29: "**Betekenis:** Wat de geest betreft.\n**Voorbeeld:** Het was een zware *mentale* inspanning.",
  w_v9_30: "**Betekenis:** Het nakijken en verbeteren.\n**Voorbeeld:** De tekst heeft een *revisie* nodig.",
  w_v9_31: "**Betekenis:** Deel of stuk.\n**Voorbeeld:** We richten ons op een specifiek *segment* van de markt.",
  w_v9_32: "**Betekenis:** Laatste, allerhoogste.\n**Voorbeeld:** Dat is de *ultieme* uitdaging.",
  w_v9_33: "**Betekenis:** Groot van omvang.\n**Voorbeeld:** Het was een *volumineus* dossier.",
  w_v9_34: "**Betekenis:** Zeer nauwkeurig.\n**Voorbeeld:** De metingen waren zeer *accuraat*.",

  // Begrijpend Lezen Uitleg (v9)
  blq_v9_1: "**Uitleg:** Alinea 1: 'In essentie verwijst AI naar machines of computersystemen die taken kunnen uitvoeren waarvoor normaal gesproken menselijke intelligentie nodig is...'",
  blq_v9_2: "**Uitleg:** Alinea 2: '...helpen AI-systemen artsen bij het sneller en nauwkeuriger diagnosticeren van ziekten.'",
  blq_v9_3: "**Uitleg:** Alinea 2: '...biedt AI mogelijkheden voor gepersonaliseerd leren...'",
  blq_v9_4: "**Uitleg:** Alinea 3: 'Er is de angst voor banenverlies, omdat machines steeds meer taken van mensen overnemen.'",
  blq_v9_5: "**Uitleg:** Alinea 3: 'Algoritmen kunnen ook onbedoeld vooroordelen bevatten... wat kan leiden tot discriminatie.'",
  blq_v9_6: "**Uitleg:** De tekst sluit af met de noodzaak voor 'strikte regelgeving en ethische richtlijnen'.",
  blq_v9_7: "**Uitleg:** Alinea 1: 'Tijdens onze slaap vinden er vitale processen plaats... Het is een actieve toestand waarin herstelwerkzaamheden worden uitgevoerd...'",
  blq_v9_8: "**Uitleg:** Alinea 2: 'Terwijl we slapen, verwerken onze hersenen de informatie die we gedurende de dag hebben opgenomen.'",
  blq_v9_9: "**Uitleg:** Alinea 2: 'Dit verklaart waarom een goede nachtrust essentieel is... voor geheugenconsolidatie.'",
  blq_v9_10: "**Uitleg:** Alinea 3: 'Op korte termijn leidt het tot prikkelbaarheid, vermoeidheid en een verminderd reactievermogen.'",
  blq_v9_11: "**Uitleg:** Alinea 3: '...fundamentele pijler van een gezonde levensstijl, net zo belangrijk als voeding en lichaamsbeweging.'",
  blq_v9_12: "**Uitleg:** Alinea 2: '...terwijl overbodige details worden gewist.'",
  blq_v9_13: "**Uitleg:** Alinea 1: 'Deze houten constructie had geen pedalen...'",
  blq_v9_14: "**Uitleg:** Alinea 2: 'Hoewel sneller, was hij ook gevaarlijk vanwege de hoogte.'",
  blq_v9_15: "**Uitleg:** Alinea 2: 'De uitvinding van de \"veiligheidsfiets\"... met twee even grote wielen en luchtbanden... maakte fietsen comfortabeler...'",
  blq_v9_16: "**Uitleg:** Alinea 2: '...vooral voor vrouwen, voor wie de fiets een symbool van vrijheid werd.'",
  blq_v9_17: "**Uitleg:** Alinea 3: 'De e-bike maakt fietsen mogelijk voor langere afstanden...'",
  blq_v9_18: "**Uitleg:** Alinea 3: '...steeds vaker gezien als de oplossing voor files en luchtvervuiling.'",

  // Rekenen Uitleg (v9)
  r_v9_1: "**Berekening:** 10% van 450 = 45. 20% is het dubbele = 90.",
  r_v9_2: "**Berekening:** Gelijknamig maken (12). 3/12 + 8/12 = 11/12.",
  r_v9_3: "**Berekening:** 150 km gedeeld door 2 uur = 75 km/u.",
  r_v9_4: "**Berekening:** Lengte x breedte = 12 x 8 = 96 m².",
  r_v9_5: "**Berekening:** 3x = 20 - 5 -> 3x = 15 -> x = 5.",
  r_v9_6: "**Berekening:** 4 eieren voor 8 pers = 0.5 ei per persoon. 12 x 0.5 = 6 eieren.",
  r_v9_7: "**Berekening:** (10+20+30+40)/4 = 100/4 = 25.",
  r_v9_8: "**Berekening:** Haakjes eerst: 2+4=6. Vermenigvuldigen: 3x6=18. Aftrekken: 50-18=32.",
  r_v9_9: "**Berekening:** Zijde is wortel van 64 = 8. Omtrek is 4 x 8 = 32 m.",
  r_v9_10: "**Berekening:** 5 cm x 100 = 500 cm = 5 m.",
  r_v9_11: "**Berekening:** 0,6 = 6/10 = 3/5.",
  r_v9_12: "**Berekening:** 5% van 1000 = 50. Totaal 1000 + 50 = €1050.",
  r_v9_13: "**Berekening:** Het middelste getal van de reeks 2, 4, 6, 8, 100 is 6.",
  r_v9_14: "**Berekening:** Totaal 5 delen (2+3). 1 deel = 1000/5 = 200. Kleinste is 2 delen = €400.",
  r_v9_15: "**Berekening:** 36 + 9 = 45.",
  r_v9_16: "**Berekening:** 4 x 4 x 4 = 64.",
  r_v9_17: "**Berekening:** Als 10% = 40, dan is 100% = 400.",
  r_v9_18: "**Berekening:** Winst is 20. Op inkoop van 100 is dat 20%.",
  r_v9_19: "**Berekening:** 5/6 vermenigvuldigen met 2/1 = 10/6 = 5/3.",
  r_v9_20: "**Berekening:** 14:00 + 3 uur = 17:00. Plus 30 min = 17:30.",
  r_v9_21: "**Berekening:** Veelvouden 6: 6, 12, 18, 24. Veelvouden 8: 8, 16, 24.",
  r_v9_22: "**Berekening:** Totaal 40. Vrouwen 30. 30/40 = 3/4 = 75%.",
  r_v9_23: "**Berekening:** 2x = 60 -> x = 30.",
  r_v9_24: "**Berekening:** Daling is 20. 20 op 100 is 20%.",
  r_v9_25: "**Berekening:** Delers 24: 1,2,3,4,6,8,12,24. Delers 36: ...12,18,36. Grootste is 12.",
  r_v9_26: "**Berekening:** 10 km in een kwartier. In een heel uur (4 kwartier) dus 40 km.",
  r_v9_27: "**Berekening:** 180 - 90 - 40 = 50.",
  r_v9_28: "**Berekening:** Verdubbelen: 16 x 2 = 32.",
  r_v9_29: "**Berekening:** 1.5 x 20 = 30.",
  r_v9_30: "**Berekening:** 15 x 15 = 225.",
  r_v9_31: "**Berekening:** 1 pen is €0,50. 5 pennen is €2,50.",
  r_v9_32: "**Berekening:** Min min is plus. 12 + 5 = 17.",

  // Numeriek Redeneren Uitleg (v9)
  nr_v9_1: "**Regel:** Tafel van 5 (of +5).\n**Stappen:** 20 + 5 = **25**; 25 + 5 = **30**.",
  nr_v9_2: "**Regel:** Steeds -10.\n**Stappen:** 70 - 10 = **60**; 60 - 10 = **50**.",
  nr_v9_3: "**Regel:** Verdubbelen (x2).\n**Stappen:** 16 x 2 = **32**; 32 x 2 = **64**.",
  nr_v9_4: "**Regel:** x2, -1.\n**Stappen:** 9 x 2 = **18**; 18 - 1 = **17**.",
  nr_v9_5: "**Regel:** Fibonacci (som van vorige twee).\n**Stappen:** 5 + 8 = **13**; 8 + 13 = **21**.",
  nr_v9_6: "**Regel:** Halveren (/2).\n**Stappen:** 10 / 2 = **5**; 5 / 2 = **2.5**.",
  nr_v9_7: "**Regel:** x2 + 1.\n**Stappen:** 47 x 2 + 1 = **95**; 95 x 2 + 1 = **191**.",
  nr_v9_8: "**Regel:** Steeds +3.\n**Stappen:** 19 + 3 = **22**; 22 + 3 = **25**.",
  nr_v9_9: "**Regel:** +5, -2.\n**Stappen:** 56 + 5 = **61**; 61 - 2 = **59**.",
  nr_v9_10: "**Regel:** Kwadraten (1, 2, 3, 4, 5...).\n**Stappen:** 6² = **36**; 7² = **49**.",
  nr_v9_11: "**Regel:** Priemgetallen.\n**Stappen:** Na 13 komt **17**; daarna **19**.",
  nr_v9_12: "**Regel:** Halveren.\n**Stappen:** 30 / 2 = **15**; 15 / 2 = **7.5**.",
  nr_v9_13: "**Regel:** Tafel van 4 (+4).\n**Stappen:** 16 + 4 = **20**; 20 + 4 = **24**.",
  nr_v9_14: "**Regel:** Vermenigvuldig met 3.\n**Stappen:** 81 x 3 = **243**; 243 x 3 = **729**.",
  nr_v9_15: "**Regel:** +2, +3, +4, +5...\n**Stappen:** 114 + 6 = **120**; 120 + 7 = **127**.",
  nr_v9_16: "**Regel:** -1, -2, -3, -4...\n**Stappen:** 10 - 5 = **5**; 5 - 6 = **-1**.",
  nr_v9_17: "**Regel:** Tafel van 6 (+6).\n**Stappen:** 24 + 6 = **30**; 30 + 6 = **36**.",
  nr_v9_18: "**Regel:** Vermenigvuldig met 5.\n**Stappen:** 625 x 5 = **3125**; 3125 x 5 = **15625**.",
  nr_v9_19: "**Regel:** +10, -5.\n**Stappen:** 20 + 10 = **30**; 30 - 5 = **25**.",
  nr_v9_20: "**Regel:** Derde machten (x³).\n**Stappen:** 5³ = **125**; 6³ = **216**."
};