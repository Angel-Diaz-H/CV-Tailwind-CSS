import { House, Mail, Phone } from "lucide-react";
import { ContactLi } from "./contact/ContactLi";
import { GithubIcon, LinkedinIcon } from "./icons";

export const DatosContacto = () => {
  return (
    <ul className="grid grid-cols-1 space-y-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      <ContactLi
        Icon={House}
        iconFill={false}
        children="General Escobedo, Nuevo León"
        copyValue="General Escobedo, Nuevo León"
        openInNewTab={false}
      />
      <ContactLi
        Icon={Phone}
        iconFill={true}
        children="8124263360"
        copyValue="8124263360"
        openInNewTab={false}
      />
      <ContactLi
        Icon={Mail}
        iconFill={false}
        children="angeldiaz.hrn@gmail.com"
        href="mailto:angeldiaz.hrn@gmail.com"
        copyValue="angeldiaz.hrn@gmail.com"
      />
      <ContactLi
        Icon={LinkedinIcon}
        iconFill={true}
        children="angeldiaz-hrn"
        href="https://www.linkedin.com/in/angel-diaz-hrn/"
        copyValue="https://www.linkedin.com/in/angel-diaz-hrn/"
        openInNewTab={true}
      />
      <ContactLi
        Icon={GithubIcon}
        iconFill={true}
        children="Angel-Diaz-H"
        href="https://github.com/Angel-Diaz-H"
        copyValue="https://github.com/Angel-Diaz-H"
        openInNewTab={true}
      />
    </ul>
  );
};
