const AdminMidleware = (req, res, next) => {
  if (req.user && req.user.role === 2) {
    next();
  } else {
    return res.status(403).json({
      message: "Akses ditolak! Hanya admin yang bisa masuk.",
    });
  }
};

export default AdminMidleware;
