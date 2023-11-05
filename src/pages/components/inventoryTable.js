import React, { useState, useEffect } from 'react';


const InventoryTable = () => {
  const [medicineData, setMedicineData] = useState([]);

  useEffect(() => {
    // Fetch data from Firebase to update the medicineData state.
    const mockMedicineData = [
      {
        id: 1,
        name: 'Medicine 1',
        quantity: 10,
        status: 'Available',
        expiryDate: '2023-12-31',
        dateOfExpectedBatch: '2023-11-30',
      },
      {
        id: 2,
        name: 'Medicine 2',
        quantity: 5,
        status: 'Available',
        expiryDate: '2023-10-15',
        dateOfExpectedBatch: '2023-11-25',
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
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Medicine name</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Expiry Date</th>
            <th>Date of Expected Batch</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicineData.map((medicine) => (
            <tr key={medicine.id}>
              <td>{medicine.name}</td>
              <td>{medicine.quantity}</td>
              <td>{medicine.status}</td>
              <td>{medicine.expiryDate}</td>
              <td>{medicine.dateOfExpectedBatch}</td>
              <td>
                <button className='btn btn-warning m-2' onClick={() => handleEdit(medicine.id)}>Edit</button>
                <button className='btn btn-primary' onClick={() => handleDelete(medicine.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
