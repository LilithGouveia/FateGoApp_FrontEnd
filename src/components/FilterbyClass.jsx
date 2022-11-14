import matchTheUrl from '../services/Functions';
import '../styles/pages/servants.sass';

function FilterByClass() {

  return (
    <div className='filterClass'>
      <p> Filter by Class </p>
      <div className='searchClass'>
        <img className='images' src={matchTheUrl('saber')} alt='saber' />
        <img className='images' src={matchTheUrl('archer')} alt='archer' />
        <img className='images' src={matchTheUrl('lancer')} alt='lancer' />
        <img className='images' src={matchTheUrl('assassin')} alt='assassin' />
        <img className='images' src={matchTheUrl('caster')} alt='caster' />
        <img
          className='images'
          src={matchTheUrl('berserker')}
          alt='berserker'
        />
        <img className='images' src={matchTheUrl('rider')} alt='rider' />
        <img className='images' src={matchTheUrl('avenger')} alt='avenger' />
      </div>
      <div className='searchClass2'>
        <img className='images' src={matchTheUrl('ruler')} alt='ruler' />
        <img
          className='images'
          src={matchTheUrl('moonCancer')}
          alt='moonCancer'
        />
        <img
          className='images'
          src={matchTheUrl('pretender')}
          alt='pretender'
        />
        <img className='images' src={matchTheUrl('shielder')} alt='shielder' />
        <img
          className='images'
          src={matchTheUrl('foreigner')}
          alt='foreigner'
        />
        <img className='images' src={matchTheUrl('alterEgo')} alt='alterEgo' />
        <img className='images' src={matchTheUrl('beast')} alt='beast' />
      </div>
    </div>
  );
}

export default FilterByClass;
