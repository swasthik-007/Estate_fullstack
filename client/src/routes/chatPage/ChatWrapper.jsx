import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest";

function ChatWrapper() {
  const { userId } = useParams();
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await apiRequest(`/chats/${userId}`); // Adjust API endpoint to fetch chats for a specific user
        setChats(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchChats();
  }, [userId]); // Add userId to dependency array to re-fetch chats when userId changes

  if (loading) {
    return <div>Loading...</div>;
  }

  return <Chat chats={chats} />;
}

export default ChatWrapper;
