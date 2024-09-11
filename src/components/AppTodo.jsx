function AppTodo(){ 
  return (
    <div class="container text-center">
    <div class="row Ad-row">
  <div class="col-6">
   <input type="text" placeholder="Enter todo Here"></input>

  </div>
    <div class="col-4">
      <input type="date" />
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success Ad-btn Ad-sz">Add</button>
    </div>
  </div>
  </div>
  );
}

export default AppTodo;