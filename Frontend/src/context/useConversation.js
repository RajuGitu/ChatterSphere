import { create } from 'zustand';

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),

  messages: [],
  setMessages: (messages) => set({ messages }),

  // ✅ ADD this function
  appendMessage: (newMessage) =>
    set((state) => ({
      messages: [...(Array.isArray(state.messages) ? state.messages : []), newMessage],
    })),
}));

export default useConversation;
