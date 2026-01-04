import React, { useState } from 'react';
import './Reflections.css';

const Reflections = () => {
  const [activeReflection, setActiveReflection] = useState(0);

  const reflections = [
    {
      name: 'Brian Juniarta Darmadi',
      nim: '2702279363',
      role: 'CEO',
      photo: '/images/team/brian-ceo.jpg',
      content: {
        intro: 'For my business idea, BeeGrub, I aimed to create a pre-order food service to streamline the chaotic lunch experience for BINUS University students. I believed there was strong demand for it among my peers who constantly complain about queues. My core assumption was that students would find this service useful and affordable, primarily because it saved them time.',
        targetAudience: 'I focused on fellow BINUS University @Anggrek students for market validation. I chose them because, as a student myself, I have firsthand experience with the problem. To reach them, I used methods like Instagram story polls and informal "canteen-side chats." These methods were highly effective because they felt natural and generated honest, unfiltered opinions right at the source of the problem.',
        methods: 'I used online surveys and direct, on-the-ground observation to gather feedback. The surveys gave us great quantitative data, but the observation was the real eye-opener. Watching the "canteen dance"—students circling for seats, splitting up to queue and save tables, the visible stress—worked incredibly well because it revealed pain points that users wouldn\'t even think to mention in a survey.',
        insights: 'The feedback I received included overwhelmingly positive comments, with many calling the idea "gacor." However, my initial assumption that this was purely about saving time was challenged. The feedback revealed it\'s more about reducing stress and uncertainty. For example, students loved the pre-order feature but also had concerns about the pickup process being just another queue. This showed me the value isn\'t just speed, but the peace of mind that comes from having a guaranteed meal ready for you.',
        challenges: 'I faced challenges like low initial survey responses. This was because my first questions were too generic ("Would you use a food app?"). To address this, I reframed the questions to be more empathetic ("What\'s the most stressful part of your lunch break?"), which dramatically increased engagement and the quality of the insights.',
        outcomes: 'Based on the feedback, I will focus on improving the entire user journey, not just the ordering part. The feedback showed me that a frictionless pickup is just as important as an easy-to-use app. My next step is to design and test different physical pickup point concepts to ensure they are fast and stress-free.',
        conclusion: 'This process helped me learn a key lesson: we aren\'t just selling time; we\'re selling certainty and peace of mind. Moving forward, I will focus on a holistic service design strategy that addresses the user\'s emotional journey, from the moment they feel hungry to the moment they take their first bite.'
      }
    },
    {
      name: 'Mochammad Aqsa Sandhy Pradipta',
      nim: '2702302744',
      role: 'CFO',
      photo: '/images/team/aqsa-cfo.jpg',
      content: {
        intro: 'For this business idea, we aimed to create BeeGrub, a pre-order and food delivery service designed specifically for BINUS students. This idea came from real problems students often face, such as short break times, long queues at the canteen, and difficulty getting food efficiently on campus.',
        targetAudience: 'The market validation focused on BINUS University students, especially those who often eat at the campus canteen. The validation process was carried out by opening a BeeGrub booth during the BIFEST event, having direct conversations with students, and collecting feedback through online forms. This approach worked well because it allowed us to interact directly with real users and gather honest, relevant feedback.',
        methods: 'Most of the feedback we received was positive. Many students said that the pre-order and no-queue concept would help them save time and reduce stress during their break. However, some students also shared concerns about service pricing and pickup point clarity, showing that while the idea is attractive, clear execution is very important.',
        insights: 'One challenge during the validation process was that feedback mainly came from students who attended the same event, which limited the variety of responses. To improve this, future validation will include students from different faculties and class schedules.',
        challenges: 'Throughout the validation, we learned that pricing transparency and operational clarity are as important as the core value proposition. Students need to understand exactly how the service works before they commit to using it regularly.',
        outcomes: 'Based on the feedback, our next steps are to adjust the pricing, make the pickup process clearer, and run a small-scale trial. This validation process helped confirm that there is a real need for a faster and more practical food solution, and that BeeGrub has strong potential to grow as a campus-based service.',
        conclusion: 'The journey taught us that financial viability and user trust go hand in hand. A sustainable business model must balance affordability for students with operational sustainability for the platform.'
      }
    },
    {
      name: 'Jesslyn Trixie Edvilie',
      nim: '2702260514',
      role: 'COO',
      photo: '/images/team/jesslyn-coo.jpg',
      content: {
        intro: 'For my business idea, I aimed to create BeeGrub, a tech platform to solve food logistics on campus. I believed there was a strong demand for it among students who are digitally native and expect efficiency. I assumed that students would find this product useful and affordable if the tech was seamless and reliable.',
        targetAudience: 'I focused on tech-savvy college students at BINUS for market validation. I chose them because they are the early adopters who would appreciate a well-built app and are most vocal about their user experience. To reach them, I used methods like posting on the BINUS Discord server and targeted social media messages. These methods were effective because they allowed for direct, asynchronous conversations with our ideal initial user base.',
        methods: 'I used prototype testing (Figma mockups) and technical feasibility interviews with canteen vendors to gather feedback. These methods worked well because they allowed me to validate both the front-end (user appeal) and the back-end (vendor buy-in) simultaneously. Getting a vendor to say, "Yes, this could actually work with our kitchen flow," was a huge win.',
        insights: 'The feedback I received included positive comments on the UI and suggestions for more payment integrations. My assumption that a good app was enough was confirmed, but with a twist. For example, customers liked the clean interface but had concerns about what happens if an order goes wrong. This highlighted the need for a robust in-app customer support feature, not just a slick ordering system.',
        challenges: 'I faced challenges like technical skepticism from some vendors who were worried about integrating a new system during their busiest hours. This affected my results by showing that vendor adoption was a bigger hurdle than student adoption. To address this, I created a simple one-page guide explaining the benefits for them (e.g., predictable order flow, less waste) and proposed a phased, low-risk trial period.',
        outcomes: 'Based on the feedback, I will prioritize building a reliable backend and a simple vendor dashboard. The feedback showed me that trust is paramount, both for students and vendors. My next step is to develop a minimum viable product (MVP) with a rock-solid order-tracking system and a basic vendor management portal.',
        conclusion: 'This process helped me learn that a successful platform is built on trust, not just features. The technology must be flawless to create a reliable service. Moving forward, I will focus on a development strategy that prioritizes stability, security, and scalability to build a foundation of trust for the BeeGrub ecosystem.'
      }
    },
    {
      name: 'Mirekel Tjoa',
      nim: '2702328831',
      role: 'CMO',
      photo: '/images/team/mirekel-cmo.jpg',
      content: {
        intro: 'For our business idea, we aimed to create a food delivery service with a pre-order system. We believed there was strong demand for it among Bina Nusantara University students. I assumed that students would find this product useful and affordable because academic pressure often makes them focus on urgent tasks rather than eating.',
        targetAudience: 'We focused on Bina Nusantara University students, specifically those at the Anggrek campus, for market validation. We chose them because they seem to need my service based on the fact that campus activities are so busy that students often skip meals or have inconsistent eating schedules. To reach them, we used methods like analyzing supporting data from student-focused blogs and news outlets. These methods were effective because they highlighted that students often forget to eat more frequently than they forget their deadlines.',
        methods: 'We used Figma mockups and online surveys to gather feedback data. These methods worked well because they provided specific categories for improvement, such as new ideas, questions, and criticisms. The feedback we received included positive comments and suggestions, such as expanding to other Binus regions.',
        insights: 'Our assumption was confirmed because many students expressed that vertical congestion (waiting for elevators) and a deficit of seats in the canteen make it hard to eat on time. This validated our core problem statement and showed us that the pain point was real and widespread.',
        challenges: 'We faced challenges like some respondents feeling the product was not yet a perfect fit for their current needs. These challenges affected my results by highlighting the need for more variety. To address this, I plan to collaborate with more food vendors and add features like review and rating systems.',
        outcomes: 'Based on the feedback, we will increase the number of pickup points to make it easier for students to collect their orders. The feedback showed that students value time efficiency, and my next step is to improve the overall quality of the application and integrate more digital payment systems.',
        conclusion: 'This validation process has been instrumental in transforming BeeGrub from a simple delivery concept into a targeted logistical solution for "Vertical Congestion." We have learned that the value proposition of BeeGrub is not just about "food delivery," but about reclaiming time. This reflection has taught us that successful entrepreneurship requires a balance between a fixed vision and a flexible execution.'
      }
    },
    {
      name: 'Nico Wijaya Hariyanto',
      nim: '2702223260',
      role: 'CTO',
      photo: '/images/team/nico-cto.jpg',
      content: {
        intro: 'For our business idea, BeeGrub, I contributed to validating a pre-order food delivery platform designed to solve the chaotic lunch experience for BINUS Anggrek students. My role as CTO extended beyond technical oversight. I was deeply involved in processing user feedback, coordinating validation activities, and stepping in to manage operational gaps when the team faced confusion. My core assumption was that a seamless, app-based pre-order system would be widely adopted if it genuinely saved time and reduced stress.',
        targetAudience: 'We focused exclusively on BINUS University students at the Anggrek campus since they are the primary users who face daily lunchtime inefficiencies (especially those who had classes on higher floors). As a student myself, I understood the context, but we needed structured validation. We reached them through digital surveys distributed at our booth during Binus Festival and Entrepreneurship Corner events, direct observation of lunchtime behaviors in canteens and common areas, and informal interviews with peers during breaks.',
        methods: 'My involvement centered on processing and analyzing survey responses (60 entries from the feedback form), cross-referencing feedback with operational plans in the BMC and proposal docs, and facilitating team alignment by clarifying technical and logistical constraints during planning. The survey was our primary tool, but I also helped simulate order-flow scenarios to stress-test our proposed system.',
        insights: 'Key findings from the feedback included high perceived usefulness (85%+ of respondents rated the idea positively like "bagus," "gacor," "sangat bermanfaat"), strong interest in pre-order features, especially for time-crunched students, and critical concerns. The critical concerns that emerged were like pickup point availability and crowding, needs for in-app guidance and transparency, requests for expanded campus coverage (beyond Anggrek).',
        challenges: 'Throughout my experience in this team, I encountered several challenges like role overreach (as CTO, I frequently had to step into operational and coordination gaps when other leads were unclear—this diverted focus from technical planning), feedback ambiguity (some survey responses were vague or contradictory, making it hard to prioritize features) and technical-operational disconnect (while the app prototype was promising, vendors and logistics posed real-world hurdles not fully captured in early feedback).',
        outcomes: 'Based on validation insights, I will advocate for a robust backend and vendor dashboard to ensure order reliability, push for clear in-app instructions and pickup point guidelines to reduce user confusion, support a staged rollout (starting with several floors and 1–2 shops) to iron out operational kinks before scaling and prioritize a transparent tracking system so users know exactly when and where to collect orders.',
        conclusion: 'This validation journey taught me that technology alone cannot solve a logistical problem—it must be supported by airtight operations and clear user communication. My role as CTO evolved from mere technical oversight to becoming a bridge between user expectations and operational reality. Moving forward, I will focus on building systems that are not only functional but also resilient and trustworthy.'
      }
    }
  ];

  return (
    <section id="reflections" className="reflections-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Reflection</span>
          <h2 className="section-title">
            Market Validation <span className="gradient-text">Reflection</span>
          </h2>
          {/* <p className="section-subtitle">
            Reflections and key learnings from 5 BeeGrub team members throughout the market validation process.
          </p> */}
        </div>

        {/* Team Member Selector */}
        <div className="member-selector">
          {reflections.map((member, index) => (
            <button
              key={index}
              className={`member-btn ${activeReflection === index ? 'active' : ''}`}
              onClick={() => setActiveReflection(index)}
            >
              <img src={member.photo} alt={member.name} />
              <div className="member-info">
                <div className="member-name">{member.name.split(' ')[0]}</div>
                <div className="member-role">{member.role}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Reflection */}
        <div className="reflection-content">
          <div className="reflection-header">
            <img src={reflections[activeReflection].photo} alt={reflections[activeReflection].name} className="reflection-photo" />
            <div>
              <h3 className="reflection-name">{reflections[activeReflection].name}</h3>
              <p className="reflection-nim">NIM: {reflections[activeReflection].nim}</p>
              <p className="reflection-role">{reflections[activeReflection].role}</p>
            </div>
          </div>

          <div className="reflection-body">
            <p className="reflection-paragraph">
              {reflections[activeReflection].content.intro}
            </p>
            <p className="reflection-paragraph">
              {reflections[activeReflection].content.targetAudience}
            </p>
            <p className="reflection-paragraph">
              {reflections[activeReflection].content.methods}
            </p>
            <p className="reflection-paragraph">
              {reflections[activeReflection].content.insights}
            </p>
            <p className="reflection-paragraph">
              {reflections[activeReflection].content.challenges}
            </p>
            <p className="reflection-paragraph">
              {reflections[activeReflection].content.outcomes}
            </p>
            <p className="reflection-paragraph reflection-paragraph--highlight">
              {reflections[activeReflection].content.conclusion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reflections;
