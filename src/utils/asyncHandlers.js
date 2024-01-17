const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

// Using try catch method
// const asyncHandler = (func) => async (request, response, next) => {
//   try {
//   } catch (error) {
//     response.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

export { asyncHandler };
