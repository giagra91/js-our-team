// Array di oggetti fornito
const team = [
    {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
    },
    {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
    },
    {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
    },
    {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
    },
    {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
    },
];

const secondTeam = [
    {
    name: 'Paula Ramos',
    role: 'Graphic Designer',
    image: 'new-team-member-01.jpg',
    },
    {
    name: 'John Smith',
    role: 'Developer',
    image: 'new-team-member-02.jpg',
    },
    {
    name: 'Laura Bloom',
    role: 'Chief Editor',
    image: 'new-team-member-03.jpg',
    },
    {
    name: 'Paul Wolf',
    role: 'Office Manager',
    image: 'new-team-member-04.jpg',
    }
];

// Ciclo for per inserire i nuovi oggetti del nuovo array nell'array principale
for (let i = 0 ; i < secondTeam.length ; i++){
    team.push(secondTeam[i]);
}

// Ciclo for in per stampare in console gli elementi dei vari oggetti sottoforma di stringa
for (let key in team){
    // Creo un nuovo div per ogni giro del ciclo a cui aggiungo le classi di cui ho bisogno
    let newDiv = document.createElement(`div`);
    newDiv.classList.add(`col-4`, `p-4`, `text-center`);

    // Creo le variabili in cui dovrò racchiudere le informazioni da aggiungere al div appena creato
    let newImage = document.createElement(`img`);
    let newName = document.createElement(`h5`);
    let newRole = document.createElement(`span`);

    // Stampo le immagini come stringa in console e le aggiungo all'elemento appena creato per stamparle poi nel DOM
    console.log(team[key].image);
    newImage.classList.add(`img-fluid`);
    newImage.src=`img/` + (team[key].image);
    newDiv.appendChild(newImage);

    // Stampo i nomi in console e li aggiungo all'elemento appena creato per stamparli poi nel DOM
    console.log(team[key].name);
    newName.innerHTML=team[key].name;
    newName.classList.add(`fw-bold`, `my-3`);
    newDiv.appendChild(newName);

    // Stampo i ruoli in console e li aggiungo all'elemento appena creato per stamparli poi nel DOM
    console.log(team[key].role);
    newRole.innerHTML=team[key].role;
    newRole.classList.add(`px-5`, `py-1`);
    newDiv.appendChild(newRole);

    // Stampo il nuovo div completo di tutti gli elementi nel DOM
    document.getElementById(`output`).appendChild(newDiv);
}