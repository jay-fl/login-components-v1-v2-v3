import React from "react";

const Loginv2 = () => {
  return (
    <div className="register min-h-screen rounded-lg">
      <div className="p-2 md:p-8 ">
        <div className="flex flex-col p-8">
          <div>
            <h1 className="text-white text-2xl font-medium mb-16">
              JS Developer
            </h1>
          </div>
          <div>
            <h5 className="uppercase text-sm text-gray-500 font-bold mt-14 mb-2">
              Ingresa a la plataforma
            </h5>
            <h1 className="text-6xl text-white font-medium">
              Inicia sesion<span className="text-[#06B6D4]">.</span>
            </h1>
            <p className="text-md text-gray-500 mt-2 font-medium mb-8">
              ¿No eres usuario?{" "}
              <a href="#" className="text-[#06B6D4] font-bold hover:underline">
                Registrate
              </a>
            </p>
          </div>
          <form className="flex flex-col gap-4">
            <div className="max-w-lg">
              <input
                type="email"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 "
                placeholder="Correo electronico"
              />
            </div>
            <div className="max-w-lg">
              <input
                type="password"
                autoComplete="off"
                className="w-full  py-3 px-4 rounded-xl outline-none bg-[#343434]  text-gray-100"
                placeholder="Contraseña"
              />
            </div>
            <div className="flex max-w-lg justify-center md:justify-end">
              <a
                href="#"
                className="text-md text-gray-500 mt-1 hover:text-gray-300 font-medium "
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="max-w-lg mt-2">
              <button className="w-full  py-3 px-4 rounded-3xl text-white bg-cyan-600 hover:bg-cyan-700">Iniciar sesion</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginv2;
