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
      <Capacitaciones />
      <TecnologiasHabilidades />
    </div>
  );
};
