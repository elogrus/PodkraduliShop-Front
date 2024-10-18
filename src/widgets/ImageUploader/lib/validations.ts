export const validateFiles = (
    files: FileList,
    maxSize: number
): true | string => {
    if (files.length === 0) return "Нет файлов";
    const image = files[0];
    if (image.type != "image/jpeg" && image.type != "image/png")
        return "Допустимые форматы изображения: PNG, JPEG";
    if (image.size > maxSize * 1024 * 1024)
        return `Максимальный размер изображения - ${maxSize}МБ`;
    return true
};
