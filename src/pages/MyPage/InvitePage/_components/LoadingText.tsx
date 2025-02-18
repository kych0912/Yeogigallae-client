import { AnimatePresence, motion } from "framer-motion";

export default function LoadingText(){
    return(
        <AnimatePresence mode="wait">
            <motion.div
            key={"button-loading"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 30,
                duration: 0.1,
                repeat:Infinity,
                repeatType:"loop"
            }}
            style={{
                width: "100%",
                height: "100%",
            }}
            >
                {"로딩중..."}
            </motion.div>
        </AnimatePresence>
    )
}
