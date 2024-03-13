db = db.getSiblingDB('goDB');

db.member.insertOne({
    name: 'Philip Zingmark',
    image_url: 'https://avatars.githubusercontent.com/u/112874974?v=4',
    about: {
        en: "Hello! I'm a 21-year-old Computer Engineering student with a strong passion for technology and development. I have experience in C, Java, JavaScript (including React.js and Node.js), some Python, and I'm currently learning Go. I'm familiar with PostgreSQL, MySQL, and MongoDB. I've developed this website with Go as the backend, MongoDB as the database, and React as the frontend framework; it runs in a Docker container on KTH-cloud. I'm a quick learner and ready for new challenges.",
        sv: "Hej! Jag är en 21-årig dataingenjörsstudent med stark passion för teknik och utveckling. Jag har erfarenhet i C, Java, JavaScript (inkl React.js och Node.js), lite Python och så håller jag på att lära mig Go. Jag är bekant med PostgreSQL, MySQL och MongoDB. Jag har utvecklat denna webbsida med Go som backend, MongoDB som databas och React som frontend framework, den körs i en docker container på KTH-cloud. Jag är snabblärd och redo för nya utmaningar."
    },
    skills: [
        { name: 'C', level: '4' },
        { name: 'Java', level: '4' },
        { name: 'Go', level: '3' },
        { name: 'Docker', level: '3' },
        { name: 'Python', level: '3' },
        { name: 'JavaScript', level: '4' },
        { name: 'React.js', level: '2' },
        { name: 'Node.js', level: '2' },
        { name: 'Linux', level: '3' },
        { name: 'HTML', level: '4' },
        { name: 'CSS', level: '4' },
        { name: 'MySQL', level: '4' },
        { name: 'PostgreSQL', level: '4' },
        { name: 'MongoDB', level: '4' },
        { name: 'Embedded', level: '4' },
        { name: 'RISC-V', level: '3' },
        { name: 'PyTorch', level: '1' },
        { name: 'MATLAB', level: '3' }
    ],
    links: [
        { name: 'GitHub', url: 'https://github.com/Phillezi' },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/Philip-Zingmark/'
        }
    ],
    contact: [{ name: 'philipzi@kth.se', value: 'mailto:philipzi@kth.se' }]
});

db.member.insertOne({
    name: 'Emil Stener',
    image_url: '',
    about: {
        en: "Hello! I am a Computer Engineering student at KTH (Royal Institute of Technology).",
        sv: "Hej! Jag är en dataingenjörsstudent på KTH."
    },
    skills: [
        { name: 'C', level: '4' },
        { name: 'Java', level: '4' },
        { name: 'Python', level: '3' },
        { name: 'C#', level: '3' },
        { name: 'JavaScript', level: '4' },
        { name: 'Linux', level: '3' },
        { name: 'HTML', level: '4' },
        { name: 'CSS', level: '4' },
        { name: 'MySQL', level: '4' },
        { name: 'MongoDB', level: '4' },
        { name: 'Embedded', level: '4' },
        { name: 'RISC-V', level: '3' },
        { name: 'MATLAB', level: '3' }
    ],
    links: [
        { name: 'GitHub', url: 'https://github.com/emilsr' },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/emil-stener-12a320291/'
        }
    ],
});

db.member.insertOne({
    name: 'Patryk Kondratowicz',
    image_url: 'https://media.licdn.com/dms/image/D4D35AQGd3f52-febuw/profile-framedphoto-shrink_200_200/0/1707427664352?e=1710946800&v=beta&t=ShiCtb9Y7sfQm9RikE1syN3cxmg3KRzsxyDh5ky55aY',
    about: {
        en: "Hello! I'm a Computer Engineering student at KTH, passionate about coding in Java and C. I thrive on tackling complex challenges and applying agile methodologies in my work. Beyond programming, I find joy in reading books and exploring nature through walks in the forest. Excited about the endless possibilities in technology, I'm on a journey to contribute and grow in this ever-evolving field.",
        sv: 'Hej! Jag är en student inom datateknik vid KTH och brinner för programmering i Java och C. Jag trivs med att ta itu med komplexa utmaningar och tillämpa agila metoder i mitt arbete. Utöver programmering finner jag glädje i att läsa böcker och utforska naturen genom promenader i skogen. Jag är entusiastisk inför de oändliga möjligheterna inom teknologi och är på en resa för att bidra och växa inom detta ständigt utvecklande område.'
    },
    skills: [
        { name: 'C', level: '4' },
        { name: 'Java', level: '4' },
        { name: 'HTML', level: '3' },
        { name: 'CSS', level: '3' },
        { name: 'Python', level: '3' },
        { name: 'JavaScript', level: '3' },
        { name: 'MySQL', level: '4' },
        { name: 'MongoDB', level: '4' },
        { name: 'RISC-V', level: '2' },
        { name: 'MATLAB', level: '3' }
    ],
    links: [
        { name: 'GitHub', url: 'https://github.com/PatBtw' },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/patryk-kondratowicz/'
        }
    ],
});

db.member.insertOne({
    name: 'Riff Bravo',
    image_url: '',
    about: {
        en: "Hello! I am a Computer Engineering student at KTH (Royal Institute of Technology).",
        sv: "Hej! Jag är en dataingenjörsstudent på KTH."
    },
    skills: [
        { name: 'C', level: '4' },
        { name: 'Java', level: '4' },
        { name: 'HTML', level: '3' },
        { name: 'CSS', level: '3' },
        { name: 'Python', level: '3' },
        { name: 'JavaScript', level: '3' },
        { name: 'MySQL', level: '4' },
        { name: 'MongoDB', level: '4' },
        { name: 'RISC-V', level: '2' },
        { name: 'MATLAB', level: '3' }
    ],
    links: [
        { name: 'GitHub', url: 'https://github.com/PoisedPanda' },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/riff-bravo/'
        }
    ],
});

db.member.insertOne({
    name: 'William Ramberg',
    image_url: 'https://media.licdn.com/dms/image/D4E03AQEq69I1pi4nyw/profile-displayphoto-shrink_200_200/0/1700172507463?e=1715817600&v=beta&t=o_Oq3MVGlScMvhyY9wsZzmMQ6rI1mLcHIYD1TqFbjGQ',
    about: {
        en: "Hello! I am a Computer Engineering student at KTH (Royal Institute of Technology).",
        sv: "Hej! Jag är en dataingenjörsstudent på KTH."
    },
    skills: [
        { name: 'C', level: '4' },
        { name: 'Java', level: '4' },
        { name: 'Lua', level: '3' },
        { name: 'HTML', level: '3' },
        { name: 'CSS', level: '3' },
        { name: 'Python', level: '3' },
        { name: 'JavaScript', level: '3' },
        { name: 'MySQL', level: '4' },
        { name: 'MongoDB', level: '4' },
        { name: 'RISC-V', level: '2' },
        { name: 'MATLAB', level: '3' }
    ],
    links: [
        { name: 'GitHub', url: 'https://github.com/WillRamberg' },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/william-ramberg-b81830257/'
        }
    ],
});

db.member.insertOne({
    name: 'Carlos Moza',
    image_url: 'https://media.licdn.com/dms/image/C4D03AQG6u5_jral65g/profile-displayphoto-shrink_200_200/0/1660992369177?e=1715817600&v=beta&t=BTFMT4YqWa6B7ME9vXg4JEL67HpyrFU94pYsKw3vGWQ',
    about: {
        en: "Hello! I am a Computer Engineering student at KTH (Royal Institute of Technology).",
        sv: "Hej! Jag är en dataingenjörsstudent på KTH."
    },
    skills: [
        { name: 'C', level: '4' },
        { name: 'Java', level: '4' },
        { name: 'C++', level: '3' },
        { name: 'HTML', level: '3' },
        { name: 'CSS', level: '3' },
        { name: 'Python', level: '3' },
        { name: 'MySQL', level: '4' },
        { name: 'MongoDB', level: '4' },
        { name: 'RISC-V', level: '2' },
        { name: 'MATLAB', level: '3' }
    ],
    links: [
        { name: 'GitHub', url: 'https://github.com/sneeky-panda' },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/carlos-moza-a1b928200/'
        }
    ],
});