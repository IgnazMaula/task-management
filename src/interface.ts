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
