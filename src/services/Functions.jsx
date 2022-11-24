

export const matchTheUrl = (name) =>
  ({
    alterEgo:
      'https://static.wikia.nocookie.net/fategrandorder/images/9/99/Class-Alterego-Gold.png',
    archer:
      'https://static.wikia.nocookie.net/fategrandorder/images/9/90/Class-Archer-Gold.png',
    assassin:
      'https://static.wikia.nocookie.net/fategrandorder/images/7/7b/Class-Assassin-Gold.png',
    avenger:
      'https://static.wikia.nocookie.net/fategrandorder/images/1/13/Class-Avenger-Gold.png',
    beast:
      'https://static.wikia.nocookie.net/fategrandorder/images/1/13/Class-Beast.png',
    berserker:
      'https://static.wikia.nocookie.net/fategrandorder/images/5/59/Class-Berserker-Gold.png',
    caster:
      'https://static.wikia.nocookie.net/fategrandorder/images/8/89/Class-Caster-Gold.png',
    foreigner:
      'https://static.wikia.nocookie.net/fategrandorder/images/7/70/Class-Foreigner-Gold.png',
    lancer:
      'https://static.wikia.nocookie.net/fategrandorder/images/7/79/Class-Lancer-Gold.png',
    moonCancer:
      'https://static.wikia.nocookie.net/fategrandorder/images/3/3b/Class-MoonCancer-Gold.png',
    pretender:
      'https://static.wikia.nocookie.net/fategrandorder/images/2/2b/Class-Pretender-Gold.png',
    rider:
      'https://static.wikia.nocookie.net/fategrandorder/images/0/04/Class-Rider-Gold.png',
    ruler:
      'https://static.wikia.nocookie.net/fategrandorder/images/b/ba/Class-Ruler-Gold.png',
    saber:
      'https://static.wikia.nocookie.net/fategrandorder/images/b/b4/Class-Saber-Gold.png',
    shielder:
      'https://static.wikia.nocookie.net/fategrandorder/images/a/ab/Class-Shielder-Gold.png',
  }[name]);

const servantsButton = (param) => {
  return <img className='images' src={matchTheUrl(param)} alt={param} />;
};

const render = (param1, param2) => {
  return (
    <div className={param2}>
      {param1.map((servant) => servantsButton(servant))}
    </div>
  );
};

export const servantsOne = [
  'saber',
  'archer',
  'lancer',
  'assassin',
  'caster',
  'berserker',
  'rider',
  'avenger',
];
export const servantsTwo = [
  'ruler',
  'moonCancer',
  'pretender',
  'shielder',
  'foreigner',
  'alterEgo',
  'beast',
];
const makeTheButtons = () => {
  return (
    <div className='filterClass'>
      <p> Filter by Class </p>
      {render(servantsOne, 'searchClass1')};
      {render(servantsTwo, 'searchClass2')};
    </div>
  );
};



