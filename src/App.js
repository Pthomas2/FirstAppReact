
import './App.css';
import Card from './Card';
import UseEffectHook from './components/UseEffectHook';
import HelloName from './HelloName';
import ClickCounter from './state/ClickCounter';
import DataFlow from './state/DataFlow';
import MountUnmount from './components/MountUnmount'
import FontSize from './components/FontSize';

function App() {
 
 
  return (
    <div className="Container" >
     <HelloName name={prompt("What is your name?")}/>
      <DataFlow />
      <MountUnmount />
    <UseEffectHook/>
     <ClickCounter />
<hr/>
<FontSize/>

     <Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvIu34BltEXVVkplPO_xakqp5koEScluOhA&usqp=CAU" title="artwork" text="This is fancy artwork"/>
     <Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvIu34BltEXVVkplPO_xakqp5koEScluOhA&usqp=CAU" title="artwork" text="This is fancy artwork"/><Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvIu34BltEXVVkplPO_xakqp5koEScluOhA&usqp=CAU" title="artwork" text="This is fancy artwork"/><Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvIu34BltEXVVkplPO_xakqp5koEScluOhA&usqp=CAU" title="artwork" text="This is fancy artwork"/><Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvIu34BltEXVVkplPO_xakqp5koEScluOhA&usqp=CAU" title="artwork" text="This is fancy artwork"/><Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvIu34BltEXVVkplPO_xakqp5koEScluOhA&usqp=CAU" title="artwork" text="This is fancy artwork"/><Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvIu34BltEXVVkplPO_xakqp5koEScluOhA&usqp=CAU" title="artwork" text="This is fancy artwork"/><Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvIu34BltEXVVkplPO_xakqp5koEScluOhA&usqp=CAU" title="artwork" text="This is fancy artwork"/><Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvIu34BltEXVVkplPO_xakqp5koEScluOhA&usqp=CAU" title="artwork" text="This is fancy artwork"/><Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvIu34BltEXVVkplPO_xakqp5koEScluOhA&usqp=CAU" title="artwork" text="This is fancy artwork"/><Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvIu34BltEXVVkplPO_xakqp5koEScluOhA&usqp=CAU" title="artwork" text="This is fancy artwork"/><Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvIu34BltEXVVkplPO_xakqp5koEScluOhA&usqp=CAU" title="artwork" text="This is fancy artwork"/><Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvIu34BltEXVVkplPO_xakqp5koEScluOhA&usqp=CAU" title="artwork" text="This is fancy artwork"/><Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvIu34BltEXVVkplPO_xakqp5koEScluOhA&usqp=CAU" title="artwork" text="This is fancy artwork"/><Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvIu34BltEXVVkplPO_xakqp5koEScluOhA&usqp=CAU" title="artwork" text="This is fancy artwork"/>
    </div>
  );


}

export default App;
