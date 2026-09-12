# OxygenHMS Project Structure

## Directory Layout

```
oxygenhms/
│
├── backend/                          # Backend API Server
│   ├── config/
│   │   ├── database.js              # MongoDB connection
│   │   ├── environment.js           # Environment config
│   │   └── constants.js             # App constants
│   │
│   ├── models/                      # Database Models
│   │   ├── User.js                  # User model with roles
│   │   ├── Patient.js               # Patient information
│   │   ├── Doctor.js                # Doctor details
│   │   ├── Appointment.js           # Appointment scheduling
│   │   ├── Prescription.js          # Medical prescriptions
│   │   ├── Medication.js            # Medication master
│   │   ├── LabTest.js               # Laboratory tests
│   │   ├── Radiology.js             # Radiology reports
│   │   ├── Pharmacy.js              # Pharmacy inventory
│   │   ├── Bill.js                  # Billing information
│   │   ├── Ward.js                  # Ward management
│   │   ├── OT.js                    # Operation Theater
│   │   ├── ERCase.js                # Emergency cases
│   │   ├── Staff.js                 # Staff information
│   │   └── Department.js            # Department master
│   │
│   ├── routes/                      # API Routes
│   │   ├── auth.js                  # Authentication routes
│   │   ├── admin.js                 # Admin routes
│   │   ├── doctor.js                # Doctor routes
│   │   ├── nurse.js                 # Nurse routes
│   │   ├── receptionist.js          # Receptionist routes
│   │   ├── lab.js                   # Lab routes
│   │   ├── pharmacy.js              # Pharmacy routes
│   │   ├── billing.js               # Billing routes
│   │   ├── radiology.js             # Radiology routes
│   │   ├── ot.js                    # OT routes
│   │   ├── emergency.js             # Emergency routes
│   │   ├── hr.js                    # HR routes
│   │   ├── inventory.js             # Inventory routes
│   │   ├── scheduling.js            # Scheduling routes
│   │   └── patient.js               # Patient routes
│   │
│   ├── controllers/                 # Business Logic
│   │   ├── authController.js        # Auth logic
│   │   ├── adminController.js       # Admin logic
│   │   ├── doctorController.js      # Doctor logic
│   │   ├── nurseController.js       # Nurse logic
│   │   ├── receptionistController.js # Receptionist logic
│   │   ├── labController.js         # Lab logic
│   │   ├── pharmacyController.js    # Pharmacy logic
│   │   ├── billingController.js     # Billing logic
│   │   ├── radiologyController.js   # Radiology logic
│   │   ├── otController.js          # OT logic
│   │   ├── emergencyController.js   # Emergency logic
│   │   ├── hrController.js          # HR logic
│   │   ├── inventoryController.js   # Inventory logic
│   │   └── patientController.js     # Patient logic
│   │
│   ├── middlewares/
│   │   ├── auth.js                  # Authentication middleware
│   │   ├── authorization.js         # Role-based authorization
│   │   ├── errorHandler.js          # Error handling
│   │   └── validation.js            # Request validation
│   │
│   ├── services/                    # Business Services
│   │   ├── emailService.js          # Email notifications
│   │   ├── smsService.js            # SMS notifications
│   │   ├── reportService.js         # Report generation
│   │   └── searchService.js         # Search functionality
│   │
│   ├── utils/
│   │   ├── logger.js                # Logging utility
│   │   ├── validators.js            # Validation helpers
│   │   └── helpers.js               # Common utilities
│   │
│   └── server.js                    # Main server file
│
├── frontend/                        # Frontend Application
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── components/              # Reusable components
│   │   │   ├── Common/
│   │   │   │   ├── Header.js
│   │   │   │   ├── Sidebar.js
│   │   │   │   ├── Footer.js
│   │   │   │   └── Navigation.js
│   │   │   ├── Form/
│   │   │   │   ├── FormInput.js
│   │   │   │   ├── FormSelect.js
│   │   │   │   ├── FormDate.js
│   │   │   │   └── FormButton.js
│   │   │   ├── Modal/
│   │   │   │   ├── ConfirmModal.js
│   │   │   │   ├── FormModal.js
│   │   │   │   └── InfoModal.js
│   │   │   ├── Table/
│   │   │   │   ├── DataTable.js
│   │   │   │   ├── Pagination.js
│   │   │   │   └── TableFilters.js
│   │   │   └── Dashboard/
│   │   │       ├── StatCard.js
│   │   │       ├── Chart.js
│   │   │       └── ActivityFeed.js
│   │   │
│   │   ├── modules/                 # Module-specific components
│   │   │   ├── Admin/
│   │   │   │   ├── AdminDashboard.js
│   │   │   │   ├── UserManagement.js
│   │   │   │   ├── TenantConfig.js
│   │   │   │   └── SystemSettings.js
│   │   │   │
│   │   │   ├── Doctor/
│   │   │   │   ├── DoctorDashboard.js
│   │   │   │   ├── OPDManagement.js
│   │   │   │   ├── IPDManagement.js
│   │   │   │   ├── PrescriptionForm.js
│   │   │   │   └── PatientList.js
│   │   │   │
│   │   │   ├── Nurse/
│   │   │   │   ├── NurseDashboard.js
│   │   │   │   ├── WardManagement.js
│   │   │   │   ├── MedicationChart.js
│   │   │   │   └── BedMangement.js
│   │   │   │
│   │   │   ├── Receptionist/
│   │   │   │   ├── ReceptionistDashboard.js
│   │   │   │   ├── AppointmentBooking.js
│   │   │   │   ├── PatientRegistration.js
│   │   │   │   ├── CheckIn.js
│   │   │   │   └── BillingFront.js
│   │   │   │
│   │   │   ├── Lab/
│   │   │   │   ├── LabDashboard.js
│   │   │   │   ├── TestOrders.js
│   │   │   │   ├── SampleCollection.js
│   │   │   │   └── TestResults.js
│   │   │   │
│   │   │   ├── Pharmacy/
│   │   │   │   ├── PharmacyDashboard.js
│   │   │   │   ├── PrescriptionDispensing.js
│   │   │   │   ├── Inventory.js
│   │   │   │   └── DrugMaster.js
│   │   │   │
│   │   │   ├── Billing/
│   │   │   │   ├── BillingDashboard.js
│   │   │   │   ├── InvoiceGeneration.js
│   │   │   │   ├── PaymentTracking.js
│   │   │   │   └── InsuranceClaims.js
│   │   │   │
│   │   │   ├── Radiology/
│   │   │   │   ├── RadiologyDashboard.js
│   │   │   │   ├── ImagingOrders.js
│   │   │   │   ├── ReportGeneration.js
│   │   │   │   └── ImageViewer.js
│   │   │   │
│   │   │   ├── OT/
│   │   │   │   ├── OTDashboard.js
│   │   │   │   ├── ScheduleOT.js
│   │   │   │   ├── RoomAllocation.js
│   │   │   │   └── TeamAssignment.js
│   │   │   │
│   │   │   ├── Emergency/
│   │   │   │   ├── ERDashboard.js
│   │   │   │   ├── TriageForm.js
│   │   │   │   ├── AmbulanceTracking.js
│   │   │   │   └── CaseManagement.js
│   │   │   │
│   │   │   ├── HR/
│   │   │   │   ├── HRDashboard.js
│   │   │   │   ├── StaffManagement.js
│   │   │   │   ├── Attendance.js
│   │   │   │   └── Payroll.js
│   │   │   │
│   │   │   ├── Inventory/
│   │   │   │   ├── InventoryDashboard.js
│   │   │   │   ├── StockManagement.js
│   │   │   │   ├── ProcurementOrders.js
│   │   │   │   └── SupplyChain.js
│   │   │   │
│   │   │   ├── Scheduling/
│   │   │   │   ├── SchedulingDashboard.js
│   │   │   │   ├── StaffSchedule.js
│   │   │   │   └── ResourceAllocation.js
│   │   │   │
│   │   │   └── CRM/
│   │   │       ├── CRMDashboard.js
│   │   │       ├── PatientInteraction.js
│   │   │       └── FeedbackManagement.js
│   │   │
│   │   ├── pages/                   # Page components
│   │   │   ├── LoginPage.js
│   │   │   ├── DashboardPage.js
│   │   │   ├── NotFoundPage.js
│   │   │   └── ErrorPage.js
│   │   │
│   │   ├── services/                # API services
│   │   │   ├── api.js               # Axios instance
│   │   │   ├── authService.js
│   │   │   ├── patientService.js
│   │   │   ├── doctorService.js
│   │   │   ├── appointmentService.js
│   │   │   ├── prescriptionService.js
│   │   │   ├── billingService.js
│   │   │   └── ... (other services)
│   │   │
│   │   ├── store/                   # Redux/Context store
│   │   │   ├── authSlice.js
│   │   │   ├── userSlice.js
│   │   │   ├── patientSlice.js
│   │   │   ├── appointmentSlice.js
│   │   │   └── store.js
│   │   │
│   │   ├── hooks/                   # Custom hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useFetch.js
│   │   │   └── useForm.js
│   │   │
│   │   ├── utils/                   # Utilities
│   │   │   ├── constants.js
│   │   │   ├── formatters.js
│   │   │   ├── validators.js
│   │   │   └── helpers.js
│   │   │
│   │   ├── styles/                  # Global styles
│   │   │   ├── index.css
│   │   │   ├── variables.css
│   │   │   └── tailwind.css
│   │   │
│   │   ├── App.js                   # Main App component
│   │   └── index.js                 # Entry point
│   │
│   ├── .env.example
│   ├── .eslintrc.json
│   ├── tailwind.config.js
│   └── package.json
│
├── docs/                            # Documentation
│   ├── API_DOCUMENTATION.md
│   ├── DATABASE_SCHEMA.md
│   ├── USER_ROLES.md
│   ├── INSTALLATION.md
│   ├── DEPLOYMENT.md
│   └── MODULE_GUIDES.md
│
├── tests/                           # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.example                     # Environment variables template
├── .gitignore
├── .eslintrc.json
├── package.json
├── README.md
├── CONTRIBUTING.md
└── LICENSE
```

## Module Responsibilities

### Backend
- Handles all business logic
- Database operations
- API endpoints
- Authentication and authorization
- Data validation
- Error handling

### Frontend
- User interface
- Form management
- State management
- API communication
- User experience
- Responsive design

## Naming Conventions

- **Files**: camelCase.js
- **Components**: PascalCase.js
- **Functions**: camelCase()
- **Constants**: UPPER_SNAKE_CASE
- **Variables**: camelCase
