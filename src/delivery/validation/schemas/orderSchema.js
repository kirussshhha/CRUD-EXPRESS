import Joi from "joi";

const orderSchema = Joi.object({
  items: Joi.array().min(1).required().messages({
    "array.base": "Товары должны быть массивом",
    "array.min": "В заказе должен быть как минимум один товар",
  }),
  customerName: Joi.string().min(3).max(30).required().messages({
    "string.base": `"customerName" должно быть строкой`,
    "string.empty": `"customerName" не может быть пустым`,
    "string.min": `"customerName" должно содержать минимум 3 символа`,
    "string.max": `"customerName" должно содержать максимум 30 символов`,
  }),
  status: Joi.string()
    .valid("создан", "в пути", "доставлено", "отменён")
    .default("создан")
    .messages({
      "any.only":
        "Статус заказа должен быть одним из: создан, в пути, доставлено, отменён",
    }),
});

export default orderSchema;
