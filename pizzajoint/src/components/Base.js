import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

const Base = ({ addBase, pizza }) => {
  return (
    <motion.div
      className="base container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li key={base} 
            whileHover={{ scale: 1.3, color: "green", originX: 0 }}
            transition={{ type: "spring", stiffness: 400 }}
            onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            {/* <motion.button initial={{ x: "-100vw" }} animate={{ x: 0 }}> */}
            <motion.button initial={{ y: "100vh" }} animate={{ y: 0 }} 
                        whileHover={{ 
                          scale : 1.1,
                          textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)"
                        }}
            >
              Next
            </motion.button>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default Base;
