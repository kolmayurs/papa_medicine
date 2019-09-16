import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {  "medicine": [
    { "name":"Amlodipine 5mg", "qty":[ 1, 0, 1 ] },
    { "name":"Geoglim M1", "qty":[ 1, 0, 0 ]},
    { "name":"Voglibose 0.3mg", "qty":[ 0, 1, 0 ]},
    { "name":"Levipil 500mg", "qty":[ 0.5, 0, 1 ]},
    { "name":"Avorvastatin 20mg", "qty":[ 0, 0, 2 ]},
    { "name":"Urimax 0.4mg", "qty":[ 0, 0, 1 ]},
    { "name":"Calcium + ViT D3", "qty":[ 0, 1, 0 ]},
    { "name":"Bcomplex", "qty":[ 1, 0, 1 ]},
    { "name":"Rantac 150mg", "qty":[ 1, 0, 1 ]},
    { "name":"Folic acid 5mg", "qty":[ 1, 0, 0 ]},
  ]}
  }
  render(){
    var today = new Date();
  let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    const data_morning = this.state.medicine.map((items,i) => {
      if(items.qty[0] !== 0){
        return(<div className="item">
        <input type="checkbox" />
          <label for="">{items.name}</label>
          <span>{items.qty[0]}</span>
        </div>);
      }  
    });
    const data_afternoon = this.state.medicine.map((items,i) => {
      if(items.qty[1] !== 0){
        return(<div className="item">
        <input type="checkbox" />
          <label for="">{items.name}</label>
          <span>{items.qty[1]}</span>
        </div>);
      }  
    });
    const data_evening = this.state.medicine.map((items,i) => {
      if(items.qty[2] !== 0){
        return(<div className="item">
        <input type="checkbox" />
          <label for="">{items.name}</label>
          <span>{items.qty[2]}</span>
        </div>);
      }  
    });
    return (
    <div className="main-container">
      <div className="header">{date}</div>
      <div className="medicine-container">
        <div className="medicine-interval">Morning</div>
        <div class="list-item">
        {data_morning}
        </div>
        <div className="medicine-interval">Afternoon</div>
        <div class="list-item">
        {data_afternoon}
        </div>
        <div className="medicine-interval">Evening</div>
        <div class="list-item">
        {data_evening}
        </div>
      </div>
    </div>
  );
  }
  
}

export default App;