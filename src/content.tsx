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
      <div className="grid grid-cols-2 space-x-5">
        <Capacitaciones />
        <TecnologiasHabilidades />
      </div>
    </div>
  );
};
