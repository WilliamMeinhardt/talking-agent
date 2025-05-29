"use client";

import React, { useEffect, useState } from "react";

// ElevenLabs
import { useConversation } from "@11labs/react";

// UI
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react";

const VoiceChat = () => {
  //states
  const [haspermission, setHasPermission] = useState(false);
  const [errormessage, setErrorMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  const conversation = useConversation();
  const { status, isSpeaking } = conversation;

  const startListening = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript;
      // Send transcript to your conversation API here
      await conversation.sendUserInput(transcript);
    };

    recognition.onerror = (event) => {
      setErrorMessage(event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
    setIsListening(true);
  };

  const handleStartConversation = async () => {
    // Add logic to start the conversation
    const conversationid = await conversation.startSession({
      agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID!
    })
    startListening();
    console.log("started conversation: ", conversationid);
  };

  const handleEndConversation = async () => {
    // End the conversation session
    await conversation.endSession();
    console.log("ended conversation");
  };

  const toggleMute = async () => {
    // Add logic to mute the sound
  };

  useEffect (() => {
     const requestMicPermission = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setHasPermission(true);
       } catch (error) {
        setErrorMessage((error as Error).message);
         console.log("error accesing microphone", error);
       }
      };

    requestMicPermission();
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <img
            src="/avatar.png" 
            alt="Voice Chat Avatar"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={toggleMute}>
              <VolumeX className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-">
          <div className="flex justify-center">
            {status === "connected" ? 
            ( <Button
              variant={"destructive"}
              onClick={handleEndConversation}
              className="w-2/4"
            >
              <MicOff className="mr-2 h-4 w-" />
              end Conversation
            </Button>) :
             (<Button
              onClick={handleStartConversation}
              disabled={false}
              className="w-2/4"
            >
              <Mic className="mr-2 h-4 w-4" />
              Start Conversation
            </Button>) }
          
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceChat;