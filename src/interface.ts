// Props

export interface SideBarProps {
    open: boolean;
    setOpen: any;
    toggleDrawer: () => void;
}

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export interface ProfileProps {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
    city?: string;
    state?: string;
    country?: string;
    postcode?: string;
}

export interface TaskProps {
    id?: number;
    title: string;
    closeDate: string;
    name: string;
    status: 'Default' | 'Urgent' | 'Canceled' | 'Completed' | 'Paid';
    taskType?: string;
    description?: string;
}

export interface ProjectProps {
    title: string;
    description: string;
    dayLeft: number;
    progress: number;
    status?: string;
}

export interface IntegrationProps {
    title: string;
    description: string;
    imageUrl: string;
    isConnect: boolean;
}

export interface ImageProps {
    title: string;
    author: string;
    imageUrl: string;
    date: string;
}

export interface NewTaskModelProps {
    open: boolean;
    handleClose: () => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>, newTask: TaskProps) => void;
}

export interface EditTaskModelProps {
    open: boolean;
    handleClose: () => void;
    handleEdit: (event: React.FormEvent<HTMLFormElement>, taskIndex: TaskProps) => void;
    currentTask: TaskProps;
}

export interface TaskModalProps {
    open: boolean;
    handleClose: () => void;
    handleCreate: (event: React.FormEvent<HTMLFormElement>, newTask: TaskProps) => void;
    handleEdit: (event: React.FormEvent<HTMLFormElement>, taskIndex: TaskProps) => void;
    currentTask: TaskProps;
}
