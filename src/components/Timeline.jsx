import React from 'react';

const Timeline = () => {
  return (
    <section id="timeline" className="py-16 px-4 md:px-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-10 underline">Timeline</h2>
      <div className="space-y-12">
        <div className="relative">
          <div className="space-y-8">
            <div className="timeline-item flex flex-col md:flex-row">
              <div className="text-lg font-bold md:w-1/4">2024 — PRESENT</div>
              <div className="mt-2 md:w-3/4">
                <h4 className="text-xl font-bold text-teal-400">Full Stack Web Developer</h4>
                <p className="text-gray-400">ACE Project Space</p>
                <p className="mt-2 text-gray-400">Building an admin tool for a startup. Using Angular, TypeScript and Angular reactive forms. </p>
              </div>
            </div>
            <div className="timeline-item flex flex-col md:flex-row">
              <div className="text-lg font-bold md:w-1/4">2023 — 2024</div>
              <div className="mt-2 md:w-3/4">
                <h4 className="text-xl font-bold">Diploma in Full Stack Web Development</h4>
                <p className="text-gray-400">Red River College Polytechnic</p>
                <p className="mt-2 text-gray-400">Focused on full stack web development, agile methodologies, and communication skills.</p>
              </div>
            </div>
            <div className="timeline-item flex flex-col md:flex-row">
              <div className="text-lg font-bold md:w-1/4">2016 — 2021</div>
              <div className="mt-2 md:w-3/4">
                <h4 className="text-xl font-bold">Bachelor of Computer Science and Engineering</h4>
                <p className="text-gray-400">Metropolitan University Bangladesh</p>
                <p className="mt-2 text-gray-400">Focused on software development, data structures, algorithms, and web technologies.</p>
              </div>
            </div>

            </div>
          </div>
        </div>
    </section>
  );
};

export default Timeline;
