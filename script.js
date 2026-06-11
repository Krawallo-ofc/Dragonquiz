const cards = [
  {no:1, name:'Numot', magic:true, source:'Numot, the Devastator', img:'assets/numot_the_devastator.jpg'},
  {no:2, name:'Fatalis', magic:false, source:'Monster Hunter', img:'assets/fatalis.jpg'},
  {no:3, name:'Haku', magic:false, source:'Chihiros Reise ins Zauberland', img:'assets/haku.jpg'},
  {no:4, name:'Darigaaz', magic:true, source:'Darigaaz Reincarnated', img:'assets/darigaaz_reincarnated.jpg'},
  {no:5, name:'Kairi', magic:true, source:'Kairi, the Swirling Sky', img:'assets/kairi_the_swirling_sky.jpg'},
  {no:6, name:'Alduin', magic:false, source:'The Elder Scrolls V: Skyrim', img:'assets/alduin.jpg'},
  {no:7, name:'Grigori', magic:false, source:"Dragon's Dogma", img:'assets/grigori.jpg'},
  {no:8, name:'Jugan', magic:true, source:'Jugan, the Rising Star', img:'assets/jugan_the_rising_star.jpg'},
  {no:9, name:'Keiga', magic:true, source:'Keiga, the Tide Star', img:'assets/keiga_the_tide_star.jpg'},
  {no:10, name:'Intet', magic:true, source:'Intet, the Dreamer', img:'assets/intet_the_dreamer.jpg'},
  {no:11, name:'Glaurung', magic:false, source:'Tolkiens Mittelerde', img:'assets/glaurung.jpg'},
  {no:12, name:'Piru', magic:true, source:'Piru, the Volatile', img:'assets/piru_the_volatile.jpg'},
  {no:13, name:'Acnologia', magic:false, source:'Fairy Tail', img:'assets/acnologia.jpg'},
  {no:14, name:'Sinh', magic:false, source:'Dark Souls II', img:'assets/sinh.jpg'},
  {no:15, name:'Oros', magic:true, source:'Oros, the Avenger', img:'assets/oros_the_avenger.jpg'},
  {no:16, name:'Tohru', magic:false, source:"Miss Kobayashi's Dragon Maid", img:'assets/tohru.jpg'},
  {no:17, name:'Kalameet', magic:false, source:'Dark Souls', img:'assets/kalameet.jpg'},
  {no:18, name:'Palladia', magic:true, source:'Palladia-Mors, the Ruiner', img:'assets/palladia_mors_the_ruiner.jpg'},
  {no:19, name:'Ryusei', magic:true, source:'Ryusei, the Falling Star', img:'assets/ryusei_the_falling_star.jpg'},
  {no:20, name:'Paarthurnax', magic:false, source:'The Elder Scrolls V: Skyrim', img:'assets/paarthurnax.jpg'},
  {no:21, name:'Igneel', magic:false, source:'Fairy Tail', img:'assets/igneel.jpg'},
  {no:22, name:'Tanazir', magic:true, source:'Tanazir Quandrix', img:'assets/tanazir_quandrix.jpg'},
  {no:23, name:'Ancalagon', magic:false, source:'Tolkiens Mittelerde', img:'assets/ancalagon.jpg'},
  {no:24, name:'Ziatora', magic:true, source:'Ziatora, the Incinerator', img:'assets/ziatora_the_incinerator.jpg'},
];

const grid = document.getElementById('grid');
for (const c of cards) {
  const el = document.createElement('article');
  el.className = 'card';
  el.tabIndex = 0;
  const back = c.magic
    ? `<div class="face back magic"><div class="badge"><span>${c.no}</span></div><img class="cardimg" src="${c.img}" alt="${c.source}"></div>`
    : `<div class="face back nonmagic"><div class="badge"><span>${c.no}</span></div><img class="cardimg" src="${c.img}" alt="${c.source}"></div>`
  el.innerHTML = `
    <div class="card-inner">
      <div class="face front">
        <div class="badge"><span>${c.no}</span></div>
        <div class="name" contenteditable="false" spellcheck="false">${c.name}</div>
      </div>
      ${back}
    </div>`;
  el.addEventListener('click', e => { if (!e.target.isContentEditable) el.classList.toggle('flipped'); });
  el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.classList.toggle('flipped'); }});
  grid.appendChild(el);
}
