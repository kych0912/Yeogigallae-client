import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import SearchPage from "../../../../SearchPage";
import { KakaoPlaceDocument } from "../../../../../apis/searchAddress/types";

export default function CourseSearchPage({
    handleSelectItem,
}: {
    handleSelectItem: (place: KakaoPlaceDocument) => void;
}) {
    return (
    <AnimatePresence mode="wait">
        <motion.div
          key={"search-page"}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 30,
            duration: 0.1
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
        <SearchPage 
            handleSelectItem={handleSelectItem}
        />
    </motion.div>
    </AnimatePresence>
    )
}
