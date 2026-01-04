import React from 'react';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Contact = () => {
  return (
    <div className="container mx-auto mt-10 max-w-3xl">
      <Card>
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <Input id="name" label="Your Name" />
        <Input id="email" label="Email" type="email" />
        <Input id="message" label="Message" />
        <Button className="mt-2">Send</Button>
      </Card>
    </div>
  );
};

export default Contact;
