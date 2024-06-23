import React from "react";
import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        zIndex: 9999,
        textAlign: "center",
      }}
    >
      <CircularProgress color="primary" size={60} thickness={4} />
    </motion.div>
  );
};

export default Loading;
