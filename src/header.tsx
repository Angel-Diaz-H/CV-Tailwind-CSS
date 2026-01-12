import { DatosContacto } from "./components/DatosContacto";
export const Header = () => {
  return (
    <header className="top-0 grid grid-cols-6 items-center gap-5">
      <img
        className="col-span-1 mx-auto aspect-square w-full max-w-30 rounded-full bg-amber-500 object-cover text-center"
        src="path/to/image.jpg"
        alt="Angel Díaz"
      />
      <div className="col-span-5 space-y-1">
        <h1 className="text-2xl">Angel Ignacio Díaz Hernández.</h1>
        <p className="mb-5 text-xl">
          Administrador de Bases de Datos Junior | Estudiante en TI.
        </p>
        <DatosContacto />
      </div>
    </header>
  );
};
