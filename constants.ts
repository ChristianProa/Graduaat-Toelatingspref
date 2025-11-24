
import type { MultipleChoiceQuestion, TextFillQuestion, ReadingText } from './types';

// Using a new version identifier 'v11' for all questions
export const WOORDENSCHAT_QUESTIONS: MultipleChoiceQuestion[] = [
  // 34 Vragen (v11)
  { id: 'w_v11_1', type: 'multiple-choice', text: 'Accuraat', options: [{id: 'wv111a', text: 'Snel'}, {id: 'wv111b', text: 'Nauwkeurig'}, {id: 'wv111c', text: 'Actueel'}, {id: 'wv111d', text: 'Actief'}] },
  { id: 'w_v11_2', type: 'multiple-choice', text: 'Barrière', options: [{id: 'wv112a', text: 'Doorgang'}, {id: 'wv112b', text: 'Belemmering/Hindernis'}, {id: 'wv112c', text: 'Hulp'}, {id: 'wv112d', text: 'Grens'}] },
  { id: 'w_v11_3', type: 'multiple-choice', text: 'Consequent', options: [{id: 'wv113a', text: 'Volgens een vast plan'}, {id: 'wv113b', text: 'Afwisselend'}, {id: 'wv113c', text: 'Streng'}, {id: 'wv113d', text: 'Vriendelijk'}] },
  { id: 'w_v11_4', type: 'multiple-choice', text: 'Diversiteit', options: [{id: 'wv114a', text: 'Eenheid'}, {id: 'wv114b', text: 'Verscheidenheid'}, {id: 'wv114c', text: 'Plezier'}, {id: 'wv114d', text: 'Divisie'}] },
  { id: 'w_v11_5', type: 'multiple-choice', text: 'Exclusief', options: [{id: 'wv115a', text: 'Inclusief'}, {id: 'wv115b', text: 'Uitsluitend/Speciaal'}, {id: 'wv115c', text: 'Goedkoop'}, {id: 'wv115d', text: 'Gewoon'}] },
  { id: 'w_v11_6', type: 'multiple-choice', text: 'Fascinerend', options: [{id: 'wv116a', text: 'Saai'}, {id: 'wv116b', text: 'Boeiend'}, {id: 'wv116c', text: 'Vermoeiend'}, {id: 'wv116d', text: 'Snel'}] },
  { id: 'w_v11_7', type: 'multiple-choice', text: 'Garanderen', options: [{id: 'wv117a', text: 'Hopen'}, {id: 'wv117b', text: 'Verzekeren'}, {id: 'wv117c', text: 'Gokken'}, {id: 'wv117d', text: 'Uitstellen'}] },
  { id: 'w_v11_8', type: 'multiple-choice', text: 'Hypothese', options: [{id: 'wv118a', text: 'Feit'}, {id: 'wv118b', text: 'Veronderstelling'}, {id: 'wv118c', text: 'Bewijs'}, {id: 'wv118d', text: 'Oplossing'}] },
  { id: 'w_v11_9', type: 'multiple-choice', text: 'Identiek', options: [{id: 'wv119a', text: 'Verschillend'}, {id: 'wv119b', text: 'Gelijk/Hetzelfde'}, {id: 'wv119c', text: 'Uniek'}, {id: 'wv119d', text: 'Oud'}] },
  { id: 'w_v11_10', type: 'multiple-choice', text: 'Joviaal', options: [{id: 'wv1110a', text: 'Streng'}, {id: 'wv1110b', text: 'Hartelijk'}, {id: 'wv1110c', text: 'Verlegen'}, {id: 'wv1110d', text: 'Boos'}] },
  { id: 'w_v11_11', type: 'multiple-choice', text: 'Karakteristiek', options: [{id: 'wv1111a', text: 'Kenmerkend'}, {id: 'wv1111b', text: 'Ongewoon'}, {id: 'wv1111c', text: 'Saai'}, {id: 'wv1111d', text: 'Nieuw'}] },
  { id: 'w_v11_12', type: 'multiple-choice', text: 'Legaal', options: [{id: 'wv1112a', text: 'Illegaal'}, {id: 'wv1112b', text: 'Wettelijk'}, {id: 'wv1112c', text: 'Leeg'}, {id: 'wv1112d', text: 'Laat'}] },
  { id: 'w_v11_13', type: 'multiple-choice', text: 'Mentaal', options: [{id: 'wv1113a', text: 'Lichamelijk'}, {id: 'wv1113b', text: 'Geestelijk'}, {id: 'wv1113c', text: 'Metal'}, {id: 'wv1113d', text: 'Sterk'}] },
  { id: 'w_v11_14', type: 'multiple-choice', text: 'Nuance', options: [{id: 'wv1114a', text: 'Groot verschil'}, {id: 'wv1114b', text: 'Klein onderscheid/Detail'}, {id: 'wv1114c', text: 'Kleur'}, {id: 'wv1114d', text: 'Nieuws'}] },
  { id: 'w_v11_15', type: 'multiple-choice', text: 'Objectief', options: [{id: 'wv1115a', text: 'Subjectief'}, {id: 'wv1115b', text: 'Feitelijk/Neutraal'}, {id: 'wv1115c', text: 'Doelgericht'}, {id: 'wv1115d', text: 'Emotioneel'}] },
  { id: 'w_v11_16', type: 'multiple-choice', text: 'Periodiek', options: [{id: 'wv1116a', text: 'Eenmalig'}, {id: 'wv1116b', text: 'Regelmatig terugkerend'}, {id: 'wv1116c', text: 'Ooit'}, {id: 'wv1116d', text: 'Nooit'}] },
  { id: 'w_v11_17', type: 'multiple-choice', text: 'Kwalificeren', options: [{id: 'wv1117a', text: 'Afkeuren'}, {id: 'wv1117b', text: 'Geschikt achten/Benomen'}, {id: 'wv1117c', text: 'Kopen'}, {id: 'wv1117d', text: 'Verliezen'}] },
  { id: 'w_v11_18', type: 'multiple-choice', text: 'Radicaal', options: [{id: 'wv1118a', text: 'Oppervlakkig'}, {id: 'wv1118b', text: 'Grondig/Totaal'}, {id: 'wv1118c', text: 'Radioactief'}, {id: 'wv1118d', text: 'Rustig'}] },
  { id: 'w_v11_19', type: 'multiple-choice', text: 'Specifiek', options: [{id: 'wv1119a', text: 'Algemeen'}, {id: 'wv1119b', text: 'In het bijzonder'}, {id: 'wv1119c', text: 'Speciaal'}, {id: 'wv1119d', text: 'Spijtig'}] },
  { id: 'w_v11_20', type: 'multiple-choice', text: 'Tolerant', options: [{id: 'wv1120a', text: 'Streng'}, {id: 'wv1120b', text: 'Verdraagzaam'}, {id: 'wv1120c', text: 'Lang'}, {id: 'wv1120d', text: 'Zwogend'}] },
  { id: 'w_v11_21', type: 'multiple-choice', text: 'Unaniem', options: [{id: 'wv1121a', text: 'Verdeeld'}, {id: 'wv1121b', text: 'Eensgezind'}, {id: 'wv1121c', text: 'Alleen'}, {id: 'wv1121d', text: 'Naamloos'}] },
  { id: 'w_v11_22', type: 'multiple-choice', text: 'Variëren', options: [{id: 'wv1122a', text: 'Hetzelfde blijven'}, {id: 'wv1122b', text: 'Wisselen/Afwisselen'}, {id: 'wv1122c', text: 'Varen'}, {id: 'wv1122d', text: 'Kiezen'}] },
  { id: 'w_v11_23', type: 'multiple-choice', text: 'Weerleggen', options: [{id: 'wv1123a', text: 'Bevestigen'}, {id: 'wv1123b', text: 'Tegenspreken met bewijs'}, {id: 'wv1123c', text: 'Neerleggen'}, {id: 'wv1123d', text: 'Geloven'}] },
  { id: 'w_v11_24', type: 'multiple-choice', text: 'Cynisch', options: [{id: 'wv1124a', text: 'Enthousiast'}, {id: 'wv1124b', text: 'Spottend/Wantrouwig'}, {id: 'wv1124c', text: 'Muzikaal'}, {id: 'wv1124d', text: 'Rond'}] },
  { id: 'w_v11_25', type: 'multiple-choice', text: 'Drastisch', options: [{id: 'wv1125a', text: 'Voorzichtig'}, {id: 'wv1125b', text: 'Ingrijpend/Krachtig'}, {id: 'wv1125c', text: 'Traag'}, {id: 'wv1125d', text: 'Dramatisch'}] },
  { id: 'w_v11_26', type: 'multiple-choice', text: 'Ethisch', options: [{id: 'wv1126a', text: 'Esthetisch'}, {id: 'wv1126b', text: 'Moreel/Goed en kwaad'}, {id: 'wv1126c', text: 'Etnisch'}, {id: 'wv1126d', text: 'Technisch'}] },
  { id: 'w_v11_27', type: 'multiple-choice', text: 'Fragiel', options: [{id: 'wv1127a', text: 'Sterk'}, {id: 'wv1127b', text: 'Kwetsbaar/Breekbaar'}, {id: 'wv1127c', text: 'Frans'}, {id: 'wv1127d', text: 'Vlug'}] },
  { id: 'w_v11_28', type: 'multiple-choice', text: 'Globaal', options: [{id: 'wv1128a', text: 'Gedetailleerd'}, {id: 'wv1128b', text: 'Algemeen/Wereldwijd'}, {id: 'wv1128c', text: 'Plaatselijk'}, {id: 'wv1128d', text: 'Rond'}] },
  { id: 'w_v11_29', type: 'multiple-choice', text: 'Hiërarchie', options: [{id: 'wv1129a', text: 'Gelijkheid'}, {id: 'wv1129b', text: 'Rangorde'}, {id: 'wv1129c', text: 'Chaos'}, {id: 'wv1129d', text: 'Geschiedenis'}] },
  { id: 'w_v11_30', type: 'multiple-choice', text: 'Incidenteel', options: [{id: 'wv1130a', text: 'Altijd'}, {id: 'wv1130b', text: 'Af en toe'}, {id: 'wv1130c', text: 'Expres'}, {id: 'wv1130d', text: 'Belangrijk'}] },
  { id: 'w_v11_31', type: 'multiple-choice', text: 'Latent', options: [{id: 'wv1131a', text: 'Zichtbaar'}, {id: 'wv1131b', text: 'Verborgen/Aanwezig maar niet zichtbaar'}, {id: 'wv1131c', text: 'Laat'}, {id: 'wv1131d', text: 'Lui'}] },
  { id: 'w_v11_32', type: 'multiple-choice', text: 'Manifesteren', options: [{id: 'wv1132a', text: 'Verstoppen'}, {id: 'wv1132b', text: 'Zich openbaren/Zich laten zien'}, {id: 'wv1132c', text: 'Schrijven'}, {id: 'wv1132d', text: 'Feesten'}] },
  { id: 'w_v11_33', type: 'multiple-choice', text: 'Nonchalant', options: [{id: 'wv1133a', text: 'Zorgvuldig'}, {id: 'wv1133b', text: 'Onverschillig/Losjes'}, {id: 'wv1133c', text: 'Netjes'}, {id: 'wv1133d', text: 'Druk'}] },
  { id: 'w_v11_34', type: 'multiple-choice', text: 'Optimaal', options: [{id: 'wv1134a', text: 'Slechtst'}, {id: 'wv1134b', text: 'Best mogelijk/Gunstigst'}, {id: 'wv1134c', text: 'Optioneel'}, {id: 'wv1134d', text: 'Groot'}] }
];

export const BEGRIJPEND_LEZEN_TEXTS: ReadingText[] = [
  {
    id: 'blt_v11_1',
    title: 'De Opkomst van de Deeleconomie',
    paragraphs: [
      'De deeleconomie heeft de manier waarop we consumeren en diensten verlenen ingrijpend veranderd. Platforms zoals Airbnb en Uber stellen particulieren in staat om hun bezittingen, zoals huizen en auto\'s, te delen met anderen. Voorstanders prijzen de efficiëntie en duurzaamheid van dit model: middelen die anders stil zouden staan, worden nu optimaal benut. Bovendien biedt het mensen een laagdrempelige manier om wat extra geld te verdienen en bevordert het, in theorie, het sociale contact tussen vreemden.',
      'Echter, er is ook kritiek. Tegenstanders wijzen op de oneerlijke concurrentie met reguliere bedrijven, zoals hotels en taxicentrales, die aan strengere regels moeten voldoen. Ook de arbeidsomstandigheden van de dienstverleners in de deeleconomie zijn vaak onderwerp van debat; zij werken vaak als schijnzelfstandigen zonder sociale zekerheid of pensioenopbouw. Daarnaast kan de toename van toeristen via platforms als Airbnb leiden tot overlast in woonwijken en stijgende huizenprijzen, waardoor lokale bewoners uit de stad worden verdreven.',
      'De overheid worstelt met de regulering van deze nieuwe economie. Aan de ene kant wil men innovatie niet in de weg staan, maar aan de andere kant moeten publieke belangen zoals eerlijke concurrentie en leefbaarheid beschermd worden. De toekomst van de deeleconomie zal waarschijnlijk liggen in een evenwicht waarbij platforms meer verantwoordelijkheid nemen en overheden duidelijke kaders scheppen waarbinnen gedeeld kan worden zonder dat de maatschappij er schade van ondervindt.'
    ],
    questions: [
      { id: 'blq_v11_1', type: 'multiple-choice', text: 'Wat is een argument van voorstanders van de deeleconomie?', options: [{id: 'blqv111a', text: 'Het is duurder dan reguliere diensten.'}, {id: 'blqv111b', text: 'Middelen worden efficiënter benut.'}, {id: 'blqv111c', text: 'Er zijn strengere regels.'}, {id: 'blqv111d', text: 'Het vermindert sociaal contact.'}] },
      { id: 'blq_v11_2', type: 'multiple-choice', text: 'Wat is een kritiekpunt betreffende arbeidsomstandigheden?', options: [{id: 'blqv112a', text: 'Werknemers verdienen te veel.'}, {id: 'blqv112b', text: 'Er is te veel vakantie.'}, {id: 'blqv112c', text: 'Gebrek aan sociale zekerheid (schijnzelfstandigheid).'}, {id: 'blqv112d', text: 'Het werk is te makkelijk.'}] },
      { id: 'blq_v11_3', type: 'multiple-choice', text: 'Wat is een negatief effect van platforms als Airbnb op steden?', options: [{id: 'blqv113a', text: 'Meer parkeerplaatsen.'}, {id: 'blqv113b', text: 'Daling van huizenprijzen.'}, {id: 'blqv113c', text: 'Overlast en stijgende huizenprijzen.'}, {id: 'blqv113d', text: 'Minder toeristen.'}] },
      { id: 'blq_v11_4', type: 'multiple-choice', text: 'Waarom worstelt de overheid met de deeleconomie?', options: [{id: 'blqv114a', text: 'Ze begrijpen de technologie niet.'}, {id: 'blqv114b', text: 'Balans zoeken tussen innovatie en publieke belangen.'}, {id: 'blqv114c', text: 'Ze willen het verbieden.'}, {id: 'blqv114d', text: 'Ze gebruiken het zelf niet.'}] },
      { id: 'blq_v11_5', type: 'multiple-choice', text: 'Hoe ziet de toekomst van de deeleconomie er waarschijnlijk uit?', options: [{id: 'blqv115a', text: 'Het verdwijnt volledig.'}, {id: 'blqv115b', text: 'Geen regels meer.'}, {id: 'blqv115c', text: 'Meer verantwoordelijkheid en duidelijke kaders.'}, {id: 'blqv115d', text: 'De overheid neemt alles over.'}] },
    ]
  },
  {
    id: 'blt_v11_2',
    title: 'De Kracht van Gewoontes',
    paragraphs: [
      'Ons dagelijks leven bestaat voor een groot deel uit gewoontes. Volgens psychologen wordt meer dan 40 procent van onze handelingen niet bewust gekozen, maar automatisch uitgevoerd. Dit mechanisme is evolutionair gezien nuttig: het bespaart energie. Als we over elke kleine beslissing, zoals tandenpoetsen of veters strikken, moesten nadenken, zouden onze hersenen overbelast raken. Een gewoonte ontstaat door een lus van drie elementen: een trigger (aanleiding), de routine (de handeling zelf) en een beloning.',
      'Het veranderen van slechte gewoontes is vaak lastig omdat deze neurale paden diep in onze hersenen zijn ingesleten. Wilskracht alleen is vaak niet genoeg. De sleutel tot verandering ligt in het begrijpen van de "gewoontelus". Door de trigger te herkennen en de beloning te behouden, maar de routine te vervangen, kun je een gewoonte ombuigen. Bijvoorbeeld: als stress (trigger) leidt tot roken (routine) voor ontspanning (beloning), kun je proberen om bij stress een wandeling te maken (nieuwe routine) om diezelfde ontspanning te bereiken.',
      'Het aanleren van nieuwe, goede gewoontes kost tijd. Vaak wordt gezegd dat het 21 dagen duurt om een gewoonte te vormen, maar recent onderzoek toont aan dat dit gemiddeld eerder 66 dagen is, afhankelijk van de complexiteit van de handeling. Consistentie is hierbij cruciaal. Het gaat er niet om dat je perfect bent, maar dat je de draad weer oppakt als het een keer misgaat. Kleine stapjes leiden uiteindelijk tot grote veranderingen in levensstijl.'
    ],
    questions: [
      { id: 'blq_v11_6', type: 'multiple-choice', text: 'Waarom zijn gewoontes nuttig voor onze hersenen?', options: [{id: 'blqv116a', text: 'Ze maken ons creatiever.'}, {id: 'blqv116b', text: 'Ze besparen energie en voorkomen overbelasting.'}, {id: 'blqv116c', text: 'Ze maken ons sneller moe.'}, {id: 'blqv116d', text: 'Ze zorgen voor meer stress.'}] },
      { id: 'blq_v11_7', type: 'multiple-choice', text: 'Uit welke drie elementen bestaat een "gewoontelus"?', options: [{id: 'blqv117a', text: 'Begin, midden, eind.'}, {id: 'blqv117b', text: 'Oorzaak, gevolg, straf.'}, {id: 'blqv117c', text: 'Trigger, routine, beloning.'}, {id: 'blqv117d', text: 'Idee, actie, rust.'}] },
      { id: 'blq_v11_8', type: 'multiple-choice', text: 'Hoe kun je een slechte gewoonte het beste veranderen?', options: [{id: 'blqv118a', text: 'Door alleen wilskracht te gebruiken.'}, {id: 'blqv118b', text: 'Door de routine te vervangen maar trigger en beloning te behouden.'}, {id: 'blqv118c', text: 'Door jezelf te straffen.'}, {id: 'blqv118d', text: 'Door de trigger te negeren.'}] },
      { id: 'blq_v11_9', type: 'multiple-choice', text: 'Hoe lang duurt het gemiddeld om een nieuwe gewoonte te vormen?', options: [{id: 'blqv119a', text: 'Precies 21 dagen.'}, {id: 'blqv119b', text: 'Eén week.'}, {id: 'blqv119c', text: 'Gemiddeld 66 dagen.'}, {id: 'blqv119d', text: 'Een half jaar.'}] },
      { id: 'blq_v11_10', type: 'multiple-choice', text: 'Wat is cruciaal bij het aanleren van nieuwe gewoontes?', options: [{id: 'blqv1110a', text: 'Perfectie.'}, {id: 'blqv1110b', text: 'Snelheid.'}, {id: 'blqv1110c', text: 'Consistentie (volhouden).'}, {id: 'blqv1110d', text: 'Grote stappen nemen.'}] },
    ]
  },
   {
    id: 'blt_v11_3',
    title: 'De Industriële Revolutie',
    paragraphs: [
      'De Industriële Revolutie, die in de 18e eeuw in Groot-Brittannië begon, markeerde een van de grootste keerpunten in de menselijke geschiedenis. Voor die tijd leefde het grootste deel van de bevolking op het platteland en werkte in de landbouw. Producten werden met de hand gemaakt in kleine werkplaatsen. De uitvinding van de stoommachine veranderde alles. Machines namen het zware werk over, fabrieken rezen als paddenstoelen uit de grond en de productie van goederen zoals textiel schoot omhoog.',
      'Deze veranderingen brachten welvaart, maar hadden ook een hoge prijs. Mensen trokken massaal naar de steden op zoek naar werk, wat leidde tot overbevolking, slechte hygiëne en armoede in de arbeiderswijken. Kinderarbeid was aan de orde van de dag en de werkdagen waren lang en gevaarlijk. Pas in de loop van de 19e eeuw ontstonden er vakbonden en werden er wetten aangenomen om de omstandigheden van arbeiders te verbeteren.',
      'Vandaag de dag leven we in wat sommigen de "Vierde Industriële Revolutie" noemen, gekenmerkt door digitalisering en kunstmatige intelligentie. Hoewel de technologie anders is, blijven de kernvragen hetzelfde: hoe zorgen we ervoor dat technologische vooruitgang ten goede komt aan iedereen en niet leidt tot grotere ongelijkheid? De lessen uit het verleden zijn nog steeds relevant voor de uitdagingen van nu.'
    ],
    questions: [
        { id: 'blq_v11_11', type: 'multiple-choice', text: 'Wat veranderde er door de stoommachine?', options: [{id: 'blqv1111a', text: 'Mensen gingen meer met de hand werken.'}, {id: 'blqv1111b', text: 'De landbouw werd belangrijker.'}, {id: 'blqv1111c', text: 'Machines namen werk over en fabrieken ontstonden.'}, {id: 'blqv1111d', text: 'Het werd stiller in de steden.'}] },
        { id: 'blq_v11_12', type: 'multiple-choice', text: 'Wat was een negatief gevolg van de urbanisatie (mensen trokken naar steden)?', options: [{id: 'blqv1112a', text: 'Er waren te veel huizen.'}, {id: 'blqv1112b', text: 'Slechte hygiëne en overbevolking.'}, {id: 'blqv1112c', text: 'Iedereen werd rijk.'}, {id: 'blqv1112d', text: 'De lucht werd schoner.'}] },
        { id: 'blq_v11_13', type: 'multiple-choice', text: 'Wanneer verbeterden de omstandigheden voor arbeiders?', options: [{id: 'blqv1113a', text: 'Meteen aan het begin.'}, {id: 'blqv1113b', text: 'Pas in de loop van de 19e eeuw met wetten en vakbonden.'}, {id: 'blqv1113c', text: 'In de 18e eeuw.'}, {id: 'blqv1113d', text: 'Nooit.'}] },
        { id: 'blq_v11_14', type: 'multiple-choice', text: 'Wat kenmerkt de "Vierde Industriële Revolutie"?', options: [{id: 'blqv1114a', text: 'Stoomkracht.'}, {id: 'blqv1114b', text: 'Elektriciteit.'}, {id: 'blqv1114c', text: 'Digitalisering en kunstmatige intelligentie.'}, {id: 'blqv1114d', text: 'Kernenergie.'}] },
        { id: 'blq_v11_15', type: 'multiple-choice', text: 'Welke kernvraag blijft volgens de tekst relevant?', options: [{id: 'blqv1115a', text: 'Hoe bouwen we snellere machines?'}, {id: 'blqv1115b', text: 'Hoe voorkomen we ongelijkheid door vooruitgang?'}, {id: 'blqv1115c', text: 'Wanneer stopt de innovatie?'}, {id: 'blqv1115d', text: 'Wie heeft de stoommachine uitgevonden?'}] },
    ]
  }
];

export const REKENEN_QUESTIONS: MultipleChoiceQuestion[] = [
    // 32 Vragen (v11)
    { id: 'r_v11_1', type: 'multiple-choice', text: 'Wat is 12% van 500?', options: [{id: 'rv111a', text: '50'}, {id: 'rv111b', text: '60'}, {id: 'rv111c', text: '72'}, {id: 'rv111d', text: '120'}] },
    { id: 'r_v11_2', type: 'multiple-choice', text: 'Bereken: 2/3 + 1/6', options: [{id: 'rv112a', text: '3/9'}, {id: 'rv112b', text: '3/6'}, {id: 'rv112c', text: '5/6'}, {id: 'rv112d', text: '4/6'}] },
    { id: 'r_v11_3', type: 'multiple-choice', text: 'Snelheid: 150 km in 2 uur. Hoeveel km/u?', options: [{id: 'rv113a', text: '50'}, {id: 'rv113b', text: '75'}, {id: 'rv113c', text: '100'}, {id: 'rv113d', text: '300'}] },
    { id: 'r_v11_4', type: 'multiple-choice', text: 'Los op: 5x - 10 = 15', options: [{id: 'rv114a', text: 'x = 1'}, {id: 'rv114b', text: 'x = 3'}, {id: 'rv114c', text: 'x = 5'}, {id: 'rv114d', text: 'x = 25'}] },
    { id: 'r_v11_5', type: 'multiple-choice', text: 'Omtrek vierkant met zijde 6cm?', options: [{id: 'rv115a', text: '12 cm'}, {id: 'rv115b', text: '24 cm'}, {id: 'rv115c', text: '36 cm'}, {id: 'rv115d', text: '18 cm'}] },
    { id: 'r_v11_6', type: 'multiple-choice', text: 'Wat is 0,75 als breuk?', options: [{id: 'rv116a', text: '1/2'}, {id: 'rv116b', text: '2/3'}, {id: 'rv116c', text: '3/4'}, {id: 'rv116d', text: '4/5'}] },
    { id: 'r_v11_7', type: 'multiple-choice', text: 'Gemiddelde van 10, 20 en 60?', options: [{id: 'rv117a', text: '20'}, {id: 'rv117b', text: '30'}, {id: 'rv117c', text: '40'}, {id: 'rv117d', text: '45'}] },
    { id: 'r_v11_8', type: 'multiple-choice', text: 'Bereken: 15 x 12', options: [{id: 'rv118a', text: '150'}, {id: 'rv118b', text: '160'}, {id: 'rv118c', text: '180'}, {id: 'rv118d', text: '200'}] },
    { id: 'r_v11_9', type: 'multiple-choice', text: 'Van €40 naar €50. Hoeveel procent stijging?', options: [{id: 'rv119a', text: '10%'}, {id: 'rv119b', text: '20%'}, {id: 'rv119c', text: '25%'}, {id: 'rv119d', text: '50%'}] },
    { id: 'r_v11_10', type: 'multiple-choice', text: 'Inhoud kubus met zijde 3m?', options: [{id: 'rv1110a', text: '9 m³'}, {id: 'rv1110b', text: '18 m³'}, {id: 'rv1110c', text: '27 m³'}, {id: 'rv1110d', text: '30 m³'}] },
    { id: 'r_v11_11', type: 'multiple-choice', text: '1,5 uur is hoeveel minuten?', options: [{id: 'rv1111a', text: '60'}, {id: 'rv1111b', text: '90'}, {id: 'rv1111c', text: '100'}, {id: 'rv1111d', text: '150'}] },
    { id: 'r_v11_12', type: 'multiple-choice', text: 'Bereken: 50 - 5 x 4', options: [{id: 'rv1112a', text: '180'}, {id: 'rv1112b', text: '30'}, {id: 'rv1112c', text: '20'}, {id: 'rv1112d', text: '45'}] },
    { id: 'r_v11_13', type: 'multiple-choice', text: 'Prijs €100, 20% korting. Nieuwe prijs?', options: [{id: 'rv1113a', text: '€20'}, {id: 'rv1113b', text: '€80'}, {id: 'rv1113c', text: '€90'}, {id: 'rv1113d', text: '€120'}] },
    { id: 'r_v11_14', type: 'multiple-choice', text: '3/8 van 80?', options: [{id: 'rv1114a', text: '10'}, {id: 'rv1114b', text: '20'}, {id: 'rv1114c', text: '30'}, {id: 'rv1114d', text: '24'}] },
    { id: 'r_v11_15', type: 'multiple-choice', text: 'Wat is √81?', options: [{id: 'rv1115a', text: '8'}, {id: 'rv1115b', text: '9'}, {id: 'rv1115c', text: '81'}, {id: 'rv1115d', text: '7'}] },
    { id: 'r_v11_16', type: 'multiple-choice', text: 'Som van hoeken in een driehoek?', options: [{id: 'rv1116a', text: '90°'}, {id: 'rv1116b', text: '180°'}, {id: 'rv1116c', text: '270°'}, {id: 'rv1116d', text: '360°'}] },
    { id: 'r_v11_17', type: 'multiple-choice', text: '2,5 liter is hoeveel ml?', options: [{id: 'rv1117a', text: '250 ml'}, {id: 'rv1117b', text: '2500 ml'}, {id: 'rv1117c', text: '25000 ml'}, {id: 'rv1117d', text: '25 ml'}] },
    { id: 'r_v11_18', type: 'multiple-choice', text: 'Volgende in reeks: 2, 5, 11, 23, ...', options: [{id: 'rv1118a', text: '35'}, {id: 'rv1118b', text: '46'}, {id: 'rv1118c', text: '47'}, {id: 'rv1118d', text: '50'}] },
    { id: 'r_v11_19', type: 'multiple-choice', text: '7 kwadraat (7²)?', options: [{id: 'rv1119a', text: '14'}, {id: 'rv1119b', text: '49'}, {id: 'rv1119c', text: '56'}, {id: 'rv1119d', text: '21'}] },
    { id: 'r_v11_20', type: 'multiple-choice', text: 'Wat is 1/5 als percentage?', options: [{id: 'rv1120a', text: '10%'}, {id: 'rv1120b', text: '20%'}, {id: 'rv1120c', text: '25%'}, {id: 'rv1120d', text: '50%'}] },
    { id: 'r_v11_21', type: 'multiple-choice', text: 'Oppervlakte rechthoek 8m bij 5m?', options: [{id: 'rv1121a', text: '13 m²'}, {id: 'rv1121b', text: '26 m²'}, {id: 'rv1121c', text: '40 m²'}, {id: 'rv1121d', text: '80 m²'}] },
    { id: 'r_v11_22', type: 'multiple-choice', text: '-5 + 12 = ?', options: [{id: 'rv1122a', text: '7'}, {id: 'rv1122b', text: '-7'}, {id: 'rv1122c', text: '17'}, {id: 'rv1122d', text: '-17'}] },
    { id: 'r_v11_23', type: 'multiple-choice', text: '3x = 21', options: [{id: 'rv1123a', text: 'x = 3'}, {id: 'rv1123b', text: 'x = 6'}, {id: 'rv1123c', text: 'x = 7'}, {id: 'rv1123d', text: 'x = 9'}] },
    { id: 'r_v11_24', type: 'multiple-choice', text: 'Hoeveel zijden heeft een vijfhoek?', options: [{id: 'rv1124a', text: '4'}, {id: 'rv1124b', text: '5'}, {id: 'rv1124c', text: '6'}, {id: 'rv1124d', text: '8'}] },
    { id: 'r_v11_25', type: 'multiple-choice', text: 'Bereken 1/2 keer 1/3', options: [{id: 'rv1125a', text: '1/5'}, {id: 'rv1125b', text: '1/6'}, {id: 'rv1125c', text: '2/5'}, {id: 'rv1125d', text: '2/6'}] },
    { id: 'r_v11_26', type: 'multiple-choice', text: '10% van €250?', options: [{id: 'rv1126a', text: '€2.50'}, {id: 'rv1126b', text: '€25'}, {id: 'rv1126c', text: '€50'}, {id: 'rv1126d', text: '€10'}] },
    { id: 'r_v11_27', type: 'multiple-choice', text: 'Wat is 60 : 0.5?', options: [{id: 'rv1127a', text: '30'}, {id: 'rv1127b', text: '120'}, {id: 'rv1127c', text: '600'}, {id: 'rv1127d', text: '12'}] },
    { id: 'r_v11_28', type: 'multiple-choice', text: 'KGV van 3 en 5?', options: [{id: 'rv1128a', text: '8'}, {id: 'rv1128b', text: '15'}, {id: 'rv1128c', text: '30'}, {id: 'rv1128d', text: '45'}] },
    { id: 'r_v11_29', type: 'multiple-choice', text: 'Afstand 300km, snelheid 100km/u. Tijd?', options: [{id: 'rv1129a', text: '2 uur'}, {id: 'rv1129b', text: '3 uur'}, {id: 'rv1129c', text: '4 uur'}, {id: 'rv1129d', text: '30 min'}] },
    { id: 'r_v11_30', type: 'multiple-choice', text: 'Prijs €100 excl 21% BTW. Wat is prijs incl BTW?', options: [{id: 'rv1130a', text: '€121'}, {id: 'rv1130b', text: '€79'}, {id: 'rv1130c', text: '€110'}, {id: 'rv1130d', text: '€120'}] },
    { id: 'r_v11_31', type: 'multiple-choice', text: '8 + 4 : 2 = ?', options: [{id: 'rv1131a', text: '6'}, {id: 'rv1131b', text: '10'}, {id: 'rv1131c', text: '8'}, {id: 'rv1131d', text: '12'}] },
    { id: 'r_v11_32', type: 'multiple-choice', text: 'Wortel van 100 plus wortel van 36?', options: [{id: 'rv1132a', text: '14'}, {id: 'rv1132b', text: '16'}, {id: 'rv1132c', text: '136'}, {id: 'rv1132d', text: '8'}] }
];

export const NUMERIEK_REDENEREN_QUESTIONS: TextFillQuestion[] = [
    // 20 Vragen (v11)
    { id: 'nr_v11_1', type: 'text-fill', text: '3, 6, 12, 24, ?, ?', placeholders: 2 },
    { id: 'nr_v11_2', type: 'text-fill', text: '100, 95, 90, 85, ?, ?', placeholders: 2 },
    { id: 'nr_v11_3', type: 'text-fill', text: '1, 4, 9, 16, 25, ?, ?', placeholders: 2 },
    { id: 'nr_v11_4', type: 'text-fill', text: '2, 4, 3, 6, 5, 10, 9, ?, ?', placeholders: 2 },
    { id: 'nr_v11_5', type: 'text-fill', text: '10, 20, 15, 30, 25, 50, ?, ?', placeholders: 2 },
    { id: 'nr_v11_6', type: 'text-fill', text: '1, 1, 2, 3, 5, 8, ?, ?', placeholders: 2 },
    { id: 'nr_v11_7', type: 'text-fill', text: '80, 40, 20, 10, ?, ?', placeholders: 2 },
    { id: 'nr_v11_8', type: 'text-fill', text: '5, 11, 17, 23, ?, ?', placeholders: 2 },
    { id: 'nr_v11_9', type: 'text-fill', text: '2, 6, 18, 54, ?, ?', placeholders: 2 },
    { id: 'nr_v11_10', type: 'text-fill', text: '10, 13, 11, 14, 12, ?, ?', placeholders: 2 },
    { id: 'nr_v11_11', type: 'text-fill', text: '0, 1, 8, 27, 64, ?, ?', placeholders: 2 },
    { id: 'nr_v11_12', type: 'text-fill', text: '12, 24, 22, 44, 42, ?, ?', placeholders: 2 },
    { id: 'nr_v11_13', type: 'text-fill', text: '500, 100, 20, ?, ?', placeholders: 2 },
    { id: 'nr_v11_14', type: 'text-fill', text: '1, 3, 7, 15, 31, ?, ?', placeholders: 2 },
    { id: 'nr_v11_15', type: 'text-fill', text: '11, 13, 17, 23, 31, ?, ?', placeholders: 2 },
    { id: 'nr_v11_16', type: 'text-fill', text: '7, 14, 28, 56, ?, ?', placeholders: 2 },
    { id: 'nr_v11_17', type: 'text-fill', text: '100, 81, 64, 49, ?, ?', placeholders: 2 },
    { id: 'nr_v11_18', type: 'text-fill', text: '4, 8, 12, 16, 20, ?, ?', placeholders: 2 },
    { id: 'nr_v11_19', type: 'text-fill', text: '3, 4, 7, 11, 18, ?, ?', placeholders: 2 },
    { id: 'nr_v11_20', type: 'text-fill', text: '240, 120, 60, 30, ?, ?', placeholders: 2 }
];

export const CORRECT_ANSWERS: Record<string, string | string[]> = {
  // Woordenschat (v11)
  w_v11_1: 'Nauwkeurig', w_v11_2: 'Belemmering/Hindernis', w_v11_3: 'Volgens een vast plan', w_v11_4: 'Verscheidenheid', w_v11_5: 'Uitsluitend/Speciaal',
  w_v11_6: 'Boeiend', w_v11_7: 'Verzekeren', w_v11_8: 'Veronderstelling', w_v11_9: 'Gelijk/Hetzelfde', w_v11_10: 'Hartelijk',
  w_v11_11: 'Kenmerkend', w_v11_12: 'Wettelijk', w_v11_13: 'Geestelijk', w_v11_14: 'Klein onderscheid/Detail', w_v11_15: 'Feitelijk/Neutraal',
  w_v11_16: 'Regelmatig terugkerend', w_v11_17: 'Geschikt achten/Benomen', w_v11_18: 'Grondig/Totaal', w_v11_19: 'In het bijzonder', w_v11_20: 'Verdraagzaam',
  w_v11_21: 'Eensgezind', w_v11_22: 'Wisselen/Afwisselen', w_v11_23: 'Tegenspreken met bewijs', w_v11_24: 'Spottend/Wantrouwig', w_v11_25: 'Ingrijpend/Krachtig',
  w_v11_26: 'Moreel/Goed en kwaad', w_v11_27: 'Kwetsbaar/Breekbaar', w_v11_28: 'Algemeen/Wereldwijd', w_v11_29: 'Rangorde', w_v11_30: 'Af en toe',
  w_v11_31: 'Verborgen/Aanwezig maar niet zichtbaar', w_v11_32: 'Zich openbaren/Zich laten zien', w_v11_33: 'Onverschillig/Losjes', w_v11_34: 'Best mogelijk/Gunstigst',

  // Begrijpend Lezen (v11)
  blq_v11_1: 'Middelen worden efficiënter benut.',
  blq_v11_2: 'Gebrek aan sociale zekerheid (schijnzelfstandigheid).',
  blq_v11_3: 'Overlast en stijgende huizenprijzen.',
  blq_v11_4: 'Balans zoeken tussen innovatie en publieke belangen.',
  blq_v11_5: 'Meer verantwoordelijkheid en duidelijke kaders.',
  blq_v11_6: 'Ze besparen energie en voorkomen overbelasting.',
  blq_v11_7: 'Trigger, routine, beloning.',
  blq_v11_8: 'Door de routine te vervangen maar trigger en beloning te behouden.',
  blq_v11_9: 'Gemiddeld 66 dagen.',
  blq_v11_10: 'Consistentie (volhouden).',
  blq_v11_11: 'Machines namen werk over en fabrieken ontstonden.',
  blq_v11_12: 'Slechte hygiëne en overbevolking.',
  blq_v11_13: 'Pas in de loop van de 19e eeuw met wetten en vakbonden.',
  blq_v11_14: 'Digitalisering en kunstmatige intelligentie.',
  blq_v11_15: 'Hoe voorkomen we ongelijkheid door vooruitgang?',

  // Rekenen (v11)
  r_v11_1: '60', r_v11_2: '5/6', r_v11_3: '75', r_v11_4: 'x = 5', r_v11_5: '24 cm',
  r_v11_6: '3/4', r_v11_7: '30', r_v11_8: '180', r_v11_9: '25%', r_v11_10: '27 m³',
  r_v11_11: '90', r_v11_12: '30', r_v11_13: '€80', r_v11_14: '30', r_v11_15: '9',
  r_v11_16: '180°', r_v11_17: '2500 ml', r_v11_18: '47', r_v11_19: '49', r_v11_20: '20%',
  r_v11_21: '40 m²', r_v11_22: '7', r_v11_23: 'x = 7', r_v11_24: '5', r_v11_25: '1/6',
  r_v11_26: '€25', r_v11_27: '120', r_v11_28: '15', r_v11_29: '3 uur', r_v11_30: '€121',
  r_v11_31: '10', r_v11_32: '16',

  // Numeriek Redeneren (v11)
  nr_v11_1: ['48', '96'],     // x2
  nr_v11_2: ['80', '75'],     // -5
  nr_v11_3: ['36', '49'],     // Kwadraten (1,2,3,4,5,6,7)
  nr_v11_4: ['18', '17'],     // x2, -1, x2, -1...
  nr_v11_5: ['45', '90'],     // x2, -5, x2, -5...
  nr_v11_6: ['13', '21'],     // Fibonacci
  nr_v11_7: ['5', '2.5'],     // /2
  nr_v11_8: ['29', '35'],     // +6
  nr_v11_9: ['162', '486'],   // x3
  nr_v11_10: ['15', '13'],    // +3, -2, +3, -2...
  nr_v11_11: ['125', '216'],  // Derde machten (0³, 1³, 2³, 3³, 4³, 5³, 6³)
  nr_v11_12: ['84', '82'],    // x2, -2, x2, -2...
  nr_v11_13: ['4', '0.8'],    // /5
  nr_v11_14: ['63', '127'],   // x2 + 1
  nr_v11_15: ['41', '53'],    // +2, +4, +6, +8, +10, +12
  nr_v11_16: ['112', '224'],  // x2
  nr_v11_17: ['36', '25'],    // Kwadraten aflopend (10,9,8,7,6,5)
  nr_v11_18: ['24', '28'],    // +4
  nr_v11_19: ['29', '47'],    // Lucas reeks (som vorige 2: 3+4=7, 4+7=11, 7+11=18, 11+18=29)
  nr_v11_20: ['15', '7.5']    // /2
};

export const EXPLANATIONS: Record<string, string> = {
  // Woordenschat Uitleg (v11)
  w_v11_1: "**Betekenis:** Zeer nauwkeurig en juist.\n**Context:** Een *accuraat* rapport bevat geen fouten.",
  w_v11_2: "**Betekenis:** Iets wat de doorgang of voortgang belemmert.\n**Context:** De taal was een grote *barrière*.",
  w_v11_3: "**Betekenis:** Volgens een vast patroon, logisch voortvloeiend uit het voorgaande.\n**Context:** Hij is heel *consequent* in zijn opvoeding.",
  w_v11_4: "**Betekenis:** Verscheidenheid, variatie.\n**Context:** Er is een grote *diversiteit* aan planten.",
  w_v11_5: "**Betekenis:** Waarbij andere dingen uitgesloten zijn, of heel speciaal/duur.\n**Context:** Een *exclusief* interview.",
  w_v11_6: "**Betekenis:** Heel erg boeiend of interessant.\n**Context:** Dat boek is *fascinerend*.",
  w_v11_7: "**Betekenis:** Met zekerheid toezeggen, verzekeren.\n**Context:** Ik kan niet *garanderen* dat het lukt.",
  w_v11_8: "**Betekenis:** Een stelling die nog niet bewezen is.\n**Context:** Dat is een interessante *hypothese*.",
  w_v11_9: "**Betekenis:** Precies hetzelfde.\n**Context:** De tweeling is *identiek*.",
  w_v11_10: "**Betekenis:** Vriendelijk en hartelijk.\n**Context:** Hij is een *joviale* man.",
  w_v11_11: "**Betekenis:** Waaraan je iets of iemand meteen herkent.\n**Context:** Die loop is *karakteristiek* voor hem.",
  w_v11_12: "**Betekenis:** Volgens de wet, niet strafbaar.\n**Context:** Is dit wel *legaal*?",
  w_v11_13: "**Betekenis:** Wat met de geest te maken heeft.\n**Context:** *Mentale* gezondheid is belangrijk.",
  w_v11_14: "**Betekenis:** Een klein verschil, een fijn detail.\n**Context:** Er zit veel *nuance* in zijn mening.",
  w_v11_15: "**Betekenis:** Gebaseerd op feiten, niet op meningen.\n**Context:** Probeer het *objectief* te bekijken.",
  w_v11_16: "**Betekenis:** Wat regelmatig terugkomt.\n**Context:** We hebben een *periodiek* overleg.",
  w_v11_17: "**Betekenis:** Geschikt verklaren of benoemen.\n**Context:** Zich *kwalificeren* voor de finale.",
  w_v11_18: "**Betekenis:** Grondig, helemaal, ingrijpend.\n**Context:** We hebben een *radicale* verandering nodig.",
  w_v11_19: "**Betekenis:** In het bijzonder, kenmerkend voor iets.\n**Context:** Heb je een *specifieke* voorkeur?",
  w_v11_20: "**Betekenis:** Verdraagzaam tegenover andersdenkenden.\n**Context:** We moeten *tolerant* zijn.",
  w_v11_21: "**Betekenis:** Iedereen is het erover eens.\n**Context:** Het besluit was *unaniem*.",
  w_v11_22: "**Betekenis:** Veranderen, wisselen.\n**Context:** De prijzen *variëren* per seizoen.",
  w_v11_23: "**Betekenis:** Aantonen dat iets niet waar is.\n**Context:** Hij kon de beschuldiging *weerleggen*.",
  w_v11_24: "**Betekenis:** Niet gelovend in de goedheid van mensen, spottend.\n**Context:** Een *cynische* opmerking.",
  w_v11_25: "**Betekenis:** Krachtig en ingrijpend.\n**Context:** Er zijn *drastische* maatregelen nodig.",
  w_v11_26: "**Betekenis:** Wat te maken heeft met goed en kwaad.\n**Context:** Is dat wel *ethisch* verantwoord?",
  w_v11_27: "**Betekenis:** Breekbaar, teer.\n**Context:** Die vaas is erg *fragiel*.",
  w_v11_28: "**Betekenis:** Over het geheel genomen, wereldwijd.\n**Context:** *Globaal* gezien gaat het goed.",
  w_v11_29: "**Betekenis:** Volgorde van belangrijkheid (rangorde).\n**Context:** Er is een duidelijke *hiërarchie* in het bedrijf.",
  w_v11_30: "**Betekenis:** Wat niet vaak gebeurt, af en toe.\n**Context:** Dat komt slechts *incidenteel* voor.",
  w_v11_31: "**Betekenis:** Er wel zijn, maar (nog) niet zichtbaar.\n**Context:** Een *latent* talent.",
  w_v11_32: "**Betekenis:** Zichbaar worden, zich openbaren.\n**Context:** De ziekte *manifesteerde* zich pas later.",
  w_v11_33: "**Betekenis:** Zonder zorgen, een beetje slordig of onverschillig.\n**Context:** Hij deed er erg *nonchalant* over.",
  w_v11_34: "**Betekenis:** Zo goed of gunstig mogelijk.\n**Context:** We streven naar een *optimaal* resultaat.",

  // Begrijpend Lezen Uitleg (v11)
  blq_v11_1: "**Uitleg:** Alinea 1: '...middelen die anders stil zouden staan, worden nu optimaal benut.'",
  blq_v11_2: "**Uitleg:** Alinea 2: '...zij werken vaak als schijnzelfstandigen zonder sociale zekerheid of pensioenopbouw.'",
  blq_v11_3: "**Uitleg:** Alinea 2: '...leiden tot overlast in woonwijken en stijgende huizenprijzen...'",
  blq_v11_4: "**Uitleg:** Alinea 3: 'Aan de ene kant wil men innovatie niet in de weg staan, maar aan de andere kant moeten publieke belangen... beschermd worden.'",
  blq_v11_5: "**Uitleg:** Alinea 3: '...waarbij platforms meer verantwoordelijkheid nemen en overheden duidelijke kaders scheppen...'",
  blq_v11_6: "**Uitleg:** Alinea 1: '...het bespaart energie... zouden onze hersenen overbelast raken.'",
  blq_v11_7: "**Uitleg:** Alinea 1: '...een trigger (aanleiding), de routine (de handeling zelf) en een beloning.'",
  blq_v11_8: "**Uitleg:** Alinea 2: 'Door de trigger te herkennen en de beloning te behouden, maar de routine te vervangen...'",
  blq_v11_9: "**Uitleg:** Alinea 3: '...maar recent onderzoek toont aan dat dit gemiddeld eerder 66 dagen is...'",
  blq_v11_10: "**Uitleg:** Alinea 3: 'Consistentie is hierbij cruciaal.'",
  blq_v11_11: "**Uitleg:** Alinea 1: 'Machines namen het zware werk over, fabrieken rezen als paddenstoelen uit de grond...'",
  blq_v11_12: "**Uitleg:** Alinea 2: '...wat leidde tot overbevolking, slechte hygiëne en armoede...'",
  blq_v11_13: "**Uitleg:** Alinea 2: 'Pas in de loop van de 19e eeuw ontstonden er vakbonden en werden er wetten aangenomen...'",
  blq_v11_14: "**Uitleg:** Alinea 3: '...gekenmerkt door digitalisering en kunstmatige intelligentie.'",
  blq_v11_15: "**Uitleg:** Alinea 3: '...hoe zorgen we ervoor dat technologische vooruitgang... niet leidt tot grotere ongelijkheid?'",

  // Rekenen Uitleg (v11)
  r_v11_1: "**Berekening:** 10% = 50, 1% = 5, dus 2% = 10. 50 + 10 = 60.",
  r_v11_2: "**Berekening:** 2/3 = 4/6. Dus 4/6 + 1/6 = 5/6.",
  r_v11_3: "**Berekening:** 150 km / 2 uur = 75 km/u.",
  r_v11_4: "**Berekening:** 5x = 25 (want 15+10), dus x = 5.",
  r_v11_5: "**Berekening:** 4 zijden van 6 cm: 4 x 6 = 24.",
  r_v11_6: "**Berekening:** 0.75 = 75/100 = 3/4.",
  r_v11_7: "**Berekening:** (10+20+60)/3 = 90/3 = 30.",
  r_v11_8: "**Berekening:** 10x15=150, 2x15=30. Totaal 180.",
  r_v11_9: "**Berekening:** Stijging is €10. 10 van 40 is 1/4, oftewel 25%.",
  r_v11_10: "**Berekening:** 3 x 3 x 3 = 27.",
  r_v11_11: "**Berekening:** 1 uur = 60 min, half uur = 30 min. Totaal 90.",
  r_v11_12: "**Berekening:** Eerst vermenigvuldigen! 5x4=20. Dan 50-20=30.",
  r_v11_13: "**Berekening:** 20% van 100 is 20. 100 - 20 = 80.",
  r_v11_14: "**Berekening:** 1/8 van 80 is 10. 3 x 10 = 30.",
  r_v11_15: "**Berekening:** 9 x 9 = 81.",
  r_v11_16: "**Berekening:** De som van hoeken in een driehoek is altijd 180 graden.",
  r_v11_17: "**Berekening:** 1 liter = 1000 ml. 2.5 x 1000 = 2500.",
  r_v11_18: "**Berekening:** Reeks is 2x + 1 (2x2+1=5, 5x2+1=11...). 23x2+1=47.",
  r_v11_19: "**Berekening:** 7 x 7 = 49.",
  r_v11_20: "**Berekening:** 1/5 = 2/10 = 20/100 = 20%.",
  r_v11_21: "**Berekening:** Lengte x breedte = 8 x 5 = 40.",
  r_v11_22: "**Berekening:** 12 - 5 = 7.",
  r_v11_23: "**Berekening:** 21 / 3 = 7.",
  r_v11_24: "**Berekening:** De naam zegt het al: 5.",
  r_v11_25: "**Berekening:** Teller x teller (1), noemer x noemer (6). 1/6.",
  r_v11_26: "**Berekening:** De komma één plek naar links: 25.",
  r_v11_27: "**Berekening:** Delen door een half is hetzelfde als vermenigvuldigen met 2. 120.",
  r_v11_28: "**Berekening:** Veelvouden 3: 3,6,9,12,15. Veelvouden 5: 5,10,15. KGV is 15.",
  r_v11_29: "**Berekening:** 300 / 100 = 3 uur.",
  r_v11_30: "**Berekening:** 21% van 100 is 21. Totaal 121.",
  r_v11_31: "**Berekening:** Eerst delen! 4/2=2. Dan 8+2=10.",
  r_v11_32: "**Berekening:** Wortel 100 = 10. Wortel 36 = 6. 10+6=16.",

  // Numeriek Redeneren Uitleg (v11)
  nr_v11_1: "**Regel:** Verdubbelen (x2).\n**Stappen:** 24 x 2 = **48**; 48 x 2 = **96**.",
  nr_v11_2: "**Regel:** Aftrekken met 5 (-5).\n**Stappen:** 85 - 5 = **80**; 80 - 5 = **75**.",
  nr_v11_3: "**Regel:** Kwadraten (1², 2², 3²...).\n**Stappen:** 6² = **36**; 7² = **49**.",
  nr_v11_4: "**Regel:** x2, -1, x2, -1...\n**Stappen:** 9 x 2 = **18**; 18 - 1 = **17**.",
  nr_v11_5: "**Regel:** x2, -5, x2, -5...\n**Stappen:** 50 - 5 = **45**; 45 x 2 = **90**.",
  nr_v11_6: "**Regel:** Fibonacci (som vorige twee).\n**Stappen:** 5 + 8 = **13**; 8 + 13 = **21**.",
  nr_v11_7: "**Regel:** Halveren (/2).\n**Stappen:** 10 / 2 = **5**; 5 / 2 = **2.5**.",
  nr_v11_8: "**Regel:** Optellen met 6 (+6).\n**Stappen:** 23 + 6 = **29**; 29 + 6 = **35**.",
  nr_v11_9: "**Regel:** Vermenigvuldigen met 3 (x3).\n**Stappen:** 54 x 3 = **162**; 162 x 3 = **486**.",
  nr_v11_10: "**Regel:** +3, -2, +3, -2...\n**Stappen:** 12 + 3 = **15**; 15 - 2 = **13**.",
  nr_v11_11: "**Regel:** Derde machten (n³).\n**Stappen:** 5³ = **125**; 6³ = **216**.",
  nr_v11_12: "**Regel:** x2, -2, x2, -2...\n**Stappen:** 42 x 2 = **84**; 84 - 2 = **82**.",
  nr_v11_13: "**Regel:** Delen door 5 (/5).\n**Stappen:** 20 / 5 = **4**; 4 / 5 = **0.8**.",
  nr_v11_14: "**Regel:** x2 + 1.\n**Stappen:** 31 x 2 + 1 = **63**; 63 x 2 + 1 = **127**.",
  nr_v11_15: "**Regel:** Opeenvolgende even getallen optellen (+2, +4, +6...).\n**Stappen:** 31 + 10 = **41**; 41 + 12 = **53**.",
  nr_v11_16: "**Regel:** Verdubbelen (x2).\n**Stappen:** 56 x 2 = **112**; 112 x 2 = **224**.",
  nr_v11_17: "**Regel:** Aflopende kwadraten (10², 9², 8²...).\n**Stappen:** 6² = **36**; 5² = **25**.",
  nr_v11_18: "**Regel:** Tafel van 4 (+4).\n**Stappen:** 20 + 4 = **24**; 24 + 4 = **28**.",
  nr_v11_19: "**Regel:** Lucas-reeks (som van vorige twee).\n**Stappen:** 11 + 18 = **29**; 18 + 29 = **47**.",
  nr_v11_20: "**Regel:** Halveren (/2).\n**Stappen:** 30 / 2 = **15**; 15 / 2 = **7.5**."
};
