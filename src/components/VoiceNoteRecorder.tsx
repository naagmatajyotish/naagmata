import React, { useState, useRef, useEffect } from 'react';
import { Mic, Square, Play, Pause, RotateCcw, Send, Sparkles, CheckCircle2, AlertCircle, Volume2, Download, Lock } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { useLanguage } from '../context/LanguageContext';

export const VoiceNoteRecorder: React.FC = () => {
  const { lang } = useLanguage();
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedNotification, setCopiedNotification] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
      }
    };
  }, [audioUrl]);

  const startRecording = async () => {
    setErrorMsg(null);
    setAudioUrl(null);
    setAudioBlob(null);
    setRecordingTime(0);
    audioChunksRef.current = [];

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Audio recording is not supported on this browser.');
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const mimeType = mediaRecorder.mimeType || 'audio/webm';
        const blob = new Blob(audioChunksRef.current, { type: mimeType });
        setAudioBlob(blob);
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);

        // Stop all tracks to release microphone
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start(200);
      setIsRecording(true);

      // Start timer
      timerRef.current = window.setInterval(() => {
        setRecordingTime((prev) => {
          if (prev >= 60) {
            stopRecording();
            return 60;
          }
          return prev + 1;
        });
      }, 1000);
    } catch (err: any) {
      console.error('Error accessing microphone:', err);
      setErrorMsg(
        lang === 'hi'
          ? 'माइक्रोफोन की अनुमति नहीं मिली। आप सीधे व्हाट्सएप पर वॉइस नोट भेज सकते हैं।'
          : lang === 'en'
          ? 'Microphone access was denied. You can directly send a voice message on WhatsApp.'
          : 'માઇક્રોફોન પરવાનગી મળી નથી. તમે સીધા વોટ્સએપ પર વોઇસ મેસેજ મોકલી શકો છો.'
      );
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRecording(false);
  };

  const resetRecording = () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    setAudioBlob(null);
    setRecordingTime(0);
    setIsRecording(false);
    setIsPlaying(false);
    setErrorMsg(null);
  };

  const togglePlayAudio = () => {
    if (!audioPlayerRef.current) return;
    if (isPlaying) {
      audioPlayerRef.current.pause();
      setIsPlaying(false);
    } else {
      audioPlayerRef.current.play();
      setIsPlaying(true);
    }
  };

  const downloadAudioFile = () => {
    if (!audioBlob) return;
    const downloadUrl = URL.createObjectURL(audioBlob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = `BabaJi-Voice-Prashna-${Date.now()}.webm`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(downloadUrl);
  };

  const sendToWhatsApp = () => {
    // Automatically trigger audio download so user can attach it directly
    downloadAudioFile();
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 5000);

    const whatsappMessage =
      lang === 'hi'
        ? 'प्रणाम बाबा जी, मैंने अपना वॉइस मैसेज रिकॉर्ड कर लिया है। कृपया मेरी समस्या सुनकर मुझे गुप्त एवं सिद्ध वैदिक मार्गदर्शन प्रदान करें।'
        : lang === 'en'
        ? 'Pranam Baba Ji, I have recorded my confidential voice note regarding my life crisis. Please listen and bless me with your sacred Vedic guidance.'
        : 'પ્રણામ બાબા જી, મેં મારો વોઇસ મેસેજ રેકોર્ડ કર્યો છે. કૃપા કરીને મારી સમસ્યા સાંભળી મને વૈદિક ઉપાય અને આશીર્વાદ આપો.';

    const encoded = encodeURIComponent(whatsappMessage);
    const url = `https://wa.me/${CONTACT_INFO.phoneRaw.replace('+', '')}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section
      id="voice-note-section"
      className="w-full max-w-5xl mx-auto px-3.5 sm:px-6 my-10 sm:my-14"
    >
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#fffcf2] to-[#f9f5e8] border-2 border-amber-300/80 shadow-xl p-5 sm:p-8 md:p-10 text-center">
        {/* Sacred Decorative Watermark */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-amber-400/10 via-transparent to-transparent -mr-20 -mt-20 pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-radial from-orange-400/10 via-transparent to-transparent -ml-20 -mb-20 pointer-events-none rounded-full" />

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-900 text-xs font-bold mb-3 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
          <span>
            {lang === 'hi'
              ? '॥ १-क्लिक ऑडियो संदेश • सीधे बाबा जी को बोलकर बताएं ॥'
              : lang === 'en'
              ? '॥ 1-Click Voice Note • Speak Directly to Baba Ji ॥'
              : '॥ ૧-ક્લિક ઓડિયો સંદેશ • સીધું બોલીને સમસ્યા જણાવો ॥'}
          </span>
        </div>

        {/* Title */}
        <h2 className="heading-mystic text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2a2203] mb-3 leading-snug">
          {lang === 'hi'
            ? 'टाइप करने की जरूरत नहीं — अपनी समस्या बोलकर बताएं'
            : lang === 'en'
            ? 'No Need to Type — Speak Your Problem to Baba Ji'
            : 'ટાઈપ કરવાની જરૂર નથી — તમારી સમસ્યા બોલીને જણાવો'}
        </h2>

        {/* Description */}
        <p className="text-stone-700 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
          {lang === 'hi'
            ? 'मन का दर्द, पारिवारिक कलह या प्रेम में बाधा खुलकर शब्दों में नहीं लिखी जा सकती। नीचे माइक दबाएं और शांति से अपनी बात कहें। आपका संदेश 100% गोपनीय रहेगा।'
            : lang === 'en'
            ? 'Heartbreak, relationship disputes, and private sorrow can be difficult to type. Tap the mic below to speak your mind freely. Your voice note remains 100% private.'
            : 'મનનો ભાર કે પારિવારિક સમસ્યા લખવી મુશ્કેલ હોય છે. નીચે માઇક દબાવી તમારી વાત શાંતિથી બોલો. તમારો સંદેશ ૧૦૦% ગુપ્ત રહેશે.'}
        </p>

        {/* Confidential Security Guarantee */}
        <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-300/80 rounded-full px-3.5 py-1 mb-6">
          <Lock className="w-3.5 h-3.5 text-emerald-600" />
          <span>
            {lang === 'hi'
              ? '१००% निजी एवं गोपनीय • केवल पूज्य बाबा जी द्वारा सुना जाएगा'
              : lang === 'en'
              ? '100% Private & Confidential • Heard Solely by Baba Ji'
              : '૧૦૦% ગુપ્ત અને સુરક્ષિત • માત્ર બાબા જી સાંભળશે'}
          </span>
        </div>

        {/* Main Voice Recording Console */}
        <div className="max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 shadow-md">
          {/* STATE 1: Idle (Ready to record) */}
          {!isRecording && !audioUrl && (
            <div className="flex flex-col items-center">
              <button
                onClick={startRecording}
                className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-4 border-amber-200"
                aria-label="Start Voice Recording"
              >
                <div className="absolute inset-0 rounded-full bg-amber-400 opacity-30 group-hover:animate-ping" />
                <Mic className="w-9 h-9 sm:w-10 sm:h-10 text-white drop-shadow-sm" />
              </button>
              <span className="mt-4 font-bold text-stone-900 text-sm sm:text-base">
                {lang === 'hi'
                  ? 'माइक दबाएं और बोलना शुरू करें'
                  : lang === 'en'
                  ? 'Tap Mic to Start Speaking'
                  : 'માઇક દબાવો અને બોલવાનું શરૂ કરો'}
              </span>
              <span className="text-xs text-stone-500 mt-1">
                {lang === 'hi'
                  ? '(अधिकतम १ मिनट • हिंदी, गुजराती या अंग्रेजी में)'
                  : lang === 'en'
                  ? '(Max 1 minute • Hindi, Gujarati, or English)'
                  : '(મહત્તમ ૧ મિનિટ • ગુજરાતી, હિન્દી કે અંગ્રેજીમાં)'}
              </span>
            </div>
          )}

          {/* STATE 2: Actively Recording */}
          {isRecording && (
            <div className="flex flex-col items-center">
              {/* Dynamic Sound Wave Simulation */}
              <div className="flex items-center justify-center gap-1.5 h-14 mb-3">
                <span className="w-1.5 h-6 bg-red-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-10 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-14 bg-amber-500 rounded-full animate-bounce" />
                <span className="w-1.5 h-12 bg-red-500 rounded-full animate-bounce [animation-delay:-0.2s]" />
                <span className="w-1.5 h-8 bg-amber-600 rounded-full animate-bounce [animation-delay:-0.35s]" />
                <span className="w-1.5 h-11 bg-orange-600 rounded-full animate-bounce [animation-delay:-0.1s]" />
                <span className="w-1.5 h-5 bg-red-400 rounded-full animate-bounce [animation-delay:-0.25s]" />
              </div>

              {/* Timer */}
              <div className="flex items-center gap-2 text-red-600 font-mono font-extrabold text-xl mb-4">
                <span className="w-3 h-3 rounded-full bg-red-600 animate-ping" />
                <span>{formatTime(recordingTime)} / 01:00</span>
              </div>

              <p className="text-xs text-stone-600 mb-4 font-medium">
                {lang === 'hi'
                  ? 'आपकी आवाज रिकॉर्ड हो रही है... अपनी बात पूरी होने पर रोकें।'
                  : lang === 'en'
                  ? 'Recording your voice... Press Stop when finished.'
                  : 'તમારો અવાજ રેકોર્ડ થઈ રહ્યો છે... પૂરું થાય એટલે રોકો.'}
              </p>

              {/* Stop Button */}
              <button
                onClick={stopRecording}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm shadow-md transition-transform active:scale-95 cursor-pointer border border-amber-400/40"
              >
                <Square className="w-4 h-4 fill-red-500 text-red-500" />
                <span>
                  {lang === 'hi' ? 'रिकॉर्डिंग समाप्त करें (Stop)' : lang === 'en' ? 'Stop Recording' : 'સમાપ્ત કરો'}
                </span>
              </button>
            </div>
          )}

          {/* STATE 3: Recorded & Ready to Listen/Send */}
          {!isRecording && audioUrl && (
            <div className="flex flex-col items-center">
              <audio
                ref={audioPlayerRef}
                src={audioUrl}
                onEnded={() => setIsPlaying(false)}
                className="hidden"
              />

              <div className="flex items-center gap-2 text-emerald-700 text-sm font-bold mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>
                  {lang === 'hi'
                    ? `वॉइस मैसेज रिकॉर्ड हो गया (${formatTime(recordingTime)})`
                    : lang === 'en'
                    ? `Voice Note Ready (${formatTime(recordingTime)})`
                    : `વોઇસ મેસેજ તૈયાર છે (${formatTime(recordingTime)})`}
                </span>
              </div>

              {/* Audio Controls */}
              <div className="flex items-center gap-3 w-full bg-amber-50/80 p-3 rounded-xl border border-amber-200 mb-4">
                <button
                  onClick={togglePlayAudio}
                  className="w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center shrink-0 cursor-pointer shadow-sm transition-transform active:scale-95"
                  aria-label={isPlaying ? 'Pause Audio' : 'Play Audio'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-white" />
                  ) : (
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  )}
                </button>

                <div className="flex-1 text-left">
                  <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                    <span>{isPlaying ? 'सुन रहे हैं...' : 'सुनने के लिए प्ले करें'}</span>
                  </div>
                  <div className="text-[11px] text-stone-500 font-mono">
                    {formatTime(recordingTime)}
                  </div>
                </div>

                <button
                  onClick={resetRecording}
                  className="text-stone-500 hover:text-red-600 p-2 rounded-lg transition-colors cursor-pointer"
                  title="Delete & Record Again"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* WhatsApp Action Button */}
              <button
                onClick={sendToWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all active:scale-[0.98] cursor-pointer"
              >
                <Send className="w-5 h-5 text-white" />
                <span>
                  {lang === 'hi'
                    ? 'बाबा जी को व्हाट्सएप पर भेजें'
                    : lang === 'en'
                    ? 'Send to Baba Ji on WhatsApp'
                    : 'બાબા જીને વોટ્સએપ પર મોકલો'}
                </span>
              </button>

              {copiedNotification && (
                <div className="mt-3 p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-1.5 text-left">
                  <Download className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                  <span>
                    {lang === 'hi'
                      ? 'ऑडियो फाइल डाउनलोड हो गई है! व्हाट्सएप खुलते ही बाबा जी को भेजें।'
                      : 'Audio file downloaded! Attach and send directly to Baba Ji on WhatsApp.'}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Error Message */}
          {errorMsg && (
            <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs text-left flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{errorMsg}</p>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-block text-emerald-700 font-bold underline hover:text-emerald-800"
                >
                  {lang === 'hi'
                    ? 'सीधे व्हाट्सएप पर वॉइस नोट भेजें →'
                    : 'Send Voice Note directly on WhatsApp →'}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
