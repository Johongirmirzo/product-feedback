// static data for inital implementation of the app
const feedbacks = [
    { 
        title: "Add tags for solutions", 
        description: "Easier to search for solutions based on a specific task",
        category: "ENHANCEMENT",
        status: "PLANNED",
        voteAmount: 99,
        comments: [
            {
                username: "Jaxongir",
                replyingTo: "Lola",
                description: "Yes that's quite right",
                userPhoto: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
            {
                username: "Lola",
                replyingTo: "",
                description: "I think you should add coloured tags",
                userPhoto: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            },
            {
                username: "Qodir",
                replyingTo: "Lola",
                description: "Coloured tags sounds cool",
                userPhoto: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"    
            },

        ]
    },
    { 
        title: "Mobile menu is not resizing properly", 
        description: "Menu on smaller screens are not responsive",
        category: "FEATURE",
        status: "IN-PROGRESS",
        voteAmount: 12,
        comments: [
            {
                username: "Jaxongir",
                replyingTo: "Lola",
                description: "Yes that's quite right",
                userPhoto: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
            {
                username: "Lola",
                replyingTo: "",
                description: "I think you should add coloured tags",
                userPhoto: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            },
            {
                username: "Qodir",
                replyingTo: "Lola",
                description: "Coloured tags sounds cool",
                userPhoto: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"    
            },

        ]
    },
    { 
        title: "Color is not contrasted well ", 
        description: "Front and background colors are not complimentary",
        category: "UI",
        status: "PLANNED",
        voteAmount: 154,
        comments: [
            {
                username: "Jaxongir",
                replyingTo: "Lola",
                description: "Yes that's quite right",
                userPhoto: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
            {
                username: "Lola",
                replyingTo: "",
                description: "I think you should add coloured tags",
                userPhoto: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            },
            {
                username: "Qodir",
                replyingTo: "Lola",
                description: "Coloured tags sounds cool",
                userPhoto: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"    
            },

        ]
    },
    { 
        title: "Information flow is not smooth", 
        description: "Easier to search for solutions based on a specific task",
        category: "UX",
        status: "LIVE",
        voteAmount: 99,
        comments: [
            {
                username: "Jaxongir",
                replyingTo: "Lola",
                description: "Yes that's quite right",
                userPhoto: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
            {
                username: "Lola",
                replyingTo: "",
                description: "I think you should add coloured tags",
                userPhoto: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            },
            {
                username: "Qodir",
                replyingTo: "Lola",
                description: "Coloured tags sounds cool",
                userPhoto: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"    
            },

        ]
    },
    { 
        title: "Tags are redirecting to wrong page", 
        description: "Tags are not well coded",
        category: "Bug",
        status: "PLANNED",
        voteAmount: 99,
        comments: [
            {
                username: "Jaxongir",
                replyingTo: "Lola",
                description: "Yes that's quite right",
                userPhoto: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
            {
                username: "Lola",
                replyingTo: "",
                description: "I think you should add coloured tags",
                userPhoto: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            },
            {
                username: "Qodir",
                replyingTo: "Lola",
                description: "Coloured tags sounds cool",
                userPhoto: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"    
            },

        ]
    },
    { 
        title: "Information flow in profile is not correct", 
        description: "Tasks are not well correlated",
        category: "UX",
        status: "LIVE",
        voteAmount: 99,
        comments: [
            {
                username: "Jaxongir",
                replyingTo: "Lola",
                description: "Yes that's quite right",
                userPhoto: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
            {
                username: "Lola",
                replyingTo: "",
                description: "I think you should add coloured tags",
                userPhoto: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            },
            {
                username: "Qodir",
                replyingTo: "Lola",
                description: "Coloured tags sounds cool",
                userPhoto: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"    
            },

        ]
    },
    { 
        title: "Add animations", 
        description: "Add animations to web site to make it more appealing",
        category: "ENHANCEMENT",
        status: "IN-PROGRESS",
        voteAmount: 989,
        comments: [
            {
                username: "Jaxongir",
                replyingTo: "Lola",
                description: "Yes that's quite right",
                userPhoto: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
            {
                username: "Lola",
                replyingTo: "",
                description: "I think you should add coloured tags",
                userPhoto: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            },
            {
                username: "Qodir",
                replyingTo: "Lola",
                description: "Coloured tags sounds cool",
                userPhoto: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"    
            },

        ]
    },
    { 
        title: "Button click not working", 
        description: "Add feedback button is not working",
        category: "BUG",
        status: "LIVE",
        voteAmount: 11,
        comments: [
            {
                username: "Jaxongir",
                replyingTo: "Lola",
                description: "Yes that's quite right",
                userPhoto: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
            {
                username: "Lola",
                replyingTo: "",
                description: "I think you should add coloured tags",
                userPhoto: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            },
            {
                username: "Qodir",
                replyingTo: "Lola",
                description: "Coloured tags sounds cool",
                userPhoto: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"    
            },

        ]
    },
    { 
        title: "Remove text from home page", 
        description: "Easier to search for solutions based on a specific task",
        category: "FEATURE",
        status: "PLANNED",
        voteAmount: 99,
        comments: [
            {
                username: "Jaxongir",
                replyingTo: "Lola",
                description: "Yes that's quite right",
                userPhoto: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
            {
                username: "Lola",
                replyingTo: "",
                description: "I think you should add coloured tags",
                userPhoto: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            },
            {
                username: "Qodir",
                replyingTo: "Lola",
                description: "Coloured tags sounds cool",
                userPhoto: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"    
            },

        ]
    },
    { 
        title: "Add hamburger for menu", 
        description: "Remove text instead add hamburger for menu",
        category: "ENHANCEMENT",
        status: "PLANNED",
        voteAmount: 99,
        comments: [
            {
                username: "Jaxongir",
                replyingTo: "Lola",
                description: "Yes that's quite right",
                userPhoto: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
            {
                username: "Lola",
                replyingTo: "",
                description: "I think you should add coloured tags",
                userPhoto: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            },
            {
                username: "Qodir",
                replyingTo: "Lola",
                description: "Coloured tags sounds cool",
                userPhoto: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"    
            },

        ]
    },
    { 
        title: "Improve color of the website", 
        description: "Color of the website is not smooth",
        category: "UI",
        status: "LIVE",
        voteAmount: 99,
        comments: [
            {
                username: "Jaxongir",
                replyingTo: "Lola",
                description: "Yes that's quite right",
                userPhoto: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
            {
                username: "Lola",
                replyingTo: "",
                description: "I think you should add coloured tags",
                userPhoto: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            },
            {
                username: "Qodir",
                replyingTo: "Lola",
                description: "Coloured tags sounds cool",
                userPhoto: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"    
            },

        ]
    },
]

export {feedbacks}