import { useEffect, useState, useRef } from "react";
import { Home, Calendar, Star, Users } from "lucide-react";

const stats = [
  { icon: Home, value: 500, suffix: "+", label: "Homes Built" },
  { icon: Calendar, value: 25, suffix: "+", label: "Years Experience" },
  { icon: Star, value: 200, suffix: "+", label: "5-Star Reviews" },
  { icon: Users, value: 50, suffix: "+", label: "Expert Team Members" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
      {count}{suffix}
    </span>
  );
};

const Stats = () => (
  <section className="py-16 md:py-20 bg-secondary">
    <div className="container-section">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <stat.icon className="mx-auto mb-3 text-secondary-foreground/70" size={28} />
            <CountUp target={stat.value} suffix={stat.suffix} />
            <p className="font-body font-medium text-secondary-foreground/80 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
