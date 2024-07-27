import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const AdminSettingsPage = () => {
  const [activeTab, setActiveTab] = useState('ai-config');
  const [settings, setSettings] = useState({
    name: '',
    email: '',
    current_password: '',
    new_password: '',
    input_language: '',
    blog_language: '',
    openai_key: '',
    whisper_key: '',
    blog_prompt: '',
    plan_basic: '',
    plan_basic_enabled: false,
    plan_premium: '',
    plan_premium_enabled: false,
    plan_plus: '',
    plan_plus_enabled: false,
    plan_master: '',
    plan_master_enabled: false,
    stripe_key: '',
    paypal_key: '',
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/settings');
        const data = await response.json();
        setSettings(data);
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        alert('Settings updated successfully');
      } else {
        alert('Failed to update settings');
      }
    } catch (error) {
      console.error('Error updating settings:', error);
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
                <button onClick={() => setActiveTab('blog-preferences')} className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'blog-preferences' ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
                  Blog Preferences
                </button>
              </li>
              <li className="mr-2">
                <button onClick={() => setActiveTab('ai-config')} className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'ai-config' ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
                  AI Config
                </button>
              </li>
              <li className="mr-2">
                <button onClick={() => setActiveTab('plans-config')} className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'plans-config' ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
                  Plans Config
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('payment-config')} className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'payment-config' ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
                  Payment Config
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content">
    

            {activeTab === 'blog-preferences' && (
              <div id="blog-preferences" className="tab-pane active-tab-content">
                <div className="card-body">
                  <form id="blog-preferences-form" className="form" onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="input_language" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Preferred Input Language</label>
                      <select name="input_language" id="input_language" className="form-control mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={settings.input_language} onChange={handleChange}>
                        <option>Global English</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="blog_language" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Preferred Blog Language</label>
                      <select name="blog_language" id="blog_language" className="form-control mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={settings.blog_language} onChange={handleChange}>
                        <option>English - English</option>
                      </select>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none">Save</button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === 'ai-config' && (
              <div id="ai-config" className="tab-pane active-tab-content">
                <div className="card-body">
                  <form id="ai-config-form" className="form" onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="openai_key" className="block text-sm font-medium text-gray-700 dark:text-gray-400">OpenAI Key</label>
                      <input name="openai_key" className="form-control mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="openai_key" placeholder="Enter OpenAI Key" value={settings.openai_key} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="whisper_key" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Whisper Key</label>
                      <input name="whisper_key" className="form-control mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="whisper_key" placeholder="Enter Whisper Key" value={settings.whisper_key} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="blog_prompt" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Prompt for Generating Blog</label>
                      <textarea name="blog_prompt" id="blog_prompt" rows="4" className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Prompt for Generating Blog..." value={settings.blog_prompt} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none">Save</button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === 'plans-config' && (
              <div id="plans-config" className="tab-pane active-tab-content">
                <div className="card-body">
                  <form id="plans-config-form" className="form" onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="plan_basic" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Basic Plan</label>
                      <div className="flex items-center">
                        <input name="plan_basic" className="form-control mr-2 block w-1/3 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="plan_basic" placeholder="Price" value={settings.plan_basic} onChange={handleChange} />
                        <input name="plan_basic_enabled" type="checkbox" id="plan_basic_enabled" checked={settings.plan_basic_enabled} onChange={handleChange} className="mr-2" /> Enabled
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="plan_premium" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Premium Plan</label>
                      <div className="flex items-center">
                        <input name="plan_premium" className="form-control mr-2 block w-1/3 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="plan_premium" placeholder="Price" value={settings.plan_premium} onChange={handleChange} />
                        <input name="plan_premium_enabled" type="checkbox" id="plan_premium_enabled" checked={settings.plan_premium_enabled} onChange={handleChange} className="mr-2" /> Enabled
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="plan_plus" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Plus Plan</label>
                      <div className="flex items-center">
                        <input name="plan_plus" className="form-control mr-2 block w-1/3 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="plan_plus" placeholder="Price" value={settings.plan_plus} onChange={handleChange} />
                        <input name="plan_plus_enabled" type="checkbox" id="plan_plus_enabled" checked={settings.plan_plus_enabled} onChange={handleChange} className="mr-2" /> Enabled
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="plan_master" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Master Plan</label>
                      <div className="flex items-center">
                        <input name="plan_master" className="form-control mr-2 block w-1/3 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="plan_master" placeholder="Price" value={settings.plan_master} onChange={handleChange} />
                        <input name="plan_master_enabled" type="checkbox" id="plan_master_enabled" checked={settings.plan_master_enabled} onChange={handleChange} className="mr-2" /> Enabled
                      </div>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none">Save</button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === 'payment-config' && (
              <div id="payment-config" className="tab-pane active-tab-content">
                <div className="card-body">
                  <form id="payment-config-form" className="form" onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="stripe_key" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Stripe Key</label>
                      <input name="stripe_key" className="form-control mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="stripe_key" placeholder="Enter Stripe Key" value={settings.stripe_key} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="paypal_key" className="block text-sm font-medium text-gray-700 dark:text-gray-400">PayPal Key</label>
                      <input name="paypal_key" className="form-control mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="paypal_key" placeholder="Enter PayPal Key" value={settings.paypal_key} onChange={handleChange} />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none">Save</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
