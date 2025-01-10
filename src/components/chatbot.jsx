import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    if (userInput.trim()) {
      const newMessages = [
        ...messages,
        { sender: 'user', text: userInput },
        { sender: 'bot', text: getBotResponse(userInput) },
      ];
      setMessages(newMessages);
      setUserInput('');
    }
  };

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes('hello') || msg.includes('hi')) {
      return 'Hello! How can I assist you today?';
    } else if (msg.includes('good morning')) {
      return 'Good morning! How can I help you today?';
    } else if (msg.includes('good evening')) {
      return 'Good evening! How can I assist you?';
    } else if (msg.includes('thank you') || msg.includes('thanks')) {
      return 'You’re welcome! Let me know if there’s anything else I can help with.';
    } else if (msg.includes('order update') || msg.includes('order status')) {
      return 'You can check your order updates in the "My Orders" section of our app.';
    } else if (msg.includes('return')) {
      return 'To return an item, go to "My Orders", select the item, and initiate the return process.';
    } else if (msg.includes('refund')) {
      return 'Refunds are typically processed within 5-7 business days after approval.';
    } else if (msg.includes('payment') || msg.includes('payment method')) {
      return 'We support multiple payment methods including credit cards, debit cards, UPI, and cash on delivery.';
    } else if (msg.includes('cod') || msg.includes('cash on delivery')) {
      return 'Cash on Delivery is available for eligible items. You can select it during checkout.';
    } else if (msg.includes('brands')) {
      return 'We offer products from a variety of top brands. Let me know what you’re looking for!';
    } else if (msg.includes('products')) {
      return 'Can you specify the type of product you are looking for? We have a wide range to choose from!';
    } else if (msg.includes('delivery')) {
      return 'Standard delivery usually takes 3-5 business days. Faster delivery options are available at checkout.';
    } else if (msg.includes('offer') || msg.includes('discount')) {
      return 'You can explore current deals and discounts in the "Offers" section of our app.';
    } else if (msg.includes('exchange')) {
      return 'We offer exchanges for eligible items. Check the product page for details.';
    } else if (msg.includes('warranty')) {
      return 'Warranty information is available on the product page. Let me know if you need help finding it.';
    } else if (msg.includes('track') && msg.includes('order')) {
      return 'You can track your order by entering the tracking ID in the "Track Order" section.';
    } else if (msg.includes('cancel order')) {
      return 'You can cancel your order from the "My Orders" section before it is shipped.';
    } else if (msg.includes('membership')) {
      return 'Our premium membership offers free delivery, exclusive deals, and more. Would you like to know more?';
    } else if (msg.includes('lost package')) {
      return 'We’re sorry to hear about this. Please contact our support team for assistance.';
    } else if (msg.includes('support') || msg.includes('help')) {
      return 'You can reach our support team via the "Help Center" in our app.';
    } else if (msg.includes('replacement')) {
      return 'Replacements are available for defective or damaged items. Initiate the request in the "My Orders" section.';
    } else if (msg.includes('how to order')) {
      return 'To place an order, simply select the product you want and click "Add to Cart" followed by "Checkout".';
    } else if (msg.includes('track my delivery')) {
      return 'You can track your delivery status in the "Track Order" section of our app.';
    } else if (msg.includes('new arrivals')) {
      return 'Check out the latest products in our "New Arrivals" section!';
    } else if (msg.includes('payment issues')) {
      return 'If you’re having trouble with a payment, please check your payment details or contact support.';
    } else if (msg.includes('order cancelation')) {
      return 'You can cancel an order as long as it hasn’t been shipped. Go to "My Orders" and select the order to cancel.';
    } else if (msg.includes('loyalty points')) {
      return 'Earn loyalty points on every purchase! Check the "Loyalty Program" section for more information.';
    } else if (msg.includes('gift card')) {
      return 'You can purchase gift cards from the "Gift Cards" section, which can be used on any order.';
    } else if (msg.includes('price drop')) {
      return 'You’ll be notified if there’s a price drop on any items you’ve shown interest in!';
    } else if (msg.includes('shopping assistance')) {
      return 'I can help you with finding products. Just let me know what you’re looking for!';
    } else if (msg.includes('buy one get one')) {
      return 'Check out our "Buy One Get One" deals in the "Special Offers" section.';
    } else if (msg.includes('discount code')) {
      return 'Enter your discount code at checkout to enjoy special offers on your order.';
    } else if (msg.includes('customer reviews')) {
      return 'You can read reviews from other customers on each product page to make informed decisions.';
    } else if (msg.includes('recently viewed')) {
      return 'You can see your recently viewed items in the "Recently Viewed" section of our app.';
    } else if (msg.includes('best sellers')) {
      return 'Explore our best-selling products in the "Best Sellers" section.';
    } else if (msg.includes('refund status')) {
      return 'To check your refund status, visit the "My Orders" section and look for the refund request.';
    } else if (msg.includes('order history')) {
      return 'You can view your order history in the "My Orders" section.';
    } else if (msg.includes('wishlist')) {
      return 'You can add items to your wishlist and revisit them later from the "Wishlist" section.';
    } else if (msg.includes('sizing guide')) {
      return 'Check the sizing guide on each product page for accurate size recommendations.';
    } else if (msg.includes('store locator')) {
      return 'Use our store locator in the app to find nearby stores that carry the products you need.';
    } else if (msg.includes('installments')) {
      return 'We offer installment payment options for select products. Check the product page for more details.';
    } else if (msg.includes('gift wrapping')) {
      return 'Gift wrapping is available for select items. You can choose this option at checkout.';
    } else if (msg.includes('price match')) {
      return 'We offer a price match guarantee on most items. Check the product page for more details.';
    } else if (msg.includes('out of stock')) {
      return 'This product is currently out of stock. You can set a notification for when it’s back in stock!';
    } else if (msg.includes('product details')) {
      return 'You can view detailed information about the product including specifications, reviews, and ratings on the product page.';
    } else if (msg.includes('security')) {
      return 'We prioritize the security of your transactions. Our platform uses the latest encryption standards.';
    } else {
      return 'I’m sorry, I didn’t quite understand that. Can you try asking something else?';
    }
  };

  return (
    <div style={styles.chatbotContainer}>
      <div style={styles.chatWindow}>
        <div style={styles.chatMessages}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                ...styles.chatMessage,
                ...(msg.sender === 'user' ? styles.userMessage : styles.botMessage),
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div style={styles.chatInput}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            style={styles.inputField}
          />
          <button onClick={handleSend} style={styles.sendButton}>Send</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  chatbotContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
    fontFamily: 'Arial, sans-serif',
  },
  chatWindow: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    margin: '0 auto',
  },
  chatMessages: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
  },
  chatMessage: {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    maxWidth: '80%',
    lineHeight: '1.4',
  },
  userMessage: {
    backgroundColor: '#c8e6c9',
    color: '#2c6e3f',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#e0f7fa',
    color: '#00796b',
    alignSelf: 'flex-start',
  },
  chatInput: {
    display: 'flex',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderTop: '1px solid #ddd',
  },
  inputField: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '14px',
  },
  sendButton: {
    marginLeft: '10px',
    padding: '10px 20px',
    backgroundColor: '#00796b',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ChatBot;
