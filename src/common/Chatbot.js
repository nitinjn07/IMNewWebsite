import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  Send,
  User,
  X,
  Home,
  HelpCircle,
  Search,
  MessageSquare,
  Building2,
  Users,
  Megaphone,
  LayoutGrid,
} from "lucide-react";
import axios from "axios";

const FAQ_QUESTIONS = [
  {
    question: "What are your service hours?",
    answer:
      "We provide 24/7 support to ensure you get help whenever you need it. Our dedicated team is always available to assist you with any queries or concerns.",
    image: "../5.png",
  },
  {
    question: "How can I get started?",
    answer:
      "Getting started is easy! Simply create an account, complete your profile, and you're ready to go. We offer a guided tutorial for new users.",
    image: "../6.png",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer flexible pricing plans to suit businesses of all sizes. Our plans start from $29/month with a free trial available.",
    image: "../7.png",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes! Our mobile app is available on both iOS and Android platforms. Download it to access your account on the go.",
    image: "../8.png",
  },
  {
    question: "What are your service hours?",
    answer:
      "We provide 24/7 support to ensure you get help whenever you need it. Our dedicated team is always available to assist you with any queries or concerns.",
    image: "../5.png",
  },
  {
    question: "How can I get started?",
    answer:
      "Getting started is easy! Simply create an account, complete your profile, and you're ready to go. We offer a guided tutorial for new users.",
    image: "../6.png",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer flexible pricing plans to suit businesses of all sizes. Our plans start from $29/month with a free trial available.",
    image: "../7.png",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes! Our mobile app is available on both iOS and Android platforms. Download it to access your account on the go.",
    image: "../8.png",
  },
];

const HELP_SECTIONS = [
  {
    title: "Company Overview",
    icon: Building2,
    content:
      "We are a leading provider of innovative solutions, serving clients worldwide since 2010. Our mission is to empower businesses through technology.",
    image: "../1.png",
  },
  {
    title: "Prospect Lists",
    icon: Users,
    content:
      "Build and manage targeted prospect lists with our advanced filtering and segmentation tools. Import, export, and update your lists with ease.",
    image: "../2.png",
  },
  {
    title: "Campaigns",
    icon: Megaphone,
    content:
      "Create and manage multi-channel campaigns with our intuitive campaign builder. Track performance and optimize your reach in real-time.",
    image: "../3.png",
  },
  {
    title: "Organizations Suite",
    icon: LayoutGrid,
    content:
      "A comprehensive suite of tools to manage your organization's structure, teams, and permissions. Streamline your workflow with our powerful features.",
    image: "../4.png",
  },
  {
    title: "Company Overview",
    icon: Building2,
    content:
      "We are a leading provider of innovative solutions, serving clients worldwide since 2010. Our mission is to empower businesses through technology.",
    image: "../1.png",
  },
  {
    title: "Prospect Lists",
    icon: Users,
    content:
      "Build and manage targeted prospect lists with our advanced filtering and segmentation tools. Import, export, and update your lists with ease.",
    image: "../2.png",
  },
  {
    title: "Campaigns",
    icon: Megaphone,
    content:
      "Create and manage multi-channel campaigns with our intuitive campaign builder. Track performance and optimize your reach in real-time.",
    image: "../3.png",
  },
  {
    title: "Organizations Suite",
    icon: LayoutGrid,
    content:
      "A comprehensive suite of tools to manage your organization's structure, teams, and permissions. Streamline your workflow with our powerful features.",
    image: "../4.png",
  },
];

const SYSTEM_PROMPT = `You are an AI assistant for Incubation Masters Global, a premier business consulting firm. 

Key Information:
- Company: Incubation Masters Global (IM)
- Focus: Business consulting and startup empowerment
- Main Product: Elevate by IM (EIM)
- Core Services: Startup consulting, business strategy, AI solutions

Response Guidelines:
1. Keep responses concise and professional (2-3 sentences max)
2. Focus on practical, actionable advice
3. Relate answers to IM's services when relevant
4. Be direct and solution-oriented

Areas of Expertise:
- Startup ecosystem
- Business strategy
- Technology integration
- Industry-specific solutions
- Growth optimization

If a question is outside IM's scope, politely redirect to relevant services or suggest scheduling a consultation.`;

// Typing animation component
const TypingAnimation = () => (
  <div className="flex space-x-2 p-3 bg-white/5 border border-white/10 rounded-lg w-16">
    <div
      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
      style={{ animationDelay: "0ms" }}
    />
    <div
      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
      style={{ animationDelay: "150ms" }}
    />
    <div
      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
      style={{ animationDelay: "300ms" }}
    />
  </div>
);

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [selectedHelp, setSelectedHelp] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState(FAQ_QUESTIONS);
  const messagesEndRef = React.useRef(null);

  const GEMINI_API_KEY = "AIzaSyDY6c1V33qvNGY9gG37-Hj8cL-jKJakCjg";
  const GEMINI_API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
  const CONTACT_API_URL = "https://app.incubationmasters.com:5000/api/messages";

  const scrollbarStyles = `
    scrollbar scrollbar-w-1.5 scrollbar-track-transparent scrollbar-thumb-gray-400/20 
    hover:scrollbar-thumb-gray-400/30 scrollbar-thumb-rounded-full
  `;

  const generateGeminiPrompt = (userMessage) => {
    return {
      contents: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT + "\n\n" + userMessage }],
        },
      ],
    };
  };

  const sendMessage = async (messageText) => {
    const textToSend = messageText || input;
    if (!textToSend.trim()) return;

    // Add user message to chat
    setMessages((prev) => [...prev, { sender: "user", text: textToSend }]);
    setInput("");
    setIsTyping(true);

    try {
      const prompt = generateGeminiPrompt(textToSend);
      const response = await axios.post(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        prompt,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const botResponse = response.data.candidates[0].content.parts[0].text;
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "I apologize, but I'm having trouble processing your request at the moment. Please try again later.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(CONTACT_API_URL, contactForm, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Contact form submitted successfully:", response.data);
      setUserDetails(contactForm);
      setInquiryMessage(contactForm.message);
      setFormSubmitted(true);

      // Reset messages and add welcome message
      setMessages([
        {
          sender: "bot",
          text: `Thank you, ${contactForm.name}! I'll help you with your inquiry right away.`,
        },
      ]);

      // Automatically send the inquiry message to get a response
      setIsTyping(true);
      try {
        const prompt = generateGeminiPrompt(contactForm.message);
        const botResponse = await axios.post(
          `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
          prompt,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "user", text: contactForm.message },
          {
            sender: "bot",
            text: botResponse.data.candidates[0].content.parts[0].text,
          },
        ]);
      } catch (error) {
        console.error("Error getting initial response:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "user", text: contactForm.message },
          {
            sender: "bot",
            text: "I apologize, but I'm having trouble processing your inquiry at the moment. Please try rephrasing your question.",
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);

      if (error.response) {
        console.error("API Error:", error.response.status, error.response.data);
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `There was an issue submitting your inquiry. Status: ${error.response.status}. Please try again later.`,
          },
        ]);
      } else if (error.request) {
        console.error("No Response:", error.request);
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "There was an issue submitting your inquiry. No response from the server. Please try again later.",
          },
        ]);
      } else {
        console.error("Request Error:", error.message);
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "There was an issue submitting your inquiry. Please try again later.",
          },
        ]);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getWindowDimensions = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      return "fixed inset-0 w-full h-full";
    }
    if (selectedFAQ || selectedHelp) {
      return "w-[800px] h-[600px]";
    }
    return "w-96 h-[600px]";
  };

  const renderHome = () => (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <div className="sticky top-0 bg-[#060922] p-4 z-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Welcome to IM Support 👋
          </h2>
          <p className="text-gray-300">We're here 24/7 to help you succeed</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09A8EB] text-white placeholder-gray-400"
          />
        </div>
      </div>

      <div className={`flex-1 overflow-y-auto p-4 ${scrollbarStyles}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
          {searchQuery && filteredQuestions.length === 0 ? (
            <div className="col-span-2 text-center text-gray-400 py-8">
              No matching questions found
            </div>
          ) : (
            filteredQuestions.map((faq, index) => (
              <button
                key={index}
                onClick={() => setSelectedFAQ(faq)}
                className="text-left cursor-pointer p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <p className="font-medium text-white">{faq.question}</p>
                {searchQuery && (
                  <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                    {faq.answer}
                  </p>
                )}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );

  const renderFAQDetail = () => (
    <div className="flex flex-col w-full h-full">
      <div className={`w-full h-full overflow-y-auto ${scrollbarStyles}`}>
        <div className="w-full p-4 border-b md:border-r border-white/10">
          <button
            onClick={() => setSelectedFAQ(null)}
            className="mb-4 text-[#09A8EB] hover:text-[#09A8EB]/80 flex items-center gap-2"
          >
            <span className="text-lg bold">&lt; Back</span>
          </button>
          <h2 className="text-xl font-bold mb-4 text-white">
            {selectedFAQ.question}
          </h2>
          <p className="text-gray-300">{selectedFAQ.answer}</p>
        </div>
        <div className="w-full p-4">
          <img
            src={selectedFAQ.image}
            alt="FAQ illustration"
            className="w-full h-48 md:h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );

  const renderHelp = () => (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <div className="sticky top-0 bg-[#060922] p-4 z-10">
        <h2 className="text-2xl font-bold mb-2 text-white text-center">
          Help Center
        </h2>
      </div>

      <div className={`flex-1 overflow-y-auto p-4 ${scrollbarStyles}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
          {HELP_SECTIONS.map((section, index) => (
            <button
              key={index}
              onClick={() => setSelectedHelp(section)}
              className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200 flex flex-col items-center"
            >
              <section.icon className="w-8 h-8 text-[#09A8EB] mb-2" />
              <h3 className="font-medium text-center text-white">
                {section.title}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderHelpDetail = () => (
    <div className="flex flex-col w-full h-full">
      <div className={`w-full h-full overflow-y-auto ${scrollbarStyles}`}>
        <div className="w-full p-4 border-b md:border-r border-white/10">
          <button
            onClick={() => setSelectedHelp(null)}
            className="mb-4 text-[#09A8EB] hover:text-[#09A8EB]/80 flex items-center gap-2"
          >
            <span className="text-lg bold">&lt; Back</span>
          </button>
          <h2 className="text-xl font-bold mb-4 text-white">
            {selectedHelp.title}
          </h2>
          <p className="text-gray-300">{selectedHelp.content}</p>
        </div>
        <div className="w-full p-4">
          <img
            src={selectedHelp.image}
            alt="Help section illustration"
            className="w-full h-48 md:h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="flex-1 flex flex-col h-full relative">
      {!userDetails ? (
        <form onSubmit={handleContactSubmit} className="p-4 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contactForm.name}
            onChange={handleContactChange}
            className="w-full bg-white/5 border border-white/20 rounded-lg p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09A8EB]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contactForm.email}
            onChange={handleContactChange}
            className="w-full bg-white/5 border border-white/20 rounded-lg p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09A8EB]"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            value={contactForm.mobile}
            onChange={handleContactChange}
            className="w-full bg-white/5 border border-white/20 rounded-lg p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09A8EB]"
            required
          />
          <textarea
            name="message"
            placeholder="Your Inquiry"
            value={contactForm.message}
            onChange={handleContactChange}
            className="w-full bg-white/5 border border-white/20 rounded-lg p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09A8EB]"
            rows="3"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#09A8EB] cursor-pointer text-white p-2 rounded-lg hover:bg-[#09A8EB]/80 transition"
          >
            Submit Inquiry
          </button>
        </form>
      ) : (
        <>
          <div className={`flex-1 overflow-y-auto pb-20 ${scrollbarStyles}`}>
            <div className="p-4 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start gap-2 max-w-[85%] ${
                      msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        msg.sender === "user" ? "bg-[#09A8EB]" : "bg-white/10"
                      }`}
                    >
                      {msg.sender === "user" ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <MessageCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        msg.sender === "user"
                          ? "bg-[#09A8EB] text-white"
                          : "bg-white/5 border border-white/10 text-white"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <TypingAnimation />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-[#060922]">
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 bg-white/5 border border-white/20 rounded-lg p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09A8EB]"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                onClick={() => sendMessage()}
                className="bg-[#09A8EB] cursor-pointer text-white p-2 rounded-lg hover:bg-[#09A8EB]/80 transition"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const filtered = FAQ_QUESTIONS.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredQuestions(filtered);
  }, [searchQuery]);

  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-8 md:right-8">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-[#09A8EB] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#09A8EB]/80 transition-all duration-200 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div
          className={`${getWindowDimensions()} bg-[#060922] rounded-lg shadow-2xl flex flex-col animate-in slide-in-from-bottom duration-300`}
        >
          <div className="border-b border-white/10 p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Support Center</h1>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/5 rounded-full text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-hidden">
            {selectedFAQ
              ? renderFAQDetail()
              : selectedHelp
              ? renderHelpDetail()
              : activeSection === "home"
              ? renderHome()
              : activeSection === "messages"
              ? renderMessages()
              : renderHelp()}
          </div>

          <div className="border-t border-white/10 bg-[#060922]">
            <div className="flex justify-around p-2">
              <button
                onClick={() => {
                  setActiveSection("home");
                  setSelectedFAQ(null);
                  setSelectedHelp(null);
                }}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg ${
                  activeSection === "home"
                    ? "text-[#09A8EB]"
                    : "text-gray-400 hover:text-[#09A8EB]"
                }`}
              >
                <Home className="w-5 h-5" />
                <span className="text-xs">Home</span>
              </button>
              <button
                onClick={() => {
                  setActiveSection("messages");
                  setSelectedFAQ(null);
                  setSelectedHelp(null);
                }}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg ${
                  activeSection === "messages"
                    ? "text-[#09A8EB]"
                    : "text-gray-400 hover:text-[#09A8EB]"
                }`}
              >
                <MessageSquare className="w-5 h-5" />
                <span className="text-xs">Messages</span>
              </button>
              <button
                onClick={() => {
                  setActiveSection("help");
                  setSelectedFAQ(null);
                  setSelectedHelp(null);
                }}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg ${
                  activeSection === "help"
                    ? "text-[#09A8EB]"
                    : "text-gray-400 hover:text-[#09A8EB]"
                }`}
              >
                <HelpCircle className="w-5 h-5" />
                <span className="text-xs">Help</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
