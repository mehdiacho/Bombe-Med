const Batch = () => {

return(
    <div className="container-fluid">
<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputMedicineName">Medicine Name</label>
      <input type="text" class="form-control" id="inputMedicineName" placeholder=""/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputGenericName">Generic Name</label>
      <input type="text" class="form-control" id="inputGenericName" placeholder=""/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputBatchNumber">Batch Number</label>
    <input type="text" class="form-control" id="inputBatchNumber" placeholder=""/>
  </div>
  <div class="form-group">
    <label for="inputBrandName">Brand Name</label>
    <input type="text" class="form-control" id="inputBrandName" placeholder=""/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Quantity </label>
      <input type="text" class="form-control" id="inputCategory"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Category</label>
      <select id="inputState" class="form-control">
        <option selected></option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Expiry Date</label>
      <input type="date" class="form-control" id="inputDate"/>
    </div>
  </div>
  <div class="form-group col-md-2">
    <div class="form-check">
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
);
}

export default Batch;