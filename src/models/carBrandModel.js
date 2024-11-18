import mongoose from "mongoose";

const carBrandSchema = new mongoose.Schema(
  {
    brandName: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    fuelType: {
      type: String,
      enum: ["Бензин", "Дизель", "Электро", "Гибрид"],
      required: true,
    },
    bodyType: {
      type: String,
      enum: ["Седан", "Хэтчбек", "Кроссовер", "Купе", "Внедорожник"],
      required: true,
    },
    purchases: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const CarBrandModel = mongoose.model("CarBrand", carBrandSchema);

export default CarBrandModel;
