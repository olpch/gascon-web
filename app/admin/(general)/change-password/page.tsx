"use client";

import { useState } from "react";
import { Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
import Alert from "@/app/components/alert/alert";
import { toast } from "sonner";
import { useAdminContext } from "@/app/providers/admin-context";


export default function ChangePassword() {

  const defaultcheckPassword = { current: false, isDirty: false };

  const { setIsAdminLoading } = useAdminContext();
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkPassword, setcheckPassword] = useState(defaultcheckPassword);

  function handleSave() {
    setcheckPassword(defaultcheckPassword);
    const validCurrentPassword = currentPassword.length > 0;
    const validNewPassword = newPassword.length > 7;
    const validConfirmPassword = newPassword === confirmPassword;

    if (validCurrentPassword && validNewPassword && validConfirmPassword) {
      setIsAdminLoading(true);
      console.log({
        currentPassword,
        newPassword,
        confirmPassword,
      });
    } else {

      setcheckPassword({ current: currentPassword.length === 0, isDirty: true });
      toast.warning('Valide los datos de las contraseñas.');
    }

  }

  const textErrorLabel = (sw: boolean, customClass = 'hidden') => {
    return sw ? 'text-red-500' : customClass;
  }

  const newPasswordErrors = () => {

    if (checkPassword.isDirty && newPassword.length === 0) {
      return (<p className="text-red-500">
        <span className="font-nerd mr-2"></span> Verifique la contraseña actual!
      </p>);
    }
    if ((newPassword.length >= 1) && (newPassword.length < 8)) {
      return (<p className="text-red-500">
        <span className="font-nerd mr-2"></span> Faltan {8 - newPassword.length} caracteres.
      </p>);

    }

    return null;
  }

  const confirmPasswordErrors = () => {
    return (confirmPassword.length > 0) && (newPassword !== confirmPassword);
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8 mt-15">
      <Alert
        title="Seguridad"
        description="Cambia la contraseña utilizada para acceder al panel administrativo."
        variant="info"
      />

      <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">
        <div className="mb-8 flex items-center gap-4">
          <div className="rounded-xl bg-indigo-500/10 p-3">
            <Lock className="h-6 w-6 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">
              Cambio de contraseña
            </h2>
            <p className="text-sm text-slate-400">
              Mantén tu cuenta protegida utilizando una contraseña segura.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <PasswordInput
            label="Contraseña actual"
            value={currentPassword}
            onChange={setCurrentPassword}
            visible={showCurrent}
            isDanger={checkPassword.current}
            onToggle={() => setShowCurrent(!showCurrent)}
          />
          <p className={textErrorLabel(checkPassword.current)}>
            <span className="font-nerd mr-2"></span>
            {
              currentPassword.length === 0
                ? 'La Contraseña no puede ser vacia'
                : 'Valide la contraseña actual.'
            }
          </p>
          <PasswordInput
            label="Nueva contraseña"
            value={newPassword}
            onChange={setNewPassword}
            visible={showNew}
            isDanger={Boolean(newPasswordErrors())}
            onToggle={() => setShowNew(!showNew)}
          />
          {newPasswordErrors()}
          <PasswordInput
            label="Confirmar contraseña"
            value={confirmPassword}
            onChange={setConfirmPassword}
            visible={showConfirm}
            isDanger={confirmPasswordErrors()}
            onToggle={() => setShowConfirm(!showConfirm)}
          />
          <p className={textErrorLabel(confirmPasswordErrors())}>
            <span className="font-nerd mr-2"></span>
            Contraseña no coinciden
          </p>
        </div>

        <div className="my-8 border-t border-white/10" />

        <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-5">

          <div className="mb-4 flex items-center gap-3">

            <ShieldCheck className="h-5 w-5 text-emerald-400" />

            <h3 className="font-medium text-white">
              Requisitos de seguridad
            </h3>

          </div>

          <ul className="space-y-2 text-sm text-slate-300">

            <li>• Mínimo 8 caracteres</li>
            <li>• Al menos un número</li>
            <li>• Al menos una letra mayúscula</li>
            <li>• Al menos un carácter especial</li>
          </ul>

        </div>

        <div className="mt-8 flex justify-end">

          <button
            onClick={handleSave}
            className="
                            cursor-pointer
                            rounded-xl
                            bg-indigo-600
                            px-6
                            py-3
                            font-medium
                            text-white
                            transition
                            hover:bg-indigo-500
                        "
          >
            Cambiar contraseña
          </button>

        </div>

      </div>

    </div>
  );

}

interface PasswordInputProps {
  label: string;
  value: string;
  visible: boolean;
  isDanger?: boolean;
  onToggle: () => void;
  onChange: (value: string) => void;
}

function PasswordInput({
  label,
  value,
  onChange,
  visible,
  isDanger = false,
  onToggle,
}: PasswordInputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-300">
        {label}
      </label>
      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          value={value}
          minLength={8}
          maxLength={15}
          onChange={(e) => onChange(e.target.value)}
          className={`
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-white/10
                        bg-slate-950
                        px-4
                        pr-12
                        text-white
                        outline-none
                        transition
                        focus:border-indigo-500
                        ${isDanger && 'border-red-900!'}
                    `}
        />

        <button
          type="button"
          onClick={onToggle}
          className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        cursor-pointer
                        text-slate-500
                        hover:text-white
                    ">
          {visible
            ? <EyeOff size={18} />
            : <Eye size={18} />
          }
        </button>
      </div>
    </div>
  );

}