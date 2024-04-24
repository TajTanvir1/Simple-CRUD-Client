import './App.css'

function App() {

  const handleAddUser = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user);

  }

  return (
    <>
      <h1>Simple Crud</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name='name' />
        <br />
        <input type="email" name='email' />
        <br />
        <input type="submit" value='Add User' />
      </form>
    </>
  )
}

export default App