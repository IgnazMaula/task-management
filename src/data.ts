export const TaskData = {
    Tasks: [
        {
            id: 0,
            title: 'Fresh Desk',
            closeDate: 'May 22, 2022',
            name: 'Lindsey Stroud',
            status: 'Urgent',
            taskType: 'Task',
            description: 'description for task #0',
        },
        {
            id: 1,
            title: 'Skype',
            closeDate: 'May 28, 2022',
            name: 'George Fields',
            status: 'Default',
            taskType: 'Task',
            description: 'description for task #1',
        },
        {
            id: 2,
            title: 'Netflix',
            closeDate: 'April 12, 2022',
            name: 'Rebecca Moore',
            status: 'Completed',
            taskType: 'CompletedTask',
            description: 'description for task #2',
        },
        {
            id: 3,
            title: 'Instagram',
            closeDate: 'April 11, 2022',
            name: 'Nicci Troiani',
            status: 'Paid',
            taskType: 'CompletedTask',
            description: 'description for task #3',
        },
        {
            id: 4,
            title: 'Google',
            closeDate: 'April 7, 2022',
            name: 'Jones Dermot',
            status: 'Paid',
            taskType: 'CompletedTask',
            description: 'description for task #4',
        },
        {
            id: 5,
            title: 'Clockify',
            closeDate: 'April 5, 2022',
            name: 'Jane Doe',
            status: 'Completed',
            taskType: 'CompletedTask',
            description: 'description for task #5',
        },
        {
            id: 6,
            title: 'Slack',
            closeDate: 'April 2, 2022',
            name: 'Franz Ferdinand',
            status: 'Completed',
            taskType: 'CompletedTask',
            description: 'description for task #6',
        },
        {
            id: 7,
            title: 'BBC',
            closeDate: 'April 2, 2022',
            name: 'Nikol Ricci',
            status: 'Canceled',
            taskType: 'CanceledTask',
            description: 'description for task #7',
        },
    ],
};

export const ProjectData = {
    Projects: [
        {
            title: 'Weather app',
            description: 'Cu mei agam inciderint mediocritatem, no melius efficiantur usu.',
            dayLeft: 1,
            progress: 91,
            status: 'Current',
        },
        {
            title: 'Logo Design',
            description: 'Eum et nibh pericula. Dolorum posidonium has at, est ei dico deserunt.',
            dayLeft: 4,
            progress: 82,
            status: 'Current',
        },
        {
            title: 'Marketing Assets',
            description: 'CEu vide percipit temporibus vis. Ei eos quis animal persequeris. Ut laoreet disputando duo.',
            dayLeft: 12,
            progress: 58,
            status: 'Current',
        },
        {
            title: 'Mail Design',
            description: 'Vis et esse docendi, mea tollit conceptam sadipscing ea. At illud diceret accommodare.',
            dayLeft: 18,
            progress: 24,
            status: 'Current',
        },
        {
            title: 'Website Analytics',
            description: 'Ad nibh case sed, est cu vide primis, est at zril nemore. Vis alterum aliquam ad.',
            dayLeft: 14,
            progress: 18,
            status: 'Current',
        },
    ],
};

export const IntegrationData = {
    Integrations: [
        {
            title: 'Slack',
            description:
                'Slack is a digital workplace that connects you to the people and tools you work with everyday.',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/2111/2111615.png',
            isConnect: true,
        },
        {
            title: 'Facebook Ads',
            description: 'Connect your Facebook Ads account and never struggle to report on the success.',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
            isConnect: true,
        },
        {
            title: 'Zendesk',
            description: 'Gain more insights into the customer experience with the new Zendesk activity integration.',
            imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/zendesk-512.png',
            isConnect: true,
        },
        {
            title: 'MailChimp',
            description: 'Connect your lead flows and collected forms to your MailChimp account.',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968879.png',
            isConnect: false,
        },
        {
            title: 'WordPress',
            description: 'Connect with WordPress blog or website to convert website visitors into leads or buyers.',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/59/59137.png',
            isConnect: false,
        },
        {
            title: 'Salesforce',
            description: 'Sync Salesforce for a fast, reliable and powerful integratio between your two databases.',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968914.png',
            isConnect: false,
        },
    ],
};

export const GalleryData = {
    Images: [
        { title: 'Stuttgart Library', author: 'Lindsey Stroud', imageUrl: './images/1.jpg', date: 'June 22, 2019' },
        { title: 'Camera', author: 'George Fields', imageUrl: './images/2.jpg', date: 'June 19, 2019' },
        { title: 'History Museum', author: 'Cindy Sherman', imageUrl: './images/3.jpg', date: 'June 18, 2019' },
        { title: 'Guitar', author: 'Martin Merces', imageUrl: './images/4.jpg', date: 'June 15, 2019' },
        { title: 'Games', author: 'Joseph Gonzalez', imageUrl: './images/5.jpg', date: 'June 11, 2019' },
        { title: 'Filmroll', author: 'Nikol Ricci', imageUrl: './images/6.jpg', date: 'June 7, 2019' },
    ],
};

// New Task Form

export const taskTypes = [
    {
        name: 'Task',
        value: 'Task',
    },
    {
        name: 'Completed Task',
        value: 'CompletedTask',
    },
    {
        name: 'Canceled Task',
        value: 'CanceledTask',
    },
];

export const assignees = [
    {
        value: 'Lindsey Stroud',
    },
    {
        value: 'George Fields',
    },
    {
        value: 'Rebecca Moore',
    },
    {
        value: 'Nicci Troiani',
    },
    {
        value: 'Jones Dermot',
    },
    {
        value: 'Jane Doe',
    },
    {
        value: 'Franz Ferdinand',
    },
    {
        value: 'Nikol Ricci',
    },
];
