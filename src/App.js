import './App.css';
import React, {useState} from 'react';
import Collapse from './components/Collapse';
import Paragraph from './components/Paragraph';

function App() {
  const [isExpanded, setState] = useState(false);
  const handleExpandedChange = () => {
    setState(prev => !prev)
  }

  return (
    <>
      <Collapse
        collapsedLabel='Развернуть'
        expandedLabel='Свернуть'
        isExpanded={isExpanded}
        onExpandedChange={handleExpandedChange}
      >
        <Paragraph className="">
            Альфа-Банк, основанный в 1990 году, является универсальным банком,
            осуществляющим все основные виды банковских операций, представленных
            на рынке финансовых услуг, включая обслуживание частных и корпоративных
            клиентов, инвестиционный банковский бизнес, торговое финансирование и т.д.
        </Paragraph>
      </Collapse>
    </>
  );
}

export default App;
