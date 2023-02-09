import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Dropdown.css'
import { Button } from 'bootstrap';

const Districts = [
  { label: "Nagpur", value: 1},
  { label: "Kolhapur", value: 2 },
  { label: "Nashik", value: 3 },
  { label: "Pune", value: 4 },
  { label: "Kolhapur", value: 5 },
  { label: "Sangli", value: 6 },
  { label: "Yawatmal", value: 7 },
  { label: "Usmanabad", value: 8 },
  { label: "Satara", value: 9 },
  { label: "Latur", value: 10 },
  { label: "Gadchiroli", value: 11 },
  { label: "Beed", value: 12 },
  { label: "Raigarh", value: 13 },
  { label: "Ratnagiri", value: 14 },
  { label: "Washim", value: 15},
  { label: "Palghar", value: 16 },
  { label: "Thane", value: 17 },
  { label: "Solapur", value: 18 },
  { label: "Parbhani", value: 19 },
  { label: "Akola", value: 20 },
  { label: "Bhandara", value: 21 },
  { label: "Gondiya", value: 22 },
  { label: "Mumbai", value: 23 },
  { label: "Sindhudurg", value: 24 },
  { label: "Nandurbar", value: 25 },
  { label: "Amravati", value: 26 },
  { label: "Ahaandnagar", value: 27 },
  { label: "Aourangabad", value: 28 }

];


const Taluk = [
  { label: "Jat", value: 1},
  { label: "Atpadi", value: 2 },
  { label: "Sangola", value: 3 },
  { label: "Miraj", value: 4 },
  { label: "Kagal", value: 5 },
  { label: "K_Mahankal", value: 6 },
  { label: "Karjat", value: 7 },
  { label: "Shirala", value: 8 },
  { label: "Mangalveda", value: 9 }

];

const Village = [
  { label: "Ankale", value: 1},
  { label: "Baj", value: 2 },
  { label: "Dhalgaon", value: 3 },
  { label: "Paral", value: 4 },
  { label: "Daflapur", value: 5 },
  { label: "Nagaj", value: 6 },
  { label: "Chorochi", value: 7 },
  { label: "Belunkhi", value: 8 },
  { label: "Hivre", value: 9 },
  { label: "Dorli", value: 10 },
  

];




class Dropdown extends Component {
  render() {
    return (
      <>


<div class="grid-container">
  <div>
    
    <h4 çlassName ='DistLable' style={{color:'green', textAlign:'center'}}> Select District : </h4 >  



<Select options={Districts} />
</div>


  <div>
    
    <h4 çlassName ='DistLable' style={{color:'green', textAlign:'center'}}> Select Taluk : 
         
         </h4 >  
         
    <Select options={Taluk} />
  </div>


  <div><h4 çlassName ='DistLable' style={{color:'green', textAlign:'center'}}> Select Village : 
         
         </h4 >  
         
         <Select options={Village} />
         
  </div>  
 
 
</div>




</>
    );
  }
}
export default Dropdown;