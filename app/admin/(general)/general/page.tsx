"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ImageUpload from "@/app/components/image-upload/image-upload";
import GenericTabs from "@/app/components/genericTabs";
import { getYouTubeVideoId } from "@/app/lib/utils";
import { getSettings, setSettings as setRemoteSettings } from "@/app/services/settings";
import { RefreshCcw } from "lucide-react";
import { useAdminContext } from "@/app/providers/admin-context";
import { Settings } from "@/app/lib/models";
import { BannerType } from '../../../lib/models';
import { toast } from "sonner";

const defaultBanner = {
  image: '/imgs/background.png',
  video: '',
  type: 'image' as BannerType
}

interface FormBanner {
  image: string;
  video: string;
  type: string;
}

export default function GeneralPage() {
  const { setIsAdminLoading, } = useAdminContext();
  const [settings, setSettings] = useState<Settings>({
    id: '',
    data: {
      home: {
        banner: { ...defaultBanner }
      }
    }
  });
  const [formBanner, setFormBanner] = useState<FormBanner>({ ...defaultBanner });

  const updateField = <K extends keyof FormBanner>(
    field: K,
    value: FormBanner[K]
  ) => {
    setFormBanner((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const changeImage = (urlvideo: string) => {

  }

  const changeVideo = (urlvideo: string) => {
    updateField('video', urlvideo);
    console.log({ settings, formBanner });
  }

  const getUrlVideo = (videoIdDb?: string) => {
    const videoId = videoIdDb || getYouTubeVideoId(formBanner.video) || '';
    if (videoId === null || videoId.length < 1) {
      return '';
    }
    else
      return `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&loop=1&controls=1&showinfo=1&rel=0`
  }



  const handleVideoSave = () => {
    setIsAdminLoading(true);
    console.log('Guardando ....');
    if (!settings) return;
    setRemoteSettings(settings).then(() => {
      setIsAdminLoading(false);
      loadRemoteSettings();
      toast.success('Informacion actualizada');
    });

  }

  const urlVideoError = () => {
    return (formBanner.video.length > 0) && (getUrlVideo() === '');
  }

  const loadRemoteSettings = () => {
    getSettings().then(setting => {
      setSettings(setting);
      const { banner } = setting.data.home;
      console.log(banner);
      setFormBanner({ ...banner, video: getUrlVideo(banner.video) });
    });
  }

  useEffect(() => {
    loadRemoteSettings();
  }, []);

  useEffect(() => {
    const videoId = getYouTubeVideoId(formBanner.video) || '';
    const newBanner = {
      video: videoId,
      image: formBanner.image,
      type: 'video' as BannerType
    };
    setSettings({
      id: settings.id,
      data: {
        home: {
          banner: newBanner
        }
      }
    });
    console.log('useEffect', { formBanner });
  }, [formBanner]);

  return (
    <>
      <div className="my-10 px-10 mx-auto max-w-4xl">
        <h2 className="mb-3 text-2xl font-semibold text-white">
          Imagen Principal
        </h2>
        <pre>
          Type: [{formBanner.type}] < br />
          Image: [{formBanner.image}] < br />
          Video: [{formBanner.video}]
        </pre>
        <hr className="mb-6 border border-white/10" />
        <GenericTabs
          active={formBanner.type}
          onChange={(tab) => updateField('type', tab)}
          labelText="Seleccione tipo de fondo"
          tabs={[
            { id: "image", label: "Imagen" },
            { id: "video", label: "Video" },
          ]} />
        {formBanner.type === 'image' &&
          <>
            <p className="my-6 text-sm text-slate-500">
              Esta imagen será utilizada en la portada de la página inicio.
            </p>
            <div className="flex flex-col gap-6 mt-6 overflow-hidden rounded-xl border border-white/10 bg-slate-900 relative" >
              <div className="relative cursor-pointer h-[30vh] w-full">
                <Image
                  src={formBanner.image || '/imgs/project_cover.png'}
                  alt="image cover project" fill
                  className="object-cover hover:scale-110" />
              </div>
              <label className="imagen-change" htmlFor="home-image-input">
                <RefreshCcw
                  size={34}
                  className="mb-3 text-white/50"
                />
                <span>Pulse para Cambiar</span>
              </label>
              <ImageUpload
                category="projects"
                indentifier="home-image-input"
                onUploaded={(image) => updateField('image', image)} />
            </div>
          </>
        }
        {formBanner.type === 'video' &&
          <>
            <p className="my-6 text-sm text-slate-500">
              Este video será utilizado como portada de la página incial.
            </p>
            <div className="flex flex-col gap-6 mt-6 overflow-hidden rounded-xl border border-white/10 bg-slate-900">
              <div className="video-warped relative cursor-pointer h-[30vh] w-full">
                {
                  getUrlVideo() !== '' &&
                  <iframe
                    className="absolute inset-0 h-full w-full pointer-events-none"
                    src={getUrlVideo()}
                    title="Background video"
                    allow="autoplay; fullscreen" />
                }
              </div>
            </div>
            <div className="mt-6 grid gap-6 grid-cols-3">
              <div className="col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Dirección de video (Youtube)
                </label>
                <input
                  type="text"
                  value={formBanner.video}
                  onChange={(e) => changeVideo(e.target.value)}
                  placeholder="Eje: https://www.youtube.com/watch?v=XXXXXXXX"
                  className={`
                    w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500
                    ${urlVideoError() && 'border-red-800!'}
                  `}
                />
                {urlVideoError() && <p className="text-red-800" >Verifique la url del video</p>}
              </div>
              <div className="flex justify-end items-end">
                <button
                  onClick={handleVideoSave}
                  className="cursor-pointer rounded-lg w-[200] h-12 bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500">
                  Actualizar cambios
                </button>
              </div>
            </div>
          </>
        }
        <hr className="mt-12 border border-white/10" />
      </div>
    </>
  );
}