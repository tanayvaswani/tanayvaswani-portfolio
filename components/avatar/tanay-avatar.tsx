import { motion } from "framer-motion";
import tanay from "@/public/tanay.jpeg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TanayAvatar = ({ onDesktop = true }: { onDesktop?: boolean }) => {
  return (
    <motion.div
      className={cn(
        "w-full items-center justify-center col-span-2",
        onDesktop ? "md:flex hidden" : "flex md:hidden mb-2 -mt-4"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <Image
        src={tanay}
        alt={"tanay"}
        className="rounded-full shadow-lg hover:shadow-xl hover:border-2 hover:border-blue-500 transition-all duration-300"
        width={onDesktop ? 240 : 240}
        height={onDesktop ? 240 : 240}
      />
    </motion.div>
  );
};

export default TanayAvatar;
