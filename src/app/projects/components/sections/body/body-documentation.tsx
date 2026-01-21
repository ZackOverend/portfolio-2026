import { motion } from "framer-motion";
import Gallery, { GalleryItem } from "../../../components/gallery";
import { useState } from "react";

const items: GalleryItem[] = [
  {
    src: "/nwm/jira.png",
    title: "Most Recent Developed UI Iteration",
  },
  {
    src: "/nwm/confluence.png",
    title: "Confluence Documentation",
  },
  {
    src: "/nwm/auth-diagram.png",
    title: "Diagram of System Architecture",
  },
];

export default function BodyDocumentation() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="mt-10 flex">
        <motion.div
          className="space-y-6 max-w-4xl "
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="h2">Jira Usage and Documentation</h2>

          <p className="p-body">
            Throughout the project, Jira was used as the primary tool for task
            management and documentation in order to maintain structure and
            accountability within the team. By requiring all features, bug
            fixes, and design tasks to be tracked in Jira, we were able to
            clearly define responsibilities, monitor progress, and ensure that
            work aligned with sprint goals. User stories, subtasks, and status
            updates were consistently documented, which helped support
            communication during development and made it easier to reflect on
            completed and pending work. While this level of structure initially
            felt restrictive, it ultimately improved organization, transparency,
            and collaboration across the project.
          </p>

          <p className="p-body">
            Confluence proved to be super useful and was used as a central place
            to document design decisions, technical considerations, and overall
            project progress. Having a shared space for written documentation
            made it easier to stay aligned as a team and ensured that important
            information was not lost across conversations or tools. It also
            allowed us to clearly communicate ideas during reviews and the
            project defense, since diagrams, explanations, and updates were all
            accessible in one place. Over time, Confluence became an important
            reference point that supported both collaboration and long-term
            understanding of the project.
          </p>
        </motion.div>

        {/* RIGHT — visual */}
      </div>
      <motion.div
        className="mt-10 flex"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="space-y-6 max-w-4xl ">
          <h2 className="h2">Future Iterations</h2>

          <p className="p-body">
            Looking ahead, future iterations of will be heavily informed by the
            feedback received during the project defense, where many specific
            and constructive improvement suggestions were shared. This feedback
            highlighted opportunities to further refine navigation clarity,
            improve visual indicators for expiring items, and reduce friction in
            everyday interactions. While the current design establishes a strong
            foundation, these insights provide clear direction for meaningful
            refinement and polish. Continued iteration will focus on
            accessibility, simplicity, and responsiveness to real user needs.
            The goal is to fully complete and release NoWasteMate as a finished
            application by December 2026.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex aspect-video mt-12"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.4,
          margin: "0px 0px 200px 0px",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Gallery items={items} index={index} setIndex={setIndex} />
      </motion.div>
    </>
  );
}
