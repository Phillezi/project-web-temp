db = db.getSiblingDB('goDB');
db.content.insertOne({
    section: "A",
    language: "sv",
    title: "Hej!",
    paragraphs: [
        "Vi är 6st datatekniksstudenter på KTH som aktivit söker ett projektarbete.",
        "Vilka är vi?"
    ]
});

db.content.insertOne({
    section: "A",
    language: "en",
    title: "Hello!",
    paragraphs: [
        "We are a group of 6 computer engineering students from KTH (Royal Institute of Technology) actively searching for a project opportunity.",
        "Who are we?"
    ]
});

db.content.insertOne({
    section: "AA",
    language: "sv",
    title: "Om",
    paragraphs: [
        "Projektet ska utföras i läsperiod 4 och sträcker sig över 7 veckor (vecka 14 till vecka 21) .",
        "Er roll som ett partnerföretag är att ge oss en uppgift som vi skulle försöka lösa enligt era behov. Slutprodukten kommer bara att vara en prototyp av den färdiga produkten.",
        "Under projektet strävar vi efter att:",
        "- Få praktisk erfarenhet av programutveckling i ett verkligt sammanhang.",
        "- Bidra med värdefulla lösningar på ett relevant problem hos ett partnerföretag.",
        "- Utveckla våra färdigheter inom programmering, nätverk, databaser, problemlösning, teamwork och kommunikation.",
        "Tror du att du har ett projekt som kan passa oss, tveka inte på att kontakta oss."
    ]
});

db.content.insertOne({
    section: "AA",
    language: "en",
    title: "About",
    paragraphs: [
        "The project is to be carried out during study period 4 and spans over 7 weeks (from week 14 to week 21).",
        "Your role as a partner company is to give us a task which we would try to solve to your needs. The end product is only going to be a prototype of the finished product.",
        "During the project, we strive to:",
        "- Gain practical experience of software development in a real-world context.",
        "- Contribute valuable solutions to a relevant problem at a partner company.",
        "- Develop our skills in programming, networking, databases, problem solving, teamwork and communication.",
        "If you believe you have a project that might suit us, do not hesitate to contact us."
    ]
});

db.content.insertOne({
    section: "B",
    language: "sv",
    title: "Krav från vår examinator",
    paragraphs: [
        "Nedan följer de krav som examinatorn har angivit",
        "- Programmering i något objektorienterat språk",
        "- Nätverk, d.v.s. client-server, distribuerad applikation (det är tillåtet att servern genererar webbsidor och att då klienten representeras av en webb-browser)",
        "- Databaser"
    ]
});

db.content.insertOne({
    section: "B",
    language: "en",
    title: "Requirements from Our Examiner",
    paragraphs: [
        "Below are the requirements specified by the examiner:",
        "- Programming in some object-oriented language",
        "- Networking, i.e., client-server, distributed application (it is allowed for the server to generate web pages, with the client represented by a web browser)",
        "- Databases"
    ]
});

db.content.insertOne({
    section: "C",
    language: "sv",
    title: "Förra årets projekt",
    paragraphs: [
        "Förra året fick vi göra ett projekt som involverade att skapa ett multiplayer spel i programmeringsspråket c. Detta var ett extremt roligt projekt och vi fick öva på att jobba flera med ett agilt arbetssätt.",
        "Vi är väldigt nöjda med vad vi lyckades åstadkomma, då detta var vårat första större projekt. Detta projekt var väldigt lärorikt.",
        "Källkoden till spelet finns på Github, sen har vi även portat spelet till webben genom webb-assembly (WASM). Detta var inte en del av projektet men det gjorde vi för skojs skull. Det finns på följande url: https://catclash.vm-app.cloud.cbh.kth.se/ "
    ]
});
db.content.insertOne({
    section: "C",
    language: "en",
    title: "Last years project",
    paragraphs: [
        "Last year, we had the opportunity to work on a project that involved creating a multiplayer game in the C programming language. This was an extremely enjoyable project, and we got to practice working collaboratively with an agile approach.",
        "We are very pleased with what we were able to achieve, as this was our first major project. It proved to be a valuable learning experience.",
        "The source code for the game is available on Github, and we have also ported the game to the web using WebAssembly (WASM). Although this wasn't part of the original project, we did it for fun. You can find it at the following URL: https://catclash.vm-app.cloud.cbh.kth.se/ feel free to check it out!"
    ]
});