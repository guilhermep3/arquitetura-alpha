let personsJson = [
   {id:1, name:'Marcelo Ortega', img: 'assets/images/home/team/marcelo-ortega-1.webp', load:'CEO'},
   {id:2, name:'Christian Ortega', img: 'assets/images/home/team/christian-ortega-2.webp', load:'Presidente'},
   {id:3, name:'José Ortega', img: 'assets/images/home/team/jose-ortega-3.webp', load:'Diretor'},
   {id:4, name:'Paula Zapata', img: 'assets/images/home/team/paula-zapata-4.webp', load:'Gerente'},
   {id:5, name:'Sebastian Rivadeneira', img: 'assets/images/home/team/sebastian-rivadeneira-5.webp', load:'Gerente'},
   {id:6, name:'Stephany Sisalema', img: 'assets/images/home/team/stephany-sisalema-6.webp', load:'Gerente'}
]

let projectsHomeJson = [
   {id:1, name:'Arrayanes House', type:'Arquitetura Moderna', img:'assets/images/projects/arrayanes-house.jpg', local:'Equador - Puembo', year:'2021', size:'1240m²',
      colors:['#FFFAF0','#c7bbaa','#7e786e','#dbc599','#201f1c'],
      images:['assets/images/projects/arrayanes-img1.jpg','assets/images/projects/arrayanes-img2.jpg','assets/images/projects/arrayanes-img3.jpg','assets/images/projects/arrayanes-img4.jpg','assets/images/projects/arrayanes-img5.jpg']},
   {id:2, name:'Brio House', type:'Arquitetura Moderna', img:'assets/images/projects/brio-house.jpg', local:'Brasil - Rio de Janeiro', year:'2023', size:'900m²',
      colors:['#3F322B','#c7bbaa','#7e786e','#90a9ca','#201f1c'],
      images:['assets/images/projects/brio-img1.jpg','assets/images/projects/brio-img2.jpg','assets/images/projects/brio-img3.jpg','assets/images/projects/brio-img4.jpg','assets/images/projects/brio-img5.jpg']},
   {id:3, name:'Dual House', type:'Arquitetura Minimalista', img:'assets/images/projects/dual-house.jpg', local:'Argentina - Buenos Aires', year:'2023', size:'710m²',
      colors:['#94715f','#65855d','#dad2c6','#3a3131','#473019'],
      images:['assets/images/projects/dual-img1.jpg','assets/images/projects/dual-img2.jpg','assets/images/projects/dual-img3.jpg','assets/images/projects/dual-img4.jpg','assets/images/projects/dual-img5.jpg']},
   {id:4, name:'Eclipse House', type:'Arquitetura Moderna', img:'assets/images/projects/eclipse-house.jpg', local:'Equador - Cumbaya', year:'2023', size:'1300m²',
      colors:['#c46d3c','#a89f92','#2e200c','#8a968f','#222338'],
      images:['assets/images/projects/eclipse-img1.jpg','assets/images/projects/eclipse-img2.jpg','assets/images/projects/eclipse-img3.jpg','assets/images/projects/eclipse-img4.jpg','assets/images/projects/eclipse-img5.jpg']},
   {id:5, name:'Emperadora House', type:'Arquitetura Contemporânea', img:'assets/images/projects/emperadora-house.jpg', local:'Brasil - São Paulo', year:'2022', size:'855m²',
      colors:['#65855d','#3a3131','#7e786e','#dbc599','#201f1c'],
      images:['assets/images/projects/emperadora-img1.jpg','assets/images/projects/emperadora-img2.jpg','assets/images/projects/emperadora-img3.jpg','assets/images/projects/emperadora-img4.jpg','assets/images/projects/emperadora-img5.jpg']},
   {id:6, name:'Fusion House', type:'Arquitetura Tropical', img:'assets/images/projects/fusion-house.jpg', local:'Brasil - Rio de Janeiro', year:'2024', size:'1500m²',
      colors:['#a89f92','#c7bbaa','#a89f92','#dbc599','#3F322B'],
      images:['assets/images/projects/fusion-img1.jpg','assets/images/projects/fusion-img2.jpg','assets/images/projects/fusion-img3.jpg','assets/images/projects/fusion-img4.jpg','assets/images/projects/fusion-img5.jpg']},
   {id:7, name:'Orizzonte House', type:'Arquitetura Minimalista', img:'assets/images/projects/orizzonte-house.jpg', local:'Brasil - Rio de Janeiro', year:'2022', size:'1000m²',
      colors:['#c46d3c','#c7bbaa','#222338','#65855d','#dad2c6'],
      images:['assets/images/projects/orizzonte-img1.jpg','assets/images/projects/orizzonte-img2.jpg','assets/images/projects/orizzonte-img3.jpg','assets/images/projects/orizzonte-img4.jpg','assets/images/projects/orizzonte-img5.jpg']},
   {id:8, name:'Zenith House', type:'Arquitetura Moderna', img:'assets/images/projects/zenith-house.jpg', local:'Brasil - São Paulo', year:'2022', size:'1000m²',
      colors:['#FFFAF0','#201f1c','#7e786e','#dad2c6','#222338'],
      images:['assets/images/projects/zenith-img1.jpg','assets/images/projects/zenith-img2.jpg','assets/images/projects/zenith-img3.jpg','assets/images/projects/zenith-img4.jpg', 'assets/images/projects/zenith-img5.jpg']}
]

let projectsJson = [
   {id:1, name:'Agnes House', img:'assets/images/projects/agnes-house.jpg', local:'Brasil - São Paulo', year:'2022', size:'2000m²', colors:['#FFFAF0','#c7bbaa','#7e786e','#dbc599','#3F322B']},
   {id:2, name:'Al-Ain House', img:'assets/images/projects/alain-house.jpg', local:'Colômbia - Medelín', year:'2021', size:'840m²', colors:['#8a968f','#90a9ca','#7e786e','#FFFAF0','#201f1c']},
   {id:3, name:'Arrayanes House', type:'Arquitetura Moderna', img:'assets/images/projects/arrayanes-house.jpg', local:'Equador - Puembo', year:'2021', size:'1240m²',
      colors:['#FFFAF0','#c7bbaa','#7e786e','#dbc599','#201f1c'],
      images:['assets/images/projects/arrayanes-img1.jpg','assets/images/projects/arrayanes-img2.jpg','assets/images/projects/arrayanes-img3.jpg','assets/images/projects/arrayanes-img4.jpg','assets/images/projects/arrayanes-img5.jpg']},
   {id:4, name:'Brio House', type:'Arquitetura Moderna', img:'assets/images/projects/brio-house.jpg', local:'Brasil - Rio de Janeiro', year:'2023', size:'900m²',
      colors:['#3F322B','#c7bbaa','#7e786e','#90a9ca','#201f1c'],
      images:['assets/images/projects/brio-img1.jpg','assets/images/projects/brio-img2.jpg','assets/images/projects/brio-img3.jpg','assets/images/projects/brio-img4.jpg','assets/images/projects/brio-img5.jpg']},
   {id:5, name:'Cliff House', img:'assets/images/projects/cliff-house.jpg', local:'Colômbia - Bogotá', year:'2021', size:'364m²', colors:['#8a968f','#90a9ca','#7e786e','#FFFAF0','#201f1c']},
   {id:6, name:'Dual House', type:'Arquitetura Minimalista', img:'assets/images/projects/dual-house.jpg', local:'Argentina - Buenos Aires', year:'2023', size:'710m²',
      colors:['#94715f','#65855d','#dad2c6','#3a3131','#473019'],
      images:['assets/images/projects/dual-img1.jpg','assets/images/projects/dual-img2.jpg','assets/images/projects/dual-img3.jpg','assets/images/projects/dual-img4.jpg','assets/images/projects/dual-img5.jpg']},
   {id:7, name:'Eclipse House', type:'Arquitetura Moderna', img:'assets/images/projects/eclipse-house.jpg', local:'Equador - Cumbaya', year:'2023', size:'1300m²',
      colors:['#c46d3c','#a89f92','#2e200c','#8a968f','#222338'],
      images:['assets/images/projects/eclipse-img1.jpg','assets/images/projects/eclipse-img2.jpg','assets/images/projects/eclipse-img3.jpg','assets/images/projects/eclipse-img4.jpg','assets/images/projects/eclipse-img5.jpg']},
   {id:8, name:'El-Cisne House', img:'assets/images/projects/elcisne-house.jpg', local:'Argentina - Buenos Aires', year:'2023', size:'1043m²', colors:['#94715f','#65855d','#dad2c6','#3a3131','#473019']},
   {id:9, name:'Emperadora House', type:'Arquitetura Contemporânea', img:'assets/images/projects/emperadora-house.jpg', local:'Brasil - São Paulo', year:'2022', size:'855m²',
      colors:['#65855d','#3a3131','#7e786e','#dbc599','#201f1c'],
      images:['assets/images/projects/emperadora-img1.jpg','assets/images/projects/emperadora-img2.jpg','assets/images/projects/emperadora-img3.jpg','assets/images/projects/emperadora-img4.jpg','assets/images/projects/emperadora-img5.jpg']},
   {id:10, name:'Essal House', img:'assets/images/projects/essal-house.jpg', local:'Colômbia - Medelín', year:'2022', size:'855m²', year:'2022', size:'1000m²', colors:['#FFFAF0','#201f1c','#7e786e','#dad2c6','#222338']},
   {id:6, name:'Fusion House', type:'Arquitetura Tropical', img:'assets/images/projects/fusion-house.jpg', local:'Brasil - Rio de Janeiro', year:'2024', size:'1500m²',
      colors:['#a89f92','#c7bbaa','#a89f92','#dbc599','#3F322B'],
      images:['assets/images/projects/fusion-img1.jpg','assets/images/projects/fusion-img2.jpg','assets/images/projects/fusion-img3.jpg','assets/images/projects/fusion-img4.jpg','assets/images/projects/fusion-img5.jpg']},
   {id:12, name:'Galeria House', img:'assets/images/projects/galeria-house.jpg', local:'Equador - Puembo', year:'2022', size:'730m²', colors:['#FFFAF0','#201f1c','#7e786e','#dad2c6','#222338']},
   {id:13, name:'Geco House', img:'assets/images/projects/geco-house.jpg', local:'Colômbia - Bogotá', year:'2021', size:'900m²', colors:['#FFFAF0','#c7bbaa','#2e200c','#dbc599','#3F322B']},
   {id:14, name:'Hotel 3033', img:'assets/images/projects/hotel3033.jpg', local:'Brasil - Rio de Janeiro', year:'2021', size:'1180m²', colors:['#94715f','#65855d','#dad2c6','#c46d3c','#8a968f']},
   {id:15, name:'Ilusion House', img:'assets/images/projects/ilusion-house.jpg', local:'Brasil - São Paulo', year:'2023', size:'900m²', colors:['#c46d3c','#a89f92','#2e200c','#8a968f','#222338']},
   {id:16, name:'Infinite House', img:'assets/images/projects/infinite-house.jpg', local:'Argentina - Buenos Aires', year:'2024', size:'2800m²', colors:['#222338','#c7bbaa','#2e200c','#dbc599','#3F322B']},
   {id:17, name:'Kopano House', img:'assets/images/projects/kopano-house.jpg', local:'Argentina - Buenos Aires', year:'2023', size:'710m²', colors:['#222338','#c7bbaa','#2e200c','#dbc599','#3F322B']},
   {id:18, name:'Na-Hi House', img:'assets/images/projects/nahi-house.jpg', local:'Equador - Puembo', year:'2021', size:'347m²', colors:['#94715f','#65855d','#dad2c6','#3a3131','#473019']},
   {id:7, name:'Orizzonte House', type:'Arquitetura Minimalista', img:'assets/images/projects/orizzonte-house.jpg', local:'Brasil - Rio de Janeiro', year:'2022', size:'1000m²',
      colors:['#c46d3c','#c7bbaa','#222338','#65855d','#dad2c6'],
      images:['assets/images/projects/orizzonte-img1.jpg','assets/images/projects/orizzonte-img2.jpg','assets/images/projects/orizzonte-img3.jpg','assets/images/projects/orizzonte-img4.jpg','assets/images/projects/orizzonte-img5.jpg']},
   {id:20, name:'Prince House', img:'assets/images/projects/prince-house.jpg', local:'Brasil - São Paulo', year:'2024', size:'1000m²', colors:['#8a968f','#90a9ca','#7e786e','#FFFAF0','#201f1c']},
   {id:21, name:'Reforma House', img:'assets/images/projects/reforma-house.jpg', local:'Brasil - São Paulo', year:'2022', size:'935m²', colors:['#65855d','#3a3131','#7e786e','#dbc599','#201f1c']},
   {id:22, name:'Senses House', img:'assets/images/projects/senses-house.jpg', local:'Equador - Puembo', year:'2022', size:'812m²', colors:['#94715f','#65855d','#dad2c6','#c7bbaa','#473019']},
   {id:23, name:'Terrazas House', img:'assets/images/projects/terrazas-house.jpg', local:'Equador - Cumbaya', year:'2021', size:'1800m²', colors:['#222338','#65855d','#dad2c6','#3a3131','#473019']},
   {id:24, name:'Ye House', img:'assets/images/projects/ye-house.jpg', local:'Colômbia - Bogotá', year:'2023', size:'1200m²', colors:['#94715f','#65855d','#dad2c6','#3a3131','#473019']},
   {id:8, name:'Zenith House', type:'Arquitetura Moderna', img:'assets/images/projects/zenith-house.jpg', local:'Brasil - São Paulo', year:'2022', size:'1000m²',
      colors:['#FFFAF0','#201f1c','#7e786e','#dad2c6','#222338'],
      images:['assets/images/projects/zenith-img1.jpg','assets/images/projects/zenith-img2.jpg','assets/images/projects/zenith-img3.jpg','assets/images/projects/zenith-img4.jpg', 'assets/images/projects/zenith-img5.jpg']}
]