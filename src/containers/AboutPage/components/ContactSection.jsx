import React, { useState } from 'react';
import SectionContainer from '../../../components/Structure/SectionContainer.jsx';
import Divider from '../../../components/Divider.jsx';
import MaxWidthContainer from '../../../components/Structure/MaxWidthContainer.jsx';
import CommonInput from '../../../components/CommonInput.jsx';
import Button from '../../../components/Button.jsx';

const ContactSection = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const formFields = [
    { name: 'username', label: 'Full name', placeholder: 'Peter Parker' },
    { name: 'email', type: 'email', label: 'Email', placeholder: 'johndoe@gmail.com' },
    { name: 'phone', type: 'phone', label: 'Phone', placeholder: 'Phone' },
    { name: 'subject', label: 'Subject', placeholder: 'Subject' },
  ];

  return (
    <SectionContainer
      subtitleClassName='mb-[60px]'
      title='Get in touch'
      subtitle='Send your message to us'
    >
      <MaxWidthContainer customClassName='!max-w-[766px]'>
        <Divider className='mb-10' />
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-x-5 gap-y-10'>
          {formFields?.map((field) => (
            <CommonInput key={field.name} onChange={handleChange} required {...field} />
          ))}
          <CommonInput
            name='message'
            className='col-span-2 w-full'
            onChange={handleChange}
            required
            label='Message'
            placeholder='Your message goes here...'
            type='textarea'
          />
          <div className='flex justify-between items-center w-full col-span-2'>
            <div className='text-14 font-medium max-w-[150px] w-full text-left'>
              <span className='text-vermillion'>*</span>
              required
            </div>
            <Button type='submit' xl>
              Send message
            </Button>
            <div className='text-14 font-medium max-w-[150px] text-left'>
              Viverra at port accumsan. Orci non
            </div>
          </div>
        </form>
      </MaxWidthContainer>
    </SectionContainer>
  );
};

export default ContactSection;
