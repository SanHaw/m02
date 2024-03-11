import Navbar from './Navbar'

const startingPage = () => {
  return (
    <div className="text-center">
      <div className="h-100">
        <p></p>
      </div>
      <div className="m-4">
        <h1>Employee Management System</h1>
      </div>
      <div className="m-4">
        <h2>SAI Group</h2>
        <p>
          <Image
              src='/logo.png'
              alt='logo'
              width={150}
              height={100}
              className='bg-center-top'
          />
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <a href="/new-employee" className="mx-5 hover:text-blue400 self-center justify-self-center">Employee</a>
            <a href="/assign-designation" className="mx-5 hover:text-blue400 self-center justify-self-center">Assign Designation</a>
            <a href="/department" className="mx-5 hover:text-blue400 self-center justify-self-center">Department</a>
            <a href="/designation" className="mx-5 hover:text-blue400 self-center justify-self-center">Designation</a>
          </div>
        </p>
      </div>
      <div className="m-4">
        <p>Haw  |  Lo  |  Mejorada</p>
      </div>
    </div>
  )
}

export default startingPage

//logo, navbar, and buttons (could also be placed on the navbar) to newEmployees, 
//assignDesgination, designation, and department
