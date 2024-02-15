import { RiMailLine, RiLockLine } from "react-icons/ri";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#F2F4FE] flex items-center justify-center p-4">
    <div className="max-w-lg">
      <div className="flex justify-center mb-8">
        <img src="/logo.png" width="50" height="50" />
      </div>
      <div className="bg-white w-full rounded-lg p-8 mb-8">
        <div className="flex flex-col items-center gap-1 mb-8">
          <h1 className="text-xl text-gray-900">Bienvenido</h1>
          <p className="text-gray-400 text-sm">
            Ingresa con tu correo electrónico y tu contraseña
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <div className="relative">
            <input
              type="email"
              className="w-full border py-2 px-10 rounded-md outline-none"
              placeholder="Ingresa tu correo"
            />
            <RiMailLine className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-blue-400"/>
          </div>
          <div className="relative">
            <input
              type="password"
              className="w-full border py-2 px-10 rounded-md outline-none"
              placeholder="Ingresa tu contraseña"
            />
            <RiLockLine className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-blue-400"/>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
      <span className="flex items-center justify-center gap-2">
        ¿Olvidaste tu contraseña?{" "}
        <a href="#" className="text-blue-500">
          Recuperar
        </a>
      </span>
    </div>
  </div>
  )
}

export default Login