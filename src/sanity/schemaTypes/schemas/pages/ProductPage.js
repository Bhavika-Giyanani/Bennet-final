export default {
  name: "productpage",
  title: "Product Page",
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
          type: "image",
        },
      ],
    },
    {
      name: "secondherosection",
      title: "Second Hero Section",
      type: "object",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
        },
      ],
    },
    {
      name: "productsection",
      title: "Product Section",
      type: "object",
      fields: [
        {
          name: "categories",
          title: "Categories",
          type: "array",
          of: [
            {
              type: "object",
              name: "category",
              fields: [
                {
                  name: "categoryName",
                  title: "Category Name",
                  type: "string",
                },
                {
                  name: "productData",
                  title: "Product Data",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      name: "product",
                      fields: [
                        {
                          name: "name",
                          title: "Product Name",
                          type: "string",
                        },
                        {
                          name: "dosage",
                          title: "Dosage",
                          type: "string",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
