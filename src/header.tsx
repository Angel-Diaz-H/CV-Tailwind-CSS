import { DatosContacto } from "./components/DatosContacto";
export const Header = () => {
  return (
    <header className="top-0 grid grid-cols-1 items-center space-y-1 sm:grid-cols-1 md:grid-cols-6 md:gap-5 md:pb-3 lg:grid-cols-6 lg:gap-5 lg:pb-3 xl:grid-cols-6 xl:gap-5 xl:pb-3">
      <img
        className="col-span-1 mx-auto aspect-square w-full max-w-30 rounded-full bg-sky-500 object-cover text-center"
        src="/angel.png"
        alt="Angel Díaz"
      />
      <div className="col-span-5 space-y-1">
        <h1 className="mb-1 text-center sm:text-center md:text-left lg:text-left xl:text-left">
          Angel Ignacio Díaz Hernández.
        </h1>
        <p className="mb-3 text-center sm:text-center sm:text-lg md:text-left md:text-xl lg:text-left lg:text-xl xl:text-left xl:text-xl">
          Administrador de Bases de Datos Junior | Estudiante en TI.
        </p>
        <DatosContacto />
      </div>
    </header>
  );
};
