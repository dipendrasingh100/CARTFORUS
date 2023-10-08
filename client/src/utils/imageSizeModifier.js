export const changeSize = (img, w, h) => {
    const arr = img.split("/")
    arr[4] = w
    arr[5] = h

    return arr.join("/")
}