import { useState } from 'react';
import style from './styles.module.css';

type Props = {
  mainColor: string;
  onSearch: (searchValue: string) => void;
}

export const SearcInput = ({ mainColor, onSearch }: Props) => {
  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.code === 'Enter'){
      onSearch(searchValue);
    }
  }

  return (
    <div 
      className={style.container}
      style={ {borderColor: focused ? mainColor : '#FFFFFF'} }   
    >
      <div 
        className={style.button}
        onClick={()=>onSearch(searchValue)}
        ></div>
      <input 
        type="text" 
        className={style.input}
        placeholder="Digite o nome do Produto"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyUp={handleKeyUp}
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}
      />
    </div>
  );
}

