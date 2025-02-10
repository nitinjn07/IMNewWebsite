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
    ChevronRight,
    ExternalLink,
    ArrowLeft,
} from "lucide-react";
import axios from "axios";
import "./Chatbot.css";

const HelpSection = ({ selectedHelp, setSelectedHelp }) => {
    if (selectedHelp) {
        return (
            <div className="flex flex-col h-full bg-white">
                <div className="p-4 border-b">
                    <button
                        onClick={() => setSelectedHelp(null)}
                        className="flex items-center text-gray-600 hover:text-[#09AFF4]"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back
                    </button>
                </div>
                <div className="flex-1 p-6 overflow-y-auto">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-xl font-semibold mb-4">{selectedHelp.title}</h2>
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-1">
                                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                    {selectedHelp.content}
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={selectedHelp.image}
                                    alt={selectedHelp.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-gray-50 p-4">
            <div className="grid gap-3">
                {HELP_SECTIONS.map((section, index) => {
                    const Icon = section.icon;
                    return (
                        <button
                            key={index}
                            onClick={() => setSelectedHelp(section)}
                            className="w-full bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#09AFF4] transition-colors text-left flex items-center justify-between group"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-[#09AFF4]" />
                                </div>
                                <span className="text-gray-700 font-medium group-hover:text-[#09AFF4]">
                                    {section.title}
                                </span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#09AFF4]" />
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

const FAQ_QUESTIONS = [
    {
        question: "What is EIM?",
        answer:
            "Elevate by Incubation Masters (EIM) is a 3D immersive business incubation program designed to empower startups in Asian countries. By integrating AI-driven financial modeling, real-time analytics, and a comprehensive virtual ecosystem, EIM provides startups with essential tools and mentorship to navigate challenges and accelerate growth. Through a single virtual platform, startups can collaborate, network, access funding opportunities, and receive expert guidance from mentors, investors, and industry professionals.",
        image: "../../assets/images/5.png",
    },
    {
        question: "Who is EIM for?",
        answer:
            "EIM is for early-stage and scaling startups in Asian countries looking for mentorship, networking, funding opportunities, and business resources to accelerate their growth.",
        image: "../../assets/images/6.png",
    },
    {
        question: "How does EIM help me in my startup journey?",
        answer:
            "EIM provides a structured ecosystem with AI-driven business modeling, mentor matchmaking, investor access, real-time analytics, and vital startup resources to help entrepreneurs scale efficiently.",
        image: "../../assets/images/7.png",
    },
    {
        question: "What’s the pricing model for EIM?",
        answer:
            "EIM offers flexible pricing plans tailored to different startup needs. Contact our team for detailed pricing and subscription options.",
        image: "../../assets/images/8.png",
    },
    {
        question: "Which EIM plan is right for me?",
        answer:
            "The right plan depends on your startup's stage, funding needs, and mentorship requirements. Our team can guide you in selecting the best plan based on your business goals.",
        image: "../../assets/images/5.png",
    },
    {
        question: "How do I get started with EIM?",
        answer:
            "Getting started is easy! Simply create an account, complete your profile, and you're ready to go. We offer a guided tutorial for new users.",
        image: "../../assets/images/6.png",
    },
    {
        question: "EIM Blogs ",
        answer:
            "Stay updated with insights, trends, and success stories from the startup world by exploring our blog section.",
        image: "../../assets/images/7.png",
    },
    {
        question: "How can I contact support?",
        answer:
            "You can reach our support team via email, live chat on our platform, or by submitting a request through our contact form.",
        image: "../../assets/images/8.png",
    },
];

const HELP_SECTIONS = [
    {
        title: "AI-Powered Startup Growth Platform",
        icon: Building2,
        content:
            "EIM is more than just an incubation program—it’s an AI-powered startup growth platform designed to help entrepreneurs validate ideas, analyze markets, automate business planning, gain customer insights, and secure funding opportunities. By leveraging AI and data-driven strategies, EIM provides a virtual ecosystem where startups can access mentorship, collaborate with industry experts, and build sustainable business models. Whether you're in the ideation phase or scaling your business, our platform equips you with the right tools, knowledge, and network to thrive.",
        image: "../../assets/images/1.png",
    },
    {
        title: "Idea Validation & Refinement",
        icon: Users,
        content:
            "Turning an idea into a successful business requires more than just passion—it demands data-driven validation and strategic refinement.With EIM, startups can:✅ Test their business idea using AI-powered validation tools ✅ Identify potential risks and challenges early ✅ Get expert feedback from mentors and industry specialists ✅ Refine their value proposition based on real market insights Our structured framework helps entrepreneurs refine their ideas into scalable, high - impact businesses before making significant investments.",
        image: "../../assets/images/2.png",
    },
    {
        title: "AI-Driven Market Research",
        icon: Megaphone,
        content:
            "Understanding your market is crucial for startup success. EIM’s AI-driven market research tools empower startups with:🔹 Real-time industry insights to identify trends and opportunities 🔹 Competitor analysis to understand strengths, weaknesses, and market gaps 🔹 Target audience profiling to refine customer segments🔹 Automated data collection for a faster and more accurate research process With AI-enhanced analytics, startups can make informed decisions, reduce risk, and gain a competitive edge in their industry.",
        image: "../../assets/images/3.png",
    },
    {
        title: "Automated Business Planning",
        icon: LayoutGrid,
        content:
            "Creating a solid business plan is essential for securing investment and scaling effectively. EIM’s AI-powered business planning streamlines this process by: ✅ Generating customized business models tailored to your industry ✅ Providing automated financial projections and revenue modeling ✅ Offering ready - to - use templates for pitch decks, strategy outlines, and investor reports ✅ Guiding startups through business strategy formulation With AI automation, startups can build a structured, data - driven roadmap to attract investors and ensure long - term success.",
        image: "../../assets/images/4.png",
    },
    {
        title: "Intelligent Customer Insights",
        icon: Building2,
        content:
            "Understanding your customers goes beyond basic demographics—it’s about knowing their behaviors, preferences, and needs. EIM’s AI-driven system provides: 🔹 Deep customer segmentation based on behavior, purchase patterns, and engagement levels 🔹 Predictive analytics to forecast customer demand and optimize marketing strategies 🔹 Automated feedback analysis for real-time product/service improvement 🔹 AI-driven persona creation to enhance personalization and user experience With actionable insights, startups can craft customer-centric strategies that improve retention, increase conversions, and drive growth.",
        image: "../../assets/images/1.png",
    },
    {
        title: "Personalised Mentorship & Guidance",
        icon: Users,
        content:
            "One of EIM’s most valuable offerings is its tailored mentorship program. Unlike generic advice, we match startups with mentors based on: ✅ Industry expertise and sector-specific knowledge ✅ Business challenges and growth goals ✅ Funding stage and scalability potential ✅ Technology and product alignment Through one-on-one mentorship sessions, group discussions, and structured coaching, startups receive actionable guidance to navigate challenges, refine strategies, and accelerate success.",
        image: "../../assets/images/2.png",
    },
    {
        title: "Getting Started, Account Management, & Support",
        icon: Megaphone,
        content:
            "Starting your journey with EIM is quick and simple. Follow these steps: 1️⃣ Sign Up – Create an account and set up your startup profile2️⃣ Explore the Platform – Access AI tools, mentorship, and investor networks 3️⃣ Engage with Experts – Get matched with the right mentors and resources4️⃣ Monitor & Scale – Use real-time analytics to track growth and optimize strategies For account management, plan upgrades, or troubleshooting, our support team is available 24/7 via: 📧 Email Support 💬 Live Chat 📞 Customer Helpline We ensure a seamless experience so you can focus on building and growing your business.",
        image: "../../assets/images/3.png",
    },
    {
        title: "Plan Comparison & Pricing",
        icon: LayoutGrid,
        content:
            "EIM offers flexible pricing plans based on your startup’s stage, funding needs, and mentorship requirements. 🔹 Basic Plan – Ideal for early - stage startups needing AI - powered market research and business planning tools. 🔹 Growth Plan – Includes tailored mentorship, investor access, and advanced analytics for scaling businesses. 🔹 Premium Plan – Full - suite access with dedicated funding guidance, compliance support, and exclusive networking opportunities. Our pricing model ensures that every startup—big or small—gets the support they need at an affordable cost. Need help choosing the right plan ? Contact our team for a personalized consultation.",
        image: "../../assets/images/4.png",
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


function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [selectedFAQ, setSelectedFAQ] = useState(null);
    const [selectedHelp, setSelectedHelp] = useState(null);
    const [input, setInput] = useState("");
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredQuestions, setFilteredQuestions] = useState(FAQ_QUESTIONS);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [messages, setMessages] = useState([]);
    const welcomeMessages = [
        {
            sender: "bot",
            text: "Hi there! Welcome to EIM Support."
        },
        {
            sender: "bot",
            text: "I am Eimee, your AI assistant and I am ready to help you with your questions about EIM, the most beloved startup product in the world."
        },
        {
            sender: "bot",
            text: "How can I help you today?"
        }
    ];
    const [isTyping, setIsTyping] = useState(false);

    const messagesEndRef = React.useRef(null);
    const GEMINI_API_KEY = "AIzaSyDY6c1V33qvNGY9gG37-Hj8cL-jKJakCjg";
    const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

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

    // Function to add messages with delay
    const addMessagesSequentially = async () => {
        for (let i = 0; i < welcomeMessages.length; i++) {
            setIsTyping(true);
            // Wait for 1 second to simulate typing
            await new Promise(resolve => setTimeout(resolve, 1000));
            setMessages(prev => [...prev, welcomeMessages[i]]);
            setIsTyping(false);
            // Wait for 500ms between messages
            if (i < welcomeMessages.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }
    };

    useEffect(() => {
        addMessagesSequentially();
    }, []);

    const sendMessage = async (e) => {
        e?.preventDefault();
        if (!input.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { sender: "user", text: input }]);
        const userMessage = input;
        setInput("");
        setIsTyping(true);

        try {
            const prompt = generateGeminiPrompt(userMessage);
            const response = await axios.post(
                `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
                prompt,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            const botResponse = response.data.candidates[0].content.parts[0].text;
            setMessages(prev => [...prev, { sender: "bot", text: botResponse }]);
        } catch (error) {
            console.error("Error calling Gemini API:", error);
            setMessages(prev => [
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


    const renderHome = () => (
        <div className="flex flex-col h-full">
            
            <div className="gradient-bg p-6 pb-20">
                <h1 className="text-white text-2xl mb-2 px-2 opacity-50">Elevate by IM</h1>
                <h2 className="text-white/90 px-2 text-md">Hello! I am your AI assistant Eimee 👋</h2>
            </div>

            {/* Search and Content Section */}
            <div className="px-4 -mt-12">
                {/* Search Box */}
                <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search for help..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#09AFF4]"
                        />
                    </div>
                </div>

                {/* FAQ Questions */}
                <div className="space-y-3 mb-4">
                    {filteredQuestions.map((faq, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedFAQ(faq)}
                            className="w-full bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#09AFF4] transition-colors text-left flex justify-between items-center group"
                        >
                            <span className="text-gray-700 group-hover:text-[#09AFF4]">{faq.question}</span>
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#09AFF4]" />
                        </button>
                    ))}
                </div>

                {/* Blog Link */}
                <button
                    onClick={() => window.open('https://syndie.blog', '_blank')}
                    className="w-full bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#09AFF4] transition-colors text-left flex justify-between items-center mb-4 group"
                >
                    <span className="text-gray-700 group-hover:text-[#09AFF4]">IM Blog</span>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#09AFF4]" />
                </button>

                {/* Send Message Button */}
                <button
                    onClick={() => setActiveSection("messages")}
                    className="w-full bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#09AFF4] transition-colors text-left space-y-1"
                >
                    <div className="text-gray-700 font-medium">Send us a message</div>
                    <div className="text-gray-500 text-sm">We will reply as soon as we can</div>
                </button>
            </div>
        </div>
    );

    const renderFAQDetail = () => (
        <div className="flex flex-col h-full bg-white">
            <div className="p-4 border-b">
                <button
                    onClick={() => setSelectedFAQ(null)}
                    className="flex items-center text-gray-600 hover:text-[#09AFF4]"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back
                </button>
            </div>
            <div className="flex-1 p-6 overflow-y-auto">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-xl font-semibold mb-4">{selectedFAQ.question}</h2>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-1">
                            <p className="text-gray-600 leading-relaxed">{selectedFAQ.answer}</p>
                        </div>
                        <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-md">
                            <img
                                src={selectedFAQ.image}
                                alt={selectedFAQ.question}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


    // Enhanced Messages Section with new chat functionality
    const renderMessages = () => (
        <div className="flex flex-col h-full bg-gray-50">
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
                        <div className={`flex items-end space-x-2 max-w-[70%] ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                            {msg.sender === 'bot' && (
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#09AFF4] to-blue-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <MessageCircle className="w-3 h-3 text-white" />
                                </div>
                            )}

                            <div
                                className={`${msg.sender === 'user'
                                    ? 'bg-gradient-to-r from-[#09AFF4] to-blue-500 text-white rounded-t-xl rounded-bl-xl'
                                    : 'bg-white text-gray-800 rounded-t-xl rounded-br-xl shadow-sm'
                                    } py-2 px-3 text-sm leading-normal relative`}
                            >
                                <p className="text-[14px]">{msg.text}</p>
                            </div>

                            {msg.sender === 'user' && (
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#09AFF4] to-blue-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <User className="w-3 h-3 text-white" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start">
                        <div className="flex items-end space-x-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#09AFF4] to-blue-500 flex items-center justify-center shadow-sm">
                                <MessageCircle className="w-3 h-3 text-white" />
                            </div>
                            <div className="bg-white rounded-t-xl rounded-br-xl py-2 px-3 shadow-sm">
                                <div className="flex space-x-1">
                                    <div className="w-1.5 h-1.5 bg-[#09AFF4] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="w-1.5 h-1.5 bg-[#09AFF4] rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                                    <div className="w-1.5 h-1.5 bg-[#09AFF4] rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t border-gray-200 bg-white">
                <form onSubmit={sendMessage} className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-[#09AFF4] focus:ring-1 focus:ring-[#09AFF4] transition-colors"
                    />
                    <button
                        type="submit"
                        className="px-3 py-2 bg-gradient-to-r from-[#09AFF4] to-blue-500 hover:opacity-90 text-white rounded transition-all shadow-sm flex items-center justify-center"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>
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
        <div className="fixed bottom-5 right-5 z-50">
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 bg-[#09AFF4] rounded-circle flex items-center justify-center text-white shadow-lg hover:bg-[#09AFF4]/90 transition-colors"
                >
                    <MessageCircle className="w-6 h-6" />
                </button>
            ) : (
                <div className={`${selectedFAQ || selectedHelp ? 'w-[800px]' : 'w-[400px]'} h-[600px] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden transition-all duration-300`}>
                    {/* Top Navigation */}
                    <div className="gradient-bg p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="../assets/assets/images/logo/logo-dark.png"
                                    alt="Syndie.io"
                                    className="h-8"
                                />
                                <span className="text-white p-2 text-xl">Incubation Masters</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-gray-200 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 overflow-y-auto">
                        {selectedFAQ ? renderFAQDetail() : (
                            <>
                                {activeSection === "home" && renderHome()}
                                {activeSection === "messages" && renderMessages()}
                                {activeSection === "help" && (
                                    <HelpSection
                                        selectedHelp={selectedHelp}
                                        setSelectedHelp={setSelectedHelp}
                                    />)}
                            </>
                        )}
                    </div>

                    {/* Bottom Navigation */}
                    <div className="border-t bg-white p-4">
                        <div className="flex justify-around">
                            <button
                                onClick={() => {
                                    setActiveSection("home");
                                    setSelectedFAQ(null);
                                }}
                                className={`flex flex-col items-center ${activeSection === "home" ? "text-[#09AFF4]" : "text-gray-500"}`}
                            >
                                <Home className="w-6 h-6" />
                                <span className="text-xs mt-1">Home</span>
                            </button>
                            <button
                                onClick={() => {
                                    setActiveSection("messages");
                                    setSelectedFAQ(null);
                                }}
                                className={`flex flex-col items-center ${activeSection === "messages" ? "text-[#09AFF4]" : "text-gray-500"}`}
                            >
                                <MessageSquare className="w-6 h-6" />
                                <span className="text-xs mt-1">Messages</span>
                            </button>
                            <button
                                onClick={() => {
                                    setActiveSection("help");
                                    setSelectedFAQ(null);
                                }}
                                className={`flex flex-col items-center ${activeSection === "help" ? "text-[#09AFF4]" : "text-gray-500"}`}
                            >
                                <HelpCircle className="w-6 h-6" />
                                <span className="text-xs mt-1">Help</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;