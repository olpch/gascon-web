"use client";

import {
  AlertTriangle,
  CheckCircle,
  Info,
  XCircle,
  X,
  type LucideIcon,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState } from "react";


export enum ModalType {
  INFO = "info",
  INPUT = "input",
  DANGER = "danger",
  SELECT = "select",
  SUCCESS = "success",
  WARNING = "warning",
}

interface ModalStyle {
  icon?: LucideIcon;
  iconClassName: string;
  titleClassName: string;
  actionButtons: string;
  InputClassName: string;
  selectClassName: string;
  messageClassName?: string;
}

const modalStyles: Record<ModalType, ModalStyle> = {
  [ModalType.INFO]: {
    icon: Info,
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    actionButtons: "justify-center",
    InputClassName: "hidden",
    selectClassName: "hidden",
  },

  [ModalType.SUCCESS]: {
    icon: CheckCircle,
    iconClassName: "text-green-500",
    titleClassName: "text-green-500",
    actionButtons: "",
    InputClassName: "hidden",
    selectClassName: "hidden",
  },

  [ModalType.WARNING]: {
    icon: AlertTriangle,
    iconClassName: "text-yellow-500",
    titleClassName: "text-yellow-500",
    actionButtons: "justify-between",
    InputClassName: "hidden",
    selectClassName: "hidden",
  },

  [ModalType.DANGER]: {
    icon: XCircle,
    iconClassName: "text-red-500",
    titleClassName: "text-red-500",
    actionButtons: "justify-between",
    InputClassName: "hidden",
    selectClassName: "hidden",
  },

  [ModalType.INPUT]: {
    iconClassName: "hidden",
    titleClassName: "hidden",
    actionButtons: "justify-between",
    InputClassName: "hidden",
    selectClassName: "hidden",
    messageClassName: "text-start"
  },

  [ModalType.SELECT]: {
    iconClassName: "hidden",
    titleClassName: "hidden",
    actionButtons: "justify-between",
    InputClassName: "hidden",
    selectClassName: "hidden",
    messageClassName: "text-start"
  },
}

export interface SelectOption {
  id: string,
  label: string
}

interface AdminModalProps {
  open: boolean;
  title: string;
  message: string;
  modalType?: ModalType;
  cancelText?: string;
  confirmText?: string;
  placeholder?: string;
  selectOptions?: SelectOption[];
  onClose: () => void;
  onConfirm: () => void;
  customButton?: {
    btnText: string;
    onClick: () => void;
  }

}
const colors = {
  danger: {
    button: 'bg-red-600'
  }
}
const optionsDefault: SelectOption[] = [{
  id: '',
  label: 'Sin opciones'
}]

export default function AdminModal({
  open,
  title,
  message,
  modalType,
  cancelText,
  confirmText,
  customButton,
  onClose,
  onConfirm,
  placeholder = '',
  selectOptions = optionsDefault,
}: AdminModalProps) {

  if (!open || !modalType) return null;
  const [field, setField] = useState<string | number>('');
  const style = modalStyles[modalType];
  const Icon = style.icon;


  const showCancelButton = () => {
    return ![ModalType.INFO].includes(modalType);
  }

  const changeField = (value: string | number) => {
    setField(value)
  }

  const SelectModal = () => {

    const [open, setOpen] = useState(false);

    if (modalType !== ModalType.SELECT) return;

    return (
      <div className="relative">
        <select
          value={field}
          id="modal-select"
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          onChange={(e) => changeField(e.target.value)}
          className="w-full rounded-lg mt-4 appearance-none border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500">
          {
            selectOptions.map((option) => (
              <option value={option.id}>{option.label}</option>
            ))
          }
        </select>
        <ChevronDown className={`
          text-white pointer-events-none absolute right-4 
          top-10 h-5 w-5 -translate-y-1/2
          ${open ? "rotate-180" : ""}
          `} />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="
        relative z-10 w-full max-w-md rounded-xl 
        border border-white/10 bg-slate-900 
        p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-white"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        {Icon &&
          <div className="mb-4 flex justify-center">
            <Icon
              size={48}
              strokeWidth={1.5}
              className={style.iconClassName}
            />
          </div>
        }

        {/* Title */}
        <h2
          className={`text-center text-xl font-semibold ${style.titleClassName}`}
        >
          {title}
        </h2>

        {/* Message */}
        <p className={`mt-3 text-center text-sm 
          text-white dark:text-neutral-400 ${style.messageClassName}`}>
          {message}
        </p>
        <SelectModal />

        {(modalType === ModalType.INPUT) &&
          <input
            type="text"
            value={field}
            placeholder={placeholder}
            onChange={(e) => changeField(e.target.value)}
            className="w-full rounded-lg mt-4 border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
          />
        }

        {/* Action */}
        <div className={`mt-6 flex ${style.actionButtons} `}>
          {
            showCancelButton() &&
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border cursor-pointer border-white/10 px-4 py-2 text-white transition hover:bg-red-500/50"
            >
              {cancelText || 'Cancelar'}
            </button>
          }
          <div>
            {
              customButton && <button
                type="button"
                onClick={customButton.onClick}
                className="
                  rounded-lg border border-white/10 px-4 py-2
                  cursor-pointer text-white transition mr-2 capitalize
                  hover:border-white hover:bg-white hover:text-slate-900"
              >
                {customButton.btnText || 'Aceptar'}
              </button>
            }
            <button
              type="button"
              onClick={onConfirm}
              className="
                rounded-lg border border-white/10 px-4 py-2
                cursor-pointer text-white transition capitalize
                hover:border-white hover:bg-white hover:text-slate-900"
            >
              {confirmText || 'Aceptar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}
