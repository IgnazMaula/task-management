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

export interface TaskProps {
    title: string;
    closeDate: string;
    name: string;
    status: 'Default' | 'Urgent' | 'Canceled' | 'Completed' | 'Paid';
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
    taskType: string;
    assignee: string;
    handleClose: () => void;
    handleTaskType: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAssignee: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
