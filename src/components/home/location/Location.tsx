import React from 'react';

const Location = () => {
    return (
        <div className='w-full'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.4502326222128!2d74.36141547609746!3d31.484306148922148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905d190e874bd%3A0xb550b18db0b1f314!2sWalton%20Rd%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1748779445537!5m2!1sen!2s"
                width="100%"
                height="550"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Location;
