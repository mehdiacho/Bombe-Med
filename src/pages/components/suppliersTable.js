import React, { useState, useEffect } from "react";

const SuppliersTable = () => {
  const [medicineData, setMedicineData] = useState([]);

  useEffect(() => {
    // Fetch data from Firebase to update the medicineData state.
    const mockMedicineData = [
      {
        id: 1,
        name: "Medicine 1",
        quantity: 10,
        status: "Available",
        expiryDate: "2023-12-31",
        dateOfExpectedBatch: "2023-11-30",
      },

      {
        id: 2,
        name: "Medicine 2",
        quantity: 5,
        status: "Available",
        expiryDate: "2023-10-15",
        dateOfExpectedBatch: "2023-11-25",
      },
    ];

    setMedicineData(mockMedicineData);
  }, []);

  const handleEdit = (id) => {
    console.log(`Edit medicine with ID ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete medicine with ID ${id}`);
  };

  return (
    <div className="container-fluid">
        <form className="d-flex mt-3" role="search">
        <input className="form-control me-2" type="search" placeholder="search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        <div className="table-responsive">
      <table className="table table-bordered">
        
        <thead>
            <td></td>
          <tr>
            <th>Supplier Names</th>
            <th>Contacts</th>
            <th>Products</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {medicineData.map((medicine) => (
            <tr key={medicine.id}>
              <td>{medicine.name}</td>
              <td>{medicine.type}</td>
              <td>{medicine.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    
  );
};

export default SuppliersTable;
