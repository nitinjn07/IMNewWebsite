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
import "./Chatbot.css";

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

const TypingAnimation = () => (
    <div className="chatbot-typing">
        <div className="chatbot-typing-dot" />
        <div className="chatbot-typing-dot" />
        <div className="chatbot-typing-dot" />
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
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const messagesEndRef = React.useRef(null);

    const GEMINI_API_KEY = "AIzaSyDY6c1V33qvNGY9gG37-Hj8cL-jKJakCjg";
    const GEMINI_API_URL =
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
    const CONTACT_API_URL = "https://app.incubationmasters.com:5000/api/messages";

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

            setMessages([
                {
                    sender: "bot",
                    text: `Thank you, ${contactForm.name}! I'll help you with your inquiry right away.`,
                },
            ]);

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
        if (isMobile) {
            return "fixed inset-0 w-full h-full";
        }
        if (selectedFAQ || selectedHelp) {
            return "w-[800px] h-[600px]"; // Expanded width for FAQ/Help details
        }
        return "w-96 h-[600px]"; // Default size
    };


    const renderHome = () => (
        <div className="chatbot-home">
            <div className="chatbot-home-search">
                <Search className="chatbot-home-search-icon" />
                <input
                    type="text"
                    placeholder="Search for help..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="chatbot-home-grid">
                {searchQuery && filteredQuestions.length === 0 ? (
                    <div className="chatbot-home-no-results">
                        No matching questions found
                    </div>
                ) : (
                    filteredQuestions.map((faq, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedFAQ(faq)}
                            className="chatbot-home-item"
                        >
                            <p>{faq.question}</p>
                            {searchQuery && <p className="chatbot-home-item-answer">{faq.answer}</p>}
                        </button>
                    ))
                )}
            </div>
        </div>
    );

    const renderFAQDetail = () => (
        <div className="chatbot-faq-detail">
            <div className="chatbot-faq-detail-content">
                <button
                    onClick={() => setSelectedFAQ(null)}
                    className="chatbot-faq-back"
                >
                    &lt; Back
                </button>
                <h2>{selectedFAQ.question}</h2>
                <p>{selectedFAQ.answer}</p>
            </div>
            <div className="chatbot-faq-detail-image">
                <img src={selectedFAQ.image} alt="FAQ illustration" />
            </div>
        </div>
    );

    const renderHelp = () => (
        <div className="chatbot-help">
            <div className="chatbot-help-grid">
                {HELP_SECTIONS.map((section, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedHelp(section)}
                        className="chatbot-help-item"
                    >
                        <section.icon className="chatbot-help-item-icon" />
                        <h3>{section.title}</h3>
                    </button>
                ))}
            </div>
        </div>
    );

    const renderHelpDetail = () => (
        <div className="chatbot-help-detail">
            <div className="chatbot-help-detail-content">
                <button
                    onClick={() => setSelectedHelp(null)}
                    className="chatbot-help-back"
                >
                    &lt; Back
                </button>
                <h2>{selectedHelp.title}</h2>
                <p>{selectedHelp.content}</p>
            </div>
            <div className="chatbot-help-detail-image">
                <img src={selectedHelp.image} alt="Help section illustration" />
            </div>
        </div>
    );

    const renderMessages = () => (
        <div className="chatbot-messages">
            {!userDetails ? (
                <form onSubmit={handleContactSubmit} className="chatbot-messages-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        required
                    />
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile"
                        value={contactForm.mobile}
                        onChange={handleContactChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Inquiry"
                        value={contactForm.message}
                        onChange={handleContactChange}
                        rows="3"
                        required
                    />
                    <button type="submit">Submit Inquiry</button>
                </form>
            ) : (
                <>
                    <div className="chatbot-messages-list">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`chatbot-message ${msg.sender === "user" ? "user" : "bot"
                                    }`}
                            >
                                <div className="chatbot-message-content">
                                    <div
                                        className={`chatbot-message-avatar ${msg.sender === "user" ? "user" : "bot"
                                            }`}
                                    >
                                        {msg.sender === "user" ? (
                                            <User className="chatbot-message-avatar-icon" />
                                        ) : (
                                            <MessageCircle className="chatbot-message-avatar-icon" />
                                        )}
                                    </div>
                                    <div
                                        className={`chatbot-message-text ${msg.sender === "user" ? "user" : "bot"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="chatbot-message bot">
                                <div className="chatbot-message-content">
                                    <div className="chatbot-message-avatar bot">
                                        <MessageCircle className="chatbot-message-avatar-icon" />
                                    </div>
                                    <TypingAnimation />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="chatbot-messages-input">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button onClick={() => sendMessage()}>
                            <Send className="chatbot-messages-send-icon" />
                        </button>
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

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className="chatbot-container">
            {!isOpen && (
                <button onClick={() => setIsOpen(true)} className="chatbot-button">
                    <MessageCircle className="chatbot-button-icon" />
                </button>
            )}

            {isOpen && (
                <div className={`chatbot-window ${isMobile ? "mobile" : ""} ${selectedFAQ || selectedHelp ? "expanded" : ""}`}>
                    <div className="chatbot-header">
                        <h1>Support Center</h1>
                        <button onClick={() => setIsOpen(false)}>
                            <X className="chatbot-header-close-icon" />
                        </button>
                    </div>

                    <div className="chatbot-content">
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

                    <div className="chatbot-footer">
                        <div className="chatbot-footer-nav">
                            <button
                                onClick={() => {
                                    setActiveSection("home");
                                    setSelectedFAQ(null);
                                    setSelectedHelp(null);
                                }}
                                className={`chatbot-footer-button ${activeSection === "home" ? "active" : ""
                                    }`}
                            >
                                <Home className="chatbot-footer-icon" />
                                <span>Home</span>
                            </button>
                            <button
                                onClick={() => {
                                    setActiveSection("messages");
                                    setSelectedFAQ(null);
                                    setSelectedHelp(null);
                                }}
                                className={`chatbot-footer-button ${activeSection === "messages" ? "active" : ""
                                    }`}
                            >
                                <MessageSquare className="chatbot-footer-icon" />
                                <span>Messages</span>
                            </button>
                            <button
                                onClick={() => {
                                    setActiveSection("help");
                                    setSelectedFAQ(null);
                                    setSelectedHelp(null);
                                }}
                                className={`chatbot-footer-button ${activeSection === "help" ? "active" : ""
                                    }`}
                            >
                                <HelpCircle className="chatbot-footer-icon" />
                                <span>Help</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chatbot;