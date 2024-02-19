"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const WhatsApp = () => {
  const number = process.env.NEXT_PUBLIC_NUMBER as string;
  const id = process.env.NEXT_PUBLIC_ID as string;
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber={number}
        accountName="examaidhub"
        buttonStyle={{
          top: "80%",
        }}
      />
      <TawkMessengerReact propertyId={id} widgetId="default" />
    </div>
  );
};

export default WhatsApp;
