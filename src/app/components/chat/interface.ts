import { Persona } from "@/app/hooks/usePersona"

export interface ChatMessage {
    id: string | number
    content: string
    role: ChatRole
    sources: string[];
  }

  export interface ChatInterface {
    id: string
    persona?: Persona
    messages?: ChatMessage[]
  }

  export type ChatRole = "ai" | "user" | "system";
