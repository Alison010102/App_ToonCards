export const categories = [
  "Cartoons",
  "Animes",
  "Adult Swim",
  "Infantil"
];

export const universes = {
  "Cartoons": [
    { id: "c1", name: "Adventure Time", image: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/a/a2/Adventure_Time_Logo.png&w=400&h=400&fit=contain" },
    { id: "c2", name: "Regular Show", image: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/2/25/Apenas_Um_Show_logo.png&w=400&h=400&fit=contain" },
    { id: "c3", name: "Ben 10", image: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/1/1a/Ben_10_Logo_2.png&w=400&h=400&fit=contain" },
    { id: "c4", name: "Gumball", image: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/thumb/8/87/The_Amazing_World_of_Gumball_logo.png/1200px-The_Amazing_World_of_Gumball_logo.png&w=400&h=400&fit=contain" },
    { id: "c5", name: "Steven Universe", image: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/1/1b/Steven_Universe_logo.png&w=400&h=400&fit=contain" }
  ],
  "Animes": [
    { id: "a1", name: "Naruto", image: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/c/c9/Naruto_logo.svg&w=400&h=400&fit=contain" },
    { id: "a2", name: "Dragon Ball", image: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/22/Dragon_Ball_logo.svg&w=400&h=400&fit=contain" },
    { id: "a3", name: "One Piece", image: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/29/One_Piece_Logo.svg&w=400&h=400&fit=contain" },
    { id: "a4", name: "Bleach", image: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/6/63/Bleach_logo.svg&w=400&h=400&fit=contain" }
  ],
  "Adult Swim": [
    { id: "as1", name: "Rick and Morty", image: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg&w=400&h=400&fit=contain" },
    { id: "as2", name: "Aqua Teen", image: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Aqua_Teen_Hunger_Force_logo.svg/1200px-Aqua_Teen_Hunger_Force_logo.svg.png&w=400&h=400&fit=contain" },
    { id: "as3", name: "Smiling Friends", image: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Smiling_Friends_logo.png/1200px-Smiling_Friends_logo.png&w=400&h=400&fit=contain" }
  ],
  "Infantil": [
    { id: "i1", name: "Peppa Pig", image: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/e/ee/Peppa_Pig.png&w=400&h=400&fit=contain" }
  ]
};

export const characters = {
  "Adventure Time": [
    {
      id: 1,
      name: 'Finn, o Humano',
      universe: 'Adventure Time',
      category: 'Cartoons',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Finn_the_Human_character.svg/250px-Finn_the_Human_character.svg.png',
      race: 'Humano',
      gender: 'Masculino',
      power: 'Herói Aventureiro',
      summary: 'Que horas são? É hora de aventura!'
    },
    {
      id: 2,
      name: 'Jake, o Cão',
      universe: 'Adventure Time',
      category: 'Cartoons',
      image: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Jake_the_Dog.png/150px-Jake_the_Dog.png&w=400&h=400&fit=contain',
      race: 'Cão Mágico',
      gender: 'Masculino',
      power: 'Metamorfose',
      summary: 'Cara, ser ruim em alguma coisa é o primeiro passo para ser bom em alguma coisa.'
    },
    {
      id: 3,
      name: 'Marceline',
      universe: 'Adventure Time',
      category: 'Cartoons',
      image: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Marceline.png/150px-Marceline.png&w=400&h=400&fit=contain',
      race: 'Vampira / Demônio',
      gender: 'Feminino',
      power: 'Imortalidade, voo, sugar cor vermelha',
      summary: 'A rainha dos vampiros de Ooo.'
    },
    {
      id: 4,
      name: 'Princesa Jujuba',
      universe: 'Adventure Time',
      category: 'Cartoons',
      image: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Princess_Bubblegum.png/150px-Princess_Bubblegum.png&w=400&h=400&fit=contain',
      race: 'Povo Doce',
      gender: 'Feminino',
      power: 'Inteligência Genial',
      summary: 'A governante científica do Reino Doce.'
    }
  ],
  "Naruto": [
    {
      id: 5,
      name: 'Naruto Uzumaki',
      universe: 'Naruto',
      category: 'Animes',
      image: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/en/thumb/9/94/NarutoUzamaki.png/150px-NarutoUzamaki.png&w=400&h=400&fit=contain',
      race: 'Humano',
      gender: 'Masculino',
      power: 'Chakra da Kyuubi',
      summary: 'Eu não vou voltar atrás da minha palavra. Esse é o meu jeito ninja!'
    }
  ],
  "Rick and Morty": [
    {
      id: 6,
      name: 'Rick Sanchez',
      universe: 'Rick and Morty',
      category: 'Adult Swim',
      image: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Rick_Sanchez.png/150px-Rick_Sanchez.png&w=400&h=400&fit=contain',
      race: 'Humano',
      gender: 'Masculino',
      power: 'Ciência, Arminha de portal',
      summary: 'Wubba Lubba Dub Dub!'
    }
  ]
};
