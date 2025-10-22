# Digital Boat Tracker - Black Mountain Rowing Club

A modern, comprehensive digital boat tracking system designed for the Black Mountain Rowing Club. This system provides real-time boat location monitoring, usage analytics, and automated notifications through innovative BLE beacon technology.

## Live Demo

**System Demo**: [http://172.20.10.12:5000/](http://172.20.10.12:5000/)
> **Note**: Device must be on the same network as the Raspberry Pi to access the demo

## Project Overview

The Digital Boat Tracker system modernizes boat tracking for the Black Mountain Rowing Club through:

- **Real-time Detection**: Automatic boat location detection using BLE beacons
- **Comprehensive Analytics**: Historical usage reports and data export capabilities
- **Automated Notifications**: Lock-up alerts and status updates
- **Multi-platform Access**: Responsive web interface for mobile and desktop
- **Secure & Reliable**: HTTPS encryption with offline-capable local database

## Requirements Implementation

Our system implements **15/15 software requirements (100% compliance)**:

### Core Features
- **R1**: Automatic location detection (BLE beacon scanning)
- **R2**: Real-time status display (1-second updates)
- **R3**: Boat usage logging (entry/exit/duration tracking)
- **R4**: Lock-up notifications (overdue alerts)
- **R5**: Profile management (3-click beacon registration)

### System Reliability
- **R6**: Network resilience (offline SQLite database)
- **R7**: Multiple boat profiles (API management)
- **R8**: Secure data storage (HTTPS + encryption)
- **R9**: Data retention (90+ days storage)

### User Experience
- **R10**: User documentation (README, setup guides)
- **R11**: Cost-effective design (~$150 total hardware)
- **R12**: Historical analytics (reports + CSV export)
- **R13**: Multi-platform access (responsive design)
- **R14**: Privacy protection (no personal data)
- **R15**: No system interference (standard BLE)

## Technical Architecture

### Key Components
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Python Flask API server
- **Database**: SQLite with local storage
- **Hardware**: Raspberry Pi 4 + BLE beacons
- **Security**: HTTPS with SSL certificates

### Core Scripts
| Script | Purpose |
|--------|---------|
| `ble_scanner.py` | Scans for BLE beacons, posts detections |
| `api_server.py` | Processes detections, logs events, manages API |
| `boat_tracking_system.py` | Web dashboard, reports, admin functions |
| `app/database_models.py` | Database operations, event logging |
| `start_single_scanner_demo.sh` | Starts entire system |
| `enable_security.sh` | Enables HTTPS + encryption |

## Website Features

The project includes a comprehensive website showcasing:

- **Hero Section**: Project introduction with animated rowing visualization
- **About Section**: Detailed project background and objectives
- **Project Section**: System features and functional flow block diagram
- **Requirements Section**: Complete implementation compliance overview
- **Timeline Section**: Project development milestones
- **Simulation Results**: Performance analysis and testing results
- **Team Section**: Development team information
- **Map Section**: Location and contact information
- **Footer**: Quick links, resources, and System Demo access

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- Python 3.8+
- Raspberry Pi 4 (for hardware deployment)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ksumit12/Black-Mountain-Rowing-Club.git
   cd Black-Mountain-Rowing-Club
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Access the website**
   - Open [http://localhost:5173](http://localhost:5173) in your browser

### Production Build
```bash
npm run build
```

## Project Structure

```
Black-Mountain-Rowing-Club/
├── src/
│   ├── react-app/           # Frontend React application
│   │   ├── components/       # React components
│   │   │   ├── AboutSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── ProjectSection.tsx
│   │   │   ├── RequirementsSection.tsx  # NEW: Requirements compliance
│   │   │   └── ...
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   └── main.tsx
│   ├── shared/              # Shared types and utilities
│   └── worker/              # Web worker implementations
├── public/                  # Static assets
├── package.json
├── vite.config.ts
└── README.md
```

## Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_URL=http://172.20.10.12:5000
VITE_APP_TITLE=Digital Boat Tracker
```

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`.

## Performance Metrics

- **Software Requirements**: 15/15 = 100%
- **Hardware Requirements**: 2/2 (procurement specifications)
- **Total Compliance**: 15/17 = 88.2% (100% for software)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Team

Developed by the Digital Boat Tracker team for the Black Mountain Rowing Club.

## Support


- **System Demo**: [http://172.20.10.12:5000/](http://172.20.10.12:5000/) (requires same network as RPi)
- **GitHub Issues**: [Report issues](https://github.com/ksumit12/Black-Mountain-Rowing-Club/issues)

---

**Built with ❤️ for the Black Mountain Rowing Club**

## Creator

**Designed, developed, and maintained entirely by [Sumit Khobragade](https://github.com/ksumit12)**

*This complete system - from frontend to backend, hardware integration to deployment - represents my individual work and dedication to modernizing boat tracking for the Black Mountain Rowing Club.*
