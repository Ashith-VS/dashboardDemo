import React, { useState } from 'react'
import type { FormData } from '../types/settings';

const Settings: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email:'' });
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <div className='p-8'>Settings</div>
  )
}

export default Settings