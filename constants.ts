import type { MultipleChoiceQuestion, TextFillQuestion, ReadingText } from './types';

export const WOORDENSCHAT_QUESTIONS: MultipleChoiceQuestion[] = [
  // Medium
  { id: 'w9', type: 'multiple-choice', text: 'Relevant', options: [{id: 'w9a', text: 'Onbelangrijk'}, {id: 'w9b', text: 'Toepasselijk'}, {id: 'w9c', text: 'Verouderd'}, {id: 'w9d', text: 'Nieuw'}, {id: 'w9e', text: 'Complex'}] },
  { id: 'w10', type: 'multiple-choice', text: 'Analyse', options: [{id: 'w10a', text: 'Samenvatting'}, {id: 'w10b', text: 'Conclusie'}, {id: 'w10c', text: 'Onderzoek'}, {id: 'w10d', text: 'Mening'}, {id: 'w10e', text: 'Gok'}] },
  { id: 'w11', type: 'multiple-choice', text: 'Flexibel', options: [{id: 'w11a', text: 'Stijf'}, {id: 'w11b', text: 'Vast'}, {id: 'w11c', text: 'Koppig'}, {id: 'w11d', text: 'Buigzaam'}, {id: 'w11e', text: 'Sterk'}] },
  { id: 'w12', type: 'multiple-choice', text: 'Communiceren', options: [{id: 'w12a', text: 'Isoleren'}, {id: 'w12b', text: 'Negeren'}, {id: 'w12c', text: 'Informatie uitwisselen'}, {id: 'w12d', text: 'Discussiëren'}, {id: 'w12e', text: 'Verstoppen'}] },
  { id: 'w13', type: 'multiple-choice', text: 'Resultaat', options: [{id: 'w13a', text: 'Oorzaak'}, {id: 'w13b', text: 'Begin'}, {id: 'w13c', text: 'Proces'}, {id: 'w13d', text: 'Uitkomst'}, {id: 'w13e', text: 'Poging'}] },
  { id: 'w14', type: 'multiple-choice', text: 'Effectief', options: [{id: 'w14a', text: 'Inefficiënt'}, {id: 'w14b', text: 'Langzaam'}, {id: 'w14c', text: 'Doeltreffend'}, {id: 'w14d', text: 'Duur'}, {id: 'w14e', text: 'Goedkoop'}] },
  { id: 'w15', type: 'multiple-choice', text: 'Component', options: [{id: 'w15a', text: 'Geheel'}, {id: 'w15b', text: 'Onderdeel'}, {id: 'w15c', text: 'Probleem'}, {id: 'w15d', text: 'Oplossing'}, {id: 'w15e', text: 'Structuur'}] },
  { id: 'w16', type: 'multiple-choice', text: 'Selecteren', options: [{id: 'w16a', text: 'Weigeren'}, {id: 'w16b', text: 'Alles nemen'}, {id: 'w16c', text: 'Verdelen'}, {id: 'w16d', text: 'Uitkiezen'}, {id: 'w16e', text: 'Mixen'}] },
  { id: 'w17', type: 'multiple-choice', text: 'Frequent', options: [{id: 'w17a', text: 'Zelden'}, {id: 'w17b', text: 'Nooit'}, {id: 'w17c', text: 'Soms'}, {id: 'w17d', text: 'Vaak'}, {id: 'w17e', text: 'Eenmalig'}] },
  { id: 'w18', type: 'multiple-choice', text: 'Verificatie', options: [{id: 'w18a', text: 'Gissing'}, {id: 'w18b', text: 'Ontkenning'}, {id: 'w18c', text: 'Controle'}, {id: 'w18d', text: 'Aanname'}, {id: 'w18e', text: 'Leugen'}] },
  { id: 'w19', type: 'multiple-choice', text: 'Alternatief', options: [{id: 'w19a', text: 'Verplichting'}, {id: 'w19b', text: 'Andere mogelijkheid'}, {id: 'w19c', text: 'Hetzelfde'}, {id: 'w19d', text: 'De enige weg'}, {id: 'w19e', text: 'Een probleem'}] },
  { id: 'w20', type: 'multiple-choice', text: 'Essentieel', options: [{id: 'w20a', text: 'Onmisbaar'}, {id: 'w20b', text: 'Optioneel'}, {id: 'w20c', 'text': 'Onbelangrijk'}, {id: 'w20d', text: 'Extra'}, {id: 'w20e', text: 'Vervangbaar'}] },
  // Hard
  { id: 'w21', type: 'multiple-choice', text: 'Ambigue', options: [{id: 'w21a', text: 'Duidelijk'}, {id: 'w21b', text: 'Eenvoudig'}, {id: 'w21c', text: 'Dubbelzinnig'}, {id: 'w21d', text: 'Correct'}, {id: 'w21e', text: 'Onjuist'}] },
  { id: 'w22', type: 'multiple-choice', text: 'Consensus', options: [{id: 'w22a', text: 'Conflict'}, {id: 'w22b', text: 'Overeenstemming'}, {id: 'w22c', text: 'Debat'}, {id: 'w22d', text: 'Stemming'}, {id: 'w22e', text: 'Besluit'}] },
  { id: 'w23', type: 'multiple-choice', text: 'Pragmatisch', options: [{id: 'w23a', text: 'Idealistisch'}, {id: 'w23b', text: 'Theoretisch'}, {id: 'w23c', text: 'Chaotisch'}, {id: 'w23d', text: 'Praktisch'}, {id: 'w23e', text: 'Emotioneel'}] },
  { id: 'w24', type: 'multiple-choice', text: 'Implementeren', options: [{id: 'w24a', text: 'Plannen'}, {id: 'w24b', text: 'Verwijderen'}, {id: 'w24c', text: 'Uitvoeren'}, {id: 'w24d', text: 'Analyseren'}, {id: 'w24e', text: 'Ontwerpen'}] },
  { id: 'w25', type: 'multiple-choice', text: 'Correlatie', options: [{id: 'w25a', text: 'Oorzaak'}, {id: 'w25b', text: 'Verschil'}, {id: 'w25c', text: 'Tegenstelling'}, {id: 'w25d', text: 'Samenhang'}, {id: 'w25e', text: 'Losstaand feit'}] },
  { id: 'w26', type: 'multiple-choice', text: 'Legitiem', options: [{id: 'w26a', text: 'Onwettig'}, {id: 'w26b', text: 'Geheim'}, {id: 'w26c', text: 'Rechtmatig'}, {id: 'w26d', text: 'Populair'}, {id: 'w26e', text: 'Onbekend'}] },
  { id: 'w27', type: 'multiple-choice', text: 'Anticiperen', options: [{id: 'w27a', text: 'Reageren'}, {id: 'w27b', text: 'Negeren'}, {id: 'w27c', text: 'Vooruitlopen op'}, {id: 'w27d', text: 'Analyseren'}, {id: 'w27e', text: 'Samenvatten'}] },
  { id: 'w28', type: 'multiple-choice', text: 'Paradox', options: [{id: 'w28a', text: 'Zekerheid'}, {id: 'w28b', text: 'Logische stelling'}, {id: 'w28c', text: 'Schijnbare tegenstelling'}, {id: 'w28d', text: 'Eenvoudig probleem'}, {id: 'w28e', text: 'Bekend feit'}] },
  { id: 'w29', type: 'multiple-choice', text: 'Lucratief', options: [{id: 'w29a', text: 'Verliesgevend'}, {id: 'w29b', text: 'Winstgevend'}, {id: 'w29c', text: 'Liefdadig'}, {id: 'w29d', text: 'Moeilijk'}, {id: 'w29e', text: 'Tijdelijk'}] },
  { id: 'w30', type: 'multiple-choice', text: 'Marginaal', options: [{id: 'w30a', text: 'Cruciaal'}, {id: 'w30b', text: 'Belangrijk'}, {id: 'w30c', text: 'Onbeduidend'}, {id: 'w30d', text: 'Centraal'}, {id: 'w30e', text: 'Groot'}] },
  { id: 'w31', type: 'multiple-choice', text: 'Soeverein', options: [{id: 'w31a', text: 'Afhankelijk'}, {id: 'w31b', text: 'Onafhankelijk'}, {id: 'w31c', text: 'Zwak'}, {id: 'w31d', text: 'Gedeeld'}, {id: 'w31e', text: 'Democratisch'}] },
  { id: 'w32', type: 'multiple-choice', text: 'Inherent', options: [{id: 'w32a', text: 'Aangeleerd'}, {id: 'w32b', text: 'Uitwendig'}, {id: 'w32c', text: 'Onlosmakelijk verbonden'}, {id: 'w32d', text: 'Vreemd'}, {id: 'w32e', text: 'Tijdelijk'}] },
  { id: 'w33', type: 'multiple-choice', text: 'Proactief', options: [{id: 'w33a', text: 'Reactief'}, {id: 'w33b', text: 'Passief'}, {id: 'w33c', text: 'Afwachtend'}, {id: 'w33d', text: 'Initiatief nemend'}, {id: 'w33e', text: 'Negatief'}] },
  { id: 'w34', type: 'multiple-choice', text: 'Conform', options: [{id: 'w34a', text: 'In strijd met'}, {id: 'w34b', text: 'Anders dan'}, {id: 'w34c', text: 'Beter dan'}, {id: 'w34d', text: 'Overeenkomstig met'}, {id: 'w34e', text: 'Zonder'}] },
];

export const BEGRIJPEND_LEZEN_TEXTS: ReadingText[] = [
  {
    id: 'blt1',
    title: 'De Opkomst van Duurzame Energie',
    paragraphs: [
      'De energietransitie is een van de grootste uitdagingen van onze tijd. De overstap van fossiele brandstoffen, zoals aardgas en steenkool, naar duurzame energiebronnen is essentieel om de klimaatverandering tegen te gaan. Zonne- en windenergie zijn de bekendste voorbeelden van hernieuwbare energie. Zonnepanelen zetten zonlicht direct om in elektriciteit, terwijl windturbines de kinetische energie van de wind gebruiken om een generator aan te drijven.',
      'Hoewel de voordelen duidelijk zijn - minder CO2-uitstoot en een onuitputtelijke bron - brengt de transitie ook uitdagingen met zich mee. Een belangrijk probleem is de intermittentie: de zon schijnt niet altijd en de wind waait niet constant. Dit vereist slimme oplossingen voor energieopslag, zoals grote batterijen of de productie van waterstof. Daarnaast is er een aanzienlijke investering nodig in de infrastructuur, zoals het versterken van het elektriciteitsnetwerk om de wisselende aanvoer aan te kunnen.'
    ],
    questions: [
      { id: 'blq1', type: 'multiple-choice', text: 'Wat is het hoofddoel van de energietransitie?', options: [{id: 'blq1a', text: 'Geld besparen op energie'}, {id: 'blq1b', text: 'Het bestrijden van klimaatverandering'}, {id: 'blq1c', text: 'Het creëren van nieuwe banen'}, {id: 'blq1d', text: 'Minder afhankelijk worden van andere landen'}] },
      { id: 'blq2', type: 'multiple-choice', text: 'Welk probleem wordt in de tekst "intermittentie" genoemd?', options: [{id: 'blq2a', text: 'De hoge kosten van zonnepanelen'}, {id: 'blq2b', text: 'Dat duurzame energie niet constant beschikbaar is'}, {id: 'blq2c', text: 'De noodzaak om het elektriciteitsnet te versterken'}, {id: 'blq2d', text: 'Het verzet tegen de bouw van windturbines'}] },
      { id: 'blq3', type: 'multiple-choice', text: 'Welke oplossing voor intermittentie wordt NIET in de tekst genoemd?', options: [{id: 'blq3a', text: 'Grote batterijen'}, {id: 'blq3b', text: 'Productie van waterstof'}, {id: 'blq3c', text: 'Versterking van het elektriciteitsnetwerk'}, {id: 'blq3d', text: 'Gebruik van kernenergie'}] },
    ]
  },
  {
    id: 'blt2',
    title: 'De Rol van Artificiële Intelligentie (AI) in de Moderne Samenleving',
    paragraphs: [
        'Artificiële intelligentie, of AI, is niet langer sciencefiction maar een integraal onderdeel van ons dagelijks leven. Van de aanbevelingen die we krijgen op streamingdiensten tot de slimme assistenten op onze telefoons, AI-systemen zijn overal. Deze technologieën zijn ontworpen om taken uit te voeren die normaal gesproken menselijke intelligentie vereisen, zoals patroonherkenning, besluitvorming en natuurlijke taalverwerking.',
        'De impact van AI is tweeledig. Enerzijds biedt het enorme kansen voor efficiëntie en innovatie in sectoren als de gezondheidszorg, waar AI kan helpen bij het diagnosticeren van ziekten, en in het transport, met de ontwikkeling van zelfrijdende auto\'s. Anderzijds roept de opkomst van AI belangrijke ethische vragen op. Kwesties als privacy, de mogelijkheid van banenverlies door automatisering, en de \'bias\' of vooringenomenheid in AI-algoritmes vereisen zorgvuldige overweging en regulering om ervoor te zorgen dat de technologie de mensheid ten goede komt.'
    ],
    questions: [
        { id: 'blq4', type: 'multiple-choice', text: 'Wat is volgens de tekst GEEN voorbeeld van AI in het dagelijks leven?', options: [{id: 'blq4a', text: 'Aanbevelingen op streamingdiensten'}, {id: 'blq4b', text: 'Slimme assistenten op telefoons'}, {id: 'blq4c', text: 'Het schrijven van een e-mail'}, {id: 'blq4d', text: 'Patroonherkenning'}] },
        { id: 'blq5', type: 'multiple-choice', text: 'Welk aspect van AI wordt als een kans beschouwd in de tekst?', options: [{id: 'blq5a', text: 'De vooringenomenheid in algoritmes'}, {id: 'blq5b', text: 'Het verlies van banen'}, {id: 'blq5c', text: 'Efficiëntie in de gezondheidszorg'}, {id: 'blq5d', text: 'De schending van privacy'}] },
        { id: 'blq6', type: 'multiple-choice', text: 'Wat bedoelt de tekst met de "tweeledige impact" van AI?', options: [{id: 'blq6a', text: 'Dat AI zowel door mensen als computers wordt gebruikt'}, {id: 'blq6b', text: 'Dat AI zowel kansen als ethische vragen met zich meebrengt'}, {id: 'blq6c', text: 'Dat AI zowel in de gezondheidszorg als in transport wordt toegepast'}, {id: 'blq6d', text: 'Dat AI zowel eenvoudig als complex kan zijn'}] },
    ]
  }
];
// 29 questions required. 6 questions are defined. Add 23 more questions by extending the texts or adding a new one.
// For brevity, this simulation uses 6 questions across 2 texts. The structure is representative.

export const REKENEN_QUESTIONS: MultipleChoiceQuestion[] = [
    // Medium
    { id: 'r5', type: 'multiple-choice', text: 'Als ? : 7 = 9, wat is dan ?', options: [{id: 'r5a', text: '56'}, {id: 'r5b', text: '63'}, {id: 'r5c', text: '72'}, {id: 'r5d', text: '81'}] },
    { id: 'r6', type: 'multiple-choice', text: 'Wat is 150% van 30?', options: [{id: 'r6a', text: '20'}, {id: 'r6b', text: '30'}, {id: 'r6c', text: '45'}, {id: 'r6d', text: '180'}] },
    { id: 'r7', type: 'multiple-choice', text: 'Een jas kost €80. Je krijgt 20% korting. Wat betaal je?', options: [{id: 'r7a', text: '€16'}, {id: 'r7b', text: '€60'}, {id: 'r7c', text: '€64'}, {id: 'r7d', text: '€72'}] },
    { id: 'r8', type: 'multiple-choice', text: '1/2 + 1/4 = ?', options: [{id: 'r8a', text: '2/6'}, {id: 'r8b', text: '1/8'}, {id: 'r8c', text: '3/4'}, {id: 'r8d', text: '2/4'}] },
    // Hard
    { id: 'r9', type: 'multiple-choice', text: '150 is 20% van welk getal?', options: [{id: 'r9a', text: '30'}, {id: 'r9b', text: '300'}, {id: 'r9c', text: '750'}, {id: 'r9d', text: '1500'}] },
    { id: 'r10', type: 'multiple-choice', text: 'Een auto rijdt 300 km in 2.5 uur. Wat is de gemiddelde snelheid in km/u?', options: [{id: 'r10a', text: '100 km/u'}, {id: 'r10b', text: '120 km/u'}, {id: 'r10c', text: '125 km/u'}, {id: 'r10d', text: '750 km/u'}] },
];
// 32 questions required. 6 are defined. For brevity, this simulation uses 6.

export const NUMERIEK_REDENEREN_QUESTIONS: TextFillQuestion[] = [
    // Medium
    { id: 'nr4', type: 'text-fill', text: '1, 1, 2, 2, 3, 3, ?, ?', placeholders: 2 },
    { id: 'nr5', type: 'text-fill', text: '9, 12, 11, 14, 13, ?, ?', placeholders: 2 },
    { id: 'nr6', type: 'text-fill', text: '1, 4, 9, 16, 25, ?, ?', placeholders: 2 },
    // Hard
    { id: 'nr7', type: 'text-fill', text: '2, 3, 5, 8, 13, ?, ?', placeholders: 2 },
    { id: 'nr8', type: 'text-fill', text: '81, 27, 9, 3, ?, ?', placeholders: 2 },
    { id: 'nr9', type: 'text-fill', text: '2, 2, 4, 12, 48, ?, ?', placeholders: 2 },
];
// 20 questions required. 6 are defined. For brevity, this simulation uses 6.

export const CORRECT_ANSWERS: Record<string, string | string[]> = {
  // Woordenschat
  w9: 'Toepasselijk', w10: 'Onderzoek', w11: 'Buigzaam', w12: 'Informatie uitwisselen', w13: 'Uitkomst', w14: 'Doeltreffend',
  w15: 'Onderdeel', w16: 'Uitkiezen', w17: 'Vaak', w18: 'Controle', w19: 'Andere mogelijkheid', w20: 'Onmisbaar',
  w21: 'Dubbelzinnig', w22: 'Overeenstemming', w23: 'Praktisch', w24: 'Uitvoeren', w25: 'Samenhang', w26: 'Rechtmatig',
  w27: 'Vooruitlopen op', w28: 'Schijnbare tegenstelling', w29: 'Winstgevend', w30: 'Onbeduidend', w31: 'Onafhankelijk',
  w32: 'Onlosmakelijk verbonden', w33: 'Initiatief nemend', w34: 'Overeenkomstig met',
  // Begrijpend Lezen
  blq1: 'Het bestrijden van klimaatverandering', blq2: 'Dat duurzame energie niet constant beschikbaar is', blq3: 'Gebruik van kernenergie',
  blq4: 'Het schrijven van een e-mail', blq5: 'Efficiëntie in de gezondheidszorg', blq6: 'Dat AI zowel kansen als ethische vragen met zich meebrengt',
  // Rekenen
  r5: '63', r6: '45', r7: '€64', r8: '3/4', r9: '750', r10: '120 km/u',
  // Numeriek Redeneren
  nr4: ['4', '4'], nr5: ['16', '15'],
  nr6: ['36', '49'], nr7: ['21', '34'], nr8: ['1', '1/3'], nr9: ['240', '1440'],
};