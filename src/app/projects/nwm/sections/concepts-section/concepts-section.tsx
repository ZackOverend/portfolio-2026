import { motion } from "framer-motion";

function ConceptItem({ text }: { text: string }) {
  return (
    <motion.li
      className="flex items-start gap-3 text-sm text-white/75"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.6,
        margin: "0px 0px -50px 0px",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex items-start gap-3">
        <span className="mt-[0.48em] h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
        <span className="text-white/80">{text}</span>
      </div>
    </motion.li>
  );
}

export function NoWasteMateConcepts() {
  return (
    <div className="max-w-xl">
      <motion.h3
        className="text-sm tracking-widest text-white/50"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
      >
        KEY CONCEPTS LEARNED
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.8 }}
      >
        <ul className="mt-6 space-y-4">
          <ConceptItem text="Designing scalable client–server architectures with clear separation of concerns." />
          <ConceptItem text="Button placement and navigation depth impact how quickly users complete daily tasks." />
          <ConceptItem text="Figma iteration turned abstract ideas into testable interface flows" />
          <ConceptItem text="Enforced Jira usage clarified ownership and prevented missed work" />
          <ConceptItem text="Centralized Confluence documentation reduced review and handoff friction" />
          <ConceptItem text="Firebase Authentication secured user access and database operations" />
          <ConceptItem text="Token-based authentication validated client requests to backend services" />
          <ConceptItem text="Swagger streamlined API testing and endpoint validation" />
          <ConceptItem text="A layered Python API structure supported scalable development" />
        </ul>
      </motion.div>
    </div>
  );
}
