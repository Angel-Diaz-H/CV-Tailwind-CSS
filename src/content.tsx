import {
  Capacitaciones,
  Educacion,
  ExperienciaProfesional,
  ResumenProfesional,
  TecnologiasHabilidades,
} from "./components";

export const Content = () => {
  return (
    <>
      <ResumenProfesional />
      <ExperienciaProfesional />
      <Educacion />
      <Capacitaciones />
      <TecnologiasHabilidades />
    </>
  );
};
