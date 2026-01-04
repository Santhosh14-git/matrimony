import React, { useEffect, useMemo, useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Stepper from '../../components/ui/Stepper';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const steps = [
    'Personal Info',
    'Community',
    'Family',
    'Work & Lifestyle',
    'Horoscope',
    'Photos & Media',
  ];
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    gender: '',
    dob: '',
    age: '',
    phone: '',
    whatsapp: '',
    email: '',
    about: '',
    religion: '',
    caste: '',
    subCaste: '',
    motherTongue: '',
    kuladeivam: '',
    nativePlace: '',
    profileCreatedBy: '',
    fatherName: '',
    fatherOccupation: '',
    fatherStatus: '',
    motherName: '',
    motherOccupation: '',
    motherStatus: '',
    familyStatus: '',
    familyType: '',
    siblingsCount: '',
    marriedSiblingsCount: '',
    highestEducation: '',
    occupation: '',
    employmentType: '',
    company: '',
    annualIncome: '',
    height: '',
    weight: '',
    physicalStatus: '',
    complexion: '',
    horoscopeDob: '',
    timeOfBirth: '',
    placeOfBirth: '',
    rasi: '',
    nakshatra: '',
    dosham: '',
    lagna: '',
    dasha: '',
    house1: '',
    house2: '',
    house3: '',
    house4: '',
    house5: '',
    house6: '',
    house7: '',
    house8: '',
    house9: '',
    house10: '',
    house11: '',
    house12: '',
    photos: [null, null, null],
    jathagamPhoto: null,
    videoIntro: null,
  });
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    setSaving(true);
    const t = setTimeout(() => setSaving(false), 800);
    return () => clearTimeout(t);
  }, [form]);
  const isStep1Valid = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    return (
      form.fullName &&
      form.gender &&
      form.dob &&
      form.age &&
      form.phone &&
      emailOk
    );
  }, [form]);
  const isStep2Valid = useMemo(() => {
    return (
      form.religion &&
      form.caste &&
      form.motherTongue &&
      form.nativePlace &&
      form.profileCreatedBy
    );
  }, [form]);
  const isStep3Valid = useMemo(() => {
    return (
      form.fatherName &&
      form.motherName &&
      form.familyStatus &&
      form.familyType
    );
  }, [form]);
  const isStep4Valid = useMemo(() => {
    return (
      form.highestEducation &&
      form.occupation &&
      form.annualIncome &&
      form.height
    );
  }, [form]);
  const isStep5Valid = useMemo(() => {
    return (
      form.horoscopeDob &&
      form.placeOfBirth &&
      form.rasi
    );
  }, [form]);
  const isStep6Valid = useMemo(() => {
    return form.photos && (form.photos[0] || form.photos[1] || form.photos[2]);
  }, [form.photos]);
  const next = () => setStep((s) => Math.min(6, s + 1));
  const prev = () => {
    if (step === 1) {
      navigate('/');
    } else {
      setStep((s) => Math.max(1, s - 1));
    }
  };
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const setPhoto = (i) => (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setForm((f) => {
      const arr = Array.isArray(f.photos) ? [...f.photos] : [null, null, null];
      arr[i] = url;
      return { ...f, photos: arr };
    });
  };
  const setJathagam = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setForm((f) => ({ ...f, jathagamPhoto: url }));
  };
  const setVideo = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setForm((f) => ({ ...f, videoIntro: url }));
  };
  const submit = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff2ed] via-[#ffeaf3] to-[#f1e9ff]">
      <div className="container mx-auto mt-0 max-w-7xl px-[5%]">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prev} className="text-gray-600 hover:text-gray-900">← Back</button>
          <span className={`text-sm ${saving ? 'text-emerald-600' : 'text-gray-500'}`}>
            {saving ? 'Auto saving…' : 'Saved'}
          </span>
        </div>
        <h1 className="text-2xl font-bold">Create Your Profile</h1>
        <p className="text-gray-500 mt-1">Step {step} of 6</p>
        <div className="mt-4">
          <div className="h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-[#ff6f61] to-[#ff9a8d]"
              style={{ width: `${(step / 6) * 100}%` }}
            />
          </div>
        </div>
        <div className="mt-6">
          <Stepper currentStep={step} totalSteps={6} steps={steps} />
        </div>
        <Card className="mt-4">
          {step === 1 && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold">Personal Information</h2>
                <p className="text-gray-600">Let’s start with your basic details</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.fullName}
                    onChange={update('fullName')}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.gender}
                    onChange={update('gender')}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.dob}
                    onChange={update('dob')}
                    placeholder="mm/dd/yyyy"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.age}
                    onChange={update('age')}
                    placeholder="25"
                    min="18"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.whatsapp}
                    onChange={update('whatsapp')}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">About Yourself</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.about}
                    onChange={update('about')}
                    placeholder="Write a brief introduction about yourself…"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prev}>Previous</Button>
                <Button
                  onClick={next}
                  className="rounded-full bg-gradient-to-r from-[#ff6f61] to-[#ff9a8d] text-white"
                  disabled={!isStep1Valid}
                >
                  Next Step →
                </Button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold">Community & Religious Information</h2>
                <p className="text-gray-600">Share your cultural and religious background</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Religion *</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.religion}
                    onChange={update('religion')}
                    required
                  >
                    <option value="">Select religion</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Jain">Jain</option>
                    <option value="Buddhist">Buddhist</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Caste *</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.caste}
                    onChange={update('caste')}
                    placeholder="e.g., Brahmin, Kshatriya"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sub-Caste</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.subCaste}
                    onChange={update('subCaste')}
                    placeholder="Enter sub-caste"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mother Tongue *</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.motherTongue}
                    onChange={update('motherTongue')}
                    required
                  >
                    <option value="">Select language</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Gujarati">Gujarati</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Native Place *</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.nativePlace}
                    onChange={update('nativePlace')}
                    placeholder="Enter native place"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kuladeivam (Family Deity)</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.kuladeivam}
                    onChange={update('kuladeivam')}
                    placeholder="Enter kuladeivam"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Profile Created By *</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.profileCreatedBy}
                    onChange={update('profileCreatedBy')}
                    required
                  >
                    <option value="">Select who created this profile</option>
                    <option value="Self">Self</option>
                    <option value="Parent">Parent</option>
                    <option value="Sibling">Sibling</option>
                    <option value="Relative">Relative</option>
                    <option value="Friend">Friend</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prev}>Previous</Button>
                <Button
                  onClick={next}
                  className="rounded-full bg-gradient-to-r from-[#ff6f61] to-[#ff9a8d] text-white"
                  disabled={!isStep2Valid}
                >
                  Next Step →
                </Button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold">Family Details</h2>
                <p className="text-gray-600">Tell us about your family background</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Father's Name *</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.fatherName}
                    onChange={update('fatherName')}
                    placeholder="Enter father's name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Father's Status</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.fatherStatus}
                    onChange={update('fatherStatus')}
                  >
                    <option value="">Select status</option>
                    <option value="Alive">Alive</option>
                    <option value="Deceased">Deceased</option>
                    <option value="Retired">Retired</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Father's Occupation</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.fatherOccupation}
                    onChange={update('fatherOccupation')}
                    placeholder="Enter occupation"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mother's Status</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.motherStatus}
                    onChange={update('motherStatus')}
                  >
                    <option value="">Select status</option>
                    <option value="Alive">Alive</option>
                    <option value="Deceased">Deceased</option>
                    <option value="Homemaker">Homemaker</option>
                    <option value="Retired">Retired</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mother's Name *</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.motherName}
                    onChange={update('motherName')}
                    placeholder="Enter mother's name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mother's Occupation</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.motherOccupation}
                    onChange={update('motherOccupation')}
                    placeholder="Enter occupation"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Family Status *</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.familyStatus}
                    onChange={update('familyStatus')}
                    required
                  >
                    <option value="">Select family status</option>
                    <option value="Nuclear">Nuclear</option>
                    <option value="Joint">Joint</option>
                    <option value="Extended">Extended</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Family Type *</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.familyType}
                    onChange={update('familyType')}
                    required
                  >
                    <option value="">Select family type</option>
                    <option value="Traditional">Traditional</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Liberal">Liberal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Siblings</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.siblingsCount}
                    onChange={update('siblingsCount')}
                    min="0"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Married Siblings</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.marriedSiblingsCount}
                    onChange={update('marriedSiblingsCount')}
                    min="0"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prev}>Previous</Button>
                <Button
                  onClick={next}
                  className="rounded-full bg-gradient-to-r from-[#ff6f61] to-[#ff9a8d] text-white"
                  disabled={!isStep3Valid}
                >
                  Next Step →
                </Button>
              </div>
            </div>
          )}
          {step === 4 && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold">Work & Lifestyle</h2>
                <p className="text-gray-600">Share your professional and lifestyle details</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Highest Education *</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.highestEducation}
                    onChange={update('highestEducation')}
                  >
                    <option value="">Select education</option>
                    <option value="High School">High School</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Master">Master</option>
                    <option value="PhD">PhD</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Occupation *</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.occupation}
                    onChange={update('occupation')}
                    placeholder="e.g., Software Engineer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.employmentType}
                    onChange={update('employmentType')}
                  >
                    <option value="">Select type</option>
                    <option value="Private">Private</option>
                    <option value="Government">Government</option>
                    <option value="Self-employed">Self-employed</option>
                    <option value="Business">Business</option>
                    <option value="Student">Student</option>
                    <option value="Not working">Not working</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Annual Income *</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.annualIncome}
                    onChange={update('annualIncome')}
                  >
                    <option value="">Select income range</option>
                    <option value="<₹3L">&lt;₹3L</option>
                    <option value="₹3–6L">₹3–6L</option>
                    <option value="₹6–10L">₹6–10L</option>
                    <option value="₹10–20L">₹10–20L</option>
                    <option value=">₹20L">&gt;₹20L</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Workplace / Company</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.company}
                    onChange={update('company')}
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Height *</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.height}
                    onChange={update('height')}
                  >
                    <option value="">Select height</option>
                    <option value="150 cm">150 cm</option>
                    <option value="155 cm">155 cm</option>
                    <option value="160 cm">160 cm</option>
                    <option value="165 cm">165 cm</option>
                    <option value="170 cm">170 cm</option>
                    <option value="175 cm">175 cm</option>
                    <option value="180 cm">180 cm</option>
                    <option value="185 cm">185 cm</option>
                    <option value="190 cm">190 cm</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.weight}
                    onChange={update('weight')}
                    placeholder="60"
                    min="30"
                    max="200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Physical Status</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.physicalStatus}
                    onChange={update('physicalStatus')}
                  >
                    <option value="">Select status</option>
                    <option value="Normal">Normal</option>
                    <option value="Physically challenged">Physically challenged</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Complexion</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.complexion}
                    onChange={update('complexion')}
                  >
                    <option value="">Select complexion</option>
                    <option value="Fair">Fair</option>
                    <option value="Wheatish">Wheatish</option>
                    <option value="Dark">Dark</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prev}>Previous</Button>
                <Button
                  onClick={next}
                  className="rounded-full bg-gradient-to-r from-[#ff6f61] to-[#ff9a8d] text-white"
                  disabled={!isStep4Valid}
                >
                  Next Step →
                </Button>
              </div>
            </div>
          )}
          {step === 5 && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold">Horoscope Details</h2>
                <p className="text-gray-600">Enter your astrological information</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.horoscopeDob}
                    onChange={update('horoscopeDob')}
                    placeholder="mm/dd/yyyy"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time of Birth</label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.timeOfBirth}
                    onChange={update('timeOfBirth')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Place of Birth *</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.placeOfBirth}
                    onChange={update('placeOfBirth')}
                    placeholder="Enter birth place"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rasi (Moon Sign) *</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.rasi}
                    onChange={update('rasi')}
                  >
                    <option value="">Select rasi</option>
                    <option value="Mesha (Aries)">Mesha (Aries)</option>
                    <option value="Vrishabha (Taurus)">Vrishabha (Taurus)</option>
                    <option value="Mithuna (Gemini)">Mithuna (Gemini)</option>
                    <option value="Karka (Cancer)">Karka (Cancer)</option>
                    <option value="Simha (Leo)">Simha (Leo)</option>
                    <option value="Kanya (Virgo)">Kanya (Virgo)</option>
                    <option value="Tula (Libra)">Tula (Libra)</option>
                    <option value="Vrischika (Scorpio)">Vrischika (Scorpio)</option>
                    <option value="Dhanu (Sagittarius)">Dhanu (Sagittarius)</option>
                    <option value="Makara (Capricorn)">Makara (Capricorn)</option>
                    <option value="Kumbha (Aquarius)">Kumbha (Aquarius)</option>
                    <option value="Meena (Pisces)">Meena (Pisces)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nakshatra (Star)</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.nakshatra}
                    onChange={update('nakshatra')}
                    placeholder="e.g., Rohini"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dosham</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.dosham}
                    onChange={update('dosham')}
                  >
                    <option value="">Select dosham</option>
                    <option value="None">None</option>
                    <option value="Mangal (Kuja)">Mangal (Kuja)</option>
                    <option value="Shani">Shani</option>
                    <option value="Rahu">Rahu</option>
                    <option value="Ketu">Ketu</option>
                    <option value="Kalasarpa">Kalasarpa</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lagna (Ascendant)</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.lagna}
                    onChange={update('lagna')}
                    placeholder="Enter lagna"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Dasha Period</label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary-color focus:outline-none"
                    value={form.dasha}
                    onChange={update('dasha')}
                    placeholder="e.g., Jupiter Dasha"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-2xl p-6 bg-gradient-to-br from-pink-50 to-purple-50 border border-purple-100">
                <div className="font-semibold mb-4">Horoscope Chart (Optional)</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                    <div key={n} className="rounded-xl border-2 border-gray-200 p-4">
                      <input
                        className="w-full px-3 py-4 min-h-[150px] rounded-md border border-gray-300 focus:border-primary-color focus:outline-none"
                        value={form[`house${n}`]}
                        onChange={update(`house${n}`)}
                        placeholder={`House ${n}`}
                      />
                    </div>
                  ))}
                </div>
              </div>


              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prev}>Previous</Button>
                <Button
                  onClick={next}
                  className="rounded-full bg-gradient-to-r from-[#ff6f61] to-[#ff9a8d] text-white"
                  disabled={!isStep5Valid}
                >
                  Next Step →
                </Button>
              </div>
            </div>
          )}
          {step === 6 && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold">Photos & Media</h2>
                <p className="text-gray-600">Add your photos and optional video introduction</p>
              </div>
              <div>
                <div className="font-medium mb-2">Profile Photos (Up to 3) *</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[0, 1, 2].map((i) => (
                    <label key={i} className="block rounded-xl border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer">
                      <input type="file" accept="image/*" className="hidden" onChange={setPhoto(i)} />
                      {form.photos && form.photos[i] ? (
                        <img src={form.photos[i]} alt={`Photo ${i + 1}`} className="w-full h-40 object-cover rounded-lg" />
                      ) : (
                        <div className="text-gray-500">Upload Photo {i + 1}</div>
                      )}
                    </label>
                  ))}
                </div>
                <p className="text-gray-500 mt-2">Choose clear, recent photos. First photo will be your profile picture.</p>
              </div>
              <div className="mt-6">
                <div className="font-medium mb-2">Horoscope / Jathagam Photo (Optional)</div>
                <label className="block rounded-xl border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer">
                  <input type="file" accept="image/*" className="hidden" onChange={setJathagam} />
                  {form.jathagamPhoto ? (
                    <img src={form.jathagamPhoto} alt="Jathagam" className="w-full h-40 object-cover rounded-lg" />
                  ) : (
                    <div className="text-gray-500">
                      Upload your horoscope chart
                      <div className="mt-3 inline-block px-4 py-2 rounded-lg border border-gray-300">Choose File</div>
                    </div>
                  )}
                </label>
              </div>
              <div className="mt-6">
                <div className="font-medium mb-2">Video Introduction (Optional)</div>
                <label className="block rounded-xl border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer">
                  <input type="file" accept="video/*" className="hidden" onChange={setVideo} />
                  {form.videoIntro ? (
                    <video src={form.videoIntro} controls className="w-full h-40 rounded-lg" />
                  ) : (
                    <div className="text-gray-500">
                      Record or upload a short video introducing yourself
                      <div className="mt-3 inline-block px-4 py-2 rounded-lg border border-gray-300">Upload Video</div>
                    </div>
                  )}
                </label>
                <p className="text-gray-500 mt-2">Max 2 minutes, helps families know you better</p>
              </div>
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prev}>Previous</Button>
                <Button
                  onClick={submit}
                  className="rounded-full bg-gradient-to-r from-[#ff6f61] to-[#ff9a8d] text-white"
                  disabled={!isStep6Valid}
                >
                  Complete Profile →
                </Button>
              </div>
            </div>
          )}
          {step > 6 && (
            <div className="flex justify-between">
              <Button variant="outline" onClick={prev}>Previous</Button>
              <Button onClick={next}>{step < 6 ? 'Next' : 'Submit'}</Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Register;
