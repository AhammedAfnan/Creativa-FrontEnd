const Login = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <form method="post">
        <div className="box-content flex w-[450px] flex-col shadow-2xl bg-white rounded-xl px-10 py-8">
          <span className="mb-4 block text-3xl font-bold">Sign in</span>
          <div
            className="mb-4"
          >
            <label htmlFor="email" className="mb-1 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block h-12 w-full rounded-md border border-solid border-slate-300 px-3 shadow-sm outline-none "
            />
          <span className="block text-sm font-medium text-red-500 mt-1 px-3" dir="ltr">Email is required</span>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="mb-1 block">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block h-12 w-full rounded-md border border-solid border-slate-300 px-3 shadow-sm outline-none"
            />
            <span className="block text-sm font-medium text-red-500 mt-1 px-3" dir="ltr">Password is required</span>
          </div>
          <button
            type="submit"
            className="flex h-10 select-none items-center justify-center rounded-full bg-blue-600 px-4 font-semibold text-white"
          >
            Login
          </button>
          <div className="mt-10">
        <span className="block" dir="ltr">Don't have an account? <a href="#" className="font-semibold text-blue-500">Create now</a></span>
      </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
