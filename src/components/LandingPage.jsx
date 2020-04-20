import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import '../styles/landing-page.css';
import Table from './Table'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      employeeId: '',
      employeeList: [{
        name: 'Ravi Gupta',
        employeeId: 101,
        sex: 'Male',
        age: 29
      },
      {
        name: 'Dinesh Sharma',
        employeeId: 102,
        sex: 'Male',
        age: 27
      },
      {
        name: 'Ajay Dangi',
        employeeId: 103,
        sex: 'Male',
        age: 32
      }, {
        name: 'Isha Gupta',
        employeeId: 104,
        sex: 'Female',
        age: 25
      }, {
        name: 'Ranu Sharma',
        employeeId: 105,
        sex: 'Female',
        age: 26
      }, {
        name: 'Pawan Jain',
        employeeId: 106,
        sex: 'Male',
        age: 31
      }, {
        name: 'Ashita Choudhary',
        employeeId: 107,
        sex: 'Female',
        age: 32
      }, {
        name: 'Ghanshyam Das',
        employeeId: 108,
        sex: 'Male',
        age: 29
      }, {
        name: 'Shanu Trivedi',
        employeeId: 109,
        sex: 'Female',
        age: 25
      }, {
        name: 'Ashish Jain',
        employeeId: 110,
        sex: 'Male',
        age: 29
      }],
      customerDetail: {
        101: {
          name: 'Ravi Gupta',
          addresses: ['NO.55, 4TH B Cross, Behind inter model caste Kodihalli main road',
            'NO.55, 4TH B Cross, Behind inter model caste Kodihalli main road',
          ]
        },
        102: {
          name: 'Dinesh Sharma',
          addresses: []
        },
        103: {
          name: 'Ajay Dangi',
          addresses: ['NO.55, 4TH B Cross, Behind inter model caste Kodihalli main road',
            'NO.55, 4TH B Cross, Behind inter model caste Kodihalli main road',
          ]
        },
        104: {
          name: 'Isha Gupta',
          addresses: ['NO.55, 4TH B Cross, Behind inter model caste Kodihalli main road',
            'NO.55, 4TH B Cross, Behind inter model caste Kodihalli main road',
          ]
        },
        105: {
          name: 'Ranu Sharma',
          addresses: ['NO.55, 4TH B Cross, Behind inter model caste Kodihalli main road',
            'NO.55, 4TH B Cross, Behind inter model caste Kodihalli main road',
          ]
        },
        106: {
          name: 'Pawan Jain',
          addresses: ['NO.55, 4TH B Cross, Behind inter model caste Kodihalli main road',
            'NO.55, 4TH B Cross, Behind inter model caste Kodihalli main road',
          ]
        },
        107: {
          name: 'Ashita Choudhary',
          addresses: ['NO.41, 4TH B Cross, Behind inter model caste Kodihalli main road',
            'NO.95, 4TH B Cross, Behind inter model caste Kodihalli main road',
          ]
        },
        108: {
          name: 'Ghanshyam Das',
          addresses: ['NO.55, 4TH B Cross, Behind inter model caste Kodihalli main road',
            'NO.95, 4TH B Cross, Behind inter model caste Kodihalli main road',
          ]
        },
        109: {
          name: 'Shanu Trivedi',
          addresses: ['NO.111, 9TH C Cross,  HAL main road'
          ]
        },
        110: {
          name: 'Ashish Jain',
          addresses: ['NO.91, 4TH D Cross,  Kodihalli main road',
            'NO.90, 4TH C Cross,  Kodihalli main road',
          ]
        }
      }
      
    }
  }

  componentDidMount(){
    console.log('this.state.customerDetail', this.state.customerDetail);
    localStorage.setItem('customerDetail', JSON.stringify(this.state.customerDetail));
  }
  
  showEmployeeDetail = (employeeId) =>{
    this.setState({redirect: true, employeeId});
  }

  getTabledata (){
    return this.state.employeeList.map((item , index)=>{
      return (
        <tr key={index} onClick={()=>this.showEmployeeDetail(item.employeeId)}>
          <td>{item.employeeId}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.sex}</td>
        </tr>
      )
    })
  }

    render(){
      const { redirect } = this.state;
     if (redirect) {
       return <Redirect to={`/employee/${this.state.employeeId}`} />;
     }
      return (
        <div className="landing-page-container">
          <h3>Conviva Dashboard</h3>
          <Table columnNames={['Employee Id', 'Name', 'Age', 'Sex']} tableData={this.getTabledata()} />
        </div>
      );
    }
}

export default LandingPage;