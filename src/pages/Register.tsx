
const Register = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
  <form method="post">
    <div className="box-content flex w-[500px] flex-col rounded-xl bg-white px-10 py-8 shadow-2xl">
      <span className="mb-4 block text-3xl font-bold">Create account</span>
      <div className="flex space-x-2">
        <div className="mb-4 flex-1">
          <label htmlFor="email" className="mb-1 block">First name</label>
          <input type="email" id="email" className="block h-10 w-full rounded-md border border-solid border-slate-300 px-2 shadow-sm outline-none" />
        </div>
        <div className="mb-4 flex-1">
          <label htmlFor="email" className="mb-1 block">Surname</label>
          <input type="email" id="email" className="block h-10 w-full rounded-md border border-solid border-slate-300 px-2 shadow-sm outline-none" />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="mb-1 block">Email</label>
        <input type="password" id="password" className="right-1 block h-10 w-full rounded-md border border-solid border-slate-300 px-2 shadow-sm outline-none" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="mb-1 block">Password</label>
        <input type="password" id="password" className="right-1 block h-10 w-full rounded-md border border-solid border-slate-300 px-2 shadow-sm outline-none" />
      </div>
      <div className="mb-4">
        <span dir="ltr" className="mb-1 block">Gender</span>
        <div className="flex space-x-2">
          <span className="inline-block flex-shrink-0 flex-grow select-none rounded border border-solid border-slate-300 text-center leading-10">
            <label htmlFor="male" className="mr-1">Male</label>
            <input type="radio" name="sex" id="male" value="male" />
          </span>
          <span className="inline-block flex-shrink-0 flex-grow select-none rounded border border-solid border-slate-300 text-center leading-10">
            <label htmlFor="female" className="mr-1">Female</label>
            <input type="radio" name="sex" id="male" value="female" />
          </span>
          <span className="inline-block flex-shrink-0 flex-grow select-none rounded border border-solid border-slate-300 text-center leading-10">
            <label htmlFor="other" className="mr-1">Others</label>
            <input type="radio" name="sex" id="other" value="other" />
          </span>
        </div>
      </div>
      <div className="mb-4">
        <span className="mb-1 block" dir="ltr">Date of birth</span>
        <div className="flex space-x-2">
          <span className="inline-block flex-1">
            <select className="block h-10 w-full rounded border border-solid border-slate-300 px-4">
              <option value="-1" disabled selected>Day</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </span>
          <span className="inline-block flex-1">
            <select className="block h-10 w-full rounded border border-solid border-slate-300 px-4">
              <option value="-1" disabled selected>Month</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </span>
          <span className="inline-block flex-1">
            <select className="block h-10 w-full rounded border border-solid border-slate-300 px-4">
              <option value="-1" disabled selected>Year</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </span>
        </div>
      </div>
      <button type="submit" className="flex h-10 select-none items-center justify-center rounded-full bg-blue-600 px-4 font-semibold text-white">Register</button>
      <div className="mt-10">
        <span className="block" dir="ltr">Already have an account? <a href="#" className="font-semibold text-blue-500">Sign in</a></span>
      </div>
    </div>
  </form>
</div>
  )
}

export default Register
