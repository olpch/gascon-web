"use client";

import { useEffect, useState } from "react";
import { Dictionary, Languages, LanguagesTab, IsDirty } from "@/app/lib/models";
import { getLocalDictionaries, removeConfig, setRemoteDicionary } from '@/app/services/global-config';
import { hasChanges } from "@/app/lib/utils";
import { toast } from "sonner";
import { useAdminContext } from "@/app/providers/admin-context";
import Tabs from "@/app/components/tabs";
import LanguajeEditor from "@/app/components/admin/LanguajeEditor";
import AdminModal, { ModalType } from "@/app/components/admin/AdminModal";

const languagesTabDefault: LanguagesTab = { prev: 'en', tab: 'en' }

export default function LanguajesPage() {
  const [languagesTab, setLanguagesTab] = useState<LanguagesTab>(languagesTabDefault);
  const [languages, setLanguages] = useState<Languages>();
  const [dictionary, setDictionary] = useState<Dictionary>();
  const [isDirty, setDirty] = useState<IsDirty>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const { setIsAdminLoading } = useAdminContext();

  const changeLanguageTab = (tab: string) => {
    if (!isDirty?.state) {
      setLanguagesTab({
        tab: (tab as keyof Languages),
        prev: languagesTab.tab
      });
    } else {
      setShowModal(true);
    }
  }

  const acceptChanges = () => {
    if (!isDirty) return;
    setIsAdminLoading(true);
    setRemoteDicionary(isDirty.form).then(() => {
      setIsAdminLoading(false);
      removeConfig('dictionaries');
      changeLanguageTab(languagesTab.prev);
      setShowModal(false);
      LoadLocaldictionaries();
      toast.info('Se han actualizado los datos');
    });
  }

  const saveDictionary = (form: Dictionary) => {
    if (isDirty?.state) {
      setIsAdminLoading(true);
      setRemoteDicionary(form).then(() => {
        removeConfig('dictionaries');
        LoadLocaldictionaries();
        setIsAdminLoading(false);
        toast.info('Se han actualizado los datos');
      });
    } else {
      toast.info('No se han realizado cambios en los datos');
    }
  }

  const changeDictionary = () => {
    if (languages) {
      const selectDictionary = languages[languagesTab.tab];
      setDictionary(selectDictionary);
      setDirty({ state: false, form: selectDictionary });
    }
  }

  const changeDirty = (form: Dictionary) => {
    const changed = hasChanges(form, isDirty?.form);
    if (!changed) return;
    setDirty({ state: true, form });
  }

  const LoadLocaldictionaries = () => {
    getLocalDictionaries().then((remoteLanguages: Languages) => {
      setLanguages(remoteLanguages);
    });
  }

  useEffect(() => {
    changeDictionary();
  }, [languages]);


  useEffect(() => {
    changeDictionary();
  }, [languagesTab]);

  useEffect(() => {
    if (!!languages) return;
    LoadLocaldictionaries();
  }, []);

  return (
    <>
      <Tabs
        active={languagesTab.tab}
        onChange={changeLanguageTab}
        tabs={[
          { id: "en", label: "Inglés" },
          { id: "es", label: "Español" },
        ]} />
      {dictionary &&
        <LanguajeEditor dictionary={dictionary}
          onChange={changeDirty}
          onSave={saveDictionary} />
      }
      <AdminModal
        open={showModal}
        modalType={ModalType.WARNING}
        title="¿Desea descartar los cambios relizados?"
        message="Esta acción no se puede deshacer."
        onClose={() => setShowModal(false)}
        onConfirm={() => acceptChanges()}
      />
    </>
  );
}