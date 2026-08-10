"use client";

import { motion } from "motion/react";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { login } from "@/app/services/auth";
import { CurrentUser, UserAuth } from '../../lib/models';
import { setLocalUser } from "@/app/services/global-config";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error401, setError401] = useState<boolean>(false);
  const router = useRouter();
  
  const [form, setForm] = useState<UserAuth>({
    email: 'hello@gasconarchitecture.com',
    pwd: '12348765'
  });

  const updateField = <K extends keyof UserAuth>(
      field: K,
      value: UserAuth[K]
    ) => {
      setForm((prev) => ({
        ...prev,
        [field]: value,
      }));
    };
  
  const handleSubmit = (userForm: UserAuth) => {
    setError401(false);
    login(userForm)
      .then((remoteUser: CurrentUser) => {
        setLocalUser(remoteUser)
        router.replace('/admin/general');
      })
      .catch((error) => {
        console.error({error})
        setError401(true)}
      );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[180px]" />
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="mb-14 text-center">
          <Image src="/imgs/logo_w.png" width={550} height={165} alt="gascon logo"/>
        </div>

        {/* Welcome */}

        <div className="mb-10">

          <h2 className="text-3xl font-semibold text-white">
            Bienvenido
          </h2>

          <p className="mt-2 text-slate-400">
            Inicia sesión para continuar.
          </p>

        </div>

        <div className="space-y-8">
          <div>
            <label className="mb-3 block text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              type="email"
              placeholder="admin@gascon.co"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="
                h-14
                w-full
                rounded-xl
                border
                border-white/10
                bg-slate-900
                px-5
                text-white
                outline-none
                transition
                placeholder:text-slate-500
                focus:border-indigo-500
              " />
          </div>
          <div>
            <label className="mb-3 block text-sm font-medium text-slate-300">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                value={form.pwd}
                onChange={(e) => updateField("pwd", e.target.value)}
                className="
                  h-14
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-slate-900
                  px-5
                  pr-14
                  text-white
                  outline-none
                  transition
                  placeholder:text-slate-500
                  focus:border-indigo-500
                " />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                  hover:text-white
                ">
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {
            error401 &&
            <p className="text-sm text-red-400">
              Credenciales inválidas
            </p>
          }
          <pre>[{JSON.stringify(error401)}]</pre>
          <button
            disabled={loading}
            onClick={() => handleSubmit(form)}
            className="
              flex
              h-14
              w-full
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-white
              font-medium
              text-slate-900
              transition
              hover:bg-slate-200
              disabled:cursor-not-allowed
              disabled:opacity-60
            " >
            {loading ? (
              <>
                <LoaderCircle
                  size={18}
                  className="animate-spin"
                />

                Iniciando...
              </>
            ) : (
              "Iniciar sesión"
            )}
          </button>
        </div>
        <p className="mt-16 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Gascon Architecture
        </p>
      </motion.div>
    </main>
  );
}