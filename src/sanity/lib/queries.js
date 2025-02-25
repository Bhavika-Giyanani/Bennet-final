import { client } from "./client";

export async function getHomePage() {
  return client.fetch(
    `*[_type == "homepage"][0] {
        herosection {
          "image": image.asset->url
        },
        productsection {
          "image": image.asset->url
        }
      }`
  );
}

// About Page
export async function getAboutPage() {
  return client.fetch(
    `*[_type == "aboutpage"][0]{
        herosection {
            "image": image.asset->url
        },
        leadersection {
            leaders[]{
            "image": image.asset->url
            }
        }
    }`
  );
}

// Product Page
export async function getProductPage() {
  return client.fetch(
    `*[_type == "productpage"][0]{
        herosection{
          "image": image.asset->url
        },
        secondherosection{
          "image": image.asset->url
        },
        productsection{
          categories[]{
            categoryName,
            productData[]{
              name,
              dosage
            }
          }
        }
      }`
  );
}

//^ Manufacturing Page
export async function getManufacturingPage() {
  return client.fetch(`*[_type == "manufacturingpage"][0]{
      "image": herosection.image.asset->url
    }`);
}

//^ Careers Page
export async function getCareersPage() {
  return client.fetch(
    `*[_type == "careerspage"][0]{
      herosection {
        "image": image.asset->url
      },
      contactImageSlider[] {
        "image": asset->url,
        alt
      }
    }`
  );
}

//^ Life At Bennet Page
export async function getLifeAtBennetPage() {
  return client.fetch(
    `*[_type == "lifeatbennetpage"][0]{
      herosection {
        "image": image.asset->url
      },
      imagegallerysection[] {
        title,
        description,
        images[] {
          "image": asset->url
        }
      },
      testimonialsection[] {
        "image": image.asset->url,
        testimonial
      }
    }`
  );
}
