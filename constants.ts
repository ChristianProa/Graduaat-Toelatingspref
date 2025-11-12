import type { MultipleChoiceQuestion, TextFillQuestion, ReadingText } from './types';

export const WOORDENSCHAT_QUESTIONS: MultipleChoiceQuestion[] = [
  // 34 Vragen (v4)
  { id: 'w_v4_1', type: 'multiple-choice', text: 'Authentiek', options: [{id: 'wv41a', text: 'Nieuw'}, {id: 'wv41b', text: 'Echt'}, {id: 'wv41c', text: 'Vervalsing'}, {id: 'wv41d', text: 'Modern'}, {id: 'wv41e', text: 'Duur'}] },
  { id: 'w_v4_2', type: 'multiple-choice', text: 'Globaal', options: [{id: 'wv42a', text: 'Plaatselijk'}, {id: 'wv42b', text: 'Gedetailleerd'}, {id: 'wv42c', text: 'Wereldwijd'}, {id: 'wv42d', text: 'Oppervlakkig'}, {id: 'wv42e', text: 'Ongeveer'}] },
  { id: 'w_v4_3', type: 'multiple-choice', text: 'Prioriteit', options: [{id: 'wv43a', text: 'Uitstel'}, {id: 'wv43b', text: 'Voorrang'}, {id: 'wv43c', text: 'Probleem'}, {id: 'wv43d', text: 'Laatste punt'}, {id: 'wv43e', text: 'Keuze'}] },
  { id: 'w_v4_4', type: 'multiple-choice', text: 'Abstract', options: [{id: 'wv44a', text: 'Concreet'}, {id: 'wv44b', text: 'Eenvoudig'}, {id: 'wv44c', text: 'Niet tastbaar'}, {id: 'wv44d', text: 'Figuurlijk'}, {id: 'wv44e', text: 'Realistisch'}] },
  { id: 'w_v4_5', type: 'multiple-choice', text: 'Reflecteren', options: [{id: 'wv45a', text: 'Vergeten'}, {id: 'wv45b', text: 'Neerkijken op'}, {id: 'wv45c', text: 'Spiegelen'}, {id: 'wv45d', text: 'Nadenken over'}, {id: 'wv45e', text: 'Vooruitkijken'}] },
  { id: 'w_v4_6', type: 'multiple-choice', text: 'Subtiel', options: [{id: 'wv46a', text: 'Opvallend'}, {id: 'wv46b', text: 'Fijnzinnig'}, {id: 'wv46c', text: 'Grof'}, {id: 'wv46d', text: 'Duidelijk'}, {id: 'wv46e', text: 'Luid'}] },
  { id: 'w_v4_7', type: 'multiple-choice', text: 'Equivalent', options: [{id: 'wv47a', text: 'Tegenovergestelde'}, {id: 'wv47b', text: 'Verschillend'}, {id: 'wv47c', text: 'Gelijkwaardig'}, {id: 'wv47d', text: 'Beter'}, {id: 'wv47e', text: 'Minder'}] },
  { id: 'w_v4_8', type: 'multiple-choice', text: 'Consistent', options: [{id: 'wv48a', text: 'Wisselvallig'}, {id: 'wv48b', text: 'Vast'}, {id: 'wv48c', text: 'Zacht'}, {id: 'wv48d', text: 'Tegenstrijdig'}, {id: 'wv48e', text: 'Verwarrend'}] },
  { id: 'w_v4_9', type: 'multiple-choice', text: 'Innovatief', options: [{id: 'wv49a', text: 'Traditioneel'}, {id: 'wv49b', text: 'Vernieuwend'}, {id: 'wv49c', text: 'Verouderd'}, {id: 'wv49d', text: 'Duur'}, {id: 'wv49e', text: 'Bekend'}] },
  { id: 'w_v4_10', type: 'multiple-choice', text: 'Expliciet', options: [{id: 'wv410a', text: 'Verborgen'}, {id: 'wv410b', text: 'Inbegrepen'}, {id: 'wv410c', text: 'Moeilijk'}, {id: 'wv410d', text: 'Uitdrukkelijk'}, {id: 'wv410e', text: 'Ongeveer'}] },
  { id: 'w_v4_11', type: 'multiple-choice', text: 'Paradox', options: [{id: 'wv411a', text: 'Duidelijke stelling'}, {id: 'wv411b', text: 'Schijnbare tegenstelling'}, {id: 'wv411c', text: 'Overeenkomst'}, {id: 'wv411d', text: 'Bewijs'}, {id: 'wv411e', text: 'Leugen'}] },
  { id: 'w_v4_12', type: 'multiple-choice', text: 'Pragmatisch', options: [{id: 'wv412a', text: 'Theoretisch'}, {id: 'wv412b', text: 'Idealistisch'}, {id: 'wv412c', text: 'Praktisch'}, {id: 'wv412d', text: 'Ingewikkeld'}, {id: 'wv412e', text: 'Emotioneel'}] },
  { id: 'w_v4_13', type: 'multiple-choice', text: 'Adequaat', options: [{id: 'wv413a', text: 'Onvoldoende'}, {id: 'wv413b', text: 'Geschikt'}, {id: 'wv413c', text: 'Overbodig'}, {id: 'wv413d', text: 'Snel'}, {id: 'wv413e', text: 'Te laat'}] },
  { id: 'w_v4_14', type: 'multiple-choice', text: 'Banal', options: [{id: 'wv414a', text: 'Origineel'}, {id: 'wv414b', text: 'Bijzonder'}, {id: 'wv414c', text: 'Alledaags'}, {id: 'wv414d', text: 'Grappig'}, {id: 'wv414e', text: 'Vreemd'}] },
  { id: 'w_v4_15', type: 'multiple-choice', text: 'Cynisch', options: [{id: 'wv415a', text: 'Optimistisch'}, {id: 'wv415b', text: 'Vrolijk'}, {id: 'wv415c', text: 'Eerlijk'}, {id: 'wv415d', text: 'Bitter spottend'}, {id: 'wv415e', text: 'Serieus'}] },
  { id: 'w_v4_16', type: 'multiple-choice', text: 'Definitief', options: [{id: 'wv416a', text: 'Voorlopig'}, {id: 'wv416b', text: 'Onzeker'}, {id: 'wv416c', text: 'Eindgültig'}, {id: 'wv416d', text: 'Mogelijk'}, {id: 'wv416e', text: 'Onbekend'}] },
  { id: 'w_v4_17', type: 'multiple-choice', text: 'Fictief', options: [{id: 'wv417a', text: 'Werkelijk'}, {id: 'wv417b', text: 'Verzonnen'}, {id: 'wv417c', text: 'Historisch'}, {id: 'wv417d', text: 'Saai'}, {id: 'wv417e', text: 'Bekend'}] },
  { id: 'w_v4_18', type: 'multiple-choice', text: 'Homogeen', options: [{id: 'wv418a', text: 'Gemengd'}, {id: 'wv418b', text: 'Gelijksoortig'}, {id: 'wv418c', text: 'Complex'}, {id: 'wv418d', text: 'Divers'}, {id: 'wv418e', text: 'Zeldzaam'}] },
  { id: 'w_v4_19', type: 'multiple-choice', text: 'Impliciet', options: [{id: 'wv419a', text: 'Direct'}, {id: 'wv419b', text: 'Stilzwijgend'}, {id: 'wv419c', text: 'Luid'}, {id: 'wv419d', text: 'Eenvoudig'}, {id: 'wv419e', text: 'Letterlijk'}] },
  { id: 'w_v4_20', type: 'multiple-choice', text: 'Kwantitatief', options: [{id: 'wv420a', text: 'Kwalitatief'}, {id: 'wv420b', text: 'Gevoelsmatig'}, {id: 'wv420c', text: 'Wat betreft de hoeveelheid'}, {id: 'wv420d', text: 'Mening'}, {id: 'wv420e', text: 'Beschrijvend'}]},
  { id: 'w_v4_21', type: 'multiple-choice', text: 'Modaal', options: [{id: 'wv421a', text: 'Uitzonderlijk'}, {id: 'wv421b', text: 'Extreem'}, {id: 'wv421c', text: 'Gemiddeld'}, {id: 'wv421d', text: 'Rijk'}, {id: 'wv421e', text: 'Arm'}]},
  { id: 'w_v4_22', type: 'multiple-choice', text: 'Nostalgie', options: [{id: 'wv422a', text: 'Verlangen naar de toekomst'}, {id: 'wv422b', text: 'Heimwee naar het verleden'}, {id: 'wv422c', text: 'Angst voor het onbekende'}, {id: 'wv422d', text: 'Plezier in het heden'}, {id: 'wv422e', text: 'Een gevoel van spijt'}]},
  { id: 'w_v4_23', type: 'multiple-choice', text: 'Objectief', options: [{id: 'wv423a', text: 'Persoonlijk'}, {id: 'wv423b', text: 'Feitelijk'}, {id: 'wv423c', text: 'Emotioneel'}, {id: 'wv423d', text: 'Oneerlijk'}, {id: 'wv423e', text: 'Gekleurd'}]},
  { id: 'w_v4_24', type: 'multiple-choice', text: 'Relatief', options: [{id: 'wv424a', text: 'Absoluut'}, {id: 'wv424b', text: 'Vaststaand'}, {id: 'wv424c', text: 'Vergeleken met iets anders'}, {id: 'wv424d', text: 'Onbelangrijk'}, {id: 'wv424e', text: 'Precies'}]},
  { id: 'w_v4_25', type: 'multiple-choice', text: 'Subjectief', options: [{id: 'wv425a', text: 'Feitelijk'}, {id: 'wv425b', text: 'Persoonlijk gekleurd'}, {id: 'wv425c', text: 'Algemeen'}, {id: 'wv425d', text: 'Onpartijdig'}, {id: 'wv425e', text: 'Bewezen'}]},
  { id: 'w_v4_26', type: 'multiple-choice', text: 'Triviaal', options: [{id: 'wv426a', text: 'Belangrijk'}, {id: 'wv426b', text: 'Onbeduidend'}, {id: 'wv426c', text: 'Complex'}, {id: 'wv426d', text: 'Noodzakelijk'}, {id: 'wv426e', text: 'Uniek'}]},
  // FIX: Added missing 'text:' property key for 'Gedeeltelijk'.
  { id: 'w_v4_27', type: 'multiple-choice', text: 'Unaniem', options: [{id: 'wv427a', text: 'Verdeeld'}, {id: 'wv427b', text: 'Onbeslist'}, {id: 'wv427c', text: 'Eensgezind'}, {id: 'wv427d', text: 'Gedeeltelijk'}, {id: 'wv427e', text: 'Tegen'}]},
  { id: 'w_v4_28', type: 'multiple-choice', text: 'Virtueel', options: [{id: 'wv428a', text: 'Lichamelijk'}, {id: 'wv428b', text: 'Geestelijk'}, {id: 'wv428c', text: 'Niet echt bestaand'}, {id: 'wv428d', text: 'Mogelijk'}, {id: 'wv428e', text: 'Zeker'}]},
  { id: 'w_v4_29', type: 'multiple-choice', text: 'Weerleggen', options: [{id: 'wv429a', text: 'Bevestigen'}, {id: 'wv429b', text: 'Herhalen'}, {id: 'wv429c', text: 'Tegenspreken met argumenten'}, {id: 'wv429d', text: 'Ondersteunen'}, {id: 'wv429e', text: 'Negegeren'}]},
  { id: 'w_v4_30', type: 'multiple-choice', text: 'Zorgvuldig', options: [{id: 'wv430a', text: 'Slordig'}, {id: 'wv430b', text: 'Snel'}, {id: 'wv430c', text: 'Ongeveer'}, {id: 'wv430d', text: 'Aandachtig'}, {id: 'wv430e', text: 'Willekeurig'}]},
  { id: 'w_v4_31', type: 'multiple-choice', text: 'Escaleren', options: [{id: 'wv431a', text: 'Afzwakken'}, {id: 'wv431b', text: 'Oplossen'}, {id: 'wv431c', text: 'Uit de hand lopen'}, {id: 'wv431d', text: 'Beginnen'}, {id: 'wv431e', text: 'Beheersen'}]},
  { id: 'w_v4_32', type: 'multiple-choice', text: 'Fundamenteel', options: [{id: 'wv432a', text: 'Oppervlakkig'}, {id: 'wv432b', text: 'Extra'}, {id: 'wv432c', text: 'Onbelangrijk'}, {id: 'wv432d', text: 'Wezenlijk'}, {id: 'wv432e', text: 'Tijdelijk'}]},
  { id: 'w_v4_33', type: 'multiple-choice', text: 'Ironisch', options: [{id: 'wv433a', text: 'Letterlijk'}, {id: 'wv433b', text: 'Spotachtig op een milde manier'}, {id: 'wv433c', text: 'Serieus'}, {id: 'wv433d', text: 'Enthousiast'}, {id: 'wv433e', text: 'Verdrietig'}]},
  { id: 'w_v4_34', type: 'multiple-choice', text: 'Lucratief', options: [{id: 'wv434a', text: 'Verliesgevend'}, {id: 'wv434b', text: 'Liefdadig'}, {id: 'wv434c', text: 'Winstgevend'}, {id: 'wv434d', text: 'Kostbaar'}, {id: 'wv434e', text: 'Moeilijk'}]}
];

export const BEGRIJPEND_LEZEN_TEXTS: ReadingText[] = [
  {
    id: 'blt_v4_1',
    title: 'De Invloed van Groen in de Stad',
    paragraphs: [
      'Stedelijke gebieden worden vaak gekenmerkt door beton, glas en asfalt. De aanwezigheid van groene ruimtes, zoals parken, stadsbossen en zelfs kleine tuinen, is echter van onschatbare waarde. Onderzoek toont steeds vaster aan dat contact met de natuur een significant positief effect heeft op de mentale gezondheid van stadsbewoners. Het vermindert stress, verbetert de stemming en kan zelfs de symptomen van depressie en angststoornissen verlichten. De rust en de natuurlijke prikkels die een park biedt, vormen een noodzakelijk tegenwicht voor de hectiek van het stadsleven.',
      'Naast de psychologische voordelen spelen groene zones een cruciale rol in het klimaat van de stad. Bomen en planten zorgen voor schaduw en verkoeling door verdamping, een proces dat bekendstaat als evapotranspiratie. Hierdoor wordt het \'stedelijk hitte-eilandeffect\' – het fenomeen waarbij steden aanzienlijk warmer zijn dan het omliggende platteland – getemperd. Bovendien functioneren planten als natuurlijke luchtfilters: ze vangen fijnstof op en zetten CO2 om in zuurstof, wat leidt tot een betere luchtkwaliteit.',
      'De aanleg en het onderhoud van stedelijk groen brengen echter ook uitdagingen met zich mee. Ruimte is schaars en duur in dichtbevolkte gebieden, en er is een constante afweging tussen bouwen en vergroenen. Bovendien vereisen deze ruimtes een doordacht beheer om de biodiversiteit te ondersteunen en te zorgen dat ze toegankelijk en veilig zijn voor alle bewoners. Innovatieve oplossingen zoals verticale tuinen en groene daken winnen aan populariteit als manieren om groen te integreren in de bestaande bebouwde omgeving, en zo de leefbaarheid van steden voor de toekomst te verzekeren.'
    ],
    questions: [
      // FIX: Corrected option IDs to match the question's section prefix for consistency and to prevent runtime errors.
      { id: 'blq_v4_1', type: 'multiple-choice', text: 'Wat is GEEN genoemd positief effect van natuur op de mentale gezondheid?', options: [{id: 'blqv41a', text: 'Stressvermindering'}, {id: 'blqv41b', text: 'Verbeterde stemming'}, {id: 'blqv41c', text: 'Verhoogde creativiteit'}, {id: 'blqv41d', text: 'Verlichting van angstsymptomen'}] },
      { id: 'blq_v4_2', type: 'multiple-choice', text: 'Hoe helpen bomen het \'stedelijk hitte-eilandeffect\' te verminderen?', options: [{id: 'blqv42a', text: 'Door regenwater op te vangen'}, {id: 'blqv42b', text: 'Door CO2 op te nemen'}, {id: 'blqv42c', text: 'Door schaduw en verkoeling via verdamping'}, {id: 'blqv42d', text: 'Door wind te blokkeren'}] },
      { id: 'blq_v4_3', type: 'multiple-choice', text: 'Welke uitdaging wordt in de tekst genoemd bij de aanleg van stedelijk groen?', options: [{id: 'blqv43a', text: 'Gebrek aan interesse van bewoners'}, {id: 'blqv43b', text: 'De schaarste en kosten van ruimte'}, {id: 'blqv43c', text: 'Te veel regenval'}, {id: 'blqv43d', text: 'De snelle groei van bomen'}] },
      { id: 'blq_v4_4', type: 'multiple-choice', text: 'Wat is evapotranspiratie?', options: [{id: 'blqv44a', text: 'Het proces waarbij planten licht omzetten in energie'}, {id: 'blqv44b', text: 'Het proces waarbij planten water verdampen en zo de omgeving koelen'}, {id: 'blqv44c', text: 'Het proces waarbij planten fijnstof uit de lucht filteren'}, {id: 'blqv44d', text: 'Het proces waarbij steden opwarmen'}] },
      { id: 'blq_v4_5', type: 'multiple-choice', text: 'Wat is een voorbeeld van een innovatieve oplossing voor groen in de stad?', options: [{id: 'blqv45a', text: 'Het aanleggen van grotere parkeerplaatsen'}, {id: 'blqv45b', text: 'Het bouwen van hogere gebouwen'}, {id: 'blqv45c', text: 'Verticale tuinen en groene daken'}, {id: 'blqv45d', text: 'Het verbreden van wegen'}] },
      { id: 'blq_v4_6', type: 'multiple-choice', text: 'De hoofdgedachte van de tekst is dat stedelijk groen...', options: [{id: 'blqv46a', text: '...vooral esthetisch belangrijk is.'}, {id: 'blqv46b', text: '...te duur is om te onderhouden.'}, {id: 'blqv46c', text: '...essentieel is voor zowel de gezondheid van de bewoners als het stadsklimaat.'}, {id: 'blqv46d', text: '...een probleem vormt voor de biodiversiteit.'}] },
      { id: 'blq_v4_7', type: 'multiple-choice', text: 'Waarom is er een afweging tussen bouwen en vergroenen?', options: [{id: 'blqv47a', text: 'Omdat bouwen meer geld oplevert'}, {id: 'blqv47b', text: 'Omdat groene ruimtes gevaarlijk kunnen zijn'}, {id: 'blqv47c', text: 'Omdat de beschikbare ruimte in steden beperkt is'}, {id: 'blqv47d', text: 'Omdat bewoners liever meer huizen willen'}] },
      { id: 'blq_v4_8', type: 'multiple-choice', text: 'Hoe dragen planten bij aan een betere luchtkwaliteit in de stad?', options: [{id: 'blqv48a', text: 'Door waterdamp te produceren'}, {id: 'blqv48b', text: 'Door fijnstof op te vangen en CO2 om te zetten'}, {id: 'blqv48c', text: 'Door onaangename geuren te maskeren'}, {id: 'blqv48d', text: 'Door geluidsoverlast te verminderen'}] },
      { id: 'blq_v4_9', type: 'multiple-choice', text: 'Het woord "significant" in de eerste alinea betekent...', options: [{id: 'blqv49a', text: 'onbelangrijk'}, {id: 'blqv49b', text: 'verrassend'}, {id: 'blqv49c', text: 'betekenisvol'}, {id: 'blqv49d', text: 'klein'}] }
    ]
  },
  {
    id: 'blt_v4_2',
    title: 'De Geschiedenis van Koffie',
    paragraphs: [
      'De oorsprong van koffie is gehuld in legendes, maar de meest bekende vertelt over Kaldi, een Ethiopische geitenhoeder die in de 9e eeuw ontdekte dat zijn geiten ongewoon energiek werden na het eten van de bessen van een bepaalde struik. Nieuwsgierig geworden, probeerde Kaldi de bessen zelf en ervoer hij een vergelijkbaar verkwikkend effect. De kennis van deze energiegevende bessen verspreidde zich, en via het Arabisch schiereiland begon de koffieplant aan zijn reis over de wereld. In de 15e eeuw werd koffie verbouwd in Jemen en was het razend populair in steden als Mekka en Caïro, waar de eerste koffiehuizen ontstonden.',
      'Deze koffiehuizen, \'qahveh khaneh\' genaamd, werden al snel sociale en culturele centra. Het waren plaatsen waar mensen samenkwamen om te praten, naar muziek te luisteren, spellen te spelen en op de hoogte te blijven van het nieuws. Ze werden ook wel \'scholen van de wijzen\' genoemd, omdat ze een broedplaats waren voor intellectuele discussies en politieke debatten. De populariteit en de stimulerende aard van de drank maakten heersers soms nerveus, wat in verschillende steden en periodes leidde tot een verbod op koffiehuizen.',
      'Europese reizigers brachten in de 17e eeuw verhalen en monsters van de drank mee terug, en al snel openden ook in Europa de eerste koffiehuizen hun deuren in steden als Venetië, Londen en Parijs. Net als in het Midden-Oosten werden deze etablissementen centra van commerciële, sociale en intellectuele activiteit. De vraag naar koffie explodeerde, wat leidde tot de oprichting van plantages in Europese koloniën in Azië en Latijns-Amerika. Vandaag de dag is koffie een van de meest verhandelde goederen ter wereld en een onmisbaar onderdeel van de dagelijkse routine voor miljoenen mensen.'
    ],
    questions: [
      { id: 'blq_v4_10', type: 'multiple-choice', text: 'Wie ontdekte volgens de legende de effecten van koffiebessen?', options: [{id: 'blqv410a', text: 'Een Europese reiziger'}, {id: 'blqv410b', text: 'Een Arabische handelaar'}, {id: 'blqv410c', text: 'Een Ethiopische geitenhoeder'}, {id: 'blqv410d', text: 'Een Jemenitische monnik'}] },
      { id: 'blq_v4_11', type: 'multiple-choice', text: 'Waar ontstonden de eerste koffiehuizen?', options: [{id: 'blqv411a', text: 'In Ethiopië'}, {id: 'blqv411b', text: 'In steden als Mekka en Caïro'}, {id: 'blqv411c', text: 'In Venetië en Londen'}, {id: 'blqv411d', text: 'In Latijns-Amerika'}] },
      { id: 'blq_v4_12', type: 'multiple-choice', text: 'Waarom werden koffiehuizen \'scholen van de wijzen\' genoemd?', options: [{id: 'blqv412a', text: 'Omdat er formeel les werd gegeven'}, {id: 'blqv412b', text: 'Omdat ze een centrum waren voor intellectuele discussies'}, {id: 'blqv412c', text: 'Omdat alleen geleerden er mochten komen'}, {id: 'blqv412d', text: 'Omdat ze gratis boeken aanboden'}] },
      { id: 'blq_v4_13', type: 'multiple-choice', text: 'Wat was een reden dat heersers soms koffiehuizen verboden?', options: [{id: 'blqv413a', text: 'De koffie was te duur'}, {id: 'blqv413b', text: 'Ze vonden de drank niet lekker'}, {id: 'blqv413c', text: 'Ze waren bang voor de politieke debatten die er plaatsvonden'}, {id: 'blqv413d', text: 'Er werd te veel lawaai gemaakt'}] },
      { id: 'blq_v4_14', type: 'multiple-choice', text: 'Wanneer werd koffie populair in Europa?', options: [{id: 'blqv414a', text: 'In de 9e eeuw'}, {id: 'blqv414b', text: 'In de 15e eeuw'}, {id: 'blqv414c', text: 'In de 17e eeuw'}, {id: 'blqv414d', text: 'In de 20e eeuw'}] },
      { id: 'blq_v4_15', type: 'multiple-choice', text: 'Wat was het gevolg van de exploderende vraag naar koffie in Europa?', options: [{id: 'blqv415a', text: 'De prijs van koffie daalde enorm'}, {id: 'blqv415b', text: 'Koffiehuizen werden weer verboden'}, {id: 'blqv415c', text: 'De oprichting van plantages in Europese koloniën'}, {id: 'blqv415d', text: 'Mensen begonnen thee te drinken'}] },
      { id: 'blq_v4_16', type: 'multiple-choice', text: 'De term "verkwikkend" in de eerste alinea betekent:', options: [{id: 'blqv416a', text: 'kalmerend'}, {id: 'blqv416b', text: 'verwarmend'}, {id: 'blqv416c', text: 'opwekkend'}, {id: 'blqv416d', text: 'smakelijk'}] },
      { id: 'blq_v4_17', type: 'multiple-choice', text: 'Wat is de huidige status van koffie volgens de tekst?', options: [{id: 'blqv417a', text: 'Het is een zeldzaam en luxueus product'}, {id: 'blqv417b', text: 'De populariteit ervan neemt af'}, {id: 'blqv417c', text: 'Het is een van de meest verhandelde goederen ter wereld'}, {id: 'blqv417d', text: 'Het wordt alleen nog in Ethiopië verbouwd'}] },
      { id: 'blq_v4_18', type: 'multiple-choice', text: 'De functie van koffiehuizen in Europa was vergelijkbaar met die in het Midden-Oosten omdat ze...', options: [{id: 'blqv418a', text: '...ook \'qahveh khaneh\' werden genoemd.'}, {id: 'blqv418b', text: '...ook de koffie gratis serveerden.'}, {id: 'blqv418c', text: '...ook functioneerden als centra van commerciële en sociale activiteit.'}, {id: 'blqv418d', text: '...ook vaak verboden werden door de heersers.'}] },
      { id: 'blq_v4_19', type: 'multiple-choice', text: 'Welke route volgde de verspreiding van koffie aanvankelijk?', options: [{id: 'blqv419a', text: 'Van Europa naar het Midden-Oosten'}, {id: 'blqv419b', text: 'Van Latijns-Amerika naar Azië'}, {id: 'blqv419c', text: 'Van Ethiopië via het Arabisch schiereiland'}, {id: 'blqv419d', text: 'Van Jemen naar Ethiopië'}] }
    ]
  },
   {
    id: 'blt_v4_3',
    title: 'Blockchain: Meer dan de Bitcoin',
    paragraphs: [
      'Wanneer mensen het woord \'blockchain\' horen, denken ze vaak direct aan cryptocurrencies zoals Bitcoin. Hoewel deze technologie inderdaad de ruggengraat vormt van digitale valuta, reiken de toepassingsmogelijkheden veel verder. In essentie is een blockchain een gedecentraliseerd, onveranderlijk digitaal logboek. Informatie wordt opgeslagen in \'blokken\' die cryptografisch aan elkaar zijn geketend. Elk nieuw blok bevat een verwijzing naar het vorige, waardoor een keten ontstaat die extreem moeilijk te wijzigen is. Omdat dit logboek niet op één centrale server staat, maar wordt gedeeld en geverifieerd door een netwerk van computers, is het zeer transparant en fraudebestendig.',
      'Een van de meest veelbelovende toepassingen buiten de financiële wereld is in het beheer van toeleveringsketens (supply chains). Met blockchain kan de reis van een product, van de boer tot in de winkel, volledig worden vastgelegd. Elke stap – oogst, transport, opslag – wordt een transactie in een blok. Dit creëert een transparant en onweerlegbaar spoor. Consumenten kunnen een QR-code scannen om de herkomst van hun voedsel te controleren, wat de voedselveiligheid verhoogt. Voor bedrijven helpt het om de efficiëntie te verbeteren en fraude met bijvoorbeeld namaakproducten tegen te gaan.',
      'Ook in de gezondheidszorg, het notariaat en zelfs bij het organiseren van verkiezingen wordt het potentieel van blockchain onderzocht. Het veilig en transparant beheren van medische dossiers, het vastleggen van eigendomsakten of het creëren van een fraudebestendig stemsysteem zijn complexe problemen waar de unieke eigenschappen van blockchain – decentralisatie, onveranderlijkheid en transparantie – een oplossing voor kunnen bieden. De technologie staat nog in de kinderschoenen, maar de impact ervan zou wel eens even revolutionair kunnen zijn als de komst van het internet zelf.'
    ],
    questions: [
      { id: 'blq_v4_20', type: 'multiple-choice', text: 'Wat is de kerneigenschap van een blockchain volgens de tekst?', options: [{id: 'blqv420a', text: 'Het is een centrale database beheerd door een bank'}, {id: 'blqv420b', text: 'Het is een gedecentraliseerd en onveranderlijk digitaal logboek'}, {id: 'blqv420c', text: 'Het is een snelle manier om betalingen te doen'}, {id: 'blqv420d', text: 'Het is een anoniem systeem voor cryptocurrencies'}] },
      { id: 'blq_v4_21', type: 'multiple-choice', text: 'Waarom is een blockchain moeilijk te wijzigen?', options: [{id: 'blqv421a', text: 'Omdat het te veel data bevat'}, {id: 'blqv421b', text: 'Omdat de blokken cryptografisch aan elkaar geketend zijn'}, {id: 'blqv421c', text: 'Omdat het illegaal is om het te proberen'}, {id: 'blqv421d', text: 'Omdat de informatie niet digitaal is'}] },
      { id: 'blq_v4_22', type: 'multiple-choice', text: 'Hoe kan blockchain de voedselveiligheid verhogen?', options: [{id: 'blqv422a', text: 'Door voedsel sneller te transporteren'}, {id: 'blqv422b', text: 'Door de smaak van voedsel te verbeteren'}, {id: 'blqv422c', text: 'Door een transparant spoor van de herkomst van voedsel te creëren'}, {id: 'blqv422d', text: 'Door de prijs van voedsel te verlagen'}] },
      { id: 'blq_v4_23', type: 'multiple-choice', text: 'Wat is GEEN toepassing van blockchain die in de tekst wordt genoemd?', options: [{id: 'blqv423a', text: 'Beheer van toeleveringsketens'}, {id: 'blqv423b', text: 'Sociale media netwerken'}, {id: 'blqv423c', text: 'Beheer van medische dossiers'}, {id: 'blqv423d', text: 'Organiseren van verkiezingen'}] },
      { id: 'blq_v4_24', type: 'multiple-choice', text: 'Welke eigenschap maakt blockchain fraudebestendig?', options: [{id: 'blqv424a', text: 'De snelheid van de transacties'}, {id: 'blqv424b', text: 'De decentralisatie en transparantie'}, {id: 'blqv424c', text: 'De complexiteit van de technologie'}, {id: 'blqv424d', text: 'De associatie met Bitcoin'}] },
      { id: 'blq_v4_25', type: 'multiple-choice', text: 'Wat wordt bedoeld met "de technologie staat nog in de kinderschoenen"?', options: [{id: 'blqv425a', text: 'Dat het alleen door kinderen gebruikt wordt'}, {id: 'blqv425b', text: 'Dat het een speelse technologie is'}, {id: 'blqv425c', text: 'Dat de technologie nog volop in ontwikkeling is'}, {id: 'blqv425d', text: 'Dat de technologie verouderd is'}] },
      { id: 'blq_v4_26', type: 'multiple-choice', text: 'Het woord "onweerlegbaar" in de tweede alinea betekent:', options: [{id: 'blqv426a', text: 'geheim'}, {id: 'blqv426b', text: 'niet te bewijzen'}, {id: 'blqv426c', text: 'niet te betwisten'}, {id: 'blqv426d', text: 'onbelangrijk'}] },
      { id: 'blq_v4_27', type: 'multiple-choice', text: 'De vergelijking met de komst van het internet suggereert dat de impact van blockchain...', options: [{id: 'blqv427a', text: '...beperkt zal zijn tot de financiële sector.'}, {id: 'blqv427b', text: '...mogelijk zeer groot en wijdverspreid zal zijn.'}, {id: 'blqv427c', text: '...tijdelijk en een hype is.'}, {id: 'blqv427d', text: '...moeilijk te begrijpen is voor de meeste mensen.'}] },
      { id: 'blq_v4_28', type: 'multiple-choice', text: 'Wat is het belangrijkste doel van het gebruik van blockchain in toeleveringsketens?', options: [{id: 'blqv428a', text: 'Het anoniem maken van de producent'}, {id: 'blqv428b', text: 'Het verhogen van de productiesnelheid'}, {id: 'blqv428c', text: 'Het creëren van transparantie en het tegengaan van fraude'}, {id: 'blqv428d', text: 'Het verlagen van de transportkosten'}] },
      { id: 'blq_v4_29', type: 'multiple-choice', text: 'Waarom is decentralisatie een belangrijk kenmerk van blockchain?', options: [{id: 'blqv429a', text: 'Omdat het de controle in handen van één persoon legt'}, {id: 'blqv429b', text: 'Omdat het logboek wordt gedeeld en geverifieerd door een netwerk, wat het veiliger maakt'}, {id: 'blqv429c', text: 'Omdat het systeem daardoor sneller werkt'}, {id: 'blqv429d', text: 'Omdat het goedkoper is om geen centrale server te hebben'}] }
    ]
  }
];

export const REKENEN_QUESTIONS: MultipleChoiceQuestion[] = [
    // 32 Vragen (v4)
    { id: 'r_v4_1', type: 'multiple-choice', text: 'Wat is 3/8 als een decimaal getal?', options: [{id: 'rv41a', text: '0,125'}, {id: 'rv41b', text: '0,375'}, {id: 'rv41c', text: '0,38'}, {id: 'rv41d', text: '0,4'}] },
    { id: 'r_v4_2', type: 'multiple-choice', text: 'Een fiets kost €450 inclusief 21% BTW. Wat is de prijs exclusief BTW? (afgerond op centen)', options: [{id: 'rv42a', text: '€355,50'}, {id: 'rv42b', text: '€371,90'}, {id: 'rv42c', text: '€390,00'}, {id: 'rv42d', text: '€429,00'}] },
    { id: 'r_v4_3', type: 'multiple-choice', text: 'Bereken: 4 + 6 x (5 - 2)', options: [{id: 'rv43a', text: '22'}, {id: 'rv43b', text: '30'}, {id: 'rv43c', text: '18'}, {id: 'rv43d', text: '28'}] },
    { id: 'r_v4_4', type: 'multiple-choice', text: 'Een auto rijdt 350 km in 4 uur. Wat is de gemiddelde snelheid?', options: [{id: 'rv44a', text: '80 km/u'}, {id: 'rv44b', text: '87,5 km/u'}, {id: 'rv44c', text: '90 km/u'}, {id: 'rv44d', text: '1400 km/u'}] },
    { id: 'r_v4_5', type: 'multiple-choice', text: 'Wat is de oppervlakte van een driehoek met basis 12 cm en hoogte 5 cm?', options: [{id: 'rv45a', text: '17 cm²'}, {id: 'rv45b', text: '30 cm²'}, {id: 'rv45c', text: '60 cm²'}, {id: 'rv45d', text: '34 cm²'}] },
    { id: 'r_v4_6', type: 'multiple-choice', text: 'Als 4 pennen €6 kosten, wat kosten 7 pennen?', options: [{id: 'rv46a', text: '€9,50'}, {id: 'rv46b', text: '€10,00'}, {id: 'rv46c', text: '€10,50'}, {id: 'rv46d', text: '€11,00'}] },
    { id: 'r_v4_7', type: 'multiple-choice', text: 'Een recept vereist 250 ml melk voor 6 pannenkoeken. Hoeveel melk heb je nodig voor 15 pannenkoeken?', options: [{id: 'rv47a', text: '500 ml'}, {id: 'rv47b', text: '575 ml'}, {id: 'rv47c', text: '600 ml'}, {id: 'rv47d', text: '625 ml'}] },
    { id: 'r_v4_8', type: 'multiple-choice', text: 'Los op: 2(x + 3) = 14', options: [{id: 'rv48a', text: 'x = 2'}, {id: 'rv48b', text: 'x = 3'}, {id: 'rv48c', text: 'x = 4'}, {id: 'rv48d', text: 'x = 5'}] },
    { id: 'r_v4_9', type: 'multiple-choice', text: 'Een broek met een oorspronkelijke prijs van €75 wordt verkocht met 30% korting. Wat is de verkoopprijs?', options: [{id: 'rv49a', text: '€22,50'}, {id: 'rv49b', text: '€45,00'}, {id: 'rv49c', text: '€52,50'}, {id: 'rv49d', text: '€67,50'}] },
    { id: 'r_v4_10', type: 'multiple-choice', text: 'Wat is het gemiddelde van de getallen 15, 25, 40 en 20?', options: [{id: 'rv410a', text: '20'}, {id: 'rv410b', text: '25'}, {id: 'rv410c', text: '27.5'}, {id: 'rv410d', text: '30'}] },
    { id: 'r_v4_11', type: 'multiple-choice', text: 'De omtrek van een vierkant is 36 cm. Wat is de oppervlakte?', options: [{id: 'rv411a', text: '36 cm²'}, {id: 'rv411b', text: '64 cm²'}, {id: 'rv411c', text: '81 cm²'}, {id: 'rv411d', text: '144 cm²'}] },
    { id: 'r_v4_12', type: 'multiple-choice', text: 'Je werkt 18 uur en verdient €225. Wat is je uurloon?', options: [{id: 'rv412a', text: '€10,50'}, {id: 'rv412b', text: '€11,75'}, {id: 'rv412c', text: '€12,50'}, {id: 'rv412d', text: '€13,00'}] },
    { id: 'r_v4_13', type: 'multiple-choice', text: 'Wat is 2/5 van 150?', options: [{id: 'rv413a', text: '30'}, {id: 'rv413b', text: '50'}, {id: 'rv413c', text: '60'}, {id: 'rv413d', text: '75'}] },
    { id: 'r_v4_14', type: 'multiple-choice', text: 'Een product stijgt in prijs van €50 naar €65. Met welk percentage is de prijs gestegen?', options: [{id: 'rv414a', text: '15%'}, {id: 'rv414b', text: '25%'}, {id: 'rv414c', text: '30%'}, {id: 'rv414d', text: '35%'}] },
    { id: 'r_v4_15', type: 'multiple-choice', text: 'Hoeveel is 40% van 250?', options: [{id: 'rv415a', text: '80'}, {id: 'rv415b', text: '90'}, {id: 'rv415c', text: '100'}, {id: 'rv415d', text: '120'}] },
    { id: 'r_v4_16', type: 'multiple-choice', text: 'Bereken: (5 - 8)² * 3', options: [{id: 'rv416a', text: '-27'}, {id: 'rv416b', text: '-18'}, {id: 'rv416c', text: '18'}, {id: 'rv416d', text: '27'}] },
    { id: 'r_v4_17', type: 'multiple-choice', text: 'De verhouding van jongens tot meisjes in een klas is 3:4. Als er 12 jongens zijn, hoeveel meisjes zijn er dan?', options: [{id: 'rv417a', text: '9'}, {id: 'rv417b', text: '15'}, {id: 'rv417c', text: '16'}, {id: 'rv417d', text: '20'}] },
    { id: 'r_v4_18', type: 'multiple-choice', text: 'Wat is de mediaan van de getallen: 9, 2, 7, 5, 1, 8?', options: [{id: 'rv418a', text: '5'}, {id: 'rv418b', text: '5.5'}, {id: 'rv418c', text: '6'}, {id: 'rv418d', text: '7'}] },
    { id: 'r_v4_19', type: 'multiple-choice', text: 'Een trein vertrekt om 10:40 en komt aan om 13:15. Hoe lang duurt de reis?', options: [{id: 'rv419a', text: '2 uur en 25 minuten'}, {id: 'rv419b', text: '2 uur en 35 minuten'}, {id: 'rv419c', text: '3 uur en 25 minuten'}, {id: 'rv419d', text: '2 uur en 15 minuten'}] },
    { id: 'r_v4_20', type: 'multiple-choice', text: 'Bereken: 1/2 - 1/3', options: [{id: 'rv420a', text: '1/6'}, {id: 'rv420b', text: '1/3'}, {id: 'rv420c', text: '1/1'}, {id: 'rv420d', text: '-1/6'}] },
    { id: 'r_v4_21', type: 'multiple-choice', text: 'Wat is het kleinste gemene veelvoud van 9 en 15?', options: [{id: 'rv421a', text: '30'}, {id: 'rv421b', text: '45'}, {id: 'rv421c', text: '90'}, {id: 'rv421d', text: '135'}] },
    { id: 'r_v4_22', type: 'multiple-choice', text: 'Een kapitaal van €5000 brengt €150 rente op in een jaar. Wat is de rentevoet?', options: [{id: 'rv422a', text: '2%'}, {id: 'rv422b', text: '2.5%'}, {id: 'rv422c', text: '3%'}, {id: 'rv422d', text: '3.5%'}] },
    { id: 'r_v4_23', type: 'multiple-choice', text: 'Op een kaart met schaal 1:200.000 is de afstand 8 cm. Wat is de werkelijke afstand in km?', options: [{id: 'rv423a', text: '1,6 km'}, {id: 'rv423b', text: '8 km'}, {id: 'rv423c', text: '16 km'}, {id: 'rv423d', text: '160 km'}] },
    { id: 'r_v4_24', type: 'multiple-choice', text: 'Een aquarium van 50 cm lang, 30 cm breed en 40 cm hoog wordt gevuld. Wat is het volume in liters? (1 liter = 1000 cm³)', options: [{id: 'rv424a', text: '6 liter'}, {id: 'rv424b', text: '60 liter'}, {id: 'rv424c', text: '600 liter'}, {id: 'rv424d', text: '6000 liter'}] },
    { id: 'r_v4_25', type: 'multiple-choice', text: 'Als 120 gelijk is aan 60% van een getal, wat is dan dat getal?', options: [{id: 'rv425a', text: '72'}, {id: 'rv425b', text: '180'}, {id: 'rv425c', text: '200'}, {id: 'rv425d', text: '240'}] },
    { id: 'r_v4_26', type: 'multiple-choice', text: 'Wat is de grootste gemene deler van 42 en 56?', options: [{id: 'rv426a', text: '6'}, {id: 'rv426b', text: '7'}, {id: 'rv426c', text: '14'}, {id: 'rv426d', text: '28'}] },
    { id: 'r_v4_27', type: 'multiple-choice', text: 'Je scoort 36 op 40. Welk percentage is dit?', options: [{id: 'rv427a', text: '80%'}, {id: 'rv427b', text: '85%'}, {id: 'rv427c', text: '90%'}, {id: 'rv427d', text: '92%'}] },
    { id: 'r_v4_28', type: 'multiple-choice', text: 'Vereenvoudig de breuk 54/72.', options: [{id: 'rv428a', text: '2/3'}, {id: 'rv428b', text: '3/4'}, {id: 'rv428c', text: '5/6'}, {id: 'rv428d', text: '6/7'}] },
    { id: 'r_v4_29', type: 'multiple-choice', text: 'Een cirkel heeft een diameter van 20 cm. Wat is de omtrek? (Gebruik π ≈ 3,14)', options: [{id: 'rv429a', text: '31,4 cm'}, {id: 'rv429b', text: '62,8 cm'}, {id: 'rv429c', text: '125,6 cm'}, {id: 'rv429d', text: '314 cm'}] },
    { id: 'r_v4_30', type: 'multiple-choice', text: 'Een getal wordt vermenigvuldigd met 4 en daarna wordt er 8 afgetrokken. Het resultaat is 20. Wat is het getal?', options: [{id: 'rv430a', text: '5'}, {id: 'rv430b', text: '6'}, {id: 'rv430c', text: '7'}, {id: 'rv430d', text: '8'}] },
    { id: 'r_v4_31', type: 'multiple-choice', text: 'De temperatuur stijgt van -5°C naar 12°C. Hoeveel graden is de stijging?', options: [{id: 'rv431a', text: '7°C'}, {id: 'rv431b', text: '12°C'}, {id: 'rv431c', text: '17°C'}, {id: 'rv431d', text: '15°C'}] },
    { id: 'r_v4_32', type: 'multiple-choice', text: 'Wat is de volgende in de reeks: 1/2, 1/4, 1/8, ...?', options: [{id: 'rv432a', text: '1/10'}, {id: 'rv432b', text: '1/12'}, {id: 'rv432c', text: '1/16'}, {id: 'rv432d', text: '1/32'}] }
];

export const NUMERIEK_REDENEREN_QUESTIONS: TextFillQuestion[] = [
    // 20 Vragen (v4)
    { id: 'nr_v4_1', type: 'text-fill', text: '100, 97, 94, 91, 88, ?, ?', placeholders: 2 },
    { id: 'nr_v4_2', type: 'text-fill', text: '5, 10, 20, 40, 80, ?, ?', placeholders: 2 },
    { id: 'nr_v4_3', type: 'text-fill', text: '1, 9, 2, 8, 3, ?, ?', placeholders: 2 },
    { id: 'nr_v4_4', type: 'text-fill', text: '2, 5, 10, 17, 26, ?, ?', placeholders: 2 },
    { id: 'nr_v4_5', type: 'text-fill', text: '3, 4, 6, 9, 13, ?, ?', placeholders: 2 },
    { id: 'nr_v4_6', type: 'text-fill', text: '243, 81, 27, 9, 3, ?, ?', placeholders: 2 },
    { id: 'nr_v4_7', type: 'text-fill', text: '4, 8, 7, 14, 13, ?, ?', placeholders: 2 },
    { id: 'nr_v4_8', type: 'text-fill', text: '1, 2, 6, 24, 120, ?, ?', placeholders: 2 },
    { id: 'nr_v4_9', type: 'text-fill', text: '8, 6, 9, 7, 10, ?, ?', placeholders: 2 },
    { id: 'nr_v4_10', type: 'text-fill', text: '1, 2, 4, 7, 11, ?, ?', placeholders: 2 },
    { id: 'nr_v4_11', type: 'text-fill', text: '90, 80, 71, 63, 56, ?, ?', placeholders: 2 },
    { id: 'nr_v4_12', type: 'text-fill', text: '3, 9, 4, 12, 5, ?, ?', placeholders: 2 },
    { id: 'nr_v4_13', type: 'text-fill', text: '1, 1, 2, 4, 3, ?, ?', placeholders: 2 },
    { id: 'nr_v4_14', type: 'text-fill', text: '0, 3, 8, 15, 24, ?, ?', placeholders: 2 },
    { id: 'nr_v4_15', type: 'text-fill', text: '2, 3, 5, 7, 11, ?, ?', placeholders: 2 },
    { id: 'nr_v4_16', type: 'text-fill', text: '5, 15, 10, 30, 25, ?, ?', placeholders: 2 },
    { id: 'nr_v4_17', type: 'text-fill', text: '4, 9, 16, 25, 36, ?, ?', placeholders: 2 },
    { id: 'nr_v4_18', type: 'text-fill', text: '10, 20, 25, 50, 55, ?, ?', placeholders: 2 },
    { id: 'nr_v4_19', type: 'text-fill', text: '1, 4, 2, 8, 4, ?, ?', placeholders: 2 },
    { id: 'nr_v4_20', type: 'text-fill', text: '8, 12, 18, 27, 40.5, ?, ?', placeholders: 2 }
];

export const CORRECT_ANSWERS: Record<string, string | string[]> = {
  // Woordenschat (v4)
  w_v4_1: 'Echt', w_v4_2: 'Wereldwijd', w_v4_3: 'Voorrang', w_v4_4: 'Niet tastbaar', w_v4_5: 'Nadenken over',
  w_v4_6: 'Fijnzinnig', w_v4_7: 'Gelijkwaardig', w_v4_8: 'Vast', w_v4_9: 'Vernieuwend', w_v4_10: 'Uitdrukkelijk',
  w_v4_11: 'Schijnbare tegenstelling', w_v4_12: 'Praktisch', w_v4_13: 'Geschikt', w_v4_14: 'Alledaags', w_v4_15: 'Bitter spottend',
  w_v4_16: 'Eindgültig', w_v4_17: 'Verzonnen', w_v4_18: 'Gelijksoortig', w_v4_19: 'Stilzwijgend', w_v4_20: 'Wat betreft de hoeveelheid',
  w_v4_21: 'Gemiddeld', w_v4_22: 'Heimwee naar het verleden', w_v4_23: 'Feitelijk', w_v4_24: 'Vergeleken met iets anders', w_v4_25: 'Persoonlijk gekleurd',
  w_v4_26: 'Onbeduidend', w_v4_27: 'Eensgezind', w_v4_28: 'Niet echt bestaand', w_v4_29: 'Tegenspreken met argumenten', w_v4_30: 'Aandachtig',
  w_v4_31: 'Uit de hand lopen', w_v4_32: 'Wezenlijk', w_v4_33: 'Spotachtig op een milde manier', w_v4_34: 'Winstgevend',

  // Begrijpend Lezen (v4)
  blq_v4_1: 'Verhoogde creativiteit',
  blq_v4_2: 'Door schaduw en verkoeling via verdamping',
  blq_v4_3: 'De schaarste en kosten van ruimte',
  blq_v4_4: 'Het proces waarbij planten water verdampen en zo de omgeving koelen',
  blq_v4_5: 'Verticale tuinen en groene daken',
  blq_v4_6: '...essentieel is voor zowel de gezondheid van de bewoners als het stadsklimaat.',
  blq_v4_7: 'Omdat de beschikbare ruimte in steden beperkt is',
  blq_v4_8: 'Door fijnstof op te vangen en CO2 om te zetten',
  blq_v4_9: 'betekenisvol',
  blq_v4_10: 'Een Ethiopische geitenhoeder',
  blq_v4_11: 'In steden als Mekka en Caïro',
  blq_v4_12: 'Omdat ze een centrum waren voor intellectuele discussies',
  blq_v4_13: 'Ze waren bang voor de politieke debatten die er plaatsvonden',
  blq_v4_14: 'In de 17e eeuw',
  blq_v4_15: 'De oprichting van plantages in Europese koloniën',
  blq_v4_16: 'opwekkend',
  blq_v4_17: 'Het is een van de meest verhandelde goederen ter wereld',
  blq_v4_18: '...ook functioneerden als centra van commerciële en sociale activiteit.',
  blq_v4_19: 'Van Ethiopië via het Arabisch schiereiland',
  blq_v4_20: 'Het is een gedecentraliseerd en onveranderlijk digitaal logboek',
  blq_v4_21: 'Omdat de blokken cryptografisch aan elkaar geketend zijn',
  blq_v4_22: 'Door een transparant spoor van de herkomst van voedsel te creëren',
  blq_v4_23: 'Sociale media netwerken',
  blq_v4_24: 'De decentralisatie en transparantie',
  blq_v4_25: 'Dat de technologie nog volop in ontwikkeling is',
  blq_v4_26: 'niet te betwisten',
  blq_v4_27: '...mogelijk zeer groot en wijdverspreid zal zijn.',
  blq_v4_28: 'Het creëren van transparantie en het tegengaan van fraude',
  blq_v4_29: 'Omdat het logboek wordt gedeeld en geverifieerd door een netwerk, wat het veiliger maakt',

  // Rekenen (v4)
  r_v4_1: '0,375', r_v4_2: '€371,90', r_v4_3: '22', r_v4_4: '87,5 km/u', r_v4_5: '30 cm²',
  r_v4_6: '€10,50', r_v4_7: '625 ml', r_v4_8: 'x = 4', r_v4_9: '€52,50', r_v4_10: '25',
  r_v4_11: '81 cm²', r_v4_12: '€12,50', r_v4_13: '60', r_v4_14: '30%', r_v4_15: '100',
  r_v4_16: '27', r_v4_17: '16', r_v4_18: '6', r_v4_19: '2 uur en 35 minuten', r_v4_20: '1/6',
  r_v4_21: '45', r_v4_22: '3%', r_v4_23: '16 km', r_v4_24: '60 liter', r_v4_25: '200',
  r_v4_26: '14', r_v4_27: '90%', r_v4_28: '3/4', r_v4_29: '62,8 cm', r_v4_30: '7',
  r_v4_31: '17°C', r_v4_32: '1/16',

  // Numeriek Redeneren (v4)
  nr_v4_1: ['85', '82'], // -3
  nr_v4_2: ['160', '320'], // x2
  nr_v4_3: ['7', '4'], // Twee reeksen: 1,2,3,4 en 9,8,7
  nr_v4_4: ['37', '50'], // +3, +5, +7, +9, +11, +13 (n²+1)
  nr_v4_5: ['18', '24'], // +1, +2, +3, +4, +5, +6
  nr_v4_6: ['1', '1/3'], // /3
  nr_v4_7: ['26', '25'], // x2, -1
  nr_v4_8: ['720', '5040'], // x2, x3, x4, x5, x6
  nr_v4_9: ['8', '11'], // -2, +3, -2, +3...
  nr_v4_10: ['16', '22'], // +1, +2, +3, +4, +5, +6
  nr_v4_11: ['50', '45'], // -10, -9, -8, -7, -6, -5
  nr_v4_12: ['15', '6'], // x3, -5, x3, -5...
  nr_v4_13: ['9', '4'], // Twee reeksen: 1,2,3,4 en 1,4,9 (kwadraten)
  nr_v4_14: ['35', '48'], // +3, +5, +7, +9, +11, +13 (n²-1)
  nr_v4_15: ['13', '17'], // Priemgetallen
  nr_v4_16: ['75', '70'], // x3, -5, x3, -5...
  nr_v4_17: ['49', '64'], // Kwadraten van 2,3,4,5,6,7,8
  nr_v4_18: ['110', '115'], // x2, +5, x2, +5...
  nr_v4_19: ['16', '8'], // x4, /2, x4, /2 ...
  nr_v4_20: ['60.75', '91.125'] // x1.5
};

export const EXPLANATIONS: Record<string, string> = {
  // Woordenschat Uitleg (v4)
  w_v4_1: "**Betekenis:** Echt, origineel, niet nagemaakt. Het verwijst naar iets dat betrouwbaar en waar is.\n**Voorbeeld:** Dit is een *authentiek* schilderij van Rembrandt, geen kopie.",
  w_v4_2: "**Betekenis:** Wereldwijd, over de hele wereld. Het wordt gebruikt om iets op een algemeen, niet-gedetailleerd niveau te beschrijven.\n**Voorbeeld:** *Globaal* gezien is de economie aan het groeien, maar lokaal zijn er problemen.",
  w_v4_3: "**Betekenis:** Iets dat voorrang krijgt omdat het belangrijker is dan andere zaken.\n**Voorbeeld:** De *prioriteit* van de brandweer is het redden van mensenlevens.",
  w_v4_4: "**Betekenis:** Niet tastbaar, alleen als idee bestaand. Het tegenovergestelde van concreet.\n**Voorbeeld:** Liefde is een *abstract* concept.",
  w_v4_5: "**Betekenis:** Nadenken over je eigen gedrag, gedachten of werk om ervan te leren.\n**Voorbeeld:** Na het project nam het team de tijd om te *reflecteren* op wat goed en fout ging.",
  w_v4_6: "**Betekenis:** Fijnzinnig, bijna onopgemerkt, niet overduidelijk.\n**Voorbeeld:** Er was een *subtiel* verschil in kleur tussen de twee muren.",
  w_v4_7: "**Betekenis:** Gelijkwaardig, iets wat dezelfde waarde of betekenis heeft.\n**Voorbeeld:** Een masterdiploma is *equivalent* aan een licentiaatsdiploma.",
  w_v4_8: "**Betekenis:** Vast, zonder tegenstrijdigheden, op een logische manier samenhangend.\n**Voorbeeld:** Zijn verhaal was *consistent*; hij vertelde elke keer hetzelfde.",
  w_v4_9: "**Betekenis:** Vernieuwend, gebaseerd op nieuwe ideeën of methoden.\n**Voorbeeld:** Het bedrijf presenteerde een *innovatief* product dat de markt veranderde.",
  w_v4_10: "**Betekenis:** Uitdrukkelijk, zeer duidelijk en zonder twijfel.\n**Voorbeeld:** De leraar gaf de *expliciete* instructie om geen rekenmachine te gebruiken.",
  w_v4_11: "**Betekenis:** Een uitspraak die een schijnbare tegenstelling bevat, maar toch een diepere waarheid kan hebben.\n**Voorbeeld:** De *paradox* is dat je soms moet loslaten om vast te kunnen houden.",
  w_v4_12: "**Betekenis:** Praktisch en doelgericht, gericht op wat werkt in de praktijk in plaats van op theorie.\n**Voorbeeld:** Hij koos voor een *pragmatische* oplossing voor het probleem.",
  w_v4_13: "**Betekenis:** Geschikt voor het doel, passend.\n**Voorbeeld:** De maatregelen waren *adequaat* om de crisis te bestrijden.",
  w_v4_14: "**Betekenis:** Alledaags, gewoon, niet origineel.\n**Voorbeeld:** Hij ergerde zich aan de *banale* opmerkingen tijdens de vergadering.",
  w_v4_15: "**Betekenis:** Bitter spottend, niet gelovend in het goede van de mens.\n**Voorbeeld:** Met een *cynische* lach zei hij dat eerlijkheid niet bestaat.",
  w_v4_16: "**Betekenis:** Eindgültig, beslissend, niet meer te veranderen.\n**Voorbeeld:** Na lang overleg namen ze een *definitief* besluit.",
  w_v4_17: "**Betekenis:** Verzonnen, niet op werkelijkheid gebaseerd.\n**Voorbeeld:** Harry Potter is een *fictief* personage.",
  w_v4_18: "**Betekenis:** Gelijksoortig, van dezelfde aard of samenstelling.\n**Voorbeeld:** De klas was een *homogene* groep studenten van dezelfde leeftijd.",
  w_v4_19: "**Betekenis:** Stilzwijgend, niet openlijk gezegd maar wel erin begrepen.\n**Voorbeeld:** In zijn vraag zat een *impliciet* verwijt.",
  w_v4_20: "**Betekenis:** Wat betreft de hoeveelheid, gericht op meetbare data.\n**Voorbeeld:** Een *kwantitatief* onderzoek meet hoeveel mensen een product kopen.",
  w_v4_21: "**Betekenis:** Gemiddeld, wat het meest voorkomt.\n**Voorbeeld:** Een *modaal* inkomen is het meest voorkomende inkomen in een land.",
  w_v4_22: "**Betekenis:** Een verlangen of heimwee naar een geromantiseerd verleden.\n**Voorbeeld:** Hij voelde *nostalgie* toen hij zijn oude schoolfoto's bekeek.",
  w_v4_23: "**Betekenis:** Feitelijk, onpartijdig, niet beïnvloed door persoonlijke meningen.\n**Voorbeeld:** Een journalist moet een *objectief* verslag van de gebeurtenissen geven.",
  w_v4_24: "**Betekenis:** In verhouding tot iets anders, niet absoluut.\n**Voorbeeld:** De moeilijkheidsgraad is *relatief*; voor een expert is het makkelijk.",
  w_v4_25: "**Betekenis:** Persoonlijk gekleurd, beïnvloed door eigen mening of gevoel.\n**Voorbeeld:** Schoonheid is *subjectief*; wat de een mooi vindt, vindt de ander lelijk.",
  w_v4_26: "**Betekenis:** Onbeduidend, onbelangrijk.\n**Voorbeeld:** Laten we geen tijd verspillen aan *triviale* details.",
  w_v4_27: "**Betekenis:** Eensgezind, wanneer iedereen het met elkaar eens is.\n**Voorbeeld:** Het besluit werd met *unanieme* stemmen aangenomen.",
  w_v4_28: "**Betekenis:** Niet echt bestaand, door een computer gesimuleerd.\n**Voorbeeld:** Ze ontmoetten elkaar in een *virtuele* wereld online.",
  w_v4_29: "**Betekenis:** Met argumenten aantonen dat iets niet waar is.\n**Voorbeeld:** De advocaat probeerde de getuigenis te *weerleggen*.",
  w_v4_30: "**Betekenis:** Aandachtig, met veel zorg en precisie.\n**Voorbeeld:** Ze heeft de brief *zorgvuldig* gelezen.",
  w_v4_31: "**Betekenis:** Erger worden, uit de hand lopen, in hevigheid toenemen.\n**Voorbeeld:** De ruzie dreigde te *escaleren* tot een gevecht.",
  w_v4_32: "**Betekenis:** Wezenlijk, de basis of kern betreffend.\n**Voorbeeld:** Er is een *fundamenteel* verschil tussen onze meningen.",
  w_v4_33: "**Betekenis:** Spotachtig op een milde manier, vaak door het tegenovergestelde te zeggen van wat je bedoelt.\n**Voorbeeld:** 'Mooi weer, hè?' zei hij *ironisch* terwijl het regende.",
  w_v4_34: "**Betekenis:** Winstgevend, voordelig.\n**Voorbeeld:** De verkoop van de aandelen was een *lucratieve* deal.",

  // Begrijpend Lezen Uitleg (v4)
  blq_v4_1: "**Uitleg:** De tekst noemt in de eerste alinea expliciet 'vermindert stress', 'verbetert de stemming' en 'verlichten van ... angststoornissen'. 'Verhoogde creativiteit' wordt niet genoemd.",
  blq_v4_2: "**Uitleg:** De tweede alinea stelt: 'Bomen en planten zorgen voor schaduw en verkoeling door verdamping'. Dit tempert het hitte-eilandeffect.",
  blq_v4_3: "**Uitleg:** De derde alinea zegt: 'Ruimte is schaars en duur in dichtbevolkte gebieden, en er is een constante afweging tussen bouwen en vergroenen.'",
  blq_v4_4: "**Uitleg:** In de tweede alinea wordt het proces omschreven: '...verkoeling door verdamping, een proces dat bekendstaat als evapotranspiratie.'",
  blq_v4_5: "**Uitleg:** De laatste zin van de tekst noemt 'verticale tuinen en groene daken' als 'innovatieve oplossingen'.",
  blq_v4_6: "**Uitleg:** De tekst bespreekt zowel de mentale voordelen (alinea 1) als de klimaatvoordelen (alinea 2), wat dit de beste samenvatting maakt.",
  blq_v4_7: "**Uitleg:** Dit wordt uitgelegd in de derde alinea: 'Ruimte is schaars en duur in dichtbevolkte gebieden', wat de afweging noodzakelijk maakt.",
  blq_v4_8: "**Uitleg:** Alinea 2 legt uit: 'Bovendien functioneren planten als natuurlijke luchtfilters: ze vangen fijnstof op en zetten CO2 om in zuurstof...'",
  blq_v4_9: "**Uitleg:** In de context 'een significant positief effect' betekent dit een belangrijk, betekenisvol of aanzienlijk effect, niet een klein of onbelangrijk effect.",
  blq_v4_10: "**Uitleg:** De eerste alinea vertelt de legende over 'Kaldi, een Ethiopische geitenhoeder'.",
  blq_v4_11: "**Uitleg:** De eerste alinea stelt: '...was het razend populair in steden als Mekka en Caïro, waar de eerste koffiehuizen ontstonden.'",
  blq_v4_12: "**Uitleg:** In de tweede alinea staat: 'Ze werden ook wel \'scholen van de wijzen\' genoemd, omdat ze een broedplaats waren voor intellectuele discussies...'",
  blq_v4_13: "**Uitleg:** Alinea 2 zegt: 'De populariteit en de stimulerende aard van de drank maakten heersers soms nerveus, wat ... leidde tot een verbod op koffiehuizen.' De nervositeit was vanwege de debatten.",
  blq_v4_14: "**Uitleg:** De derde alinea begint met: 'Europese reizigers brachten in de 17e eeuw verhalen en monsters van de drank mee terug...'",
  blq_v4_15: "**Uitleg:** De derde alinea stelt: 'De vraag naar koffie explodeerde, wat leidde tot de oprichting van plantages in Europese koloniën...'",
  blq_v4_16: "**Uitleg:** Kaldi en zijn geiten werden energiek en opgewekt na het eten van de bessen. 'Verkwikkend' betekent dus opwekkend of verfrissend.",
  blq_v4_17: "**Uitleg:** De laatste zin van de tekst concludeert: 'Vandaag de dag is koffie een van de meest verhandelde goederen ter wereld...'",
  blq_v4_18: "**Uitleg:** Alinea 3 stelt: 'Net als in het Midden-Oosten werden deze etablissementen centra van commerciële, sociale en intellectuele activiteit.'",
  blq_v4_19: "**Uitleg:** De eerste alinea beschrijft de route: ontdekt in Ethiopië, verspreid 'via het Arabisch schiereiland'.",
  blq_v4_20: "**Uitleg:** De eerste alinea definieert het als: 'In essentie is een blockchain een gedecentraliseerd, onveranderlijk digitaal logboek.'",
  blq_v4_21: "**Uitleg:** In alinea 1 staat: 'Informatie wordt opgeslagen in \'blokken\' die cryptografisch aan elkaar zijn geketend. Elk nieuw blok bevat een verwijzing naar het vorige, waardoor een keten ontstaat die extreem moeilijk te wijzigen is.'",
  blq_v4_22: "**Uitleg:** Alinea 2 legt uit: 'Consumenten kunnen een QR-code scannen om de herkomst van hun voedsel te controleren, wat de voedselveiligheid verhoogt.'",
  blq_v4_23: "**Uitleg:** De tekst noemt toeleveringsketens, gezondheidszorg, notariaat en verkiezingen, maar niet sociale media.",
  blq_v4_24: "**Uitleg:** Alinea 1 noemt de combinatie van decentralisatie ('gedeeld door een netwerk') en transparantie als redenen voor de fraudebestendigheid.",
  blq_v4_25: "**Uitleg:** Deze uitdrukking betekent dat iets nieuw is en nog niet volledig ontwikkeld of volwassen.",
  blq_v4_26: "**Uitleg:** 'Een transparant en onweerlegbaar spoor' betekent dat het spoor niet kan worden tegengesproken of betwist.",
  blq_v4_27: "**Uitleg:** Het internet had een enorme, revolutionaire impact op de hele samenleving. De vergelijking suggereert dat blockchain een vergelijkbaar groot potentieel heeft.",
  blq_v4_28: "**Uitleg:** Alinea 2 benadrukt: 'Dit creëert een transparant en onweerlegbaar spoor.' en 'helpt het om ... fraude ... tegen te gaan.'",
  blq_v4_29: "**Uitleg:** Alinea 1 legt uit: 'Omdat dit logboek niet op één centrale server staat, maar wordt gedeeld en geverifieerd door een netwerk van computers, is het zeer transparant en fraudebestendig.' Dit verdeelde beheer is de kern van decentralisatie.",

  // Rekenen Uitleg (v4)
  r_v4_1: "**Uitleg:** Een breuk wordt een decimaal getal door de teller te delen door de noemer.\n**Berekening:** 3 ÷ 8 = 0,375.",
  r_v4_2: "**Uitleg:** De prijs inclusief 21% BTW is 121% van de oorspronkelijke prijs. Deel de totaalprijs door 1,21.\n**Berekening:** €450 / 1,21 = €371,9008... Afgerond is dat €371,90.",
  r_v4_3: "**Uitleg:** Volg de volgorde van bewerkingen (eerst haakjes, dan vermenigvuldigen, dan optellen).\n**Stap 1:** (5 - 2) = 3.\n**Stap 2:** 6 x 3 = 18.\n**Stap 3:** 4 + 18 = 22.",
  r_v4_4: "**Uitleg:** Snelheid is afstand gedeeld door tijd.\n**Berekening:** 350 km / 4 uur = 87,5 km/u.",
  r_v4_5: "**Uitleg:** De formule voor de oppervlakte van een driehoek is (basis x hoogte) / 2.\n**Berekening:** (12 cm x 5 cm) / 2 = 60 / 2 = 30 cm².",
  r_v4_6: "**Uitleg:** Bereken eerst de prijs per pen en vermenigvuldig die met 7.\n**Stap 1:** Prijs per pen: €6 / 4 = €1,50.\n**Stap 2:** Prijs voor 7 pennen: 7 x €1,50 = €10,50.",
  r_v4_7: "**Uitleg:** Bereken de hoeveelheid melk per pannenkoek en vermenigvuldig met 15.\n**Stap 1:** Melk per pannenkoek: 250 ml / 6.\n**Stap 2:** Voor 15 pannenkoeken: (250 / 6) x 15 = 625 ml.",
  r_v4_8: "**Uitleg:** Los de vergelijking op voor x.\n**Stap 1:** Deel beide kanten door 2: (x + 3) = 14 / 2 = 7.\n**Stap 2:** Trek 3 af van beide kanten: x = 7 - 3 = 4.",
  r_v4_9: "**Uitleg:** Bereken 30% van de prijs en trek dit van de prijs af. Of bereken direct 70% van de prijs.\n**Berekening:** €75 x 0,70 = €52,50.",
  r_v4_10: "**Uitleg:** Tel alle getallen op en deel door het aantal getallen.\n**Berekening:** (15 + 25 + 40 + 20) / 4 = 100 / 4 = 25.",
  r_v4_11: "**Uitleg:** De omtrek is 4 keer de zijde. Bereken de zijde en dan de oppervlakte (zijde x zijde).\n**Stap 1:** Lengte van een zijde: 36 cm / 4 = 9 cm.\n**Stap 2:** Oppervlakte: 9 cm x 9 cm = 81 cm².",
  r_v4_12: "**Uitleg:** Deel het totale verdiende bedrag door het aantal gewerkte uren.\n**Berekening:** €225 / 18 uur = €12,50 per uur.",
  r_v4_13: "**Uitleg:** Deel het getal door 5 (om 1/5 te vinden) en vermenigvuldig met 2.\n**Stap 1:** 150 / 5 = 30.\n**Stap 2:** 30 x 2 = 60.",
  r_v4_14: "**Uitleg:** Bereken het verschil in prijs, deel dit door de oorspronkelijke prijs en vermenigvuldig met 100.\n**Stap 1:** Verschil: €65 - €50 = €15.\n**Stap 2:** (€15 / €50) x 100% = 0,3 x 100% = 30%.",
  r_v4_15: "**Uitleg:** Vermenigvuldig het getal met het percentage als decimaal getal (40% = 0,40).\n**Berekening:** 250 x 0,40 = 100.",
  r_v4_16: "**Uitleg:** Volg de volgorde van bewerkingen (eerst haakjes, dan machten, dan vermenigvuldigen).\n**Stap 1:** (5 - 8) = -3.\n**Stap 2:** (-3)² = (-3) x (-3) = 9.\n**Stap 3:** 9 x 3 = 27.",
  r_v4_17: "**Uitleg:** De verhouding is 3 delen jongens op 4 delen meisjes. Zoek de factor waarmee 3 vermenigvuldigd wordt om 12 te krijgen en pas die toe op 4.\n**Stap 1:** Factor: 12 / 3 = 4.\n**Stap 2:** Aantal meisjes: 4 x 4 = 16.",
  r_v4_18: "**Uitleg:** Zet de getallen op volgorde en vind het middelste getal. Bij een even aantal is het het gemiddelde van de twee middelste.\n**Volgorde:** 1, 2, 5, 7, 8, 9.\n**Middelste twee:** 5 en 7.\n**Mediaan:** (5 + 7) / 2 = 6.",
  r_v4_19: "**Uitleg:** Reken de tijd van 10:40 tot 11:00 (20 min), van 11:00 tot 13:00 (2 uur) en van 13:00 tot 13:15 (15 min). Tel alles op.\n**Berekening:** 20 min + 2 uur + 15 min = 2 uur en 35 minuten.",
  r_v4_20: "**Uitleg:** Maak de noemers gelijk (kleinste gemene veelvoud is 6) en trek dan de tellers af.\n**Berekening:** 3/6 - 2/6 = 1/6.",
  r_v4_21: "**Uitleg:** Zoek het kleinste getal dat een veelvoud is van zowel 9 (9, 18, 27, 36, 45...) als 15 (15, 30, 45...).\n**Antwoord:** 45.",
  r_v4_22: "**Uitleg:** Deel de rente door het kapitaal en vermenigvuldig met 100%.\n**Berekening:** (€150 / €5000) x 100% = 0,03 x 100% = 3%.",
  r_v4_23: "**Uitleg:** Vermenigvuldig de afstand op de kaart met de schaalfactor en zet om naar km.\n**Stap 1:** 8 cm x 200.000 = 1.600.000 cm.\n**Stap 2:** Omzetten naar meters (delen door 100): 16.000 m.\n**Stap 3:** Omzetten naar kilometers (delen door 1000): 16 km.",
  r_v4_24: "**Uitleg:** Bereken het volume in cm³ (lengte x breedte x hoogte) en deel door 1000 om liters te krijgen.\n**Stap 1:** 50 x 30 x 40 = 60.000 cm³.\n**Stap 2:** 60.000 cm³ / 1000 = 60 liter.",
  r_v4_25: "**Uitleg:** Als 120 gelijk is aan 60% (0,6), deel 120 dan door 0,6 om 100% te vinden.\n**Berekening:** 120 / 0,6 = 200.",
  r_v4_26: "**Uitleg:** Vind het grootste getal waardoor zowel 42 als 56 deelbaar zijn.\n**Delers van 42:** 1, 2, 3, 6, 7, 14, 21, 42.\n**Delers van 56:** 1, 2, 4, 7, 8, 14, 28, 56.\n**Grootste gemene deler:** 14.",
  r_v4_27: "**Uitleg:** Deel je score door het totaal en vermenigvuldig met 100%.\n**Berekening:** (36 / 40) x 100% = 0,9 x 100% = 90%.",
  r_v4_28: "**Uitleg:** Deel zowel de teller als de noemer door hun grootste gemene deler (18).\n**Berekening:** 54 ÷ 18 = 3. 72 ÷ 18 = 4. De breuk is 3/4.",
  r_v4_29: "**Uitleg:** De omtrek van een cirkel is diameter x π.\n**Berekening:** 20 cm x 3,14 = 62,8 cm.",
  r_v4_30: "**Uitleg:** Werk terug vanuit het resultaat. Tel 8 op bij 20 en deel dan door 4.\n**Stap 1:** 20 + 8 = 28.\n**Stap 2:** 28 / 4 = 7.",
  r_v4_31: "**Uitleg:** Het verschil tussen een negatief en een positief getal is de som van hun absolute waarden.\n**Berekening:** 12 - (-5) = 12 + 5 = 17°C.",
  r_v4_32: "**Uitleg:** De noemer van de breuk wordt telkens verdubbeld.\n**Reeks:** 1/2, 1/4, 1/8, ... De volgende noemer is 8 x 2 = 16. Het antwoord is 1/16.",

  // Numeriek Redeneren Uitleg (v4)
  nr_v4_1: "**Regel:** Trek steeds 3 af van het vorige getal.\n**Stappen:** 88 - 3 = **85**; 85 - 3 = **82**.",
  nr_v4_2: "**Regel:** Vermenigvuldig het vorige getal steeds met 2.\n**Stappen:** 80 x 2 = **160**; 160 x 2 = **320**.",
  nr_v4_3: "**Regel:** Er zijn twee afwisselende reeksen. Reeks 1 (1e, 3e, 5e getal...) telt op: 1, 2, 3, ... Reeks 2 (2e, 4e, 6e getal...) telt af: 9, 8, ...\n**Stappen:** Het volgende getal in reeks 2 is **7**. Het volgende getal in reeks 1 is **4**.",
  nr_v4_4: "**Regel:** Tel een steeds groter oneven getal op: +3, +5, +7, +9, ...\n**Stappen:** 26 + 11 = **37**; 37 + 13 = **50**.",
  nr_v4_5: "**Regel:** Tel een steeds groter getal op, beginnend bij +1: +1, +2, +3, +4, ...\n**Stappen:** 13 + 5 = **18**; 18 + 6 = **24**.",
  nr_v4_6: "**Regel:** Deel het vorige getal steeds door 3.\n**Stappen:** 3 / 3 = **1**; 1 / 3 = **1/3**.",
  nr_v4_7: "**Regel:** De bewerkingen zijn afwisselend x2 en -1.\n**Stappen:** 13 x 2 = **26**; 26 - 1 = **25**.",
  nr_v4_8: "**Regel:** Vermenigvuldig met opeenvolgende getallen: x2, x3, x4, x5, ...\n**Stappen:** 120 x 6 = **720**; 720 x 7 = **5040**.",
  nr_v4_9: "**Regel:** De bewerkingen zijn afwisselend -2 en +3.\n**Stappen:** 10 - 2 = **8**; 8 + 3 = **11**.",
  nr_v4_10: "**Regel:** Tel een steeds groter getal op, beginnend bij +1: +1, +2, +3, +4, ... (zelfde als nr_v4_5)\n**Stappen:** 11 + 5 = **16**; 16 + 6 = **22**.",
  nr_v4_11: "**Regel:** Trek een steeds kleiner getal af: -10, -9, -8, -7, ...\n**Stappen:** 56 - 6 = **50**; 50 - 5 = **45**.",
  nr_v4_12: "**Regel:** De bewerkingen zijn afwisselend x3 en -5.\n**Stappen:** 5 x 3 = **15**; 15 - 5 = **10**. Antwoord is 15, maar de vraag vraagt om de volgende twee getallen in de reeks. Na 5 komt 5x3=15 en dan 15-5=10. Ah, na 5 komt x3, dus 15. Daarna zou -5 komen, dus 10. De vraag is wat na 5 komt. 5*3=15. Het volgende getal in de reeks is 6 (zie de 3,4,5 reeks). Dus 15, en dan 6.",
  nr_v4_13: "**Regel:** Twee afwisselende reeksen. Reeks 1: 1, 2, 3, ... Reeks 2: 1, 4, ... Dit zijn kwadraten (1², 2²).\n**Stappen:** Het volgende getal in reeks 2 is 3², dus **9**. Het volgende getal in reeks 1 is **4**.",
  nr_v4_14: "**Regel:** Dit is de reeks n² - 1. (1²-1=0, 2²-1=3, 3²-1=8, 4²-1=15, 5²-1=24, ...)\n**Stappen:** Het volgende getal is 6² - 1 = **35**. Daarna 7² - 1 = **48**.",
  nr_v4_15: "**Regel:** Dit is de reeks van priemgetallen (getallen alleen deelbaar door 1 en zichzelf).\n**Stappen:** Het volgende priemgetal na 11 is **13**. Daarna komt **17**.",
  nr_v4_16: "**Regel:** De bewerkingen zijn afwisselend x3 en -5.\n**Stappen:** 25 x 3 = **75**; 75 - 5 = **70**.",
  nr_v4_17: "**Regel:** Dit is de reeks van kwadraten, beginnend bij 2².\n**Stappen:** Na 6² (36) komt 7² = **49**. Daarna komt 8² = **64**.",
  nr_v4_18: "**Regel:** De bewerkingen zijn afwisselend x2 en +5.\n**Stappen:** 55 x 2 = **110**; 110 + 5 = **115**.",
  nr_v4_19: "**Regel:** De bewerkingen zijn afwisselend x4 en /2.\n**Stappen:** 4 x 4 = **16**; 16 / 2 = **8**.",
  nr_v4_20: "**Regel:** Vermenigvuldig het vorige getal steeds met 1,5.\n**Stappen:** 40.5 x 1.5 = **60.75**; 60.75 x 1.5 = **91.125**."
};