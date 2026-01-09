import { House, Mail, Phone } from "lucide-react";
import { ContactLi } from "./contact/ContactLi";

export const DatosContacto = () => {
  return (
    <ul>
      <ContactLi
        Icon={House}
        iconFill={false}
        children="General Escobedo, Nuevo León"
        openInNewTab={false}
      />

      <ContactLi
        Icon={Phone}
        iconFill={false}
        children="8124263360"
        openInNewTab={false}
      />

      <ContactLi
        Icon={Mail}
        iconFill={false}
        children="angeldiaz.hrn@gmail.com"
        href="mailto:angeldiaz.hrn@gmail.com"
      />
    </ul>
  );
};
