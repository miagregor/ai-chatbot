import { useState } from "react";
import { ChatRole } from "../components/chat/interface";

export interface Persona {
  id?: string
  role: ChatRole
  avatar?: string
  name?: string
  prompt?: string
  key?: string
  isDefault?: boolean
}

export const usePersona = () => {
  const [persona, setPersona] = useState<Persona>();
  const onGetPersona = () => {
    setPersona({ id: "123", name: "Test Persona", role: "user" });
    localStorage.setItem("persona", JSON.stringify(persona));
  };

  return { persona, onGetPersona };
};
