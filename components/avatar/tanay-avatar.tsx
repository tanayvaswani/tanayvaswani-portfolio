import { motion } from "framer-motion";
import tanay from "@/public/tanay.jpeg";
import Image from "next/image";

const TanayAvatar = () => {
  return (
    <motion.div
      className="w-full md:flex items-center justify-center col-span-2 hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <Image
        src={tanay}
        alt={"tanay"}
        className="rounded-full shadow-xl border-4 border-blue-600"
        width={360}
        height={360}
      />
    </motion.div>
  );
};

export default TanayAvatar;
