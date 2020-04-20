import React from 'react';
import { useParams } from "react-router-dom";
import '../styles/customer-details.css';
function CustomerDetailsPage() {
  let { employeeId } = useParams();
  let customerDetail;

  (function () {
    customerDetail = JSON.parse(localStorage.getItem('customerDetail'));
  })();

  const getCustomeraddress = () => {
    if (customerDetail[employeeId].addresses && customerDetail[employeeId].addresses.length) {
      return customerDetail[employeeId].addresses.map((address, index) => {
        return (
          <p className="address-container" key={index}>{address}</p>
        )
      })
    } else {
      return <p>No Address found</p>
    }
  }

  return (
    <div className="customer-detail-page">
      <h2>Customer Detail page</h2>
      <h4>{customerDetail[employeeId]['name']}</h4>
      <div className="address-box">
        <p className="address-text">Your Adresses-</p>
        {getCustomeraddress()}
      </div>
    </div>
  );
}

export default CustomerDetailsPage;