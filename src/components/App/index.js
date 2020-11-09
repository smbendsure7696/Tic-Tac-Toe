import React from 'react';
import './style.css';
import GridRow from '../GridRow';
import Header from '../Header';
import Footer from '../Footer';
export default class App extends React.Component
{
  render()  {
    return (<div class="container">
     <Header /> 
    <div id="board">
        <GridRow />
        <GridRow />
        <GridRow />
    </div>
    <Footer />
</div> );
  }
}

//export default App;
