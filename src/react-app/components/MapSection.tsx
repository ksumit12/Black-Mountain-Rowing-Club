import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation, Phone } from 'lucide-react';

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current && isInView) {
      // Initialize map centered on Red Shed, 45 John Cardiff Cl, Acton ACT 2601
      const map = L.map(mapRef.current).setView([-35.289722, 149.099917], 15);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Add a marker for Red Shed Rowing Club
      const marker = L.marker([-35.289722, 149.099917]).addTo(map);
      marker.bindPopup(`
        <div style="text-align: center; padding: 8px;">
          <h3 style="margin: 0 0 8px 0; color: #dc2626; font-size: 16px; font-weight: bold;">Red Shed Rowing Club</h3>
          <p style="margin: 0; color: #6b7280; font-size: 14px;">45 John Cardiff Cl, Acton ACT 2601</p>
        </div>
      `);

      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isInView]);

  return (
    <section id="location" ref={sectionRef} className="py-20 bg-gradient-to-br from-teal-100 to-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-semibold uppercase tracking-wide text-sm mb-4 block">
            LOCATION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Project Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located at the Red Shed (45 John Cardiff Cl, Acton ACT 2601), 
            our project serves the local rowing community in Canberra.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white shadow-lg overflow-hidden border border-gray-200 rounded-lg">
              <div 
                ref={mapRef} 
                className="w-full h-96 lg:h-[500px]"
                style={{ minHeight: '400px' }}
              />
            </div>
          </motion.div>

          {/* Location Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-gray-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    Red Shed Location
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm">
                    45 John Cardiff Cl<br />
                    Acton, ACT 2601<br />
                    Australia
                  </p>
                  <p className="text-sm text-gray-500">
                    The Red Shed provides an ideal environment for rowing activities 
                    and our digital tracking system development and testing.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                    <Navigation className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    Project Impact
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm">
                    Serving BMRC Community
                  </p>
                  <p className="text-sm text-gray-500">
                    Our digital boat tracking system directly benefits the 
                    Black Mountain Rowing Club members, providing modern 
                    solutions for boat management and safety monitoring.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-slate-700 p-6 text-white rounded-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 uppercase tracking-wide">
                    Emergency Contact
                  </h3>
                  <p className="text-slate-200 mb-4 text-sm">
                    For urgent on-water or shed safety matters, contact the 
                    BMRC duty officer/coach on site rather than email.
                  </p>
                  <button className="bg-white text-slate-700 px-4 py-2 rounded font-medium hover:bg-slate-50 transition-colors text-sm uppercase tracking-wide">
                    Safety Information
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
