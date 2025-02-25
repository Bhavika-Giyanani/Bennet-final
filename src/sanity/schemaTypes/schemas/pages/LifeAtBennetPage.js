import { type } from "os";

export default {
  name: "lifeatbennetpage",
  title: "Life At Bennet Page",
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
      name: "imagegallerysection",
      title: "Image Gallery Section",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "images",
              title: "Images",
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
    },
    {
      name: "testimonialsection",
      title: "Testimonial Section",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
            },
            {
              name: "testimonial",
              title: "Testimonial",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
