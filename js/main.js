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

// Ciclo for in per stampare in console gli elementi dei vari oggetti sottoforma di stringa
for (let key in team){
    // Creo un nuovo div per ogni giro del ciclo a cui aggiungo le classi di cui ho bisogno
    let newDiv = document.createElement(`div`);
    newDiv.classList.add(`col-4`, `p-4`, `text-center`);

    // Creo le variabili in cui dovrò racchiudere le informazioni da aggiungere al div appena creato
    let newImage = document.createElement(`img`)
    let newName = document.createElement(`h5`);
    let newRole = document.createElement(`p`);

    // Stampo le immagini come stringa in console e le aggiungo all'elemento appena creato per stamparle poi nel DOM
    console.log(team[key].image);
    newImage.classList.add(`img-fluid`);
    newImage.src=`img/` + (team[key].image);
    newDiv.appendChild(newImage);

    // Stampo i nomi in console e li aggiungo all'elemento appena creato per stamparli poi nel DOM      
    console.log(team[key].name);
    newName.innerHTML=team[key].name;
    newName.classList.add(`fw-bold`, `my-2`);
    newDiv.appendChild(newName);

    // Stampo i ruoli in console e li aggiungo all'elemento appena creato per stamparli poi nel DOM
    console.log(team[key].role);
    newRole.innerHTML=team[key].role;
    newDiv.appendChild(newRole);
    
    // Stampo il nuovo div completo di tutti gli elementi nel DOM
    document.getElementById(`output`).appendChild(newDiv);
}