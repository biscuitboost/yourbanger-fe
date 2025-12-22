import { useState, useEffect } from 'react'

interface FormData {
  occasion: string
  recipientName: string
  senderName: string
  giftMessage: string
  vibe: string
  style: string
  vocalGender: 'm' | 'f'
  songFocus: string
  personalDetails: string
}

const OCCASIONS = [
  { value: 'birthday', label: 'Birthday', emoji: '🎂' },
  { value: 'anniversary', label: 'Anniversary', emoji: '💍' },
  { value: 'wedding', label: 'Wedding', emoji: '💒' },
  { value: 'retirement', label: 'Retirement', emoji: '👔' },
  { value: 'fathers_day', label: "Father's Day", emoji: '👨' },
  { value: 'mothers_day', label: "Mother's Day", emoji: '👩' },
  { value: 'thank_you', label: 'Thank You', emoji: '🙏' },
  { value: 'memorial', label: 'Memorial', emoji: '🕊️' },
]

const VIBES = [
  { value: 'uplifting', label: 'Uplifting', emoji: '🌟' },
  { value: 'romantic', label: 'Romantic', emoji: '💕' },
  { value: 'heartfelt', label: 'Heartfelt', emoji: '💝' },
  { value: 'funny', label: 'Funny', emoji: '😄' },
  { value: 'energetic', label: 'Energetic', emoji: '⚡' },
  { value: 'nostalgic', label: 'Nostalgic', emoji: '🌅' },
]

const STYLES = [
  { value: 'pop', label: 'Pop', emoji: '🎵' },
  { value: 'acoustic', label: 'Acoustic', emoji: '🎸' },
  { value: 'rnb', label: 'R&B', emoji: '🎤' },
  { value: 'country', label: 'Country', emoji: '🤠' },
  { value: 'rock', label: 'Rock', emoji: '🎸' },
  { value: 'soul', label: 'Soul', emoji: '🎷' },
]

const VOCALS = [
  { value: 'm', label: 'Male Voice', emoji: '👨' },
  { value: 'f', label: 'Female Voice', emoji: '👩' },
]

const STEPS = [
  { id: 'occasion', title: 'Occasion', icon: '🎁' },
  { id: 'recipients', title: 'Recipients', icon: '✨' },
  { id: 'music', title: 'Music Style', icon: '🎵' },
  { id: 'details', title: 'Song Details', icon: '✨' },
]

const STORAGE_KEY = 'yourbanger-form-draft'
const APP_URL = 'https://app.yourbanger.com'

export default function SongCreationForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showRestorePrompt, setShowRestorePrompt] = useState(false)
  
  const [formData, setFormData] = useState<FormData>({
    occasion: '',
    recipientName: '',
    senderName: '',
    giftMessage: '',
    vibe: '',
    style: '',
    vocalGender: 'm',
    songFocus: '',
    personalDetails: '',
  })

  // Check for saved progress on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        const age = Date.now() - parsed.timestamp
        // Show restore prompt if data is less than 7 days old
        if (age < 7 * 24 * 60 * 60 * 1000) {
          setShowRestorePrompt(true)
        } else {
          localStorage.removeItem(STORAGE_KEY)
        }
      } catch (e) {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  }, [])

  // Auto-save form data with debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Object.values(formData).some(v => v !== '' && v !== 'm')) {
        const saveData = {
          data: formData,
          currentStep,
          timestamp: Date.now(),
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData))
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [formData, currentStep])

  const restoreSavedData = () => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setFormData(parsed.data)
        setCurrentStep(parsed.currentStep || 0)
        setShowRestorePrompt(false)
      } catch (e) {
        console.error('Failed to restore data:', e)
      }
    }
  }

  const dismissRestorePrompt = () => {
    setShowRestorePrompt(false)
    localStorage.removeItem(STORAGE_KEY)
  }

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const canProceed = (): boolean => {
    switch (currentStep) {
      case 0: return !!formData.occasion
      case 1: return !!formData.recipientName && !!formData.senderName
      case 2: return !!formData.vibe && !!formData.style
      case 3: return !!formData.songFocus
      default: return false
    }
  }

  const handleNext = () => {
    if (canProceed() && currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = () => {
    if (!canProceed()) return
    
    // Save form data for transfer to app
    const transferData = {
      data: formData,
      timestamp: Date.now(),
      transferred: false,
    }
    localStorage.setItem('song-form-transfer', JSON.stringify(transferData))
    
    // Clear the draft
    localStorage.removeItem(STORAGE_KEY)
    
    // Redirect to app with signup
    window.location.href = `${APP_URL}/auth?tab=signup&from=create`
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Restore Prompt */}
      {showRestorePrompt && (
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💾</span>
            <div className="flex-1">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                Continue where you left off?
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                We found your previous song creation progress.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={restoreSavedData}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Restore Progress
                </button>
                <button
                  onClick={dismissRestorePrompt}
                  className="px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 transition-colors"
                >
                  Start Fresh
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {STEPS.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                  index <= currentStep
                    ? 'border-[var(--primary)] bg-[var(--primary)] text-white'
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-400'
                }`}
              >
                <span className="text-lg">{step.icon}</span>
              </div>
              {index < STEPS.length - 1 && (
                <div
                  className={`w-[60px] h-1 mx-2 ${
                    index < currentStep ? 'bg-[var(--primary)]' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {STEPS.map((step, index) => (
            <span
              key={step.id}
              className={`text-xs font-medium ${
                index <= currentStep ? 'text-[var(--primary)]' : 'text-gray-400'
              }`}
            >
              {step.title}
            </span>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
        {currentStep === 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">What's the occasion?</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Choose the type of celebration for your personalized song.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {OCCASIONS.map((occasion) => (
                <button
                  key={occasion.value}
                  type="button"
                  onClick={() => updateField('occasion', occasion.value)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                    formData.occasion === occasion.value
                      ? 'border-[var(--primary)] bg-[var(--primary)]/10 shadow-md'
                      : 'border-gray-200 dark:border-gray-600 hover:border-[var(--primary)]/50'
                  }`}
                >
                  <span className="text-2xl mb-2">{occasion.emoji}</span>
                  <span className="text-sm font-medium">{occasion.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Who is this gift for?</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Tell us about the lucky recipient and yourself.
            </p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="recipientName" className="block text-sm font-medium mb-1">
                  Recipient's Name
                </label>
                <input
                  id="recipientName"
                  type="text"
                  placeholder="e.g., Sarah, Dad, The Happy Couple"
                  value={formData.recipientName}
                  onChange={(e) => updateField('recipientName', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="senderName" className="block text-sm font-medium mb-1">
                  Your Name (the gift giver)
                </label>
                <input
                  id="senderName"
                  type="text"
                  placeholder="e.g., John, The Smith Family"
                  value={formData.senderName}
                  onChange={(e) => updateField('senderName', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="giftMessage" className="block text-sm font-medium mb-1">
                  Personal Message (optional)
                </label>
                <textarea
                  id="giftMessage"
                  placeholder="Add a heartfelt message that will appear with the song..."
                  value={formData.giftMessage}
                  onChange={(e) => updateField('giftMessage', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">What vibe should the song have?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Choose the emotional tone for your personalized song.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {VIBES.map((vibe) => (
                  <button
                    key={vibe.value}
                    type="button"
                    onClick={() => updateField('vibe', vibe.value)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                      formData.vibe === vibe.value
                        ? 'border-[var(--primary)] bg-[var(--primary)]/10 shadow-md'
                        : 'border-gray-200 dark:border-gray-600 hover:border-[var(--primary)]/50'
                    }`}
                  >
                    <span className="text-2xl mb-2">{vibe.emoji}</span>
                    <span className="text-sm font-medium">{vibe.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold">What music style?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Pick a genre that suits the recipient.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {STYLES.map((style) => (
                  <button
                    key={style.value}
                    type="button"
                    onClick={() => updateField('style', style.value)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                      formData.style === style.value
                        ? 'border-[var(--primary)] bg-[var(--primary)]/10 shadow-md'
                        : 'border-gray-200 dark:border-gray-600 hover:border-[var(--primary)]/50'
                    }`}
                  >
                    <span className="text-2xl mb-2">{style.emoji}</span>
                    <span className="text-sm font-medium">{style.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold">Voice preference</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Choose the vocal style for your song.
              </p>
              <div className="flex gap-3">
                {VOCALS.map((vocal) => (
                  <button
                    key={vocal.value}
                    type="button"
                    onClick={() => updateField('vocalGender', vocal.value as 'm' | 'f')}
                    className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                      formData.vocalGender === vocal.value
                        ? 'border-[var(--primary)] bg-[var(--primary)]/10'
                        : 'border-gray-200 dark:border-gray-600 hover:border-[var(--primary)]/50'
                    }`}
                  >
                    <span className="text-xl">{vocal.emoji}</span>
                    <span className="font-medium">{vocal.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Tell us about the song</h2>
            <p className="text-gray-600 dark:text-gray-400">
              The more details you provide, the more personalized your song will be!
            </p>
            
            <div>
              <label htmlFor="songFocus" className="block text-sm font-medium mb-1">
                What should the song be about?
              </label>
              <textarea
                id="songFocus"
                placeholder="e.g., Celebrating Sarah's 30th birthday and her love of adventure..."
                value={formData.songFocus}
                onChange={(e) => updateField('songFocus', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="personalDetails" className="block text-sm font-medium mb-1">
                Personal details to include (optional)
              </label>
              <textarea
                id="personalDetails"
                placeholder="e.g., She loves hiking, her dog Max, and making everyone laugh. Her favorite memory is our trip to Hawaii..."
                value={formData.personalDetails}
                onChange={(e) => updateField('personalDetails', e.target.value)}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Include names, memories, inside jokes, or anything that makes this person special.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          ← Back
        </button>

        {currentStep < STEPS.length - 1 ? (
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className="px-6 py-2 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canProceed()}
            className="px-6 py-2 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            <span>🎁</span>
            Continue to Payment
          </button>
        )}
      </div>

      {/* Price Info */}
      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>One-time payment of <strong>$19.99</strong></p>
        <p>Create 3 unique song variations to choose from</p>
      </div>
    </div>
  )
}
