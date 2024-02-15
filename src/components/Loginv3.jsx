import React from "react";
/** Iconos */
import { RiGoogleFill } from "react-icons/ri";

const Loginv3 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="flex flex-col items-center justify-center bg-[#F3F4F6]">
        <div className="mb-8">
          <img src="logo.png" alt="logo image" width="100" height="100" />
        </div>
        <div className="mb-6">
          <h1 className="text-4xl font-bold">Bienvenido</h1>
        </div>
        <div className="relative mb-12">
          <button className="bg-[#E5E7EB] rounded-lg py-2 pl-10 pr-4 ml-2 text-gray-700">
            Iniciar sesion con Google
            <RiGoogleFill className="w-4 h4 absolute left-4 mr-2 top-[50%] -translate-y-[50%] ml-2" />
          </button>
        </div>
        <div>
          <p className="text-center relative text-gray-500 bg-gray-100 before:max-w-[50px] md:before:max-w-[120px] before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%] after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] after:-right-[60px] md:after:-right-[140px]">
            Ingresa con tu email
          </p>
        </div>
        <div className="w-full mt-12 p-4">
          <form>
            <div className="flex justify-center mb-4">
              <input
                type="email"
                autoComplete="off"
                className="w-full max-w-md border py-2 px-4 rounded-md outline-none"
                placeholder="Correo electrónico"
              />
            </div>
            <div className="flex justify-center mb-6">
              <input
                type="password"
                autoComplete="off"
                className="w-full max-w-md border py-2 px-4 rounded-md outline-none"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-center gap-16 md:gap-40 mb-6">
              <div className="">
                <input type="checkbox" className="mr-1"/>
                <label htmlFor="remember" className="text-gray-500">Recordarme</label>
              </div>
              <div>
                <a href="#" className="text-gray-500 hover:underline hover:text-gray-900 transition-all">¿Olvidaste tu password?</a>
              </div>
            </div>
            <div className="flex justify-center ">
              <button className="w-full bg-gray-200 p-2 max-w-md rounded-lg">
                Iniciar sesion
              </button>
            </div>
            <div className="flex justify-center mt-8">
              <p className="text-gray-500">
                ¿No tienes cuenta? <a href="#" className="text-gray-700 hover:underline hover:text-gray-900 transition-all">Registrate</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center border-t border-r border-b rounded-tr-lg rounded-br-lg">
        <img
          src="https://img.freepik.com/vector-gratis/ilustracion-concepto-inicio-sesion_114360-739.jpg"
          alt="login image"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Loginv3;
