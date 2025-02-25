export default {
  name: "careerspage",
  title: "Careers Page",
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
      name: "contactImageSlider",
      title: "Contact Image Slider",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Alternative text for accessibility",
            },
          ],
        },
      ],
    },
  ],
};
