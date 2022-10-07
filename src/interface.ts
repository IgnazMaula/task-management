// Props

export interface SideBarProps {
    open: boolean;
    setOpen: any;
    toggleDrawer: () => void;
}

export interface TaskProps {
    title: string;
    closeDate: string;
    name: string;
    status: 'Default' | 'Urgent' | 'Canceled' | 'Completed' | 'Paid';
}
