export default {
  name: "aboutpage",
  title: "About Page",
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
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "leadersection",
      title: "Leader Section",
      type: "object",
      fields: [
        {
          name: "leaders",
          title: "Leaders",
          type: "array",
          of: [
            {
              name: "image",
              title: "Image",
              type: "image",
            },
          ],
        },
      ],
    },
  ],
};
