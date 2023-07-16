export default e => {
    e.stopPropagation();
    e.preventDefault();
    let target = e.currentTarget;
    let left = 0;
    let posX = 0;

    const handleMoveMouse = ({clientX: x}) => {
        target.scrollLeft = left - (x - posX)
    }

    const removeGrabScroll = e => {
        document.removeEventListener("mousemove", handleMoveMouse)
        document.removeEventListener("mouseup", removeGrabScroll)
    }

    left = target.scrollLeft;
    posX = e.clientX;
    target.style.userSelect = 'none';
    document.addEventListener("mousemove", handleMoveMouse)
    document.addEventListener("mouseup", removeGrabScroll)
}