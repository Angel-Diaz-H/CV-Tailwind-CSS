import {
  Capacitaciones,
  Educacion,
  ExperienciaProfesional,
  ResumenProfesional,
  TecnologiasHabilidades,
} from "./components";

export const Content = () => {
  return (
    <div className="space-y-5 text-justify">
      <ResumenProfesional />
      <ExperienciaProfesional />
      <Educacion />
      <div className="grid grid-cols-1 space-y-5 space-x-5 text-justify sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <Capacitaciones />
        <TecnologiasHabilidades />
      </div>
    </div>
  );
};
