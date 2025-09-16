import { toast } from "react-toastify";

export function ToastAlerta(mensagem: string, tipo: "sucesso" | "erro" = "sucesso") {
  if (tipo === "sucesso") {
    toast.success(mensagem);
  } else {
    toast.error(mensagem);
  }
}
