
const model = {
    app: {
        currentpage: 'feedback'
    },

    linksTopages: [{
            //unicode facebook &#xf082;
            name: "facebook",
            SOME: href = "https://www.facebook.com/therese.nordnes.58/"
        },
        {
            name: "Github",
            SOME: href = "https://github.com/ThereseCamK",
        },
    ],


    pagesContent: {
        aboutPage: {
            header: "Therese Camilla Kjær",
            infoContent: "",
        },
        feedbackPage: [
            {
                id: 0,
                comment: "heterrr",
                name: "therese",
                rating: 3,
            },
            {
                id: 1,
                comment: " veldig bra ",
                name: "  tessa",
                rating: 1,
            },
        ],
        blogInput: {
            headLine: "",
            content: "",
            picture: "",
            date: "",
        },
        blogPage: [{
            headLine: "first",
            blogContent: "test",
            picture: "",
            publishedDate: "18.01.21",

        },
            {
                headLine: "second",
                blogContent: "dfdf",
                picture: "",
                publishedDate: "18.01.21",

            },
        ],
        projectInput: {
            title: "",
            description: "",
            link:  "",
            
        },
        projectPage: [{
                title: "Event",
                description: "Det er en side hvor man kan lage eventer",
                link:  "",
            },
            {
                title: "rekorder",
                description: "side hvor det listet opp rekorder til brukeren",
                link:  "",
            },
            {
                title: "test3",
                description: "ingenting",
                link:  "www.facebook.no",
            },
        ]

    },

    footer: {
        name: "Therese Camilla Kjær",
        town: "Larvik",
        phone: "413 77 965",
        email: "theresecnord@gmail.com",
    }
}