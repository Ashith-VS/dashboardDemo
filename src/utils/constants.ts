export const statsCards = {
    "usersCount": 120,
    "activeSessions": 45,
    "pendingRequests": 8
}

export const Userinputs = [
    {
        label: "Name",
        type: "text",
        name: "name",
        placeholder: "enter your name",
        isrequired: true,
    },
    {
        label: "Email",
        type: "text",
        name: "email",
        placeholder: "enter your email",
        isrequired: true,
        ispattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
    },
    {
        label: "Company Name",
        type: "text",
        name: "companyName",
        placeholder: "enter your Company Name",
        isrequired: true,
    },
];