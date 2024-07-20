"use client";
import { useState } from 'react';


const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAndAnswers = [
    { question: "How do I apply for PedalCircle?", answer: "You can apply for PedalCircle by visiting our website and filling out the application form. Ensure you meet the eligibility criteria." },
    { question: "Who can apply for PedalCircle?", answer: "Anyone with an innovative startup idea or an existing startup looking to scale can apply for PedalCircle." },
    { question: "How long is the PedalCircle program?", answer: "The PedalCircle program typically lasts for 12 weeks, during which you'll receive mentorship and resources to grow your startup." },
    { question: "What is the innovation hub?", answer: "The innovation hub is a dedicated space where startups can collaborate, innovate, and access various resources provided by PedalCircle." },
    { question: "How can PedalCircle help my startup grow?", answer: "PedalCircle offers mentorship, networking opportunities, and access to funding to help your startup grow and succeed." },
    { question: "Is there a specific industry focus for PedalCircle?", answer: "PedalCircle is industry-agnostic and welcomes startups from various sectors to apply and benefit from the program." }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-heading">FAQ</h1>
      <div className="faq-list">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;