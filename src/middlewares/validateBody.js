import createHttpError from "http-errors";

function validateBody(schema) {
    return (req, res, next)=>{
       const result = schema.validate(req.body, { abortEarly: false });
    }
}