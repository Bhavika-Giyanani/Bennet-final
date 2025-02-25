export default {
    name: "homepage",
    title: "Home Page",
    type: "document",
    fields: [
        {
            name: "herosection",
            title: "Hero Section",
            type: "object",
            fields: [
                {
                    name: "image",
                    title: "Image",
                    type: "image"
                }
            ]
        },
        {
            name: "productsection",
            title: "Product Section",
            type: "object",
            fields: [
                {
                    name: "image",
                    title: "Image",
                    type: "image"
                }
            ]
        },
    ]
}