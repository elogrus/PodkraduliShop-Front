import { useState } from "react";
import { compareClasses as cmcl } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";
import { TextPreset } from "shared/ui/Text/types/Text";
import { Text } from "shared/ui/Text/ui/Text";
import { uploadImage } from "../lib/requests";
import { validateFiles } from "../lib/validations";
import * as cls from "./ImageUploader.module.scss";
import { toast } from "react-toastify";
import ImageIcon from "shared/assets/image.svg";
import { getCssVariable } from "shared/lib/getCssVariable";

interface ImageUploaderProps {
    className?: string;
    formKey: string;
    url: string;
    maxSize?: number;
    doAfterUpload?: () => void;
}

export const ImageUploader = (props: ImageUploaderProps) => {
    const {
        className,
        formKey,
        url,
        maxSize = 5,
        doAfterUpload = () => {},
    } = props;
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const validationResult = validateFiles(e.target.files, maxSize);
        if (validationResult !== true) return setError(validationResult);
        setSelectedImage(e.target.files[0]);
    };

    const onSumbit = async () => {
        if (!selectedImage) return toast.error("Не выбран файл");
        setIsLoading(true);
        const result = await uploadImage(url, formKey, selectedImage);
        if (result.error) {
            toast.error(result.error, {});
            setIsLoading(false);
            return;
        }
        doAfterUpload();
        toast.success(result.data);
        setIsLoading(false);
    };

    return (
        <div className={cmcl(cls.ImageUploader, {}, [className])}>
            {error && <Text>{error}</Text>}
            <Text preset={TextPreset.SUBTITLE}>Фото профиля</Text>
            <div className={cls.inputWrapper}>
                {selectedImage && (
                    <div className={cls.loadedImageWrapper}>
                        <img
                            className={cls.loadedImage}
                            src={URL.createObjectURL(selectedImage)}
                        />
                    </div>
                )}
                {!selectedImage && <ImageIcon fill={getCssVariable('--cl0')} className={cls.icon} />}

                <input
                    type="file"
                    name="avatar"
                    className={cls.input}
                    onChange={onChangeImage}
                />
            </div>
            <Button onClick={onSumbit} disabled={isLoading} className={cls.btn}>
                Сохранить
            </Button>
        </div>
    );
};
