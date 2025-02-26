import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const stats = [
  { label: "Number Of Events Executed", value: 2000, suffix: "+" },
  { label: "Number Of Cities", value: 4, suffix: "" },
];

const Statistics = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} label={stat.label} value={stat.value} suffix={stat.suffix} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ label, value, suffix }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center"
    >
      <p className="text-lg text-gray-500">{label}</p>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-gray-900"
      >
        {inView && <CountUp start={0} end={value} duration={2.5} separator="," />} {suffix}
      </motion.h2>
    </motion.div>
  );
};

export default Statistics;