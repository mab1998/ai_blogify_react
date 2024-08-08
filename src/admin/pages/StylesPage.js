import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialSettings = {
  navbar: {
    logo: '',
    links: [],
  },
  hero: {
    title: '',
    subtitle: '',
    buttonText: '',
    buttonLink: '',
    image: '',
  },
  features: {
    title: '',
    items: [
      { title: '', description: '' },
      { title: '', description: '' },
      { title: '', description: '' },
      { title: '', description: '' },
    ],
  },
  about: {
    title: '',
    content: '',
  },
  whatLookingFor: {
    title: '',
    content: '',
    buttonText: '',
    buttonLink: '',
  },
  pricing: {
    plans: [
      { title: '', price: '', features: [] },
      { title: '', price: '', features: [] },
    ],
  },
  testimonials: [
    { name: '', position: '', message: '', image: '' },
    { name: '', position: '', message: '', image: '' },
    { name: '', position: '', message: '', image: '' },
    { name: '', position: '', message: '', image: '' },
    { name: '', position: '', message: '', image: '' },
    { name: '', position: '', message: '', image: '' },
  ],
  faq: [
    { question: '', answer: '' },
    { question: '', answer: '' },
    { question: '', answer: '' },
    { question: '', answer: '' },
    { question: '', answer: '' },
  ],
  contact: {
    address: '',
    email: '',
    phone: '',
    form: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  },
};

const StylesPage = () => {
  const [activeTab, setActiveTab] = useState('navbar');
  const [settings, setSettings] = useState(initialSettings);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/settings_styles');
        const data = response.data;
        setSettings(data);
        console.log("new settings",settings);     
      console.log("data",data);   } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettings();
  }, []);

  const handleChange = (section, field, value) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [section]: {
        ...prevSettings[section],
        [field]: value,
      },
    }));
  };

  const handleNestedChange = (section, nestedSection, field, value) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [section]: {
        ...prevSettings[section],
        [nestedSection]: {
          ...prevSettings[section][nestedSection],
          [field]: value,
        },
      },
    }));
  };

  const handleFileChange = async (section, field, file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const imageUrl = response.data.url;

      setSettings(prevSettings => ({
        ...prevSettings,
        [section]: {
          ...prevSettings[section],
          [field]: imageUrl,
        },
      }));
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/settings_styles', settings);

      if (response.status === 200) {
        alert('Settings updated successfully');
      } else {
        alert('Failed to update settings');
      }
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'navbar':
        return (
          <div>
            <h1 className="text-xl font-semibold mb-4">Navbar Settings</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Logo:</label>
                <input
                  type="file"
                  accept="image/*"
                  className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
                  onChange={e => handleFileChange('navbar', 'logo', e.target.files[0])}
                />
                {settings.navbar.logo && (
<img src={`http://127.0.0.1:8000${settings.navbar.logo}`} alt="Logo" className="mt-2 h-16" />
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Links:</label>
                <textarea
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.navbar.links.join('\n')}
                  onChange={e => handleChange('navbar', 'links', e.target.value.split('\n'))}
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
            </form>
          </div>
        );
      case 'hero':
        return (
          <div>
            <h1 className="text-xl font-semibold mb-4">Hero Section Settings</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title:</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.hero.title || ''}
                  onChange={e => handleChange('hero', 'title', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Subtitle:</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.hero.subtitle || ''}
                  onChange={e => handleChange('hero', 'subtitle', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Button Text:</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.hero.buttonText || ''}
                  onChange={e => handleChange('hero', 'buttonText', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Button Link:</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.hero.buttonLink || ''}
                  onChange={e => handleChange('hero', 'buttonLink', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
                  onChange={e => handleFileChange('hero', 'image', e.target.files[0])}
                />
                {settings.hero.image && (
                  <img                   src={`http://127.0.0.1:8000${settings.hero.image}`} alt="Hero" className="mt-2 h-32" />
                )}
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
            </form>
          </div>
        );
      case 'features':
        return (
          <div>
            <h1 className="text-xl font-semibold mb-4">Features Section Settings</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title:</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.features.title || ''}
                  onChange={e => handleChange('features', 'title', e.target.value)}
                />
              </div>
              {settings.features.items.map((item, index) => (
                <div key={index}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Feature {index + 1} Title:</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={item.title || ''}
                      onChange={e => {
                        const newItems = [...settings.features.items];
                        newItems[index].title = e.target.value;
                        setSettings(prevSettings => ({
                          ...prevSettings,
                          features: {
                            ...prevSettings.features,
                            items: newItems,
                          },
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Feature {index + 1} Description:</label>
                    <textarea
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={item.description || ''}
                      onChange={e => {
                        const newItems = [...settings.features.items];
                        newItems[index].description = e.target.value;
                        setSettings(prevSettings => ({
                          ...prevSettings,
                          features: {
                            ...prevSettings.features,
                            items: newItems,
                          },
                        }));
                      }}
                    ></textarea>
                  </div>
                </div>
              ))}
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
            </form>
          </div>
        );
      case 'about':
        return (
          <div>
            <h1 className="text-xl font-semibold mb-4">About Us Section Settings</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title:</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.about.title || ''}
                  onChange={e => handleChange('about', 'title', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Content:</label>
                <textarea
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.about.content || ''}
                  onChange={e => handleChange('about', 'content', e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
            </form>
          </div>
        );
      case 'whatLookingFor':
        return (
          <div>
            <h1 className="text-xl font-semibold mb-4">What Are You Looking For Section Settings</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title:</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.whatLookingFor.title || ''}
                  onChange={e => handleChange('whatLookingFor', 'title', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Content:</label>
                <textarea
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.whatLookingFor.content || ''}
                  onChange={e => handleChange('whatLookingFor', 'content', e.target.value)}
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Button Text:</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.whatLookingFor.buttonText || ''}
                  onChange={e => handleChange('whatLookingFor', 'buttonText', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Button Link:</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.whatLookingFor.buttonLink || ''}
                  onChange={e => handleChange('whatLookingFor', 'buttonLink', e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
            </form>
          </div>
        );
      case 'pricing':
        return (
          <div>
            <h1 className="text-xl font-semibold mb-4">Pricing Plans Section Settings</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {settings.pricing.plans.map((plan, index) => (
                <div key={index}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Plan {index + 1} Title:</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={plan.title || ''}
                      onChange={e => {
                        const newPlans = [...settings.pricing.plans];
                        newPlans[index].title = e.target.value;
                        setSettings(prevSettings => ({
                          ...prevSettings,
                          pricing: {
                            ...prevSettings.pricing,
                            plans: newPlans,
                          },
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Plan {index + 1} Price:</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={plan.price || ''}
                      onChange={e => {
                        const newPlans = [...settings.pricing.plans];
                        newPlans[index].price = e.target.value;
                        setSettings(prevSettings => ({
                          ...prevSettings,
                          pricing: {
                            ...prevSettings.pricing,
                            plans: newPlans,
                          },
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Plan {index + 1} Features:</label>
                    <textarea
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={plan.features.join('\n') || ''}
                      onChange={e => {
                        const newPlans = [...settings.pricing.plans];
                        newPlans[index].features = e.target.value.split('\n');
                        setSettings(prevSettings => ({
                          ...prevSettings,
                          pricing: {
                            ...prevSettings.pricing,
                            plans: newPlans,
                          },
                        }));
                      }}
                    ></textarea>
                  </div>
                </div>
              ))}
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
            </form>
          </div>
        );
      case 'testimonials':
        return (
          <div>
            <h1 className="text-xl font-semibold mb-4">Testimonials Section Settings</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {settings.testimonials.map((testimonial, index) => (
                <div key={index}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Testimonial {index + 1} Name:</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={testimonial.name || ''}
                      onChange={e => {
                        const newTestimonials = [...settings.testimonials];
                        newTestimonials[index].name = e.target.value;
                        setSettings(prevSettings => ({
                          ...prevSettings,
                          testimonials: newTestimonials,
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Testimonial {index + 1} Position:</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={testimonial.position || ''}
                      onChange={e => {
                        const newTestimonials = [...settings.testimonials];
                        newTestimonials[index].position = e.target.value;
                        setSettings(prevSettings => ({
                          ...prevSettings,
                          testimonials: newTestimonials,
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Testimonial {index + 1} Message:</label>
                    <textarea
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={testimonial.message || ''}
                      onChange={e => {
                        const newTestimonials = [...settings.testimonials];
                        newTestimonials[index].message = e.target.value;
                        setSettings(prevSettings => ({
                          ...prevSettings,
                          testimonials: newTestimonials,
                        }));
                      }}
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Testimonial {index + 1} Image:</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
                      onChange={e => handleFileChange('testimonials', index, e.target.files[0])}
                    />
                    {testimonial.image && (
                      <img                    
                                        src={`http://127.0.0.1:8000${settings.testimonial.image}`}

                      alt={`Testimonial ${index + 1}`} className="mt-2 h-16" />
                    )}
                  </div>
                </div>
              ))}
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
            </form>
          </div>
        );
      case 'faq':
        return (
          <div>
            <h1 className="text-xl font-semibold mb-4">FAQ Section Settings</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {settings.faq.map((item, index) => (
                <div key={index}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">FAQ {index + 1} Question:</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={item.question || ''}
                      onChange={e => {
                        const newFaq = [...settings.faq];
                        newFaq[index].question = e.target.value;
                        setSettings(prevSettings => ({
                          ...prevSettings,
                          faq: newFaq,
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">FAQ {index + 1} Answer:</label>
                    <textarea
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={item.answer || ''}
                      onChange={e => {
                        const newFaq = [...settings.faq];
                        newFaq[index].answer = e.target.value;
                        setSettings(prevSettings => ({
                          ...prevSettings,
                          faq: newFaq,
                        }));
                      }}
                    ></textarea>
                  </div>
                </div>
              ))}
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
            </form>
          </div>
        );
      case 'contact':
        return (
          <div>
            <h1 className="text-xl font-semibold mb-4">Contact Section Settings</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Address:</label>
                <textarea
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.contact.address || ''}
                  onChange={e => handleChange('contact', 'address', e.target.value)}
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email:</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.contact.email || ''}
                  onChange={e => handleChange('contact', 'email', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone:</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.contact.phone || ''}
                  onChange={e => handleChange('contact', 'phone', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Form Name:</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.contact.form.name || ''}
                  onChange={e => handleNestedChange('contact', 'form', 'name', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Form Email:</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.contact.form.email || ''}
                  onChange={e => handleNestedChange('contact', 'form', 'email', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Form Phone:</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.contact.form.phone || ''}
                  onChange={e => handleNestedChange('contact', 'form', 'phone', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Form Message:</label>
                <textarea
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={settings.contact.form.message || ''}
                  onChange={e => handleNestedChange('contact', 'form', 'message', e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col">
        <div className="mb-4">
          <h1 className="font-semibold text-2xl mb-1 dark:text-slate-100">Settings</h1>
          <ol className="list-reset flex text-sm text-gray-500 dark:text-gray-400">
            <li><a href="#" className="text-gray-500 dark:text-gray-400">T-Wind</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-500 dark:text-gray-400">Settings</li>
            <li><span className="mx-2">/</span></li>
            <li className="text-blue-600 hover:text-blue-700 dark:text-blue-500">Configuration</li>
          </ol>
        </div>

        <div className="bg-white dark:bg-slate-800 shadow rounded-md p-4">
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-4">
            <ul className="flex flex-wrap -mb-px">
              <li className="mr-2">
                <button onClick={() => setActiveTab('navbar')} className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'navbar' ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
                  Navbar
                </button>
              </li>
              <li className="mr-2">
                <button onClick={() => setActiveTab('hero')} className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'hero' ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
                  Hero
                </button>
              </li>
              <li className="mr-2">
                <button onClick={() => setActiveTab('features')} className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'features' ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
                  Features
                </button>
              </li>
              <li className="mr-2">
                <button onClick={() => setActiveTab('about')} className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'about' ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
                  About Us
                </button>
              </li>
              <li className="mr-2">
                <button onClick={() => setActiveTab('whatLookingFor')} className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'whatLookingFor' ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
                  What is Looking For
                </button>
              </li>
              <li className="mr-2">
                <button onClick={() => setActiveTab('pricing')} className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'pricing' ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
                  Pricing Plans
                </button>
              </li>
              <li className="mr-2">
                <button onClick={() => setActiveTab('testimonials')} className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'testimonials' ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
                  Testimonials
                </button>
              </li>
              <li className="mr-2">
                <button onClick={() => setActiveTab('faq')} className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'faq' ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
                  FAQ
                </button>
              </li>
              <li className="mr-2">
                <button onClick={() => setActiveTab('contact')} className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'contact' ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylesPage;
