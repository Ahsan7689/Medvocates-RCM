import { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini, resetChatSession } from '@/services/geminiService';
import { INITIAL_GREETING } from '@/services/chatConstants';

// ── Icons ────────────────────────────────────────────────────
const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: 28, height: 28 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: 22, height: 22 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: 18, height: 18 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: 14, height: 14 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: 14, height: 14 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

// ── Simple markdown renderer for bold/bullet/newline ────────
const RenderMessage = ({ text }) => {
  const lines = text.split('\n');
  return (
    <div style={{ lineHeight: 1.55 }}>
      {lines.map((line, i) => {
        // Bullet
        if (line.startsWith('• ') || line.startsWith('- ')) {
          const content = line.replace(/^[•-]\s/, '');
          return (
            <div key={i} style={{ display: 'flex', gap: 6, marginBottom: 2 }}>
              <span style={{ color: '#c9a961', flexShrink: 0, marginTop: 1 }}>•</span>
              <span>{renderBold(content)}</span>
            </div>
          );
        }
        // Empty line = spacer
        if (line.trim() === '') return <div key={i} style={{ height: 6 }} />;
        // Normal line
        return <div key={i}>{renderBold(line)}</div>;
      })}
    </div>
  );
};

// Bold: **text** → <strong>
const renderBold = (line) => {
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ color: '#c9a961', fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
};

// ── Suggested quick replies ──────────────────────────────────
const QUICK_REPLIES = [
  'What services do you offer?',
  'Tell me about Medical Billing',
  'Virtual Assistance details',
  'Are you HIPAA compliant?',
  'How do I get started?',
  'Book a free consultation',
];

// ── MedVocates Logo ──────────────────────────────────────────
const MedVocatesLogo = () => (
  <div style={{
    width: 36, height: 36, borderRadius: '50%',
    background: 'linear-gradient(135deg, #c9a961, #a07840)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 11, fontWeight: 900, color: '#1a1a1a', letterSpacing: 0.5,
    flexShrink: 0, border: '2px solid rgba(201,169,97,0.4)',
  }}>
    RCM
  </div>
);

// ── Main ChatWidget ──────────────────────────────────────────
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [messages, setMessages] = useState([
    { id: 'init-0', role: 'model', text: INITIAL_GREETING, timestamp: new Date() }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setInputValue('');
    setShowQuickReplies(false);
    setIsLoading(true);

    const userMsg = { id: Date.now().toString(), role: 'user', text: trimmed, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const response = await sendMessageToGemini(messages, trimmed);
      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: response,
        timestamp: new Date(),
      }]);
    } catch {
      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I'm having trouble connecting right now. Please try again or contact us directly at **contact@medvocatesrcm.com** or **+1 (555) 123-4567**.",
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    resetChatSession();
    setMessages([{ id: 'init-0', role: 'model', text: INITIAL_GREETING, timestamp: new Date() }]);
    setShowQuickReplies(true);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(inputValue); }
  };

  const calendlyUrl = typeof window !== 'undefined' && import.meta?.env?.VITE_CALENDLY_URL
    ? import.meta.env.VITE_CALENDLY_URL
    : 'https://calendly.com/medvocates';

  return (
    <>
      {/* ── Scoped styles ── */}
      <style>{`
        @keyframes medbot-fadein {
          from { opacity: 0; transform: translateY(12px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes medbot-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201,169,97,0.5); }
          50%       { box-shadow: 0 0 0 10px rgba(201,169,97,0); }
        }
        @keyframes medbot-bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40%           { transform: translateY(-6px); }
        }
        .medbot-window {
          animation: medbot-fadein 0.25s ease forwards;
        }
        .medbot-fab {
          animation: medbot-pulse 2.4s ease-in-out infinite;
        }
        .medbot-dot { animation: medbot-bounce 1.2s ease-in-out infinite; }
        .medbot-dot:nth-child(2) { animation-delay: 0.18s; }
        .medbot-dot:nth-child(3) { animation-delay: 0.36s; }
        .medbot-quick:hover {
          background: rgba(201,169,97,0.18) !important;
          border-color: #c9a961 !important;
          color: #c9a961 !important;
        }
        .medbot-send:hover:not(:disabled) {
          background: rgba(201,169,97,0.15) !important;
        }
        .medbot-input-wrap:focus-within {
          border-color: rgba(201,169,97,0.6) !important;
        }
        .medbot-msg-user:hover, .medbot-msg-bot:hover {
          filter: brightness(1.04);
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(201,169,97,0.3); border-radius: 4px; }
      `}</style>

      <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>

        {/* ── Chat Window ── */}
        {isOpen && (
          <div
            className="medbot-window"
            style={{
              marginBottom: 16,
              width: 360,
              maxWidth: 'calc(100vw - 32px)',
              maxHeight: '82vh',
              height: 580,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 20,
              overflow: 'hidden',
              border: '1px solid rgba(201,169,97,0.25)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.65), 0 0 0 1px rgba(201,169,97,0.1)',
              background: '#141414',
            }}
          >

            {/* ── Header ── */}
            <div style={{
              background: 'linear-gradient(135deg, #1e1a0f 0%, #1a1400 100%)',
              borderBottom: '1px solid rgba(201,169,97,0.2)',
              padding: '14px 16px',
              flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <MedVocatesLogo />
                <div>
                  <div style={{ fontWeight: 800, color: '#c9a961', fontSize: 15, letterSpacing: 0.3, fontFamily: 'Georgia, serif' }}>
                    MedBot
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 1 }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
                    <span style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.55)', letterSpacing: 0.2 }}>MedVocates RCM Assistant</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {/* Reset */}
                <button onClick={handleReset} title="New conversation" style={{
                  background: 'transparent', border: '1px solid rgba(201,169,97,0.25)',
                  borderRadius: 8, padding: '5px 7px', color: 'rgba(201,169,97,0.6)',
                  cursor: 'pointer', display: 'flex', alignItems: 'center',
                  transition: 'all 0.2s',
                }}>
                  <RefreshIcon />
                </button>
                {/* Book */}
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" title="Book free consultation" style={{
                  background: 'linear-gradient(135deg, #c9a961, #a07840)',
                  border: 'none', borderRadius: 8, padding: '5px 9px',
                  color: '#1a1a1a', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4,
                  fontSize: 10, fontWeight: 700, textDecoration: 'none', letterSpacing: 0.3,
                }}>
                  <CalendarIcon /> Book Free
                </a>
                {/* Close */}
                <button onClick={() => setIsOpen(false)} style={{
                  background: 'transparent', border: 'none',
                  color: 'rgba(255,255,255,0.45)', cursor: 'pointer',
                  display: 'flex', padding: 4, borderRadius: 6, transition: 'color 0.2s',
                }}>
                  <CloseIcon />
                </button>
              </div>
            </div>

            {/* ── Messages ── */}
            <div style={{
              flex: 1, overflowY: 'auto', padding: '16px 14px',
              display: 'flex', flexDirection: 'column', gap: 12,
              background: '#141414',
            }}>
              {messages.map((msg) => (
                <div key={msg.id} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start', width: '100%' }}>
                  {/* Bot avatar */}
                  {msg.role === 'model' && (
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: 'linear-gradient(135deg, #c9a961, #8a6530)',
                      flexShrink: 0, marginRight: 8, marginTop: 2,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 9, fontWeight: 900, color: '#1a1a1a',
                    }}>M</div>
                  )}

                  <div
                    className={msg.role === 'user' ? 'medbot-msg-user' : 'medbot-msg-bot'}
                    style={{
                      maxWidth: '78%',
                      borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                      padding: '10px 14px',
                      fontSize: 13.5,
                      color: msg.role === 'user' ? '#ffffff' : 'rgba(255,255,255,0.88)',
                      background: msg.role === 'user'
                        ? 'linear-gradient(135deg, #2d8685 0%, #1a5f5e 100%)'
                        : 'rgba(255,255,255,0.05)',
                      border: msg.role === 'user' ? 'none' : '1px solid rgba(201,169,97,0.15)',
                      boxShadow: msg.role === 'user'
                        ? '0 4px 12px rgba(45,134,133,0.3)'
                        : '0 2px 8px rgba(0,0,0,0.3)',
                      transition: 'filter 0.2s',
                    }}
                  >
                    <RenderMessage text={msg.text} />
                    <div style={{
                      fontSize: 10, marginTop: 5, textAlign: 'right',
                      color: msg.role === 'user' ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.25)',
                    }}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}

              {/* Loading dots */}
              {isLoading && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #c9a961, #8a6530)',
                    flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 9, fontWeight: 900, color: '#1a1a1a',
                  }}>M</div>
                  <div style={{
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,169,97,0.15)',
                    borderRadius: '18px 18px 18px 4px', padding: '12px 16px',
                    display: 'flex', gap: 6, alignItems: 'center',
                  }}>
                    {[0,1,2].map(i => (
                      <div key={i} className="medbot-dot" style={{
                        width: 7, height: 7, borderRadius: '50%',
                        background: '#c9a961', opacity: 0.7,
                      }} />
                    ))}
                  </div>
                </div>
              )}

              {/* Quick replies — only on first open */}
              {showQuickReplies && messages.length === 1 && !isLoading && (
                <div style={{ paddingTop: 4 }}>
                  <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.35)', marginBottom: 8, letterSpacing: 0.3 }}>
                    QUICK QUESTIONS
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {QUICK_REPLIES.map((q) => (
                      <button
                        key={q}
                        className="medbot-quick"
                        onClick={() => sendMessage(q)}
                        style={{
                          background: 'transparent',
                          border: '1px solid rgba(201,169,97,0.3)',
                          borderRadius: 20, padding: '5px 12px',
                          fontSize: 11.5, color: 'rgba(201,169,97,0.75)',
                          cursor: 'pointer', transition: 'all 0.2s',
                          fontFamily: 'inherit',
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ── Input Area ── */}
            <div style={{
              padding: '12px 14px 14px',
              background: '#1a1a1a',
              borderTop: '1px solid rgba(201,169,97,0.12)',
              flexShrink: 0,
            }}>
              {/* CTA Strip */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(201,169,97,0.12), rgba(201,169,97,0.06))',
                border: '1px solid rgba(201,169,97,0.2)',
                borderRadius: 10, padding: '8px 12px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: 10, gap: 8,
              }}>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', lineHeight: 1.3 }}>
                  Free consultation • No contracts
                </span>
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" style={{
                  background: 'linear-gradient(135deg, #c9a961, #a07840)',
                  color: '#1a1a1a', fontSize: 11, fontWeight: 800,
                  padding: '5px 11px', borderRadius: 8, textDecoration: 'none',
                  whiteSpace: 'nowrap', letterSpacing: 0.2,
                }}>
                  Book Now →
                </a>
              </div>

              {/* Input */}
              <div className="medbot-input-wrap" style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(201,169,97,0.2)',
                borderRadius: 14, padding: '8px 10px 8px 14px',
                transition: 'border-color 0.2s',
              }}>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about services, pricing, specialties..."
                  disabled={isLoading}
                  style={{
                    flex: 1, background: 'transparent', border: 'none',
                    outline: 'none', color: 'rgba(255,255,255,0.88)',
                    fontSize: 13, fontFamily: 'inherit',
                  }}
                />
                <button
                  className="medbot-send"
                  onClick={() => sendMessage(inputValue)}
                  disabled={isLoading || !inputValue.trim()}
                  style={{
                    background: inputValue.trim() && !isLoading
                      ? 'linear-gradient(135deg, #c9a961, #a07840)'
                      : 'rgba(255,255,255,0.06)',
                    border: 'none', borderRadius: 10,
                    width: 34, height: 34, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: inputValue.trim() && !isLoading ? 'pointer' : 'not-allowed',
                    color: inputValue.trim() && !isLoading ? '#1a1a1a' : 'rgba(255,255,255,0.25)',
                    transition: 'all 0.2s',
                  }}
                >
                  <SendIcon />
                </button>
              </div>

              {/* Footer */}
              <div style={{ textAlign: 'center', marginTop: 8 }}>
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', letterSpacing: 0.3 }}>
                  Powered by MedVocates RCM • AI Assistant
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ── FAB Button ── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? '' : 'medbot-fab'}
          aria-label="Open MedVocates AI Assistant"
          style={{
            width: 60, height: 60, borderRadius: '50%', border: 'none',
            background: isOpen
              ? 'rgba(255,255,255,0.1)'
              : 'linear-gradient(135deg, #c9a961, #8a6530)',
            color: isOpen ? 'rgba(255,255,255,0.7)' : '#1a1a1a',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: isOpen ? '0 4px 16px rgba(0,0,0,0.4)' : '0 8px 32px rgba(201,169,97,0.45)',
            transition: 'all 0.3s',
            transform: isOpen ? 'rotate(10deg)' : 'rotate(0deg)',
          }}
        >
          {isOpen ? <CloseIcon /> : <ChatIcon />}
        </button>

      </div>
    </>
  );
};

export default ChatWidget;