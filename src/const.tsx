// This repetition is unavoidable since color property in Chip component can't just accept regular string
interface Statuses {
    Default: {
        color: "default" | "error" | "primary" | "success" | "secondary" | "info" | "warning" | undefined;
        backgroundColor: string;
    };
    Urgent: {
        color: "default" | "error" | "primary" | "success" | "secondary" | "info" | "warning" | undefined;
        backgroundColor: string;
    };
    Canceled: {
        color: "default" | "error" | "primary" | "success" | "secondary" | "info" | "warning" | undefined;
        backgroundColor: string;
    };
    Completed: {
        color: "default" | "error" | "primary" | "success" | "secondary" | "info" | "warning" | undefined;
        backgroundColor: string;
    };
    Paid: {
        color: "default" | "error" | "primary" | "success" | "secondary" | "info" | "warning" | undefined;
        backgroundColor: string;
    };
}

export const statuses: Statuses = {
    Default: { color: "default", backgroundColor: "#EBEBEB" },
    Urgent: { color: "error", backgroundColor: "#FCE7E7" },
    Canceled: { color: "error", backgroundColor: "#FCE7E7" },
    Completed: { color: "primary", backgroundColor: "#E3F2FD" },
    Paid: { color: "success", backgroundColor: "#ECF9F3" },
};
