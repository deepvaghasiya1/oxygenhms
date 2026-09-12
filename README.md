# OxygenHMS - Hospital Management System

## Overview

OxygenHMS is a comprehensive, web-based Hospital Management System designed to automate and streamline all core hospital operations across multiple departments and user roles.

## Key Modules

### Clinical Modules
- **Administrator** - Full system access and tenant-wide configuration
- **Doctor** - OPD/IPD management, prescriptions, orders and clinical workflow
- **Nurse** - Ward management, medications and bedside care
- **Radiologist** - Radiology worklists, reporting and imaging coordination
- **Lab Technician** - Lab worklists, sample flow and verification

### Operational Modules
- **Receptionist** - Patient registration, appointments, check-in and billing
- **OT Coordinator** - OT scheduling, rooms, teams and peri-op workflow
- **Emergency/ER** - Triage, cases, observation and ambulance workflow
- **Scheduling** - Staff and resource scheduling system

### Support Modules
- **Pharmacist** - Dispensing, drug master and pharmacy inventory
- **Billing & Finance** - Billing operations, revenue tracking and insurance
- **Inventory Manager** - Stock, procurement and supply chain control
- **HR & Staff** - Staff operations, attendance and workforce planning
- **Dialysis Unit** - Dialysis sessions and consumables management
- **CRM & Patient Relations** - Patient relationship management

## Features

✅ Multi-role user management (Administrator, Doctor, Nurse, Receptionist, etc.)
✅ Patient management and medical records
✅ Appointment scheduling system
✅ OPD/IPD workflow management
✅ Prescription and medication management
✅ Laboratory management
✅ Radiology management
✅ Pharmacy inventory
✅ Billing and invoicing
✅ Staff scheduling
✅ Emergency/ER management
✅ Role-based access control (RBAC)
✅ Real-time notifications
✅ Secure authentication

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT with bcrypt
- **Validation**: Express Validator

### Frontend
- **Framework**: React.js / Next.js
- **State Management**: Redux/Context API
- **Styling**: Tailwind CSS
- **UI Components**: Custom + Material-UI

## Project Structure

```
oxygenhms/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── modules/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
├── docs/
├── tests/
└── README.md
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Setup

1. Clone the repository
```bash
git clone https://github.com/deepvaghasiya1/oxygenhms.git
cd oxygenhms
```

2. Install dependencies
```bash
npm install
cd frontend && npm install && cd ..
```

3. Configure environment variables
```bash
cp .env.example .env
```

4. Start the application
```bash
npm run dev
```

## Documentation

See the [Documentation](./docs/) folder for:
- API Documentation
- Database Schema
- User Role Permissions
- Module-specific guides

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

MIT License - see [LICENSE](./LICENSE) file for details

## Support

For support, email support@oxygenhms.com or open an issue on GitHub.
