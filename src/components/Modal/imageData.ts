type category = "활동" | "건물" | "음식" | "자연";


export default function getImageData(): Record<category, {count: number, images: string[]}> {
  return {
    "활동": {
      "count": 4,
      "images": [
        "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/activity_image1.jpg",
        "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/activity_image2.jpg",
        "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/activity_image3.jpg",
        "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/activity_image4.jpg"
      ]
    },
    "건물": {
      "count": 4,
      "images": [
        "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/building_image1.jpg",
        "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/building_image2.jpg",
        "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/building_image3.jpg",
        "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/building_image4.jpg",
      ]
    },
    "음식": {
      "count": 4,
      "images": [
        "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/food_image1.jpg",
        "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/food_image2.jpg",
        "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/food_image3.jpg",
        "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/food_image4.jpg",
      ]
    },
    "자연": {
      "count": 4,
      "images": [
        "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/nature_image1.jpg",
        "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/nature_image2.jpg",
        "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/nature_image3.jpg",
        "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/nature_image4.jpg",
      ]
    }
  }
}
