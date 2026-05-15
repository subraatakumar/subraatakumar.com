import React from 'react';
import { 
  Droplets, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowRight,
  Bluetooth,
  Lock,
  Globe,
  Waves
} from 'lucide-react';
import { motion } from 'framer-motion';

const ASSET_URL = "https://googleusercontent.com/image_generation_content/177";
const FEATURE_NAME = "NearBy Ripple Sync";

const SectionHeading = ({ subtitle, title, description, light = false }) => (
  <div className="max-w-3xl mb-12">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className={`flex items-center gap-2 text-sm font-bold tracking-widest uppercase mb-4 ${light ? 'text-blue-400' : 'text-blue-600'}`}
    >
      <Waves className="w-4 h-4" />
      {subtitle}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={`text-4xl md:text-6xl font-black mt-4 mb-6 leading-tight tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={`text-xl leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}
    >
      {description}
    </motion.p>
  </div>
);

const Hero = () => (
  <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-white">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/40 -skew-x-12 translate-x-24 z-0 hidden lg:block" />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-bold text-xs mb-8 shadow-lg shadow-blue-200">
          <Bluetooth className="w-4 h-4" />
          <span>INTRODUCING {FEATURE_NAME.toUpperCase()}</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] mb-8 tracking-tighter">
          The Data <br />
          <span className="text-blue-600">Ripple</span> <br />
          Effect.
        </h1>
        <p className="text-2xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
          Share your hydration journey with those right next to you. No servers, no accounts—just pure, private proximity.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl flex items-center gap-3 group">
            Explore the Ripple
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(37,99,235,0.2)] border-[16px] border-white ring-1 ring-slate-100">
          <img 
            src={ASSET_URL}
            alt="Ripple Sync Visual" 
            className="w-full aspect-square object-cover"
            style={{ objectPosition: 'center' }}
          />
        </div>
        <div className="absolute -bottom-10 -right-10 bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-2xl z-20 hidden md:block max-w-[280px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="font-black text-slate-900">Live Syncing</span>
          </div>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">
            24 hours of hydration data shared in under 2 seconds via P2P Bluetooth.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const ScenarioSection = ({ id, subtitle, title, description, position, reverse = false, theme = 'light' }) => {
  const isDark = theme === 'dark';
  
  return (
    <section id={id} className={`py-32 px-6 overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      <div className={`max-w-7xl mx-auto flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-center`}>
        <div className="flex-1">
          <SectionHeading 
            subtitle={subtitle} 
            title={title} 
            description={description} 
            light={isDark}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {[
              { icon: ShieldCheck, t: "Zero Servers", d: "Data stays in your hand." },
              { icon: Lock, t: "End-to-End", d: "Local P2P encryption." }
            ].map((item, idx) => (
              <div key={idx} className={`p-6 rounded-3xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-100'}`}>
                <item.icon className="w-6 h-6 text-blue-500 mb-3" />
                <h4 className="font-bold mb-1">{item.t}</h4>
                <p className="text-xs opacity-60 font-medium">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 w-full relative group">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative aspect-square md:aspect-video lg:aspect-square rounded-[4rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-blue-500/20 ${isDark ? 'ring-1 ring-white/10' : 'ring-1 ring-black/5'}`}
          >
            <img 
              src={ASSET_URL} 
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110"
              style={{ objectPosition: position }}
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-950/80' : 'from-black/60'} via-transparent to-transparent`} />
            <div className="absolute bottom-12 left-12 text-white">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                Active Ripple
              </div>
              <p className="text-4xl font-black">{title.split(' ').pop()}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      <Hero />
      
      {/* PARK SCENARIO - Top Left Quadrant */}
      <ScenarioSection 
        id="park"
        position="0% 0%"
        subtitle="Community Energy"
        title="The Morning Circle"
        description="Wellness is social. Sync your morning goals with your local park group instantly as you sit on the grass. NearBy Ripple Sync works without Wi-Fi, making connection as natural as the fresh air."
      />

      {/* GYM SCENARIO - Top Right Quadrant */}
      <ScenarioSection 
        id="gym"
        position="100% 0%"
        reverse={true}
        theme="dark"
        subtitle="Performance Sync"
        title="High-Intensity Gym Squad"
        description="Keep the momentum. Compare hydration stats with your training partners between sets. No cloud delays, just instant P2P accountability in the heat of the workout."
      />

      {/* DINNER TABLE SCENARIO - Bottom Left Quadrant */}
      <ScenarioSection 
        id="family"
        position="0% 100%"
        subtitle="Total Privacy"
        title="Family Table Insights"
        description="The dining table is a sacred space. Monitor your family's health securely at home. Children's data never touches a public server, syncing only to the devices in the room."
      />

      {/* RIPPLE BENEFITS BENTO */}
      <section className="py-32 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 tracking-tight">Built for Sovereignty</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              We combined modern social features with radical privacy. Your data, your rules.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                <ShieldCheck className="w-8 h-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Zero Server Architecture</h3>
              <p className="text-slate-600 leading-relaxed font-medium">No accounts. No logins. Your data lives in a local Realm database, encrypted on your hardware.</p>
            </div>
            
            <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                <Globe className="w-8 h-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cross-Platform Flow</h3>
              <p className="text-slate-600 leading-relaxed font-medium">iOS and Android devices handshake effortlessly through our custom Ripple protocol.</p>
            </div>

            <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                <Lock className="w-8 h-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Personal Backups</h3>
              <p className="text-slate-600 leading-relaxed font-medium">Optionally sync to your own personal Google Drive or iCloud. You hold the master keys.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-40 px-6 text-center relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-blue-400">
            <Droplets className="w-12 h-12 text-white animate-pulse" />
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-none">Stay Hydrated. <br/> Stay Private.</h2>
          <p className="text-2xl text-slate-500 mb-12 font-medium">Start your first Ripple today. Available for iOS and Android.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-slate-900 text-white px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:bg-blue-600 transition-all">
              Download Now
            </button>
            <button className="bg-white text-slate-900 border-2 border-slate-100 px-12 py-6 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-colors">
              Our Privacy Pledge
            </button>
          </div>
        </motion.div>
      </section>

      <footer className="py-16 border-t border-slate-100 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-8">
          <div className="flex items-center gap-3 text-slate-900 font-black text-xl">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            WaterTracker <span className="text-blue-600">Ripple</span>
          </div>
          <p className="text-slate-400 font-medium">© 2024 subraatakumar.com. All rights reserved.</p>
          <div className="flex gap-10 font-bold text-slate-900">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #ffffff;
        }
        ::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  );
}