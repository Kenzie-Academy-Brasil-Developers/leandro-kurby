import { toast, Zoom } from "react-toastify";

export const notifySuccess = (content) => toast.success(content, {
    position: "top-right",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    transition: Zoom,
    style: {
        backgroundColor: "var(--Grey-2)",
        color: "var(--Grey-0)",
        fontSize: "14px",
        fontWeight: "700",
        borderRadius : "4px",
        height: "69px",
        closeButton: "var(--Grey-0)",
    }
})

export const notifyError = (content) => toast.error(content, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    transition: Zoom,
    style: {
        backgroundColor: "var(--Grey-2)",
        color: "var(--Grey-0)",
        fontSize: "14px",
        fontWeight: "700",
        borderRadius : "4px",
        height: "69px",
        closeButton: "var(--Grey-0)",
    }
})